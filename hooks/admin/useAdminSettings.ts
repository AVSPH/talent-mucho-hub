import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { AxiosError } from "axios";
import {
  updateAdminProfile,
  updateAdminEmail,
  updateAdminPassword,
} from "@/hooks/api/admin/admin.settings";
import type {
  UpdateAdminProfileRequest,
  UpdateAdminEmailRequest,
  UpdateAdminPasswordRequest,
} from "@/types/admin.types";

interface ApiError {
  error?: string;
  message?: string;
}

// Update admin name
export const useUpdateAdminProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateAdminProfileRequest) => updateAdminProfile(data),
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ["currentAdmin"] });
      toast.success("Profile updated", {
        description: res.message,
      });
    },
    onError: (error: AxiosError<ApiError>) => {
      const message =
        error.response?.data?.error ||
        error.response?.data?.message ||
        "Failed to update profile";
      toast.error("Update failed", { description: message });
    },
  });
};

// Update admin email
export const useUpdateAdminEmail = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateAdminEmailRequest) => updateAdminEmail(data),
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ["currentAdmin"] });
      toast.success("Email updated", {
        description: res.message,
      });
    },
    onError: (error: AxiosError<ApiError>) => {
      const message =
        error.response?.data?.error ||
        error.response?.data?.message ||
        "Failed to update email";
      toast.error("Update failed", { description: message });
    },
  });
};

// Change admin password
export const useUpdateAdminPassword = () => {
  return useMutation({
    mutationFn: (data: UpdateAdminPasswordRequest) => updateAdminPassword(data),
    onSuccess: (res) => {
      toast.success("Password changed", {
        description: res.message,
      });
    },
    onError: (error: AxiosError<ApiError>) => {
      const message =
        error.response?.data?.error ||
        error.response?.data?.message ||
        "Failed to change password";
      toast.error("Update failed", { description: message });
    },
  });
};
