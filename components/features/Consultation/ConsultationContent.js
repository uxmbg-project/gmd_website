import { Key, Car } from 'lucide-react';

const ConsultationContent = () => {
  return (
    <div className="space-y-10 bg-gray-50 dark:bg-gray-50 p-6 md:p-12 rounded-lg shadow-lg">

      <div className="text-center md:text-left">
        <h5 className="text-3xl font-bold text-gray-800 dark:text-gray-800">If You Are Not At Fault?</h5>
        <h5 className="text-3xl font-bold text-red-600 mb-4">Not At Fault Claims</h5>
        <p className="text-base text-gray-700 dark:text-gray-800 max-w-2xl mx-auto md:mx-0">
          Did you know that you don’t need to go through your current insurer and pay their excess if you weren’t at fault?
        </p>
      </div>

      {/* Option 1: Loan car */}
      <div className="flex flex-col sm:flex-row items-start gap-6 bg-white dark:bg-gray-100 p-6 rounded-lg shadow hover:shadow-2xl transition-shadow duration-300">
        <div className="flex-none text-red-600">
          <Key size={48} />
        </div>
        <div className="flex-1">
          <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">No Cost Loan Car</h4>
          <p className="text-gray-600 dark:text-gray-300">
            A whole fleet of loan vehicles for you to choose from, while your vehicle is under repairs.
          </p>
        </div>
      </div>

      {/* Option 2: Pickup/Delivery */}
      <div className="flex flex-col sm:flex-row items-start gap-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-2xl transition-shadow duration-300">
        <div className="flex-none text-red-600">
          <Car size={48} />
        </div>
        <div className="flex-1">
          <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Free Pick up + Delivery</h4>
          <p className="text-gray-600 dark:text-gray-300">
            Free pick‑up and/or drop off around Perth Metro area when delivering or collecting your car.
          </p>
        </div>
      </div>

      {/* Call-to-action button */}
      <div className="text-center mt-4">
        <button className="
          inline-block 
          bg-red-600 text-white font-semibold 
          px-6 py-3 rounded-lg 
          hover:bg-red-700 
          transition-colors duration-200
          md:px-8 md:py-4
        ">
          Make A Claim
        </button>
      </div>

    </div>
  );
};

export default ConsultationContent;
