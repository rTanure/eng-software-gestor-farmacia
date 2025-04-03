import { Box, MenuItem, Select } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../../../css/SearchBar.css";

interface SelectBarProps {
  onChange: (value: string) => void;
  value?: string;
  options?: {
    label: string;
    value: string;
  }[];
}

export default function SelectBar({ onChange, value, options = [] }: SelectBarProps) {
  return (
    <Box className="input-wrapper">
      <Select
        onChange={e => onChange(e.target.value)}
        value={value || ""}
        displayEmpty
        sx={{ 
          flex: 1, 
          border: "none", 
          outline: "none", 
          padding: "0 16px"
        }}
      >
        <MenuItem value="">
          Todos os clientes
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
}