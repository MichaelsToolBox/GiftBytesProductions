import LogoCollection from './sections/logo-collection';
import Testimonials from './sections/testimonials-page';
import logoMark from './utils/images/logo-transparent.png';
import CssBaseline from '@mui/material/CssBaseline';
import Principles from './sections/principles-page';
import AppAppBar from './sections/app-bar-page';
import Download from './sections/download-page';
import Features from './sections/features-page';
import Divider from '@mui/material/Divider';
import Footer from './sections/footer-page';
import Latest from './sections/latest-page';
import AppTheme from './theme/app-theme';
import Hero from './sections/hero-page';
import FAQ from './sections/faq-page';
import Box from '@mui/material/Box';

export default function HomePage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <Box
        sx={(theme) => ({
          minHeight: '100vh',
          backgroundImage:
            'radial-gradient(ellipse 90% 40% at 50% -10%, hsl(210, 100%, 92%), transparent 55%), radial-gradient(ellipse 70% 35% at 100% 40%, hsl(210, 80%, 94%), transparent 50%), radial-gradient(ellipse 60% 30% at 0% 75%, hsl(210, 60%, 95%), transparent 45%)',
          ...theme.applyStyles('dark', {
            backgroundImage:
              'radial-gradient(ellipse 90% 40% at 50% -10%, hsl(210, 100%, 14%), transparent 55%), radial-gradient(ellipse 70% 35% at 100% 40%, hsl(210, 80%, 10%), transparent 50%), radial-gradient(ellipse 60% 30% at 0% 75%, hsl(210, 60%, 8%), transparent 45%)',
          }),
        })}
      >
        {/* Full-viewport watermark — sits above page content, below app bar/menus */}
        <Box
          aria-hidden
          sx={(theme) => ({
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            pointerEvents: 'none',
            userSelect: 'none',
            backgroundImage: `url(${logoMark})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: { xs: 'min(88vw, 280px)', sm: 'min(72vw, 560px)' },
            opacity: 0.08,
            ...theme.applyStyles('light', {
              filter: 'invert(1)',
              opacity: 0.06,
            }),
          })}
        />

        <Box sx={{ position: 'relative', overflowX: 'hidden' }}>
        <AppAppBar />
        <Hero />
        <LogoCollection />
        <Box id="features"><Features/></Box>
        <Divider />
        <Box id="principles"><Principles/></Box>
        <Divider />
        <Download />
        <Divider />
        <Box id="latest"><Latest/></Box>
        <Divider/>
        <Box id="testimonials"><Testimonials/></Box>
        <Divider />
        <Box id="faq"><FAQ/></Box>
        <Divider />
        <Footer />
        </Box>
      </Box>
    </AppTheme>
  );
}
