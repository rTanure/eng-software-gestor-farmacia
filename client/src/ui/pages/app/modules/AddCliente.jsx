import { Box, Button } from "@mui/material";
import React from "react";
import { drawerWidth } from "../MenuLateral";
import Typography from "@mui/material/Typography";
import PeopleIcon from "@mui/icons-material/People";
import { useNavigate } from "react-router";
import { FormClientes } from '../FormClientes';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

export default function AddCliente() {
    const navigate = useNavigate();

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
                        <PeopleIcon
                            sx={{
                                width: "100%",
                                height: "100%",
                                color: "#1B2C44",
                            }}
                        ></PeopleIcon>
                    </Box>
                    <Typography variant="h6" className="Titulo">
                        CLIENTES
                    </Typography>
                </Box>

                {/* Box com as infos (posicionada abaixo do container superior) */}
                <Box
                    className="Container-Principal"
                    sx={{
                        display: 'flex',
                        flexDirection: "column",
                        bgcolor: '#D9D9D9',
                        width: '100%',
                        height: "90%",
                        border: '3px solid #4C585B',
                        borderRadius: '20px',
                        mt: 2.5,
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.9)',
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            width: "100%",
                            height: "10%",
                            justifyContent: "flex-start",
                            alignItems: "end",
                            padding: "0 30px"
                        }}
                    >
                        <Typography variant="h5" className="Titulo">
                            CLIENTE
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            width: "100%",
                            height: "80%",
                        }}>
                        <FormClientes />
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            width: "100%",
                            height: "10%",
                            paddingRight: "25px",
                            gap: "20px"
                        }}>

                        <Button
                            sx={{
                                display: "flex",
                                width: "15%",
                                height: "60%",
                                borderRadius: "15px",
                                bgcolor: " #4C585B",
                                '& .MuiTouchRipple-root': {
                                    color: '#FFFFFF' 
                                },
                                '&:hover': {
                                    backgroundColor: '#7E99A3',
                                    border: '2px solid #FFFFFF',
                                }
                            }}
                        >
                            <Typography variant="h8" className="Titulo" sx={{ color: "white" }}>
                                Cancelar
                            </Typography>
                        </Button>

                        <Button
                            sx={{
                                display: "flex",
                                justifyContent: "space-around",
                                width: "15%",
                                height: "60%",
                                borderRadius: "15px",
                                bgcolor: " #4C585B",
                                '& .MuiTouchRipple-root': {
                                    color: '#FFFFFF' 
                                },
                                '&:hover': {
                                    backgroundColor: '#7E99A3',
                                    border: '2px solid #FFFFFF',
                                },
                                '&:active': {
                                    backgroundColor: '#7E99A3',
                                    border: '2px solid #FFFFFF',
                                }
                            }}
                        >
                            <SaveOutlinedIcon
                                sx={{
                                    width: "20%",
                                    height: "100%",
                                    color: "white",
                                }}
                            ></SaveOutlinedIcon>
                            <Typography variant="h8" className="Titulo" sx={{ color: "white" }}>
                                Salvar
                            </Typography>
                        </Button>
                    </Box>

                </Box>
            </Box>
        </Box>
    );
}
