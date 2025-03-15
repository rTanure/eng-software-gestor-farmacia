import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import LoginFormulario from './LoginFormulario';
import { useAuthentication } from '../../../hooks/useAuthentication';
import { useNavigate } from 'react-router';
import RegisterFormulario from './RegisterFormulario';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Login = () => {
  const {getUser} = useAuthentication()
  const navigate = useNavigate()

  useEffect(() => {
    getUser()
      .then(e => {
        if(!!e?.data) navigate('/app')
      })
  }, []);

  return (
    <Box
      className="papel-de-parede"
      sx={{
        backgroundImage: 'url("/img/background.jpg")',
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
      <Button
        onClick={() => navigate('/')}
        sx={{
          position: 'absolute',
          top: 10,
          left: 10,
          color: 'white',
        }}
      >
        <ArrowBackIosIcon />
        Voltar
      </Button>
      <RegisterFormulario />
    </Box>
  );
};

export default Login;
