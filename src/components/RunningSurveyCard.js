import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import { Divider } from '@mui/material';
import { Checkbox, Container, Grid, List, ListItem, Radio, RadioGroup, Textarea } from '@mui/joy';
import { Quiz } from '@mui/icons-material';

// Global CSS to ensure consistency with Surveyiss background and typography
const styles = `
  body {
    background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #f8f9fa;
  }
`;

export default function RunningSurveyCard(props) {
  const navigate = useNavigate();

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
          align="left"
          fontWeight="bold"
          sx={{
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            color: '#343a40',
            fontSize: '1.2rem',
            background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 2px 4px rgba(0,0,0,0.2)',
          }}
          startDecorator={<Quiz sx={{ color: '#ff8a00' }} />}
        >
          {props?.survey?.surveyQuestion}
        </Typography>
        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
        <Container
          sx={{
            m: 0.2,
            p: 0,
          }}
          orientation='horizontal'
        >
          <List
            size="sm"
            sx={{
              mx: 'calc(-1 * var(--ListItem-paddingX))',
              '--ListItem-paddingY': '0.75rem',
            }}
          >
            {props.survey.surveyType === 1 ? (
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                sx={{
                  '& .MuiFormControlLabel-label': {
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                    color: '#343a40',
                  },
                }}
              >
                {props.survey.surveyAnswers.map((item, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    <Radio
                      value={item}
                      label={item}
                      sx={{
                        color: '#ff8a00',
                        '&.Mui-checked': {
                          color: '#e52e71',
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </RadioGroup>
            ) : null}
            {props.survey.surveyType === 3 ? (
              <>
                {props.survey.surveyAnswers.map((item, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    <Checkbox
                      label={item}
                      sx={{
                        color: '#ff8a00',
                        '&.Mui-checked': {
                          color: '#e52e71',
                        },
                        '& .MuiFormControlLabel-label': {
                          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                          color: '#343a40',
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </>
            ) : null}
            {props.survey.surveyType === 2 ? (
              <Textarea
                name="answer"
                placeholder="Type answer"
                sx={{
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  color: '#343a40',
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                  },
                  '& .MuiInputBase-root': {
                    borderColor: '#ff8a00',
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
            ) : null}
          </List>
        </Container>
        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
        <Grid xs={12} md={12}>
          <Button
            variant="solid"
            sx={{
              mt: 2,
              background: props.submitSurvey
                ? 'linear-gradient(135deg, #4caf50 0%, #81c784 100%)'
                : 'linear-gradient(135deg, #ff8a00 0%, #e52e71 100%)',
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
                background: props.submitSurvey
                  ? 'linear-gradient(135deg, #4caf50 0%, #81c784 100%)'
                  : 'linear-gradient(135deg, #ff8a00 0%, #e52e71 100%)',
              },
              '&.Mui-disabled': {
                background: 'rgba(0, 0, 0, 0.12)',
                color: 'rgba(0, 0, 0, 0.26)',
                boxShadow: 'none',
              },
            }}
            disabled={props.time > 0}
            onClick={props.nextSurvey}
            fullWidth
          >
            {props.submitSurvey ? 'Submit' : 'Next'}
          </Button>
        </Grid>
      </Card>
    </>
  );
}
