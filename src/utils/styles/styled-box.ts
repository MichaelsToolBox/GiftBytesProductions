import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const StyledVideoBox = styled(Box)(({ theme }) => ({
  alignSelf: 'center',
  width: '100%',
  aspectRatio: '16 / 9',
  height: 'auto',
  maxHeight: 700,
  marginTop: theme.spacing(3),
  borderRadius: (theme.vars || theme).shape.borderRadius,
  outline: '6px solid',
  outlineColor: 'hsla(220, 25%, 80%, 0.2)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.grey[200],
  boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: '#000',

  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(4),
  },

  ...theme.applyStyles('dark', {
    boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
    outlineColor: 'hsla(220, 20%, 42%, 0.1)',
    borderColor: (theme.vars || theme).palette.grey[700],
  }),
}));