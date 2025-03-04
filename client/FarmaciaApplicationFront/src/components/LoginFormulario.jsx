import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import '../index.css';

const LoginFormulario = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <Box
      className="wrapper"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'rgba(255,255,255,0.3)',
        height: '100vh',
        width: '100%',
      }}
    >
      <Box
        className="main"
        sx={{
          display: 'flex',
          height: '85%',
          width: '80%',
          flexDirection: 'row',
          bgcolor: 'rgba(255,255,255,1)',
          overflow: 'auto',
          borderRadius: 10,
        }}
      >
        <Box
          className="containerEsquerdo"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundImage: 'url(src/assets/background.jpg)',
            height: '100%',
            width: '50%',
          }}
        >
          <Box className="Logo">
            <figure className="Logo">
              <img src="src/assets/MEDMAISBranca.png"></img>
            </figure>
          </Box>
          <Typography
            className="Texto"
            sx={{
              fontSize: '40px',
              fontWeight: 500,
            }}
          >
            Bem-vindo!
          </Typography>
          <Typography
            className="Texto"
            SX={{
              fontSize: '30px',
            }}
          >
            Faça o login
          </Typography>
        </Box>
        <Box
          className="containerDireito"
          sx={{
            bgcolor: 'rgba(255,255,255,1)',
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default LoginFormulario;
