import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function Testimonials() {
  // i18n Translation
  const { t } = useTranslation()

  const userTestimonials = [
    {
      avatar: <Avatar alt="Michael Schenk" src="/static/images/avatar/1.jpg" />,
      name: t("testimonials-page.testimonial.0.name"),
      occupation: t("testimonials-page.testimonial.0.occupation"),
      testimonial: t("testimonials-page.testimonial.0.testimonial"),
    },
        {
      avatar: <Avatar alt="Michael Schenk" src="/static/images/avatar/1.jpg" />,
      name: t("testimonials-page.testimonial.1.name"),
      occupation: t("testimonials-page.testimonial.1.occupation"),
      testimonial: t("testimonials-page.testimonial.1.testimonial"),
    },
    {
      avatar: <Avatar alt="Michael Schenk" src="/static/images/avatar/1.jpg" />,
      name: t("testimonials-page.testimonial.2.name"),
      occupation: t("testimonials-page.testimonial.2.occupation"),
      testimonial: t("testimonials-page.testimonial.2.testimonial"),
    }
  ];

  return (
    <Container id="testimonials" sx={{pt: { xs: 4, sm: 12 }, pb: { xs: 8, sm: 16 }, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: { xs: 3, sm: 6 }}}>
      <Box sx={{width: { sm: '100%', md: '60%' }, textAlign: { sm: 'left', md: 'center' }}}>
        <Typography component="h2" variant="h4" gutterBottom sx={{ color: 'text.primary' }}>
          {t("testimonials-page.title")}
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          {t("testimonials-page.subheader")}
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index} sx={{ display: 'flex' }}>
            <Card variant="outlined" sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1}}>
              <CardContent>
                <Typography variant="body1" gutterBottom sx={{ color: 'text.secondary' }}>
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
