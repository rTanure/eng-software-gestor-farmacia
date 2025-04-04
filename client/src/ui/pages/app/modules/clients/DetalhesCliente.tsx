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




const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(#0) 0 0000-0000"
      definitions={{ "#": /[1-9]/ }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const Input = styled("input")({
  display: "none",
});

export const DetalhesCliente = () => {
  const idCliente = window.location.pathname.split("/").pop();

  const [values, setValues] = useState({ textmask: "" });
  const [birthdate, setBirthdate] = useState(null);
  const [gender, setGender] = useState("");
  const [formValues, setFormValues] = useState<ICliente>({} as ICliente);
  const navigate = useNavigate();

  const {data: cliente} = useQuery(
    "cliente",
    () => clienteMdl.getClienteById(idCliente || ""),
    {
      select: data => data.data,
      enabled: !!idCliente,
    }
  )

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    clienteMdl.createCliente({
      id: null,
      name: formValues.name,
      email: formValues.email,
      cpf: formValues.cpf,
      dateOfBirth: formValues.dateOfBirth,
      phoneNumber: values.textmask,
    } as ICliente)
      .then(r => navigate("/app/clientes"))
  }

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
            DETALHES DO CLIENTE
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
                    {cliente?.name}
                  </Box>
                </Box>
                  
                  {/* CPF */}
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
                    CPF:
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
                    {cliente?.cpf}
                  </Box>
                </Box>
                {/* Data de Nascimento */}
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
                    Data de Nascimento:
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
                    {cliente?.dateOfBirth && new Date(cliente?.dateOfBirth).toLocaleDateString("pt-BR", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
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
                    {cliente?.phoneNumber}
                  </Box>
                </Box>
                {/* Email */}
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
                    {cliente?.email}
                  </Box>
                </Box>
                
              </Box>
            </Box>
  
          </Box>
        </Box>
      </Box>
      
    </Box>
  );
};
