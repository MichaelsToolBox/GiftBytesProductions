import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import * as React from 'react';
import { sectionPx } from '../utils/section-rhythm';
import { paperBg } from '../utils/theme-alpha';

export default function Footer() {
  const { t } = useTranslation();
  const youtubeLink = 'https://www.youtube.com/@GiftBytesProductions?sub_confirmation=1';
  const [legalView, setLegalView] = React.useState<'impressum' | 'privacy' | null>(null);

  return (
    <Box
      sx={[
        (theme) => ({
          borderTop: '1px solid',
          borderColor: 'divider',
          background: `
            radial-gradient(ellipse 60% 80% at 50% 100%, ${alpha(theme.palette.primary.main, 0.06)}, transparent 70%),
            linear-gradient(180deg, transparent, ${alpha(theme.palette.primary.main, 0.03)} 100%)
          `,
        }),
        (theme) =>
          theme.applyStyles('dark', {
            background: `
              radial-gradient(ellipse 60% 80% at 50% 100%, ${alpha(theme.palette.primary.main, 0.1)}, transparent 70%),
              linear-gradient(180deg, transparent, ${alpha(theme.palette.primary.main, 0.04)} 100%)
            `,
          }),
      ]}
    >
      <Container
        id="legal"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3.5, sm: 5 },
          py: { xs: 7, sm: 9 },
          px: sectionPx,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            width: '100%',
            justifyContent: 'space-between',
            gap: { xs: 3, sm: 4 },
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.75, minWidth: { xs: '100%', sm: '55%' } }}>
            <Typography
              variant="h6"
              sx={{ fontFamily: '"Syne", sans-serif', letterSpacing: '-0.03em', fontWeight: 700 }}
            >
              Gift Bytes{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>
                Productions
              </Box>
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.secondary', maxWidth: 420 }}>
              {t('footer-page.left-title')}
            </Typography>
            <Box sx={{ pt: 0.5 }}>
              <Button
                variant="contained"
                color="primary"
                size="medium"
                sx={{ borderRadius: 999, px: 2.75 }}
                onClick={() => {
                  window.open(youtubeLink, '_blank', 'noopener,noreferrer');
                }}
              >
                {t('footer-page.left-button')}
              </Button>
            </Box>
          </Box>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 3, sm: 5 }}
            sx={{ minWidth: { xs: '100%', sm: 'auto' } }}
          >
            <Stack spacing={1.25} sx={{ minWidth: 160 }}>
              <Typography variant="body2" sx={{ fontWeight: 700, color: 'text.primary' }}>
                Gift Bytes
              </Typography>
              <Link
                component="button"
                type="button"
                color="text.secondary"
                underline="hover"
                onClick={() => setLegalView(legalView === 'impressum' ? null : 'impressum')}
                sx={{ textAlign: 'inherit', cursor: 'pointer' }}
              >
                {t('footer-page.impressum')}
              </Link>
              <Link
                component="button"
                type="button"
                color="text.secondary"
                underline="hover"
                onClick={() => setLegalView(legalView === 'privacy' ? null : 'privacy')}
                sx={{ textAlign: 'inherit', cursor: 'pointer' }}
              >
                {t('footer-page.policy')}
              </Link>
            </Stack>
            <Stack spacing={1.25} sx={{ minWidth: 160 }}>
              <Typography variant="body2" sx={{ fontWeight: 700, color: 'text.primary' }}>
                {t('footer-page.splitequity')}
              </Typography>
              <Link
                color="text.secondary"
                underline="hover"
                href="/legal/privacy.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('footer-page.splitequity-privacy')}
              </Link>
              <Link
                color="text.secondary"
                underline="hover"
                href="/legal/terms.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('footer-page.splitequity-terms')}
              </Link>
            </Stack>
          </Stack>
        </Box>

        {legalView && (
          <Box
            sx={(theme) => ({
              width: '100%',
              p: { xs: 2.5, sm: 3 },
              borderRadius: 3.5,
              border: '1px solid',
              borderColor: 'divider',
              bgcolor: paperBg(theme, 0.95),
              textAlign: 'left',
            })}
          >
            <Typography variant="h6" gutterBottom>
              {legalView === 'impressum' ? t('legal.impressum-title') : t('legal.privacy-title')}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: 'pre-line' }}>
              {legalView === 'impressum' ? t('legal.impressum-body') : t('legal.privacy-body')}
            </Typography>
          </Box>
        )}

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            gap: 2,
            pt: { xs: 3, sm: 4 },
            width: '100%',
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
            {t('footer-page.copyright')}
            <Link color="text.secondary" href="https://www.youtube.com/@GiftBytesProductions">
              {t('footer-page.giftbytes')}
            </Link>
            &nbsp;
            {new Date().getFullYear()}
          </Typography>
          <Stack direction="row" spacing={0.5} useFlexGap sx={{ color: 'text.secondary' }}>
            <IconButton
              color="inherit"
              size="large"
              href="https://github.com/MichaelsToolBox"
              aria-label="GitHub"
              sx={{
                transition: 'color 180ms ease, transform 180ms ease',
                '&:hover': { color: 'primary.main', transform: 'translateY(-2px)' },
              }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              color="inherit"
              size="large"
              href="https://www.youtube.com/@GiftBytesProductions"
              aria-label="YouTube"
              sx={{
                transition: 'color 180ms ease, transform 180ms ease',
                '&:hover': { color: 'primary.main', transform: 'translateY(-2px)' },
              }}
            >
              <YouTubeIcon />
            </IconButton>
            <IconButton
              color="inherit"
              size="large"
              href="https://www.linkedin.com/in/michael-schenk-a8209858/"
              aria-label="LinkedIn"
              sx={{
                transition: 'color 180ms ease, transform 180ms ease',
                '&:hover': { color: 'primary.main', transform: 'translateY(-2px)' },
              }}
            >
              <LinkedInIcon />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
