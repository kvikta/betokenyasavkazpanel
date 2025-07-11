import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { AccountBalance, AccountCircleOutlined, Add, EmailOutlined, ListAltOutlined, Loop, Loyalty, Paid, Quiz, Star, Stars } from '@mui/icons-material';
import { Box, Divider } from '@mui/joy';

import { useAtom } from 'jotai';
import mpesaLogo from '../assets/mpesa.png';
import { userObject, userLoggedIn, paymentDetails, subscribedPackage } from "../state";

// Global CSS to ensure consistency with Surveyiss typography and background
const styles = `
  body {
    background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #f8f9fa;
  }
`;

export default function ProfileCard() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useAtom(userLoggedIn);
  const [user, setUser] = useAtom(userObject);
  const [currentPackage, setCurrentPackage] = useAtom(subscribedPackage);
  const [payments, setPayments] = useAtom(paymentDetails);
  const [surveysLength, setSurveysLength] = useState([]);

  useEffect(() => {
    fetch('https://derekkemoi.github.io/SurveyMonie/surveys.json')
      .then(response => response.json())
      .then(data => {
        setSurveysLength(data.surveys.length);
      });
  }, []);

  const takeSurveys = () => navigate("/home");
  const upgrade = () => navigate("/packages");
  const Addpayments = () => navigate("/payments");
  const viewRefarrals = () => navigate("/referrals");
  const withdraw = () => navigate("/withdraw");

  return (
    <div>
      {/* Inject global styles */}
      <style>{styles}</style>
      <Card
        level="body-sm"
        sx={{
          mx: 'calc(-1 * var(--ListItem-paddingX))',
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
            align="left"
            level="title-lg"
            startDecorator={<AccountCircleOutlined />}
            sx={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 4px rgba(0,0,0,0.2)',
            }}
          >
            {user.firstName} {user.lastName}
          </Typography>
          <Typography
            align="left"
            startDecorator={<EmailOutlined />}
            sx={{ color: '#f8f9fa', fontSize: '1rem' }}
          >
            {user.email}
          </Typography>
          <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
        </div>
        <CardContent orientation="horizontal">
          <div>
            <Typography sx={{ color: '#343a40' }}>Account type:</Typography>
            <Typography
              align="left"
              level="title-lg"
              startDecorator={<Star />}
              sx={{ color: '#343a40', fontWeight: 'bold' }}
            >
              {currentPackage.planName}
            </Typography>
            <Typography
              align="left"
              variant="outlined"
              color="primary"
              sx={{
                background: 'linear-gradient(135deg, #ff8a00 0%, #e52e71 100%)',
                color: 'white',
                borderRadius: '50px',
                padding: '4px 12px',
                fontSize: '0.9rem',
              }}
            >
              {currentPackage.dailySurvey} surveys per day
            </Typography>
          </div>
          <Button
            onClick={upgrade}
            variant="solid"
            size="md"
            color="warning"
            endDecorator={<Stars />}
            aria-label="Upgrade plan"
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
            Upgrade
          </Button>
        </CardContent>
        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
        <CardContent orientation="horizontal">
          <div>
            <Typography sx={{ color: '#343a40' }}>Account Balance:</Typography>
            <Typography
              align="left"
              level="title-lg"
              startDecorator={<AccountBalance />}
              sx={{ color: '#343a40', fontWeight: 'bold' }}
            >
              Ksh {user.accountBalance}
            </Typography>
          </div>
          <Button
            onClick={withdraw}
            variant="solid"
            size="md"
            color="success"
            endDecorator={<Paid />}
            aria-label="Withdraw funds"
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
            Withdraw
          </Button>
        </CardContent>
        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
        <CardContent orientation="horizontal">
          <div>
            <Typography sx={{ color: '#343a40' }}>Available Surveys:</Typography>
            <Typography
              align="left"
              level="title-lg"
              startDecorator={<Quiz />}
              sx={{ color: '#343a40', fontWeight: 'bold' }}
            >
              {surveysLength}
            </Typography>
          </div>
          <Button
            onClick={takeSurveys}
            variant="solid"
            size="md"
            color="primary"
            endDecorator={<ListAltOutlined />}
            aria-label="Take surveys"
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
            Surveys
          </Button>
        </CardContent>
        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
        <CardContent orientation="horizontal">
          <div>
            <Typography sx={{ color: '#343a40' }}>Loyalty points:</Typography>
            <Typography
              align="left"
              level="title-lg"
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
        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
        <CardContent orientation="horizontal">
          <div>
            <Typography sx={{ color: '#343a40' }}>Payments details:</Typography>
            {payments.added ? (
              <div>
                <Typography align="left" sx={{ color: '#343a40' }}>
                  Method:
                  <Box
                    component="img"
                    sx={{
                      height: 45,
                      width: 70,
                      maxHeight: { xs: 233, md: 167 },
                      maxWidth: { xs: 350, md: 250 },
                      filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))',
                    }}
                    alt="M-Pesa Logo"
                    src={mpesaLogo}
                  />
                </Typography>
                <Typography align="left" sx={{ color: '#343a40' }}>
                  Name:
                  <Typography align="right" fontWeight="bold" sx={{ color: '#343a40' }}>
                    {payments.mpesaName}
                  </Typography>
                </Typography>
                <Typography align="left" sx={{ color: '#343a40' }}>
                  No:
                  <Typography align="right" fontWeight="bold" sx={{ color: '#343a40' }}>
                    {payments.mpesaNumber}
                  </Typography>
                </Typography>
              </div>
            ) : (
              <Typography
                align="left"
                level="title-lg"
                sx={{ color: '#343a40', fontWeight: 'bold' }}
              >
                Not Provided
              </Typography>
            )}
          </div>
          <Button
            onClick={Addpayments}
            variant="solid"
            size="md"
            color="primary"
            endDecorator={<Add />}
            aria-label={payments.added ? "Update payment details" : "Add payment details"}
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
            {payments.added ? <span>Update</span> : <span>Add</span>}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
