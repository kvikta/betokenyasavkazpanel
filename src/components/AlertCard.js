import React from 'react';
import Alert from '@mui/joy/Alert';
import { LockClock } from '@mui/icons-material';

// Global CSS to ensure consistency with SurveyPesa background and typography
const styles = `
  body {
    background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #f8f9fa;
  }
`;

export default function AlertCard(props) {
  return (
    <div>
      {/* Inject global styles */}
      <style>{styles}</style>
      <Alert
        sx={{
          mt: 1.5,
          background: 'linear-gradient(135deg, #ff8a00 0%, #e52e71 100%)',
          color: 'white',
          borderRadius: '10px',
          boxShadow: '0 4px 15px rgba(229, 46, 113, 0.4)',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          fontSize: '1rem',
          padding: '12px 20px',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 8px 20px rgba(229, 46, 113, 0.6)',
          },
        }}
        variant="soft"
        color="warning"
        startDecorator={<LockClock sx={{ color: 'white' }} />}
      >
        {props.message}
      </Alert>
    </div>
  );
}
