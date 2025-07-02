import { styled } from '@mui/material/styles';
import MuiDrawer, { drawerClasses } from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SelectContent from '../SelectContent';
import MenuContent from './MenuContent';
import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { UserButton } from '@clerk/clerk-react';
import { useLocation } from 'react-router-dom';

const drawerWidth = 240;
const closedWidth = 64;

const Drawer = styled(MuiDrawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  '& .MuiDrawer-paper': {
    position: 'fixed',
    width: drawerWidth,
    transition: theme.transitions.create(['width', 'transform'], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.standard,
    }),
    overflowX: 'hidden',
    boxSizing: 'border-box',
    willChange: 'transform, width',
    backfaceVisibility: 'hidden',
  },
}));

interface UserData {
  id: number;
  email: string;
  role: string;
}

interface SideMenuProps {
  isOpen?: boolean;
}

export default function SideMenu({ isOpen = true }: SideMenuProps) {
  const [userData, setUserData] = useState<UserData | null>(null);
  const location = useLocation();
  
  // Get current page from path
  const getCurrentPage = () => {
    const path = location.pathname.split('/').pop() || '';
    return path.charAt(0).toUpperCase() + path.slice(1);
  };

  useEffect(() => {
    const userDataString = localStorage.getItem('userData') || sessionStorage.getItem('userData');
    if (userDataString) {
      try {
        const parsedUserData = JSON.parse(userDataString);
        setUserData(parsedUserData);
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
  }, []);

  return (
    <Drawer
      variant="permanent"
      open={isOpen}
      sx={{
        display: { xs: 'none', md: 'block' },
        '& .MuiDrawer-paper': {
          backgroundColor: 'background.paper',
          width: isOpen ? drawerWidth : closedWidth,
          transition: (theme) => theme.transitions.create(['width', 'transform'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.standard,
          }),
          transform: 'translateZ(0)',
          willChange: 'transform, width',
          backfaceVisibility: 'hidden',
        },
      }}
    >
      <Box
        sx={{
          p: 1.5,
          visibility: isOpen ? 'visible' : 'hidden',
          mt: 'calc(var(--template-frame-height, 0px) + 4px)',
        }}
      >
    
      </Box>

      {!isOpen && (
        <Box
          sx={{
            position: 'absolute',
            top: 'calc(var(--template-frame-height, 0px) + 22px)',
            left: '12px',
            zIndex: 1,
          }}
        >
          <Avatar sx={{ width: 40, height: 40 }}>
            <img src="/public/craxe.png" alt="HOPE" style={{ width: '100%', height: '100%' }} />
          </Avatar>
        </Box>
      )}

      <Divider />
      <Box
        sx={{
          overflow: 'hidden',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <MenuContent currentPage={getCurrentPage()} compact={!isOpen} />
        {/* <CardAlert /> */}
      </Box>
      <Stack
        direction="row"
        sx={{
          p: 2,
          gap: 1,
          alignItems: 'center',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
          <UserButton/>
       <Box sx={{ mr: 'auto' }}>
        
        </Box>
      </Stack>
    </Drawer>
  );
}
