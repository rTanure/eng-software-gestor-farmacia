import { Box, TextField, InputAdornment, Grid, IconButton } from "@mui/material";
import React, { useState } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import "react-datepicker/dist/react-datepicker.css";
import SubtitlesOutlinedIcon from '@mui/icons-material/SubtitlesOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import MedicationLiquidOutlinedIcon from '@mui/icons-material/MedicationLiquidOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { Typography } from "@mui/material";


export const FormAddReceita = () => {
    const [fileName, setFileName] = useState("");

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        }
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
                                        <PersonOutlineIcon fontSize="small" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>

                    {/* Médico responsável */}
                    <Grid item sm={6}>
                        <TextField
                            fullWidth
                            placeholder="Médico responsável"
                            variant="outlined"
                            margin="normal"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <MedicalServicesOutlinedIcon fontSize="small" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>

                    {/* Medicamentos */}
                    <Grid item sm={6}>
                        <TextField
                            fullWidth
                            placeholder="Medicamentos"
                            variant="outlined"
                            margin="normal"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <MedicationLiquidOutlinedIcon fontSize="small" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>

                    {/* CRM */}
                    <Grid item sm={6}>
                        <TextField
                            fullWidth
                            placeholder="CRM do Médico"
                            variant="outlined"
                            margin="normal"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SubtitlesOutlinedIcon fontSize="small" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>

                    {/* Instruções */}
                    <Grid item sm={6}>
                        <TextField
                            fullWidth
                            placeholder="Instruções"
                            variant="outlined"
                            margin="normal"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <DescriptionOutlinedIcon fontSize="small" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>

                    {/* Receita */}
                    <Grid item xs={12}>
                        <input
                            id="upload-receita"
                            type="file"
                            accept="application/pdf"
                            style={{ display: "none" }}
                            onChange={handleFileChange}
                        />

                        {/* Caixa visual que age como botão */}
                        <label htmlFor="upload-receita" style={{ width: "100%", cursor: "pointer" }}>
                            <Box
                                sx={{
                                    border: "2px dashed gray",
                                    borderRadius: "10px",
                                    padding: 2,
                                    height: "55px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    '&:hover': {
                                        backgroundColor: '#FFFFFF',
                                    }
                                }}
                            >
                                {fileName ? (
                                    <Typography>{fileName}</Typography>
                                ) : (
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <UploadFileIcon />
                                        <Typography>Selecionar Receita (PDF)</Typography>
                                    </Box>
                                )}
                            </Box>
                        </label>
                    </Grid>

                </Grid>
            </Box>
        </Box>
    );
};
