import { useColorScheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const darkModeLogos = [
  'https://upload.wikimedia.org/wikipedia/commons/c/c4/Unity_2021.svg',
  'https://upload.wikimedia.org/wikipedia/commons/d/da/Unreal_Engine_Logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/3/3e/Android_logo_2023.svg',
  'https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg',
  'https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg',
];

const lightModeLogos = [
  'https://upload.wikimedia.org/wikipedia/commons/c/c4/Unity_2021.svg',
  'https://upload.wikimedia.org/wikipedia/commons/d/da/Unreal_Engine_Logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/3/3e/Android_logo_2023.svg',
  'https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg',
  'https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg',
];

const logoStyle = {
  width: '150px',
  height: '60px',
  margin: '0 48px',
  opacity: 0.7,
};

export default function LogoCollection() {
  const { mode, systemMode } = useColorScheme();
  let logos;
  if (mode === 'system') {
    if (systemMode === 'light') {
      logos = lightModeLogos;
    } else {
      logos = darkModeLogos;
    }
  } else if (mode === 'light') {
    logos = lightModeLogos;
  } else {
    logos = darkModeLogos;
  }

  return (
    <Box id="logoCollection" sx={{ py: 4 }}>
      <Typography component="p" variant="subtitle2" align="center" sx={{ color: 'text.secondary' }}>
      </Typography>
      <Grid container sx={{ justifyContent: 'center', mt: 0.5, opacity: 0.6 }}>
        {logos.map((logo, index) => (
          <Grid key={index}>
            <img
              src={logo}
              alt={`Index ${index + 1}`}
              style={logoStyle}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
