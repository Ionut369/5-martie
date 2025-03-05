import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Rocket, ArrowLeft, Cookie } from 'lucide-react';
import { LanguageSelector } from '../../components/LanguageSelector';

function Cookies() {
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
                <Cookie className="w-8 h-8 text-accent-400" />
                <h1 className="text-3xl md:text-4xl font-bold text-white">{t('cookies.title')}</h1>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-primary-100 text-lg mb-6">
                  {t('cookies.effectiveDate')}<br />
                  {t('cookies.lastUpdated')}
                </p>

                {/* Introduction */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">{t('cookies.sections.introduction.title')}</h2>
                  <p className="text-primary-100 mb-4">{t('cookies.sections.introduction.content')}</p>
                  <p className="text-primary-100 mb-4">{t('cookies.sections.introduction.explains')}</p>
                  <ul className="list-disc list-inside text-primary-100 mb-4">
                    {t('cookies.sections.introduction.items', { returnObjects: true }).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-primary-100">{t('cookies.sections.introduction.agreement')}</p>
                </section>

                {/* What Are Cookies */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">{t('cookies.sections.whatAreCookies.title')}</h2>
                  <p className="text-primary-100 mb-4">{t('cookies.sections.whatAreCookies.content')}</p>
                  <p className="text-primary-100">{t('cookies.sections.whatAreCookies.types')}</p>
                </section>

                {/* Types of Cookies */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">{t('cookies.sections.typesOfCookies.title')}</h2>
                  
                  {/* Essential Cookies */}
                  <div className="bg-primary-800/40 p-6 rounded-xl mb-6">
                    <h3 className="text-xl font-bold text-white mb-4">{t('cookies.sections.typesOfCookies.essential.title')}</h3>
                    <p className="text-primary-100 mb-4">{t('cookies.sections.typesOfCookies.essential.content')}</p>
                    <div className="mb-4">
                      <p className="font-semibold text-white mb-2">{t('cookies.sections.typesOfCookies.essential.examples.title')}</p>
                      <ul className="list-disc list-inside text-primary-100">
                        {t('cookies.sections.typesOfCookies.essential.examples.items', { returnObjects: true }).map((item: string, index: number) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-2">{t('cookies.sections.typesOfCookies.essential.canDisable.title')}</p>
                      <p className="text-primary-100">{t('cookies.sections.typesOfCookies.essential.canDisable.content')}</p>
                    </div>
                  </div>

                  {/* Performance Cookies */}
                  <div className="bg-primary-800/40 p-6 rounded-xl mb-6">
                    <h3 className="text-xl font-bold text-white mb-4">{t('cookies.sections.typesOfCookies.performance.title')}</h3>
                    <p className="text-primary-100 mb-4">{t('cookies.sections.typesOfCookies.performance.content')}</p>
                    <div className="mb-4">
                      <p className="font-semibold text-white mb-2">{t('cookies.sections.typesOfCookies.performance.examples.title')}</p>
                      <ul className="list-disc list-inside text-primary-100">
                        {t('cookies.sections.typesOfCookies.performance.examples.items', { returnObjects: true }).map((item: string, index: number) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-2">{t('cookies.sections.typesOfCookies.performance.canDisable.title')}</p>
                      <p className="text-primary-100">{t('cookies.sections.typesOfCookies.performance.canDisable.content')}</p>
                    </div>
                  </div>

                  {/* Functionality Cookies */}
                  <div className="bg-primary-800/40 p-6 rounded-xl mb-6">
                    <h3 className="text-xl font-bold text-white mb-4">{t('cookies.sections.typesOfCookies.functionality.title')}</h3>
                    <p className="text-primary-100 mb-4">{t('cookies.sections.typesOfCookies.functionality.content')}</p>
                    <div className="mb-4">
                      <p className="font-semibold text-white mb-2">{t('cookies.sections.typesOfCookies.functionality.examples.title')}</p>
                      <ul className="list-disc list-inside text-primary-100">
                        {t('cookies.sections.typesOfCookies.functionality.examples.items', { returnObjects: true }).map((item: string, index: number) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-2">{t('cookies.sections.typesOfCookies.functionality.canDisable.title')}</p>
                      <p className="text-primary-100">{t('cookies.sections.typesOfCookies.functionality.canDisable.content')}</p>
                    </div>
                  </div>

                  {/* Advertising Cookies */}
                  <div className="bg-primary-800/40 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-white mb-4">{t('cookies.sections.typesOfCookies.advertising.title')}</h3>
                    <p className="text-primary-100 mb-4">{t('cookies.sections.typesOfCookies.advertising.content')}</p>
                    <div className="mb-4">
                      <p className="font-semibold text-white mb-2">{t('cookies.sections.typesOfCookies.advertising.examples.title')}</p>
                      <ul className="list-disc list-inside text-primary-100">
                        {t('cookies.sections.typesOfCookies.advertising.examples.items', { returnObjects: true }).map((item: string, index: number) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-2">{t('cookies.sections.typesOfCookies.advertising.canDisable.title')}</p>
                      <p className="text-primary-100">{t('cookies.sections.typesOfCookies.advertising.canDisable.content')}</p>
                    </div>
                  </div>
                </section>

                {/* Third-Party Cookies */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">{t('cookies.sections.thirdPartyCookies.title')}</h2>
                  <p className="text-primary-100 mb-4">{t('cookies.sections.thirdPartyCookies.content')}</p>
                  
                  <div className="mb-4">
                    <p className="font-semibold text-white mb-2">{t('cookies.sections.thirdPartyCookies.examples.title')}</p>
                    <ul className="list-disc list-inside text-primary-100">
                      {t('cookies.sections.thirdPartyCookies.examples.items', { returnObjects: true }).map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <p className="font-semibold text-white mb-2">{t('cookies.sections.thirdPartyCookies.policies.title')}</p>
                    <ul className="list-disc list-inside text-primary-100">
                      {t('cookies.sections.thirdPartyCookies.policies.items', { returnObjects: true }).map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-primary-100">{t('cookies.sections.thirdPartyCookies.note')}</p>
                </section>

                {/* How to Manage & Disable Cookies */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">{t('cookies.sections.manageCookies.title')}</h2>
                  
                  {/* Cookie Consent Banner */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-4">{t('cookies.sections.manageCookies.consentBanner.title')}</h3>
                    <p className="text-primary-100 mb-4">{t('cookies.sections.manageCookies.consentBanner.content')}</p>
                    <ul className="list-none space-y-2 text-primary-100">
                      {t('cookies.sections.manageCookies.consentBanner.options', { returnObjects: true }).map((option: string, index: number) => (
                        <li key={index}>{option}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Browser Settings */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-4">{t('cookies.sections.manageCookies.browserSettings.title')}</h3>
                    <p className="text-primary-100 mb-4">{t('cookies.sections.manageCookies.browserSettings.content')}</p>
                    <ul className="list-disc list-inside text-primary-100 mb-4">
                      {t('cookies.sections.manageCookies.browserSettings.browsers', { returnObjects: true }).map((browser: string, index: number) => (
                        <li key={index}>{browser}</li>
                      ))}
                    </ul>
                    <p className="text-primary-100">{t('cookies.sections.manageCookies.browserSettings.guide')}</p>
                  </div>

                  {/* Opting Out */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">{t('cookies.sections.manageCookies.optingOut.title')}</h3>
                    <ul className="list-disc list-inside text-primary-100">
                      {t('cookies.sections.manageCookies.optingOut.items', { returnObjects: true }).map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </section>

                {/* Updates */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">{t('cookies.sections.updates.title')}</h2>
                  <p className="text-primary-100 mb-4">{t('cookies.sections.updates.content')}</p>
                  <p className="text-primary-100">{t('cookies.sections.updates.notification')}</p>
                </section>

                {/* Contact */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">{t('cookies.sections.contact.title')}</h2>
                  <p className="text-primary-100 mb-4">{t('cookies.sections.contact.content')}</p>
                  <p className="text-primary-100">{t('cookies.sections.contact.email')}</p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Cookies;