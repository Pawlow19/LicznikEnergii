import { Box } from '@mui/material'
import React from 'react'
import SuppliersBar from './suppliersBar'
import EnergyMeter from './energyMeter'
import Chart from './chart'

export const HomePage = () => {
  return (
    <Box sx={{display: "flex", flexDirection: "column", height: '100vh', width: "100vw"}}>
        <SuppliersBar/>
        <Box sx={{display: "flex", flexDirection: "row", height: '90%', width: "100%"}}>
            <EnergyMeter/>
            <Chart/>
        </Box>
    </Box>
  )
}
