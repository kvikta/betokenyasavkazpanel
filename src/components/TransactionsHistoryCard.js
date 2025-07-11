import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Chip, Divider } from '@mui/joy';
import { useAtom } from 'jotai';
import { completedSurveys } from "../state";
import { Payments } from '@mui/icons-material';

// Global CSS to ensure consistency with Surveyiss background and typography
const styles = `
  body {
    background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #f8f9fa;
  }
`;

export default function TransactionsHistoryCard() {
  const [doneSurveys, setDoneSurveys] = useAtom(completedSurveys);

  return (
    <div>
      {/* Inject global styles */}
      <style>{styles}</style>
      <Card
        size="sm"
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
        {doneSurveys.length > 0 ? (
          <div>
            {doneSurveys.map((item) => (
              <div key={item.surveyId}>
                <CardContent
                  orientation="horizontal"
                  sx={{ m: 1.5 }}
                >
                  <div>
                    <Typography
                      align="left"
                      sx={{ color: '#343a40', fontSize: '1rem' }}
                    >
                      Survey Completed
                    </Typography>
                    <Typography
                      align="left"
                      level="title-lg"
                      sx={{
                        color: '#343a40',
                        fontWeight: 'bold',
                        background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                      }}
                    >
                      {item.surveyId}
                    </Typography>
                  </div>
                  <Typography
                    fontWeight="bold"
                    align="right"
                    sx={{ ml: 'auto', color: '#343a40', fontSize: '0.9rem' }}
                  >
                    {item.date}
                  </Typography>
                  <div>
                    <Typography
                      align="left"
                      sx={{ color: '#343a40', fontSize: '1rem' }}
                    >
                      Earned
                    </Typography>
                    <Chip
                      startDecorator={<Payments sx={{ color: 'white' }} />}
                      color="primary"
                      variant="outlined"
                      align="left"
                      sx={{
                        background: 'linear-gradient(135deg, #ff8a00 0%, #e52e71 100%)',
                        color: 'white',
                        borderRadius: '50px',
                        padding: '4px 12px',
                        fontSize: '0.9rem',
                        fontWeight: 'bold',
                        border: 'none',
                        boxShadow: '0 4px 15px rgba(229, 46, 113, 0.4)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-3px)',
                          boxShadow: '0 8px 20px rgba(229, 46, 113, 0.6)',
                        },
                      }}
                    >
                      Ksh {item.earnedAmount}
                    </Chip>
                  </div>
                </CardContent>
                <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
              </div>
            ))}
          </div>
        ) : (
          <Typography
            sx={{
              fontSize: '1rem',
              color: '#343a40',
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              textAlign: 'center',
              background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 4px rgba(0,0,0,0.2)',
            }}
          >
            No transactions yet
          </Typography>
        )}
      </Card>
    </div>
  );
}
