import Image from "next/image";
import { serviceData } from "./OurServiceDetail";

const OurServiceSection = () => {
  return (
    <div className="my-10 px-5 md:px-10">
      {serviceData.map((service, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-8 my-12 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image (Dynamic) */}
          {service.photo && (
            <div className="w-full md:w-1/2">
              <Image
                src={service.photo}
                alt={service.title}
                width={600}
                height={400}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          )}

          {/* Details */}
          <div className={`w-full ${service.photo ? "md:w-1/2" : "md:w-full"}`}>
            <h2 className="text-xl text-[#E62600] md:text-2xl text-center font-bold mb-3">
              {service.title}
            </h2>

            <p className="mb-4 text-center text-gray-700">{service.discription}</p>

            {Array.isArray(service.points) && service.points.length > 0 && (
              <ul className="list-disc list-inside text-center font-bold mx-auto space-y-2 text-gray-600">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurServiceSection;
