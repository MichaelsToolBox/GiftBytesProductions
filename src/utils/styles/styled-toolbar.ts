import { styled, alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  width: '100%',
  borderRadius: 999,
  backdropFilter: 'blur(22px) saturate(1.2)',
  WebkitBackdropFilter: 'blur(22px) saturate(1.2)',
  border: '1px solid',
  borderColor: alpha(theme.palette.divider, 0.85),
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.78)`
    : alpha(theme.palette.background.default, 0.78),
  boxShadow: `0 10px 36px ${alpha(theme.palette.common.black, theme.palette.mode === 'dark' ? 0.35 : 0.06)}`,
  padding: '7px 12px',
}));
