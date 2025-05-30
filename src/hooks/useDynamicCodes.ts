
import { useState, useEffect } from 'react';

export const useDynamicCodes = () => {
  const [codesLeft, setCodesLeft] = useState(() => {
    // Get from localStorage or generate a realistic number between 15-45
    const stored = localStorage.getItem('kloudfox-codes-left');
    if (stored) {
      return parseInt(stored, 10);
    }
    return Math.floor(Math.random() * 31) + 15; // 15-45 codes
  });

  const [purchased, setPurchased] = useState(() => {
    const stored = localStorage.getItem('kloudfox-purchased');
    if (stored) {
      return parseInt(stored, 10);
    }
    return Math.floor(Math.random() * 200) + 300; // 300-500 purchased
  });

  useEffect(() => {
    // Simulate realistic code purchasing behavior
    const interval = setInterval(() => {
      // Random chance of someone purchasing (every 30-90 seconds)
      const shouldPurchase = Math.random() < 0.3;
      
      if (shouldPurchase && codesLeft > 5) {
        const codesPurchased = Math.floor(Math.random() * 3) + 1; // 1-3 codes
        setCodesLeft(prev => Math.max(5, prev - codesPurchased));
        setPurchased(prev => prev + codesPurchased);
      }
    }, Math.random() * 60000 + 30000); // 30-90 seconds

    return () => clearInterval(interval);
  }, [codesLeft]);

  useEffect(() => {
    localStorage.setItem('kloudfox-codes-left', codesLeft.toString());
  }, [codesLeft]);

  useEffect(() => {
    localStorage.setItem('kloudfox-purchased', purchased.toString());
  }, [purchased]);

  return { codesLeft, purchased };
};
