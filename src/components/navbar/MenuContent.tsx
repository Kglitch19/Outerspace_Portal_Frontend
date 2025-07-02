import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Face6Icon from '@mui/icons-material/Face6';
import ExploreIcon from '@mui/icons-material/Explore';
import PeopleIcon from '@mui/icons-material/People';
import EmailIcon from '@mui/icons-material/Email';
import EventIcon from '@mui/icons-material/Event';
import { useNavigate } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip'

const mainListItems = [
  { text: 'Dashboard', icon: <HomeRoundedIcon />, path: '/home/dashboard' },
  {text: 'My request', icon: <DashboardIcon/>, path: '/home/myrequest'},

];

const secondaryListItems = [
  // { text: 'Settings', icon: <SettingsRoundedIcon />, path: '/home/settings' },
  // { text: 'About', icon: <InfoRoundedIcon />, path: '/home/about' },
  // { text: 'Feedback', icon: <HelpRoundedIcon />, path: '/home/feedback' },
];

interface MenuContentProps {
  currentPage: string;
  compact?: boolean;
}

export default function MenuContent({ currentPage, compact = false }: MenuContentProps) {
  const navigate = useNavigate();
  const [extensionsOpen, setExtensionsOpen] = React.useState(false);

  const handleExtensionsClick = () => {
    setExtensionsOpen(!extensionsOpen);
  };

  const isCurrentPath = (itemPath: string) => {
    return itemPath.endsWith(currentPage.toLowerCase());
  };

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <Tooltip title={compact ? item.text : ""} placement="right">
              <ListItemButton 
                onClick={() => navigate(item.path)} 
                selected={isCurrentPath(item.path)}
                sx={{
                  minHeight: compact ? 48 : 8,
                  justifyContent: compact ? 'center' : 'initial',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: compact ? 'auto' : 2,
                    justifyContent: 'center',
                    '& .MuiSvgIcon-root': {
                      fontSize: compact ? 24 : 20,
                    }
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                {!compact && <ListItemText primary={item.text} />}
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
        
        {/* Extensions with sub-menu */}
        <ListItem disablePadding sx={{ display: 'block' }}>
          <Tooltip title={compact ? "Extensions" : ""} placement="right">
            <ListItemButton 
              onClick={handleExtensionsClick}
              sx={{
                minHeight: compact ? 48 : 8,
                justifyContent: compact ? 'center' : 'initial',
                px: 2.5,
              }}
            >
             
            </ListItemButton>
          </Tooltip>
          
        </ListItem>
      </List>
      <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <Tooltip title={compact ? item.text : ""} placement="right">
              <ListItemButton 
                onClick={() => item.path && navigate(item.path)}
                selected={isCurrentPath(item.path)}
                sx={{
                  minHeight: compact ? 48 : 8,
                  justifyContent: compact ? 'center' : 'initial',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: compact ? 'auto' : 3,
                    justifyContent: 'center',
                    '& .MuiSvgIcon-root': {
                      fontSize: compact ? 24 : 20,
                    }
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                {!compact && <ListItemText primary={item.text} />}
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
