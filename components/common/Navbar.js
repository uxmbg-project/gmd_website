"use client";

import { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
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
    { title: "Not At Fault Claim", href: "/not-at-fault/not-at-fault-claims" },
    { title: "Not At Fault Hire", href: "/not-at-fault/not-at-fault-car-hire" },
    { title: "Accident Replacement Vehicle", href: "/not-at-fault/accident-replacement-vehicle" },
  ];

  const servicesRef = useRef(null);
  const notAtFaultRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
      if (notAtFaultRef.current && !notAtFaultRef.current.contains(event.target)) {
        setNotAtFaultOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleServices = () => {
    setServicesOpen(!isServicesOpen);
    if (!isServicesOpen) setNotAtFaultOpen(false);
  };

  const toggleNotAtFault = () => {
    setNotAtFaultOpen(!isNotAtFaultOpen);
    if (!isNotAtFaultOpen) setServicesOpen(false);
  };

  return (
    <>
      <nav className="w-full bg-white shadow-md h-16 flex items-center px-4 md:px-6 fixed z-50">
        
        {/* Logo Fixed */}
        {/* <div className="flex-shrink-0">
          <Link href="/">
            <div className="relative w-36 h-12 cursor-pointer">
              <Image
                src="/logo/LogoWithNoText.png"
                alt="GMD Auto Group Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>
        </div> */}
        <div className="text-center mb-8 mt-8">
          <div className="text-red-600 leading-[0.5] text-lg font-bold">
            GMD Auto Group
          </div>
          {/* <div className="mx-auto mt-1 w-24 h-1 bg-[#E62600] rounded"></div> */}
          {/* <div className="mx-auto mt-1 leading-[1.5]  text-xs text-black font-bold font-10 rounded">Driven By Excellence</div> */}
      </div>

        <div className="flex-1" />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex flex-row gap-8 text-black font-semibold items-center">
          <li className="hover:text-[#E62600] transition">
            <Link href="/">Home</Link>
          </li>

          <li className="hover:text-[#E62600] transition">
            <Link href="/about">About Us</Link>
          </li>

          {/* Our Services Dropdown */}
          <li ref={servicesRef} className="relative cursor-pointer select-none">
            <span
              onClick={toggleServices}
              className="hover:text-[#E62600] transition flex items-center gap-1"
            >
              Our Services {isServicesOpen ? "▴" : "▾"}
            </span>

            {isServicesOpen && (
              <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 min-w-[200px] max-w-xs text-sm z-50">
                {servicesItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="px-4 py-2 hover:bg-gray-100 hover:text-[#E62600]"
                  >
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Not At Fault Dropdown */}
          <li ref={notAtFaultRef} className="relative cursor-pointer select-none">
            <span
              onClick={toggleNotAtFault}
              className="hover:text-[#E62600] transition flex items-center gap-1"
            >
              Not At Fault {isNotAtFaultOpen ? "▴" : "▾"}
            </span>

            {isNotAtFaultOpen && (
              <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 min-w-[200px] max-w-xs text-sm z-50">
                {notAtFaultItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="px-4 py-2 hover:bg-gray-100 hover:text-[#E62600]"
                  >
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="hover:text-[#E62600] transition">
            <Link href="/contact">Contact Us</Link>
          </li>

          <li>
            <Link
              href="/claim-form"
              className="bg-[#E62600] text-white px-4 py-2 rounded-md hover:bg-red-700 transition shadow-md"
            >
              Make a Claim
            </Link>
          </li>
        </ul>

        {/* Mobile/MD Hamburger */}
        <div
          className="lg:hidden text-black cursor-pointer text-3xl ml-auto"
          onClick={() => setSidebarOpen(true)}
        >
          &#9776;
        </div>
      </nav>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
