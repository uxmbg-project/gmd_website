import Image from 'next/image';

const ConsultationCard = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
      <Image
        src="/images/ConsultationImage.png"
        alt="Car Image"
        fill
        sizes="100vw"
        className="object-contain object-center"
        priority
      />
    </div>
  );
};

export default ConsultationCard;
