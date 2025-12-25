"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const FOOTER_DETAILS = {
  WA: {
    address: "50 Sussex St, Maylands WA 6051",
    phone: "08 6377 3774",
    email: "workshopwa@gmdautogroup.com.au",
  },
  TAS: {
    address: "66 Charles St, Moonah TAS 7009",
    phone: "03 6146 2220",
    email: "workshoptas@gmdautogroup.com.au",
  },
};

export default function Footer() {
  const pathname = usePathname();
  const [showTerms, setShowTerms] = useState(false);

  // 🔥 AUTO-DETECT STATE FROM URL
  const state = pathname?.toLowerCase().startsWith("/tas") ? "TAS" : "WA";
  const details = FOOTER_DETAILS[state];

  return (
    <>
      <footer className="bg-black text-white px-4 sm:px-6 md:px-16 lg:px-20 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Top Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center sm:text-left">
            {/* Address */}
            <div>
              <h3 className="font-bold text-center text-lg mb-4">Address</h3>
              <p className="leading-relaxed text-center">{details.address}</p>
              <p className="mt-2 text-center">
                <a href={`tel:${details.phone}`} className="hover:underline">
                  {details.phone}
                </a>
              </p>
              <p className="mt-2 text-center">
                <a href={`mailto:${details.email}`} className="hover:underline">
                  {details.email}
                </a>
              </p>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="font-bold text-lg text-center mb-4">Opening Hours</h3>
              <p className="text-center">Mon – Fri: 9:00 AM – 5:00 PM</p>
              <p className="mt-2 text-center">Sat – Sun: Closed</p>
            </div>

            {/* Menu */}
            <div>
              <h3 className="font-bold text-center text-lg mb-4">Menu</h3>

              <div className="text-center">
                <Link href="/contact" className="font-bold">
                  Contact Us
                </Link>
              </div>

              <div className="text-center mt-2">
                <Link href="/about" className="font-bold">
                  About Us
                </Link>
              </div>

              <div className="text-center mt-2">
                <Link href="/claim-form" className="font-bold">
                  Make A Claim
                </Link>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-10 border-t border-gray-700" />

          {/* Bottom Section */}
          <div className="pt-6 text-center text-sm text-gray-400">
            <p>© GMD Auto Group. All Rights Reserved.</p>

            <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm">
              <span
                onClick={() => setShowTerms(true)}
                className="hover:text-white cursor-pointer"
              >
                Terms & Conditions
              </span>
              <span className="hover:text-white cursor-pointer">Help</span>
              <span className="hover:text-white cursor-pointer">FAQs</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Terms Modal */}
      {showTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="bg-white text-black w-full max-w-3xl rounded-lg p-6 md:p-8 flex flex-col">
            <h2 className="text-2xl font-bold text-center mb-4">
              Privacy Policy & Terms
            </h2>

            <div className="overflow-y-auto max-h-[70vh] space-y-4 text-sm md:text-base">
              <p className="font-semibold text-red-600 text-center">
                Any person who visits our website is deemed to have agreed to our
                Privacy Policy and Terms & Conditions.
              </p>

              <p>
                Protecting your privacy is essential to GMD Auto Group ABN:
                91 670 233 422.
              </p>

              <p className="text-center font-semibold">
                Email: info@gmdautogroup.com.au
              </p>
            </div>

            <button
              onClick={() => setShowTerms(false)}
              className="mt-6 bg-black text-white py-2 rounded-md hover:bg-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
