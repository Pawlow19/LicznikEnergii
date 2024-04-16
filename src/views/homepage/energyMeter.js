import { Box, Typography, Divider, Button } from '@mui/material';
import React, { useState } from 'react';

const EnergyMeter = ({ childToParent }) => {
  const [timeFrame, setTimeFrame] = useState("day");
  const [chartType, setChartType] = useState("1");

  const handleTimeFrameChange = (frame) => {
    setTimeFrame(frame);
    childToParent({ chartType, timeFrame: frame });
  }

  const handleChartTypeChange = (type) => {
    setChartType(type);
    childToParent({ chartType: type, timeFrame });
  }

  return (
    <Box sx={{width: "30%", margin: "2rem"}}>
        <Box sx={{display: 'flex', justifyContent: "space-between", marginBottom: "2rem"}}>
            <Typography variant='h4'>Pobór</Typography>
            <Typography variant='h8'>WARTOSC kWh</Typography>
        </Box>
        <Box sx={{display: 'flex', justifyContent: "space-between", marginBottom: "2rem"}}>
            <Typography variant='h4'>Średnia</Typography>
            <Typography variant='h8'>WARTOSC kWh</Typography>
        </Box>
        <Divider component="li" />
        <Box sx={{display: 'flex', flexDirection: "column", marginTop: "2rem"}}>
            <Typography variant='h4' marginBottom="1rem">Typ wykresu</Typography>
            <Button onClick={() => handleChartTypeChange("1")} variant="contained" size="large" sx={{marginBottom: "1rem"}}>Szacowane zużycie</Button>
            <Button onClick={() => handleChartTypeChange("2")} variant="contained" size="large">Zużycie</Button>
        </Box>
        <Box sx={{display: 'flex', justifyContent: "space-between", marginTop: "1rem"}}>
            <Button onClick={() => handleTimeFrameChange("day")} variant="contained" size="large" sx={{marginRight: "1rem"}}>Dzienny</Button>
            <Button onClick={() => handleTimeFrameChange("week")} variant="contained" size="large" sx={{marginRight: "1rem"}}>Tygodniowy</Button>
            <Button onClick={() => handleTimeFrameChange("month")} variant="contained" size="large" sx={{marginRight: "1rem"}}>Miesięczny</Button>
            <Button onClick={() => handleTimeFrameChange("year")} variant="contained" size="large">Roczny</Button>
        </Box>
    </Box>
  )
}

export default EnergyMeter;
