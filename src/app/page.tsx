'use client'

import { useState, useEffect } from "react";
import TransactionForm from "../components/TransactionForm"
import TransactionList from "../components/TransactionList";

type TransactionType = "income" | "expense";

type Transaction = {
  id: string;
  amount: number;
  description: string;
  type: TransactionType;
};

const Home: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const savedTransactions = localStorage.getItem("transactions");
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction: {
    amount: number;
    description: string;
    type: TransactionType;
  }) => {
    const newTransaction: Transaction = {
      ...transaction,
      id: Math.random().toString(36).substring(7),
    };
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Personal Finance Tracker</h1>
      <TransactionForm onAddTransaction={addTransaction} />
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default Home;
