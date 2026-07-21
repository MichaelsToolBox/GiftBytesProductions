import { styled } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const StyledVideoBox = styled(Box)(({ theme }) => ({
  alignSelf: 'center',
  width: '100%',
  aspectRatio: '16 / 9',
  height: 'auto',
  maxHeight: 700,
  marginTop: theme.spacing(3.5),
  borderRadius: 18,
  border: '1px solid',
  borderColor: alpha(theme.palette.divider, 0.9),
  boxShadow: `0 20px 48px ${alpha(theme.palette.common.black, 0.12)}`,
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: '#000',
  backgroundImage: 'url(/hero-poster.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',

  ...theme.applyStyles('dark', {
    boxShadow: `0 20px 48px ${alpha(theme.palette.common.black, 0.45)}`,
  }),

  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(4.5),
    borderRadius: 20,
  },
}));
