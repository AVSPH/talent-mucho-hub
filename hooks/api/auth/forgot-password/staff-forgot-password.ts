import api from "@/utils/api";

export interface StaffForgotPasswordRequest {
  email: string;
}

export interface StaffForgotPasswordResponse {
  message: string;
}

export interface StaffResetPasswordRequest {
  email: string;
  code: string;
  newPassword: string;
}

export interface StaffResetPasswordResponse {
  message: string;
}

export const staffForgotPassword = async (
  data: StaffForgotPasswordRequest,
): Promise<StaffForgotPasswordResponse> => {
  const response = await api.post<StaffForgotPasswordResponse>(
    "/staff/forgot-password",
    data,
  );
  return response.data;
};

export const staffResetPassword = async (
  data: StaffResetPasswordRequest,
): Promise<StaffResetPasswordResponse> => {
  const response = await api.post<StaffResetPasswordResponse>(
    "/staff/reset-password",
    data,
  );
  return response.data;
};
