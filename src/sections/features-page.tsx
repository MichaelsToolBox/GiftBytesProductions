import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Fade from '@mui/material/Fade';
import { alpha, keyframes } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import PriceCheckRoundedIcon from '@mui/icons-material/PriceCheckRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';
import TabletMacRoundedIcon from '@mui/icons-material/TabletMacRounded';
import DesktopWindowsRoundedIcon from '@mui/icons-material/DesktopWindowsRounded';
import SectionHeader from '../utils/section-header';
import { cardGap, sectionPx, sectionPy, surfaceRadius } from '../utils/section-rhythm';

const softFloat = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-7px); }
`;

const DevicesVisual = () => (
  <Box sx={{ position: 'relative', height: '100%', width: '100%', display: 'grid', placeItems: 'center' }}>
    <Box
      sx={(theme) => ({
        position: 'absolute',
        width: 200,
        height: 200,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.2)} 0%, transparent 68%)`,
      })}
    />
    <Stack
      direction="row"
      spacing={2.25}
      alignItems="flex-end"
      sx={{ position: 'relative', zIndex: 1, animation: `${softFloat} 5.2s ease-in-out infinite` }}
    >
      <DesktopWindowsRoundedIcon sx={{ fontSize: 68, color: 'primary.main', opacity: 0.95 }} />
      <TabletMacRoundedIcon sx={{ fontSize: 50, color: 'text.secondary', opacity: 0.72, mb: 0.5 }} />
      <PhoneIphoneRoundedIcon sx={{ fontSize: 38, color: 'text.secondary', opacity: 0.6, mb: 0.25 }} />
    </Stack>
  </Box>
);

const CostVisual = () => (
  <Box sx={{ position: 'relative', height: '100%', width: '100%', display: 'grid', placeItems: 'center' }}>
    <Box
      sx={(theme) => ({
        width: 128,
        height: 128,
        borderRadius: '50%',
        display: 'grid',
        placeItems: 'center',
        border: '1px solid',
        borderColor: alpha(theme.palette.primary.main, 0.4),
        background: `radial-gradient(circle at 30% 28%, ${alpha(theme.palette.primary.main, 0.22)}, transparent 65%)`,
        boxShadow: `0 0 40px ${alpha(theme.palette.primary.main, 0.15)}`,
        animation: `${softFloat} 4.6s ease-in-out infinite`,
      })}
    >
      <PriceCheckRoundedIcon color="primary" sx={{ fontSize: 58 }} />
    </Box>
  </Box>
);

const CommunityVisual = () => (
  <Box sx={{ position: 'relative', height: '100%', width: '100%', display: 'grid', placeItems: 'center' }}>
    <Box
      sx={(theme) => ({
        width: 148,
        height: 148,
        borderRadius: 4,
        display: 'grid',
        placeItems: 'center',
        border: '1px solid',
        borderColor: alpha(theme.palette.primary.main, 0.28),
        background: `
          linear-gradient(145deg, ${alpha(theme.palette.primary.main, 0.14)}, transparent 55%),
          ${alpha(theme.palette.background.paper, 0.4)}
        `,
        animation: `${softFloat} 5.4s ease-in-out infinite`,
      })}
    >
      <SupportAgentRoundedIcon color="primary" sx={{ fontSize: 54 }} />
    </Box>
  </Box>
);

