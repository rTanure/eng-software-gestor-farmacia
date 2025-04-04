import { Box, TextField, InputAdornment, Grid, MenuItem, Button, IconButton, Stack, Typography, Select,} from "@mui/material"; 
import React, { useState } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { IMaskInput } from "react-imask";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../../../../css/FormAdd.css";
import { styled } from "@mui/material/styles";
import { drawerWidth } from "../../MenuLateral";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AlternateEmailOutlineIcon from "@mui/icons-material/AlternateEmailOutlined";
import { form, sup } from "framer-motion/client";
import { useNavigate } from "react-router";
import SaveIcon from "@mui/icons-material/Save";
import { IStock, stockMdl } from "../../../../../api/stockMdl";
import { useQuery } from "react-query";
import { supplierMdl } from "../../../../../api/supplierMdl";
import QrCode2Icon from '@mui/icons-material/QrCode2';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Input = styled("input")({
  display: "none",
});

export const EstoqueEditar = () => {
  const idStock = window.location.pathname.split("/").pop();


  const [values, setValues] = useState({ textmask: "" });
  const [birthdate, setBirthdate] = useState(null);
  const [gender, setGender] = useState("");
  const [formValues, setFormValues] = useState<IStock>({} as IStock);
  const navigate = useNavigate();

  
  const {data: stock} = useQuery(
    ["stock", idStock],
    () => stockMdl.getById(idStock || ""),
    {
      select: data => data.data,
      enabled: !!idStock,
      onSuccess: (data) => {
        setFormValues(data)
      }
    }
  )

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const {data: suppliers} = useQuery(
    "suppliers", 
    () => supplierMdl.getAll(),
    {
      select: (data) => data.data.map((supplier) => ({ id: supplier.id, name: supplier.companyName })) || [],
    }
  )

  const handleSubmit = (event) => {
    event.preventDefault();

    const { batch, code, expirationDate, name, purchasePrice,receivedAmount, supplierId } = formValues

    stockMdl
      .update({
        id: idStock,
        batch, 
        code, 
        expirationDate, 
        name, 
        purchasePrice,
        receivedAmount, 
        supplierId
      })
      .then((r) => navigate("/app/estoque"));
  };

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
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            bgcolor: "#D9D9D9",
            width: "100%",
            height: "10%",
            borderRadius: "20px",
            border: "3px solid #4C585B",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.9)",
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
            EDITAR ENTRADA DE ESTOQUE
          </Typography>
        </Box>

        {/* Box com as infos (posicionada abaixo do container superior) */}
        <Box
          className="Container-Principal"
          sx={{
            display: "flex",
            flexDirection: "column",
            bgcolor: "#D9D9D9",
            width: "100%",
            height: "60%",
            border: "3px solid #4C585B",
            borderRadius: "20px",
            mt: 2.5,
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.9)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Formulário */}
          <Box
            className="Clients"
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              bgcolor: " #D9D9D9",
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
                  width: "90%",
                  flexDirection: "row",
                  overflow: "auto",
                  borderRadius: 10,
                  padding: 3,
                }}
              >
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>

                  <Grid item sm={6}>
                      <Select
                        fullWidth
                        displayEmpty
                        name="supplierId"
                        autoComplete="off"
                        variant="outlined"
                        value={formValues.supplierId || ""}
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            supplierId: e.target.value,
                          })
                        }
                        sx={{ marginTop: "16px" }}
                      >
                        <MenuItem value="" disabled>
                          Selecione o fornecedor
                        </MenuItem>
                        {suppliers?.map((supplier) => (
                          <MenuItem key={supplier.id} value={supplier.id}>
                            {supplier.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </Grid>

                    {/* Nome do Medicamento */}
                    <Grid item sm={6}>
                      <TextField
                        fullWidth
                        placeholder="Nome do medicamento"
                        autoComplete="off"
                        name="name"
                        variant="outlined"
                        margin="normal"
                        value={formValues.name}
                        onChange={(e) =>
                          setFormValues({ ...formValues, name: e.target.value })
                        }
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PersonOutlineIcon fontSize="small" />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>

                    {/* Código */}
                    <Grid item sm={6}>
                      <TextField
                        fullWidth
                        placeholder="Código"
                        name="code"
                        variant="outlined"
                        autoComplete="off"
                        margin="normal"
                        value={formValues.code}
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            code: e.target.value,
                          })
                        }
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <QrCode2Icon fontSize="small" />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>

                    {/* E-mail */}
                    <Grid item sm={6}>
                      <TextField
                        fullWidth
                        placeholder="Lote"
                        variant="outlined"
                        name="batch"
                        autoComplete="off"
                        margin="normal"
                        value={formValues.batch}
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            batch: e.target.value,
                          })
                        }
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <AlternateEmailOutlineIcon fontSize="small" />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                  

                    

                    <Grid item sm={3}>
                      <DatePicker
                        selected={formValues.expirationDate ? new Date(formValues.expirationDate) : null}
                        name="expirationDate"
                        autoComplete="off"
                        onChange={(date) => {
                          setFormValues({
                            ...formValues,
                            expirationDate: date?.toISOString() || "",
                          });
                        }}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Data"
                        customInput={
                          <TextField
                            placeholder="Data"
                            variant="outlined"
                            margin="normal"
                            value={formValues.expirationDate}
                            onChange={(e) =>
                              setFormValues({
                                ...formValues,
                                expirationDate: e.target.value,
                              })
                            }
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

                    <Grid item sm={3}>
                      <TextField
                        fullWidth
                        placeholder="Quantidade"
                        name="receivedAmount"
                        variant="outlined"
                        autoComplete="off"
                        margin="normal"
                        type="number"
                        value={formValues.receivedAmount}
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            receivedAmount: isNaN(Number(e.target.value)) ? 0 : Number(e.target.value),
                          })
                        }
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <ShoppingCartOutlinedIcon fontSize="small" />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item sm={6}>
                      <TextField
                        fullWidth
                        placeholder="Preço de compra"
                        variant="outlined"
                        autoComplete="off"
                        margin="normal"
                        type="number"
                        value={formValues.purchasePrice}
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            purchasePrice: isNaN(Number(e.target.value)) ? 0 : Number(e.target.value),
                          })
                        }
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <AlternateEmailOutlineIcon fontSize="small" />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>

                    <Grid item>
                      {/* Botão de adicionar */}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "180px",
                          height: "45px",
                          borderRadius: "30px",
                          bgcolor: "#4C585B",
                          // mt: 6,
                          // ml: 66,
                          "&:hover": {
                            backgroundColor: "#7E99A3",
                            outline: "2px solid #FFFFFF",
                            borderRadius: "45px",
                          },
                          "&:active": {
                            backgroundColor: "#7E99A3",
                            outline: "2px solid #FFFFFF",
                            borderRadius: "45px",
                          },
                        }}
                      >
                        <Button
                          sx={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "20%",
                            color: "#ffffff",
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "center",
                          }}
                          type="submit"
                        >
                          <SaveIcon></SaveIcon>
                          <Box
                            sx={{
                              ml: 2,
                            }}
                          >
                            SALVAR
                          </Box>
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
