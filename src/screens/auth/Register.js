import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import { Checkbox, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Card, LinearProgress, Container, Typography, Box, Grid, Button, ListDivider } from "@mui/joy";
import { useAtom } from 'jotai';
import { userObject, userLoggedIn } from "../../state";
import logo from "../../assets/logo.png"

// Global CSS to ensure consistency with Surveyiss background and typography
const styles = `
  body {
    background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #f8f9fa;
  }
`;

const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export default function Register() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useAtom(userLoggedIn);
  const [user, setUser] = useAtom(userObject);
  const [educationName, setEducationName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [lastnameError, setLastNameError] = useState(false);
  const [educationError, setEducationError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termsError, setTermsError] = useState(false);
  const [showProgressDialog, setProgressDialog] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(true);

  const handleEducationChange = (event) => {
    setEducationName(event.target.value);
  };

  const onTermsChange = (event) => {
    console.log("Terms Accepted", event.target.checked);
    setTermsAccepted(event.target.checked);
  };

  const randomStr = (len, arr) => {
    let ans = '';
    for (let i = len; i > 0; i--) {
      ans += arr[Math.floor(Math.random() * arr.length)];
    }
    return ans;
  };

  if (loggedIn) {
    navigate("/home");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (data.get('firstName').length < 1) {
      setNameError(true);
      return;
    } else {
      setNameError(false);
    }

    if (data.get('lastName').length < 1) {
      setLastNameError(true);
      return;
    } else {
      setLastNameError(false);
    }

    if (educationName.length < 1) {
      setEducationError(true);
      return;
    } else {
      setEducationError(false);
    }

    if (!data.get('email').match(isValidEmail)) {
      setEmailError(true);
      return;
    } else {
      setEmailError(false);
    }

    if (data.get('password').length < 6) {
      setPasswordError(true);
      return;
    } else {
      setPasswordError(false);
    }

    if (!termsAccepted) {
      setTermsError(true);
      return;
    } else {
      setTermsError(false);
    }

    setProgressDialog(true);
    setTimeout(() => {
      setUser((prev) => ({
        ...prev,
        firstName: data.get('firstName'),
        lastName: data.get('lastName'),
        education: educationName,
        email: data.get('email'),
        password: data.get('password'),
        referralCode: randomStr(10, '12345ABCDE'),
      }));
      setLoggedIn(true);
      setProgressDialog(false);
      navigate("/referralCode");
    }, 5000);
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
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '100%' }}>
          <TextField
            margin="normal"
            autoComplete="given-name"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="First Name"
            error={nameError}
            helperText={nameError ? "Please enter your first name" : ""}
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
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            error={lastnameError}
            helperText={lastnameError ? "Please enter your last name" : ""}
            autoComplete="family-name"
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
          <FormControl
            fullWidth
            sx={{
              mt: 2,
              mb: 1,
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
          >
            <InputLabel id="demo-simple-select-label">Level of Education *</InputLabel>
            <Select
              align="left"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={educationName}
              label="Level of Education *"
              onChange={handleEducationChange}
            >
              <MenuItem value="High School">High School</MenuItem>
              <MenuItem value="Diploma">Diploma</MenuItem>
              <MenuItem value="Bachelors Degree">Bachelors Degree</MenuItem>
              <MenuItem value="Masters Degree">Masters Degree</MenuItem>
            </Select>
          </FormControl>
          {educationError && (
            <Typography
              sx={{
                ml: 2,
                mt: 0,
                color: '#e52e71',
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                fontSize: '0.9rem',
              }}
              level="title-sm"
              align="left"
            >
              Select level of education
            </Typography>
          )}
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            error={emailError}
            helperText={emailError ? "Please enter a valid email" : ""}
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
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            error={passwordError}
            helperText={passwordError ? "Password too short" : ""}
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
          <FormControlLabel
            control={
              <Checkbox
                checked={termsAccepted}
                onChange={onTermsChange}
                sx={{
                  color: '#ff8a00',
                  '&.Mui-checked': {
                    color: '#e52e71',
                  },
                }}
              />
            }
            label="Accept Our Terms and Condition"
            componentsProps={{
              typography: {
                sx: {
                  color: '#343a40',
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                },
              },
            }}
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 1,
            }}
          >
            <Link
              href="/terms"
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
              View Terms and Conditions
            </Link>
          </Box>
          {termsError && (
            <Typography
              level="title-sm"
              sx={{
                color: '#e52e71',
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                fontSize: '0.9rem',
                mt: 1,
              }}
            >
              Accept our terms and conditions to continue
            </Typography>
          )}
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
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link
                href="/login"
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
                Already have an account? Login
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Container>
  );
}
