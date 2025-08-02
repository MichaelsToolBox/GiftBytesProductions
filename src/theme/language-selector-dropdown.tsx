import { Language, LanguageSelectorDropdownProps } from '../utils/types/language-types';
import TranslateIcon from '@mui/icons-material/Translate';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Check from '@mui/icons-material/Check';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import * as React from 'react';

/**
 * A dropdown menu component for selecting a language.
 * It displays a flag icon, places the selected language at the top and marks it with a check icon.
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
      <IconButton
        data-screenshot="language-selector"
        onClick={handleClick}
        disableRipple
        size="small"
        aria-controls={open ? 'language-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        {...iconButtonProps}
      >
        <TranslateIcon />
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
              minWidth: 0.15,
              maxHeight: 0.5,
              paddingRight: 1,
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
            <ListItemIcon sx={{ minWidth: '24px' }}>{lang.icon}</ListItemIcon>
            <ListItemText>{lang.name}</ListItemText>
            {lang.code === selectedLanguage.code && <Check sx={{ marginLeft: 'auto' }} />}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
}
