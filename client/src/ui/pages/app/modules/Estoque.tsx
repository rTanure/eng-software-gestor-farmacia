import { Box, TextField } from "@mui/material";
import React from "react";
import { drawerWidth } from "../MenuLateral";
import Typography from "@mui/material/Typography";
import StorageIcon from "@mui/icons-material/Storage";
import PeopleIcon from "@mui/icons-material/People";
import SellIcon from "@mui/icons-material/Sell";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";

export default function Estoque() {
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
        border: 5,
      }}
    >
      <Box
        className="wrapper"
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "80%",
          border: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            border: 4,
            width: "100%",
            height: "13%",
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
              height: "50%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <StorageIcon
              sx={{
                width: "100%",
                height: "70%",
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
            border: 4,
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
              border: 3,
              borderRadius: 4,
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
              border: 3,
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
                backgroundcolor: "#4C585B",
                border: 3,
                borderRadius: 3,
                width: "25%",
                height: "50%",
              }}
            >
              <Typography
                sx={{
                  ml: 3,
                }}
              >
                MEDICAMENTOS
              </Typography>
              <Box sx={{}}>
                <TextField
                  sx={{
                    width: "20%",
                    height: "50%",
                    mr: 3,
                  }}
                ></TextField>
              </Box>
            </Box>
            <Box
              className="PRODUTOS"
              sx={{
                border: 3,
                color: "#4C585B",
              }}
            ></Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            border: 4,
            width: "100%",
            height: "57%",
            borderRadius: 5,
            borderColor: "#4C585B",
            alignItems: "center",
            backgroundColor: "#D9D9D9",
            mt: 2.5,
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.9)",
          }}
        ></Box>
      </Box>
    </Box>
  );
}
