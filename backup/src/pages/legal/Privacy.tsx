import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Rocket, ArrowLeft, Shield } from 'lucide-react';
import { LanguageSelector } from '../../components/LanguageSelector';

function Privacy() {
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
                <Shield className="w-8 h-8 text-accent-400" />
                <h1 className="text-3xl md:text-4xl font-bold text-white">{t('privacy.title')}</h1>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <div className="text-primary-100 text-lg mb-6">
                  <p>{t('privacy.effectiveDate')}</p>
                  <p>{t('privacy.lastUpdated')}</p>
                </div>

                {/* Introduction */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {t('privacy.sections.introduction.title')}
                  </h2>
                  <p className="text-primary-100 mb-4">
                    {t('privacy.sections.introduction.content')}
                  </p>
                  <p className="text-primary-100">
                    {t('privacy.sections.introduction.agreement')}
                  </p>
                </section>

                {/* Data Collection */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {t('privacy.sections.dataCollection.title')}
                  </h2>

                  {/* Personal Data */}
                  <div className="bg-primary-800/40 p-6 rounded-xl mb-4">
                    <h3 className="font-bold text-white mb-2">
                      {t('privacy.sections.dataCollection.personalData.title')}
                    </h3>
                    <p className="text-primary-100">
                      {t('privacy.sections.dataCollection.personalData.description')}
                    </p>
                  </div>

                  {/* Technical Data */}
                  <div className="bg-primary-800/40 p-6 rounded-xl mb-4">
                    <h3 className="font-bold text-white mb-2">
                      {t('privacy.sections.dataCollection.technicalData.title')}
                    </h3>
                    <p className="text-primary-100">
                      {t('privacy.sections.dataCollection.technicalData.description')}
                    </p>
                  </div>

                  {/* Cookies */}
                  <div className="bg-primary-800/40 p-6 rounded-xl">
                    <h3 className="font-bold text-white mb-2">
                      {t('privacy.sections.dataCollection.cookies.title')}
                    </h3>
                    <p className="text-primary-100">
                      {t('privacy.sections.dataCollection.cookies.content')}
                    </p>
                  </div>
                </section>

                {/* Data Usage */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {t('privacy.sections.dataUsage.title')}
                  </h2>
                  <p className="text-primary-100 mb-4">
                    {t('privacy.sections.dataUsage.content')}
                  </p>
                  <p className="text-primary-100 font-semibold">
                    {t('privacy.sections.dataUsage.note')}
                  </p>
                </section>

                {/* Legal Basis */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {t('privacy.sections.legalBasis.title')}
                  </h2>
                  <p className="text-primary-100 mb-4">
                    {t('privacy.sections.legalBasis.content')}
                  </p>
                  <p className="text-primary-100 font-semibold">
                    {t('privacy.sections.legalBasis.note')}
                  </p>
                </section>

                {/* Data Sharing */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {t('privacy.sections.dataSharing.title')}
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-primary-800/40 p-6 rounded-xl">
                      <h3 className="font-bold text-white mb-2">
                        {t('privacy.sections.dataSharing.sections.providers.title')}
                      </h3>
                      <p className="text-primary-100">
                        {t('privacy.sections.dataSharing.sections.providers.content')}
                      </p>
                    </div>
                    <div className="bg-primary-800/40 p-6 rounded-xl">
                      <h3 className="font-bold text-white mb-2">
                        {t('privacy.sections.dataSharing.sections.authorities.title')}
                      </h3>
                      <p className="text-primary-100">
                        {t('privacy.sections.dataSharing.sections.authorities.content')}
                      </p>
                    </div>
                    <div className="bg-primary-800/40 p-6 rounded-xl">
                      <h3 className="font-bold text-white mb-2">
                        {t('privacy.sections.dataSharing.sections.transfers.title')}
                      </h3>
                      <p className="text-primary-100">
                        {t('privacy.sections.dataSharing.sections.transfers.content')}
                      </p>
                    </div>
                  </div>
                </section>

                {/* Contact */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {t('privacy.sections.contact.title')}
                  </h2>
                  <p className="text-primary-100 mb-4">
                    {t('privacy.sections.contact.content')}
                  </p>
                  <div className="bg-primary-800/40 p-6 rounded-xl">
                    <p className="text-primary-100">
                      Email: {t('privacy.sections.contact.email')}
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

export default Privacy;