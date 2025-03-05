import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Rocket, 
  ArrowLeft, 
  DollarSign,
  Zap,
  Settings,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  ListChecks,
  MessageCircle,
  Workflow,
  Bot,
  Gauge
} from 'lucide-react';
import { LanguageSelector } from '../components/LanguageSelector';
import { openCalendly } from '../utils/navigation';

export default function Pricing() {
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

      {/* Main Content */}
      <main className="container mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto space-y-20">
          {/* Cost Structure Section */}
          <section className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-500 to-primary-500 rounded-2xl blur-lg opacity-50"></div>
            <div className="relative bg-primary-900/50 backdrop-blur-xl rounded-2xl p-12 border border-white/10">
              <h1 className="text-4xl font-bold text-white mb-8 text-center bg-gradient-to-r from-white via-primary-100 to-accent-200 text-transparent bg-clip-text">
                {t('pricing.title')}
              </h1>
              
              <p className="text-lg text-primary-100 mb-8 text-center">
                {t('pricing.description')}
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-primary-800/40 p-8 rounded-xl backdrop-blur-sm">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-accent-500 to-primary-500 p-3 rounded-lg">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{t('pricing.implementationFee.title')}</h3>
                      <p className="text-primary-100">
                        {t('pricing.implementationFee.description')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-800/40 p-8 rounded-xl backdrop-blur-sm">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-accent-500 to-primary-500 p-3 rounded-lg">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{t('pricing.monthlySubscription.title')}</h3>
                      <p className="text-primary-100">
                        {t('pricing.monthlySubscription.description')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary-800/40 p-8 rounded-xl backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <Settings className="w-6 h-6 text-accent-400 mr-3" />
                  {t('pricing.factors.title')}
                </h3>
                <ul className="space-y-4">
                  {(t('pricing.factors.items', { returnObjects: true }) as string[]).map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <p className="text-primary-100">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Implementation Process Section */}
          <section className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-500 to-primary-500 rounded-2xl blur-lg opacity-50"></div>
            <div className="relative bg-primary-900/50 backdrop-blur-xl rounded-2xl p-12 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-8 text-center bg-gradient-to-r from-white to-primary-200 text-transparent bg-clip-text">
                {t('pricing.implementation.title')}
              </h2>
              
              <p className="text-lg text-primary-100 mb-12 text-center">
                {t('pricing.implementation.description')}
              </p>

              <div className="space-y-8">
                {/* Step 1 */}
                <div className="bg-primary-800/40 p-8 rounded-xl backdrop-blur-sm">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-accent-500 to-primary-500 p-3 rounded-lg">
                      <ListChecks className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{t('pricing.implementation.steps.analysis.title')}</h3>
                      <p className="text-primary-100 mb-4">
                        {t('pricing.implementation.steps.analysis.description')}
                      </p>
                      <ul className="space-y-2 text-primary-100">
                        {(t('pricing.implementation.steps.analysis.items', { returnObjects: true }) as string[]).map((item, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-primary-800/40 p-8 rounded-xl backdrop-blur-sm">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-accent-500 to-primary-500 p-3 rounded-lg">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{t('pricing.implementation.steps.conversation.title')}</h3>
                      <p className="text-primary-100 mb-4">
                        {t('pricing.implementation.steps.conversation.description')}
                      </p>
                      <ul className="space-y-2 text-primary-100">
                        {(t('pricing.implementation.steps.conversation.items', { returnObjects: true }) as string[]).map((item, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-primary-800/40 p-8 rounded-xl backdrop-blur-sm">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-accent-500 to-primary-500 p-3 rounded-lg">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{t('pricing.implementation.steps.development.title')}</h3>
                      <p className="text-primary-100 mb-4">
                        {t('pricing.implementation.steps.development.description')}
                      </p>
                      <ul className="space-y-2 text-primary-100">
                        {(t('pricing.implementation.steps.development.items', { returnObjects: true }) as string[]).map((item, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="bg-primary-800/40 p-8 rounded-xl backdrop-blur-sm">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-accent-500 to-primary-500 p-3 rounded-lg">
                      <Gauge className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{t('pricing.implementation.steps.testing.title')}</h3>
                      <p className="text-primary-100 mb-4">
                        {t('pricing.implementation.steps.testing.description')}
                      </p>
                      <ul className="space-y-2 text-primary-100">
                        {(t('pricing.implementation.steps.testing.items', { returnObjects: true }) as string[]).map((item, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="bg-primary-800/40 p-8 rounded-xl backdrop-blur-sm">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-accent-500 to-primary-500 p-3 rounded-lg">
                      <Workflow className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{t('pricing.implementation.steps.integration.title')}</h3>
                      <p className="text-primary-100 mb-4">
                        {t('pricing.implementation.steps.integration.description')}
                      </p>
                      <ul className="space-y-2 text-primary-100">
                        {(t('pricing.implementation.steps.integration.items', { returnObjects: true }) as string[]).map((item, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="bg-primary-800/40 p-8 rounded-xl backdrop-blur-sm">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-accent-500 to-primary-500 p-3 rounded-lg">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{t('pricing.implementation.steps.improvements.title')}</h3>
                      <p className="text-primary-100 mb-4">
                        {t('pricing.implementation.steps.improvements.description')}
                      </p>
                      <ul className="space-y-2 text-primary-100">
                        {(t('pricing.implementation.steps.improvements.items', { returnObjects: true }) as string[]).map((item, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-500 to-primary-500 rounded-2xl blur-lg opacity-50"></div>
            <div className="relative bg-primary-900/50 backdrop-blur-xl rounded-2xl p-12 border border-white/10">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-6">
                  {t('pricing.cta.title')}
                </h2>
                <p className="text-xl text-primary-100 mb-8">
                  {t('pricing.cta.description')}
                </p>
                <button 
                  onClick={openCalendly}
                  className="bg-gradient-to-r from-accent-500 to-primary-500 text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition shadow-lg hover:shadow-accent-500/25 flex items-center justify-center mx-auto group"
                >
                  {t('pricing.cta.button')}
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