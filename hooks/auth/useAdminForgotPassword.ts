import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { AxiosError } from "axios";
import {
  adminForgotPassword,
  adminResetPassword,
  type AdminForgotPasswordRequest,
  type AdminResetPasswordRequest,
} from "@/hooks/api/auth/forgot-password/admin-forgot-password";

interface ApiError {
  error?: string;
  message?: string;
}

export const useAdminForgotPassword = () => {
  return useMutation({
    mutationFn: (data: AdminForgotPasswordRequest) => adminForgotPassword(data),
    onSuccess: (data) => {
      toast.success("Reset code sent", {
        description: data.message,
      });
    },
    onError: (error: AxiosError<ApiError>) => {
      const message =
        error.response?.data?.error ||
        error.response?.data?.message ||
        "Failed to send reset code. Please try again.";
      toast.error("Request failed", { description: message });
    },
  });
};

export const useAdminResetPassword = () => {
  return useMutation({
    mutationFn: (data: AdminResetPasswordRequest) => adminResetPassword(data),
    onSuccess: (data) => {
      toast.success("Password reset", {
        description: data.message,
      });
    },
    onError: (error: AxiosError<ApiError>) => {
      const message =
        error.response?.data?.error ||
        error.response?.data?.message ||
        "Failed to reset password. Please try again.";
      toast.error("Reset failed", { description: message });
    },
  });
};
