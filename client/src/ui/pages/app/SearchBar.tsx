import { Box, ButtonBase } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../../../css/SearchBar.css";

interface SearchBarProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export default function SearchBar({onChange, value}: SearchBarProps) {
  return (
    <Box className="input-wrapper">
      <SearchIcon
        id="search-icon"
        sx={{
          ml: 3,
          mr: 3,
        }}
      ></SearchIcon>
      <input onChange={onChange} value={value} placeholder="Digite aqui..."></input>
    </Box>
  );
};
