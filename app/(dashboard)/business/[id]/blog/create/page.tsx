"use client";

import { useParams } from "next/navigation";
import { BlogEditor } from "@/components/blog/BlogEditor";

export default function CreateBlogPostPage() {
  const params = useParams();
  const businessId = params.id as string;

  return <BlogEditor businessId={businessId} mode="create" />;
}
