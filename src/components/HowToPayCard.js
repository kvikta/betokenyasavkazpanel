import * as React from 'react';
import Card from '@mui/joy/Card';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import Check from '@mui/icons-material/Check';
import { IconButton } from '@mui/joy';
import { CopyAll } from '@mui/icons-material';

// Global CSS to ensure consistency with Surveyiss background and typography
const styles = `
  body {
    background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #f8f9fa;
  }
`;

export default function HowToPayCard(props) {
  const copyToClipBoard = () => {
    navigator.clipboard.writeText(props.data.tillNumber);
    // Consider replacing window.alert with a toast notification for better UX
  };

  return (
    <>
      {/* Inject global styles */}
      <style>{styles}</style>
      <Card
        size="lg"
        variant="outlined"
        sx={{
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
          level="h3"
          sx={{
            fontSize: '2rem',
            background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 2px 4px rgba(0,0,0,0.2)',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            fontWeight: 'bold',
          }}
        >
          How To Pay
        </Typography>
        <Divider
          inset="none"
          sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
        />
        <List
          size="sm"
          sx={{
            mx: 'calc(-1 * var(--ListItem-paddingX))',
            '--ListItem-paddingY': '0.75rem',
          }}
        >
          <ListItem
            sx={{
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <ListItemDecorator>
              <Check sx={{ color: '#ff8a00' }} />
            </ListItemDecorator>
            <Typography
              sx={{
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                color: '#343a40',
              }}
            >
              Go to M-PESA
            </Typography>
          </ListItem>
          {props.data.planName !== "Free Account" ? (
            <>
              <ListItem
                sx={{
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                <ListItemDecorator>
                  <Check sx={{ color: '#ff8a00' }} />
                </ListItemDecorator>
                Select: <Typography
                  fontWeight="bold"
                  sx={{
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                    color: '#343a40',
                    ml: 1,
                  }}
                >
                  Lipa na M-PESA
                </Typography>
              </ListItem>
              <ListItem
                sx={{
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                <ListItemDecorator>
                  <Check sx={{ color: '#ff8a00' }} />
                </ListItemDecorator>
                Select: <Typography
                  fontWeight="bold"
                  sx={{
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                    color: '#343a40',
                    ml: 1,
                  }}
                >
                  Buy Goods and Services
                </Typography>
              </ListItem>
            </>
          ) : null}
          <ListItem
            sx={{
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <ListItemDecorator>
              <Check sx={{ color: '#ff8a00' }} />
            </ListItemDecorator>
            Enter till no: <Typography
              fontWeight="bold"
              sx={{
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                color: '#343a40',
                ml: 1,
                mr: 2,
              }}
            >
              {props.data.tillNumber}
            </Typography>
            <IconButton
              variant="solid"
              sx={{
                background: 'linear-gradient(135deg, #ff8a00 0%, #e52e71 100%)',
                color: 'white',
                borderRadius: '50px',
                padding: '8px',
                boxShadow: '0 4px 10px rgba(229, 46, 113, 0.4)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 15px rgba(229, 46, 113, 0.6)',
                  background: 'linear-gradient(135deg, #ff8a00 0%, #e52e71 100%)',
                },
              }}
              onClick={copyToClipBoard}
            >
              <CopyAll sx={{ color: 'white' }} />
            </IconButton>
          </ListItem>
          <ListItem
            sx={{
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <ListItemDecorator>
              <Check sx={{ color: '#ff8a00' }} />
            </ListItemDecorator>
            Enter amount: <Typography
              fontWeight="bold"
              sx={{
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                color: '#343a40',
                ml: 1,
              }}
            >
              Ksh {props.amount}
            </Typography>
          </ListItem>
        </List>
      </Card>
    </>
  );
}
