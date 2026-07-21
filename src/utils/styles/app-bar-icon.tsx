import Box from '@mui/material/Box';
import logo from '../images/logo-transparent.png';

export default function BrandLogo() {
  return (
    <Box
      component="img"
      src={logo}
      alt="Gift Bytes Productions"
      sx={(theme) => ({
        height: { xs: 28, sm: 34 },
        width: 'auto',
        mr: { xs: 1, sm: 1.5 },
        display: 'block',
        flexShrink: 0,
        ...theme.applyStyles('light', {
          filter: 'invert(1)',
        }),
      })}
    />
  );
}
