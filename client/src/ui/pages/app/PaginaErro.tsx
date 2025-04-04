import { Box, TextField, Button } from "@mui/material";
import React from "react";
import { drawerWidth } from "./MenuLateral";
import Typography from "@mui/material/Typography";
import StorageIcon from "@mui/icons-material/Storage";
import PeopleIcon from "@mui/icons-material/People";
import SellIcon from "@mui/icons-material/Sell";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import SearchBar from "./SearchBar";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Link, useNavigate } from "react-router-dom";

export const PaginaErro = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
        padding: 3,
        transition: "margin-left 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></Box>
    </Box>
  );
};
