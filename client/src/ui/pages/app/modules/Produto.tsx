import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ClearIcon from "@mui/icons-material/Clear";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

export default function Produto() {
  const handleVisualizar = () => {
    //Coloque a função para navegar para a página
  };

  const handleEditar = () => {
    //Coloque a função para navegar para a página
  };

  const handleDeletar = () => {
    //Coloque a função para navegar para a página
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        backgroundColor: "#7E99A3",
        flexDirection: "row",
        borderRadius: 2,
      }}
    >
      <Box
        sx={{
          display: "center",
          width: "20%",
          height: "90%",
          border: 2,
          ml: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
        className="Titulo"
      >
        <Typography sx={{}}>
          {/* Coloque o nome do produto aqui, de acordo com o banco de dados */}
          DIPIRONA
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "20%",
          height: "90%",
          mr: 2,
          border: 2,
        }}
      >
        <Box
          id="Visualizar"
          sx={{
            width: "100%",
            height: "100%",
            border: 2,
            borderRadius: 100,
          }}
        >
          <IconButton
            sx={{
              width: "100%",
              height: "100%",
            }}
          >
            <VisibilityIcon
              sx={{
                width: "100%",
                height: "100%",
              }}
            ></VisibilityIcon>
          </IconButton>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            border: 2,
            borderRadius: 100,
          }}
        >
          <IconButton
            sx={{
              width: "100%",
              height: "100%",
            }}
          >
            <ClearIcon
              sx={{
                width: "100%",
                height: "100%",
              }}
            ></ClearIcon>
          </IconButton>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            border: 2,
            borderRadius: 100,
          }}
        >
          <IconButton
            sx={{
              width: "100%",
              height: "100%",
            }}
          >
            <ModeEditIcon></ModeEditIcon>
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
