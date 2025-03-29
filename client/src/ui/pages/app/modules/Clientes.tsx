import { Box, Button } from "@mui/material";
import React from "react";
import { drawerWidth } from "../MenuLateral";
import Typography from "@mui/material/Typography";
import PeopleIcon from "@mui/icons-material/People";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { SearchBar } from "../SearchBar";
import { useNavigate } from "react-router";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export default function Clientes() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        flexGrow: 1,
        padding: 3,
        transition: "margin-left 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
        marginLeft: `calc(${drawerWidth}px + 16px)`,
        height: "100%",
      }}
    >
      <Box
        className="wrapper"
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "70%",
          border: "4px",
        }}
      >

        {/* Caixa para a barra fixa com nome da página */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: "row",
            alignItems: "center",
            bgcolor: '#D9D9D9',
            width: '100%',
            height: "10%",
            borderRadius: '20px',
            border: '3px solid #4C585B',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.9)',
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "10%",
              height: "60%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PersonAddIcon
              sx={{
                width: "80%",
                height: "80%",
                color: "#1B2C44",
              }}
            ></PersonAddIcon>
          </Box>
          <Typography variant="h6" className="Titulo">
            CLIENTES
          </Typography>
        </Box>

        {/* Box com as infos (posicionada abaixo do container superior) */}
        <Box
          className="Container-Principal"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            bgcolor: '#D9D9D9',
            width: '100%',
            height: "90%",
            border: '3px solid #4C585B',
            borderRadius: '20px',
            mt: 2.5,
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.9)',
          }}
        >
          {/* Box que configura a posição da barra de pesquisa e botão adicionar */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              bgcolor: '#D9D9D9',
              borderRadius: '20px',
              width: '100.025%',
              height: "15%",
              mt: 2.3,
            }}
          >
            {/* Barra de pesquisa */}
            <Box
              className="Search Bar"
              sx={{
                bgcolor: ' #D9D9D9',
                border: '3px solid #1B2C44',
                width: "74%",
                height: "52%",
                borderRadius: '50px',
              }}
            >
              <SearchBar />
            </Box>

            {/* Botão de adicionar */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '6.2%',
                height: '50%',
                borderRadius: '10px',
                bgcolor: '#4C585B',
                '&:hover': {
                  backgroundColor: '#7E99A3',
                  border: '2px solid #FFFFFF',
                  borderRadius: '8px',
                },
                '&:active': {
                  backgroundColor: '#7E99A3',
                  border: '2px solid #FFFFFF',
                  borderRadius: '8px',
                }

              }}
            >
              <Button sx={{ width: '100%', height: '100%', borderRadius: '20%' }} onClick={() => navigate("cadastro")}>
                <AddCircleOutlineIcon
                  sx={{
                    width: '100%',
                    height: '100%',
                    color: "#D9D9D9",
                    alignItems: "center",
                    justifyContent: "center",
                  }}></AddCircleOutlineIcon>
              </Button>
            </Box>

          </Box>

          {/* Histórico */}
          <Box
            className="Clients"
            sx={{
              display: 'flex',
              alignItems: "center",
              flexDirection: 'column',
              bgcolor: ' #D9D9D9',
              borderRadius: "20px",
              width: "100%",
              height: "85%",
            }}
          >
            {/* Barra com nome do fornecedor e ações */}
            <Box
              sx={{
                width: "90%",
                height: "10%",
                border: '2px',
                borderRadius: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 20px',
                bgcolor: '#4C585B',
                mt: .5,

              }}
            >
              <Box sx={{ color: '#FFFFFF', fontSize: '17px', fontWeight: 'SemiBold' }}>
                CLIENTE
              </Box>

              <Box sx={{ color: '#FFFFFF', fontSize: '17px', fontWeight: 'SemiBold' }}>
                AÇÕES
              </Box>
            </Box>
  
          </Box>
        </Box>

      </Box>
    </Box>
  );
}
