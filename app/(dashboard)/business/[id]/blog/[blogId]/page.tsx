"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
    ArrowLeft,
    Loader2,
    FileText,
    MessageSquare,
    User,
    CheckCircle2,
    XCircle,
    Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useBlogById } from "@/hooks/useBlog";
import { useComments, useApproveComment, useDeleteComment } from "@/hooks/useComment";
import type { CommentWithLead } from "@/types/comment.types";
import { BlogEditor } from "@/components/blog/BlogEditor";
import { CommentsTable } from "@/components/blog/CommentsTable";
import { cn } from "@/lib/utils";

export default function BlogDetailPage() {
    const params = useParams();
    const router = useRouter();
    const businessId = params.id as string;
    const blogId = params.blogId as string;

    const [activeTab, setActiveTab] = useState<"edit" | "comments">("edit");
    const [deleteCommentId, setDeleteCommentId] = useState<string | null>(null);

    // Fetch blog data
    const { data: blog, isLoading: isBlogLoading, isError: isBlogError } = useBlogById(blogId);

    // Fetch comments for this blog
    const { data: commentsResponse, isLoading: isCommentsLoading } = useComments({
        blogId,
        page: 1,
        limit: 100,
    });

    // Mutations
    const approveCommentMutation = useApproveComment();
    const deleteCommentMutation = useDeleteComment();

    // Handlers
    const handleApproveToggle = (comment: CommentWithLead) => {
        approveCommentMutation.mutate({
            id: comment._id,
            data: { isApproved: !comment.isApproved },
        });
    };

    const handleDeleteComment = () => {
        if (deleteCommentId) {
            deleteCommentMutation.mutate(deleteCommentId, {
                onSuccess: () => {
                    setDeleteCommentId(null);
                },
            });
        }
    };

    // Loading state
    if (isBlogLoading) {
        return (
            <div className="flex h-screen items-center justify-center bg-background">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
        );
    }

    // Error state
    if (isBlogError || !blog) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center bg-background p-8 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10">
                    <FileText className="h-10 w-10 text-destructive" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">Blog Not Found</h3>
                <p className="mt-2 text-base text-muted-foreground">
                    The blog you're looking for doesn't exist or has been deleted.
                </p>
                <Button
                    onClick={() => router.push(`/business/${businessId}/blog`)}
                    className="mt-4"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blogs
                </Button>
            </div>
        );
    }

    const comments = commentsResponse?.data || [];
    const approvedCount = comments.filter((c) => c.isApproved).length;
    const pendingCount = comments.filter((c) => !c.isApproved).length;

    return (
        <div className="flex flex-col min-h-screen bg-background">
            {/* Sticky Header with Tabs */}
            <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
                    <div className="h-14 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => router.push(`/business/${businessId}/blog`)}
                                title="Back to Blogs"
                            >
                                <ArrowLeft className="h-4 w-4" />
                            </Button>
                            <div className="h-4 w-[1px] bg-border" />
                            <h1 className="text-sm font-semibold truncate max-w-[200px] sm:max-w-[400px]">
                                {blog.title}
                            </h1>
                        </div>
                    </div>
                    {/* Tabs Navigation in Header */}
                    <div className="flex items-center gap-6 -mb-[1px]">
                        <button
                            onClick={() => setActiveTab("edit")}
                            className={cn(
                                "flex items-center gap-2 py-3 text-sm font-medium border-b-2 transition-colors",
                                activeTab === "edit"
                                    ? "border-primary text-foreground"
                                    : "border-transparent text-muted-foreground hover:text-foreground"
                            )}
                        >
                            <FileText className="h-4 w-4" />
                            Editor
                        </button>
                        <button
                            onClick={() => setActiveTab("comments")}
                            className={cn(
                                "flex items-center gap-2 py-3 text-sm font-medium border-b-2 transition-colors",
                                activeTab === "comments"
                                    ? "border-primary text-foreground"
                                    : "border-transparent text-muted-foreground hover:text-foreground"
                            )}
                        >
                            <MessageSquare className="h-4 w-4" />
                            Comments
                            {pendingCount > 0 && (
                                <Badge variant="destructive" className="h-5 px-1.5 text-[10px] rounded-full">
                                    {pendingCount}
                                </Badge>
                            )}
                        </button>
                    </div>
                </div>
            </header>

            <main className="flex-1 w-full max-w-[1600px] mx-auto">
                {activeTab === "edit" ? (
                    <div className={cn("h-full", activeTab !== "edit" && "hidden")}>

                        <BlogEditor
                            businessId={businessId}
                            mode="edit"
                            initialData={blog}
                        />
                    </div>
                ) : (
                    /* Comments View */
                    <div className="p-4 sm:px-6 py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {/* Summary Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            <Card>
                                <CardContent className="p-6 flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <MessageSquare className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">Total Comments</p>
                                        <h3 className="text-2xl font-bold">{comments.length}</h3>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6 flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                                        <CheckCircle2 className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">Approved</p>
                                        <h3 className="text-2xl font-bold">{approvedCount}</h3>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6 flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                                        <Loader2 className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">Pending</p>
                                        <h3 className="text-2xl font-bold">{pendingCount}</h3>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <Card>
                            <CardHeader>
                                <CardTitle>Comment Moderation</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CommentsTable
                                    comments={comments}
                                    isLoading={isCommentsLoading}
                                    onApproveToggle={handleApproveToggle}
                                    onDelete={(id) => setDeleteCommentId(id)}
                                    isActionLoading={approveCommentMutation.isPending || deleteCommentMutation.isPending}
                                />
                            </CardContent>
                        </Card>
                    </div>
                )}
            </main>

            {/* Delete Confirmation Dialog */}
            <AlertDialog open={!!deleteCommentId} onOpenChange={() => setDeleteCommentId(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete Comment</AlertDialogTitle>
                        <AlertDialogDescription>
                            Are you sure you want to delete this comment? This action cannot be undone.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={handleDeleteComment}
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                        >
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}
