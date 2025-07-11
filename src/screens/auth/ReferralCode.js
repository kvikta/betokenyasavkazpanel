import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import { Card, LinearProgress, Container, Typography, Box, Grid, Button, ListDivider } from "@mui/joy";
import logo from "../../assets/logo.png"

// Global CSS to ensure consistency with Surveyiss background and typography
const styles = `
  body {
    background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #f8f9fa;
  }
`;

export default function ReferralCode() {
  const [showProgressDialog, setProgressDialog] = useState(false);
  const [codeError, setCodeError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setCodeError(true);
  };

  return (
    <Container component="main" maxWidth="xs">
      {/* Inject global styles */}
      <style>{styles}</style>
      <Card
        variant="soft"
        size="lg"
        sx={{
          marginTop: 1,
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
        <Box
          component="img"
          sx={{
            height: 30,
            width: 90,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
            filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))',
            marginBottom: '1rem',
          }}
          alt="Surveyiss Logo"
          src={logo}
        />
        <ListDivider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
        <Typography
          fontWeight="bold"
          level="h4"
          sx={{
            fontSize: '2rem',
            background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 2px 4px rgba(0,0,0,0.2)',
          }}
        >
          Get 200 Loyalty Points
        </Typography>
        <Typography
          sx={{
            color: '#343a40',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            fontSize: '1rem',
            textAlign: 'center',
            mt: 1,
          }}
        >
          If you are invited by someone, please enter your invitation code to earn your first 10 credits
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '100%' }}>
          <TextField
            margin="normal"
            name="referralCode"
            required
            fullWidth
            id="referralCode"
            label="Referral Code"
            error={codeError}
            helperText={codeError ? "Please enter a valid code" : ""}
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
              '& .MuiFormHelperText-root': {
                color: '#e52e71',
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              },
            }}
          />
          {showProgressDialog && (
            <LinearProgress
              sx={{
                mt: 1,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                '& .MuiLinearProgress-bar': {
                  background: 'linear-gradient(135deg, #ff8a00 0%, #e52e71 100%)',
                },
              }}
            />
          )}
          <Button
            type="submit"
            fullWidth
            variant="solid"
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
            Submit
          </Button>
          <Grid container>
            <Grid item>
              <Link
                href="/"
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
                I don't have a referral code
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Container>
  );
}
