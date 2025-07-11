import * as React from 'react';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import Check from '@mui/icons-material/Check';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from "react-router-dom";
import { Chip } from '@mui/joy';
import { useAtom } from 'jotai';
import { subscribedPackage } from "../state";

// Global CSS to ensure consistency with Surveyiss background and typography
const styles = `
  body {
    background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #f8f9fa;
  }
`;

export default function PricingCard(props) {
  const navigate = useNavigate();
  const [currentPackage, setCurrentPackage] = useAtom(subscribedPackage);

  const validatePayments = () => {
    navigate("/validate", { state: { index: props.index } });
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
        {props.data.planName === currentPackage.planName ? (
          <Chip
            size="sm"
            variant="outlined"
            sx={{
              background: 'linear-gradient(135deg, #ff8a00 0%, #e52e71 100%)',
              color: 'white',
              borderColor: 'rgba(255, 255, 255, 0.3)',
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              fontWeight: 600,
              mb: 2,
            }}
          >
            YOUR CURRENT PLAN
          </Chip>
        ) : null}

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
          {props.data.planName}
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
            Surveys per day: <Typography
              fontWeight="bold"
              sx={{
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                color: '#343a40',
                ml: 1,
              }}
            >
              {props.data.dailySurvey}
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
                Earnings per month: <Typography
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
                Daily income: <Typography
                  fontWeight="bold"
                  sx={{
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                    color: '#343a40',
                    ml: 1,
                  }}
                >
                  Ksh {props.data.dailyIncome}
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
            Minimum withdrawals: <Typography
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
            Earnings per survey: <Typography
              fontWeight="bold"
              sx={{
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                color: '#343a40',
                ml: 1,
              }}
            >
              Ksh {props.data.earningPerSurvey}
            </Typography>
          </ListItem>
        </List>
        <Divider
          inset="none"
          sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
        />
        {props.data.planName !== "Free Account" ? (
          <CardActions>
            <Typography
              level="title-lg"
              sx={{
                mr: 'auto',
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                color: '#343a40',
                fontWeight: 'bold',
              }}
            >
              Ksh {props.data.price}
            </Typography>
            <Button
              onClick={validatePayments}
              variant="solid"
              sx={{
                background: 'linear-gradient(135deg, #ff8a00 0%, #e52e71 100%)',
                color: 'white',
                borderRadius: '50px',
                padding: '8px 20px',
                fontWeight: 600,
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                boxShadow: '0 4px 10px rgba(229, 46, 113, 0.4)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 15px rgba(229, 46, 113, 0.6)',
                  background: 'linear-gradient(135deg, #ff8a00 0%, #e52e71 100%)',
                },
              }}
              endDecorator={<KeyboardArrowRight sx={{ color: 'white' }} />}
            >
              Start now
            </Button>
          </CardActions>
        ) : null}
      </Card>
    </>
  );
}
