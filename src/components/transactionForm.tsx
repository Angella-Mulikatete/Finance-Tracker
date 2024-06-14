'use client'

import React,{useState} from 'react'
import { Transaction } from './transaction';


type TransactionType = "income" | "expense";
const TransactionForm: React.FC<{
  onAddTransaction: (transaction: {
    amount: number;
    description: string;
    type: TransactionType;
  }) => void;
}> = ({ onAddTransaction }) => {
  const [amount, setAmount] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
   const [type, setType] = useState<TransactionType>("income");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTransaction({ amount, description, type });
    setAmount(0);
    setDescription("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}  className="flex flex-col space-y-4">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Amount"
          className="p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="p-2 border border-gray-300 rounded"
          required
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value as TransactionType)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Add Transaction
        </button>
      </form>
    </>
  );
};

export default TransactionForm
