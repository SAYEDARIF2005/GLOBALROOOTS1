import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Certificate from './components/Certificate';
import Products from './components/Products';
import QualityProcess from './components/QualityProcess';
import FarmToGlobal from './components/FarmToGlobal';
import GlobalReach from './components/GlobalReach';
import Logistics from './components/Logistics';
import Team from './components/Team';
import WhyTerrix from './components/WhyTerrix';
import SignatureBanner from './components/SignatureBanner';
import FinalCTA from './components/FinalCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import FloatingLogoPopup from './components/FloatingLogoPopup';

function App() {
  const [theme, setTheme] = React.useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`global-rooots-app theme-${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Products />
        <QualityProcess />
        <FarmToGlobal />
        <GlobalReach />
        <Logistics />
        <Team />
        <About />
        <Certificate />
        <WhyTerrix />
        <SignatureBanner />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <FloatingLogoPopup />
      <WhatsAppButton phoneNumber="918688228899" />
    </div>
  );
}

export default App;
