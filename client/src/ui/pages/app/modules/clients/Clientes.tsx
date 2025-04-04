import { Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import { drawerWidth } from "../../MenuLateral";
import Typography from "@mui/material/Typography";
import PeopleIcon from "@mui/icons-material/People";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useNavigate } from "react-router";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useQuery } from "react-query";
import { clienteMdl } from "../../../../../api/clienteMdl";
import ClienteListagem from "./Cliente";
import SearchBar from "../../SearchBar";

export default function Clientes() {
  const navigate = useNavigate();
  const [nome, setNome] = React.useState<string>("");

  const { data: clientes, refetch } = useQuery(
    ["clientes", nome],
    () => clienteMdl.getAllClientes({ name: nome }),
    {
      select: (data) => data.data,
    }
  );

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
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            bgcolor: "#D9D9D9",
            width: "100%",
            height: "10%",
            borderRadius: "20px",
            border: "3px solid #4C585B",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.9)",
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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            bgcolor: "#D9D9D9",
            width: "100%",
            height: "90%",
            border: "3px solid #4C585B",
            borderRadius: "20px",
            mt: 2.5,
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.9)",
          }}
        >
          {/* Box que configura a posição da barra de pesquisa e botão adicionar */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              bgcolor: "#D9D9D9",
              borderRadius: "20px",
              width: "90%",
              height: "15%",
              mt: 2.3,
              flexShrink: 0,
            }}
          >
            {/* Barra de pesquisa */}
            <Box
              className="Search Bar"
              sx={{
                bgcolor: " #D9D9D9",
                border: "3px solid #1B2C44",
                width: "75%",
                height: "50%",
                borderRadius: "50px",
                flexShrink: 0,
              }}
            >
              <SearchBar
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </Box>

            {/* Botão de adicionar */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "6.2%",
                height: "50%",
                borderRadius: "10px",
                bgcolor: "#4C585B",
                "&:hover": {
                  backgroundColor: "#7E99A3",
                  outline: "2px solid #FFFFFF",
                  borderRadius: "8px",
                },
                "&:active": {
                  backgroundColor: "#7E99A3",
                  outline: "2px solid #FFFFFF",
                  borderRadius: "8px",
                },
              }}
            >
              <Button
                sx={{ width: "100%", height: "100%", borderRadius: "20%" }}
                onClick={() => navigate("cadastro")}
              >
                <AddCircleOutlineIcon
                  sx={{
                    width: "100%",
                    height: "90%",
                    color: "#D9D9D9",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></AddCircleOutlineIcon>
              </Button>
            </Box>
          </Box>

          {/* Histórico */}
          <Box
            className="Clients"
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              bgcolor: " #D9D9D9",
              borderRadius: "20px",
              width: "100%",
              height: "85%",
            }}
          >
            {/* Barra com nome do fornecedor e ações */}
            <Box
              sx={{
                width: "90%",
                height: "13%",
                outline: "2px",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 20px",
                bgcolor: "#4C585B",
                mt: 0.5,
              }}
            >
              <Box
                className="TextoB"
                sx={{
                  color: "white",
                }}
              >
                CLIENTE
              </Box>

              <Box
                className="TextoB"
                sx={{
                  color: "white",
                }}
              >
                AÇÕES
              </Box>
            </Box>
            <Box
              sx={{
                width: "90%",
                height: "auto",
                display: "flex",
                flexDirection: "column",
                mt: 2,
                gap: 2,
                overflowY: "auto",
                mb: 7,
              }}
            >
              {/* Produtos */}
              {clientes?.map((cliente) => (
                <ClienteListagem
                  cliente={cliente}
                  refetch={refetch}
                  key={cliente.id}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
