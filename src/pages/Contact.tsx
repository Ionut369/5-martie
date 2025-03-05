import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Rocket, 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin,
  Send,
  MessageSquare,
  Users,
  Building
} from 'lucide-react';
import { LanguageSelector } from '../components/LanguageSelector';

function Contact() {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('loading');

    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setMessage('Thank you for your message. We will get back to you soon!');
      (e.target as HTMLFormElement).reset();

      setTimeout(() => {
        setFormStatus('idle');
        setMessage('');
      }, 5000);
    }, 1500);
  };

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
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-500 to-primary-500 rounded-2xl blur-lg opacity-50"></div>
            <div className="relative bg-primary-900/50 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/10">
              <div className="flex items-center space-x-4 mb-12">
                <MessageSquare className="w-8 h-8 text-accent-400" />
                <h1 className="text-3xl md:text-4xl font-bold text-white">Contact Us</h1>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
                  <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-accent-500 to-primary-500 p-3 rounded-lg">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                        <a href="mailto:contact@apollotech.agency" className="text-primary-100 hover:text-white transition">
                          contact@apollotech.agency
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-accent-500 to-primary-500 p-3 rounded-lg">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                        <p className="text-primary-100">
                          Bucharest, Romania<br />
                          Street Address, 12345
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <h2 className="text-2xl font-bold text-white mb-6">Company Information</h2>
                    <div className="space-y-8">
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-to-r from-accent-500 to-primary-500 p-3 rounded-lg">
                          <Building className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">Business Hours</h3>
                          <p className="text-primary-100">
                            Monday - Friday: 9:00 AM - 6:00 PM<br />
                            Saturday - Sunday: Closed
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-to-r from-accent-500 to-primary-500 p-3 rounded-lg">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">Support</h3>
                          <p className="text-primary-100">
                            24/7 AI Chatbot Support<br />
                            Business Hours Human Support
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-primary-800/40 border border-white/10 rounded-lg focus:outline-none focus:border-accent-500 text-white"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-white font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-primary-800/40 border border-white/10 rounded-lg focus:outline-none focus:border-accent-500 text-white"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-white font-medium mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 bg-primary-800/40 border border-white/10 rounded-lg focus:outline-none focus:border-accent-500 text-white"
                        placeholder="Message subject"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-white font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-primary-800/40 border border-white/10 rounded-lg focus:outline-none focus:border-accent-500 text-white resize-none"
                        placeholder="Your message..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === 'loading'}
                      className={`w-full px-8 py-4 rounded-full font-semibold flex items-center justify-center group transition-all duration-300 
                        ${formStatus === 'loading' ? 'bg-primary-700 cursor-wait' : 
                          formStatus === 'success' ? 'bg-green-500 hover:bg-green-600' : 
                          'bg-gradient-to-r from-accent-500 to-primary-500 hover:opacity-90'}`}
                    >
                      <span className="mr-2">Send Message</span>
                      <Send className={`w-5 h-5 transition-transform duration-300 
                        ${formStatus === 'loading' ? 'animate-spin' : 'group-hover:translate-x-1'}`} />
                    </button>

                    {message && (
                      <p className={`text-sm ${formStatus === 'error' ? 'text-red-400' : 'text-green-400'}`}>
                        {message}
                      </p>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;