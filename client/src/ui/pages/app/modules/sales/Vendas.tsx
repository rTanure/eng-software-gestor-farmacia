import { Box, TextField, Button } from "@mui/material";
import React, { use } from "react";
import { drawerWidth } from "../../MenuLateral";
import Typography from "@mui/material/Typography";
import StorageIcon from "@mui/icons-material/Storage";
import PeopleIcon from "@mui/icons-material/People";
import SellIcon from "@mui/icons-material/Sell";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import SearchBar from "../../SearchBar";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Venda from "./Venda";
import { useNavigate } from "react-router";
import { useQuery } from "react-query";
import { saleMdl } from "../../../../../api/salesMdl";
import { p } from "framer-motion/client";

export default function Vendas() {
  const idSale = window.location.pathname.split("/").pop();

  const navigate = useNavigate();

  const { data: faturamento, refetch: refetchFaturamento } = useQuery(
    ["faturamento"],
    () => saleMdl.getFaturamento(),
    {
      select: (data) => data.data,
    }
  );
  const { data: vendas, refetch: refetchVendas } = useQuery(
    ["vendas"],
    () => saleMdl.getTotalVendido(),
    {
      select: (data) => data.data,
    }
  );

  const { data: vendasList, refetch: refetchVendasList } = useQuery(
    ["vendasList"],
    () => saleMdl.getAll(),
    {
      select: (data) => data.data,
    }
  );

  const refetch = () => {
    refetchFaturamento();
    refetchVendas();
    refetchVendasList();
  };

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
              height: "60%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SellIcon
              sx={{
                width: "100%",
                height: "80%",
                color: "#1B2C44",
              }}
            ></SellIcon>
          </Box>
          <Typography variant="h6" className="Titulo">
            GESTÃO DE VENDAS
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            border: 3,
            width: "100%",
            height: "30%",
            borderRadius: 5,
            borderColor: "#4C585B",
            backgroundColor: "#D9D9D9",
            mt: 2.5,
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.9)",
          }}
        >
          <Box
            className="Dashboard-primeira-linha"
            sx={{
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
              height: "28%",
              width: "100%",
              borderRadius: 4,
              mt: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "10%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LeaderboardIcon
                sx={{
                  width: "100%",
                  height: "60%",
                  color: "#1B2C44",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              ></LeaderboardIcon>
            </Box>
            <Typography className="Titulo">DASHBOARD</Typography>
          </Box>
          <Box
            sx={{
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "72%",
              width: "100%",
              borderRadius: 4,
            }}
          >
            <Box
              className="MEDICAMENTOS"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                bgcolor: "rgba(76, 88, 91, 1)",
                borderRadius: 3,
                width: "30%",
                height: "50%",
                mr: 2,
              }}
            >
              <Typography
                className="TextoB"
                sx={{
                  ml: 3,
                  color: "white",
                }}
              >
                FATURAMENTO BRUTO:
              </Typography>
              <Box
                sx={{
                  width: "30%",
                  height: "70%",
                  mr: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  className="TextoB"
                  sx={{
                    color: "white",
                  }}
                >
                  R$ {faturamento?.toFixed(2)}
                </Typography>
              </Box>
            </Box>
            <Box
              className="PRODUTOS"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                bgcolor: "rgba(76, 88, 91, 1)",
                borderRadius: 3,
                width: "30%",
                height: "50%",
                ml: 2,
              }}
            >
              <Typography
                className="TextoB"
                sx={{
                  ml: 3,
                  color: "white",
                }}
              >
                PRODUTOS VENDIDOS:
              </Typography>
              <Box
                sx={{
                  width: "20%",
                  height: "70%",
                  mr: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  className="TextoB"
                  sx={{
                    color: "white",
                  }}
                >
                  {vendas}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            border: 3,
            width: "100%",
            height: "57%",
            borderRadius: 5,
            borderColor: "#4C585B",
            alignItems: "center",
            backgroundColor: "#D9D9D9",
            mt: 2.5,
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.9)",
            justifyContent: "center",
          }}
        >
          {/* Histórico */}
          <Box
            className="Produtos"
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              borderRadius: "20px",
              width: "90%",
              height: "80%",
              mb: 3,
            }}
          >
            {/* Barra com nome do fornecedor e ações */}
            <Box
              sx={{
                width: "100%",
                height: "23%",
                border: "2px",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 20px",
                bgcolor: "#4C585B",
                mt: 3,
              }}
            >
              <Box
                className="TextoB"
                sx={{
                  color: "white",
                }}
              >
                PRODUTO
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
                width: "100%",
                height: "80%",
                overflowY: "auto",
              }}
            >
              {/* Venda */}
              <Box
                sx={{
                  width: "100%",
                  // height: "35%",
                  mt: 2,
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    // border: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    borderRadius: "10px",
                  }}
                >
                  {vendasList?.map((venda, index) => (
                    <Venda venda={venda} refetch={refetch} />
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              width: "90%",
              height: "15%",
              bb: 10,
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
                onClick={() => navigate("adicionarVenda")}
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
