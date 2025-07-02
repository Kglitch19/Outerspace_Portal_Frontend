import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import AppTheme from '../theme/AppTheme';
import ColorModeSelect from '../theme/ColorModeSelect';
import { useNavigate } from 'react-router-dom';
import { SignIn as ClerkSignIn, useUser } from '@clerk/clerk-react';
import { useTheme } from '@mui/material';

const SignInContainer = styled(Stack)(({ theme }) => ({
  
}));

const StyledPaper = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '450px',
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
}));

export default function SignInPage(props: { disableCustomTheme?: boolean }) {
  const navigate = useNavigate();
  const { isSignedIn, isLoaded } = useUser();
  const theme = useTheme();
  
  // Check if user is already signed in with Clerk and redirect if needed
  React.useEffect(() => {
    if (isLoaded && isSignedIn) {
      navigate('/home/dashboard');
      console.log("User is signed in, redirecting to dashboard");
    }
  }, [isSignedIn, navigate, isLoaded]);

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <SignInContainer direction="column" alignItems="center" justifyContent="center">
        <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
        <StyledPaper>
          <ClerkSignIn 
          />
        </StyledPaper>
      </SignInContainer>
    </AppTheme>
  );
}
