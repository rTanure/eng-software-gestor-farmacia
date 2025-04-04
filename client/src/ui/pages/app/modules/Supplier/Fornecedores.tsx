import { Box, TextField, Button } from "@mui/material";
import React from "react";
import { drawerWidth } from "../../MenuLateral";
import Typography from "@mui/material/Typography";
import StorageIcon from "@mui/icons-material/Storage";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import SearchBar from "../../SearchBar";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PeopleIcon from "@mui/icons-material/People";
import Fornecedor from "./Fornecedor";
import { useNavigate } from "react-router";
import { useQuery } from "react-query";
import { supplierMdl } from "../../../../../api/supplierMdl";
export default function Fornecedores() {
  const navigate = useNavigate();

  const { data: suppliers, refetch } = useQuery(
    "suppliers",
    () => supplierMdl.getAll(),
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            border: 3,
            width: "100%",
            height: "10%",
            borderRadius: 5,
            borderColor: "#4C585B",
            alignItems: "center",
            backgroundColor: "#D9D9D9",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.9)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "10%",
              height: "75%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PeopleIcon
              sx={{
                width: "100%",
                height: "80%",
                color: "#1B2C44",
              }}
            >
              {" "}
            </PeopleIcon>
          </Box>
          <Typography variant="h6" className="Titulo">
            FORNECEDORES
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            border: 3,
            width: "100%",
            height: "100%",
            borderRadius: 5,
            borderColor: "#4C585B",
            alignItems: "center",
            backgroundColor: "#D9D9D9",
            mt: 2.5,
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.9)",
          }}
        >
          {/* Histórico */}
          <Box
            className="Fornecedores"
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              borderRadius: "20px",
              width: "90%",
              height: "13%",
            }}
          >
            {/* Barra com nome do fornecedor e ações */}
            <Box
              sx={{
                width: "100%",
                height: "100%",
                border: "2px",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 20px",
                bgcolor: "#4C585B",
                mt: 2,
              }}
            >
              <Box
                className="TextoB"
                sx={{
                  color: "white",
                }}
              >
                FORNECEDOR
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
          </Box>

          <Box
            sx={{
              width: "90%",
              height: "70%",
            }}
          >
            {/* Produtos
            <Box
              sx={{
                width: "100%",
                height: "15%",
                mt: 2,
              }}
            > */}
            <Box
              sx={{
                width: "100%",
                height: "90%",
                display: "flex",
                flexDirection: "column",
                mt: 2,
                gap: 2,
              }}
            >
              {suppliers &&
                suppliers.length > 0 &&
                suppliers?.map((supplier) => (
                  <Fornecedor
                    key={supplier.id}
                    supplier={supplier}
                    refetch={refetch}
                  />
                ))}
            </Box>
          </Box>
          {/* </Box> */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              width: "90%",
              height: "10%",
              mb: 5,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "7%",
                height: "80%",
                borderRadius: "10px",
                bgcolor: "#4C585B",
                "&:hover": {
                  backgroundColor: "#7E99A3",
                  border: "2px solid #FFFFFF",
                  borderRadius: "8px",
                },
                "&:active": {
                  backgroundColor: "#7E99A3",
                  border: "2px solid #FFFFFF",
                  borderRadius: "8px",
                },
              }}
            >
              <Button
                sx={{ width: "100%", height: "100%", borderRadius: "20%" }}
                onClick={() => navigate("adicionarFornecedor")}
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
        </Box>
      </Box>
    </Box>
  );
}
