import { Box, Typography, Divider } from '@mui/material'
import React from 'react'

const EnergyMeter = () => {
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
        <Box sx={{display: 'flex', justifyContent: "space-between", marginTop: "2rem"}}>
            <Typography variant='h4'>Szacowanie zużycia</Typography>
        </Box>
    </Box>
  )
}

export default EnergyMeter