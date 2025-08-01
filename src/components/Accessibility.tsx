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

const tiers = [
{
    title: 'Dev Logs',
    price: 'Free',
    description: [
      'Studio-quality video production',
      'Deep dives into our code and design',
      'Direct interaction with our developers',
      'Accessible worldwide on YouTube',
    ],
    buttonText: 'Subscribe',
    buttonVariant: 'outlined',
    buttonColor: 'primary',
},
  {
    title: 'TouchSlider',
    subheader: 'Recommended',
    price: 'Free',
    description: [
      'Available on IOS and Android',
      'Free to play with no hidden cost',
      'Supports old mobile devices',
      'Test',
      'Dedicated team',
      'Best deals',
    ],
    buttonText: 'Download now',
    buttonVariant: 'contained',
    buttonColor: 'secondary',
  },
  {
    title: 'Upcoming project',
    price: 'Free',
    description: [
      'Available for Windows, Macos and Linux',
      'Distribution through Steam and Apple Store',
      'Accessible in various languages',
      'Support',
    ],
    buttonText: 'To be announced',
    buttonVariant: 'outlined',
    buttonColor: 'primary',
  },
];

export default function Accessibility() {
  return (
    <Container
      id="accessibility"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: 'text.primary' }}
        >
          Accessibility
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
           Test
        </Typography>
      </Box>
      <Grid
        container
        spacing={3}
        sx={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}
      >
        {tiers.map((tier) => (
          <Grid
            size={{ xs: 12, sm: tier.title === 'TouchSlider' ? 12 : 6, md: 4 }}
            key={tier.title}
          >
            <Card
              sx={[
                {
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                },
                tier.title === 'TouchSlider' &&
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
              <CardContent>
                <Box
                  sx={[
                    {
                      mb: 1,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: 2,
                    },
                    tier.title === 'TouchSlider'
                      ? { color: 'grey.100' }
                      : { color: '' },
                  ]}
                >
                  <Typography component="h3" variant="h6">
                    {tier.title}
                  </Typography>
                  {tier.title === 'TouchSlider' && (
                    <Chip icon={<AutoAwesomeIcon />} label={tier.subheader} />
                  )}
                </Box>
                <Box
                  sx={[
                    {
                      display: 'flex',
                      alignItems: 'baseline',
                    },
                    tier.title === 'TouchSlider'
                      ? { color: 'grey.50' }
                      : { color: null },
                  ]}
                >
                  <Typography component="h3" variant="h2">
                    {tier.price}
                  </Typography>
                </Box>
                <Divider sx={{ my: 2, opacity: 0.8, borderColor: 'divider' }} />
                {tier.description.map((line) => (
                  <Box
                    key={line}
                    sx={{ py: 1, display: 'flex', gap: 1.5, alignItems: 'center' }}
                  >
                    <CheckCircleRoundedIcon
                      sx={[
                        {
                          width: 20,
                        },
                        tier.title === 'TouchSlider'
                          ? { color: 'primary.light' }
                          : { color: 'primary.main' },
                      ]}
                    />
                    <Typography
                      variant="subtitle2"
                      component={'span'}
                      sx={[
                        tier.title === 'TouchSlider'
                          ? { color: 'grey.50' }
                          : { color: null },
                      ]}
                    >
                      {line}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
              {tier.buttonColor && 
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant as 'outlined' | 'contained'}
                    color={tier.buttonColor as 'primary' | 'secondary'}
                    >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              }
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
