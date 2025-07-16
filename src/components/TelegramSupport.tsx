import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { useSiteConfig } from '../context/SiteConfigContext';
import { useTheme } from '@mui/material/styles';

const TelegramSupport: React.FC = () => {
  const { siteConfig } = useSiteConfig();
  const theme = useTheme();
  
  const telegramUsername = siteConfig?.telegram_username || '';
  
  const handleContactClick = () => {
    let url = 'https://t.me/';
    
    // Format telegram username (add @ if needed)
    if (telegramUsername) {
      url += telegramUsername.startsWith('@') ? 
        telegramUsername.substring(1) : telegramUsername;
    } else {
      url += 'telegram'; // Fallback if no username configured
    }
    
    // Add pre-filled message
    url += '?text=' + encodeURIComponent('I want all exclusive content. How to pay?');
    
    // Open telegram in a new tab
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Paper 
      elevation={2} 
      sx={{ 
        p: { xs: 2, sm: 3, md: 4 }, // Responsive padding
        my: { xs: 2, sm: 3, md: 4 }, // Responsive margin
        textAlign: 'center',
        borderRadius: 2,
        background: theme.palette.mode === 'dark' ? 'rgba(18, 18, 18, 0.9)' : 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        border: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Typography 
        variant="h4" 
        component="h2" 
        gutterBottom 
        fontWeight="bold"
        sx={{
          fontSize: { xs: '1.4rem', sm: '1.6rem', md: '2rem' }, // Responsive font size
          lineHeight: 1.3,
        }}
      >
        For all VIP content access, please contact our support team
      </Typography>
      
      <Typography 
        variant="body1" 
        paragraph 
        sx={{ 
          mb: { xs: 2, sm: 2.5, md: 3 }, // Responsive margin
          fontSize: { xs: '0.9rem', sm: '1rem' } // Responsive font size
        }}
      >
        Get exclusive access to premium content not available on the website
      </Typography>
      
      <Button
        variant="contained"
        size="large"
        onClick={handleContactClick}
        fullWidth={false} // Not full width on mobile to maintain elegant look
        sx={{
          bgcolor: '#0088cc', // Telegram blue
          px: { xs: 2, sm: 3, md: 4 }, // Responsive padding
          py: { xs: 1, sm: 1.2, md: 1.5 }, // Responsive padding
          fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, // Responsive font size
          '&:hover': {
            bgcolor: '#0077b5',
          },
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          mx: 'auto',
          width: { xs: 'auto', sm: 'auto' } // Not full width on mobile
        }}
      >
        {/* Telegram Icon - smaller on mobile */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.2401 4.96C19.0963 4.82954 18.9177 4.73946 18.726 4.69954C18.5344 4.65961 18.3355 4.67108 18.1501 4.73C18.1481 4.73 18.1471 4.731 18.1451 4.732L4.90011 9.233C4.56511 9.34 4.29111 9.547 4.11711 9.823C3.94411 10.098 3.89011 10.416 3.96511 10.723C4.04011 11.029 4.24211 11.302 4.51811 11.491C4.79311 11.68 5.11711 11.777 5.45011 11.768L9.05111 11.646L7.03011 16C7.02911 16 7.02911 16.001 7.02811 16.002C6.96711 16.127 6.95011 16.266 6.97711 16.401C7.00511 16.536 7.07711 16.662 7.18511 16.764L7.19011 16.77C7.19011 16.77 7.19011 16.77 7.19111 16.771L9.51011 19.037C9.65911 19.182 9.85111 19.276 10.0611 19.306C10.2711 19.336 10.4851 19.298 10.6671 19.199C10.8491 19.1 10.9911 18.945 11.0751 18.756C11.1591 18.567 11.1801 18.356 11.1351 18.154L10.2521 14.263L14.6971 12.878L13.6671 16.893C13.6061 17.112 13.6291 17.346 13.7321 17.55C13.8351 17.753 14.0121 17.911 14.2301 17.991C14.4471 18.073 14.6881 18.071 14.9031 17.988C15.1181 17.904 15.2901 17.744 15.3881 17.54L18.9201 10.252L18.9221 10.248C19.0631 9.953 19.0631 9.614 18.9211 9.32C18.7801 9.025 18.5121 8.813 18.1831 8.741L10.7201 7.007L18.4301 5.514C18.6121 5.479 18.7741 5.391 18.8981 5.266C19.0221 5.14 19.1021 4.981 19.1291 4.81C19.1561 4.639 19.1291 4.462 19.0501 4.306C18.9721 4.15 18.8451 4.021 18.6871 3.938C18.5281 3.855 18.3461 3.821 18.1671 3.843C17.9881 3.864 17.8211 3.939 17.6881 4.058L17.6851 4.06L17.6821 4.062L17.6801 4.064L4.57411 15.1C4.30311 15.336 4.12211 15.664 4.06911 16.024C4.01511 16.384 4.09411 16.751 4.28911 17.056C4.48411 17.36 4.78211 17.582 5.12911 17.683C5.47611 17.784 5.85011 17.757 6.17611 17.606L11.3041 15.22L12.1551 18.966C12.2331 19.359 12.4551 19.71 12.7761 19.953C13.0981 20.196 13.4961 20.311 13.9011 20.277C14.3051 20.243 14.6791 20.061 14.9541 19.768C15.2291 19.475 15.3851 19.089 15.3961 18.684L15.9911 13.619L18.7401 12.484C19.0651 12.371 19.3351 12.156 19.5031 11.877C19.6711 11.598 19.7211 11.275 19.6431 10.968C19.5651 10.663 19.3631 10.397 19.0881 10.214C18.8131 10.032 18.4871 9.94501 18.1601 9.97001L12.5001 10.394L19.8741 5.62C20.0451 5.503 20.1731 5.339 20.2421 5.152C20.3111 4.964 20.3181 4.762 20.2631 4.57C20.2081 4.378 20.0921 4.207 19.9321 4.082C19.7731 3.957 19.5761 3.884 19.3711 3.872C19.1661 3.86 18.9611 3.911 18.7861 4.018C18.6101 4.124 18.4731 4.283 18.3931 4.471L18.3921 4.473L18.3911 4.475L18.3901 4.477L15.5121 11.506L9.11511 13.581L5.66511 13.697L15.1371 5.754L19.2401 4.96Z"/>
        </svg>
        Contact Support on Telegram
      </Button>
    </Paper>
  );
};

export default TelegramSupport; 