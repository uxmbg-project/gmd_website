
const data = [
  {
    title: " Driving Complete Automotive Solutions Across Australia",
    description:
      "GMD Auto Group is a leading Australian automotive service provider, established in 2023 and built on years of prior experience within the automotive repair and accident management industry. While the company is newly established, our team brings extensive hands-on knowledge and proven expertise gained from working across the same industry for many years. We specialise in smash repairs, mechanical services, vehicle rentals, and towing, delivering a complete end-to-end solution for customers across Australia. Our modern facilities, skilled technicians, and trusted processes ensure every vehicle is repaired to the highest standards of safety, quality, and reliability. Beyond repairs, GMD Auto Group is recognised for its customer advocacy and consultation services. We assist clients with fault and dispute resolution, not-at-fault claims, and insurance-related matters, working closely with insurers, assessors, and third-party providers to achieve fair and timely outcomes. Our goal is to remove complexity and stress, allowing customers to focus on getting back on the road with confidence. Through strong relationships with industry partners, suppliers, insurers, and service networks, we are able to provide efficient turnaround times and dependable support nationwide. These partnerships, combined with our customer-first approach, position GMD Auto Group as a trusted and growing name in the Australian automotive industry..",
  },
];

const AboutUsContent = () => {
  return (
    <div className="p-10 m-10">
      {data.map((item, index) => (
        <div key={index}>
          <h2 className="text-2xl text-center font-bold mb-4">{item.title}</h2>
          <p className="text-gray-700 text-center leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutUsContent;
