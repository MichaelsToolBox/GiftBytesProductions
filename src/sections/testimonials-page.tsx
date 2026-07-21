import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';
import { alpha } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SectionHeader from '../utils/section-header';
import { cardGap, sectionPx, sectionPy, softHoverLift, surfaceRadius } from '../utils/section-rhythm';

const AVATAR_TONES = [
  'hsl(204, 90%, 42%)',
  'hsl(195, 70%, 38%)',
  'hsl(214, 55%, 46%)',
  'hsl(200, 65%, 40%)',
  'hsl(210, 75%, 40%)',
  'hsl(190, 55%, 36%)',
];

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

export default function Testimonials() {
  const { t } = useTranslation();

  const userTestimonials = [0, 1, 2, 3, 4, 5].map((index) => ({
    name: t(`testimonials-page.testimonial.${index}.name`),
    occupation: t(`testimonials-page.testimonial.${index}.occupation`),
    testimonial: t(`testimonials-page.testimonial.${index}.testimonial`),
    tone: AVATAR_TONES[index % AVATAR_TONES.length],
  }));

  return (
    <Container
      id="testimonials"
      sx={{
        py: sectionPy,
        px: sectionPx,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <SectionHeader title={t('testimonials-page.title')} subtitle={t('testimonials-page.subheader')} />

      <Grid container spacing={cardGap}>
        {userTestimonials.map((testimonial, index) => (
          <Grid
            size={{ xs: 12, sm: 6, md: index === 0 || index === 5 ? 6 : 4 }}
            key={`${testimonial.name}-${index}`}
            sx={{ display: 'flex' }}
          >
            <Box
              sx={(theme) => ({
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: { xs: 2.5, sm: 2.75 },
                pl: { xs: 2.75, sm: 3 },
                borderRadius: surfaceRadius,
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: alpha(theme.palette.background.paper, 0.92),
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  top: 14,
                  bottom: 14,
                  width: 3,
                  borderRadius: 999,
                  bgcolor: 'primary.main',
                  opacity: 0.7,
                },
                '&:hover': {
                  transform: softHoverLift,
                  borderColor: alpha(theme.palette.primary.main, 0.4),
                  boxShadow: {
                    sm: `0 16px 36px ${alpha(theme.palette.common.black, theme.palette.mode === 'dark' ? 0.3 : 0.07)}`,
                  },
                },
              })}
            >
              <Box>
                <Typography
                  aria-hidden
                  sx={{
                    fontFamily: '"Syne", sans-serif',
                    fontSize: '2.25rem',
                    lineHeight: 0.8,
                    color: 'primary.main',
                    opacity: 0.3,
                    mb: 1,
                    userSelect: 'none',
                  }}
                >
                  “
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: 'text.secondary', mb: { xs: 2.25, sm: 2.5 }, lineHeight: 1.7 }}
                >
                  {testimonial.testimonial}
                </Typography>
              </Box>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Avatar
                  alt={testimonial.name}
                  sx={{
                    width: 42,
                    height: 42,
                    bgcolor: testimonial.tone,
                    fontSize: 14,
                    fontWeight: 700,
                  }}
                >
                  {initials(testimonial.name)}
                </Avatar>
                <Box>
                  <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {testimonial.occupation}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
