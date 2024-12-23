import React from 'react';
import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from '@mui/x-charts/Gauge';
interface GaugeChartProps {
    desc: number; 
  }
const GaugePointer: React.FC = () => {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    // No value to display
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };

  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill="#299D91" />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="#299D91"
        strokeWidth={3}
      />
    </g>
  );
};

const GaugeChart: React.FC<GaugeChartProps> = ({desc}) => {
  return (
    <GaugeContainer
      width={230}
      height={150}
      startAngle={-90}
      endAngle={90}
      value={desc}
      sx={() => ({
        [`& .value-arc`]: {
          fill: "#299D91",
        },
      })}
    >
      <GaugeReferenceArc />
      <GaugeValueArc className="value-arc" />
      <GaugePointer />
    </GaugeContainer>
  );
};

export default GaugeChart;
