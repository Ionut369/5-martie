import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Rocket, 
  ArrowLeft,
  Map,
  Headphones,
  Target,
  ShoppingBag,
  Globe,
  MonitorSmartphone,
  Store,
  Shield,
  FileText,
  Cookie,
  Users
} from 'lucide-react';
import { LanguageSelector } from '../components/LanguageSelector';

function Sitemap() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-950 via-primary-900 to-accent-900 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/50 to-primary-950/90"></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-950/50 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500 rounded-lg blur"></div>
                <div className="relative bg-primary-950 p-2 rounded-lg">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
              </div>
              <span className="text-xl font-bold text-white">Apollo Tech</span>
            </div>
            <div className="flex items-center space-x-8">
              <Link 
                to="/" 
                className="text-white hover:text-primary-200 transition font-medium flex items-center space-x-2"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>{t('nav.home')}</span>
              </Link>
              <LanguageSelector />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-500 to-primary-500 rounded-2xl blur-lg opacity-50"></div>
            <div className="relative bg-primary-900/50 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/10">
              <div className="flex items-center space-x-4 mb-8">
                <Map className="w-8 h-8 text-accent-400" />
                <h1 className="text-3xl md:text-4xl font-bold text-white">Sitemap</h1>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12">
                {/* Main Pages */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Main Pages</h2>
                  <ul className="space-y-4">
                    <li>
                      <Link to="/" className="flex items-center space-x-3 text-primary-100 hover:text-white transition group">
                        <Rocket className="w-5 h-5 group-hover:scale-110 transition" />
                        <span>Home</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/customer-support" className="flex items-center space-x-3 text-primary-100 hover:text-white transition group">
                        <Headphones className="w-5 h-5 group-hover:scale-110 transition" />
                        <span>Customer Support</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/lead-generation" className="flex items-center space-x-3 text-primary-100 hover:text-white transition group">
                        <Target className="w-5 h-5 group-hover:scale-110 transition" />
                        <span>Lead Generation</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/ecommerce" className="flex items-center space-x-3 text-primary-100 hover:text-white transition group">
                        <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition" />
                        <span>E-commerce</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/site-prezentare" className="flex items-center space-x-3 text-primary-100 hover:text-white transition group">
                        <Globe className="w-5 h-5 group-hover:scale-110 transition" />
                        <span>Website</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/social-media" className="flex items-center space-x-3 text-primary-100 hover:text-white transition group">
                        <MonitorSmartphone className="w-5 h-5 group-hover:scale-110 transition" />
                        <span>Social Media</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/magazin-online" className="flex items-center space-x-3 text-primary-100 hover:text-white transition group">
                        <Store className="w-5 h-5 group-hover:scale-110 transition" />
                        <span>Online Store</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Legal & Info Pages */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Legal & Information</h2>
                  <ul className="space-y-4">
                    <li>
                      <Link to="/privacy" className="flex items-center space-x-3 text-primary-100 hover:text-white transition group">
                        <Shield className="w-5 h-5 group-hover:scale-110 transition" />
                        <span>Privacy Policy</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/terms" className="flex items-center space-x-3 text-primary-100 hover:text-white transition group">
                        <FileText className="w-5 h-5 group-hover:scale-110 transition" />
                        <span>Terms of Service</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/cookies" className="flex items-center space-x-3 text-primary-100 hover:text-white transition group">
                        <Cookie className="w-5 h-5 group-hover:scale-110 transition" />
                        <span>Cookie Policy</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/gdpr" className="flex items-center space-x-3 text-primary-100 hover:text-white transition group">
                        <Users className="w-5 h-5 group-hover:scale-110 transition" />
                        <span>GDPR Compliance</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/accessibility" className="flex items-center space-x-3 text-primary-100 hover:text-white transition group">
                        <Users className="w-5 h-5 group-hover:scale-110 transition" />
                        <span>Accessibility</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" className="flex items-center space-x-3 text-primary-100 hover:text-white transition group">
                        <Map className="w-5 h-5 group-hover:scale-110 transition" />
                        <span>Contact</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Sitemap;