import * as React from 'react';
import { BarsChart } from "@/components/Elements/Chart/BarsChart";  // Import the modularized BarChart component

const dataset = [
  { day: '17 Sun', thisWeek: 250, lastWeek: 50 },
  { day: '18 Mon', thisWeek: 150, lastWeek: 100 },
  { day: '19 Tue', thisWeek: 200, lastWeek: 50 },
  { day: '20 Wed', thisWeek: 170, lastWeek: 30 },
  { day: '21 Thu', thisWeek: 190, lastWeek: 80 },
  { day: '22 Fri', thisWeek: 250, lastWeek: 50 },
  { day: '23 Sat', thisWeek: 230, lastWeek: 60 },
];

const valueFormatter = (value: number | null): string => {
  if (value === null) return 'N/A';
  return `$${value}k`;
};

export const CardStatistic: React.FC = () => {
  const series = [
    {
      dataKey: 'lastWeek',
      label: 'Last Week',
      color: '#E8E8E8',
      valueFormatter,
    },
    {
      dataKey: 'thisWeek',
      label: 'This Week',
      color: '#299D91',
      valueFormatter,
    },
  ];

  return (
    <div className="w-full">
      <BarsChart dataset={dataset} series={series} />
    </div>
  );
};
