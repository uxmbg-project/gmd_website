"use client";
import React from "react";

const NoImageCard = ({ heading, content, className }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center ${className}`}
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{heading}</h3>
      <p className="text-gray-600 text-base leading-relaxed">{content}</p>
    </div>
  );
};

export default NoImageCard;
