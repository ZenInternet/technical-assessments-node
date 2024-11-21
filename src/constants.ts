type Currency = {
  currency: string;
  symbol: string;
};

export const currencies = {
  USD: "$",
  EUR: "€",
  JPY: "¥",
  GBP: "£",
};

export const regionMapping: Record<string,Currency> = {
  "UK": { currency: "GBP", symbol: currencies["GBP"] },
  "US": { currency: "USD", symbol: currencies["USD"] },
  "EU": { currency: "EUR", symbol: currencies["EUR"] },
  "JP": { currency: "JPY", symbol: currencies["JPY"] },
}