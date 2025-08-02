import LogoCollection from './sections/logo-collection';
import Testimonials from './sections/testimonials-page';
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

export default function HomePage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <AppAppBar />
      <Hero />
      <LogoCollection />
      <Features />
      <Divider />
      <Principles />
      <Divider />
      <Download />
      <Divider />
      <Latest />
      <Divider/>
      <Testimonials />
      <Divider />
      <FAQ />
      <Divider />
      <Footer />
    </AppTheme>
  );
}
