import { Box } from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import "../../../css/SearchBar.css";

export const SearchBar = () => {
    return (
        <Box 
        className = "input-wrapper">
            <SearchIcon id="search-icon" />
            <input placeholder="Digite aqui..." />
        </Box>
    );
};