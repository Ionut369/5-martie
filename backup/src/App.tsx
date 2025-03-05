import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useScrollToTop } from './hooks/useScrollToTop';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ChatbotScript } from './components/ChatbotScript';
import CustomerSupport from './pages/CustomerSupport';
import LeadGeneration from './pages/LeadGeneration';
import Ecommerce from './pages/Ecommerce';
import Website from './pages/Website';
import SocialMedia from './pages/SocialMedia';
import OnlineStore from './pages/OnlineStore';
import Privacy from './pages/legal/Privacy';
import Terms from './pages/legal/Terms';
import Cookies from './pages/legal/Cookies';
import GDPR from './pages/legal/GDPR';
import Sitemap from './pages/Sitemap';
import Accessibility from './pages/Accessibility';
import Contact from './pages/Contact';
import HomePage from './pages/Home';
import Pricing from './pages/Pricing';

function App() {
  useScrollToTop();

  return (
    <div className="flex flex-col min-h-screen">
      <ChatbotScript />
      <Navigation />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/customer-support" element={<CustomerSupport />} />
          <Route path="/lead-generation" element={<LeadGeneration />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/site-prezentare" element={<Website />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/magazin-online" element={<OnlineStore />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/gdpr" element={<GDPR />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/contact" element={<Contact />} />
          {/* Redirect unmatched routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;