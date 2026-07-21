import { useColorScheme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { lightModeLogos, darkModeLogos } from '../utils/styles/logo-links';
import { sectionPx } from '../utils/section-rhythm';
import { paperBg } from '../utils/theme-alpha';

export default function LogoCollection() {
  const { mode, systemMode } = useColorScheme();
  const resolved = (mode === 'system' ? systemMode : mode) ?? 'light';
  const logos = resolved === 'dark' ? darkModeLogos : lightModeLogos;

  return (
    <Box id="logoCollection" sx={{ py: { xs: 2.5, sm: 3.5 }, px: sectionPx }}>
      <Box
        sx={(theme) => ({
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(2, minmax(0, 1fr))',
            sm: 'repeat(3, minmax(0, 1fr))',
            md: 'repeat(6, minmax(0, 1fr))',
          },
          alignItems: 'center',
          justifyItems: 'center',
          gap: { xs: 1.75, sm: 2.25, md: 2.75 },
          maxWidth: 1100,
          mx: 'auto',
          px: { xs: 1.5, sm: 2.25 },
          py: { xs: 1.75, sm: 2 },
          borderRadius: { xs: 3, sm: 999 },
          border: '1px solid',
          borderColor: 'divider',
          bgcolor: paperBg(theme, 0.55),
          backdropFilter: 'blur(10px)',
        })}
      >
        {logos.map((logo, index) => (
          <Box
            key={index}
            sx={{
              width: '100%',
              maxWidth: { xs: 110, sm: 128, md: 136 },
              height: { xs: 40, sm: 52, md: 58 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0.65,
              filter: 'grayscale(0.25)',
              transition: 'opacity 200ms ease, filter 200ms ease',
              '&:hover': { opacity: 1, filter: 'none' },
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
