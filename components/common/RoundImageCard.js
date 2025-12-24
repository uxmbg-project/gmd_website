"use client";
import Image from "next/image";
import ClaimButton from "./ClaimButton";
import Link from "next/link";

const RoundImageCard = ({ title, content, image }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md flex flex-col items-center text-center p-6 h-full transition-transform duration-300 hover:scale-105">
      
      {/* IMAGE */}
      {image && (
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 mb-4 rounded-full overflow-hidden flex-shrink-0 ">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover w-full h-full"
          />
        </div>
      )}

      {/* TEXT CONTENT */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <h5 className="text-lg md:text-xl font-semibold text-gray-900">{title}</h5>
          <p className="text-gray-600 text-sm md:text-base">{content}</p>
        </div>

        {/* CLAIM BUTTON */}
        <div className="mt-4">
          <ClaimButton text="Claim Now" href="/claim-form" />

        </div>
      </div>
    </div>
  );
};

export default RoundImageCard;
