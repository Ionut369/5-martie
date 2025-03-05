import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Rocket, ArrowLeft, Users } from 'lucide-react';
import { LanguageSelector } from '../components/LanguageSelector';

function Accessibility() {
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
                <Users className="w-8 h-8 text-accent-400" />
                <h1 className="text-3xl md:text-4xl font-bold text-white">Accessibility Statement</h1>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-primary-100 text-lg mb-6">
                  Last updated: February 20, 2025
                </p>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Our Commitment</h2>
                  <p className="text-primary-100">
                    Apollo Tech is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Conformance Status</h2>
                  <p className="text-primary-100">
                    The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Apollo Tech is partially conformant with WCAG 2.1 level AA.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Accessibility Features</h2>
                  <div className="space-y-4">
                    <div className="bg-primary-800/40 p-6 rounded-xl">
                      <h3 className="font-bold text-white mb-2">Navigation</h3>
                      <p className="text-primary-100">All pages have consistent navigation and semantic structure.</p>
                    </div>
                    <div className="bg-primary-800/40 p-6 rounded-xl">
                      <h3 className="font-bold text-white mb-2">Images</h3>
                      <p className="text-primary-100">All images have appropriate alternative text descriptions.</p>
                    </div>
                    <div className="bg-primary-800/40 p-6 rounded-xl">
                      <h3 className="font-bold text-white mb-2">Forms</h3>
                      <p className="text-primary-100">All form fields have appropriate labels and ARIA attributes.</p>
                    </div>
                    <div className="bg-primary-800/40 p-6 rounded-xl">
                      <h3 className="font-bold text-white mb-2">Keyboard Navigation</h3>
                      <p className="text-primary-100">All functionality is available using a keyboard.</p>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Feedback</h2>
                  <p className="text-primary-100">
                    We welcome your feedback on the accessibility of Apollo Tech. Please let us know if you encounter accessibility barriers:
                  </p>
                  <div className="bg-primary-800/40 p-6 rounded-xl mt-4">
                    <p className="text-primary-100">
                      Email: accessibility@apollotech.agency<br />
                      Phone: +40 123 456 789<br />
                      Address: Bucharest, Romania
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Technical Specifications</h2>
                  <p className="text-primary-100">
                    Accessibility of Apollo Tech relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
                  </p>
                  <ul className="list-disc list-inside text-primary-100 mt-4 space-y-2">
                    <li>HTML</li>
                    <li>WAI-ARIA</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Accessibility;