import api from "@/utils/api";
import type {
    CommentListResponse,
    CommentQueryParams,
    CommentWithLead,
    CreateCommentRequest,
    UpdateCommentRequest,
    ApproveCommentRequest,
    DeleteCommentResponse,
} from "@/types/comment.types";

// Get comments by blog slug (public - only approved)
export const getCommentsBySlug = async (
    slug: string,
    params?: { page?: number; limit?: number }
): Promise<CommentListResponse> => {
    const response = await api.get<CommentListResponse>(
        `/comments/blog/slug/${slug}`,
        { params }
    );
    return response.data;
};

// Get all comments with filters (admin)
export const getAllComments = async (
    params?: CommentQueryParams
): Promise<CommentListResponse> => {
    const response = await api.get<CommentListResponse>("/comments", { params });
    return response.data;
};

// Create comment (public)
export const createComment = async (
    slug: string,
    data: CreateCommentRequest
): Promise<CommentWithLead> => {
    const response = await api.post<CommentWithLead>(
        `/comments/blog/slug/${slug}`,
        data
    );
    return response.data;
};

// Approve/unapprove comment (admin)
export const approveComment = async (
    id: string,
    data: ApproveCommentRequest
): Promise<CommentWithLead> => {
    const response = await api.put<CommentWithLead>(
        `/comments/${id}/approve`,
        data
    );
    return response.data;
};

// Update comment (admin)
export const updateComment = async (
    id: string,
    data: UpdateCommentRequest
): Promise<CommentWithLead> => {
    const response = await api.put<CommentWithLead>(`/comments/${id}`, data);
    return response.data;
};

// Delete comment (admin)
export const deleteComment = async (
    id: string
): Promise<DeleteCommentResponse> => {
    const response = await api.delete<DeleteCommentResponse>(`/comments/${id}`);
    return response.data;
};
