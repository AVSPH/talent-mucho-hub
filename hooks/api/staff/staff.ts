import api from "../../../utils/api";
import type { Staff, StaffDocument } from "../../../types/staff.types.js";

export interface UpdateStaffProfileRequest {
  firstName?: string;
  lastName?: string;
  phone?: string;
}

export interface AddStaffDocumentRequest {
  name: string;
  url: string;
  type: string;
}

export interface ChangeStaffPasswordRequest {
  currentPassword: string;
  newPassword: string;
}

export const updateStaffProfile = async (
  data: UpdateStaffProfileRequest,
): Promise<{ message: string; staff: Staff }> => {
  const response = await api.patch<{ message: string; staff: Staff }>(
    "/staff/me/profile",
    data,
  );
  return response.data;
};

export const addStaffDocument = async (
  data: AddStaffDocumentRequest,
): Promise<{ message: string; document: StaffDocument }> => {
  const response = await api.post<{ message: string; document: StaffDocument }>(
    "/staff/me/documents",
    data,
  );
  return response.data;
};

export const changeStaffPassword = async (
  data: ChangeStaffPasswordRequest,
): Promise<{ message: string }> => {
  const response = await api.put<{ message: string }>(
    "/staff/me/password",
    data,
  );
  return response.data;
};
