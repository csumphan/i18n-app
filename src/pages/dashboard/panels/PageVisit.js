import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts'

import { TranslationContext } from '../../../helpers/translations'

import Card from '../../../components/Card'

const data = [
  {
    name: 'Homepage', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Login', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Account', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Dashboard', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Settings', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Checkout', uv: 3490, pv: 4300, amt: 2100,
  },
];

export const PageVisit = () => {
  const translations = React.useContext(TranslationContext)

  return (
    <div>
      <Card title={translations.pageVisitByDatacenter}>
        <LineChart
          width={560} 
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
        <Line name={translations.asia} type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line name={translations.northAmerica} type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </Card>
    </div>
  )
}