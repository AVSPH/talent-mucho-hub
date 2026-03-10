import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";
import {
  createCompensationProfile,
  getCompensationProfiles,
  updateCompensationProfile,
} from "@/hooks/api/compensation/compensation-profile";
import type {
  CompensationProfileListQuery,
  CreateCompensationProfileRequest,
  UpdateCompensationProfileRequest,
} from "@/types/compensation-profile.types";

interface ApiError {
  error?: string;
  message?: string;
}

export const useCompensationProfiles = (query: CompensationProfileListQuery) => {
  return useQuery({
    queryKey: ["compensationProfiles", query],
    queryFn: () => getCompensationProfiles(query),
    enabled: !!query.businessId,
    staleTime: 2 * 60 * 1000,
  });
};

export const useCreateCompensationProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateCompensationProfileRequest) =>
      createCompensationProfile(data),
    onSuccess: (profile) => {
      queryClient.invalidateQueries({
        queryKey: ["compensationProfiles"],
      });
      queryClient.invalidateQueries({
        queryKey: ["compensationProfiles", { businessId: profile.businessId }],
      });
      toast.success("Compensation profile created", {
        description: `${profile.name} is now active for payroll calculation.`,
      });
    },
    onError: (error: AxiosError<ApiError>) => {
      const message =
        error.response?.data?.error ||
        error.response?.data?.message ||
        "Failed to create compensation profile";
      toast.error("Creation failed", {
        description: message,
      });
    },
  });
};

export const useUpdateCompensationProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: UpdateCompensationProfileRequest;
    }) => updateCompensationProfile(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["compensationProfiles"],
      });
      toast.success("Compensation profile updated", {
        description: "Staff compensation settings were updated.",
      });
    },
    onError: (error: AxiosError<ApiError>) => {
      const message =
        error.response?.data?.error ||
        error.response?.data?.message ||
        "Failed to update compensation profile";
      toast.error("Update failed", {
        description: message,
      });
    },
  });
};
