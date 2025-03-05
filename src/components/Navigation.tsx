import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Rocket, ChevronDown, Menu, X, Shield, FileText, Cookie, Users } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';

export function Navigation() {
  const { t } = useTranslation();
  const location = useLocation();
  const [roleMenuOpen, setRoleMenuOpen] = useState(false);
  const [integrationMenuOpen, setIntegrationMenuOpen] = useState(false);
  const [legalMenuOpen, setLegalMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const roleMenuTimeoutRef = useRef<number>();
  const integrationMenuTimeoutRef = useRef<number>();
  const legalMenuTimeoutRef = useRef<number>();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const handleRoleMenuEnter = () => {
    if (roleMenuTimeoutRef.current) {
      window.clearTimeout(roleMenuTimeoutRef.current);
    }
    setRoleMenuOpen(true);
  };

  const handleRoleMenuLeave = () => {
    roleMenuTimeoutRef.current = window.setTimeout(() => {
      setRoleMenuOpen(false);
    }, 300);
  };

  const handleIntegrationMenuEnter = () => {
    if (integrationMenuTimeoutRef.current) {
      window.clearTimeout(integrationMenuTimeoutRef.current);
    }
    setIntegrationMenuOpen(true);
  };

  const handleIntegrationMenuLeave = () => {
    integrationMenuTimeoutRef.current = window.setTimeout(() => {
      setIntegrationMenuOpen(false);
    }, 300);
  };

  const handleLegalMenuEnter = () => {
    if (legalMenuTimeoutRef.current) {
      window.clearTimeout(legalMenuTimeoutRef.current);
    }
    setLegalMenuOpen(true);
  };

  const handleLegalMenuLeave = () => {
    legalMenuTimeoutRef.current = window.setTimeout(() => {
      setLegalMenuOpen(false);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (roleMenuTimeoutRef.current) {
        window.clearTimeout(roleMenuTimeoutRef.current);
      }
      if (integrationMenuTimeoutRef.current) {
        window.clearTimeout(integrationMenuTimeoutRef.current);
      }
      if (legalMenuTimeoutRef.current) {
        window.clearTimeout(legalMenuTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
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
            <Link to="/" className="text-xl font-bold text-white">Apollo Tech</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-white/90 hover:text-white transition font-medium ${isActive('/') ? 'text-white' : ''}`}
            >
              {t('nav.home')}
            </Link>
            
            {/* Roles Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={handleRoleMenuEnter}
              onMouseLeave={handleRoleMenuLeave}
            >
              <button 
                className={`text-white/90 hover:text-white transition font-medium flex items-center space-x-1 ${
                  isActive('/roluri') || isActive('/customer-support') || isActive('/lead-generation') || isActive('/ecommerce')
                    ? 'text-white'
                    : ''
                }`}
              >
                <span>{t('nav.roles')}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {roleMenuOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-60 bg-primary-900/95 backdrop-blur-lg rounded-lg shadow-lg border border-white/10 py-2"
                >
                  <Link 
                    to="/customer-support" 
                    className="block px-4 py-2 text-white/90 hover:text-white hover:bg-primary-800/50 transition"
                  >
                    {t('nav.customerSupport')}
                  </Link>
                  <Link 
                    to="/lead-generation" 
                    className="block px-4 py-2 text-white/90 hover:text-white hover:bg-primary-800/50 transition"
                  >
                    {t('nav.leadGeneration')}
                  </Link>
                  <Link 
                    to="/ecommerce" 
                    className="block px-4 py-2 text-white/90 hover:text-white hover:bg-primary-800/50 transition"
                  >
                    {t('nav.ecommerce')}
                  </Link>
                </div>
              )}
            </div>

            {/* Integrations Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={handleIntegrationMenuEnter}
              onMouseLeave={handleIntegrationMenuLeave}
            >
              <button 
                className={`text-white/90 hover:text-white transition font-medium flex items-center space-x-1 ${
                  isActive('/integrari') || isActive('/site-prezentare') || isActive('/social-media') || isActive('/magazin-online')
                    ? 'text-white'
                    : ''
                }`}
              >
                <span>{t('nav.integrations')}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {integrationMenuOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-60 bg-primary-900/95 backdrop-blur-lg rounded-lg shadow-lg border border-white/10 py-2"
                >
                  <Link 
                    to="/site-prezentare" 
                    className="block px-4 py-2 text-white/90 hover:text-white hover:bg-primary-800/50 transition"
                  >
                    {t('nav.website')}
                  </Link>
                  <Link 
                    to="/social-media" 
                    className="block px-4 py-2 text-white/90 hover:text-white hover:bg-primary-800/50 transition"
                  >
                    {t('nav.socialMedia')}
                  </Link>
                  <Link 
                    to="/magazin-online" 
                    className="block px-4 py-2 text-white/90 hover:text-white hover:bg-primary-800/50 transition"
                  >
                    {t('nav.onlineStore')}
                  </Link>
                </div>
              )}
            </div>

            {/* Pricing Link */}
            <Link 
              to="/pricing"
              className={`text-white/90 hover:text-white transition font-medium ${isActive('/pricing') ? 'text-white' : ''}`}
            >
              {t('nav.pricing')}
            </Link>

            {/* Legal Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={handleLegalMenuEnter}
              onMouseLeave={handleLegalMenuLeave}
            >
              <button 
                className={`text-white/90 hover:text-white transition font-medium flex items-center space-x-1 ${
                  isActive('/privacy') || isActive('/terms') || isActive('/cookies') || isActive('/gdpr')
                    ? 'text-white'
                    : ''
                }`}
              >
                <span>Legal</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {legalMenuOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-60 bg-primary-900/95 backdrop-blur-lg rounded-lg shadow-lg border border-white/10 py-2"
                >
                  <Link 
                    to="/privacy" 
                    className="block px-4 py-2 text-white/90 hover:text-white hover:bg-primary-800/50 transition flex items-center"
                  >
                    <Shield className="w-4 h-4 mr-2" />
                    <span>Privacy Policy</span>
                  </Link>
                  <Link 
                    to="/terms" 
                    className="block px-4 py-2 text-white/90 hover:text-white hover:bg-primary-800/50 transition flex items-center"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    <span>Terms of Service</span>
                  </Link>
                  <Link 
                    to="/cookies" 
                    className="block px-4 py-2 text-white/90 hover:text-white hover:bg-primary-800/50 transition flex items-center"
                  >
                    <Cookie className="w-4 h-4 mr-2" />
                    <span>Cookie Policy</span>
                  </Link>
                  <Link 
                    to="/gdpr" 
                    className="block px-4 py-2 text-white/90 hover:text-white hover:bg-primary-800/50 transition flex items-center"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    <span>GDPR Compliance</span>
                  </Link>
                </div>
              )}
            </div>

            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-primary-200 transition"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`text-white/90 hover:text-white transition font-medium ${isActive('/') ? 'text-white' : ''}`}
              >
                {t('nav.home')}
              </Link>

              {/* Mobile Roles Menu */}
              <div className="space-y-2">
                <div className="text-white/90 font-medium">{t('nav.roles')}</div>
                <div className="pl-4 space-y-2">
                  <Link 
                    to="/customer-support" 
                    className="block text-white/90 hover:text-white transition"
                  >
                    {t('nav.customerSupport')}
                  </Link>
                  <Link 
                    to="/lead-generation" 
                    className="block text-white/90 hover:text-white transition"
                  >
                    {t('nav.leadGeneration')}
                  </Link>
                  <Link 
                    to="/ecommerce" 
                    className="block text-white/90 hover:text-white transition"
                  >
                    {t('nav.ecommerce')}
                  </Link>
                </div>
              </div>

              {/* Mobile Integrations Menu */}
              <div className="space-y-2">
                <div className="text-white/90 font-medium">{t('nav.integrations')}</div>
                <div className="pl-4 space-y-2">
                  <Link 
                    to="/site-prezentare" 
                    className="block text-white/90 hover:text-white transition"
                  >
                    {t('nav.website')}
                  </Link>
                  <Link 
                    to="/social-media" 
                    className="block text-white/90 hover:text-white transition"
                  >
                    {t('nav.socialMedia')}
                  </Link>
                  <Link 
                    to="/magazin-online" 
                    className="block text-white/90 hover:text-white transition"
                  >
                    {t('nav.onlineStore')}
                  </Link>
                </div>
              </div>

              {/* Mobile Pricing Link */}
              <Link 
                to="/pricing"
                className={`text-white/90 hover:text-white transition font-medium ${isActive('/pricing') ? 'text-white' : ''}`}
              >
                {t('nav.pricing')}
              </Link>

              {/* Mobile Legal Menu */}
              <div className="space-y-2">
                <div className="text-white/90 font-medium">Legal</div>
                <div className="pl-4 space-y-2">
                  <Link 
                    to="/privacy" 
                    className="block text-white/90 hover:text-white transition flex items-center"
                  >
                    <Shield className="w-4 h-4 mr-2" />
                    <span>Privacy Policy</span>
                  </Link>
                  <Link 
                    to="/terms" 
                    className="block text-white/90 hover:text-white transition flex items-center"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    <span>Terms of Service</span>
                  </Link>
                  <Link 
                    to="/cookies" 
                    className="block text-white/90 hover:text-white transition flex items-center"
                  >
                    <Cookie className="w-4 h-4 mr-2" />
                    <span>Cookie Policy</span>
                  </Link>
                  <Link 
                    to="/gdpr" 
                    className="block text-white/90 hover:text-white transition flex items-center"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    <span>GDPR Compliance</span>
                  </Link>
                </div>
              </div>

              <div className="pt-2">
                <LanguageSelector />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}