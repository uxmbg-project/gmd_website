"use client";
import Image from "next/image";
import ClaimButton from "./ClaimButton";

const TextRightImageLeft = ({ title, heading, content, image }) => {
  return (
    <section className="w-full py-10 px-4 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

        {/* LEFT IMAGE */}
        <div className="flex justify-center md:justify-start">
          <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
            <Image
              src={image}
              alt={title}
              width={800}
              height={600}
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>

        {/* RIGHT TEXT CONTENT */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-[#E62600] text-2xl md:text-3xl font-bold">
            {title}
          </h3>

          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            {heading}
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            {content}
          </p>

          {/* CLAIM BUTTON */}
          <div className="pt-4 flex justify-center md:justify-start">
            <ClaimButton onClick={() => console.log("Claim request")} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default TextRightImageLeft;
