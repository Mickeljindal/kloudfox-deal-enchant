
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from './ui/button';

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      className="rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
      onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
    >
      {language === 'en' ? t('switchToArabic') : t('switchToEnglish')}
    </Button>
  );
};

export default LanguageSwitcher;
