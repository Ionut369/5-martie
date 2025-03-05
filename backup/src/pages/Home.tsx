import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  Headphones, 
  Target, 
  ShoppingBag, 
  Globe, 
  MonitorSmartphone, 
  Store, 
  ArrowRight, 
  Users, 
  BarChart3, 
  Clock, 
  Sparkles, 
  MessageCircle, 
  Zap, 
  Brain 
} from 'lucide-react';
import { openCalendly } from '../utils/navigation';

function HomePage() {
  const { t } = useTranslation();
  
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-primary-950 via-primary-900 to-accent-900 relative">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/50 to-primary-950/90"></div>
        
        {/* Animated Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent-500 rounded-full blur-[128px] animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-500 rounded-full blur-[128px] animate-pulse-slow"></div>

        {/* Hero Section */}
        <header className="relative pt-32 pb-20 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full text-white/90 mb-6">
                  <Sparkles className="w-5 h-5 text-accent-400" />
                  <span>AI-Powered Customer Experience</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-primary-100 to-accent-200 text-transparent bg-clip-text">
                  {t('hero.title')}
                </h1>
                <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-xl">
                  {t('hero.description')}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={openCalendly}
                    className="bg-gradient-to-r from-accent-500 to-primary-500 text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition shadow-lg hover:shadow-accent-500/25 flex items-center group"
                  >
                    {t('hero.cta')}
                    <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition" />
                  </button>
                </div>
              </div>

              <div className="relative">
                {/* Main Image */}
                <div className="relative z-10 animate-float">
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent-500 to-primary-500 rounded-2xl blur-lg opacity-50"></div>
                  <div className="relative bg-primary-900/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                    <img 
                      src="https://images.unsplash.com/photo-1676299081847-5c552c85fea7?q=80&w=2070&auto=format&fit=crop"
                      alt="AI Technology"
                      className="w-full rounded-lg"
                    />
                    
                    {/* Floating Stats Cards */}
                    <div className="absolute -right-8 top-1/4 bg-primary-900/50 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
                      <div className="text-white">
                        <div className="text-2xl font-bold mb-1">3075</div>
                        <div className="text-sm text-white/70">Messages Today</div>
                      </div>
                    </div>
                    <div className="absolute -left-8 bottom-1/4 bg-primary-900/50 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
                      <div className="text-white">
                        <div className="text-2xl font-bold mb-1">98%</div>
                        <div className="text-sm text-white/70">Happy Customers</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section id="features" className="py-20 relative">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full text-white/90 mb-6">
                <Brain className="w-5 h-5 text-accent-400" />
                <span>Intelligent Solutions</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-primary-200 text-transparent bg-clip-text">
                {t('features.title')}
              </h2>
              <p className="text-lg text-white/70">
                Discover how our AI-powered chatbot can transform your business communication
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Link to="/customer-support" className="group">
                <div className="relative h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent-500/50 to-primary-500/50 rounded-2xl blur transition group-hover:opacity-100 opacity-0"></div>
                  <div className="relative bg-primary-900/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10 transition group-hover:border-white/20 h-full flex flex-col">
                    <div className="bg-gradient-to-r from-accent-500 to-primary-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                      <Headphones className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{t('features.customerSupport.title')}</h3>
                    <p className="text-white/70 flex-grow">
                      {t('features.customerSupport.description')}
                    </p>
                  </div>
                </div>
              </Link>

              <Link to="/lead-generation" className="group">
                <div className="relative h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent-500/50 to-primary-500/50 rounded-2xl blur transition group-hover:opacity-100 opacity-0"></div>
                  <div className="relative bg-primary-900/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10 transition group-hover:border-white/20 h-full flex flex-col">
                    <div className="bg-gradient-to-r from-accent-500 to-primary-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{t('features.leadGeneration.title')}</h3>
                    <p className="text-white/70 flex-grow">
                      {t('features.leadGeneration.description')}
                    </p>
                  </div>
                </div>
              </Link>

              <Link to="/ecommerce" className="group">
                <div className="relative h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent-500/50 to-primary-500/50 rounded-2xl blur transition group-hover:opacity-100 opacity-0"></div>
                  <div className="relative bg-primary-900/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10 transition group-hover:border-white/20 h-full flex flex-col">
                    <div className="bg-gradient-to-r from-accent-500 to-primary-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                      <ShoppingBag className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{t('features.ecommerce.title')}</h3>
                    <p className="text-white/70 flex-grow">
                      {t('features.ecommerce.description')}
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="mt-20">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full text-white/90 mb-6">
                  <Zap className="w-5 h-5 text-accent-400" />
                  <span>Seamless Integration</span>
                </div>
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-primary-200 text-transparent bg-clip-text">
                  {t('integrations.title')}
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Link to="/site-prezentare" className="group h-full">
                  <div className="relative h-full">
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent-500/50 to-primary-500/50 rounded-2xl blur transition group-hover:opacity-100 opacity-0"></div>
                    <div className="relative bg-primary-900/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10 transition group-hover:border-white/20 h-full flex flex-col">
                      <div className="bg-gradient-to-r from-accent-500 to-primary-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 flex-shrink-0">
                        <Globe className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{t('integrations.website.title')}</h3>
                      <p className="text-white/70 flex-grow">
                        {t('integrations.website.description')}
                      </p>
                    </div>
                  </div>
                </Link>

                <Link to="/social-media" className="group h-full">
                  <div className="relative h-full">
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent-500/50 to-primary-500/50 rounded-2xl blur transition group-hover:opacity-100 opacity-0"></div>
                    <div className="relative bg-primary-900/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10 transition group-hover:border-white/20 h-full flex flex-col">
                      <div className="bg-gradient-to-r from-accent-500 to-primary-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 flex-shrink-0">
                        <MonitorSmartphone className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{t('integrations.socialMedia.title')}</h3>
                      <p className="text-white/70 flex-grow">
                        {t('integrations.socialMedia.description')}
                      </p>
                    </div>
                  </div>
                </Link>

                <Link to="/magazin-online" className="group h-full">
                  <div className="relative h-full">
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent-500/50 to-primary-500/50 rounded-2xl blur transition group-hover:opacity-100 opacity-0"></div>
                    <div className="relative bg-primary-900/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10 transition group-hover:border-white/20 h-full flex flex-col">
                      <div className="bg-gradient-to-r from-accent-500 to-primary-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 flex-shrink-0">
                        <Store className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{t('integrations.onlineStore.title')}</h3>
                      <p className="text-white/70 flex-grow">
                        {t('integrations.onlineStore.description')}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent-500 to-primary-500 rounded-2xl blur-lg opacity-50"></div>
                <div className="relative bg-primary-900/50 backdrop-blur-xl rounded-2xl p-12 border border-white/10 text-center">
                  <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full text-white/90 mb-6">
                    <MessageCircle className="w-5 h-5 text-accent-400" />
                    <span>Get Started</span>
                  </div>
                  <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-primary-200 text-transparent bg-clip-text">
                    {t('contact.title')}
                  </h2>
                  <p className="text-lg text-white/70 mb-8">
                    {t('contact.description')}
                  </p>
                  <button 
                    onClick={openCalendly}
                    className="bg-gradient-to-r from-accent-500 to-primary-500 text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition shadow-lg hover:shadow-accent-500/25 flex items-center justify-center mx-auto group"
                  >
                    {t('contact.cta')}
                    <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HomePage;