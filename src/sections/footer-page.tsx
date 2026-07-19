import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BrandLogo from '../utils/styles/app-bar-icon';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import * as React from 'react';

export default function Footer() {
  const { t } = useTranslation();
  const youtubeLink = 'https://www.youtube.com/@GiftBytesProductions?sub_confirmation=1';
  const [legalView, setLegalView] = React.useState<'impressum' | 'privacy' | null>(null);

  return (
    <Container
      id="legal"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: { xs: 4, sm: 8 }, py: { xs: 8, sm: 10 }, textAlign: { sm: 'center', md: 'left' }}}
    >
      <Box sx={{display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, width: '100%', justifyContent: 'space-between', gap: 4}}>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 4, minWidth: { xs: '100%', sm: '55%' }}}>
          <Box sx={{ width: { xs: '100%', sm: '80%' } }}>
            <BrandLogo />
            <Typography variant="body2" gutterBottom sx={{ fontWeight: 600, mt: 2, mb: 4 }}>
              {t("footer-page.left-title")}
            </Typography>
            <Button variant="contained" color="primary" size="medium" onClick={() => { window.open( youtubeLink , '_blank', 'noopener,noreferrer'); }}>
              {t("footer-page.left-button")}
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, minWidth: 180 }}>
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
        </Box>
      </Box>

      {legalView && (
        <Box
          sx={{
            width: '100%',
            p: 3,
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider',
            bgcolor: 'background.paper',
            textAlign: 'left',
          }}
        >
          <Typography variant="h6" gutterBottom>
            {legalView === 'impressum' ? t('legal.impressum-title') : t('legal.privacy-title')}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: 'pre-line' }}>
            {legalView === 'impressum' ? t('legal.impressum-body') : t('legal.privacy-body')}
          </Typography>
        </Box>
      )}

      <Box sx={{display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', gap: 2, pt: { xs: 4, sm: 8 }, width: '100%', borderTop: '1px solid', borderColor: 'divider'}}>
        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
          {t("footer-page.copyright")}
          <Link color="text.secondary" href="https://www.youtube.com/@GiftBytesProductions">
            {t("footer-page.giftbytes")}
          </Link>
          &nbsp;
          {new Date().getFullYear()}
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap sx={{ justifyContent: { xs: 'center', sm: 'left' }, color: 'text.secondary' }}>
          <IconButton color="inherit" size="large" href="https://github.com/MichaelsToolBox" aria-label="GitHub" sx={{ alignSelf: 'center' }}>
            <GitHubIcon />
          </IconButton>
          <IconButton color="inherit" size="large" href="https://www.youtube.com/@GiftBytesProductions" aria-label="YouTube" sx={{ alignSelf: 'center' }}>
            <YouTubeIcon />
          </IconButton>
          <IconButton color="inherit" size="large" href="https://www.linkedin.com/in/michael-schenk-a8209858/" aria-label="LinkedIn" sx={{ alignSelf: 'center' }}>
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
