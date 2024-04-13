import { Box } from '@mui/material'
import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: '10.04.2024',
      pv: 2400,
      amt: 2400,
    },
    {
      name: '20.04.2024',
      pv: 1398,
      amt: 2210,
    },
    {
      name: '30.04.2024',
      pv: 9800,
      amt: 2290,
    },
    {
      name: '10.05.2024',
      pv: 3908,
      amt: 2000,
    },
    {
      name: '20.05.2024',
      pv: 4800,
      amt: 2181,
    },
    {
      name: '30.05.2024',
      pv: 3800,
      amt: 2500,
    },
    {
        name: '10.06.2024',
        pv: 4300,
        amt: 2100,
      },
      {
        name: '20.06.2024',
        pv: 6000,
        amt: 2100,
      },
      {
        name: '30.06.2024',
        pv: 3300,
        amt: 2100,
      },
    ];

const Chart = () => {
  return (
    <Box sx={{width: "100%", height: "100%"}}>
<BarChart
          width={1200}
          height={600}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
        </BarChart>
    </Box>
  )
}

export default Chart