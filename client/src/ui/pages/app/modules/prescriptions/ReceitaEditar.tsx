import { Box, TextField, InputAdornment, Grid, MenuItem, Button, IconButton, Stack, Typography, Select, TextareaAutosize, } from "@mui/material";
import React, { useState } from "react";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { IMaskInput } from "react-imask";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../../../../css/FormAdd.css"
import { styled } from "@mui/material/styles";
import { drawerWidth } from "../../MenuLateral";
import { set, useForm } from "react-hook-form";
import { clienteMdl, ICliente } from "../../../../../api/clienteMdl";
import PhoneOutlineIcon from "@mui/icons-material/PhoneOutlined";
import PictureAsPdfOutlineIcon from "@mui/icons-material/PictureAsPdfOutlined";
import AlternateEmailOutlineIcon from "@mui/icons-material/AlternateEmailOutlined";
import { form } from "framer-motion/client";
import { useNavigate } from "react-router";
import DescriptionIcon from "@mui/icons-material/Description";
import { useQuery } from "react-query";
import { IPrescription, prescriptionMdl } from "../../../../../api/prescriptionMdl";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';


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

export const ReceitaEditar = () => {
  const idPrescription = window.location.pathname.split("/").pop();

  const [values, setValues] = useState({ textmask: "" });
  const [expirationDate, setExpirationDate] = useState<Date | null>(null);
  const [formValues, setFormValues] = useState<IPrescription>({} as IPrescription);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { clientId, doctorName, doctorCrm, description } = formValues;

    prescriptionMdl.updatePrescription({
        id: idPrescription,
        doctorName,
        doctorCrm,
        description,
        expirationDate: expirationDate?.toISOString() || "",
        clientId,
      } as IPrescription)
        .then(r => navigate("/app/receitas"))
  }

  const {data: prescription} = useQuery(
    ["prescription", idPrescription],
    () => prescriptionMdl.getPrescriptionById(idPrescription || ""),
    {
      select: data => data.data,
      enabled: !!idPrescription,
      onSuccess: data => {
        setFormValues(data)
        setExpirationDate(new Date(data.expirationDate))
        setValues({ ...values, doctorCrm: data.doctorCrm })
      }
    }
  )

  const {data: clientes, refetch: refetchClientes} = useQuery(
    ["clientes"], 
    () => clienteMdl.getAllClientes({name: ""}),
    {
      select: data => data.data,
      onSuccess: data => {
        console.log(data)
      }
    },
    
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
            <DescriptionIcon
              sx={{
                width: "80%",
                height: "80%",
                color: "#1B2C44",
              }}
            ></DescriptionIcon>
          </Box>
          <Typography variant="h6" className="Titulo">
            CADASTRAR NOVA RECEITA
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
          {/* Formulário */}
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
                width: "100%",
              }}
            >
              <Box
                className="main"
                sx={{
                  display: "flex",
                  // height: "95%",
                  width: "90%",
                  flexDirection: "row",
                  overflow: "auto",
                  borderRadius: 10,
                  padding: 3,
                }}
              >
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    {/* Cliente */}
                    <Grid item sm={9}>
                      <Select 
                        fullWidth
                        displayEmpty
                        variant="outlined"
                        value={formValues.clientId || ""}
                        onChange={(e) => setFormValues({ ...formValues, clientId: e.target.value })}
                        sx={{ marginTop: "16px" }}
                      >
                        <MenuItem value="" disabled>
                          Selecione um cliente
                        </MenuItem>
                        {clientes?.map((cliente) => (
                          <MenuItem key={cliente.id} value={cliente.id}>
                            {cliente.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </Grid>
                    <Grid item sm={3}>
                      <DatePicker
                        selected={expirationDate}
                        onChange={(date) => {
                          setExpirationDate(date)
                          setFormValues({ ...formValues, expirationDate: date?.toISOString() || "" })
                        }}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Validade"
                        customInput={
                          <TextField
                            fullWidth
                            placeholder="Validade"
                            variant="outlined"
                            margin="normal"
                            value={expirationDate ? expirationDate?.toLocaleDateString() : ""}
                            onChange={(e) => setFormValues({ ...formValues, expirationDate: e.target.value })}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <CalendarMonthOutlinedIcon fontSize="small" />
                                </InputAdornment>
                              ),
                            }}
                          />
                        }
                      />
                    </Grid>

                    {/* Nome do Médico */}
                    <Grid item sm={9}>
                      <TextField
                        fullWidth
                        placeholder="Nome do médico"
                        variant="outlined"
                        margin="normal"
                        value={formValues.doctorName}
                        onChange={(e) => setFormValues({ ...formValues, doctorName: e.target.value })}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PersonOutlineOutlinedIcon fontSize="small" />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>

                    <Grid item sm={3}>
                      <TextField
                        fullWidth
                        placeholder="CRM"
                        variant="outlined"
                        margin="normal"
                        value={formValues.doctorCrm}
                        onChange={(e) => setFormValues({ ...formValues, doctorCrm: e.target.value })}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <BadgeOutlinedIcon fontSize="small" />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    {/* Descrição */}
                    <Grid item sm={12}>
                      <TextField
                        fullWidth
                        placeholder="Descrição"
                        variant="outlined"
                        margin="normal"
                        value={formValues.description}
                        onChange={(e) => setFormValues({ ...formValues, description: e.target.value })}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <DescriptionOutlinedIcon fontSize="small" />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item>
                    {/* Botão de adicionar */}
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        // width: '6.2%',
                        // height: '50%',
                        borderRadius: '10px',
                        bgcolor: '#4C585B',
                        '&:hover': {
                          backgroundColor: '#7E99A3',
                          outline: '2px solid #FFFFFF',
                          borderRadius: '8px',
                        },
                        '&:active': {
                          backgroundColor: '#7E99A3',
                          outline: '2px solid #FFFFFF',
                          borderRadius: '8px',
                        }

                      }}
                    >
                      <Button sx={{ width: '100%', height: '100%', borderRadius: '20%', color: "#ffffff" }} type="submit">
                        Cadastrar Cliente
                      </Button>
                    </Box>
                    </Grid>

                    
                  </Grid>
                </form>
              </Box>
            </Box>
  
          </Box>
        </Box>

      </Box>
    </Box>
  );
};
