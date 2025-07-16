import { useState, useEffect } from 'react';
import { Box, Paper, Typography, Avatar, Slide } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SvgIcon from '@mui/material/SvgIcon';

// Fake data structure for payment notifications
interface PaymentNotification {
  name: string;
  amount: string;
  time: string;
  country: string;
}

// PayPal logo icon component
const PayPalIcon = (props: any) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path
      d="M20.1,6.75c0.17,0.9,0,1.8-0.49,2.7c-0.99,1.8-2.88,2.7-5.26,2.7h-0.33c-0.24,0-0.49,0.2-0.57,0.4l-0.66,4.1 l-0.25,1.2c-0.08,0.2-0.24,0.4-0.49,0.4H9.31c-0.41,0-0.49-0.3-0.41-0.6l0.91-5.7v0.1c0.08-0.2,0.33-0.4,0.57-0.4h1.15 c2.29,0,4.1-0.9,4.68-3.6C16.54,7.25,16.95,6.75,17.53,6.45C18.2,6.05,19.11,5.95,20.1,6.75L20.1,6.75z"
      fill="#009cde"
    />
    <path
      d="M18.44,6.15c-0.08,0-0.25-0.1-0.33-0.1c-0.08,0-0.25,0-0.33,0c-0.9-0.1-1.97,0-2.88,0.3 c-1.15,0.3-1.97,1-2.3,2.1c-0.57,2.7,1.64,3.5,3.86,3.5h0.99c0.24,0,0.49,0.2,0.41,0.5l-0.66,4.1l-0.16,1.2 c-0.08,0.2-0.24,0.4-0.49,0.4h-2.29c-0.41,0-0.49-0.3-0.41-0.6l0.91-5.7c0-0.2,0.24-0.4,0.57-0.4h1.15c2.29,0,4.1-0.9,4.68-3.6 c0.33-1.3,0.08-2.4-0.74-3.1C19.51,6.55,19.02,6.35,18.44,6.15L18.44,6.15z"
      fill="#012169"
    />
    <path
      d="M8.07,6.05L3.73,18.35c-0.08,0.3,0,0.6,0.41,0.6h2.46c0.24,0,0.49-0.2,0.57-0.4l0.82-5.2 c0.08-0.2,0.33-0.4,0.57-0.4h1.15c2.29,0,4.1-0.9,4.68-3.6c0.57-2.7-1.15-3.6-3.44-3.6H8.64C8.4,5.75,8.15,5.85,8.07,6.05 L8.07,6.05z"
      fill="#003087"
    />
  </SvgIcon>
);

// List of fake payment notifications
const fakePayments: PaymentNotification[] = [
  // Brazil
  { name: 'João S.', amount: '$30.00', time: '2 minutes ago', country: '🇧🇷' },
  { name: 'Maria L.', amount: '$25.00', time: '5 minutes ago', country: '🇧🇷' },
  { name: 'Carlos M.', amount: '$40.00', time: '10 minutes ago', country: '🇧🇷' },
  { name: 'Sofia B.', amount: '$35.00', time: '20 minutes ago', country: '🇧🇷' },
  { name: 'Rafael C.', amount: '$25.00', time: '25 minutes ago', country: '🇧🇷' },
  { name: 'Pedro A.', amount: '$30.00', time: '45 minutes ago', country: '🇧🇷' },
  { name: 'Ana M.', amount: '$40.00', time: '1 hour ago', country: '🇧🇷' },
  
  // United States
  { name: 'John D.', amount: '$45.00', time: '1 minute ago', country: '🇺🇸' },
  { name: 'Sarah W.', amount: '$40.00', time: '3 minutes ago', country: '🇺🇸' },
  { name: 'Mike T.', amount: '$35.00', time: '7 minutes ago', country: '🇺🇸' },
  { name: 'Emily R.', amount: '$25.00', time: '12 minutes ago', country: '🇺🇸' },
  { name: 'James K.', amount: '$40.00', time: '18 minutes ago', country: '🇺🇸' },
  { name: 'Jessica B.', amount: '$30.00', time: '26 minutes ago', country: '🇺🇸' },
  { name: 'Robert N.', amount: '$55.00', time: '35 minutes ago', country: '🇺🇸' },
  { name: 'Linda H.', amount: '$25.00', time: '50 minutes ago', country: '🇺🇸' },
  { name: 'David M.', amount: '$80.00', time: '1.5 hours ago', country: '🇺🇸' },
  
  // Portugal
  { name: 'Luisa T.', amount: '$35.00', time: '30 minutes ago', country: '🇵🇹' },
  { name: 'António P.', amount: '$25.00', time: '55 minutes ago', country: '🇵🇹' },
  
  // Spain
  { name: 'Antonio R.', amount: '$30.00', time: '15 minutes ago', country: '🇪🇸' },
  { name: 'Manuel S.', amount: '$40.00', time: '2 hours ago', country: '🇪🇸' },
  { name: 'Carmen G.', amount: '$25.00', time: '40 minutes ago', country: '🇪🇸' },
  
  // Mexico
  { name: 'Miguel L.', amount: '$35.00', time: '8 minutes ago', country: '🇲🇽' },
  { name: 'Sofía V.', amount: '$30.00', time: '22 minutes ago', country: '🇲🇽' },
  
  // Canada
  { name: 'Thomas W.', amount: '$40.00', time: '15 minutes ago', country: '🇨🇦' },
  { name: 'Emma D.', amount: '$30.00', time: '33 minutes ago', country: '🇨🇦' },
  
  // UK
  { name: 'William H.', amount: '$25.00', time: '17 minutes ago', country: '🇬🇧' },
  { name: 'Olivia S.', amount: '$40.00', time: '42 minutes ago', country: '🇬🇧' },
  
  // Australia
  { name: 'Jack M.', amount: '$35.00', time: '28 minutes ago', country: '🇦🇺' },
  { name: 'Charlotte B.', amount: '$30.00', time: '1.2 hours ago', country: '🇦🇺' },
  
  // Compras mais caras
  { name: 'Richard K.', amount: '$100.00', time: '5 minutes ago', country: '🇺🇸' },
  { name: 'Paulo M.', amount: '$90.00', time: '12 minutes ago', country: '🇧🇷' },
  { name: 'Amanda L.', amount: '$80.00', time: '25 minutes ago', country: '🇨🇦' },
];

