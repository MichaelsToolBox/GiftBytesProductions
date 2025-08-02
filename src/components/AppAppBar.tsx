import { availableLanguages } from '../utils/strings/available-languages';
import LanguageSelectorDropdown from '../theme/LanguageSelectorDropdown';
import ColorModeIconDropdown from '../theme/ColorModeIconDropdown';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { StyledToolbar } from '../utils/styles/styled-toolbar';
import { Language } from '../utils/types/language-types';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Sitemark from './SitemarkIcon';
import Box from '@mui/material/Box';
import * as React from 'react';

export default function AppAppBar() {
  // useStates
  const [open, setOpen] = React.useState(false);
  const [currentLanguage, setCurrentLanguage] = React.useState<Language>(availableLanguages[0]);

  // Language change
  const handleLanguageChange = (newLanguage: Language) => {
    console.log('Language changed to (object):', newLanguage);
    setCurrentLanguage(newLanguage);
    // Here you would typically update your i18n instance, For example: i18n.changeLanguage(newLanguage.code);
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar position="fixed" enableColorOnDark sx={{ boxShadow: 0, bgcolor: 'transparent', backgroundImage: 'none', mt: 'calc(var(--template-frame-height, 0px) + 28px)' }}>
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <Sitemark />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button variant="text" color="info" size="small">Projects</Button>
              <Button variant="text" color="info" size="small">Principles</Button>
              <Button variant="text" color="info" size="small">Download</Button>
              <Button variant="text" color="info" size="small">Latest</Button>
              <Button variant="text" color="info" size="small">Testimonials</Button>
              <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }}>FAQ</Button>
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
            <LanguageSelectorDropdown selectedLanguage={currentLanguage} availableLanguages={availableLanguages} onChange={handleLanguageChange} />
            <ColorModeIconDropdown />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', gap: 0.5 }}>
                     <LanguageSelectorDropdown
                        selectedLanguage={currentLanguage}
                        availableLanguages={availableLanguages}
                        onChange={handleLanguageChange}
                      />
                    <ColorModeIconDropdown />
                  </Box>
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <MenuItem>Projects</MenuItem>
                <MenuItem>Principles</MenuItem>
                <MenuItem>Download</MenuItem>
                <MenuItem>Latest</MenuItem>
                <MenuItem>Testimonials</MenuItem>
                <MenuItem>FAQ</MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}