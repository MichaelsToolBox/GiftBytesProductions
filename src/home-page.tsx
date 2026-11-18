import LogoCollection from './sections/logo-collection';
import Testimonials from './sections/testimonials-page';
import CssBaseline from '@mui/material/CssBaseline';
import Principles from './sections/principles-page';
import AppAppBar from './sections/app-bar-page';
import Download from './sections/download-page';
import Features from './sections/features-page';
import Play from './sections/play-page';
import Footer from './sections/footer-page';
import Latest from './sections/latest-page';
import AppTheme from './theme/app-theme';
import Hero from './sections/hero-page';
import FAQ from './sections/faq-page';
import Reveal from './utils/reveal';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';

export default function HomePage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <Box
        sx={(theme) => ({
          minHeight: '100vh',
          bgcolor: 'background.default',
          backgroundImage: `
            radial-gradient(ellipse 100% 55% at 50% -15%, ${alpha(theme.palette.primary.main, 0.14)}, transparent 55%),
            radial-gradient(ellipse 55% 40% at 100% 35%, ${alpha(theme.palette.primary.main, 0.06)}, transparent 55%),
            radial-gradient(ellipse 45% 35% at 0% 70%, ${alpha(theme.palette.primary.main, 0.05)}, transparent 50%)
          `,
          ...theme.applyStyles('dark', {
            backgroundImage: `
              radial-gradient(ellipse 100% 55% at 50% -15%, ${alpha(theme.palette.primary.main, 0.22)}, transparent 55%),
              radial-gradient(ellipse 55% 40% at 100% 35%, ${alpha(theme.palette.primary.main, 0.1)}, transparent 55%),
              radial-gradient(ellipse 45% 35% at 0% 70%, ${alpha(theme.palette.primary.main, 0.08)}, transparent 50%)
            `,
          }),
        })}
      >
        <Box sx={{ position: 'relative' }}>
          <AppAppBar />
          <Hero />
          <Reveal>
            <LogoCollection />
          </Reveal>
          <Reveal delayMs={50}>
            <Download />
          </Reveal>
          <Reveal delayMs={50}>
            <Features />
          </Reveal>
          <Reveal delayMs={50}>
            <Play />
          </Reveal>
          <Reveal delayMs={50}>
            <Principles />
          </Reveal>
          <Reveal delayMs={50}>
            <Latest />
          </Reveal>
          <Reveal delayMs={50}>
            <Testimonials />
          </Reveal>
          <Reveal delayMs={50}>
            <FAQ />
          </Reveal>
          <Reveal>
            <Footer />
          </Reveal>
        </Box>
      </Box>
    </AppTheme>
  );
}
