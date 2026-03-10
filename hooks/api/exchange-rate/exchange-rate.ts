import api from "@/utils/api";
import type {
  ExchangeRate,
  UpsertExchangeRateRequest,
} from "@/types/exchange-rate.types";

export const getExchangeRates = async (): Promise<ExchangeRate[]> => {
  const response = await api.get<ExchangeRate[]>("/exchange-rates");
  return response.data;
};

export const getExchangeRate = async (
  fromCurrency: string,
  toCurrency: string,
): Promise<ExchangeRate> => {
  const response = await api.get<ExchangeRate>(
    `/exchange-rates/${fromCurrency}/${toCurrency}`,
  );
  return response.data;
};

export const upsertExchangeRate = async (
  data: UpsertExchangeRateRequest,
): Promise<ExchangeRate & { message: string }> => {
  const response = await api.put<ExchangeRate & { message: string }>(
    "/exchange-rates",
    data,
  );
  return response.data;
};

export const deleteExchangeRate = async (
  fromCurrency: string,
  toCurrency: string,
): Promise<{ message: string }> => {
  const response = await api.delete<{ message: string }>(
    `/exchange-rates/${fromCurrency}/${toCurrency}`,
  );
  return response.data;
};
