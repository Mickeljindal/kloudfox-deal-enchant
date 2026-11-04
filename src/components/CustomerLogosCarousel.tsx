const LOGOS = [
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

const CustomerLogosCarousel = () => {
  const doubled = [...LOGOS, ...LOGOS];
  return (
    <div className="overflow-hidden marquee-mask">
      <div className="inline-flex animate-scroll whitespace-nowrap will-change-transform">
        {doubled.map((src, i) => (
          <div key={i} className="mx-8 md:mx-12 flex items-center justify-center flex-shrink-0">
            <img
              src={src}
              alt=""
              aria-hidden
              loading="lazy"
              className="h-6 md:h-8 max-w-[120px] object-contain opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerLogosCarousel;
