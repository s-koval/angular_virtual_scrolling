export interface Transaction {
  type: string;
  amountXTZ: number;
  amountUSD: number;
  row_id: number;
  date: string;
  address: string;
}
