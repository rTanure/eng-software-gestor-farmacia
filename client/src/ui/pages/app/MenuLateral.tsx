import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import InventoryIcon from '@mui/icons-material/Inventory';
import { useAuthentication } from '../../../hooks/useAuthentication';
import { modules } from './modules';
import { useNavigate } from 'react-router';
import { Button } from '@mui/material';

export const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const {logout, user} = useAuthentication()
  console.log(user)
  const navigate = useNavigate()

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: '#4C585B',
            color: 'white',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box
          sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            maxWidth: '100%',
          }}
        >
          <Box
            className="Logo-principal"
            sx={{
              p: 0,
              zIndex: 1,
              width: '140px',
              height: '140px',
              display: 'flex',
              mt: 4,
              mb: 4,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <figure style={{ margin: 0, padding: 0, width: '100%' }}>
              <img
                className="imagem-logo-principal"
                src="/img/MEDMAISCompleta.png"
                alt="Logo Medmais"
                style={{ display: 'block', width: '100%' }}
              />
            </figure>
          </Box>
        </Box>
        <Divider />
        <List
          sx={{
            mt: 3,
          }}
        >
          {modules.map((module, index) => (
            <ListItem key={module.label} disablePadding>
              <ListItemButton onClick={() => navigate("/app" + module.path)}>
                <ListItemIcon>{<module.icon />}</ListItemIcon>
                <ListItemText primary={module.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {/* Botão de logout */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
          }}
        >
          <Divider />
          <List>
          <ListItem disablePadding>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                padding: '8px 16px',
              }}
            >
              <Typography variant="body1">{user?.login}</Typography>
              <Box sx={{ marginLeft: 'auto' }}>
                <ListItemButton 
                  onClick={logout}
                >
                    <LogoutIcon />
                </ListItemButton>
              </Box>
            </Box>
          </ListItem>
        </List>
        </Box>
      </Drawer>
    </Box>
  );
}
