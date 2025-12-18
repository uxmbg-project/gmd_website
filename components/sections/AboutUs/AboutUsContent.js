import React from 'react'

const data = [
  {
    title: "For more than 120 years, RAC has been giving back to WA & Tasmania",
    description:
      "Established in 1905, RAC has proudly served Western Australians for over 120 years. With over 1.3 million members, RAC has evolved into one of the most trusted and recognised organisations in the state. As a purpose-led member organisation, it reinvests its profits to serve its members and the wider WA community RAC is committed to continuing to improve its services and experiences for its members and to champion change that will lead to a safer, sustainable and connected future for Western Australians. The principles of social purpose and member value are at the heart of RAC. Its Purpose, Vision and Mission not only guides its social and community impact focus, it also sits at the core of the overall strategy for the organisation.",
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
