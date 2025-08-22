import { useColorScheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { lightModeLogos, darkModeLogos } from '../utils/styles/logo-links';

export default function LogoCollection() {
  const { mode } = useColorScheme();
  const logos = mode === 'light' ? lightModeLogos : darkModeLogos;

  return (
    <Box id="logoCollection" sx={{ py: 8 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 4, md: 6 },
          opacity: 0.6,
        }}
      >
        {logos.map((logo, index) => (
          <Box
            key={index}
            sx={{
              width: '150px',
              height: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}