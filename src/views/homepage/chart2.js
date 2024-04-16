import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Chart2 = ({ timeFrame }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      switch (timeFrame) {
        case 'day':
          const dayData = Array.from({ length: 24 }, (_, i) => ({
            name: `${i.toString().padStart(2, '0')}:00`,
            pv: [
              10, 15, 12, 13, 0, 1, 2, 20, 33, 21, 6, 12, 55, 33, 22, 44, 55, 66, 1, 0, 4, 2, 5, 4
            ][i]
          }));
          setData(dayData);
          break;
        case 'week':
          const weekData = Array.from({ length: 7 }, (_, i) => ({
            name: [
              "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"
            ][i],
            pv: [
              200, 150, 300, 400, 180, 75, 100
            ][i]
          }));
          setData(weekData);
          break;
        case 'month':
          const monthData = Array.from({ length: 31 }, (_, i) => ({
            name: `${i + 1}`,
            pv: [
              200, 150, 300, 400, 180, 75, 100, 200, 150, 300, 400, 180, 75, 100, 200, 150, 300, 400, 180, 75, 100, 200, 150, 300, 400, 180, 75, 100, 25, 24
            ][i]
          }));
          setData(monthData);
          break;
        case 'year':
          const yearData = Array.from({ length: 12 }, (_, i) => ({
            name: `${i + 1}.2024`,
            pv: [
              2000, 3000, 4000, 5000, 6000, 2000, 2000, 3000, 4000, 5000, 6000, 2000
            ][i]
          }));
          setData(yearData);
          break;
        default:
          setData([]);
      }
    };

    fetchData();
  }, [timeFrame]);

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
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
  );
};

export default Chart2;
