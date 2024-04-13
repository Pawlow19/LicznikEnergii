import * as React from 'react';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Box, Typography } from '@mui/material';


export default function SuppliersBar() {
  const [alignment, setAlignment] = React.useState('left');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const children = [
    <ToggleButton value="left" key="left">
      <Typography>Tauron</Typography>
    </ToggleButton>,
    <ToggleButton value="center" key="center">
      <Typography>Enea</Typography>
    </ToggleButton>,
    <ToggleButton value="right" key="right">
      <Typography>PGE</Typography>
    </ToggleButton>,
    <ToggleButton value="justify" key="justify">
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