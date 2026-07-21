import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';
import { alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SectionHeader from '../utils/section-header';
import { cardGap, sectionPx, sectionPy, softHoverLift, surfaceRadius } from '../utils/section-rhythm';

const ICONS = [
  <SportsEsportsRoundedIcon key="games" />,
  <VideocamRoundedIcon key="media" />,
  <RocketLaunchRoundedIcon key="ship" />,
];

export default function Features() {
  const { t } = useTranslation();

  const pillars = [0, 1, 2].map((index) => ({
    icon: ICONS[index],
    index,
    title: t(`feature-page.items.${index}.title`),
    description: t(`feature-page.items.${index}.description`),
  }));

  const scrollToGames = () => {
    const el = document.getElementById('download');
    if (!el) return;
    const offset = 80;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
  };

  return (
    <Container id="studio" sx={{ py: sectionPy, px: sectionPx }}>
      <SectionHeader title={t('feature-page.title')} subtitle={t('feature-page.subheader')} />

      <Grid container spacing={cardGap}>
        {pillars.map((pillar) => (
          <Grid key={pillar.title} size={{ xs: 12, md: 4 }} sx={{ display: 'flex' }}>
            <Box
              sx={(theme) => ({
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                p: { xs: 2.75, sm: 3 },
                borderRadius: surfaceRadius,
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: alpha(theme.palette.background.paper, 0.92),
                background: `
                  linear-gradient(165deg, ${alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.1 : 0.05)} 0%, transparent 42%),
                  ${alpha(theme.palette.background.paper, 0.92)}
                `,
                transition: 'transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease',
                '&:hover': {
                  transform: softHoverLift,
                  borderColor: alpha(theme.palette.primary.main, 0.4),
                  boxShadow: {
                    sm: `0 16px 36px ${alpha(theme.palette.common.black, theme.palette.mode === 'dark' ? 0.3 : 0.07)}`,
                  },
                },
              })}
            >
              <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
                <Box
                  sx={(theme) => ({
                    width: 44,
                    height: 44,
                    borderRadius: 2,
                    display: 'grid',
                    placeItems: 'center',
                    color: 'primary.main',
                    bgcolor: alpha(theme.palette.primary.main, 0.12),
                  })}
                >
                  {pillar.icon}
                </Box>
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: '"Syne", sans-serif',
                    fontWeight: 700,
                    letterSpacing: 1.2,
                    color: 'text.secondary',
                    opacity: 0.7,
                  }}
                >
                  {String(pillar.index + 1).padStart(2, '0')}
                </Typography>
              </Stack>

              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ letterSpacing: '-0.02em', mb: 1 }}>
                  {pillar.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  {pillar.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={1.5}
        useFlexGap
        sx={{ mt: { xs: 3.5, sm: 4.5 }, justifyContent: 'center', alignItems: 'center' }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{ borderRadius: 999, px: 2.75, whiteSpace: 'nowrap', width: { xs: '100%', sm: 'auto' } }}
          onClick={scrollToGames}
        >
          {t('feature-page.cta-games')}
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderRadius: 999,
            px: 2.75,
            whiteSpace: 'nowrap',
            width: { xs: '100%', sm: 'auto' },
            color: 'text.primary',
            borderColor: 'divider',
          }}
          onClick={() =>
            window.open(
              'https://www.youtube.com/@GiftBytesProductions?sub_confirmation=1',
              '_blank',
              'noopener,noreferrer',
            )
          }
        >
          {t('feature-page.cta-media')}
        </Button>
      </Stack>
    </Container>
  );
}
