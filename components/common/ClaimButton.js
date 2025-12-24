import Link from "next/link";

const ClaimButton = ({ text = "Make A Claim", href = "/claim-form" }) => {
  return (
    <Link href={href}>
      <button
        className="
          bg-[#E62600] 
          text-white 
          font-semibold 
          px-5 py-3 
          md:px-6 md:py-3 
          lg:px-8 lg:py-2 
          rounded-md 
          shadow-md 
          hover:bg-red-700 
          transition 
          duration-300 
          text-sm 
          md:text-base 
          lg:text-lg
        "
      >
        {text}
      </button>
    </Link>
  );
};

export default ClaimButton;
