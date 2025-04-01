import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ClearIcon from "@mui/icons-material/Clear";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { clienteMdl, ICliente } from "../../../../../api/clienteMdl";
import { useNavigate } from "react-router";

interface IClienteListagemProps {
  cliente: ICliente;
  refetch: () => void;
}

export default function ClienteListagem({cliente, refetch}: IClienteListagemProps) {
  const navigate = useNavigate();

  const handleVisualizar = () => {
    navigate(`${cliente.id}`);
  };

  const handleEditar = () => {
    navigate(`editar/${cliente.id}`);
  };

  const handleDeletar = () => {
    clienteMdl.deleteCliente(cliente.id as string).then(refetch)
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: "70px",
        backgroundColor: "rgba(126, 153, 163, 0.6)",
        flexDirection: "row",
        borderRadius: 2,
      }}
    >
      <Box
        sx={{
          display: "center",
          // width: "18%",
          height: "60%",
          ml: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography className="Titulo">
          {/* Coloque o nome do produto aqui, de acordo com o banco de dados */}
          {cliente.name}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "20%",
          height: "60%",
          mr: 2,
        }}
      >
        <Box
          id="Visualizar"
          sx={{
            display: "flex",
            width: "25%",
            height: "95%",
            border: 2,
            borderRadius: 100,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton
            onClick={handleVisualizar}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "135%",
              height: "135%",
            }}
          >
            <VisibilityIcon
              sx={{
                width: "85%",
                height: "85%",
              }}
            ></VisibilityIcon>
          </IconButton>
        </Box>
        <Box
          id="Deletar"
          sx={{
            width: "25%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: 2,
            borderRadius: 100,
          }}
        >
          <IconButton
            onClick={handleDeletar}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "135%",
              height: "135%",
            }}
          >
            <ClearIcon
              sx={{
                width: "85%",
                height: "85%",
              }}
            ></ClearIcon>
          </IconButton>
        </Box>

        <Box
          id="Editar"
          sx={{
            width: "25%",
            height: "95%",
            border: 2,
            borderRadius: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton
            onClick={handleEditar}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "135%",
              height: "135%",
            }}
          >
            <ModeEditIcon
              sx={{
                width: "85%",
                height: "85%",
              }}
            ></ModeEditIcon>
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
