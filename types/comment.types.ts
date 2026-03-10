// Comment types matching backend API

export interface Lead {
    _id: string;
    name: string;
    email?: string;
    phone?: string;
}

export interface Comment {
    _id: string;
    blogId: string;
    leadId: string;
    comment: string;
    isApproved: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface CommentWithLead extends Comment {
    lead: Lead | null;
}

export interface CommentPaginationInfo {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
}

export interface CommentListResponse {
    data: CommentWithLead[];
    pagination: CommentPaginationInfo;
}

export interface CommentQueryParams {
    blogId?: string;
    isApproved?: boolean;
    search?: string;
    page?: number;
    limit?: number;
}

export interface CreateCommentRequest {
    name: string;
    email: string;
    phone?: string;
    comment: string;
}

export interface UpdateCommentRequest {
    comment?: string;
    isApproved?: boolean;
}

export interface ApproveCommentRequest {
    isApproved: boolean;
}

export interface DeleteCommentResponse {
    message: string;
}
