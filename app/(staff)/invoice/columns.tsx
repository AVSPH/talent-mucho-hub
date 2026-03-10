"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal, Eye, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Invoice } from "@/types/invoice.types";
import { toast } from "sonner";

interface ColumnOptions {
  onView: (invoice: Invoice) => void;
}

const statusConfig: Record<string, { label: string; className: string }> = {
  draft: {
    label: "Draft",
    className: "bg-slate-500/10 text-slate-500 border-slate-500/20",
  },
  calculated: {
    label: "Calculated",
    className: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  },
  approved: {
    label: "Approved",
    className: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  },
  paid: {
    label: "Paid",
    className: "bg-purple-500/10 text-purple-500 border-purple-500/20",
  },
};

const salaryTypeConfig: Record<string, string> = {
  hourly: "Hourly",
  daily: "Daily",
  monthly: "Monthly",
  annual: "Annual",
};

function formatCurrency(amount: number, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
}

function formatPeriod(start: string, end: string) {
  const s = new Date(start);
  const e = new Date(end);
  const opts: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
  };
  const yearOpts: Intl.DateTimeFormatOptions = {
    ...opts,
    year: "numeric",
  };

  if (s.getFullYear() === e.getFullYear()) {
    return `${s.toLocaleDateString("en-US", opts)} – ${e.toLocaleDateString("en-US", yearOpts)}`;
  }
  return `${s.toLocaleDateString("en-US", yearOpts)} – ${e.toLocaleDateString("en-US", yearOpts)}`;
}

export const createColumns = ({
  onView,
}: ColumnOptions): ColumnDef<Invoice>[] => [
  {
    accessorKey: "periodStart",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="-ml-4 h-8 data-[state=open]:bg-accent"
      >
        Period
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const invoice = row.original;
      return (
        <span className="text-sm font-medium">
          {formatPeriod(invoice.periodStart, invoice.periodEnd)}
        </span>
      );
    },
  },
  {
    accessorKey: "salaryType",
    header: "Type",
    cell: ({ row }) => {
      const type = row.getValue("salaryType") as string;
      return (
        <span className="text-sm text-muted-foreground">
          {salaryTypeConfig[type] || type}
        </span>
      );
    },
  },
  {
    accessorKey: "baseSalary",
    header: "Base Rate",
    cell: ({ row }) => {
      const invoice = row.original;
      return (
        <span className="text-sm tabular-nums">
          {formatCurrency(invoice.baseSalary, invoice.currency)} / hr
        </span>
      );
    },
  },
  {
    accessorKey: "totalDaysWorked",
    header: "Days",
    cell: ({ row }) => (
      <span className="text-sm tabular-nums">
        {row.getValue("totalDaysWorked")}
      </span>
    ),
  },
  {
    accessorKey: "eodCount",
    header: "EODs",
    cell: ({ row }) => (
      <span className="text-sm tabular-nums">{row.getValue("eodCount")}</span>
    ),
  },
  {
    accessorKey: "totalHoursWorked",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="-ml-4 h-8 data-[state=open]:bg-accent"
      >
        Hours
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <span className="text-sm tabular-nums">
        {(row.getValue("totalHoursWorked") as number).toFixed(1)}h
      </span>
    ),
  },
  {
    accessorKey: "calculatedPay",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="-ml-4 h-8 data-[state=open]:bg-accent"
      >
        Gross Pay
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <span className="text-sm tabular-nums">
        {formatCurrency(
          row.getValue("calculatedPay") as number,
          row.original.currency,
        )}
      </span>
    ),
  },
  {
    accessorKey: "netPay",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="-ml-4 h-8 data-[state=open]:bg-accent"
      >
        Net Pay
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const netPay = row.getValue("netPay") as number;
      return (
        <span className="text-sm font-semibold tabular-nums text-foreground">
          {formatCurrency(netPay, row.original.currency)}
        </span>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      const config = statusConfig[status] || statusConfig.draft;
      return (
        <Badge variant="outline" className={`font-normal ${config.className}`}>
          {config.label}
        </Badge>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const invoice = row.original;

      return (
        <div onClick={(e) => e.stopPropagation()}>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="h-8 w-8 p-0 data-[state=open]:bg-muted"
              >
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[160px]">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  navigator.clipboard.writeText(invoice._id);
                  toast.success("Invoice ID copied");
                }}
              >
                <Copy className="mr-2 h-4 w-4" />
                Copy ID
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onView(invoice)}>
                <Eye className="mr-2 h-4 w-4" />
                View details
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
