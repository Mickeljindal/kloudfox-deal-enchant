
import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  endDate: Date;
  className?: string;
}

const CountdownTimer = ({ endDate, className = "" }: CountdownTimerProps) => {
  const calculateTimeLeft = () => {
    const difference = +endDate - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (value: number) => {
    return value < 10 ? `0${value}` : value.toString();
  };

  return (
    <div className={`flex items-center justify-center space-x-3 ${className}`}>
      <div className="flex flex-col items-center">
        <div className="bg-kloudfox-blue text-white text-xl md:text-2xl font-bold rounded-lg w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
          {formatTime(timeLeft.days)}
        </div>
        <span className="text-xs mt-1 text-gray-600">DAYS</span>
      </div>
      <span className="text-xl md:text-2xl font-bold">:</span>
      <div className="flex flex-col items-center">
        <div className="bg-kloudfox-blue text-white text-xl md:text-2xl font-bold rounded-lg w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
          {formatTime(timeLeft.hours)}
        </div>
        <span className="text-xs mt-1 text-gray-600">HOURS</span>
      </div>
      <span className="text-xl md:text-2xl font-bold">:</span>
      <div className="flex flex-col items-center">
        <div className="bg-kloudfox-blue text-white text-xl md:text-2xl font-bold rounded-lg w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
          {formatTime(timeLeft.minutes)}
        </div>
        <span className="text-xs mt-1 text-gray-600">MINS</span>
      </div>
      <span className="text-xl md:text-2xl font-bold">:</span>
      <div className="flex flex-col items-center">
        <div className="bg-kloudfox-blue text-white text-xl md:text-2xl font-bold rounded-lg w-14 h-14 md:w-16 md:h-16 flex items-center justify-center animate-pulse">
          {formatTime(timeLeft.seconds)}
        </div>
        <span className="text-xs mt-1 text-gray-600">SECS</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
