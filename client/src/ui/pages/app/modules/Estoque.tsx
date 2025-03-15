import { Box } from "@mui/material";
import React from "react";
import { drawerWidth } from "../MenuLateral";

export default function Estoque() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        padding: 3,
        transition: "margin-left 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
        marginLeft: `calc(${drawerWidth}px + 16px)`,
      }}
    >
      Módulo de estoque
    </Box>
  );
}
