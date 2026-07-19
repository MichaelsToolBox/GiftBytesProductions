import { StyledVideoBox } from '../utils/styles/styled-box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ReactPlayer from 'react-player';
import Box from '@mui/material/Box';

export default function Hero() {
  const { t } = useTranslation();

  const videoUrl = 'https://www.youtube.com/watch?v=hS-31jq1CGk';
  const chronomazeUrl = 'https://store.steampowered.com/app/4180250/Chronomaze_Gravity_Maze/';
  const youtubeUrl = 'https://www.youtube.com/@GiftBytesProductions?sub_confirmation=1';

  return (
    <Box id="hero" sx={(theme) => ({width: '100%', backgroundRepeat: 'no-repeat', backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)', ...theme.applyStyles('dark', {backgroundImage:'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)'})})}>
      <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', pt: { xs: 10, sm: 16 }, pb: { xs: 6, sm: 10 }, px: { xs: 2, sm: 3 }}}>
        <Stack spacing={1.5} useFlexGap sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}>
          <Typography variant="h1" sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', textAlign: 'center', fontSize: { xs: 'clamp(2.1rem, 9vw, 2.75rem)', sm: 'clamp(3rem, 10vw, 3.5rem)' }, lineHeight: 1.15 }}>
            {t("hero-page.gift")}&nbsp;{t("hero-page.bytes")}&nbsp;
            <Typography component="span" variant="h1" sx={(theme) => ({fontSize: 'inherit', color: 'primary.main', ...theme.applyStyles('dark', {color: 'primary.light'})})}>
              {t("hero-page.productions")}
            </Typography>
          </Typography>
          <Typography sx={{textAlign: 'center', color: 'text.secondary', width: { sm: '100%', md: '80%' }, fontSize: { xs: '0.95rem', sm: '1rem' }, px: { xs: 0.5, sm: 0 }}}>
            {t("hero-page.subtitle")}
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.5}
            useFlexGap
            sx={{ pt: 0.5, width: { xs: '100%', sm: 'auto' }, justifyContent: 'center' }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              sx={{ minWidth: { sm: 180 }, width: { xs: '100%', sm: 'auto' } }}
              onClick={() => window.open(chronomazeUrl, '_blank', 'noopener,noreferrer')}
            >
              {t('hero-page.cta-primary')}
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              fullWidth
              sx={{ minWidth: { sm: 180 }, width: { xs: '100%', sm: 'auto' } }}
              onClick={() => window.open(youtubeUrl, '_blank', 'noopener,noreferrer')}
            >
              {t('hero-page.cta-secondary')}
            </Button>
          </Stack>
        </Stack>
        <StyledVideoBox id="video-container">
          <ReactPlayer
            src={videoUrl}
            width="100%"
            height="100%"
            playing={false}
            muted={false}
            volume={1}
            controls
            light
            style={{ position: 'absolute', top: 0, left: 0 }}
          />
        </StyledVideoBox>
      </Container>
    </Box>
  );
}
