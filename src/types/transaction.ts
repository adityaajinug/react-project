export interface TransactionType {
    icon: string;
    title: string;
    category: string;
    amount: number;
    date: string;
    type: 'revenue' | 'expense';
  }