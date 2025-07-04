import * as React from 'react';
import type {} from '@mui/x-date-pickers/themeAugmentation';
import type {} from '@mui/x-charts/themeAugmentation';
import type {} from '@mui/x-tree-view/themeAugmentation';
import { alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Header from '../../components/navbar/Header';
import SideMenu from '../../components/navbar/SideMenu';
import AppTheme from '../../theme/AppTheme';
import NavbarBreadcrumbs from '../../components/navbar/NavbarBreadcrumbs';
import {
  chartsCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from '../../theme/customizations';

const xThemeComponents = {
  ...chartsCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};
import MainGrid from '../../components/home/MainGrid';

<Link to="/home/payment">
  <Button className="mt-4">Go to Payment Page</Button>
</Link>


export default function Dashboard(props: { disableCustomTheme?: boolean }) {
  const [isSideMenuOpen, setIsSideMenuOpen] = React.useState(() => {
    const savedState = localStorage.getItem('sideMenuOpen');
    return savedState !== null ? JSON.parse(savedState) : true;
  });

  const handleSideMenuToggle = () => {
    const newState = !isSideMenuOpen;
    setIsSideMenuOpen(newState);
    localStorage.setItem('sideMenuOpen', JSON.stringify(newState));
  };

  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: 'flex' }}>
        <SideMenu isOpen={isSideMenuOpen} />
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: theme.vars
              ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
              : alpha(theme.palette.background.default, 1),
            overflow: 'auto',
            marginLeft: isSideMenuOpen ? '0px' : '-170px',
            transition: theme.transitions.create(['margin', 'transform'], {
              easing: theme.transitions.easing.easeInOut,
              duration: theme.transitions.duration.standard,
            }),
            transform: 'translateZ(0)',
            willChange: 'transform, margin',
            backfaceVisibility: 'hidden',
          })}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: 'center',
              mx: 1,
              pb: 5,
              mt: { xs: 8, md: 0 },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {/* <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton onClick={handleSideMenuToggle}>
                  {isSideMenuOpen ? <TbLayoutSidebarLeftCollapse /> : <TbLayoutSidebarRightCollapse />}
                </IconButton>
                <NavbarBreadcrumbs currentPage="Home" />
              </Box>
              <Header /> */}
            </Box>
            <MainGrid />
          </Stack>
        </Box>
      </Box>
    </AppTheme>
  );
}
