"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Sidebar({ isOpen, onClose }) {
  const [isServicesOpen, setServicesOpen] = useState(false);
  const [isNotAtFaultOpen, setNotAtFaultOpen] = useState(false);

  const servicesItems = [
    { title: "Auto Services", href: "/services/auto-services" },
    { title: "Body Works", href: "/services/body-works" },
    { title: "Towing Services", href: "/services/towing-services" },
    { title: "Rental Services", href: "/services/rental-services" },
    { title: "Wind Screen Replacement", href: "/services/wind-screen-replacement" },
  ];

  const notAtFaultItems = [
    { title: "Not At Fault Claim", href: "/service/not-at-fault-claims" },
    { title: "Not At Fault Hire", href: "/services/not-at-fault-car-hire" },
    { title: "Accident Replacement Vehicle", href: "/services/accident-replacement-vehicle" },
  ];

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const handleLinkClick = () => {
    onClose(); // Close sidebar on link click
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-72 bg-white border-red-600 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out z-50 shadow-lg`}
    >
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={onClose}
          className="text-red-600 text-3xl font-bold hover:text-red-400 transition"
        >
          &times;
        </button>
      </div>

      {/* Sidebar Links */}
      <ul className="flex flex-col gap-4 p-6 text-lg font-medium">
        <li>
          <Link
            href="/"
            onClick={handleLinkClick}
            className="hover:text-red-600 transition duration-200"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            href="/about"
            onClick={handleLinkClick}
            className="hover:text-red-600 transition duration-200"
          >
            About Us
          </Link>
        </li>

        {/* Our Services */}
        <li>
          <div
            onClick={() => setServicesOpen(!isServicesOpen)}
            className="flex justify-between items-center cursor-pointer hover:text-red-600 transition select-none"
          >
            Our Services
            <span className="ml-2">{isServicesOpen ? "▴" : "▾"}</span>
          </div>
          {isServicesOpen && (
            <ul className="ml-4 mt-2 flex flex-col gap-2 border-l-2 border-red-200 pl-3">
              {servicesItems.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    onClick={handleLinkClick}
                    className="hover:text-red-600 transition duration-200"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Not At Fault */}
        <li>
          <div
            onClick={() => setNotAtFaultOpen(!isNotAtFaultOpen)}
            className="flex justify-between items-center cursor-pointer hover:text-red-600 transition select-none"
          >
            Not At Fault
            <span className="ml-2">{isNotAtFaultOpen ? "▴" : "▾"}</span>
          </div>
          {isNotAtFaultOpen && (
            <ul className="ml-4 mt-2 flex flex-col gap-2 border-l-2 border-red-200 pl-3">
              {notAtFaultItems.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    onClick={handleLinkClick}
                    className="hover:text-red-600 transition duration-200"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        <li>
          <Link
            href="/contact"
            onClick={handleLinkClick}
            className="hover:text-red-600 transition duration-200"
          >
            Contact Us
          </Link>
        </li>

        <li>
          <Link
            href="/make-a-claim"
            onClick={handleLinkClick}
            className="bg-red-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-red-700 transition text-center block mt-4"
          >
            Make a Claim
          </Link>
        </li>
      </ul>
    </div>
  );
}
