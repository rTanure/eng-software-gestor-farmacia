import { Box, TextField, InputAdornment, Grid } from "@mui/material";
import React, { useState } from "react";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import { IMaskInput } from "react-imask";
import PropTypes from "prop-types";
import "react-datepicker/dist/react-datepicker.css";
import AlternateEmailOutlineIcon from "@mui/icons-material/AlternateEmailOutlined";
import PhoneOutlineIcon from "@mui/icons-material/PhoneOutlined";
import { styled } from "@mui/material/styles";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';

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

const TextMaskCNPJ = React.forwardRef(function TextMaskCPF(props, ref) {
    const { onChange, ...other } = props;
    return (
        <IMaskInput
            {...other}
            mask="XX.XXX.XXX/0001-XX"
            definitions={{ "X": /[0-9]/ }}
            inputRef={ref}
            onAccept={(value) => onChange({ target: { name: props.name, value } })}
            overwrite
        />
    );
});

TextMaskCNPJ.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};


const Input = styled("input")({
    display: "none",
});

export const FormAddFornecedores = () => {
    const [values, setValues] = useState({ textmask: "", cnpj: "" });

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
                    height: "95%",
                    width: "90%",
                    flexDirection: "row",
                    overflow: "auto",
                    borderRadius: 10,
                    padding: 3
                }}
            >
                <Grid container spacing={2}>

                    {/* Nome da empresa */}
                    <Grid item sm={12}>
                        <TextField
                            fullWidth
                            placeholder="Nome da Empresa"
                            variant="outlined"
                            margin="normal"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <BusinessOutlinedIcon fontSize="small" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>

                    {/* CNPJ */}
                    <Grid item sm={6}>
                        <TextField
                            fullWidth
                            placeholder="CNPJ"
                            variant="outlined"
                            margin="normal"
                            value={values.cnpj}
                            onChange={handleChange}
                            name="cnpj"
                            InputProps={{
                                inputComponent: TextMaskCNPJ,
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <BadgeOutlinedIcon fontSize="small" />
                                    </InputAdornment>
                                ),
                            }}
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

                    {/* Endereço */}
                    <Grid item sm={6}>
                        <TextField
                            fullWidth
                            placeholder="Endereço"
                            variant="outlined"
                            margin="normal"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LocationOnOutlinedIcon fontSize="small" />
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

                    {/* Categoria de fornecedor */}
                    <Grid item sm={12}>
                        <TextField
                            fullWidth
                            placeholder="Categoria de Fornecedor"
                            variant="outlined"
                            margin="normal"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <HandshakeOutlinedIcon fontSize="small" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};
