
import { useState, useEffect } from 'react';

const messages = [
  "🚨 ALERT: Your site could be down right now and you wouldn't even know! (97% OFF ENDS SOON)",
  "💸 FACT: The average business loses $12,000+ from ONE undetected outage",
  "⏱️ FINAL WARNING: Only 37 lifetime access codes left — then back to $79/month FOREVER!",
  "🔥 Your competitors know when their site crashes. Why don't you? (97% OFF DISAPPEARING)"
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
    <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-red-600 to-orange-500 py-2 z-50 overflow-hidden">
      <div className="flex justify-center items-center">
        <p className="text-white font-bold text-center text-sm md:text-base animate-pulse">
          {messages[currentMessageIndex]}
        </p>
      </div>
    </div>
  );
};

export default DealBanner;
