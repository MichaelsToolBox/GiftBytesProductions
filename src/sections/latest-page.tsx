import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';
import { alpha } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import * as React from 'react';
import SectionHeader from '../utils/section-header';
import { cardGap, sectionPx, sectionPy, softHoverLift, surfaceRadius } from '../utils/section-rhythm';
import { paperBg } from '../utils/theme-alpha';

function formatDate(iso: string, locale: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return new Intl.DateTimeFormat(locale || 'en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export default function Latest() {
  const { t, i18n } = useTranslation();
  const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(null);

  const articleInfo = [0, 1, 2, 3].map((index) => ({
    tag: t(`latest-page.article.${index}.tag`),
    title: t(`latest-page.article.${index}.title`),
    description: t(`latest-page.article.${index}.description`),
    date: t(`latest-page.article.${index}.date`),
    author: t(`latest-page.article.${index}.author`),
  }));

  return (
    <Container
      maxWidth="lg"
      component="main"
      id="latest"
      sx={{ display: 'flex', flexDirection: 'column', py: sectionPy, px: sectionPx, gap: 0.5 }}
    >
      <SectionHeader title={t('latest-page.title')} align="left" />

      <Grid container spacing={cardGap}>
        {articleInfo.map((article, index) => {
          const focused = focusedCardIndex === index;
          const featured = index === 0;
          return (
            <Grid key={index} size={{ xs: 12, sm: featured ? 12 : 6, md: featured ? 12 : 6 }}>
              <Box
                tabIndex={0}
                onFocus={() => setFocusedCardIndex(index)}
                onBlur={() => setFocusedCardIndex(null)}
                onMouseEnter={() => setFocusedCardIndex(index)}
                onMouseLeave={() => setFocusedCardIndex(null)}
                sx={(theme) => ({
                  height: '100%',
                  p: featured ? { xs: 2.5, sm: 3 } : { xs: 2.5, sm: 2.75 },
                  borderRadius: surfaceRadius,
                  border: '1px solid',
                  borderColor: focused ? alpha(theme.palette.primary.main, 0.5) : 'divider',
                  bgcolor: paperBg(theme, 0.92),
                  background: featured
                    ? `
                      linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.06)} 0%, transparent 55%),
                      ${paperBg(theme, 0.95)}
                    `
                    : undefined,
                  transition: 'border-color 200ms ease, transform 200ms ease, box-shadow 200ms ease',
                  transform: focused ? softHoverLift : 'none',
                  boxShadow: focused
                    ? {
                        sm: `0 14px 32px ${alpha(theme.palette.common.black, 0.06)}`,
                      }
                    : 'none',
                  cursor: 'default',
                  '&:focus-visible': {
                    outline: `2px solid ${theme.palette.primary.main}`,
                    outlineOffset: 2,
                  },
                  ...theme.applyStyles('dark', {
                    background: featured
                      ? `
                        linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.12)} 0%, transparent 55%),
                        ${paperBg(theme, 0.95)}
                      `
                      : undefined,
                    boxShadow: focused
                      ? {
                          sm: `0 14px 32px ${alpha(theme.palette.common.black, 0.28)}`,
                        }
                      : 'none',
                  }),
                })}
              >
                <Typography
                  variant="caption"
                  sx={{
                    display: 'inline-block',
                    mb: 1.25,
                    px: 1.1,
                    py: 0.35,
                    borderRadius: 999,
                    bgcolor: (theme) => alpha(theme.palette.primary.main, 0.1),
                    color: 'primary.main',
                    fontWeight: 700,
                    letterSpacing: '0.02em',
                  }}
                >
                  {article.tag}
                </Typography>
                <Typography
                  variant={featured ? 'h5' : 'h6'}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.75,
                    mb: 1,
                    letterSpacing: '-0.025em',
                    fontSize: featured ? { xs: '1.2rem', sm: undefined } : undefined,
                    maxWidth: featured ? 720 : 'none',
                  }}
                >
                  {article.title}
                  <NavigateNextRoundedIcon
                    sx={{
                      fontSize: featured ? '1.35rem' : '1.1rem',
                      color: 'primary.main',
                      opacity: focused ? 1 : 0.35,
                      transform: focused ? 'translateX(3px)' : 'none',
                      transition: 'transform 200ms ease, opacity 200ms ease',
                      flexShrink: 0,
                    }}
                  />
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2.25, maxWidth: featured ? 640 : 'none', lineHeight: 1.65 }}
                >
                  {article.description}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, flexWrap: 'wrap' }}>
                  <Typography variant="caption" color="text.secondary">
                    {article.author}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {formatDate(article.date, i18n.language)}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
