import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

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
      buttonColor: 'secondary' as const,
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
      buttonLink2: 'https://play.google.com/store/apps/details?id=com.giftbytesproductions.touchslider&pcampaignid=web_share',
      featured: false,
    },
  ];

  return (
    <Container id="download" sx={{pt: { xs: 4, sm: 12 }, pb: { xs: 8, sm: 16 }, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: { xs: 3, sm: 6 }}}>
      <Box sx={{ width: { sm: '100%', md: '60%' }, textAlign: { sm: 'left', md: 'center' }}}>
        <Typography component="h2" variant="h4" gutterBottom sx={{ color: 'text.primary' }}>
          {t('download-page.title')}
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          {t('download-page.subtitle')}
        </Typography>
      </Box>
      <Grid container spacing={3} sx={{ alignItems: 'stretch', justifyContent: 'center', width: '100%' }}>
        {tiers.map((tier) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={tier.title} sx={{ display: 'flex' }}>
            <Card
              sx={[
                {
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                },
                tier.featured &&
                  ((theme) => ({
                    border: 'none',
                    background: 'radial-gradient(circle at 50% 0%, hsl(220, 20%, 35%), hsl(220, 30%, 6%))',
                    boxShadow: `0 8px 12px hsla(220, 20%, 42%, 0.2)`,
                    ...theme.applyStyles('dark', {
                      background: 'radial-gradient(circle at 50% 0%, hsl(220, 20%, 20%), hsl(220, 30%, 16%))',
                      boxShadow: `0 8px 12px hsla(0, 0%, 0%, 0.8)`,
                    }),
                  })),
              ]}
            >
              {'image' in tier && tier.image && (
                <Box
                  component="img"
                  src={tier.image}
                  alt={tier.title}
                  loading="lazy"
                  decoding="async"
                  sx={{
                    width: 'calc(100% + 32px)',
                    maxWidth: 'none',
                    ml: -2,
                    mt: -2,
                    mb: 0,
                    aspectRatio: '16 / 9',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              )}
              <CardContent sx={{ flexGrow: 1, pb: 0, pt: tier.featured ? 0 : undefined }}>
                <Box sx={[{mb: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2}, tier.featured ? { color: 'grey.100' } : { color: '' }]}>
                  <Typography component="h3" variant="h6">
                    {tier.title}
                  </Typography>
                  {tier.subheader && (
                    <Chip icon={<AutoAwesomeIcon />} label={tier.subheader} />
                  )}
                </Box>
                <Box sx={[ { display: 'flex', alignItems: 'baseline' }, tier.featured ? { color: 'grey.50' }  : { color: null }]}>
                  <Typography component="h3" variant="h2">
                    {tier.price}
                  </Typography>
                </Box>
                <Divider sx={{ my: 2, opacity: 0.8, borderColor: 'divider' }} />
                {tier.description.map((line) => (
                  <Box key={line} sx={{ py: 1, display: 'flex', gap: 1.5, alignItems: 'center' }}>
                    <CheckCircleRoundedIcon sx={[ { width: 20 }, tier.featured ? { color: 'primary.light' } : { color: 'primary.main' }]}/>
                    <Typography variant="subtitle2" component={'span'} sx={[ tier.featured ? { color: 'grey.50' } : { color: null }]}>
                      {line}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
              <CardActions sx={{ mt: 'auto', pt: 0 }}>
                <Button
                  fullWidth
                  variant={tier.buttonVariant}
                  color={tier.buttonColor}
                  onClick={() => { window.open(tier.buttonLink, '_blank', 'noopener,noreferrer'); }}
                >
                  {tier.buttonText}
                </Button>
                {'buttonText2' in tier && tier.buttonText2 && (
                  <Button
                    fullWidth
                    variant={tier.buttonVariant}
                    color={tier.buttonColor}
                    onClick={() => { if (tier.buttonLink2) window.open(tier.buttonLink2, '_blank', 'noopener,noreferrer'); }}
                  >
                    {tier.buttonText2}
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
