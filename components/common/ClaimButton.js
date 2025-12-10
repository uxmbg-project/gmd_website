import React from "react";

const ClaimButton = ({ text = "Make A Claim", onClick }) => {
  return (
    <button
      onClick={onClick}
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
  );
};

export default ClaimButton;
