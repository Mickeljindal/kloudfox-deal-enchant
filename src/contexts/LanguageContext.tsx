
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
    
    // KloudBean Section
    "kloudBeanTitle": "KloudBean.com: Your Complete Managed Cloud Hosting Solution",
    "kloudBeanSubtitle": "While competitors struggle with complex server setups and technical headaches, smart business owners are switching to KloudBean for hassle-free managed cloud hosting.",
    "problem": "THE PROBLEM",
    "hiddenCosts": "Your Current Hosting Is Costing You Thousands In Hidden Ways",
    "technicalComplexity": "Technical Complexity Nightmare",
    "complexityDesc": "Your team wastes 20+ hours monthly wrestling with server configurations instead of growing your business.",
    "slowLoading": "Slow Loading = Lost Customers",
    "loadingDesc": "Every 1-second delay in page load time results in 7% fewer conversions, costing you thousands in lost revenue.",
    "scalingPanic": "Scaling Panic Situations",
    "scalingDesc": "When traffic spikes hit your site, your current hosting crashes at the worst possible moment—right when you're making the most sales.",
    "solution": "THE SOLUTION",
    "kloudBeanSolution": "KloudBean Managed Cloud Hosting Eliminates These Problems Instantly",
    "launchFaster": "Launch faster, scale effortlessly, and never worry about server management again.",
    "zeroHeadaches": "Zero Technical Headaches",
    "zeroHeadachesDesc": "Our team handles 100% of server management, updates, and security patches so you can focus on your business.",
    "lightningFast": "Lightning-Fast Loading",
    "lightningFastDesc": "Premium servers and advanced caching increase your page speed by 300%, bringing back customers who abandoned slow sites.",
    "autoScaling": "Automatic Scaling",
    "autoScalingDesc": "Your site automatically scales during traffic spikes, so you never lose a sale during high-traffic events.",
    "enterpriseSecurity": "Enterprise Security",
    "enterpriseSecurityDesc": "Advanced firewalls and malware protection keep hackers out while your competitors' sites get compromised.",
    "autoBackups": "Automatic Backups",
    "autoBackupsDesc": "Never lose your data with daily automated backups and one-click restoration, unlike competitors who charge extra.",
    "staticHosting": "BONUS: Static Hosting",
    "staticHostingTitle": "Ultra-Fast Static Sites",
    "staticHostingDesc": "Launch blazing-fast static sites on our global CDN network in seconds—perfect for landing pages that convert.",
    "freeWith": "FREE with any KloudBean plan!",
    "limitedSpecial": "Limited Launch Special: Save 73%",
    "offerDisappears": "Get enterprise-level hosting at a fraction of what you're paying now. This offer disappears when slots fill up.",
    "onlySlots": "Only 19 slots left!",
    "secureHosting": "Secure Your KloudBean Hosting Now",
    
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
    
    // KloudBean Section
    "kloudBeanTitle": "KloudBean.com: حل الاستضافة السحابية المدارة المتكامل",
    "kloudBeanSubtitle": "بينما يكافح المنافسون مع إعدادات الخوادم المعقدة والصداع التقني، يقوم أصحاب الأعمال الأذكياء بالتحويل إلى KloudBean للحصول على استضافة سحابية مدارة خالية من المتاعب.",
    "problem": "المشكلة",
    "hiddenCosts": "استضافتك الحالية تكلفك آلاف الدولارات بطرق خفية",
    "technicalComplexity": "كابوس التعقيد التقني",
    "complexityDesc": "فريقك يضيع أكثر من 20 ساعة شهريًا في التعامل مع تكوينات الخادم بدلاً من تنمية عملك.",
    "slowLoading": "التحميل البطيء = فقدان العملاء",
    "loadingDesc": "كل تأخير لمدة ثانية واحدة في وقت تحميل الصفحة يؤدي إلى انخفاض التحويلات بنسبة 7٪، مما يكلفك آلاف الدولارات في الإيرادات المفقودة.",
    "scalingPanic": "حالات الذعر عند زيادة الحركة",
    "scalingDesc": "عندما تضرب زيادات حركة المرور موقعك، تتعطل استضافتك الحالية في أسوأ وقت ممكن - عندما تحقق أكبر قدر من المبيعات.",
    "solution": "الحل",
    "kloudBeanSolution": "استضافة KloudBean السحابية المدارة تقضي على هذه المشاكل فورًا",
    "launchFaster": "انطلق بشكل أسرع، وقم بالتوسع بسهولة، ولا تقلق بشأن إدارة الخادم مرة أخرى.",
    "zeroHeadaches": "صفر من المتاعب التقنية",
    "zeroHeadachesDesc": "يتعامل فريقنا مع 100٪ من إدارة الخادم والتحديثات وتصحيحات الأمان حتى تتمكن من التركيز على عملك.",
    "lightningFast": "تحميل سريع كالبرق",
    "lightningFastDesc": "تزيد الخوادم المتميزة والتخزين المؤقت المتقدم من سرعة صفحتك بنسبة 300٪، مما يعيد العملاء الذين هجروا المواقع البطيئة.",
    "autoScaling": "توسيع تلقائي",
    "autoScalingDesc": "يتوسع موقعك تلقائيًا أثناء زيادات حركة المرور، لذلك لن تخسر أي عملية بيع أثناء أحداث حركة المرور العالية.",
    "enterpriseSecurity": "أمان المؤسسات",
    "enterpriseSecurityDesc": "تحافظ جدران الحماية المتقدمة وحماية البرامج الضارة على إبعاد المتسللين بينما تتعرض مواقع منافسيك للخطر.",
    "autoBackups": "نسخ احتياطية تلقائية",
    "autoBackupsDesc": "لا تفقد بياناتك أبدًا مع النسخ الاحتياطية الآلية اليومية واستعادة بنقرة واحدة، على عكس المنافسين الذين يفرضون رسومًا إضافية.",
    "staticHosting": "مكافأة: استضافة ثابتة",
    "staticHostingTitle": "مواقع ثابتة فائقة السرعة",
    "staticHostingDesc": "أطلق مواقع ثابتة سريعة على شبكة توصيل المحتوى العالمية في ثوانٍ - مثالية لصفحات الهبوط التي تحول.",
    "freeWith": "مجانًا مع أي خطة KloudBean!",
    "limitedSpecial": "عرض خاص محدود: وفر 73٪",
    "offerDisappears": "احصل على استضافة بمستوى المؤسسات بجزء بسيط مما تدفعه الآن. يختفي هذا العرض عندما تمتلئ الفتحات.",
    "onlySlots": "بقي 19 مكانًا فقط!",
    "secureHosting": "احصل على استضافة KloudBean الآن",
    
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
