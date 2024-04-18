import { Box, Typography, Divider, Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import data from '../../data.json';
import dataPredicted from '../../dataPredicted.json';
import SuppliersBar from './suppliersBar';

const EnergyMeter = ({ childToParent, supplierChoice }) => {
  const [timeFrame, setTimeFrame] = useState("day");
  const [chartType, setChartType] = useState("1");
  const [totalConsumption, setTotalConsumption] = useState(0);
  const [averageConsumption, setAverageConsumption] = useState(0);
  const [costPerKwh, setCostPerKwh] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const currentDayOfWeek = currentDate.getDay(); // 0 (Sunday) through 6 (Saturday)
  const currentDayOfMonth = currentDate.getDate() - 1; // -1, bo indeksowanie zaczyna się od 0
  // console.log(`Current day of the month: ${currentDayOfMonth + 1}`);
  const currentMonth = currentDate.getMonth();

  const handleTimeFrameChange = (frame) => {
    setTimeFrame(frame);
    childToParent({ chartType, timeFrame: frame });
  }

  const handleChartTypeChange = (type) => {
    setChartType(type);
    childToParent({ chartType: type, timeFrame });
  }

  useEffect(() => {
    let sum = 0;
    let count = 0;
    let dataSource = data;

    switch (chartType) {
      case '1':
        dataSource = dataPredicted;
        break;
      case '2':
        dataSource = data;
        break;
      default:
        break;
    }

    switch (timeFrame) {
      case 'day':
        for (let i = 0; i <= currentHour; i++) {
          sum += dataSource.day[i];
        }
        count = currentHour + 1;
        break;
      case 'week':
        for (let i = 0; i < currentDayOfWeek; i++) {
          sum += dataSource.week[i];
        }
        count = currentDayOfWeek;
        break;
      case 'month':
        for (let i = 0; i < currentDayOfMonth + 1; i++) {
          sum += dataSource.month[i];
        }
        count = currentDayOfMonth + 1;
        break;
      case 'year':
        for (let i = 0; i <= currentMonth; i++) {
          sum += dataSource.year[i];
        }
        count = currentMonth + 1;
        break;
      default:
        break;
    }

    const avg = sum / count;
    setTotalConsumption(sum);
    setAverageConsumption(avg);

    // Pobieranie ceny za kWh z pliku data.json
    const supplierData = data.suppliers.find(s => s.supplier === supplierChoice);
    const newCostPerKwh = supplierData ? supplierData.price : 0;
    // console.log(`Wybrany dostawca: ${supplierChoice}, cena za kWh: ${newCostPerKwh}`);
    setCostPerKwh(newCostPerKwh);

    // Obliczanie łącznego kosztu
    setTotalCost(avg * newCostPerKwh);
  }, [timeFrame, currentHour, currentDayOfWeek, currentDayOfMonth, currentMonth, supplierChoice, chartType]);

  return (
    <Box sx={{ width: "30%", margin: "2rem" }}>
      <Box sx={{ display: 'flex', justifyContent: "space-between", marginBottom: "2rem" }}>
        <Typography variant='h4'>Suma</Typography>
        <Typography variant='h8'>{totalConsumption} kWh</Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: "space-between", marginBottom: "2rem" }}>
        <Typography variant='h4'>Średnia</Typography>
        <Typography variant='h8'>{averageConsumption.toFixed(2)} kWh</Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: "space-between", marginBottom: "2rem" }}>
        <Typography variant='h4'>Koszt za kWh</Typography>
        <Typography variant='h8'>{costPerKwh.toFixed(2)} PLN</Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: "space-between", marginBottom: "2rem" }}>
        <Typography variant='h4'>Koszt łączny</Typography>
        <Typography variant='h8'>{totalCost.toFixed(2)} PLN</Typography>
      </Box>
      <Divider component="li" />
      <Box sx={{ display: 'flex', flexDirection: "column", marginTop: "2rem" }}>
        <Typography variant='h4' marginBottom="1rem">Typ wykresu</Typography>
        <Button onClick={() => handleChartTypeChange("1")} variant="contained" size="large" sx={{ marginBottom: "1rem" }}>Szacowane zużycie</Button>
        <Button onClick={() => handleChartTypeChange("2")} variant="contained" size="large">Zużycie</Button>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: "space-between", marginTop: "1rem" }}>
        <Button onClick={() => handleTimeFrameChange("day")} variant="contained" size="large" sx={{ marginRight: "1rem" }}>Dzienny</Button>
        <Button onClick={() => handleTimeFrameChange("week")} variant="contained" size="large" sx={{ marginRight: "1rem" }}>Tygodniowy</Button>
        <Button onClick={() => handleTimeFrameChange("month")} variant="contained" size="large" sx={{ marginRight: "1rem" }}>Miesięczny</Button>
        <Button onClick={() => handleTimeFrameChange("year")} variant="contained" size="large">Roczny</Button>
      </Box>
    </Box>
  )
}

export default EnergyMeter;
