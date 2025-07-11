import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Divider } from '@mui/material';

import { useAtom } from 'jotai';
import { userObject } from "../state";
import { AccountBalanceWallet, AccountCircleOutlined, Loop, Loyalty } from '@mui/icons-material';

// Global CSS to ensure consistency with Surveyiss background and typography
const styles = `
  body {
    background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #f8f9fa;
  }
`;

export default function HomeCard() {
  const navigate = useNavigate();
  const [user, setUser] = useAtom(userObject);

  const viewEarnings = () => navigate("/profile");
  const viewRefarrals = () => navigate("/referrals");

  return (
    <div>
      {/* Inject global styles */}
      <style>{styles}</style>
      <Card
        variant="soft"
        sx={{
          background: 'linear-gradient(135deg, #e6f4ea 0%, #f1f8ff 100%)',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          transition: 'transform 0.3s',
          '&:hover': { transform: 'translateY(-5px)' },
          color: '#343a40',
        }}
      >
        <div>
          <Typography
            sx={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 4px rgba(0,0,0,0.2)',
            }}
          >
            Total Balance
          </Typography>
          <Typography
            level="title-lg"
            sx={{ color: '#343a40', fontWeight: 'bold' }}
          >
            Ksh {user.accountBalance}.00
          </Typography>
        </div>
        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
        <CardContent orientation="horizontal">
          <div>
            <Typography sx={{ color: '#343a40' }}>
              Your Balance:
            </Typography>
            <Typography
              level="title-lg"
              align="left"
              startDecorator={<AccountBalanceWallet />}
              sx={{ color: '#343a40', fontWeight: 'bold' }}
            >
              Ksh {user.accountBalance}.00
            </Typography>
          </div>
          <Button
            onClick={viewEarnings}
            variant="solid"
            size="md"
            color="primary"
            endDecorator={<AccountCircleOutlined />}
            aria-label="View profile"
            sx={{
              ml: 'auto',
              alignSelf: 'center',
              fontWeight: 600,
              background: 'linear-gradient(135deg, #ff8a00 0%, #e52e71 100%)',
              color: 'white',
              borderRadius: '50px',
              padding: '12px 30px',
              boxShadow: '0 4px 15px rgba(229, 46, 113, 0.4)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 8px 20px rgba(229, 46, 113, 0.6)',
              },
            }}
          >
            Profile
          </Button>
        </CardContent>
        <CardContent orientation="horizontal">
          <div>
            <Typography sx={{ color: '#343a40' }}>
              Loyalty Points:
            </Typography>
            <Typography
              level="title-lg"
              align="left"
              startDecorator={<Loyalty />}
              sx={{ color: '#343a40', fontWeight: 'bold' }}
            >
              {user.loyaltyPoints}
            </Typography>
          </div>
          <Button
            onClick={viewRefarrals}
            variant="solid"
            size="md"
            color="primary"
            endDecorator={<Loop />}
            aria-label="View referrals"
            sx={{
              ml: 'auto',
              alignSelf: 'center',
              fontWeight: 600,
              background: 'linear-gradient(135deg, #ff8a00 0%, #e52e71 100%)',
              color: 'white',
              borderRadius: '50px',
              padding: '12px 30px',
              boxShadow: '0 4px 15px rgba(229, 46, 113, 0.4)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 8px 20px rgba(229, 46, 113, 0.6)',
              },
            }}
          >
            Referrals
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
