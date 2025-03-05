import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Rocket, 
  ArrowLeft, 
  Clock, 
  Users, 
  Brain, 
  CheckCircle2, 
  XCircle, 
  DollarSign, 
  Zap, 
  MessageCircle, 
  Target, 
  BarChart3,
  ArrowRight 
} from 'lucide-react';
import { LanguageSelector } from '../components/LanguageSelector';
import { openCalendly } from '../utils/navigation';

export default function LeadGeneration() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-950 via-primary-900 to-accent-900 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/50 to-primary-950/90"></div>
      
      {/* Animated Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-accent-500 rounded-full blur-[128px] animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-500 rounded-full blur-[128px] animate-pulse-slow"></div>

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

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center bg-gradient-to-r from-white via-primary-100 to-accent-200 text-transparent bg-clip-text">
              {t('pages.leadGeneration.title')}
            </h1>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-500 to-primary-500 rounded-2xl blur-lg opacity-50"></div>
              <div className="relative bg-primary-900/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <p className="text-xl text-primary-100 mb-6">
                  {t('pages.leadGeneration.subtitle')}
                </p>
                <div className="bg-primary-800/40 p-6 rounded-xl backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-3">
                    <Target className="w-6 h-6 text-accent-400" />
                    <span>{t('pages.leadGeneration.scenario.title')}</span>
                  </h3>
                  <p className="text-primary-100">
                    {t('pages.leadGeneration.scenario.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto space-y-20">
          {/* Problems Section */}
          <section className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-500 to-primary-500 rounded-2xl blur-lg opacity-50"></div>
            <div className="relative bg-primary-900/50 backdrop-blur-xl rounded-2xl p-12 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-12 text-center bg-gradient-to-r from-white to-primary-200 text-transparent bg-clip-text">
                {t('pages.leadGeneration.problem.title')}
              </h2>
              <p className="text-lg text-primary-100 mb-8 text-center">
                {t('pages.leadGeneration.problem.description')}
              </p>
              
              <div className="space-y-8">
                {t('pages.leadGeneration.problem.items', { returnObjects: true }).map((item: { title: string; description: string }, index: number) => (
                  <div key={index} className="bg-primary-800/40 p-8 rounded-xl backdrop-blur-sm">
                    <div className="flex items-start space-x-3">
                      <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-primary-100">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Solution Section */}
          <section className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-500 to-primary-500 rounded-2xl blur-lg opacity-50"></div>
            <div className="relative bg-primary-900/50 backdrop-blur-xl rounded-2xl p-12 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6 text-center bg-gradient-to-r from-white to-primary-200 text-transparent bg-clip-text">
                {t('pages.leadGeneration.solution.title')}
              </h2>
              <p className="text-lg text-primary-100 mb-12 text-center">
                {t('pages.leadGeneration.solution.description')}
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {t('pages.leadGeneration.solution.features', { returnObjects: true }).map((feature: { title: string; description: string }, index: number) => (
                  <div key={index} className="bg-primary-800/40 p-8 rounded-xl backdrop-blur-sm">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-primary-100">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-500 to-primary-500 rounded-2xl blur-lg opacity-50"></div>
            <div className="relative bg-primary-900/50 backdrop-blur-xl rounded-2xl p-12 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-12 text-center bg-gradient-to-r from-white to-primary-200 text-transparent bg-clip-text">
                {t('pages.leadGeneration.benefits.title')}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {t('pages.leadGeneration.benefits.items', { returnObjects: true }).map((benefit: { title: string; description: string }, index: number) => (
                  <div key={index} className="bg-primary-800/40 p-8 rounded-xl backdrop-blur-sm">
                    <div className="flex items-start space-x-3">
                      <div className="bg-gradient-to-r from-accent-500 to-primary-500 p-3 rounded-lg">
                        {index === 0 && <Zap className="w-6 h-6 text-white" />}
                        {index === 1 && <DollarSign className="w-6 h-6 text-white" />}
                        {index === 2 && <Target className="w-6 h-6 text-white" />}
                        {index === 3 && <BarChart3 className="w-6 h-6 text-white" />}
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-2">{benefit.title}</h3>
                        <p className="text-primary-100">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-500 to-primary-500 rounded-2xl blur-lg opacity-50"></div>
            <div className="relative bg-primary-900/50 backdrop-blur-xl rounded-2xl p-12 border border-white/10">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-white mb-8">
                  {t('pages.leadGeneration.cta.title')}
                </h2>
                <p className="text-xl text-primary-100 mb-8">
                  {t('pages.leadGeneration.cta.description')}
                </p>
                <button 
                  onClick={openCalendly}
                  className="bg-gradient-to-r from-accent-500 to-primary-500 text-white px-12 py-6 rounded-full text-xl font-bold hover:opacity-90 transition shadow-lg hover:shadow-accent-500/25 flex items-center justify-center w-full md:w-auto mx-auto group"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  {t('pages.leadGeneration.cta.button')}
                  <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition" />
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}