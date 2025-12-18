import { Handshake, Award, ShieldCheck, HardHat, DoorOpen, PersonStanding } from 'lucide-react';

const items = [
  { icon: Handshake, label: "Friendly & Honest" },
  { icon: Award, label: "Certified & Skilled Team" },
  { icon: ShieldCheck, label: "Reliable & Trusted Service" },
  { icon: HardHat, label: "Professional Technicians" },
  { icon: DoorOpen, label: "24/7 Emergency Vehicle Repair" },
  { icon: PersonStanding, label: "Clients Trust Us for Over 28 Years" },
];

const IconCard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="
                flex flex-col items-center text-center 
                p-6 rounded-lg 
                h-full 
                border-none
                bg-transparent 
                border border-gray-300 
                hover:border-red-500 
                transition-all duration-300
              "
            >
              <Icon className='text-[#E62600] opacity-80' size={70} />
              
              {/* grow pushes footer text down if needed so all heights stay equal */}
              <p className="mt-4 font-xl text-lg font-semibold flex-grow flex items-center dark:text-black justify-center">
                {item.label}
              </p>
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default IconCard;