// Helper function to get a random payment
const getRandomPayment = (): PaymentNotification => {
  const randomIndex = Math.floor(Math.random() * fakePayments.length);
  return fakePayments[randomIndex];
};

const RecentPaymentsToast = () => {
  const theme = useTheme();
  const [showNotification, setShowNotification] = useState(false);
  const [currentPayment, setCurrentPayment] = useState<PaymentNotification>(getRandomPayment());
  
  useEffect(() => {
    // Show first notification after 20 seconds
    const initialTimeout = setTimeout(() => {
      setShowNotification(true);
    }, 20000);

    // Set up the interval for showing notifications
    const intervalId = setInterval(() => {
      // Hide the current notification
      setShowNotification(false);
      
      // Wait 500ms before showing the next one for a clean transition
      setTimeout(() => {
        // Select a random payment from the list
        setCurrentPayment(getRandomPayment());
        
        // Show the notification
        setShowNotification(true);
      }, 500);
    }, 90000); // Show a new notification every 1 minute and 30 seconds

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(intervalId);
    };
  }, []);

  // Hide notification after 7 seconds of being shown
  useEffect(() => {
    let hideTimeout: ReturnType<typeof setTimeout>;
    
    if (showNotification) {
      hideTimeout = setTimeout(() => {
        setShowNotification(false);
      }, 7000);
    }
    
    return () => {
      if (hideTimeout) clearTimeout(hideTimeout);
    };
  }, [showNotification]);

  return (
    <Slide direction="up" in={showNotification} mountOnEnter unmountOnExit>
      <Paper
        elevation={6}
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 9999,
          padding: 2,
          borderRadius: 2,
          maxWidth: 300,
          backgroundColor: theme.palette.mode === 'dark' ? 'rgba(18, 18, 18, 0.9)' : 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          border: `1px solid ${theme.palette.primary.main}`,
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
          animation: 'pulse 2s infinite',
          '@keyframes pulse': {
            '0%': { boxShadow: '0 0 0 0 rgba(255, 15, 80, 0.4)' },
            '70%': { boxShadow: '0 0 0 10px rgba(255, 15, 80, 0)' },
            '100%': { boxShadow: '0 0 0 0 rgba(255, 15, 80, 0)' },
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar
            sx={{
              bgcolor: '#ffffff',
              width: 40, 
              height: 40
            }}
          >
            <PayPalIcon />
          </Avatar>
          
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                {currentPayment.name} {currentPayment.country}
              </Typography>
            </Box>
            
            <Typography variant="body2" color="text.secondary">
              just paid {currentPayment.amount} via PayPal
            </Typography>
            
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
              {currentPayment.time}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Slide>
  );
};

export default RecentPaymentsToast; 