import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Rocket, ArrowLeft, Users } from 'lucide-react';
import { LanguageSelector } from '../../components/LanguageSelector';

function GDPR() {
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
                <h1 className="text-3xl md:text-4xl font-bold text-white">GDPR Compliance</h1>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-primary-100 text-lg mb-6">
                  Last updated: February 20, 2025
                </p>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">1. Overview</h2>
                  <p className="text-primary-100">
                    Apollo Tech is committed to protecting your personal data and complying with the General Data Protection Regulation (GDPR). This policy explains how we collect, process, and protect your personal data in accordance with GDPR requirements.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">2. Your Rights Under GDPR</h2>
                  <div className="space-y-4">
                    <div className="bg-primary-800/40 p-6 rounded-xl">
                      <h3 className="font-bold text-white mb-2">Right to Access</h3>
                      <p className="text-primary-100">You can request a copy of your personal data and information about how we process it.</p>
                    </div>
                    <div className="bg-primary-800/40 p-6 rounded-xl">
                      <h3 className="font-bold text-white mb-2">Right to Rectification</h3>
                      <p className="text-primary-100">You can request corrections to your personal data if it is inaccurate or incomplete.</p>
                    </div>
                    <div className="bg-primary-800/40 p-6 rounded-xl">
                      <h3 className="font-bold text-white mb-2">Right to Erasure</h3>
                      <p className="text-primary-100">You can request deletion of your personal data in certain circumstances.</p>
                    </div>
                    <div className="bg-primary-800/40 p-6 rounded-xl">
                      <h3 className="font-bold text-white mb-2">Right to Data Portability</h3>
                      <p className="text-primary-100">You can request to receive your personal data in a structured, commonly used format.</p>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">3. Data Protection Measures</h2>
                  <p className="text-primary-100">
                    We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk, including:
                  </p>
                  <ul className="list-disc list-inside text-primary-100 mt-4 space-y-2">
                    <li>Encryption of personal data</li>
                    <li>Regular security assessments</li>
                    <li>Staff training on data protection</li>
                    <li>Access controls and authentication</li>
                    <li>Regular backups and disaster recovery procedures</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">4. International Transfers</h2>
                  <p className="text-primary-100">
                    When we transfer personal data outside the European Economic Area (EEA), we ensure that appropriate safeguards are in place through standard contractual clauses or other approved mechanisms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Contact Our DPO</h2>
                  <p className="text-primary-100">
                    For any GDPR-related inquiries, you can contact our Data Protection Officer at:
                  </p>
                  <div className="bg-primary-800/40 p-6 rounded-xl mt-4">
                    <p className="text-primary-100">
                      Email: ionut@apollotech.agency<br />
                      Address: Bucharest, Romania<br />
                      030932
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

export default GDPR;