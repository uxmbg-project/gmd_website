"use client"
import Image from "next/image"
import Link from "next/link"

const ServiceCard = ({ title, description, imageSrc, link }) => {
  return (
    <div className="keen-slider__slide bg-white shadow-lg text-center p-6 rounded-lg flex flex-col">
      {/* Image */}
      <div className="w-full h-48 relative mb-4 rounded-lg overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="px-6 flex flex-col flex-1">
        <div className="font-bold text-xl text-[#E62600] mb-2">{title}</div>
        <p className="text-gray-700 text-base flex-1">{description}</p>

        {/* Learn More Button */}
        {link && (
          <Link
            href={link}
            className="mt-4 inline-block text-white bg-red-600 border border-red-600 px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition"
          >
            Learn More
          </Link>
        )}
      </div>
    </div>
  )
}

export default ServiceCard
