import { Box } from '@mui/material';
import React, { useState } from 'react';
import SuppliersBar from './suppliersBar';
import EnergyMeter from './energyMeter';
import Chart from './chart';
import Chart2 from './chart2';

export const HomePage = () => {
  const [data, setData] = useState("1");
  const [selectedTimeFrame, setSelectedTimeFrame] = useState("day");
  const [supplierChoice, setSupplierChoice] = useState("TAURON");

  const handleChildData = (childdata) => {
    setData(childdata.chartType);
    setSelectedTimeFrame(childdata.timeFrame);
    //console.log(childdata.timeFrame); 
  }

  const handleSupplierChange = (childdata) => {
    setSupplierChoice(childdata);
    //console.log(childdata); 
  }

  return (
    <Box sx={{display: "flex", flexDirection: "column", height: '100vh', width: "100vw"}}>
        <SuppliersBar supplier={handleSupplierChange}/>
        <Box sx={{display: "flex", flexDirection: "row", height: '90%', width: "100%"}}>
            <EnergyMeter childToParent={handleChildData}/>
            {data ==="1" ? <Chart timeFrame={selectedTimeFrame}/> : <Chart2 timeFrame={selectedTimeFrame}/>}
        </Box>
    </Box>
  )
}
