
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header and Hero Section
    "finalCodes": "FINAL 37 CODES REMAINING",
    "whenGone": "WHEN THEY'RE GONE, THEY'RE GONE",
    "websiteCrashing": "Your Website Is CRASHING Right Now (And Your Customers Know Before You Do)",
    "lostSales": "Every minute of downtime costs you $200+ in lost sales",
    "competitorsAlert": "While your competitors get instant alerts and fix problems in seconds, you're still finding out through angry customer emails.",
    "unfairAdvantage": "KloudFox gives you the unfair advantage they already have.",
    "discountGone": "When this hits zero, the 97% discount is PERMANENTLY GONE",
    "lockInDeal": "Lock In Your Lifetime Deal NOW",
    "seeWhatOthers": "See what others are paying monthly",
    "codesLeft": "37 codes left",
    "purchased": "352 purchased in the last 24 hours",
    
    // Trusted Companies
    "trustedBy": "Trusted By Smart Companies",
    
    // Features
    "problemsSolves": "6 Business-Killing Problems KloudFox Solves Instantly",
    "whySwitching": "Why are smart business owners switching to KloudFox? Because these costly problems are destroying their revenue and reputation—and now you can solve them all with one simple tool.",
    
    // Pricing and CTA
    "cantAfford": "Your Business Can't Afford To Wait: Every Minute Counts",
    "whileReading": "While you're reading this, your competitors with proper monitoring are fixing issues before their customers notice. Meanwhile, your customers might be hitting error pages right now. Don't be the last to know.",
    "hiddenCostsTitle": "The Hidden Costs You're Currently Paying",
    "monthlyDrain": "Monthly Drain:",
    "yearMoneyPit": "10-Year Money Pit:",
    "realProblem": "The REAL Problem:",
    "kloudFoxSolution": "KloudFox Solution:",
    "onceNeverAgain": "ONCE & NEVER AGAIN!",
    "fixAllProblems": "Fix ALL these problems today and never worry about them again with one simple payment.",
    "wakeupCall": "WAKE-UP CALL: Your Website Might Be Down RIGHT NOW",
    "researchShows": "Research shows that 75% of businesses experience website issues they never detect, costing them $12,000+ in lost revenue per incident. Without proper monitoring, you're gambling with your business every single day. KloudFox pays for itself 80X OVER with just one prevented outage!",
    "stopFlying": "Stop Flying Blind — Get Protected Now",
    
    // Footer
    "neverMiss": "Never miss website downtime again",
    "allRights": "All rights reserved.",
    
    // Language Switcher
    "switchToArabic": "العربية",
    "switchToEnglish": "English"
  },
  ar: {
    // Header and Hero Section
    "finalCodes": "بقي 37 كود فقط",
    "whenGone": "عندما تنفد، لن تعود مرة أخرى",
    "websiteCrashing": "موقعك الإلكتروني يتعطل الآن (وعملاؤك يعرفون ذلك قبلك)",
    "lostSales": "كل دقيقة توقف تكلفك أكثر من 200 دولار من المبيعات المفقودة",
    "competitorsAlert": "بينما يتلقى منافسوك تنبيهات فورية ويصلحون المشاكل في ثوانٍ، ما زلت تكتشف ذلك من خلال رسائل البريد الإلكتروني الغاضبة من العملاء.",
    "unfairAdvantage": "يمنحك KloudFox الميزة التي يمتلكها منافسوك بالفعل.",
    "discountGone": "عندما يصل هذا إلى الصفر، فإن خصم 97% سينتهي بشكل نهائي",
    "lockInDeal": "احصل على عرضك المدى الحياة الآن",
    "seeWhatOthers": "شاهد ما يدفعه الآخرون شهريًا",
    "codesLeft": "بقي 37 كود",
    "purchased": "352 عملية شراء في الـ 24 ساعة الماضية",
    
    // Trusted Companies
    "trustedBy": "موثوق به من قبل الشركات الذكية",
    
    // Features
    "problemsSolves": "6 مشكلات تدمر الأعمال يحلها KloudFox على الفور",
    "whySwitching": "لماذا يقوم أصحاب الأعمال الأذكياء بالتحويل إلى KloudFox؟ لأن هذه المشاكل المكلفة تدمر إيراداتهم وسمعتهم - والآن يمكنك حلها جميعًا بأداة بسيطة واحدة.",
    
    // Pricing and CTA
    "cantAfford": "عملك لا يستطيع تحمل الانتظار: كل دقيقة مهمة",
    "whileReading": "بينما تقرأ هذا، منافسوك الذين لديهم مراقبة مناسبة يقومون بإصلاح المشاكل قبل أن يلاحظها عملاؤهم. في الوقت نفسه، قد يصطدم عملاؤك بصفحات الخطأ الآن. لا تكن آخر من يعلم.",
    "hiddenCostsTitle": "التكاليف الخفية التي تدفعها حاليًا",
    "monthlyDrain": "استنزاف شهري:",
    "yearMoneyPit": "حفرة أموال 10 سنوات:",
    "realProblem": "المشكلة الحقيقية:",
    "kloudFoxSolution": "حل KloudFox:",
    "onceNeverAgain": "مرة واحدة ولن تدفع مرة أخرى أبدًا!",
    "fixAllProblems": "قم بإصلاح جميع هذه المشاكل اليوم ولا تقلق بشأنها مرة أخرى بدفعة واحدة بسيطة.",
    "wakeupCall": "صحوة: قد يكون موقعك الإلكتروني معطلاً الآن",
    "researchShows": "تظهر الأبحاث أن 75٪ من الشركات تواجه مشاكل في مواقع الويب لا تكتشفها أبدًا، مما يكلفها أكثر من 12,000 دولار في الإيرادات المفقودة لكل حادث. بدون المراقبة المناسبة، أنت تقامر بعملك كل يوم. يدفع KloudFox لنفسه بـ 80 ضعفًا مع منع انقطاع واحد فقط!",
    "stopFlying": "توقف عن الطيران أعمى — احصل على الحماية الآن",
    
    // Footer
    "neverMiss": "لا تفوت أبدًا توقف موقع الويب مرة أخرى",
    "allRights": "جميع الحقوق محفوظة.",
    
    // Language Switcher
    "switchToArabic": "العربية",
    "switchToEnglish": "English"
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: () => '',
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
