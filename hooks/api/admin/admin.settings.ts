import api from "@/utils/api";
import type {
  UpdateAdminProfileRequest,
  UpdateAdminEmailRequest,
  UpdateAdminPasswordRequest,
  AdminSettingsResponse,
} from "@/types/admin.types";

// PATCH /admin/settings/profile – update firstName and/or lastName
export const updateAdminProfile = async (
  data: UpdateAdminProfileRequest,
): Promise<AdminSettingsResponse> => {
  const response = await api.patch<AdminSettingsResponse>(
    "/admin/settings/profile",
    data,
  );
  return response.data;
};

// PATCH /admin/settings/email – update email (requires current password)
export const updateAdminEmail = async (
  data: UpdateAdminEmailRequest,
): Promise<AdminSettingsResponse> => {
  const response = await api.patch<AdminSettingsResponse>(
    "/admin/settings/email",
    data,
  );
  return response.data;
};

// PATCH /admin/settings/password – change password
export const updateAdminPassword = async (
  data: UpdateAdminPasswordRequest,
): Promise<{ message: string }> => {
  const response = await api.patch<{ message: string }>(
    "/admin/settings/password",
    data,
  );
  return response.data;
};
