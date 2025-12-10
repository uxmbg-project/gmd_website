"use client"
import Image from "next/image"

const ServiceCard = ({title, description}) => {
  return (
    <div className="keen-slider__slide bg-white shadow-lg text-center p-6 rounded-lg">
      <div className="w-full h-48 relative mb-4 rounded-lg overflow-hidden">
        <Image
          src="/images/OilChange.png"
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>
    <div className="px-6 py">

    <div className="font-bold text-xl text-[#E62600] mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
    </div>
</div>
  )
}

export default ServiceCard