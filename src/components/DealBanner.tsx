
import { useState, useEffect } from 'react';

const messages = [
  "🚨 LAST CHANCE: 97% OFF LIFETIME ACCESS — DISAPPEARING IN HOURS!",
  "💸 THE $12,000 MISTAKE: YOUR SITE CRASHES & YOU'RE THE LAST TO KNOW!",
  "⏱️ ONLY 37 CODES LEFT — GONE = GONE FOREVER (NO EXCEPTIONS!)",
  "🔥 COMPETITORS PAY $2,388/YEAR... YOU PAY ONCE & NEVER AGAIN!"
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
