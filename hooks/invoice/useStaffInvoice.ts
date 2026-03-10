import { useQuery } from "@tanstack/react-query";
import { getMyInvoices, getMyInvoiceById } from "@/hooks/api/invoice/staff-invoice";
import type { InvoiceQuery } from "@/types/invoice.types";

// Hook to get current staff's invoices
export const useMyInvoices = (query?: InvoiceQuery) => {
    return useQuery({
        queryKey: ["invoices", "me", query],
        queryFn: () => getMyInvoices(query),
        staleTime: 30 * 1000,
    });
};

// Hook to get a single staff invoice by ID
export const useMyInvoiceById = (id: string) => {
    return useQuery({
        queryKey: ["invoices", "me", id],
        queryFn: () => getMyInvoiceById(id),
        enabled: !!id,
        staleTime: 30 * 1000,
    });
};
