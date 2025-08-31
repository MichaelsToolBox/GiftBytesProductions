import { StyledVideoBox } from '../utils/styles/styled-box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';
import Stack from '@mui/material/Stack';
import ReactPlayer from 'react-player';
import Box from '@mui/material/Box';


export default function Hero() {
  // i18n Translation hook
  const { t } = useTranslation();

  // Will need replacing with new video
  const videoUrl = 'https://www.youtube.com/watch?v=8GKI7CidwRo';

  return (
    <Box id="hero" sx={(theme) => ({width: '100%', backgroundRepeat: 'no-repeat', backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)', ...theme.applyStyles('dark', {backgroundImage:'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)'})})}>
      <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', pt: { xs: 14, sm: 20 }, pb: { xs: 8, sm: 12 }}}>
        <Stack spacing={2} useFlexGap sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}>
          <Typography variant="h1" sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', fontSize: 'clamp(3rem, 10vw, 3.5rem)'}}>
            {t("hero-page.gift")}&nbsp;{t("hero-page.bytes")}&nbsp;
            <Typography component="span" variant="h1" sx={(theme) => ({fontSize: 'inherit', color: 'primary.main', ...theme.applyStyles('dark', {color: 'primary.light'})})}>
              {t("hero-page.productions")}
            </Typography>
          </Typography>
          <Typography sx={{textAlign: 'center', color: 'text.secondary', width: { sm: '100%', md: '80%' }}}>
            {t("hero-page.subtitle")}
          </Typography>
        </Stack>
        <StyledVideoBox id="video-container">
          <ReactPlayer
            src={videoUrl}
            width="100%"
            height="100%"
            playing={true}
            muted={false}
            controls={true}
            loop={true}
            style={{ position: 'absolute', top: 0, left: 0 }}
          />
        </StyledVideoBox>
      </Container>
    </Box>
  );
}
