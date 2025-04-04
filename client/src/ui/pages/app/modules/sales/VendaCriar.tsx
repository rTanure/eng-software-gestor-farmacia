import {
  Box,
  TextField,
  InputAdornment,
  Grid,
  MenuItem,
  Button,
  Typography,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useQuery } from "react-query";
import { ISale, saleMdl } from "../../../../../api/salesMdl";
import { clienteMdl } from "../../../../../api/clienteMdl";
import { stockMdl } from "../../../../../api/stockMdl";
import DescriptionIcon from "@mui/icons-material/Description";
import SaveIcon from "@mui/icons-material/Save";
import { drawerWidth } from "../../MenuLateral";
import { prescriptionMdl } from "../../../../../api/prescriptionMdl";

export const VendaCriar = () => {
  const [formValues, setFormValues] = useState({
    prescriptionId: "",
    clientId: "",
    productId: "",
    date: new Date().toISOString().split("T")[0],
  } as ISale);
  const navigate = useNavigate();

  const { data: clients } = useQuery(
    "clients",
    () => clienteMdl.getAllClientes({ name: "" }),
    {
      select: (data) =>
        data.data.map((client) => ({ id: client.id, name: client.name })) || [],
    }
  );

  const { data: products } = useQuery("products", () => stockMdl.getAll(), {
    select: (data) =>
      data.data.map((product) => ({ id: product.id, name: product.name })) ||
      [],
  });

  const { data: prescriptions } = useQuery(
    ["prescriptions", formValues.clientId],
    () => prescriptionMdl.getAllPrescriptions(),
    {
      select: (data) =>
        data.data.map((product) => ({
          id: product.id,
          name: product.description,
        })) || [],
      enabled: !!formValues.clientId,
    }
  );

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formValues);
    saleMdl
      .create({ ...formValues, id: null })
      .then(() => navigate("/app/vendas"));
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
            <DescriptionIcon
              sx={{
                width: "80%",
                height: "80%",
                color: "#1B2C44",
              }}
            ></DescriptionIcon>
          </Box>
          <Typography variant="h6" className="Titulo">
            CADASTRAR VENDA
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
            // height: "60%",
            border: "3px solid #4C585B",
            borderRadius: "20px",
            mt: 2.5,
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.9)",
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
                    <Grid item sm={6}>
                      <Select
                        fullWidth
                        displayEmpty
                        name="clientId"
                        variant="outlined"
                        value={formValues.clientId}
                        onChange={handleChange}
                      >
                        <MenuItem value="" disabled>
                          Selecione o cliente
                        </MenuItem>
                        {clients?.map((client) => (
                          <MenuItem key={client.id} value={client.id}>
                            {client.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </Grid>

                    <Grid item sm={6}>
                      <Select
                        fullWidth
                        displayEmpty
                        name="productId"
                        variant="outlined"
                        value={formValues.productId}
                        onChange={handleChange}
                      >
                        <MenuItem value="" disabled>
                          Selecione o produto
                        </MenuItem>
                        {products?.map((product) => (
                          <MenuItem key={product.id} value={product.id}>
                            {product.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </Grid>

                    <Grid item sm={6}>
                      <Select
                        fullWidth
                        displayEmpty
                        name="prescriptionId"
                        variant="outlined"
                        value={formValues.prescriptionId}
                        onChange={handleChange}
                      >
                        <MenuItem value="">Sem receitas</MenuItem>
                        {prescriptions?.map((prescription) => (
                          <MenuItem
                            key={prescription.id}
                            value={prescription.id}
                          >
                            {prescription.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </Grid>

                    <Grid item sm={6}>
                      <TextField
                        fullWidth
                        type="date"
                        name="date"
                        variant="outlined"
                        value={formValues.date}
                        onChange={handleChange}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <CalendarMonthOutlinedIcon fontSize="small" />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>

                    <Grid item sm={6}>
                      <TextField
                        fullWidth
                        type="number"
                        placeholder="Quantidade"
                        name="amount"
                        variant="outlined"
                        value={formValues.amount}
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            amount: isNaN(Number(e.target.value))
                              ? 0
                              : Number(e.target.value),
                          })
                        }
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <ShoppingCartIcon fontSize="small" />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>

                    <Grid item sm={6}>
                      <TextField
                        fullWidth
                        type="number"
                        placeholder="Preço de venda"
                        name="salePrice"
                        variant="outlined"
                        value={formValues.salePrice}
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            salePrice: isNaN(Number(e.target.value))
                              ? 0
                              : Number(e.target.value),
                          })
                        }
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <AttachMoneyIcon fontSize="small" />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>

                    <Grid item sm={3}>
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
