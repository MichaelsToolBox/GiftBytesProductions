import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Accessible Everywhere',
    description: 'We believe great software should work for everyone, on any device. Our projects are meticulously engineered for cross-platform compatibility and accessibility from the ground up.',
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: 'Polished & Performant',
    description: 'We deliver complete and highly optimized experiences. Our focus on clean architecture and rigorous testing ensures every product is stable, performant, and ready to enjoy from day one.',
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: 'Intuitive by Design',
    description: 'We believe powerful software doesn\'t have to be complicated. Our passion lies in crafting clean, intuitive interfaces that make every interaction straightforward and enjoyable.',
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: 'Powered by Innovation',
    description: 'We build with the future in mind. By leveraging the latest in software and hardware technology, we create forward-thinking products with powerful, cutting-edge functionality.',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'Dedicated Support',
    description: 'Our relationship doesn\'t end at the download. We provide friendly, responsive support directly from our team to ensure you have a great experience with our products, always.',
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: 'Meticulous Craftsmanship',
    description: 'We believe excellence lies in the details. From the first concept to the final line of code, every element of our work is thoughtfully planned and precisely executed for a flawless final product.',
  },
];

export default function Principles() {
  return (
    <Box
      id="principles"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: 'grey.900',
      }}
    >
      <Container
        sx={{
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
          <Typography component="h2" variant="h4" gutterBottom>
            Our Principles
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            These values are at the heart of everything we build, from the first line of code to the final user experience
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  color: 'inherit',
                  p: 3,
                  height: '100%',
                  borderColor: 'hsla(220, 25%, 25%, 0.3)',
                  backgroundColor: 'grey.800',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
