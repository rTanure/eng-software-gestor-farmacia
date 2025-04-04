import { Box, TextField, InputAdornment, Grid } from "@mui/material";
import React, { useState } from "react";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import QrCode2OutlinedIcon from '@mui/icons-material/QrCode2Outlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

export const FormAddVenda = () => {
    const [validate, setValidate] = useState(null);

    const [values, setValues] = useState({
        produto: "",
    });

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    return (
        <Box
            className="wrapper"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                width: "100%",
            }}
        >
            <Box
                className="main"
                sx={{
                    display: "flex",
                    height: "95%",
                    width: "90%",
                    flexDirection: "row",
                    overflow: "auto",
                    borderRadius: 10,
                    padding: 3,
                }}
            >
                <Grid container spacing={2}>

                    {/* Cliente */}
                    <Grid item sm={12}>
                        <TextField
                            fullWidth
                            placeholder="Cliente"
                            variant="outlined"
                            margin="normal"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonOutlinedIcon fontSize="small" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>

                    {/* Produto */}
                    <Grid item sm={12}>
                        <TextField
                            fullWidth
                            placeholder="Produto"
                            variant="outlined"
                            margin="normal"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Inventory2OutlinedIcon fontSize="small" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>

                    {/* Código de barras */}
                    <Grid item sm={6}>
                        <TextField
                            fullWidth
                            placeholder="Código de barras"
                            variant="outlined"
                            margin="normal"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <QrCode2OutlinedIcon fontSize="small" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>

                    {/* Quantidade */}
                    <Grid item sm={6}>
                        <TextField
                            fullWidth
                            placeholder="Quantidade"
                            variant="outlined"
                            margin="normal"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Inventory2OutlinedIcon fontSize="small" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>

                    {/* Forma de Pagamento */}
                    <Grid item sm={6}>
                        <TextField
                            fullWidth
                            placeholder="Forma de Pagamento"
                            variant="outlined"
                            margin="normal"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SellOutlinedIcon fontSize="small" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>

                    {/* Data de Validade */}
                    <Grid item sm={6} >
                        <DatePicker
                            selected={validate}
                            onChange={(date) => setValidate(date)}
                            dateFormat="dd/MM/yyyy"
                            customInput={
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    margin="normal"
                                    sx={{ width: "355px" }}
                                    InputProps={{
                                        placeholder: "Data",
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
                    
                </Grid>
            </Box>
        </Box>
    );
};