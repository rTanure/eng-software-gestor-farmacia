import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Tooltip,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import "../../../css/index.css";
import { Textsms } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Home = () => {
  const navigate = useNavigate();
  const carousel = useRef(null); //Referenciando o carrossel
  const [width, setWidth] = useState(0);
  const Sobre = useRef(null); //Referenciado
  const Funcao = useRef(null); //Referenciando
  const Membros = useRef(null); //Referenciando

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  //Função para ir para a Div

  const scrollParaSobre = () => {
    if (Sobre.current) {
      Sobre.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollParaFuncao = () => {
    if (Funcao.current) {
      Funcao.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollParaMembros = () => {
    if (Membros.current) {
      Membros.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      className="papel-de-parede"
      sx={{
        backgroundImage: 'url("/img/background.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "340vh",
        border: "none",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        position: "absolute",
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
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          width: "100%",
          zIndex: 1,
        }}
      >
        <Box
          id="PrimeiraDiv"
          sx={{
            width: "100%",
            height: "25vh",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            mt: 3,
          }}
        >
          <Box
            className="Logo-principal"
            sx={{
              p: 0,
              zIndex: 1,
              width: "140px",
              height: "140px",
              display: "flex",
              ml: 9,
            }}
          >
            <figure style={{ margin: 0, padding: 0, width: "100%" }}>
              <img
                className="imagem-logo-principal"
                src="/img/MEDMAISCompleta.png"
                alt="Logo Medmais"
                style={{ display: "block", width: "100%" }}
              />
            </figure>
          </Box>
          <Box
            className="Menu-principal"
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              bgcolor: " #4C585B",
              width: 500,
              height: 80,
              borderRadius: 40,
              zIndex: 1,
            }}
          >
            <Button
              className="BotaoMenu"
              variant="Text"
              onClick={scrollParaSobre}
              sx={{
                textTransform: "none",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Sobre
            </Button>
            <Button
              className="BotaoMenu"
              variant="Text"
              onClick={scrollParaFuncao}
              sx={{
                textTransform: "none",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Funções
            </Button>
            <Button
              className="BotaoMenu"
              variant="Text"
              onClick={scrollParaMembros}
              sx={{
                textTransform: "none",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Membros
            </Button>
          </Box>
          <Box
            className="Entrar"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: " #4C585B",
              width: 100,
              height: 80,
              zIndex: 1,
              mr: 9,
              borderRadius: 10,
            }}
          >
            <IconButton
              onClick={() => navigate("/auth/login")}
              sx={{
                bottom: 0,
                right: 0,
              }}
            >
              <LoginIcon
                sx={{
                  width: 58,
                  height: 48,
                  color: "white",
                }}
              />
            </IconButton>
          </Box>
        </Box>
        <Box
          ref={Sobre}
          sx={{
            width: "100%",
            height: "160vh",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            padding: "0 40px",
            mt: 12,
          }}
        >
          <Box
            sx={{
              maxWidth: "50%",
              height: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 13,
            }}
          >
            <figure
              style={{
                margin: 0,
                padding: 0,
                maxWidth: "100%",
                display: "flex",
              }}
            >
              <img
                src="/svg/Imagem1PaginaPrincipal.svg"
                alt="Imagem Principal"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </figure>
          </Box>
          <Box
            sx={{
              maxWidth: "50%",
              height: "100%",
              display: "flex",
              justifyContent: "start",
              alignContent: "flex-end",
              flexDirection: "column",
              mr: 15,
              mt: 15,
            }}
          >
            <Typography
              id="Sobre"
              className="Texto"
              sx={{
                textAlign: "right",
                fontFamily: "DM Sans",
                fontWeight: "bold",
                fontSize: "70px",
              }}
            >
              Sobre <br />
            </Typography>
            <Typography
              className="Texto"
              sx={{
                textAlign: "right",
                fontSize: "23px",
                fontWeight: "medium",
                fontFamily: "DM Sans",
              }}
            >
              <br /> O sistema controla o estoque, monitorando entradas e
              saídas, cadastra clientes, mantendo as informações organizadas,
              gerencia os dados dos fornecedores, armazena o histórico de
              receitas de forma segura, gerencia as vendas com relatórios
              estratégicos.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        id="SegundaDiv"
        ref={Funcao}
        sx={{
          width: "100%",
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          padding: "0 40px",
          overflow: "hidden",
          mt: 30,
          mb: 30,
        }}
      >
        <Box
          sx={{
            ml: 8,
            display: "flex",
          }}
        >
          <Typography
            className="Texto"
            sx={{
              textAlign: "right",
              fontSize: "70px",
              fontWeight: "bold",
              mt: 15,
            }}
          >
            Funções
          </Typography>
        </Box>
        <Box
          className="Externo"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            mt: 13,
            margin: "0 auto",
            overflow: "hidden",
          }}
        >
          <motion.div
            ref={carousel}
            className="carrossel"
            whileHover={{ cursor: "grab" }}
            whileTap={{ cursor: "grabbing" }}
            style={{ overflow: "hidden" }}
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              dragElastic={0.8}
              className="Interno"
              style={{ display: "flex" }}
            >
              <img
                className="imagensCarrossel"
                src="/img/FornecedoresCarrosel.png"
                alt="Fornecedores"
              ></img>
              <img
                className="imagensCarrossel"
                src="/img/VendasCarrosel.png"
                alt="Vendas"
              ></img>
              <img
                className="imagensCarrossel"
                src="/img/ClientesCarrosel.png"
                alt="Clientes"
              ></img>
              <img
                className="imagensCarrossel"
                src="/img/RceitasCarrosel.png"
                alt="Receitas"
              ></img>
              <img
                className="imagensCarrossel"
                src="/img/EstoqueCarrosel.png"
                alt="Estoque"
              ></img>
            </motion.div>
          </motion.div>
        </Box>
      </Box>
      <Box
        id="TerceiraDiv"
        ref={Membros}
        sx={{
          width: "100%",
          height: "80vh",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          padding: "0 40px",
          overflow: "hidden",
          mt: 12,
        }}
      >
        <Box
          id="DivSub1"
          sx={{
            maxWidth: "50%",
            height: "auto",
            display: "flex",
            mt: 5,
          }}
        >
          <figure
            style={{ margin: 0, padding: 0, maxWidth: "100%", display: "flex" }}
          >
            <img
              src="/svg/Imagem2Pagina.svg"
              alt="Imagem Principal2"
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
          </figure>
        </Box>
        <Box
          id="DivSub2"
          sx={{
            maxWidth: "50%",
            height: "100%",
            display: "flex",
            justifyContent: "start",
            alignContent: "start",
            flexDirection: "column",
            mr: 15,
            mt: 20,
          }}
        >
          <Typography
            className="Texto"
            sx={{
              textAlign: "right",
              fontSize: "70px",
              fontWeight: "bold",
              fontFamily: "DM Sans",
            }}
          >
            Membros
            <br />
          </Typography>
          <Typography
            className="Texto"
            sx={{
              textAlign: "right",
              fontSize: "23px",
              fontWeight: "medium",
              fontFamily: "DM Sans",
            }}
          >
            <br />
            Danielly Mariana Martins Fragoso - Frontend
            <br /> Kemelly Steisse da Silva - Frontend
            <br />
            Lucas Amaral Leme - Backend
            <br /> Pedro Alves de Paula - Backend, Banco de Dados
            <br /> Richardy Rodrigues Tanure - Full-Stack, Banco de Dados
            <br /> Vitor Angelo dos Santos - Frontend
            <br />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
