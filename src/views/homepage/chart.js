import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import data from '../../dataPredicted.json';

const Chart = ({ timeFrame }) => {
  const [chartData, setChartData] = useState([]);
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      setSuppliers(data.suppliers);

      switch (timeFrame) {
        case 'day':
          const dayData = Array.from({ length: 24 }, (_, i) => ({
            name: `${i.toString().padStart(2, '0')}:00`,
            pv: data.day[i]
          }));
          setChartData(dayData);
          break;
        case 'week':
          const weekData = Array.from({ length: 7 }, (_, i) => ({
            name: [
              "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"
            ][i],
            pv: data.week[i]
          }));
          setChartData(weekData);
          break;
        case 'month':
          const monthData = Array.from({ length: 31 }, (_, i) => ({
            name: `${i + 1}`,
            pv: data.month[i]
          }));
          setChartData(monthData);
          break;
        case 'year':
          const yearData = Array.from({ length: 12 }, (_, i) => ({
            name: `${i + 1}.2024`,
            pv: data.year[i]
          }));
          setChartData(yearData);
          break;
        default:
          setChartData([]);
      }
    };

    fetchData();
  }, [timeFrame]);

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <BarChart
        width={1200}
        height={600}
        data={chartData}
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
        <Bar dataKey="pv" stackId="a" fill="#4f86f7" />
      </BarChart>
    </Box>
  );
};

export default Chart;
