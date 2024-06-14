export interface Transaction {
  id: string;
  type: 'income' | 'expense';
  description: string;
  amount: number;

}
 