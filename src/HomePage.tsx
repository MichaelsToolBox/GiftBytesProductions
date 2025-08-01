import LogoCollection from './components/LogoCollection';
import Testimonials from './components/Testimonials';
import CssBaseline from '@mui/material/CssBaseline';
import Highlights from './components/Highlights';
import AppAppBar from './components/AppAppBar';
import Features from './components/Features';
import Divider from '@mui/material/Divider';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import AppTheme from './theme/AppTheme';
import Hero from './components/Hero';
import FAQ from './components/FAQ';

export default function HomePage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <AppAppBar />
      <Hero />
        <LogoCollection />
        <Features />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <Testimonials />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
    </AppTheme>
  );
}
