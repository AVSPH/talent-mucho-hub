import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";
import {
  getExchangeRates,
  upsertExchangeRate,
  deleteExchangeRate,
} from "@/hooks/api/exchange-rate/exchange-rate";
import type { UpsertExchangeRateRequest } from "@/types/exchange-rate.types";

interface ApiError {
  error?: string;
  message?: string;
}

export const useExchangeRates = () => {
  return useQuery({
    queryKey: ["exchangeRates"],
    queryFn: getExchangeRates,
    staleTime: 2 * 60 * 1000,
  });
};

export const useUpsertExchangeRate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpsertExchangeRateRequest) => upsertExchangeRate(data),
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ["exchangeRates"] });
      // Also invalidate invoices so PHP conversions recalculate
      queryClient.invalidateQueries({ queryKey: ["invoices"] });
      toast.success("Exchange rate updated", {
        description: response.message,
      });
    },
    onError: (error: AxiosError<ApiError>) => {
      const message =
        error.response?.data?.error ||
        error.response?.data?.message ||
        "Failed to update exchange rate";
      toast.error("Update failed", { description: message });
    },
  });
};

export const useDeleteExchangeRate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      fromCurrency,
      toCurrency,
    }: {
      fromCurrency: string;
      toCurrency: string;
    }) => deleteExchangeRate(fromCurrency, toCurrency),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["exchangeRates"] });
      toast.success("Exchange rate deleted");
    },
    onError: (error: AxiosError<ApiError>) => {
      const message =
        error.response?.data?.error ||
        error.response?.data?.message ||
        "Failed to delete exchange rate";
      toast.error("Delete failed", { description: message });
    },
  });
};
