import { availableLanguages } from '../utils/strings/available-languages';
import LanguageSelectorDropdown from '../theme/language-selector-dropdown';
import ColorModeIconDropdown from '../theme/mode-icon-dropdown';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { StyledToolbar } from '../utils/styles/styled-toolbar';
import { Language } from '../utils/types/language-types';
import SitemarkIcon from '../utils/styles/app-bar-icon';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';
import MenuItem from '@mui/material/MenuItem';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import * as React from 'react';

export default function AppAppBar() {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = React.useState(false);

  const currentLanguageCode = i18n.language;
  const currentLanguage = availableLanguages.find(l => l.code === currentLanguageCode) || availableLanguages[0];

  const handleLanguageChange = (newLanguage: Language) => {
    console.log('Language changed to:', newLanguage.code);
    i18n.changeLanguage(newLanguage.code);
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar position="fixed" enableColorOnDark sx={{ boxShadow: 0, bgcolor: 'transparent', backgroundImage: 'none', mt: 'calc(var(--template-frame-height, 0px) + 28px)' }}>
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <SitemarkIcon />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button variant="text" color="info" size="small">{t('app-bar.projects')}</Button>
              <Button variant="text" color="info" size="small">{t('app-bar.principles')}</Button>
              <Button variant="text" color="info" size="small">{t('app-bar.download')}</Button>
              <Button variant="text" color="info" size="small">{t('app-bar.latest')}</Button>
              <Button variant="text" color="info" size="small">{t('app-bar.testimonials')}</Button>
              <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }}>{t('app-bar.faq')}</Button>
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
                  <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
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
                <MenuItem>{t('app-bar.projects')}</MenuItem>
                <MenuItem>{t('app-bar.principles')}</MenuItem>
                <MenuItem>{t('app-bar.download')}</MenuItem>
                <MenuItem>{t('app-bar.latest')}</MenuItem>
                <MenuItem>{t('app-bar.testimonials')}</MenuItem>
                <MenuItem>{t('app-bar.faq')}</MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}