import { Box } from '@mui/material'
import React, {useState} from 'react'
import SuppliersBar from './suppliersBar'
import EnergyMeter from './energyMeter'
import Chart from './chart'
import Chart2 from './chart2'

export const HomePage = () => {
  const [data, setData] = useState("2");
  const [supplierChoice, setSupplierChoice] = useState("TAURON");
  const childToParent = (childdata) => {
    setData(childdata);
  }
  const supplier = (childdata) => {
    setSupplierChoice(childdata);
    console.log(childdata);
  }
  return (
    <Box sx={{display: "flex", flexDirection: "column", height: '100vh', width: "100vw"}}>
        <SuppliersBar supplier={supplier}/>
        <Box sx={{display: "flex", flexDirection: "row", height: '90%', width: "100%"}}>
            <EnergyMeter childToParent={childToParent}/>
            {data ==="1" ? <Chart/> : <Chart2/>}
        </Box>
    </Box>
  )
}
