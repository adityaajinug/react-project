import * as React from 'react';
import { BarChart, BarChartProps } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';


const chartSetting: Partial<BarChartProps> = {
  yAxis: [
    {
      label: 'Price ($)',
    },
  ],
  grid: {
    horizontal: true
  },
  height: 400,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
    '.MuiBarElement-root': {
      borderRadius: '8px', 
    },

  },
};

interface BarsDatasetProps {
  dataset: { [key: string]: any }[];
  series: {
    dataKey: string;
    label: string;
    color: string;
    valueFormatter: (value: number | null) => string;
  }[];
}

export const BarsChart: React.FC<BarsDatasetProps> = ({ dataset, series }) => {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'day' }]}
      series={series}
      slotProps={{
        legend: {
            direction: "row",
            position: { vertical: "top", horizontal: "right" }
        },
        bar: {
          radius: 8,
          style: {
            borderRadius: "8px",
          },
          rx: 4,
        }
      }}
      {...chartSetting}
    />
  );
};
