import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Cell, Legend, Tooltip,
} from 'recharts';

import { TranslationContext } from '../../../helpers/translations'

import Card from '../../../components/Card'

const data = [
  { name: 'IE', value: 43 }, { name: 'Firefox', value: 180 },
  { name: 'Chrome', value: 250 }, { name: 'Opera', value: 5 },
  { name: 'Safari', value: 96 }, { name: 'Brave', value: 10 },
];

const RADIAN = Math.PI / 180;
const COLORS = ['#845EC2', '#2C73D2', '#C34A36', '#008E9B', '#4D8076', '#4B4453'];

const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index, name
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${name} - ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


export const Browser = () => {
  const translations = React.useContext(TranslationContext)

  return (
    <Card title={translations.apiStatusByDatacenter}>
      <PieChart width={300} height={300}>
        <Pie 
          dataKey="value" 
          isAnimationActive={false} 
          data={data} 
          cx={150} 
          cy={150} 
          outerRadius={100} 
          fill="#8884d8" 
          label={renderCustomizedLabel}
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
        <Tooltip />
      </PieChart>
    </Card>
  )
}

