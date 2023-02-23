export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type SalesByDate = {
  date: string;
  sum: number;
};

export type ChartSeriesData = {
  x: string;
  y: number;
};

export type FilterData = {
  store?: Store | null;
};

export type SalesSummaryData = {
  sum?: number;
  min: number;
  max: number;
  avg: number;
  count: number;
};

export type Store = {
  id: number;
  name: string;
};


export type SalesByStore = {
  storeName: string;
  sum: number;
};

export type SalesByPaymentMethod = {
  description: string;
  sum: number;
};

export type PieChartConfig = {
  labels: string[];
  series: number[];
};

export type SalesResponse = {
  content: Sale[];
};

export type Sale = {
  id: number;
  date: string;
  volume: number;
  total: number;
  gender: Gender;
  categoryName: string;
  paymentMethod: string;
  storeName: string;
};
