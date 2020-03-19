import React from 'react'
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import { TranslationContext } from '../../../helpers/translations'

import Card from '../../../components/Card'

const data = [
  {
    name: '200', uv: 9000, pv: 4000, amt: 2400,
  },
  {
    name: '422', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: '500', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: '401', uv: 200, pv: 400, amt: 2000,
  },
  {
    name: '503', uv: 10, pv: 41, amt: 2181,
  },
];

export const StatusCode = () => {
  const translations = React.useContext(TranslationContext)

  return (
    <Card title={translations.statusCodeCount}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar name={translations.asia} dataKey="pv" fill="#8884d8" />
        <Bar name={translations.northAmerica} dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </Card>
  )
}


