import api from "@/utils/api";
import type { Invoice, InvoiceDetail, InvoiceQuery } from "@/types/invoice.types";

// Get current staff's invoices (filtered by status, date)
export const getMyInvoices = async (
    query?: InvoiceQuery,
): Promise<Invoice[]> => {
    const params = new URLSearchParams();
    if (query?.status) params.append("status", query.status);
    if (query?.startDate) params.append("startDate", query.startDate);
    if (query?.endDate) params.append("endDate", query.endDate);

    const queryString = params.toString();
    const url = queryString ? `/invoices/me?${queryString}` : "/invoices/me";

    const response = await api.get<Invoice[]>(url);
    return response.data;
};

// Get single invoice by ID for current staff (with EOD breakdown)
export const getMyInvoiceById = async (id: string): Promise<InvoiceDetail> => {
    const response = await api.get<InvoiceDetail>(`/invoices/me/${id}`);
    return response.data;
};
