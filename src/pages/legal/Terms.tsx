import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Rocket, ArrowLeft, FileText } from 'lucide-react';
import { LanguageSelector } from '../../components/LanguageSelector';

function Terms() {
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
                <FileText className="w-8 h-8 text-accent-400" />
                <h1 className="text-3xl md:text-4xl font-bold text-white">{t('terms.title')}</h1>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-primary-100 text-lg">{t('terms.effectiveDate')}</p>
                <p className="text-primary-100 text-lg mb-8">{t('terms.lastUpdated')}</p>

                {/* Introduction */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">{t('terms.sections.introduction.title')}</h2>
                  <p className="text-primary-100">
                    {t('terms.sections.introduction.content')}
                  </p>
                  <p className="text-primary-100 mt-4">
                    {t('terms.sections.introduction.agreement')}
                  </p>
                </section>

                {/* Eligibility */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">{t('terms.sections.eligibility.title')}</h2>
                  <p className="text-primary-100 mb-4">{t('terms.sections.eligibility.intro')}</p>
                  <ul className="list-disc list-inside text-primary-100 space-y-2">
                    {t('terms.sections.eligibility.items', { returnObjects: true }).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </section>

                {/* Services */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">{t('terms.sections.services.title')}</h2>
                  <p className="text-primary-100 mb-4">{t('terms.sections.services.intro')}</p>
                  <ul className="list-disc list-inside text-primary-100 space-y-2">
                    {t('terms.sections.services.items', { returnObjects: true }).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-primary-100 mt-4">{t('terms.sections.services.note')}</p>
                </section>

                {/* Responsibilities */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">{t('terms.sections.responsibilities.title')}</h2>
                  <p className="text-primary-100 mb-4">{t('terms.sections.responsibilities.intro')}</p>
                  <ul className="list-disc list-inside text-primary-100 space-y-2">
                    {t('terms.sections.responsibilities.items', { returnObjects: true }).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-primary-100 mt-4">{t('terms.sections.responsibilities.note')}</p>
                </section>

                {/* Intellectual Property */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">{t('terms.sections.intellectualProperty.title')}</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{t('terms.sections.intellectualProperty.ownership.title')}</h3>
                      <p className="text-primary-100">
                        {t('terms.sections.intellectualProperty.ownership.content')}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{t('terms.sections.intellectualProperty.license.title')}</h3>
                      <p className="text-primary-100 mb-4">
                        {t('terms.sections.intellectualProperty.license.content')}
                      </p>
                      <p className="text-primary-100">{t('terms.sections.intellectualProperty.license.restrictions')}</p>
                      <ul className="list-disc list-inside text-primary-100 space-y-2">
                        {t('terms.sections.intellectualProperty.license.items', { returnObjects: true }).map((item: string, index: number) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Privacy */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">{t('terms.sections.privacy.title')}</h2>
                  <p className="text-primary-100">
                    {t('terms.sections.privacy.content')}
                  </p>
                  <p className="text-primary-100 mt-4">
                    {t('terms.sections.privacy.consent')}
                  </p>
                </section>

                {/* Payment */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">{t('terms.sections.payment.title')}</h2>
                  <p className="text-primary-100 mb-4">{t('terms.sections.payment.intro')}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{t('terms.sections.payment.pricing.title')}</h3>
                      <ul className="list-disc list-inside text-primary-100 space-y-2">
                        {t('terms.sections.payment.pricing.items', { returnObjects: true }).map((item: string, index: number) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{t('terms.sections.payment.refund.title')}</h3>
                      <ul className="list-disc list-inside text-primary-100 space-y-2">
                        {t('terms.sections.payment.refund.items', { returnObjects: true }).map((item: string, index: number) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{t('terms.sections.payment.subscription.title')}</h3>
                      <ul className="list-disc list-inside text-primary-100 space-y-2">
                        {t('terms.sections.payment.subscription.items', { returnObjects: true }).map((item: string, index: number) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Third Party */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">{t('terms.sections.thirdParty.title')}</h2>
                  <p className="text-primary-100 mb-4">
                    {t('terms.sections.thirdParty.intro')}
                  </p>
                  <p className="text-primary-100 mb-4">{t('terms.sections.thirdParty.restrictions')}</p>
                  <ul className="list-disc list-inside text-primary-100 space-y-2">
                    {t('terms.sections.thirdParty.items', { returnObjects: true }).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-primary-100 mt-4">
                    {t('terms.sections.thirdParty.warning')}
                  </p>
                </section>

                {/* Disclaimer */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">{t('terms.sections.disclaimer.title')}</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{t('terms.sections.disclaimer.warranties.title')}</h3>
                      <p className="text-primary-100 mb-4">
                        {t('terms.sections.disclaimer.warranties.content')}
                      </p>
                      <p className="text-primary-100 mb-4">{t('terms.sections.disclaimer.warranties.items')}</p>
                      <ul className="list-disc list-inside text-primary-100 space-y-2">
                        {t('terms.sections.disclaimer.warranties.list', { returnObjects: true }).map((item: string, index: number) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{t('terms.sections.disclaimer.liability.title')}</h3>
                      <p className="text-primary-100 mb-4">{t('terms.sections.disclaimer.liability.content')}</p>
                      <ul className="list-disc list-inside text-primary-100 space-y-2">
                        {t('terms.sections.disclaimer.liability.items', { returnObjects: true }).map((item: string, index: number) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                      <p className="text-primary-100 mt-4">
                        {t('terms.sections.disclaimer.liability.remedy')}
                      </p>
                    </div>
                  </div>
                </section>

                {/* Indemnification */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">{t('terms.sections.indemnification.title')}</h2>
                  <p className="text-primary-100 mb-4">
                    {t('terms.sections.indemnification.content')}
                  </p>
                  <ul className="list-disc list-inside text-primary-100 space-y-2">
                    {t('terms.sections.indemnification.items', { returnObjects: true }).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </section>

                {/* Termination */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">{t('terms.sections.termination.title')}</h2>
                  <p className="text-primary-100 mb-4">{t('terms.sections.termination.rights')}</p>
                  <ul className="list-disc list-inside text-primary-100 space-y-2">
                    {t('terms.sections.termination.items', { returnObjects: true }).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-primary-100 mt-4">{t('terms.sections.termination.note')}</p>
                </section>

                {/* Governing Law */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">{t('terms.sections.governing.title')}</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{t('terms.sections.governing.law.title')}</h3>
                      <p className="text-primary-100">
                        {t('terms.sections.governing.law.content')}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{t('terms.sections.governing.resolution.title')}</h3>
                      <ul className="list-disc list-inside text-primary-100 space-y-2">
                        {t('terms.sections.governing.resolution.items', { returnObjects: true }).map((item: string, index: number) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Updates */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">{t('terms.sections.updates.title')}</h2>
                  <p className="text-primary-100">
                    {t('terms.sections.updates.content')}
                  </p>
                  <p className="text-primary-100 mt-4">
                    {t('terms.sections.updates.notification')}
                  </p>
                  <p className="text-primary-100 mt-4">
                    {t('terms.sections.updates.acceptance')}
                  </p>
                </section>

                {/* Contact */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">{t('terms.sections.contact.title')}</h2>
                  <p className="text-primary-100">{t('terms.sections.contact.intro')}</p>
                  <div className="bg-primary-800/40 p-6 rounded-xl mt-4">
                    <p className="text-primary-100">
                      {t('terms.sections.contact.email')}
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Terms;