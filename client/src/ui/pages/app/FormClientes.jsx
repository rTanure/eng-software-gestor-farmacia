import { Box, TextField, InputAdornment, Grid, MenuItem, Button, IconButton, Stack } from "@mui/material";  // Adicionando Button, IconButton e Stack
import React, { useState } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { IMaskInput } from "react-imask";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AlternateEmailOutlineIcon from "@mui/icons-material/AlternateEmailOutlined";
import WcOutlineIcon from "@mui/icons-material/WcOutlined";
import PhoneOutlineIcon from "@mui/icons-material/PhoneOutlined";
import "../../../css/FormAdd.css";
import { styled } from "@mui/material/styles";
import PictureAsPdfOutlineIcon from '@mui/icons-material/PictureAsPdfOutlined';

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

const TextMaskCPF = React.forwardRef(function TextMaskCPF(props, ref) {
    const { onChange, ...other } = props;
    return (
        <IMaskInput
            {...other}
            mask="000.000.000-00"
            definitions={{ "0": /[0-9]/ }}
            inputRef={ref}
            onAccept={(value) => onChange({ target: { name: props.name, value } })}
            overwrite
        />
    );
});

TextMaskCPF.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

const Input = styled("input")({
    display: "none",
});

export const FormClientes = () => {
    const [values, setValues] = useState({ textmask: "", cpf: "" });
    const [birthdate, setBirthdate] = useState(null);
    const [gender, setGender] = useState("");


    const handleChange = (event) => {
        setValues((prevValues) => ({
            ...prevValues,
            [event.target.name]: event.target.value,
        }));
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
                    height: "100%",
                    width: "100%",
                    flexDirection: "row",
                    overflow: "auto",
                    borderRadius: 10,
                    padding: 3
                }}
            >
                <Grid container spacing={2}>

                    {/* Nome Completo */}
                    <Grid item sm={6}>
                        <TextField
                            fullWidth
                            placeholder="Nome Completo"
                            variant="outlined"
                            margin="normal"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonOutlineIcon fontSize="small" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>

                    {/* Telefone */}
                    <Grid item sm={6}>
                        <TextField
                            fullWidth
                            placeholder="Telefone"
                            variant="outlined"
                            margin="normal"
                            value={values.textmask}
                            onChange={handleChange}
                            name="textmask"
                            InputProps={{
                                inputComponent: TextMaskCustom,
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PhoneOutlineIcon fontSize="small" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>

                    {/* CPF */}
                    <Grid item sm={6}>
                        <TextField
                            fullWidth
                            placeholder="CPF"
                            variant="outlined"
                            margin="normal"
                            value={values.cpf}
                            onChange={handleChange}
                            name="cpf"
                            InputProps={{
                                inputComponent: TextMaskCPF,
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <BadgeOutlinedIcon fontSize="small" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>

                    {/* Data de Nascimento */}
                    <Grid item sm={6}>
                        <DatePicker
                            selected={birthdate}
                            onChange={(date) => setBirthdate(date)}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="Nascimento"
                            customInput={
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    margin="normal"
                                    style={{ width: "395px" }}  
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

                    {/* E-mail */}
                    <Grid item sm={6}>
                        <TextField
                            fullWidth
                            placeholder="E-mail"
                            variant="outlined"
                            margin="normal"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AlternateEmailOutlineIcon fontSize="small" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>

                    {/* Sexo */}
                    <Grid item sm={6}>
                        <TextField
                            fullWidth
                            select
                            label="Sexo"
                            value={gender}
                            onChange={(event) => setGender(event.target.value)}
                            variant="outlined"
                            margin="normal"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <WcOutlineIcon fontSize="small" />
                                    </InputAdornment>
                                ),
                            }}
                        >
                            <MenuItem value="male">Homem</MenuItem>
                            <MenuItem value="female">Mulher</MenuItem>
                            <MenuItem value="other">Outro</MenuItem>
                        </TextField>
                    </Grid>

                    {/* Receita */}
                    <Grid item sm={12}>
                        <TextField
                            fullWidth
                            placeholder="Receita"
                            variant="outlined"
                            margin="normal"
                            InputProps={{
                                startAdornment: (
                                    <label htmlFor="icon-button-file">
                                        <InputAdornment position="start">
                                            <Input accept="application/pdf" id="icon-button-file" type="file" />
                                            <IconButton color="primary" aria-label="upload pdf" component="span" sx={{ marginLeft: -1 }}>
                                                <PictureAsPdfOutlineIcon fontSize="small" sx={{ color: "gray" }} />
                                            </IconButton>
                                        </InputAdornment>
                                    </label>
                                ),
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};
