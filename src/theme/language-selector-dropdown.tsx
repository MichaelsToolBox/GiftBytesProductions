import { Language, LanguageSelectorDropdownProps } from '../utils/types/language-types';
import TranslateIcon from '@mui/icons-material/Translate';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Check from '@mui/icons-material/Check';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import * as React from 'react';

/**
 * A dropdown menu component for selecting a language.
 * It displays a flag icon, places the selected language at the top, marks it with a check icon,
 * and shows the current language code next to the trigger icon.
 */
export default function LanguageSelectorDropdown(props: LanguageSelectorDropdownProps) {
  const { selectedLanguage, availableLanguages, onChange, ...iconButtonProps } = props;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageSelect = (language: Language) => () => {
    onChange(language);
    handleClose();
  };

  if (!selectedLanguage || availableLanguages.length === 0) {
    return (
      <Box
        sx={(theme) => ({
          verticalAlign: 'bottom',
          display: 'inline-flex',
          width: '2.25rem',
          height: '2.25rem',
          borderRadius: (theme.vars || theme).shape.borderRadius,
          border: '1px solid',
          borderColor: (theme.vars || theme).palette.divider,
        })}
      />
    );
  }

  // Sort the languages to show the selected one at the top
  const sortedLanguages = [...availableLanguages].sort((a, b) => {
    if (a.code === selectedLanguage.code) return -1; // a (selected) comes first
    if (b.code === selectedLanguage.code) return 1;  // b (selected) comes first
    return a.name.localeCompare(b.name); // Sort the rest alphabetically
  });

  return (
    <React.Fragment>
      {/* Updated IconButton to show the flag, language code, and adjust width */}
      <IconButton
        data-screenshot="language-selector"
        onClick={handleClick}
        disableRipple
        size="small"
        aria-controls={open ? 'language-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        sx={{
            width: 'auto', // Allow the button to grow based on its content
            px: 1,
            border: '1px solid',
            borderColor: 'divider',
        }}
        {...iconButtonProps}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {selectedLanguage.icon}
            </Box>
            <Typography variant="subtitle2" fontSize="small" sx={{ textTransform: 'uppercase' }}>
                {selectedLanguage.code}
            </Typography>
            <TranslateIcon fontSize="small" />
        </Box>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="language-menu"
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        slotProps={{
          paper: {
            variant: 'outlined',
            elevation: 0,
            sx: {
              my: '4px',
              minWidth: '300px',
              maxHeight: 500,
              padding: 1,
            },
          },
        }}
      >
        {sortedLanguages.map((lang) => (
          <MenuItem
            key={lang.code}
            selected={lang.code === selectedLanguage.code}
            onClick={handleLanguageSelect(lang)}
          >
            <ListItemIcon sx={{ minWidth: '32px' }}>{lang.icon}</ListItemIcon>
            <ListItemText>{lang.name}</ListItemText>
            {lang.code === selectedLanguage.code && <Check sx={{ marginLeft: 'auto' }} />}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
}