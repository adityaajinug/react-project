import { TransactionType } from '@/types/transaction';
import { iconAssets } from '@/datas/IconAssets';

export const transactions: TransactionType[] = [
  {
    icon: iconAssets.gamepad,
    title: 'GTR 5',
    category: 'Gadget & Gear',
    amount: 160.0,
    date: '2023-05-17',
    type: 'revenue',
  },
  {
    icon: iconAssets.shopping,
    title: 'Polo Shirt',
    category: 'XL Fashions',
    amount: 20.0,
    date: '2023-05-17',
    type: 'expense',
  },
  {
    icon: iconAssets.food,
    title: 'Biriyani',
    category: 'Hajir Biriyani',
    amount: 10.0,
    date: '2023-05-17',
    type: 'expense',
  },
  {
    icon: iconAssets.transport,
    title: 'Taxi Fare',
    category: 'Uber',
    amount: 12.0,
    date: '2023-05-17',
    type: 'expense',
  },
  {
    icon: iconAssets.shopping,
    title: 'Keyboard',
    category: 'Gadget & Gear',
    amount: 22.0,
    date: '2023-05-17',
    type: 'revenue',
  },
];
