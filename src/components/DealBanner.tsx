
import { useState, useEffect } from 'react';

const messages = [
  "🔥 LIFETIME ACCESS: 97% OFF TODAY ONLY!",
  "⚡️ NEVER MISS WEBSITE DOWNTIME AGAIN!",
  "🚨 ONLY 48 CODES LEFT — THEY'RE GOING FAST!",
  "🛡️ PROTECT YOUR REVENUE FROM COSTLY OUTAGES!"
];

const DealBanner = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-kloudfox-blue to-kloudfox-darkBlue py-2 z-50 overflow-hidden">
      <div className="flex justify-center items-center">
        <p className="text-white font-bold text-center text-sm md:text-base animate-pulse">
          {messages[currentMessageIndex]}
        </p>
      </div>
    </div>
  );
};

export default DealBanner;
