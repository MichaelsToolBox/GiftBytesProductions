import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import * as React from 'react';

const SUPPORT_EMAIL = 'giftbytesproductions@gmail.com';
const PAYPAL_URL =
  'https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=giftbytesproductions%40gmail.com&currency_code=EUR&item_name=Gift%20Bytes%20Productions';

export default function FAQ() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = React.useState<string[]>([]);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(
        isExpanded ? [...expanded, panel] : expanded.filter((item) => item !== panel),
      );
    };

  return (
    <Container id="faq" sx={{pt: { xs: 4, sm: 12 }, pb: { xs: 8, sm: 16 }, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: { xs: 3, sm: 6 }}}>
      <Typography component="h2" variant="h4" sx={{color: 'text.primary', width: { sm: '100%', md: '60%' }, textAlign: { sm: 'left', md: 'center' }}}>
        {t("faq.title")}
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Accordion expanded={expanded.includes('panel1')} onChange={handleChange('panel1')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1d-content" id="panel1d-header">
            <Typography component="span" variant="subtitle2">
              {t("faq.subtitle1")}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" gutterBottom sx={{ maxWidth: { sm: '100%', md: '70%' } }}>
              {t("faq.description1")}
              <Link href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</Link>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded.includes('panel3')} onChange={handleChange('panel3')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3d-content" id="panel3d-header">
            <Typography component="span" variant="subtitle2">
              {t("faq.subtitle2")}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" gutterBottom sx={{ maxWidth: { sm: '100%', md: '70%' } }}>
              {t("faq.description2")}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded.includes('panel4')} onChange={handleChange('panel4')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4d-content" id="panel4d-header">
            <Typography component="span" variant="subtitle2">
              {t("faq.subtitle3")}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={2} sx={{ maxWidth: { sm: '100%', md: '70%' } }}>
              <Typography variant="body2">
                {t("faq.description3")}
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                <Button
                  variant="contained"
                  color="primary"
                  href={PAYPAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('faq.paypal')}
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  href={`mailto:${SUPPORT_EMAIL}`}
                >
                  {SUPPORT_EMAIL}
                </Button>
              </Stack>
            </Stack>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}
