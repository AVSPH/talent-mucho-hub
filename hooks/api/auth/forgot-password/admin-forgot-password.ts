import api from "@/utils/api";

export interface AdminForgotPasswordRequest {
  email: string;
}

export interface AdminForgotPasswordResponse {
  message: string;
}

export interface AdminResetPasswordRequest {
  email: string;
  code: string;
  newPassword: string;
}

export interface AdminResetPasswordResponse {
  message: string;
}

export const adminForgotPassword = async (
  data: AdminForgotPasswordRequest,
): Promise<AdminForgotPasswordResponse> => {
  const response = await api.post<AdminForgotPasswordResponse>(
    "/admin/forgot-password",
    data,
  );
  return response.data;
};

export const adminResetPassword = async (
  data: AdminResetPasswordRequest,
): Promise<AdminResetPasswordResponse> => {
  const response = await api.post<AdminResetPasswordResponse>(
    "/admin/reset-password",
    data,
  );
  return response.data;
};
