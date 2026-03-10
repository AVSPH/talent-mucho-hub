"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { FileText, Loader2 } from "lucide-react";
import { useMyInvoices } from "@/hooks/invoice/useStaffInvoice";
import { createColumns } from "./columns";
import { DataTable } from "./data-table";
import type { Invoice, InvoiceQuery } from "@/types/invoice.types";

export default function StaffInvoicePage() {
    const router = useRouter();

    // Filter state
    const [status, setStatus] = useState<string>("all");

    // Build query params
    const queryParams: InvoiceQuery = {
        ...(status !== "all" && {
            status: status as InvoiceQuery["status"],
        }),
    };

    // Fetch data
    const {
        data: invoices,
        isLoading: isInvoiceLoading,
        isError,
    } = useMyInvoices(queryParams);

    // Handlers
    const handleStatusFilter = useCallback((value: string) => {
        setStatus(value);
    }, []);

    const handleRowClick = useCallback(
        (invoice: Invoice) => {
            router.push(`/invoice/${invoice._id}`);
        },
        [router],
    );

    const columns = createColumns({
        onView: handleRowClick,
    });

    // Error state
    if (isError) {
        return (
            <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center bg-card">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10">
                    <FileText className="h-10 w-10 text-destructive" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">Unable to Load Invoices</h3>
                <p className="mt-2 text-base text-muted-foreground">
                    There was an error loading your invoice data. Please try again.
                </p>
            </div>
        );
    }

    const invoiceList = invoices || [];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between px-2">
                <div className="space-y-1 mt-6 lg:mt-0">
                    <h1 className="text-2xl font-semibold tracking-tight">My Invoices</h1>
                    <p className="text-sm text-muted-foreground">
                        View your finalized and paid invoices.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    {!isInvoiceLoading && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">
                                {invoiceList.length}
                            </span>
                            <span>total invoices</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Data Table */}
            <DataTable
                columns={columns}
                data={invoiceList}
                onStatusFilter={handleStatusFilter}
                onRowClick={handleRowClick}
                statusFilter={status}
                isLoading={isInvoiceLoading}
            />
        </div>
    );
}
