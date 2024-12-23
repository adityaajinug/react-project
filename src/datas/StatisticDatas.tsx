import { StatisticType } from "@/types/statistic";

export const dataset: StatisticType[] = [
    { day: '17 Sun', price: 150 },
    { day: '18 Mon', price: 180 },
    { day: '19 Tue', price: 200 },
    { day: '20 Wed', price: 170 },
    { day: '21 Thu', price: 190 },
];

export const formattedDataset = dataset.map((data) => ({
  day: data.day,
  price: data.price,
}));


export const valueFormatter = (value: number | null): string => {
    if (value === null) {
      return 'N/A';
    }
    return `$${value.toFixed(2)}`;
  };