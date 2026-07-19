import { useColorScheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { lightModeLogos, darkModeLogos } from '../utils/styles/logo-links';

export default function LogoCollection() {
  const { mode } = useColorScheme();
  const logos = mode === 'light' ? lightModeLogos : darkModeLogos;

  return (
    <Box id="logoCollection" sx={{ py: { xs: 4, sm: 8 }, px: { xs: 2, sm: 3 } }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(2, minmax(0, 1fr))',
            sm: 'repeat(3, minmax(0, 1fr))',
            md: 'repeat(6, minmax(0, 1fr))',
          },
          alignItems: 'center',
          justifyItems: 'center',
          gap: { xs: 2.5, sm: 3, md: 4 },
          opacity: 0.6,
          maxWidth: 1100,
          mx: 'auto',
        }}
      >
        {logos.map((logo, index) => (
          <Box
            key={index}
            sx={{
              width: '100%',
              maxWidth: { xs: 120, sm: 140, md: 150 },
              height: { xs: 56, sm: 72, md: 80 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={logo}
              alt={`Partner logo ${index + 1}`}
              loading="lazy"
              decoding="async"
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
