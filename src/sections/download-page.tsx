import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SectionHeader from '../utils/section-header';
import { cardGap, sectionPx, sectionPy, softHoverLift, surfaceRadius } from '../utils/section-rhythm';
import { paperBg } from '../utils/theme-alpha';

export default function Download() {
  const { t } = useTranslation();

  const tiers = [
    {
      title: t('tiers.title1'),
      price: t('tiers.price1'),
      subheader: t('tiers.subheader1'),
      description: [
        t('tiers.description10'),
        t('tiers.description11'),
        t('tiers.description12'),
        t('tiers.description13'),
      ],
      buttonText: t('tiers.buttontext1'),
      buttonVariant: 'outlined' as const,
      buttonColor: 'primary' as const,
      buttonLink: 'https://www.youtube.com/@GiftBytesProductions?sub_confirmation=1',
      featured: false,
    },
    {
      title: t('tiers.title3'),
      price: t('tiers.price3'),
      subheader: t('tiers.subheader3'),
      description: [
        t('tiers.description30'),
        t('tiers.description31'),
        t('tiers.description32'),
        t('tiers.description33'),
      ],
      buttonText: t('tiers.buttontext3'),
      buttonVariant: 'contained' as const,
      buttonColor: 'primary' as const,
      buttonLink: 'https://store.steampowered.com/app/4180250/Chronomaze_Gravity_Maze/',
      featured: true,
      image: '/header.jpg',
    },
    {
      title: t('tiers.title2'),
      price: t('tiers.price2'),
      subheader: t('tiers.subheader2'),
      description: [
        t('tiers.description20'),
        t('tiers.description21'),
        t('tiers.description22'),
        t('tiers.description23'),
        t('tiers.description24'),
        t('tiers.description25'),
      ],
      buttonText: t('tiers.buttontext21'),
      buttonText2: t('tiers.buttontext22'),
      buttonVariant: 'outlined' as const,
      buttonColor: 'primary' as const,
      buttonLink: 'https://apps.apple.com/de/app/touchslider/id6745836687',
      buttonLink2:
        'https://play.google.com/store/apps/details?id=com.giftbytesproductions.touchslider&pcampaignid=web_share',
      featured: false,
    },
  ];

  return (
    <Container
      id="download"
      sx={{
        py: sectionPy,
        px: sectionPx,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <SectionHeader title={t('download-page.title')} subtitle={t('download-page.subtitle')} />

      <Grid
        container
        spacing={cardGap}
        sx={{ alignItems: 'stretch', justifyContent: 'center', width: '100%' }}
      >
        {tiers.map((tier) => {
          const dual = 'buttonText2' in tier && Boolean(tier.buttonText2);

          return (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={tier.title} sx={{ display: 'flex' }}>
              <Box
                sx={[
                  (theme) => ({
                    // Vertical room for content; keep sides a bit roomier so dual CTAs stay one line
                    px: { xs: 2.5, sm: 2.75 },
                    py: { xs: 2.75, sm: 3.25 },
                    display: 'flex',
                    flexDirection: 'column',
                    gap: { xs: 2.25, sm: 2.75 },
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    borderRadius: surfaceRadius,
                    border: '1px solid',
                    borderColor: alpha(theme.palette.divider, 0.9),
                    bgcolor: paperBg(theme, 0.9),
                    transition: 'transform 240ms ease, border-color 240ms ease, box-shadow 240ms ease',
                    '&:hover': {
                      transform: softHoverLift,
                      borderColor: alpha(theme.palette.primary.main, 0.45),
                      boxShadow: {
                        sm: `0 18px 40px ${alpha(theme.palette.common.black, 0.08)}`,
                      },
                    },
                    ...theme.applyStyles('dark', {
                      '&:hover': {
                        boxShadow: {
                          sm: `0 18px 40px ${alpha(theme.palette.common.black, 0.35)}`,
                        },
                      },
                    }),
                  }),
                  tier.featured &&
                    ((theme) => ({
                      border: '1px solid',
                      borderColor: alpha(theme.palette.primary.main, 0.55),
                      background: 'linear-gradient(165deg, hsl(210, 28%, 16%) 0%, hsl(210, 35%, 7%) 100%)',
                      boxShadow: `
                        0 24px 56px ${alpha(theme.palette.common.black, 0.4)},
                        0 0 0 1px ${alpha(theme.palette.primary.main, 0.2)},
                        inset 0 1px 0 ${alpha(theme.palette.common.white, 0.06)}
                      `,
                      color: 'grey.100',
                      ...theme.applyStyles('dark', {
                        background: 'linear-gradient(165deg, hsl(210, 26%, 14%) 0%, hsl(210, 32%, 8%) 100%)',
                      }),
                    })),
                ]}
              >
                {'image' in tier && tier.image && (
                  <Box
                    sx={{
                      width: { xs: 'calc(100% + 40px)', sm: 'calc(100% + 44px)' },
                      ml: { xs: -2.5, sm: -2.75 },
                      mt: { xs: -2.75, sm: -3.25 },
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      component="img"
                      src={tier.image}
                      alt={tier.title}
                      loading="lazy"
                      decoding="async"
                      sx={{
                        width: '100%',
                        aspectRatio: '16 / 9',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                    <Box
                      aria-hidden
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.45) 100%)',
                      }}
                    />
                  </Box>
                )}

                <CardContent sx={{ flexGrow: 1, p: 0, '&:last-child': { pb: 0 } }}>
                  <Box
                    sx={{
                      mb: 1.25,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: 1.5,
                      flexWrap: 'wrap',
                      color: tier.featured ? 'grey.100' : 'inherit',
                    }}
                  >
                    <Typography component="h3" variant="h6" sx={{ letterSpacing: '-0.02em' }}>
                      {tier.title}
                    </Typography>
                    {tier.subheader && (
                      <Chip
                        icon={<AutoAwesomeIcon />}
                        label={tier.subheader}
                        size="small"
                        sx={
                          tier.featured
                            ? {
                                bgcolor: (theme) => alpha(theme.palette.primary.main, 0.22),
                                color: 'primary.light',
                                border: '1px solid',
                                borderColor: (theme) => alpha(theme.palette.primary.main, 0.4),
                                '& .MuiChip-icon': { color: 'inherit' },
                              }
                            : undefined
                        }
                      />
                    )}
                  </Box>

                  <Typography
                    component="p"
                    variant="subtitle2"
                    sx={{
                      color: tier.featured ? 'grey.400' : 'text.secondary',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      fontWeight: 700,
                      mb: 0.75,
                      fontSize: '0.72rem',
                    }}
                  >
                    {tier.price}
                  </Typography>

                  <Divider
                    sx={{
                      my: { xs: 2, sm: 2.25 },
                      opacity: 0.85,
                      borderColor: tier.featured ? 'grey.700' : 'divider',
                    }}
                  />

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1.25, sm: 1.4 } }}>
                    {tier.description.map((line) => (
                      <Box key={line} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                        <CheckCircleRoundedIcon
                          sx={{
                            width: 20,
                            mt: '2px',
                            flexShrink: 0,
                            color: tier.featured ? 'primary.light' : 'primary.main',
                          }}
                        />
                        <Typography
                          variant="subtitle2"
                          component="span"
                          sx={{ color: tier.featured ? 'grey.200' : 'text.secondary', lineHeight: 1.55 }}
                        >
                          {line}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>

                <CardActions
                  sx={{
                    mt: 'auto',
                    p: 0,
                    pt: { xs: 0.75, sm: 1 },
                    gap: dual ? 1 : 0,
                    // Stack dual store CTAs so labels stay one line in 3-col layouts
                    flexDirection: 'column',
                    '& > :not(style)': { m: '0 !important' },
                  }}
                >
                  <Button
                    fullWidth
                    variant={tier.buttonVariant}
                    color={tier.buttonColor}
                    sx={{ borderRadius: 999, whiteSpace: 'nowrap' }}
                    onClick={() => {
                      window.open(tier.buttonLink, '_blank', 'noopener,noreferrer');
                    }}
                  >
                    {tier.buttonText}
                  </Button>
                  {dual && (
                    <Button
                      fullWidth
                      variant={tier.buttonVariant}
                      color={tier.buttonColor}
                      sx={{ borderRadius: 999, whiteSpace: 'nowrap' }}
                      onClick={() => {
                        if (tier.buttonLink2) window.open(tier.buttonLink2, '_blank', 'noopener,noreferrer');
                      }}
                    >
                      {tier.buttonText2}
                    </Button>
                  )}
                </CardActions>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
