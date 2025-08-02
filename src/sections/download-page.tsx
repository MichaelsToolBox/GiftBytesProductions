import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';

export default function Download() {
  const { t } = useTranslation();

  const tiers = [
    {
        title: t("tiers.title1"),
        price: t("tiers.price1"),
        subheader: t("tiers.subheader1"),
        description: [
          t("tiers.description10"),
          t("tiers.description11"),
          t("tiers.description12"),
          t("tiers.description13"),
        ],
        buttonText: t("tiers.buttontext1"),
        buttonVariant: 'outlined',
        buttonColor: 'primary',
    },
    {
      title: t("tiers.title2"),
      price: t("tiers.price2"),
      subheader: t("tiers.subheader2"),
      description: [
        t("tiers.description20"),
        t("tiers.description21"),
        t("tiers.description22"),
        t("tiers.description23"),
        t("tiers.description24"),
        t("tiers.description25"),
      ],
      buttonText: t("tiers.buttontext21"),
      buttonText2: t("tiers.buttontext22"),
      buttonVariant: 'contained',
      buttonColor: 'secondary',
    },
    {
      title: t("tiers.title3"),
      price: t("tiers.price3"),
      subheader: t("tiers.subheader3"),
      description: [
          t("tiers.description30"),
          t("tiers.description31"),
          t("tiers.description32"),
          t("tiers.description33"),
      ],
      buttonText: t("tiers.buttontext3"),
      buttonVariant: 'outlined',
      buttonColor: 'primary',
    },
  ];

  return (
    <Container id="download" sx={{pt: { xs: 4, sm: 12 }, pb: { xs: 8, sm: 16 }, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: { xs: 3, sm: 6 }}}>
      <Box sx={{ width: { sm: '100%', md: '60%' }, textAlign: { sm: 'left', md: 'center' }}}>
        <Typography component="h2" variant="h4" gutterBottom sx={{ color: 'text.primary' }}>
          {t("download-page.title")}
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          {t("download-page.subtitle")}
        </Typography>
      </Box>
      <Grid container spacing={3} sx={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        {tiers.map((tier) => (
          <Grid size={{ xs: 12, sm: tier.title === t("tiers.title2") ? 12 : 6, md: 4 }} key={tier.title}>
            <Card
              sx={[{ p: 2, display: 'flex', flexDirection: 'column', gap: 4},
                tier.title === t("tiers.title2") &&
                  ((theme) => ({
                    border: 'none',
                    background: 'radial-gradient(circle at 50% 0%, hsl(220, 20%, 35%), hsl(220, 30%, 6%))',
                    boxShadow: `0 8px 12px hsla(220, 20%, 42%, 0.2)`,
                    ...theme.applyStyles('dark', { background: 'radial-gradient(circle at 50% 0%, hsl(220, 20%, 20%), hsl(220, 30%, 16%))',boxShadow: `0 8px 12px hsla(0, 0%, 0%, 0.8)`}),
                  })),
              ]}
            >
              <CardContent>
                <Box sx={[{mb: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2}, tier.title === t("tiers.title2") ? { color: 'grey.100' } : { color: '' }]}>
                  <Typography component="h3" variant="h6">
                    {tier.title}
                  </Typography>
                  {tier.subheader && (
                    <Chip icon={<AutoAwesomeIcon />} label={tier.subheader} />
                  )}
                </Box>
                <Box sx={[ { display: 'flex', alignItems: 'baseline' }, tier.title === t("tiers.title2") ? { color: 'grey.50' }  : { color: null }]}>
                  <Typography component="h3" variant="h2">
                    {tier.price}
                  </Typography>
                </Box>
                <Divider sx={{ my: 2, opacity: 0.8, borderColor: 'divider' }} />
                {tier.description.map((line) => (
                  <Box key={line} sx={{ py: 1, display: 'flex', gap: 1.5, alignItems: 'center' }}>
                    <CheckCircleRoundedIcon sx={[ { width: 20 }, tier.title === t("tiers.title2") ? { color: 'primary.light' } : { color: 'primary.main' }]}/>
                    <Typography variant="subtitle2" component={'span'} sx={[ tier.title === t("tiers.title2") ? { color: 'grey.50' } : { color: null }]}>
                      {line}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
              {tier.buttonColor && 
                <CardActions>
                  <Button fullWidth  variant={tier.buttonVariant as 'outlined' | 'contained'} color={tier.buttonColor as 'primary' | 'secondary'}>
                    {tier.buttonText}
                  </Button>
                  {tier.title === t("tiers.title2") &&
                    <Button fullWidth variant={tier.buttonVariant as 'outlined' | 'contained'} color={tier.buttonColor as 'primary' | 'secondary'}>
                      {tier.buttonText2}
                    </Button>
                  }
                </CardActions>
              }
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
