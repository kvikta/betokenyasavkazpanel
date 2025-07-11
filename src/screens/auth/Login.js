import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Card } from '@mui/joy';

// Global CSS to ensure consistency with Surveyiss background and typography
const styles = `
  body {
    background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #f8f9fa;
  }
`;

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      {/* Inject global styles */}
      <style>{styles}</style>
      <Card
        variant="soft"
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #e6f4ea 0%, #f1f8ff 100%)',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          transition: 'transform 0.3s',
          '&:hover': { transform: 'translateY(-5px)' },
          color: '#343a40',
          padding: '20px',
        }}
      >
        <Avatar
          sx={{
            m: 1,
            background: 'linear-gradient(135deg, #ff8a00 0%, #e52e71 100%)',
            color: 'white',
          }}
        >
          <LockOutlinedIcon />
        </Avatar>
        <Typography
          fontWeight="bold"
          component="h1"
          variant="h5"
          sx={{
            fontSize: '2rem',
            background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 2px 4px rgba(0,0,0,0.2)',
          }}
        >
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '100%' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            sx={{
              '& .MuiInputBase-root': {
                borderRadius: '10px',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                color: '#343a40',
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              },
              '& .MuiInputLabel-root': {
                color: '#343a40',
                fontWeight: 'bold',
              },
              '& .MuiInputBase-root:hover': {
                backgroundColor: 'rgba(255, 255, 255, 1)',
              },
              '& .Mui-focused': {
                '& .MuiInputLabel-root': {
                  color: '#ff8a00',
                },
                '& .MuiInputBase-root': {
                  borderColor: '#ff8a00',
                },
              },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            sx={{
              '& .MuiInputBase-root': {
                borderRadius: '10px',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                color: '#343a40',
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              },
              '& .MuiInputLabel-root': {
                color: '#343a40',
                fontWeight: 'bold',
              },
              '& .MuiInputBase-root:hover': {
                backgroundColor: 'rgba(255, 255, 255, 1)',
              },
              '& .Mui-focused': {
                '& .MuiInputLabel-root': {
                  color: '#ff8a00',
                },
                '& .MuiInputBase-root': {
                  borderColor: '#ff8a00',
                },
              },
            }}
          />
          <FormControlLabel
            control={
              <Checkbox
                value="remember"
                sx={{
                  color: '#ff8a00',
                  '&.Mui-checked': {
                    color: '#e52e71',
                  },
                }}
              />
            }
            label="Remember me"
            sx={{ color: '#343a40', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              background: 'linear-gradient(135deg, #ff8a00 0%, #e52e71 100%)',
              color: 'white',
              borderRadius: '50px',
              padding: '12px 30px',
              fontWeight: 600,
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              boxShadow: '0 4px 15px rgba(229, 46, 113, 0.4)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 8px 20px rgba(229, 46, 113, 0.6)',
                background: 'linear-gradient(135deg, #ff8a00 0%, #e52e71 100%)',
              },
            }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link
                href="/register"
                variant="body2"
                sx={{
                  color: '#ff8a00',
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#e52e71',
                    textDecoration: 'underline',
                  },
                }}
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Container>
  );
}
