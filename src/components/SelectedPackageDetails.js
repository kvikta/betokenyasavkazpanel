import * as React from 'react';
import Card from '@mui/joy/Card';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import Check from '@mui/icons-material/Check';

// Global CSS to ensure consistency with Surveyiss background and typography
const styles = `
  body {
    background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #f8f9fa;
  }
`;

export default function SelectedPackageDetails(props) {
  console.log(props);
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
          Selected Plan
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
            Plan Name: <Typography
              fontWeight="bold"
              sx={{
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                color: '#343a40',
                ml: 1,
              }}
            >
              {props.data.planName}
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
                Surveys: <Typography
                  fontWeight="bold"
                  sx={{
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                    color: '#343a40',
                    ml: 1,
                  }}
                >
                  {props.data.dailySurvey} Surveys per day
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
                Withdraw Limit: <Typography
                  fontWeight="bold"
                  sx={{
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                    color: '#343a40',
                    ml: 1,
                  }}
                >
                  Ksh {props.data.minimumWithdrawal}
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
            Monthly Income: <Typography
              fontWeight="bold"
              sx={{
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                color: '#343a40',
                ml: 1,
              }}
            >
              Ksh {props.data.monthlyIncome}
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
            Due Today: <Typography
              fontWeight="bold"
              sx={{
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                color: '#343a40',
                ml: 1,
              }}
            >
              Ksh {props.data.price}
            </Typography>
          </ListItem>
        </List>
      </Card>
    </>
  );
}
