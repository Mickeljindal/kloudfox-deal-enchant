
import { useState, useEffect } from 'react';

const messages = [
  "🔥 FLASH DEAL: 97% OFF LIFETIME ACCESS - ENDING SOON!",
  "⚡️ DON'T LOSE $1000s IN SALES FROM WEBSITE DOWNTIME!",
  "🚨 ONLY 48 CODES LEFT — GRAB YOURS BEFORE THEY VANISH!",
  "🛡️ WEBSITE DOWN? CUSTOMERS LEAVING? NEVER AGAIN!"
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
