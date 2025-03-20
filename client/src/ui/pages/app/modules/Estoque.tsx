import { Box, TextField } from "@mui/material";
import React from "react";
import { drawerWidth } from "../MenuLateral";
import Typography from "@mui/material/Typography";

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
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          border: 4,
          flexDirection: "column",
        }}
      >
        <Box
          className="Logo-Estoque"
          sx={{
            width: "80%",
          }}
        ></Box>
        <Box
          className="Título-Pagina1"
          sx={{
            height: "100px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
            margin: "20px",
          }}
        >
          <Box
            className="Texto-Top"
            sx={{
              backgroundColor: "#D9D9D9",
              width: "70%",
              height: "100%",
              border: 3,
              borderColor: "#4C585B",
              flexDirection: "column",
              borderRadius: "20px",
              display: "flex",
              marginLeft: "40px",
            }}
          >
            CLIENTES
          </Box>
        </Box>
        <Box
          sx={{
            border: 4,
          }}
        ></Box>
      </Box>
    </Box>
  );
}
