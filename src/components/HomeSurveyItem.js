import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Payments, Quiz, StarBorderOutlined, Stars } from '@mui/icons-material';
import { Chip, DialogContent, DialogTitle, FormControl, FormLabel, Modal, ModalDialog } from '@mui/joy';
import { useAtom } from 'jotai';
import { surveyValidation, subscribedPackage } from "../state";
import { Stack } from '@mui/material';

// Global CSS to ensure consistency with Surveyiss background and typography
const styles = `
  body {
    background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #f8f9fa;
  }
`;

export default function HomeSurveyItem(props) {
  const [getValidation, setValidation] = useAtom(surveyValidation);
  const [currentPackage] = useAtom(subscribedPackage);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const calculateNavigation = () => {
    var dateNow = new Date().toLocaleDateString();
    if (dateNow === getValidation.date) {
      if (getValidation.count < currentPackage.dailySurvey) {
        navigate("/survey", { state: { Id: props.Id } });
      } else {
        setMessage("You have reached your today limit");
        setOpen(true);
      }
    } else {
      setValidation((item) => ({
        ...item,
        date: dateNow,
      }));
      navigate("/survey", { state: { Id: props.Id } });
    }
  };

  const startSurvey = () => {
    if (props.Id === "1") {
      navigate("/survey", { state: { Id: props.Id } });
    } else {
      if (props.survey.surveyPaid) {
        if (currentPackage.planName === "Free Account") {
          setMessage("This is a premium survey");
          setOpen(true);
          console.log("This is a paid package. Subscribe");
        } else {
          calculateNavigation();
        }
      } else {
        calculateNavigation();
      }
    }
  };

  return (
    <div>
      {/* Inject global styles */}
      <style>{styles}</style>
      <Card
        size="sm"
        sx={{
          mt: 1.5,
          background: 'linear-gradient(135deg, #e6f4ea 0%, #f1f8ff 100%)',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          transition: 'transform 0.3s',
          '&:hover': { transform: 'translateY(-5px)' },
          color: '#343a40',
        }}
      >
        <CardContent
          orientation="horizontal"
          sx={{ m: 1 }}
        >
          <div>
            <Typography
              fontWeight="bold"
              align="left"
              sx={{
                fontSize: '1.2rem',
                background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 2px 4px rgba(0,0,0,0.2)',
              }}
            >
              {props.survey.surveyCategory}
            </Typography>
            <Typography
              align="left"
              startDecorator={<Quiz sx={{ color: '#343a40' }} />}
              sx={{ color: '#343a40', fontSize: '1rem' }}
            >
              Questions: 
              <Typography
                fontWeight="bold"
                align="left"
                sx={{ display: 'inline', ml: 1, color: '#343a40' }}
              >
                <Typography
                  color="primary"
                  fontWeight="bold"
                  align="left"
                  sx={{
                    background: 'linear-gradient(135deg, #ff8a00 0%, #e52e71 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {props.survey.surveyQuestions.length}
                </Typography>
              </Typography>
            </Typography>
            <Typography
              align="left"
              startDecorator={<Payments sx={{ color: '#343a40' }} />}
              sx={{ color: '#343a40', fontSize: '1rem' }}
            >
              Payout:
              <Typography
                variant="outlined"
                color="primary"
                fontWeight="bold"
                align="left"
                sx={{
                  ml: 1,
                  display: 'inline',
                  background: 'linear-gradient(135deg, #ff8a00 0%, #e52e71 100%)',
                  color: 'white',
                  borderRadius: '50px',
                  padding: '4px 12px',
                  fontSize: '0.9rem',
                }}
              >
                Ksh {props.survey.surveyAmount}
              </Typography>
            </Typography>
          </div>
          <Button
            onClick={startSurvey}
            variant="solid"
            size="md"
            color="primary"
            aria-label="Take Survey"
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
            Take Survey
          </Button>
          {props.survey.surveyPaid ? (
            <StarBorderOutlined
              sx={{
                position: 'absolute',
                top: '0.8rem',
                left: '14rem',
                color: '#ff8a00',
              }}
            />
          ) : (
            <div></div>
          )}
        </CardContent>
      </Card>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          sx={{
            background: 'linear-gradient(135deg, #e6f4ea 0%, #f1f8ff 100%)',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            color: '#343a40',
          }}
        >
          <DialogTitle
            sx={{
              fontSize: '1.2rem',
              background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 4px rgba(0,0,0,0.2)',
            }}
          >
            {message}
          </DialogTitle>
          <DialogContent sx={{ color: '#343a40', fontSize: '1rem' }}>
            Upgrade your account to access this and more surveys and earn more
          </DialogContent>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setOpen(false);
              navigate("/packages");
            }}
          >
            <Stack spacing={2}>
              <Button
                type="submit"
                sx={{
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
                UPGRADE ACCOUNT
              </Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </div>
  );
}
