import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Rocket, 
  Mail, 
  Phone, 
  MapPin,
} from 'lucide-react';
import { Newsletter } from './Newsletter';

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      
      {/* Newsletter Section */}
      <Newsletter />

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500 rounded-lg blur"></div>
                <div className="relative bg-primary-950 p-2 rounded-lg">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
              </div>
              <span className="text-xl font-bold">Apollo Tech</span>
            </div>
            <p className="text-primary-200 mb-6">
              Transforming customer experience through AI-powered chatbot solutions. Available 24/7 to help your business grow.
            </p>
            <div className="space-y-3">
              <a href="mailto:ionut@apollotech.agency" className="flex items-center text-primary-200 hover:text-white transition">
                <Mail className="w-5 h-5 mr-3" />
                ionut@apollotech.agency
              </a>
              <div className="flex items-center text-primary-200">
                <MapPin className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>Bucharest, Romania<br />030932</span>
              </div>
            </div>
          </div>

          {/* Company Description */}
          <div>
            <h4 className="text-lg font-semibold mb-6">About Apollo Tech</h4>
            <p className="text-primary-200 mb-6">
              We specialize in developing cutting-edge AI chatbot solutions that transform how businesses interact with their customers. Our innovative approach combines advanced artificial intelligence with intuitive design to deliver exceptional customer experiences.
            </p>
            <p className="text-primary-200">
              Whether you need 24/7 customer support, automated lead generation, or intelligent e-commerce assistance, our solutions are tailored to meet your specific business needs and drive growth.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-primary-200 text-sm mb-4 md:mb-0">
              © {currentYear} Apollo Tech. {t('footer.rights')}
            </div>
            <div className="flex items-center space-x-6 text-sm text-primary-200">
              <Link 
                to="/sitemap" 
                className="hover:text-white transition-colors duration-200"
              >
                Sitemap
              </Link>
              <Link 
                to="/accessibility" 
                className="hover:text-white transition-colors duration-200"
              >
                Accessibility
              </Link>
              <Link 
                to="/contact" 
                className="hover:text-white transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}