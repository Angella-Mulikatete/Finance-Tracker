import React from 'react'
import { Transaction } from './transaction';

const TransactionList: React.FC<{ transactions: Transaction[] }> = ({
  transactions,
}) => {
  return (
    <>
      <ul className="space-y-4">
        {transactions.map((transaction, index) => (
          <li
            key={index}
            className={`p-4 border ${
              transaction.type === "income"
                ? "border-green-500"
                : "border-red-500"
            }`}
          >
            <span>{transaction.description}</span> -{" "}
            <span>{transaction.amount}</span>
          </li>
        ))}
      </ul>
    </>
  );
};


export default TransactionList
