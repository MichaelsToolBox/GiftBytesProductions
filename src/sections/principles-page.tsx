import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';
import { alpha } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SectionHeader from '../utils/section-header';
import { cardGap, sectionPx, sectionPy, softHoverLift, surfaceRadius } from '../utils/section-rhythm';

export default function Principles() {
  const { t } = useTranslation();

  const items = [
    {
      icon: <SettingsSuggestRoundedIcon fontSize="small" />,
      title: t('principles-page.items.0.title'),
      description: t('principles-page.items.0.description'),
    },
    {
      icon: <ConstructionRoundedIcon fontSize="small" />,
      title: t('principles-page.items.1.title'),
      description: t('principles-page.items.1.description'),
    },
    {
      icon: <ThumbUpAltRoundedIcon fontSize="small" />,
      title: t('principles-page.items.2.title'),
      description: t('principles-page.items.2.description'),
    },
    {
      icon: <AutoFixHighRoundedIcon fontSize="small" />,
      title: t('principles-page.items.3.title'),
      description: t('principles-page.items.3.description'),
    },
    {
      icon: <SupportAgentRoundedIcon fontSize="small" />,
      title: t('principles-page.items.4.title'),
      description: t('principles-page.items.4.description'),
    },
    {
      icon: <QueryStatsRoundedIcon fontSize="small" />,
      title: t('principles-page.items.5.title'),
      description: t('principles-page.items.5.description'),
    },
  ];

  return (
    <Box
      id="principles"
      sx={(theme) => ({
        py: sectionPy,
        position: 'relative',
        color: 'common.white',
        background: `
          radial-gradient(ellipse 80% 60% at 15% -10%, ${alpha(theme.palette.primary.main, 0.35)} 0%, transparent 55%),
          radial-gradient(ellipse 50% 40% at 90% 100%, ${alpha(theme.palette.primary.main, 0.18)} 0%, transparent 50%),
          linear-gradient(165deg, hsl(214, 32%, 10%) 0%, hsl(214, 38%, 5%) 100%)
        `,
      })}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          px: sectionPx,
        }}
      >
        <SectionHeader
          title={t('principles-page.title')}
          subtitle={t('principles-page.subheader')}
          invert
        />

        <Grid container spacing={cardGap}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.title}>
              <Box
                sx={{
                  height: '100%',
                  p: { xs: 2.5, sm: 2.75 },
                  borderRadius: surfaceRadius,
                  border: '1px solid',
                  borderColor: alpha('#fff', 0.1),
                  bgcolor: alpha('#fff', 0.04),
                  backdropFilter: 'blur(10px)',
                  transition: 'transform 220ms ease, border-color 220ms ease, background-color 220ms ease',
                  '&:hover': {
                    transform: softHoverLift,
                    borderColor: alpha('#5eb8f5', 0.45),
                    bgcolor: alpha('#fff', 0.07),
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: 2,
                      display: 'grid',
                      placeItems: 'center',
                      color: 'primary.light',
                      bgcolor: alpha('#5eb8f5', 0.16),
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    variant="caption"
                    sx={{
                      fontFamily: '"Syne", sans-serif',
                      fontWeight: 700,
                      letterSpacing: 1.2,
                      color: alpha('#fff', 0.45),
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </Typography>
                </Box>
                <Typography variant="h6" gutterBottom sx={{ letterSpacing: '-0.02em', color: 'common.white' }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: alpha('#fff', 0.68), lineHeight: 1.65 }}>
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
