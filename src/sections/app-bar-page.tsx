import { availableLanguages } from '../utils/languages/available-languages';
import LanguageSelectorDropdown from '../theme/language-selector-dropdown';
import ColorModeIconDropdown from '../theme/mode-icon-dropdown';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { StyledToolbar } from '../utils/styles/styled-toolbar';
import { Language } from '../utils/types/language-types';
import BrandLogo from '../utils/styles/app-bar-icon';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';
import MenuItem from '@mui/material/MenuItem';
import { loadLanguage } from '../i18n';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import * as React from 'react';

const navItems = [
  { id: 'download', labelKey: 'app-bar.download' },
  { id: 'features', labelKey: 'app-bar.projects' },
  { id: 'principles', labelKey: 'app-bar.principles' },
  { id: 'latest', labelKey: 'app-bar.latest' },
  { id: 'testimonials', labelKey: 'app-bar.testimonials' },
  { id: 'faq', labelKey: 'app-bar.faq' },
] as const;

export default function AppAppBar() {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = React.useState(false);

  const currentLanguageCode = i18n.language.split('-')[0];
  const currentLanguage = availableLanguages.find((l) => l.code === currentLanguageCode) || availableLanguages[0];

  const handleLanguageChange = async (newLanguage: Language) => {
    await loadLanguage(newLanguage.code);
    await i18n.changeLanguage(newLanguage.code);
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 80;

    if (sectionElement) {
      const elementPosition = sectionElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: { xs: 1, sm: 1.5 },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 1.5, sm: 3 } }}>
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <BrandLogo />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="text"
                  color="info"
                  size="small"
                  sx={item.id === 'faq' ? { minWidth: 0 } : undefined}
                  onClick={() => scrollToSection(item.id)}
                >
                  {t(item.labelKey)}
                </Button>
              ))}
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
            <LanguageSelectorDropdown
              selectedLanguage={currentLanguage}
              availableLanguages={availableLanguages}
              onChange={handleLanguageChange}
            />
            <ColorModeIconDropdown />
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1, alignItems: 'center' }}>
            <LanguageSelectorDropdown
              selectedLanguage={currentLanguage}
              availableLanguages={availableLanguages}
              onChange={handleLanguageChange}
            />
            <ColorModeIconDropdown />
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)} sx={{ minWidth: 0, p: '4px' }}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                {navItems.map((item) => (
                  <MenuItem
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      toggleDrawer(false)();
                    }}
                  >
                    {t(item.labelKey)}
                  </MenuItem>
                ))}
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
