
import React from 'react';

const CustomerLogosCarousel = () => {
  const customerLogos = [
    "https://www.kloudbean.com/wp-content/uploads/2024/12/kloudbean-suite-customers-logos-01.svg",
    "https://www.kloudbean.com/wp-content/uploads/2024/12/kloudbean-suite-customers-logos-02.svg",
    "https://www.kloudbean.com/wp-content/uploads/2024/12/kloudbean-suite-customers-logos-03.svg",
    "https://www.kloudbean.com/wp-content/uploads/2024/12/kloudbean-suite-customers-logos-04.svg",
    "https://www.kloudbean.com/wp-content/uploads/2024/12/kloudbean-suite-customers-logos-05.svg",
    "https://www.kloudbean.com/wp-content/uploads/2024/12/kloudbean-suite-customers-logos-06.svg",
    "https://www.kloudbean.com/wp-content/uploads/2024/12/kloudbean-suite-customers-logos-07.svg",
    "https://www.kloudbean.com/wp-content/uploads/2024/12/kloudbean-suite-customers-logos-08.svg",
    "https://www.kloudbean.com/wp-content/uploads/2024/12/kloudbean-suite-customers-logos-09.svg",
    "https://www.kloudbean.com/wp-content/uploads/2024/12/kloudbean-suite-customers-logos-10.svg",
    "https://www.kloudbean.com/wp-content/uploads/2024/12/kloudbean-suite-customers-logos-11.svg",
    "https://www.kloudbean.com/wp-content/uploads/2024/12/kloudbean-suite-customers-logos-12.svg",
    "https://www.kloudbean.com/wp-content/uploads/2024/12/kloudbean-suite-customers-logos-14.svg"
  ];

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="inline-flex animate-scroll">
        {/* First set of logos */}
        {customerLogos.map((logo, index) => (
          <div key={`first-${index}`} className="flex items-center justify-center mx-8 flex-shrink-0">
            <img 
              src={logo} 
              alt={`Customer Logo ${index + 1}`} 
              className="h-12 max-w-32 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {customerLogos.map((logo, index) => (
          <div key={`second-${index}`} className="flex items-center justify-center mx-8 flex-shrink-0">
            <img 
              src={logo} 
              alt={`Customer Logo ${index + 1}`} 
              className="h-12 max-w-32 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerLogosCarousel;
