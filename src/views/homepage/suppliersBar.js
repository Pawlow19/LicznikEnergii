import * as React from 'react';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Box, Typography } from '@mui/material';


export default function SuppliersBar({supplier}) {
  const [alignment, setAlignment] = React.useState('TAURON');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    //console.log(newAlignment);
    supplier(newAlignment);
  };

  const children = [
    <ToggleButton value="TAURON" key="left">
      <Typography>Tauron</Typography>
    </ToggleButton>,
    <ToggleButton value="ENEA" key="center">
      <Typography>Enea</Typography>
    </ToggleButton>,
    <ToggleButton value="PGE" key="right">
      <Typography>PGE</Typography>
    </ToggleButton>,
    <ToggleButton value="ENERGA" key="justify">
      <Typography>Energa</Typography>
    </ToggleButton>,
  ];

  const control = {
    value: alignment,
    onChange: handleChange,
    exclusive: true,
  };

  return (
    <Box sx={{width: "100%", display: "flex", justifyContent: 'flex-start'}}>
    <Stack spacing={2} alignItems="center">
      <ToggleButtonGroup size="large" {...control} aria-label="Large sizes">
        {children}
      </ToggleButtonGroup>
    </Stack>
    </Box>
  );
}