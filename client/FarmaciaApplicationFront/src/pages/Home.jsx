import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react';
import '../index.css';
import { Textsms } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box
      className="papel-de-parede"
      sx={{
        backgroundImage: 'url("src/assets/background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '200vh',
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
      <Box
        className="wrapper"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          width: '100%',
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '25vh',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <Box
            className="Logo-principal"
            sx={{
              p: 0,
              zIndex: 1,
              width: '140px',
              height: '140px',
              display: 'flex',
              ml: 9,
            }}
          >
            <figure style={{ margin: 0, padding: 0, width: '100%' }}>
              <img
                className="imagem-logo-principal"
                src="src/assets/MEDMAISCompleta.png"
                alt="Logo Medmais"
                style={{ display: 'block', width: '100%' }}
              />
            </figure>
          </Box>
          <Box
            className="Menu-principal"
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              bgcolor: ' #4C585B',
              width: 500,
              height: 80,
              borderRadius: 40,
              zIndex: 1,
            }}
          >
            <Button
              className="BotaoMenu"
              variant="Text"
              sx={{
                textTransform: 'none',
                fontSize: '18px',
                fontWeight: 'bold',
              }}
            >
              Sobre
            </Button>
            <Button
              className="BotaoMenu"
              variant="Text"
              sx={{
                textTransform: 'none',
                fontSize: '18px',
                fontWeight: 'bold',
              }}
            >
              Funções
            </Button>
            <Button
              className="BotaoMenu"
              variant="Text"
              sx={{
                textTransform: 'none',
                fontSize: '18px',
                fontWeight: 'bold',
              }}
            >
              Membros
            </Button>
          </Box>
          <Box
            className="Entrar"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              bgcolor: ' #4C585B',
              width: 100,
              height: 80,
              zIndex: 1,
              mr: 9,
              borderRadius: 10,
            }}
          >
            <IconButton
              onClick={() => navigate('/login')}
              sx={{
                bottom: 0,
                right: 0,
              }}
            >
              <LoginIcon
                sx={{
                  width: 58,
                  height: 48,
                  color: 'white',
                }}
              />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '65vh',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            padding: '0 40px',
            overflow: 'hidden',
            mt: 12,
          }}
        >
          <Box
            sx={{
              maxWidth: '50%',
              height: 'auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <figure style={{ margin: 0, padding: 0, maxWidth: '100%', display: 'flex' }}>
              <img
                src="src/assets/Imagem1PaginaPrincipal.png"
                alt="Imagem Principal"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </figure>
          </Box>
          <Box
            sx={{
              maxWidth: '50%',
              height: 'auto',
              display: 'flex',
              justifyContent: 'start',
              alignContent: 'flex-end',
              flexDirection: 'column',
              mr: 15,
            }}
          >
            <Typography
              className="Texto"
              sx={{
                textAlign: 'right',
                fontSize: '50px',
                fontWeight: 'bold',
              }}
            >
              Sobre <br />
            </Typography>
            <Typography
              className="Texto"
              sx={{
                textAlign: 'right',
                fontSize: '23px',
                fontWeight: 'medium',
              }}
            >
              <br /> O sistema controla o estoque, monitorando entradas e saídas, cadastra clientes,
              mantendo as informações organizadas, gerencia os dados dos fornecedores, armazena o
              histórico de receitas de forma segura, gerencia as vendas com relatórios estratégicos.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '65vh',
          display: 'flex',
          flexDirection: 'column',
          padding: '0 40px',
          overflow: 'hidden',
          mt: 8,
        }}
      >
        <Box
          sx={{
            ml: 10,
            display: 'flex',
          }}
        >
          <Typography
            className="Texto"
            sx={{
              textAlign: 'right',
              fontSize: '50px',
              fontWeight: 'bold',
            }}
          >
            Funções
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 10,
          }}
        >
          <motion.div className="CarrosselIcones">
            <motion.div className="Interno">
              <img className="imagensCarrossel" src="src/assets/FornecedoresCarrosel.png"></img>
              <img className="imagensCarrossel" src="src/assets/VendasCarrosel.png"></img>
              <img className="imagensCarrossel" src="src/assets/ClientesCarrosel.png"></img>
              <img className="imagensCarrossel" src="src/assets/RceitasCarrosel.png"></img>
              <img className="imagensCarrossel" src="src/assets/EstoqueCarrosel.png"></img>
            </motion.div>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
