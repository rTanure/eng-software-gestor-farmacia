import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import LoginFormulario from '../components/LoginFormulario';

const Login = () => {
  return (
    <Box
      className="papel-de-parede"
      sx={{
        backgroundImage: 'url("src/assets/background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        border: 'none',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <LoginFormulario />
    </Box>
  );
};

export default Login;
