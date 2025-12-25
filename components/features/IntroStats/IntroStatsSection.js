"use client";

const IntroStatsSection = ({
  eyebrow = "Who We Are",
  heading = (
    <>
      Precision Automotive Services <br className="hidden md:block" />
      You Can Trust
    </>
  ),
  description = (
    <>
      At <strong>GMD Auto Group</strong>, we provide comprehensive automotive
      solutions designed with our customers in mind. From regular servicing to
      accident repair, our team of skilled technicians ensures your vehicle is in
      safe, reliable hands.
    </>
  ),
  stats = [
    { value: "4+", label: "Years Experience" },
    { value: "5,000+", label: "Vehicles Serviced" },
    { value: "100%", label: "Certified Technicians" },
    { value: "95%", label: "Customer Satisfaction" },
  ],
}) => {
  return (
    <div className="mb-10 dark:text-black">
      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-4 pt-5 text-center">
        <span className="text-red-600 text-xs uppercase tracking-widest font-semibold">
          {eyebrow}
        </span>

        <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 leading-tight">
          {heading}
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
          {description}
        </p>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-4 mt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center hover:shadow-md transition"
            >
              <h3 className="text-3xl font-extrabold text-red-600">
                {item.value}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default IntroStatsSection;
