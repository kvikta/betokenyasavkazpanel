import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'

// Global CSS to ensure consistency with Surveyiss background and typography
const styles = `
  body {
    background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #f8f9fa;
  }
`;

const pages = ['Home', 'Profile', 'Referrals'];

export default function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenMenu = (page) => {
    if (page === "Home") {
      navigate('/home');
    }
    if (page === "Profile") {
      navigate('/profile');
    }
    if (page === "Referrals") {
      navigate('/referrals');
    }
    handleCloseNavMenu();
  };

  return (
    <>
      {/* Inject global styles */}
      <style>{styles}</style>
      <AppBar
        position="static"
        sx={{
          background: 'linear-gradient(135deg, #ff8a00 0%, #e52e71 100%)',
          boxShadow: '0 4px 15px rgba(229, 46, 113, 0.4)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/home"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                fontWeight: 700,
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <Box
                component="img"
                sx={{
                  height: 30,
                  width: 90,
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                  filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))',
                }}
                alt="Surveyiss Logo"
                src={logo}
              />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                  '& .MuiPaper-root': {
                    background: 'linear-gradient(135deg, #e6f4ea 0%, #f1f8ff 100%)',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                    color: '#343a40',
                  },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={() => handleOpenMenu(page)}
                    sx={{
                      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                      color: '#343a40',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #ff8a00 0%, #e52e71 100%)',
                        color: 'white',
                      },
                    }}
                  >
                    <Typography
                      textAlign="center"
                      sx={{
                        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                        fontSize: '1rem',
                      }}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/home"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                fontWeight: 700,
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <Box
                component="img"
                sx={{
                  height: 30,
                  width: 90,
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                  filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))',
                }}
                alt="Surveyiss Logo"
                src={logo}
              />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleOpenMenu(page)}
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                    fontWeight: 600,
                    borderRadius: '50px',
                    padding: '8px 20px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #ff8a00 0%, #e52e71 100%)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 10px rgba(229, 46, 113, 0.4)',
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
