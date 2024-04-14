import { Box, Typography, Divider, Button } from '@mui/material'
import React,  { useState } from 'react'

const EnergyMeter = ({childToParent}) => {

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
        <Box sx={{display: 'flex', justifyContent: "space-between", marginTop: "2rem", flexDirection: "column"}}>
            <Typography variant='h4' marginBottom="3rem">Typ wykresu</Typography>
            <Button onClick={() => childToParent("1")} variant="contained" size="large" sx={{marginBottom: "1rem"}}>Szacowanie zużycia</Button>
            <Button onClick={ () => childToParent("2")} variant="contained" size="large" sx={{marginBottom: "1rem"}}>Zużycie</Button>
        </Box>
    </Box>
  )
}

export default EnergyMeter