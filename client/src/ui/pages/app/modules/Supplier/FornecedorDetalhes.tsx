import {
  Box,
  TextField,
  InputAdornment,
  Grid,
  MenuItem,
  Button,
  IconButton,
  Stack,
  Typography,
  Grid2,
} from "@mui/material"; // Adicionando Button, IconButton e Stack
import React, { useState } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { IMaskInput } from "react-imask";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../../../../css/FormAdd.css"
import { styled } from "@mui/material/styles";
import { drawerWidth } from "../../MenuLateral";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { set, useForm } from "react-hook-form";
import { clienteMdl, ICliente } from "../../../../../api/clienteMdl";
import PhoneOutlineIcon from "@mui/icons-material/PhoneOutlined";
import WcOutlineIcon from "@mui/icons-material/WcOutlined";
import PictureAsPdfOutlineIcon from "@mui/icons-material/PictureAsPdfOutlined";
import AlternateEmailOutlineIcon from "@mui/icons-material/AlternateEmailOutlined";
import { form } from "framer-motion/client";
import { useNavigate } from "react-router";
import { useQuery } from "react-query";
import { prescriptionMdl } from "../../../../../api/prescriptionMdl";
import { supplierMdl } from "../../../../../api/supplierMdl";

export default function FornecedorDetalhes() {
  const id = window.location.pathname.split("/").pop();

  const {data: supplier, refetch} = useQuery(
    "suppliers",
    () => supplierMdl.getById(id as string),
    {
      select: data => data.data,
      enabled: !!id,
    }
  )


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
      }}
    >
      <Box
        className="wrapper"
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "70%",
          border: "4px",
        }}
      >

        {/* Caixa para a barra fixa com nome da página */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: "row",
            alignItems: "center",
            bgcolor: '#D9D9D9',
            width: '100%',
            height: "10%",
            borderRadius: '20px',
            border: '3px solid #4C585B',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.9)',
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "10%",
              height: "60%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PersonAddIcon
              sx={{
                width: "80%",
                height: "80%",
                color: "#1B2C44",
              }}
            ></PersonAddIcon>
          </Box>
          <Typography variant="h6" className="Titulo">
            DETALHES DO FORNECEDOR
          </Typography>
        </Box>

        {/* Box com as infos (posicionada abaixo do container superior) */}
        <Box
          className="Container-Principal"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            bgcolor: '#D9D9D9',
            width: '100%',
            // height: "90%",
            border: '3px solid #4C585B',
            borderRadius: '20px',
            mt: 2.5,
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.9)',
          }}
        >
          <Box
            className="Clients"
            sx={{
              display: 'flex',
              alignItems: "center",
              flexDirection: 'column',
              bgcolor: ' #D9D9D9',
              borderRadius: "20px",
              width: "100%",
              height: "85%",
            }}
          >
            <Box
              className="wrapper"
              sx={{
                display: "flex",
                justifyContent: "center",
                // alignItems: "center",
                // height: "100%",
                width: "100%",
              }}
            >
              <Box
                className="main"
                gap={2}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "90%",
                  flexDirection: "row",
                  overflow: "auto",
                  borderRadius: 10,
                  padding: 3,
                }}
              >
                {/* Nome do cliente */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    alignContent: "start"
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      height: "100%",
                      borderRadius: 10,
                      fontSize: 20,
                      fontWeight: "bold",
                      bgcolor: "#D9D9D9",
                    }}
                  >
                    Nome: 
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      height: "100%",
                      borderRadius: 10,
                      bgcolor: "#D9D9D9",
                    }}
                  >
                    {supplier?.companyName}
                  </Box>
                </Box>
                
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    alignContent: "start"
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      height: "100%",
                      borderRadius: 10,
                      fontSize: 20,
                      fontWeight: "bold",
                      bgcolor: "#D9D9D9",
                    }}
                  >
                    CNPJ:
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      height: "100%",
                      borderRadius: 10,
                      bgcolor: "#D9D9D9",
                    }}
                  >
                    {supplier?.cnpj}
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "start",
                    alignContent: "start"
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      height: "100%",
                      borderRadius: 10,
                      fontSize: 20,
                      fontWeight: "bold",
                      bgcolor: "#D9D9D9",
                    }}
                  >
                    Endereço:
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      height: "100%",
                      borderRadius: 10,
                      bgcolor: "#D9D9D9",
                    }}
                  >
                    {supplier?.address}
                  </Box>
                </Box>
                {/* Telefone */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "start",
                    alignContent: "start"
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      height: "100%",
                      borderRadius: 10,
                      fontSize: 20,
                      fontWeight: "bold",
                      bgcolor: "#D9D9D9",
                    }}
                  >
                    Telefone:
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      height: "100%",
                      borderRadius: 10,
                      bgcolor: "#D9D9D9",
                    }}
                  >
                    {supplier?.phone}
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "start",
                    alignContent: "start"
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      height: "100%",
                      borderRadius: 10,
                      fontSize: 20,
                      fontWeight: "bold",
                      bgcolor: "#D9D9D9",
                    }}
                  >
                    Email:
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      height: "100%",
                      borderRadius: 10,
                      bgcolor: "#D9D9D9",
                    }}
                  >
                    {supplier?.email}
                  </Box>
                </Box>
                {/* Email */}
                
                
              </Box>
              
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "86%",
                height: "100%",
                justifyContent: "start",
                alignContent: "start",
                mb: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                  borderRadius: 10,
                  fontSize: 20,
                  fontWeight: "bold",
                  bgcolor: "#D9D9D9",
                }}
              >
                Categoria:
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                  borderRadius: 10,
                  bgcolor: "#D9D9D9",
                }}
              >
                {supplier?.category}
              </Box>
            </Box>
  
          </Box>
        </Box>
      </Box>
      
    </Box>
  );
}