export default function Features() {
  const { t } = useTranslation();
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const items = [
    {
      icon: <DevicesRoundedIcon />,
      title: t('feature-page.items.0.title'),
      description: t('feature-page.items.0.description'),
      visual: <DevicesVisual />,
    },
    {
      icon: <PriceCheckRoundedIcon />,
      title: t('feature-page.items.1.title'),
      description: t('feature-page.items.1.description'),
      visual: <CostVisual />,
    },
    {
      icon: <SupportAgentRoundedIcon />,
      title: t('feature-page.items.2.title'),
      description: t('feature-page.items.2.description'),
      visual: <CommunityVisual />,
    },
  ];

  return (
    <Container id="features" sx={{ py: sectionPy, px: sectionPx }}>
      <SectionHeader title={t('feature-page.title')} subtitle={t('feature-page.subheader')} />

      <Box
        sx={{
          display: { xs: 'none', sm: 'grid' },
          gridTemplateColumns: { sm: '1fr', md: '1.2fr 0.8fr' },
          gap: cardGap,
          alignItems: 'stretch',
        }}
      >
        <Box
          sx={(theme) => ({
            minHeight: { sm: 360, md: 420 },
            borderRadius: surfaceRadius,
            border: '1px solid',
            borderColor: alpha(theme.palette.primary.main, 0.18),
            background: `
              radial-gradient(ellipse 70% 55% at 50% 40%, ${alpha(theme.palette.primary.main, 0.12)}, transparent 65%),
              linear-gradient(180deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, transparent 50%),
              ${theme.palette.background.paper}
            `,
            position: 'relative',
            overflow: 'hidden',
            p: 2,
          })}
        >
          <Box
            aria-hidden
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'linear-gradient(to right, hsla(210,20%,50%,0.05) 1px, transparent 1px), linear-gradient(to bottom, hsla(210,20%,50%,0.05) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
              maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 78%)',
            }}
          />
          <Fade in key={selectedItemIndex} timeout={320}>
            <Box sx={{ position: 'relative', height: '100%', minHeight: 320 }}>{items[selectedItemIndex].visual}</Box>
          </Fade>
        </Box>

        <Stack spacing={1.25} role="tablist" aria-label={t('feature-page.title')}>
          {items.map(({ icon, title, description }, index) => {
            const selected = selectedItemIndex === index;
            return (
              <Box
                key={title}
                component="button"
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setSelectedItemIndex(index)}
                onMouseEnter={() => setSelectedItemIndex(index)}
                sx={(theme) => ({
                  all: 'unset',
                  cursor: 'pointer',
                  display: 'block',
                  p: { sm: 2.1, md: 2.35 },
                  borderRadius: 2.5,
                  border: '1px solid',
                  borderColor: selected ? alpha(theme.palette.primary.main, 0.55) : 'divider',
                  backgroundColor: selected
                    ? alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.14 : 0.07)
                    : alpha(theme.palette.background.paper, 0.7),
                  boxShadow: selected
                    ? `0 12px 28px ${alpha(theme.palette.common.black, theme.palette.mode === 'dark' ? 0.28 : 0.06)}`
                    : 'none',
                  transition: 'border-color 200ms ease, background-color 200ms ease, transform 200ms ease, box-shadow 200ms ease',
                  transform: selected ? 'translateX(3px)' : 'none',
                  '&:hover': {
                    borderColor: alpha(theme.palette.primary.main, 0.4),
                    backgroundColor: alpha(theme.palette.primary.main, 0.05),
                  },
                  '&:focus-visible': {
                    outline: `2px solid ${theme.palette.primary.main}`,
                    outlineOffset: 2,
                  },
                })}
              >
                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                  <Box
                    sx={(theme) => ({
                      mt: 0.25,
                      color: selected ? 'primary.main' : 'text.secondary',
                      display: 'grid',
                      placeItems: 'center',
                      width: 38,
                      height: 38,
                      borderRadius: 1.75,
                      bgcolor: alpha(theme.palette.primary.main, selected ? 0.16 : 0.06),
                    })}
                  >
                    {icon}
                  </Box>
                  <Box sx={{ textAlign: 'left' }}>
                    <Typography variant="h6" sx={{ color: 'text.primary', mb: 0.5, letterSpacing: '-0.02em' }}>
                      {title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {description}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            );
          })}
        </Stack>
      </Box>

      <Stack spacing={cardGap.xs} sx={{ display: { xs: 'flex', sm: 'none' } }}>
        {items.map((item) => (
          <Box
            key={item.title}
            sx={(theme) => ({
              borderRadius: surfaceRadius,
              border: '1px solid',
              borderColor: 'divider',
              overflow: 'hidden',
              bgcolor: 'background.paper',
              background: `linear-gradient(160deg, ${alpha(theme.palette.primary.main, 0.06)}, transparent 42%)`,
            })}
          >
            <Box sx={{ height: 152, px: 2 }}>{item.visual}</Box>
            <Box sx={{ px: 2.5, pb: 2.5, pt: 0.75 }}>
              <Typography variant="h6" gutterBottom sx={{ letterSpacing: '-0.02em' }}>
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </Container>
  );
}
