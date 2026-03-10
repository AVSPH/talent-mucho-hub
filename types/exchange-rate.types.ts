export interface ExchangeRate {
  _id: string;
  fromCurrency: string;
  toCurrency: string;
  rate: number;
  updatedBy?: string;
  createdAt: string;
  updatedAt: string;
}

export interface UpsertExchangeRateRequest {
  fromCurrency: string;
  toCurrency: string;
  rate: number;
}
