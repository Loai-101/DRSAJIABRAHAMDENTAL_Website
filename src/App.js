import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import RootCanalTreatment from './pages/RootCanalTreatment/RootCanalTreatment';
import FixedApplianceOrthodontics from './pages/FixedApplianceOrthodontics/FixedApplianceOrthodontics';
import EarlyTreatment from './pages/EarlyTreatment/EarlyTreatment';
import DamonSystem from './pages/DamonSystem/DamonSystem';
import ClearAligners from './pages/ClearAligners/ClearAligners';
import HollywoodSmile from './pages/HollywoodSmile/HollywoodSmile';
import CrownBridges from './pages/CrownBridges/CrownBridges';
import ImplantDentistry from './pages/ImplantDentistry/ImplantDentistry';
import TeethWhitening from './pages/TeethWhitening/TeethWhitening';
import FAQ from './pages/FAQ/FAQ';
import Contact from './pages/Contact/Contact';
import Appointment from './pages/Appointment/Appointment';
import Gallery from './pages/Gallery/Gallery';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import SocialSidebar from './components/SocialSidebar/SocialSidebar';
import { LanguageProvider } from './contexts/LanguageContext';
import './App.css';

// Wrapper component that can use useLocation
function AppContent() {
  const [isLoading, setIsLoading] = useState(true); // Start with loading screen visible
  const [isFadingOut, setIsFadingOut] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show loading screen on initial load and route changes
    setIsLoading(true);
    setIsFadingOut(false);
    
    // Start fade out after 1.7 seconds (to allow for 0.3s transition)
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 1700);
    
    // Hide loading screen completely after 2 seconds
    const hideTimer = setTimeout(() => {
      setIsLoading(false);
      setIsFadingOut(false);
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [location.pathname]);

  // Initial page load effect
  useEffect(() => {
    // Show loading screen on initial page load
    setIsLoading(true);
    setIsFadingOut(false);
    
    // Start fade out after 1.7 seconds
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 1700);
    
    // Hide loading screen completely after 2 seconds
    const hideTimer = setTimeout(() => {
      setIsLoading(false);
      setIsFadingOut(false);
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []); // Empty dependency array for initial load only

  return (
    <>
      {isLoading && <LoadingScreen fadeOut={isFadingOut} />}
      {!isLoading && (
        <div className="App">
          {location.pathname !== '/faq' && location.pathname !== '/appointment' && location.pathname !== '/services' && location.pathname !== '/' && location.pathname !== '/contact' && location.pathname !== '/about' && location.pathname !== '/root-canal-treatment' && location.pathname !== '/fixed-appliance-orthodontics' && location.pathname !== '/early-treatment' && location.pathname !== '/damon-system' && location.pathname !== '/clear-aligners' && location.pathname !== '/hollywood-smile' && location.pathname !== '/crown-bridges' && location.pathname !== '/implant-dentistry' && location.pathname !== '/teeth-whitening' && location.pathname !== '/gallery' && <SocialSidebar />}
          <Header />
          <main className="main-content content-visible">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/root-canal-treatment" element={<RootCanalTreatment />} />
              <Route path="/fixed-appliance-orthodontics" element={<FixedApplianceOrthodontics />} />
              <Route path="/early-treatment" element={<EarlyTreatment />} />
              <Route path="/damon-system" element={<DamonSystem />} />
              <Route path="/clear-aligners" element={<ClearAligners />} />
              <Route path="/hollywood-smile" element={<HollywoodSmile />} />
              <Route path="/crown-bridges" element={<CrownBridges />} />
              <Route path="/implant-dentistry" element={<ImplantDentistry />} />
              <Route path="/teeth-whitening" element={<TeethWhitening />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

function App() {

  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}

export default App;
