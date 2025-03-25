import { Box, ButtonBase } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../../../css/SearchBar.css";

export const SearchBar = () => {
  return (
    <Box className="input-wrapper">
      <SearchIcon
        id="search-icon"
        sx={{
          ml: 3,
          mr: 3,
        }}
      ></SearchIcon>
      <input placeholder="Digite aqui..."></input>
    </Box>
  );
};
