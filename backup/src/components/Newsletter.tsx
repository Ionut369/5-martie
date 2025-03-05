import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { supabase } from '../lib/supabase';

export function Newsletter() {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage(i18n.language === 'ro' ? 'Vă rugăm să introduceți adresa de email' : 'Please enter your email address');
      return;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setStatus('error');
      setMessage(i18n.language === 'ro' ? 'Vă rugăm să introduceți o adresă de email validă' : 'Please enter a valid email address');
      return;
    }

    setStatus('loading');
    
    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([
          { 
            email,
            status: 'active',
            ip_address: '127.0.0.1'
          }
        ]);

      if (error) {
        if (error.code === '23505') { // Unique violation
          setStatus('error');
          setMessage(i18n.language === 'ro' 
            ? 'Această adresă de email este deja abonată la newsletter.' 
            : 'This email is already subscribed to our newsletter.');
          return;
        }
        throw error;
      }
      
      setStatus('success');
      setMessage(i18n.language === 'ro' ? 'Vă mulțumim pentru abonare!' : 'Thank you for subscribing!');
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 3000);
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      setStatus('error');
      setMessage(i18n.language === 'ro' 
        ? 'A apărut o eroare. Vă rugăm să încercați din nou.' 
        : 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="border-b border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">
            {i18n.language === 'ro' 
              ? 'Rămâneți la curent cu inovația AI' 
              : 'Stay Updated with AI Innovation'}
          </h3>
          <p className="text-primary-200 mb-6">
            {i18n.language === 'ro'
              ? 'Abonați-vă la newsletter-ul nostru pentru cele mai recente actualizări despre tehnologia AI și soluțiile de chatbot.'
              : 'Subscribe to our newsletter for the latest updates on AI technology and chatbot solutions.'}
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={i18n.language === 'ro' ? 'Introduceți email-ul' : 'Enter your email'}
              className={`flex-1 px-6 py-3 rounded-full bg-white/5 border focus:outline-none transition
                ${status === 'error' ? 'border-red-500' : 'border-white/10 focus:border-accent-500'}`}
              disabled={status === 'loading'}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className={`px-8 py-3 rounded-full font-semibold flex items-center justify-center group transition-all duration-300 
                ${status === 'loading' ? 'bg-primary-700 cursor-wait' : 
                  status === 'success' ? 'bg-green-500 hover:bg-green-600' : 
                  'bg-gradient-to-r from-accent-500 to-primary-500 hover:opacity-90 hover:scale-105 hover:shadow-lg hover:shadow-accent-500/25'}`}
            >
              <span className="mr-2">{i18n.language === 'ro' ? 'Abonare' : 'Subscribe'}</span>
              <Send className={`w-5 h-5 transition-transform duration-300 
                ${status === 'loading' ? 'animate-spin' : 'group-hover:translate-x-1'}`} />
            </button>
          </form>
          {message && (
            <p className={`mt-4 text-sm ${status === 'error' ? 'text-red-400' : 'text-green-400'}`}>
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}