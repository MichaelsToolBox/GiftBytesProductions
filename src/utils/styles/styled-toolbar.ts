import { styled, alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import { defaultBg } from '../theme-alpha';

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
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: defaultBg(theme, 0.78),
  boxShadow: `0 10px 36px ${alpha(theme.palette.common.black, 0.06)}`,
  padding: '7px 12px',
  ...theme.applyStyles('dark', {
    boxShadow: `0 10px 36px ${alpha(theme.palette.common.black, 0.35)}`,
  }),
}));
