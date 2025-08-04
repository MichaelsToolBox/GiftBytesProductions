import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function Principles() {
  const { t } = useTranslation()

  const items = [
    {
      icon: <SettingsSuggestRoundedIcon />,
      title:  t("principles-page.items.0.title"),
      description: t("principles-page.items.0.description"),
    },
    {
      icon: <ConstructionRoundedIcon />,
      title:  t("principles-page.items.1.title"),
      description: t("principles-page.items.1.description"),
    },
    {
      icon: <ThumbUpAltRoundedIcon />,
      title:  t("principles-page.items.2.title"),
      description: t("principles-page.items.2.description"),
    },
    {
      icon: <AutoFixHighRoundedIcon />,
      title:  t("principles-page.items.3.title"),
      description: t("principles-page.items.3.description"),
    },
    {
      icon: <SupportAgentRoundedIcon />,
      title:  t("principles-page.items.4.title"),
      description: t("principles-page.items.4.description"),
    },
    {
      icon: <QueryStatsRoundedIcon />,
      title:  t("principles-page.items.5.title"),
      description: t("principles-page.items.5.description"),
    },
  ];

  return (
    <Box id="principles" sx={{pt: { xs: 4, sm: 12 }, pb: { xs: 8, sm: 16 }, color: 'white', bgcolor: 'grey.900'}}>
      <Container sx={{position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: { xs: 3, sm: 6 }}}>
        <Box sx={{width: { sm: '100%', md: '60%' }, textAlign: { sm: 'left', md: 'center' }}}>
          <Typography component="h2" variant="h4" gutterBottom>
            {t("principles-page.title")}
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            {t("principles-page.subheader")}
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
                sx={{color: 'inherit', p: 3, height: '100%', borderColor: 'hsla(220, 25%, 25%, 0.3)', backgroundColor: 'grey.800'}}
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
