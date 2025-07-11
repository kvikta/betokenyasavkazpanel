import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import { Divider } from '@mui/material';
import { Alert, Box, Grid } from '@mui/joy';
import { Paid } from '@mui/icons-material';
import feather from '../assets/feather.png';

// Global CSS to ensure consistency with Surveyiss background and typography
const styles = `
  body {
    background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #f8f9fa;
  }
`;

export default function SurveyStartCard(props) {
  const navigate = useNavigate();

  // const [user, setUser] = useAtom(userObject)
  // const viewEarnings = () => {
  //     navigate("/profile")
  // }
  // const viewRefarrals = () => {
  //     navigate("/referrals")
  // }

  // const surveyStarted = () => {
  //     console.log('Button clicked!');
  // }

  return (
    <>
      {/* Inject global styles */}
      <style>{styles}</style>
      <Card
        size="sm"
        sx={{
          mt: 3,
          background: 'linear-gradient(135deg, #e6f4ea 0%, #f1f8ff 100%)',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          transition: 'transform 0.3s',
          '&:hover': { transform: 'translateY(-5px)' },
          color: '#343a40',
          padding: '20px',
        }}
      >
        <Typography
          fontWeight="bold"
          sx={{
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            color: '#343a40',
            fontSize: '1.1rem',
          }}
        >
          You are about to take Appex survey. You were prequalified for this survey and will earn{' '}
          <Typography
            variant="outlined"
            sx={{
              background: 'linear-gradient(135deg, #ff8a00 0%, #e52e71 100%)',
              color: 'white',
              borderColor: 'rgba(255, 255, 255, 0.3)',
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              fontWeight: 600,
              fontSize: '0.9rem',
              px: 1,
              py: 0.5,
              borderRadius: '50px',
            }}
            startDecorator={<Paid sx={{ color: 'white' }} />}
          >
            Ksh {props.amount}
          </Typography>
        </Typography>
        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            color: '#343a40',
            mt: 1,
          }}
        >
          <Box
            component="img"
            sx={{
              height: 30,
              width: 30,
              mr: 1,
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
            }}
            alt="Feather Icon"
            src={feather}
          />
          <Typography
            level="title-md"
            sx={{
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              color: '#343a40',
            }}
          >
            Give authentic & honest feedback
          </Typography>
        </Typography>
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            color: '#343a40',
            mt: 1,
          }}
        >
          <Box
            component="img"
            sx={{
              height: 30,
              width: 30,
              mr: 1,
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
            }}
            alt="Feather Icon"
            src={feather}
          />
          <Typography
            level="title-md"
            sx={{
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              color: '#343a40',
            }}
          >
            Earn money and have fun
          </Typography>
        </Typography>
        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
        <Grid xs={12} md={12}>
          <Button
            onClick={props.surveyStarted}
            variant="solid"
            sx={{
              mt: 2,
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
            fullWidth
          >
            Start Survey
          </Button>
        </Grid>
      </Card>
      <Alert
        sx={{
          mt: 1,
          background: 'linear-gradient(135deg, #e6f4ea 0%, #f1f8ff 100%)',
          borderRadius: '10px',
          color: '#343a40',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
        variant="soft"
      >
        <Typography
          sx={{
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            color: '#343a40',
            fontSize: '0.9rem',
          }}
        >
          Start survey and make sure to complete and submit in order to earn
        </Typography>
      </Alert>
    </>
  );
}
