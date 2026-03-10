import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { AxiosError } from "axios";
import {
  getCommentsBySlug,
  getAllComments,
  createComment,
  approveComment,
  updateComment,
  deleteComment,
} from "@/hooks/api/comment/comment";
import type {
  CommentQueryParams,
  CreateCommentRequest,
  UpdateCommentRequest,
  ApproveCommentRequest,
} from "@/types/comment.types";

interface ApiError {
  error?: string;
  message?: string;
}

// Get comments by blog slug (public - only approved)
export const useCommentsBySlug = (
  slug: string,
  params?: { page?: number; limit?: number },
) => {
  return useQuery({
    queryKey: ["comments", "slug", slug, params],
    queryFn: () => getCommentsBySlug(slug, params),
    enabled: !!slug,
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
};

// Get all comments with filters (admin)
export const useComments = (params?: CommentQueryParams) => {
  return useQuery({
    queryKey: ["comments", params],
    queryFn: () => getAllComments(params),
    staleTime: 2 * 60 * 1000,
  });
};

// Create comment (public)
export const useCreateComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      slug,
      data,
    }: {
      slug: string;
      data: CreateCommentRequest;
    }) => createComment(slug, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
      toast.success("Comment posted!", {
        description: "Your comment has been submitted successfully.",
      });
    },
    onError: (error: AxiosError<ApiError>) => {
      const message =
        error.response?.data?.error ||
        error.response?.data?.message ||
        "Failed to post comment";
      toast.error("Submission failed", {
        description: message,
      });
    },
  });
};

// Approve/unapprove comment (admin)
export const useApproveComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: ApproveCommentRequest }) =>
      approveComment(id, data),
    onSuccess: (updatedComment) => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
      const status = updatedComment.isApproved ? "approved" : "unapproved";
      toast.success(`Comment ${status}!`, {
        description: `The comment has been ${status} successfully.`,
      });
    },
    onError: (error: AxiosError<ApiError>) => {
      const message =
        error.response?.data?.error ||
        error.response?.data?.message ||
        "Failed to update comment approval";
      toast.error("Update failed", {
        description: message,
      });
    },
  });
};

// Update comment (admin)
export const useUpdateComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateCommentRequest }) =>
      updateComment(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
      toast.success("Comment updated!", {
        description: "The comment has been updated successfully.",
      });
    },
    onError: (error: AxiosError<ApiError>) => {
      const message =
        error.response?.data?.error ||
        error.response?.data?.message ||
        "Failed to update comment";
      toast.error("Update failed", {
        description: message,
      });
    },
  });
};

// Delete comment (admin)
export const useDeleteComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteComment(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      toast.success("Comment deleted!", {
        description: "The comment has been deleted successfully.",
      });
    },
    onError: (error: AxiosError<ApiError>) => {
      const message =
        error.response?.data?.error ||
        error.response?.data?.message ||
        "Failed to delete comment";
      toast.error("Deletion failed", {
        description: message,
      });
    },
  });
};
