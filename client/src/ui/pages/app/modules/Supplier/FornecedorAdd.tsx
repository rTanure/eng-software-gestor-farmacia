import {
  Box,
  TextField,
  InputAdornment,
  Grid,
  MenuItem,
  Button,
  Typography,
  Select
} from "@mui/material";
import React, { useState } from "react";
import BusinessIcon from "@mui/icons-material/Business";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import CategoryIcon from "@mui/icons-material/Category";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { supplierMdl, ISupplier } from "../../../../../api/supplierMdl";
import { drawerWidth } from "../../MenuLateral";

export const FornecedorAdd = () => {
  const [formValues, setFormValues] = useState<ISupplier>({} as ISupplier);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { companyName, cnpj, address, phone, email, category } = formValues;

    // console.log("Form Values:", formValues);
    supplierMdl.create({
      id: null,
      companyName,
      cnpj,
      address,
      phone,
      email,
      category,
    } as ISupplier).then(() => navigate("/app/fornecedores"));
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
      <Box className="wrapper" sx={{ display: "flex", flexDirection: "column", height: "100%", width: "70%", padding: 2 }}>
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
            pl: 6
          }}
        >
          <Typography variant="h6" className="Titulo">
            CADASTRAR NOVO FORNECEDOR
          </Typography>
        </Box>

        <Box
          className="Container-Principal"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            bgcolor: '#D9D9D9',
            width: '100%',
            border: '3px solid #4C585B',
            borderRadius: '20px',
            padding: 6,
            mt: 2.5,
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.9)',
          }}
        >
          <Box className="Clients" sx={{ display: 'flex', flexDirection: 'column', alignItems: "center", width: "100%", height: "85%" }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item sm={6}>
                  <TextField
                    fullWidth
                    placeholder="Nome da Empresa"
                    variant="outlined"
                    name="companyName"
                    value={formValues.companyName}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <BusinessIcon fontSize="small" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item sm={6}>
                  <TextField
                    fullWidth
                    placeholder="CNPJ"
                    variant="outlined"
                    name="cnpj"
                    value={formValues.cnpj}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <BadgeOutlinedIcon fontSize="small" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item sm={6}>
                  <TextField
                    fullWidth
                    placeholder="Endereço"
                    variant="outlined"
                    name="address"
                    value={formValues.address}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <BusinessIcon fontSize="small" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item sm={6}>
                  <TextField
                    fullWidth
                    placeholder="Telefone"
                    variant="outlined"
                    name="phone"
                    value={formValues.phone}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneOutlinedIcon fontSize="small" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item sm={6}>
                  <TextField
                    fullWidth
                    placeholder="E-mail"
                    variant="outlined"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AlternateEmailOutlinedIcon fontSize="small" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item sm={6}>
                  <TextField
                    fullWidth
                    placeholder="Categoria"
                    variant="outlined"
                    name="category"
                    value={formValues.category}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          {/* <AlternateEmailOutlinedIcon fontSize="small" /> */}
                          <CategoryIcon fontSize="small" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item sm={12}>
                  <Button variant="contained" type="submit">
                    Cadastrar Fornecedor
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
