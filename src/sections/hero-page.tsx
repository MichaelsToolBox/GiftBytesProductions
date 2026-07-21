import { StyledVideoBox } from '../utils/styles/styled-box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';
import logo from '../utils/images/logo-transparent.png';
import { alpha, keyframes } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { sectionPx } from '../utils/section-rhythm';

const VIDEO_ID = 'hS-31jq1CGk';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(22px); }
  to { opacity: 1; transform: translateY(0); }
`;

export default function Hero() {
  const { t } = useTranslation();

  const chronomazeUrl = 'https://store.steampowered.com/app/4180250/Chronomaze_Gravity_Maze/';
  const youtubeUrl = 'https://www.youtube.com/@GiftBytesProductions?sub_confirmation=1';
  const embedUrl = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: `
          radial-gradient(ellipse 85% 55% at 50% -18%, ${alpha(theme.palette.primary.main, 0.18)}, transparent 58%),
          radial-gradient(ellipse 40% 35% at 92% 28%, ${alpha(theme.palette.primary.main, 0.07)}, transparent 55%),
          radial-gradient(ellipse 35% 30% at 8% 40%, ${alpha(theme.palette.primary.main, 0.05)}, transparent 50%)
        `,
        ...theme.applyStyles('dark', {
          backgroundImage: `
            radial-gradient(ellipse 85% 55% at 50% -18%, ${alpha(theme.palette.primary.main, 0.3)}, transparent 58%),
            radial-gradient(ellipse 40% 35% at 92% 28%, ${alpha(theme.palette.primary.main, 0.12)}, transparent 55%),
            radial-gradient(ellipse 35% 30% at 8% 40%, ${alpha(theme.palette.primary.main, 0.08)}, transparent 50%)
          `,
        }),
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 11, sm: 16 },
          pb: { xs: 6, sm: 10 },
          px: sectionPx,
        }}
      >
        <Stack
          spacing={{ xs: 2, sm: 2.25 }}
          useFlexGap
          sx={{
            alignItems: 'center',
            width: { xs: '100%', sm: '72%' },
            animation: `${fadeUp} 850ms cubic-bezier(0.22, 1, 0.36, 1) both`,
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="Gift Bytes Productions"
            sx={(theme) => ({
              height: { xs: 58, sm: 78 },
              width: 'auto',
              ...theme.applyStyles('light', { filter: 'invert(1)' }),
            })}
          />
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              textAlign: 'center',
              fontSize: { xs: 'clamp(2.3rem, 9vw, 3.05rem)', sm: 'clamp(3.15rem, 7.5vw, 4rem)' },
              lineHeight: 1.02,
              letterSpacing: '-0.04em',
            }}
          >
            {t('hero-page.gift')}&nbsp;{t('hero-page.bytes')}&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: 'inherit',
                letterSpacing: 'inherit',
                color: 'primary.main',
                ...theme.applyStyles('dark', { color: 'primary.light' }),
              })}
            >
              {t('hero-page.productions')}
            </Typography>
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '76%' },
              fontSize: { xs: '1.02rem', sm: '1.14rem' },
              lineHeight: 1.7,
            }}
          >
            {t('hero-page.subtitle')}
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.5}
            useFlexGap
            sx={{
              pt: { xs: 1.5, sm: 2 },
              width: { xs: '100%', sm: 'auto' },
              justifyContent: 'center',
            }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              sx={{
                minWidth: { sm: 200 },
                width: { xs: '100%', sm: 'auto' },
                borderRadius: 999,
                whiteSpace: 'nowrap',
              }}
              onClick={() => window.open(chronomazeUrl, '_blank', 'noopener,noreferrer')}
            >
              {t('hero-page.cta-primary')}
            </Button>
            <Button
              variant="outlined"
              size="large"
              fullWidth
              sx={{
                minWidth: { sm: 200 },
                width: { xs: '100%', sm: 'auto' },
                borderRadius: 999,
                whiteSpace: 'nowrap',
                color: 'text.primary',
                borderColor: 'divider',
                bgcolor: (theme) => alpha(theme.palette.background.paper, 0.8),
              }}
              onClick={() => window.open(youtubeUrl, '_blank', 'noopener,noreferrer')}
            >
              {t('hero-page.cta-secondary')}
            </Button>
          </Stack>
        </Stack>
        <StyledVideoBox id="video-container">
          <Box
            component="iframe"
            title="Gift Bytes Productions — latest video"
            src={embedUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            sx={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              border: 0,
            }}
          />
        </StyledVideoBox>
      </Container>
    </Box>
  );
}
