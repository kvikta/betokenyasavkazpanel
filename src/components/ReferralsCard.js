import * as React from 'react';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { CopyAll, DataObject, Loop, Loyalty, Paid } from '@mui/icons-material';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import { useAtom } from 'jotai';
import { userObject } from '../state';
import { Divider, Input } from '@mui/joy';

// Global CSS to ensure consistency with Surveyiss background and typography
const styles = `
  body {
    background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #f8f9fa;
  }
`;

export default function ReferralCard() {
  const [radius, setRadius] = React.useState(16);
  const [childHeight, setChildHeight] = React.useState(28);
  const [userObjectState, setUserObjectState] = useAtom(userObject);
  const copyToClipBoard = () => {
    navigator.clipboard.writeText(userObjectState.referralCode);
  };

  const [open, setOpen] = React.useState(false);

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
          sx={{
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            color: '#343a40',
            fontSize: '1rem',
          }}
        >
          Earn Ksh 40 on each survey your referral completes. Below is your referral code.
        </Typography>
        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
        <Input
          fullWidth
          size="md"
          placeholder={userObjectState.referralCode}
          endDecorator={
            <Button
              onClick={copyToClipBoard}
              variant="solid"
              size="md"
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
              endDecorator={<CopyAll sx={{ color: 'white' }} />}
              aria-label="Copy referral code"
            >
              Copy Code
            </Button>
          }
          sx={{
            '--Input-radius': `${radius}px`,
            '--Input-decoratorChildHeight': `${childHeight}px`,
            borderRadius: '10px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            color: '#343a40',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 1)',
            },
            '& .MuiInputBase-input': {
              color: '#343a40',
            },
            '& .MuiInputBase-input::placeholder': {
              color: '#343a40',
              opacity: 0.7,
            },
          }}
        />
        <CardContent orientation="horizontal">
          <div>
            <Typography
              level="body-sm"
              sx={{
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                color: '#343a40',
                mb: 0.5,
              }}
            >
              Referral points:
            </Typography>
            <Typography
              level="title-lg"
              sx={{
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                color: '#343a40',
                fontWeight: 'bold',
              }}
              startDecorator={<Loop sx={{ color: '#ff8a00' }} />}
            >
              {userObjectState.referralPoints}
            </Typography>
          </div>
          <Button
            onClick={() => setOpen(true)}
            variant="solid"
            size="md"
            sx={{
              ml: 'auto',
              background: 'linear-gradient(135deg, #4caf50 0%, #81c784 100%)',
              color: 'white',
              borderRadius: '50px',
              padding: '8px 20px',
              fontWeight: 600,
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              boxShadow: '0 4px 10px rgba(76, 175, 80, 0.4)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 15px rgba(76, 175, 80, 0.6)',
                background: 'linear-gradient(135deg, #4caf50 0%, #81c784 100%)',
              },
            }}
            endDecorator={<Paid sx={{ color: 'white' }} />}
            aria-label="Redeem referral points"
          >
            Redeem
          </Button>
        </CardContent>
        <CardContent orientation="horizontal">
          <div>
            <Typography
              level="body-sm"
              sx={{
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                color: '#343a40',
                mb: 0.5,
              }}
            >
              Loyalties:
            </Typography>
            <Typography
              level="title-lg"
              sx={{
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                color: '#343a40',
                fontWeight: 'bold',
              }}
              startDecorator={<Loyalty sx={{ color: '#ff8a00' }} />}
            >
              0
            </Typography>
          </div>
        </CardContent>
        <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
          open={open}
          onClose={() => setOpen(false)}
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <Sheet
            variant="outlined"
            sx={{
              maxWidth: 500,
              borderRadius: '10px',
              p: 3,
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
              background: 'linear-gradient(135deg, #e6f4ea 0%, #f1f8ff 100%)',
              color: '#343a40',
            }}
          >
            <ModalClose
              variant="plain"
              sx={{
                m: 1,
                color: '#ff8a00',
                '&:hover': {
                  color: '#e52e71',
                },
              }}
            />
            <Typography
              component="h2"
              id="modal-title"
              level="h4"
              sx={{
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                color: '#343a40',
                fontWeight: 'bold',
                mb: 1,
                background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 2px 4px rgba(0,0,0,0.2)',
              }}
            >
              Referral Redeem
            </Typography>
            <Typography
              id="modal-desc"
              sx={{
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                color: '#343a40',
              }}
            >
              You have {userObjectState.referralPoints} referral points. Refer more to earn more referral points.
            </Typography>
          </Sheet>
        </Modal>
      </Card>
    </>
  );
}
