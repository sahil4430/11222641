// Search.jsx
import React, { useState } from 'react';
import {
  Box,
  TextField,
  Paper,
} from '@mui/material';

export default function Search({ url, setUrl }) {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 800,
        mx: 'auto',
        display: 'flex',
        justifyContent: 'center',
        px: 2,
      }}
    >
      <Paper
        elevation={2}
        sx={{
          p: 1,
          borderRadius: '50px',
          backgroundColor: 'background.paper',
          width: '100%',
        }}
      >
        <TextField
          variant="standard"
          fullWidth
          placeholder="Paste your long URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          InputProps={{
            disableUnderline: true,
            sx: {
              px: 2,
              py: 0.5,
            },
          }}
          sx={{
            borderRadius: '50px',
            bgcolor: 'transparent',
            color: 'text.primary',
          }}
        />
      </Paper>
    </Box>
  );
}
