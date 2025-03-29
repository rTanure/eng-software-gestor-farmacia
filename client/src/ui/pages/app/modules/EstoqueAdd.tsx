import { Box, TextField, Button } from "@mui/material";
import React from "react";
import { drawerWidth } from "../MenuLateral";
import Typography from "@mui/material/Typography";
import StorageIcon from "@mui/icons-material/Storage";
import PeopleIcon from "@mui/icons-material/People";
import SellIcon from "@mui/icons-material/Sell";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import { SearchBar } from "../SearchBar";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Link, useNavigate } from "react-router-dom";

export default function EstoqueAdd() {
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
            <StorageIcon
              sx={{
                width: "100%",
                height: "80%",
                color: "#1B2C44",
              }}
            ></StorageIcon>
          </Box>
          <Typography variant="h6" className="Titulo">
            GESTÃO DE ESTOQUE
          </Typography>
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
              mt: 4,
            }}
          >
            {/* Barra de pesquisa */}
            <Box
              className="BarraPesquisa"
              sx={{
                bgcolor: " #D9D9D9",
                border: "3px solid #1B2C44",
                width: "78%",
                height: "75%",
                borderRadius: "50px",
              }}
            >
              <SearchBar />
            </Box>

            {/* Botão de adicionar */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "7%",
                height: "75%",
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
                onClick={() => navigate("/")}
                sx={{ width: "100%", height: "100%", borderRadius: "20%" }}
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
