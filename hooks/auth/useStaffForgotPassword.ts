import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { AxiosError } from "axios";
import {
  staffForgotPassword,
  staffResetPassword,
  type StaffForgotPasswordRequest,
  type StaffResetPasswordRequest,
} from "@/hooks/api/auth/forgot-password/staff-forgot-password";

interface ApiError {
  error?: string;
  message?: string;
}

export const useStaffForgotPassword = () => {
  return useMutation({
    mutationFn: (data: StaffForgotPasswordRequest) => staffForgotPassword(data),
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

export const useStaffResetPassword = () => {
  return useMutation({
    mutationFn: (data: StaffResetPasswordRequest) => staffResetPassword(data),
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
