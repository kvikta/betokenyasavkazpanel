import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import Card from '@mui/joy/Card';
import { useAtom } from 'jotai';
import { amountEarnedList, weekDaysList } from '../state';
import { Typography } from '@mui/joy';

// Global CSS to ensure consistency with SurveyPesa background and typography
const styles = `
  body {
    background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #f8f9fa;
  }
`;

export default function BarChartComponent() {
  const [amount, earnedAmount] = useAtom(amountEarnedList);
  const [days, daysList] = useAtom(weekDaysList);

  return (
    <div>
      {/* Inject global styles */}
      <style>{styles}</style>
      <Card
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
        <div>
          {amount.length > 0 ? (
            <div>
              <BarChart
                xAxis={[{ scaleType: 'band', data: days }]}
                series={[{ 
                  data: amount,
                  color: '#ff8a00', // Primary color from Surveyiss gradient
                }]}
                height={amount.length > 0 ? 280 : 20}
                sx={{
                  '& .MuiChartsAxis-label': {
                    fill: '#343a40',
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                  },
                  '& .MuiChartsAxis-tick': {
                    stroke: '#343a40',
                  },
                  '& .MuiChartsAxis-line': {
                    stroke: '#343a40',
                  },
                  '& .MuiBarElement-root': {
                    fill: 'url(#gradient)', // Apply gradient to bars
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      filter: 'brightness(1.2)',
                    },
                  },
                }}
              >
                {/* Define gradient for bars */}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#ff8a00', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#e52e71', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
              </BarChart>
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
              No earnings yet (Take Surveys to start earning)
            </Typography>
          )}
        </div>
      </Card>
    </div>
  );
}
