import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';
import { alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import * as React from 'react';
import SectionHeader from '../utils/section-header';
import { sectionPx, sectionPy } from '../utils/section-rhythm';

const SUPPORT_EMAIL = 'giftbytesproductions@gmail.com';
const PAYPAL_URL =
  'https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=giftbytesproductions%40gmail.com&currency_code=EUR&item_name=Gift%20Bytes%20Productions';

export default function FAQ() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const panels = [
    {
      id: 'panel1',
      question: t('faq.subtitle1'),
      content: (
        <Typography variant="body2" sx={{ maxWidth: 680, color: 'text.secondary' }}>
          {t('faq.description1')}
          <Link href={`mailto:${SUPPORT_EMAIL}`} underline="hover">
            {SUPPORT_EMAIL}
          </Link>
        </Typography>
      ),
    },
    {
      id: 'panel3',
      question: t('faq.subtitle2'),
      content: (
        <Typography variant="body2" sx={{ maxWidth: 680, color: 'text.secondary' }}>
          {t('faq.description2')}
        </Typography>
      ),
    },
    {
      id: 'panel4',
      question: t('faq.subtitle3'),
      content: (
        <Stack spacing={2.5} sx={{ maxWidth: 680 }}>
          <Typography variant="body2" color="text.secondary">
            {t('faq.description3')}
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
            <Button
              variant="contained"
              color="primary"
              href={PAYPAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ borderRadius: 999 }}
            >
              {t('faq.paypal')}
            </Button>
            <Button
              variant="outlined"
              href={`mailto:${SUPPORT_EMAIL}`}
              sx={{
                borderRadius: 999,
                whiteSpace: { xs: 'normal', sm: 'nowrap' },
                wordBreak: { xs: 'break-all', sm: 'normal' },
                textAlign: 'center',
                lineHeight: 1.35,
                py: { xs: 1.1, sm: undefined },
              }}
            >
              {SUPPORT_EMAIL}
            </Button>
          </Stack>
        </Stack>
      ),
    },
  ];

  return (
    <Container
      id="faq"
      sx={{
        py: sectionPy,
        px: sectionPx,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <SectionHeader title={t('faq.title')} align="center" />

      <Box sx={{ width: '100%', maxWidth: 820 }}>
        {panels.map((panel, index) => {
          const isOpen = expanded === panel.id;
          return (
            <Accordion
              key={panel.id}
              disableGutters
              elevation={0}
              expanded={isOpen}
              onChange={(_, next) => setExpanded(next ? panel.id : false)}
              sx={(theme) => ({
                mb: 1.25,
                borderRadius: '16px !important',
                border: '1px solid',
                borderColor: isOpen ? alpha(theme.palette.primary.main, 0.5) : 'divider',
                bgcolor: isOpen
                  ? alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.1 : 0.045)
                  : alpha(theme.palette.background.paper, 0.9),
                overflow: 'hidden',
                transition: 'border-color 200ms ease, background-color 200ms ease, box-shadow 200ms ease',
                boxShadow: isOpen
                  ? `0 12px 28px ${alpha(theme.palette.common.black, theme.palette.mode === 'dark' ? 0.28 : 0.06)}`
                  : 'none',
                '&::before': { display: 'none' },
              })}
            >
              <AccordionSummary
                expandIcon={
                  <Box
                    sx={(theme) => ({
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      display: 'grid',
                      placeItems: 'center',
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                      color: 'primary.main',
                      transform: isOpen ? 'rotate(45deg)' : 'none',
                      transition: 'transform 200ms ease',
                    })}
                  >
                    <AddRoundedIcon fontSize="small" />
                  </Box>
                }
                aria-controls={`${panel.id}-content`}
                id={`${panel.id}-header`}
                sx={{ px: { xs: 1.75, sm: 2.5 }, py: 0.25, minHeight: { xs: 56, sm: 64 } }}
              >
                <Stack direction="row" spacing={{ xs: 1.25, sm: 2 }} alignItems="center" sx={{ pr: 1 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      fontFamily: '"Syne", sans-serif',
                      fontWeight: 700,
                      color: 'primary.main',
                      minWidth: 24,
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </Typography>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    sx={{ fontWeight: 600, color: 'text.primary', fontSize: { xs: '0.95rem', sm: undefined } }}
                  >
                    {panel.question}
                  </Typography>
                </Stack>
              </AccordionSummary>
              <AccordionDetails sx={{ px: { xs: 1.75, sm: 2.5 }, pb: 2.25, pt: 0, pl: { sm: 7.5 } }}>
                {panel.content}
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </Container>
  );
}
