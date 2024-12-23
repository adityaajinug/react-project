import React, { useState } from 'react';
import { transactions } from '@/datas/Transaction';

export const CardRecentTransaction: React.FC = () => {
    const [filter, setFilter] = useState<'all' | 'revenue' | 'expense'>('all');

    const filteredTransactions =
    filter === 'all' ? transactions : transactions.filter((t) => t.type === filter);

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        const day = date.getDate();
        const monthNames = [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December',
        ];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    };

  return (
    <>
      <div className="flex gap-5 mb-3">
        <button
          type="button"
          onClick={() => setFilter('all')}
          className={`${
            filter === 'all' ? 'text-webstyle-primary border-b border-webstyle-primary' : ''
          } hover:text-webstyle-primary`}
        >
          All
        </button>
        <button
          type="button"
          onClick={() => setFilter('revenue')}
          className={`${
            filter === 'revenue' ? 'text-webstyle-primary border-b border-webstyle-primary' : ''
          } hover:text-webstyle-primary`}
        >
          Revenue
        </button>
        <button
          type="button"
          onClick={() => setFilter('expense')}
          className={`${
            filter === 'expense' ? 'text-webstyle-primary border-b border-webstyle-primary' : ''
          } hover:text-webstyle-primary`}
        >
          Expenses
        </button>
      </div>
      {filteredTransactions.map((transaction, index) => (
        <div
          key={index}
          className="py-6 flex justify-between border-b border-solid border-[#F3F3F3]"
        >
          <div className="flex gap-4">
            <div className="rounded-lg bg-webstyle-addon-special px-2 py-1 flex items-center">
              <img src={transaction.icon} alt={transaction.title} />
            </div>
            <div className="flex flex-col">
              <h3 className="font-semibold text-xl">{transaction.title}</h3>
              <p className="text-webstyle-grey-200">{transaction.category}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-xl text-webstyle-grey-400">
              ${transaction.amount.toFixed(2)}
            </h3>
            <p className="text-webstyle-grey-200">{formatDate(transaction.date)}</p>
          </div>
        </div>
      ))}
    </>
  );
};
