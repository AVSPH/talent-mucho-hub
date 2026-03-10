import api from "@/utils/api";
import type {
  CompensationProfile,
  CompensationProfileListQuery,
  CreateCompensationProfileRequest,
  UpdateCompensationProfileRequest,
} from "@/types/compensation-profile.types";

export const createCompensationProfile = async (
  data: CreateCompensationProfileRequest,
): Promise<CompensationProfile> => {
  const response = await api.post<CompensationProfile>("/compensation-profiles", data);
  return response.data;
};

export const getCompensationProfiles = async (
  query: CompensationProfileListQuery,
): Promise<CompensationProfile[]> => {
  const params = new URLSearchParams();
  params.append("businessId", query.businessId);
  if (query.isActive !== undefined) {
    params.append("isActive", String(query.isActive));
  }

  const queryString = params.toString();
  const response = await api.get<CompensationProfile[]>(
    `/compensation-profiles${queryString ? `?${queryString}` : ""}`,
  );
  return response.data;
};

export const updateCompensationProfile = async (
  id: string,
  data: UpdateCompensationProfileRequest,
): Promise<CompensationProfile> => {
  const response = await api.patch<CompensationProfile>(`/compensation-profiles/${id}`, data);
  return response.data;
};
