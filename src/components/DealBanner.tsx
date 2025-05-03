
import { useState, useEffect } from 'react';

const messages = [
  "🔥 LIMITED TIME OFFER: 97% OFF TODAY ONLY!",
  "⚡️ LIFETIME DEAL ENDING SOON — ACT NOW!",
  "🚀 ONLY 50 CODES LEFT — THEY'RE GOING FAST!",
  "💎 UNLIMITED ACCESS — ONE-TIME PAYMENT!"
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
    <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-kloudfox-orange to-kloudfox-yellow py-2 z-50 overflow-hidden">
      <div className="flex justify-center items-center">
        <p className="text-white font-bold text-center text-sm md:text-base animate-pulse">
          {messages[currentMessageIndex]}
        </p>
      </div>
    </div>
  );
};

export default DealBanner;
