import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import '../index.css';
import PermanentDrawerLeft from '../components/MenuLateral';

const Estoque = () => {
  return (
    <Box>
      <Box
        className="papel-de-parede"
        sx={{
          backgroundImage: 'url("src/assets/background.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '340vh',
          border: 'none',
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }}
      >
        <PermanentDrawerLeft />
      </Box>
    </Box>
  );
};

export default Estoque;
