import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import '../index.css';
import InputAdornment from '@mui/material/InputAdornment';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { useNavigate } from 'react-router-dom';

const LoginFormulario = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  //Usar o Navigate para navegar entres as páginas
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  };

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
          <Box
            className="Logo"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              m: 0,
              p: 0,
            }}
          >
            <figure>
              <img src="src/assets/MEDMAISBranca.png"></img>
            </figure>
          </Box>
          <Typography
            className="Texto"
            sx={{
              fontSize: '40px',
              fontWeight: 'bold',
              marginBottom: '0.3px',
            }}
          >
            Bem-vindo!
          </Typography>
          <Typography
            className="Texto"
            sx={{
              fontSize: '25px',
              fontWeight: '600',
              marginTop: '0.1px',
            }}
          >
            Faça o login
          </Typography>
        </Box>
        <Box
          className="containerDireito"
          sx={{
            bgcolor: 'rgba(255,255,255,1)',
            display: 'flex',
            justifyContent: 'center',
            height: '100%',
            width: '50%',
          }}
        >
          <Box
            component="form"
            className="FormsLogin"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              mt: 0,
              width: '50%',
            }}
          >
            <Typography
              className="TextoB"
              sx={{
                fontSize: '40px',
                marginTop: '100px',
                letterSpacing: '2px',
                mb: '5vh',
              }}
            >
              Login
            </Typography>

            <TextField
              placeholder="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              sx={{
                borderRadius: 5,
              }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon fontSize="small" />
                    </InputAdornment>
                  ),
                },
              }}
            ></TextField>

            <TextField
              placeholder="Senha"
              variant="outlined"
              fullWidth
              margin="normal"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              sx={{
                borderRadius: 5,
              }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <VpnKeyIcon fontSize="small" />
                    </InputAdornment>
                  ),
                },
              }}
            ></TextField>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              className="loginBotao"
              sx={{
                backgroundColor: '#4c585b',
                marginTop: '5vh',
                borderRadius: 40,
                height: '45px',
                width: '250px',
              }}
            >
              Entrar
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginFormulario;
