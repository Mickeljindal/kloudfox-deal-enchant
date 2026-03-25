
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
  ];

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="inline-flex animate-scroll">
        {[...customerLogos, ...customerLogos].map((logo, index) => (
          <div key={index} className="flex items-center justify-center mx-10 flex-shrink-0">
            <img
              src={logo}
              alt={`Customer Logo`}
              className="h-8 md:h-10 max-w-28 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerLogosCarousel;
