import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe2 } from 'lucide-react';

export function LanguageSelector() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ro' ? 'en' : 'ro';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 text-white hover:text-primary-200 transition"
    >
      <Globe2 className="w-5 h-5" />
      <span className="font-medium">{i18n.language.toUpperCase()}</span>
    </button>
  );
}