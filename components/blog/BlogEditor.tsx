"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
    Loader2,
    Save,
    X,
    Image as ImageIcon,
    Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RichTextEditor } from "@/components/rich-text-editor";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
    useCreateBlog,
    useUpdateBlog,
    useUploadBlogFeaturedImage,
    useUploadBlogContentImage,
} from "@/hooks/useBlog";
import { Separator } from "@/components/ui/separator";
import type { Blog, BlogStatus } from "@/types/blog.types";
import { Badge } from "@/components/ui/badge";

interface BlogEditorProps {
    businessId: string;
    mode: "create" | "edit";
    initialData?: Blog;
}

export function BlogEditor({ businessId, mode, initialData }: BlogEditorProps) {
    const router = useRouter();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const createBlog = useCreateBlog();
    const updateBlog = useUpdateBlog();
    const uploadFeaturedImage = useUploadBlogFeaturedImage();
    const uploadContentImage = useUploadBlogContentImage();

    const [formData, setFormData] = useState({
        title: initialData?.title || "",
        slug: initialData?.slug || "",
        content: initialData?.content || "",
        excerpt: initialData?.excerpt || "",
        category: initialData?.category || "",
        status: (initialData?.status || "draft") as BlogStatus,
    });

    const [featuredImageFile, setFeaturedImageFile] = useState<File | null>(null);
    const [featuredImagePreview, setFeaturedImagePreview] = useState<string | null>(
        initialData?.featuredImage || null
    );
    const [errors, setErrors] = useState<Record<string, string>>({});

    // For create mode, we might create a draft first for image uploads
    const [activeBlogId, setActiveBlogId] = useState<string | null>(
        initialData?._id || null
    );

    const isSubmitting =
        createBlog.isPending ||
        updateBlog.isPending ||
        uploadFeaturedImage.isPending;

    // Auto-generate slug from title if slug hasn't been manually touched
    // Only for create mode or if slug is empty
    const [slugManuallyEdited, setSlugManuallyEdited] = useState(
        mode === "edit"
    );

    const generateSlug = (title: string) => {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .trim();
    };

    const handleTitleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const title = e.target.value;
        setFormData((prev) => {
            const updates = { ...prev, title };
            if (!slugManuallyEdited && mode === "create") {
                updates.slug = generateSlug(title);
            }
            return updates;
        });
        if (errors.title) {
            setErrors((prev) => ({ ...prev, title: "" }));
        }
    };

    const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSlugManuallyEdited(true);
        setFormData((prev) => ({ ...prev, slug: e.target.value }));
        if (errors.slug) {
            setErrors((prev) => ({ ...prev, slug: "" }));
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const handleStatusChange = (value: BlogStatus) => {
        setFormData((prev) => ({ ...prev, status: value }));
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const allowedTypes = [
                "image/jpeg",
                "image/png",
                "image/webp",
                "image/gif",
            ];
            if (!allowedTypes.includes(file.type)) {
                setErrors((prev) => ({
                    ...prev,
                    featuredImage:
                        "Invalid file type. Please select a JPEG, PNG, WebP, or GIF image.",
                }));
                return;
            }

            if (file.size > 5 * 1024 * 1024) {
                setErrors((prev) => ({
                    ...prev,
                    featuredImage: "File is too large. Maximum size is 5MB.",
                }));
                return;
            }

            setFeaturedImageFile(file);
            setErrors((prev) => ({ ...prev, featuredImage: "" }));

            const previewUrl = URL.createObjectURL(file);
            setFeaturedImagePreview(previewUrl);
        }
    };

    const handleRemoveImage = () => {
        setFeaturedImageFile(null);
        if (featuredImagePreview && !featuredImagePreview.startsWith("http")) {
            URL.revokeObjectURL(featuredImagePreview);
        }
        setFeaturedImagePreview(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.title.trim()) {
            newErrors.title = "Title is required";
        }
        if (!formData.slug.trim()) {
            newErrors.slug = "Slug is required";
        } else if (!/^[a-z0-9-]+$/.test(formData.slug)) {
            newErrors.slug = "Slug must be lowercase with hyphens only";
        }
        if (!formData.content.trim()) {
            newErrors.content = "Content is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();

        if (!validateForm()) {
            // Find the first error and scroll to it if possible, strictly for UX
            const firstErrorKey = Object.keys(validateForm())[0];
            if (firstErrorKey === "title" && titleTextareaRef.current) {
                titleTextareaRef.current.focus();
            }
            return;
        }

        try {
            let blogId = activeBlogId;

            if (mode === "create") {
                if (!blogId) {
                    const newBlog = await createBlog.mutateAsync({
                        title: formData.title,
                        slug: formData.slug,
                        content: formData.content,
                        excerpt: formData.excerpt || undefined,
                        category: formData.category || undefined,
                        businessId,
                        status: formData.status,
                    });
                    blogId = newBlog._id || null;
                    setActiveBlogId(blogId);
                } else {
                    // If we already have a draft ID (from image upload), update it instead of creating new
                    await updateBlog.mutateAsync({
                        id: blogId,
                        data: {
                            title: formData.title,
                            slug: formData.slug,
                            content: formData.content,
                            excerpt: formData.excerpt || undefined,
                            category: formData.category || undefined,
                            status: formData.status,
                        }
                    })
                }
            } else {
                // Update mode
                if (blogId) {
                    await updateBlog.mutateAsync({
                        id: blogId,
                        data: {
                            title: formData.title,
                            slug: formData.slug,
                            content: formData.content,
                            excerpt: formData.excerpt || undefined,
                            category: formData.category || undefined,
                            status: formData.status,
                        }
                    })
                }
            }

            // Handle Image Upload
            if (featuredImageFile && blogId) {
                await uploadFeaturedImage.mutateAsync({
                    id: blogId,
                    file: featuredImageFile,
                });
            }

            if (mode === 'create') {
                router.push(`/business/${businessId}/blog`);
            }

        } catch (error) {
            console.error("Failed to save blog:", error);
        }
    };

    // Handle content image upload
    const handleContentImageUpload = async (file: File): Promise<string> => {
        // If blog hasn't been created yet, create it first as draft
        let blogId = activeBlogId;

        if (!blogId) {
            try {
                // Generate a unique slug for auto-created drafts
                const draftSlug =
                    formData.slug ||
                    `draft-${Date.now()}-${Math.random().toString(36).substring(7)}`;

                const newBlog = await createBlog.mutateAsync({
                    title: formData.title || "Untitled Draft",
                    slug: draftSlug,
                    content: formData.content || "<p>Draft content...</p>",
                    excerpt: formData.excerpt || undefined,
                    category: formData.category || undefined,
                    businessId,
                    status: "draft",
                });
                blogId = newBlog._id || null;
                setActiveBlogId(blogId);

                // Update slug in form if it was auto-generated
                if (!formData.slug) {
                    setFormData((prev) => ({ ...prev, slug: draftSlug }));
                }
            } catch (error) {
                console.error("Failed to create blog for image upload:", error);
                throw new Error("Failed to create blog for image upload");
            }
        }

        if (!blogId) {
            throw new Error("Blog ID is required for image upload");
        }

        try {
            // Upload the image
            const response = await uploadContentImage.mutateAsync({
                id: blogId,
                file,
            });

            return response.url;
        } catch (error) {
            console.error("Failed to upload content image:", error);
            throw error;
        }
    };

    // Auto-resize textarea for title
    const titleTextareaRef = useRef<HTMLTextAreaElement>(null);
    useEffect(() => {
        if (titleTextareaRef.current) {
            titleTextareaRef.current.style.height = "auto";
            titleTextareaRef.current.style.height =
                titleTextareaRef.current.scrollHeight + "px";
        }
    }, [formData.title]);

    // Set initial height on mount
    useEffect(() => {
        if (titleTextareaRef.current) {
            titleTextareaRef.current.style.height = "auto";
            titleTextareaRef.current.style.height =
                titleTextareaRef.current.scrollHeight + "px";
        }
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-background">
            {/* Header handled by parent if needed, or we can include sticky header here */}
            <header className="sticky top-14 z-40 bg-background/80 backdrop-blur-md border-b">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        {/* Back button handled by parent layout usually, but included here for completeness of the editor bar */}
                        <div className="flex items-center gap-2">
                            <Badge
                                variant={
                                    formData.status === "published" ? "default" : "secondary"
                                }
                                className="rounded-sm font-normal text-xs uppercase tracking-wider"
                            >
                                {formData.status}
                            </Badge>
                            {mode === 'edit' && initialData && (
                                <p className="text-xs text-muted-foreground hidden sm:block">
                                    Last saved: {new Date(initialData.updatedAt).toLocaleTimeString()}
                                </p>
                            )}
                        </div>

                    </div>

                    <div className="flex items-center gap-2">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-muted-foreground hover:text-foreground"
                            onClick={() => router.push(`/business/${businessId}/blog`)}
                            disabled={isSubmitting}
                        >
                            {mode === 'create' ? "Discard" : "Cancel"}
                        </Button>
                        <div className="h-4 w-[1px] bg-border mx-1" />
                        <div className="flex items-center bg-muted/50 rounded-md p-1 border border-border/50">
                            <Select
                                value={formData.status}
                                onValueChange={handleStatusChange}
                                disabled={isSubmitting}
                            >
                                <SelectTrigger className="h-7 w-[110px] border-none shadow-none bg-transparent focus:ring-0 text-xs uppercase font-medium text-muted-foreground">
                                    <SelectValue placeholder="Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="draft">Draft</SelectItem>
                                    <SelectItem value="published">Published</SelectItem>
                                </SelectContent>
                            </Select>
                            <div className="w-[1px] h-4 bg-border/50 mx-1" />
                            <Button
                                size="sm"
                                className="h-7 px-3 shadow-none text-xs font-semibold"
                                onClick={() => handleSubmit()}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <Loader2 className="h-3 w-3 animate-spin mr-1" />
                                ) : (
                                    <Save className="h-3 w-3 mr-1" />
                                )}
                                {formData.status === "published" ? "Publish" : "Save"}
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="flex-1 w-full max-w-[1600px] mx-auto p-4 sm:px-6 py-8">
                <div className="grid grid-cols-12 gap-8 lg:gap-12">
                    {/* Left Column: Editor */}
                    <div className="col-span-12 lg:col-span-8 xl:col-span-9 space-y-6">
                        <div className="space-y-4">
                            {/* Title Input */}
                            <textarea
                                ref={titleTextareaRef}
                                name="title"
                                placeholder="Post Title"
                                value={formData.title}
                                onChange={handleTitleChange}
                                className="w-full resize-none overflow-hidden bg-transparent text-4xl lg:text-5xl font-bold tracking-tight placeholder:text-muted-foreground/40 focus:outline-none border-none p-0"
                                rows={1}
                                disabled={isSubmitting}
                            />
                            {errors.title && (
                                <p className="text-sm text-destructive font-medium">
                                    {errors.title}
                                </p>
                            )}

                            {/* Slug Preview */}
                            {formData.slug && (
                                <div className="flex items-center gap-2 text-sm text-muted-foreground/60 font-mono">
                                    <Globe className="h-3 w-3" />
                                    <span>/{formData.slug}</span>
                                </div>
                            )}
                        </div>

                        <div className="min-h-[500px]">
                            <RichTextEditor
                                content={formData.content}
                                onChange={(content) => {
                                    setFormData((prev) => ({ ...prev, content }));
                                    if (errors.content) {
                                        setErrors((prev) => ({ ...prev, content: "" }));
                                    }
                                }}
                                placeholder="Tell your story..."
                                disabled={isSubmitting}
                                blogId={activeBlogId || undefined}
                                onImageUpload={handleContentImageUpload}
                                className={cn(
                                    "min-h-[500px] border-none focus:ring-0 px-0",
                                    errors.content ? "border-destructive/50" : "",
                                )}
                            />
                            {errors.content && (
                                <p className="text-sm text-destructive mt-2">
                                    {errors.content}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Settings */}
                    <div className="col-span-12 lg:col-span-4 xl:col-span-3">
                        <div className="sticky top-24 space-y-8">
                            {/* Section: Featured Image */}
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <Label className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">
                                        Featured Image
                                    </Label>
                                </div>

                                <div
                                    className={cn(
                                        "group relative flex aspect-video w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-lg border border-dashed border-border bg-muted/20 hover:bg-muted/40 transition-all",
                                        featuredImagePreview ? "border-solid border-border/50" : "",
                                    )}
                                    onClick={() => !isSubmitting && fileInputRef.current?.click()}
                                >
                                    {featuredImagePreview ? (
                                        <>
                                            <img
                                                src={featuredImagePreview}
                                                alt="Preview"
                                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <span className="text-white text-xs font-medium">
                                                    Change Image
                                                </span>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleRemoveImage();
                                                }}
                                                className="absolute right-2 top-2 h-6 w-6 rounded-full bg-background/80 text-foreground backdrop-blur-sm flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground transition-colors"
                                            >
                                                <X className="h-3 w-3" />
                                            </button>
                                        </>
                                    ) : (
                                        <div className="flex flex-col items-center gap-2 text-muted-foreground/60 group-hover:text-muted-foreground transition-colors">
                                            <ImageIcon className="h-8 w-8" />
                                            <span className="text-xs">Add Cover</span>
                                        </div>
                                    )}
                                </div>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileSelect}
                                    className="hidden"
                                />
                                {errors.featuredImage && (
                                    <p className="text-[10px] text-destructive font-medium">
                                        {errors.featuredImage}
                                    </p>
                                )}
                            </div>

                            <Separator />

                            {/* Section: Post Settings */}
                            <div className="space-y-6">
                                <Label className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">
                                    Post Settings
                                </Label>

                                <div className="space-y-3">
                                    <Label htmlFor="slug" className="text-xs">
                                        URL Slug
                                    </Label>
                                    <Input
                                        id="slug"
                                        value={formData.slug}
                                        onChange={handleSlugChange}
                                        className="h-8 font-mono text-xs"
                                        placeholder="url-slug"
                                    />
                                    {errors.slug && (
                                        <p className="text-[10px] text-destructive">
                                            {errors.slug}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-3">
                                    <Label htmlFor="excerpt" className="text-xs">
                                        Excerpt
                                    </Label>
                                    <Textarea
                                        id="excerpt"
                                        name="excerpt"
                                        value={formData.excerpt}
                                        onChange={handleChange}
                                        className="min-h-[100px] text-sm resize-none"
                                        placeholder="Brief description for social cards..."
                                    />
                                </div>

                                <div className="space-y-3">
                                    <Label htmlFor="category" className="text-xs">
                                        Category
                                    </Label>
                                    <Input
                                        id="category"
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        placeholder="e.g. Technology"
                                        className="h-8 text-sm"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
