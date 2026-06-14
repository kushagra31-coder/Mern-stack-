export interface WalletUser {
  id: string;
  name: string;
  balance: number;
}

export interface Transaction {
  id: string;
  from: string;
  to: string;
  amount: number;
  date: string;
  status: 'completed' | 'refunded' | 'failed';
}