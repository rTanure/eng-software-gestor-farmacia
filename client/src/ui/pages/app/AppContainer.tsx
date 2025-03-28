import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { FC, ReactNode, useState } from "react";
import PermanentDrawerLeft from "./MenuLateral";

interface AppContainerProps {
  children: ReactNode;
}

const AppContainer = (props: AppContainerProps) => {
  return (
    <Box>
      <Box
        className="papel-de-parede"
        sx={{
          backgroundImage: 'url("/img/background.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          border: "none",
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }}
      >
        <PermanentDrawerLeft />
        {props.children}
      </Box>
    </Box>
  );
};

export default AppContainer;
