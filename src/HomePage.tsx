import LogoCollection from './components/LogoCollection';
import Testimonials from './components/Testimonials';
import CssBaseline from '@mui/material/CssBaseline';
import Principles from './components/Principles';
import AppAppBar from './components/AppAppBar';
import Download from './components/Download';
import Features from './components/Features';
import Divider from '@mui/material/Divider';
import Footer from './components/Footer';
import Latest from './components/Latest';
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
