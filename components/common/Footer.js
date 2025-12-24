"use client";

import Link from "next/link";
import { useState } from "react";

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

export default function Footer({ state = "WA" }) {
  const details = FOOTER_DETAILS[state] || FOOTER_DETAILS.WA;
  const [showTerms, setShowTerms] = useState(false);

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

            {/* Services */}
            <div>
              <h3 className="font-bold text-center text-lg mb-4">Menu</h3>
              <div className="text-center">
                <Link href="/contact" className="text-center font-bold">Contact Us</Link>
              </div>

              <div className="text-center mt-2">
                <Link href="/about" className="text-center font-bold">About Us</Link>
              </div>

              <div className="text-center mt-2">
                <Link href="/claim-form" className="text-center font-bold">Make A Claim.</Link>
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

      {/* Terms & Privacy Modal */}
      {showTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="bg-white text-black w-full max-w-3xl rounded-lg p-6 md:p-8 relative flex flex-col">
            <h2 className="text-2xl font-bold text-center mb-4">
              Privacy Policy & Terms
            </h2>

            {/* Scrollable Content */}
            <div className="text-sm md:text-base space-y-4 overflow-y-auto max-h-[70vh] px-1 text-center md:text-left">
              <p className="font-semibold text-red-600 text-center">
                Any person who visits our website is deemed to have agreed to our
                Privacy Policy and Terms & Conditions.
              </p>

              <h3 className="font-bold text-lg text-center">Introduction</h3>
              <p>
                Protecting your privacy is essential to GMD Auto Group ABN: 91 670 233 422.
                This Privacy Policy describes how we collect, manage, use and maintain
                your personal information. This policy applies to all products and
                services offered by GMD Auto Group.
              </p>

              <h3 className="font-bold text-lg text-center">
                Collection of Personal Information
              </h3>
              <p className="font-semibold">
                What kind of personal information do we collect?
              </p>

              <ul className="list-disc list-inside space-y-1 text-left mx-auto max-w-xl">
                <li>Name, address, phone number, email</li>
                <li>Date of birth</li>
                <li>Vehicle details (type, year, model, registration)</li>
                <li>Insurance, claims, and driver history</li>
                <li>TFNs and ABNs where required by law</li>
              </ul>

              <p>
                We may also collect images captured on our premises or vehicles,
                including security footage.
              </p>

              <h3 className="font-bold text-lg text-center">
                How We Collect Personal Information
              </h3>

              <ul className="list-disc list-inside space-y-1 text-left mx-auto max-w-xl">
                <li>Direct contact (phone, email, in person)</li>
                <li>Websites, mobile apps, cookies, and social media</li>
                <li>Business partners and service providers</li>
                <li>Publicly available sources</li>
              </ul>

              <h3 className="font-bold text-lg text-center">
                Use of Personal Information
              </h3>
              <p>
                We use personal information to provide services, manage relationships,
                handle billing, complaints, research, analytics, and identity
                verification.
              </p>

              <h3 className="font-bold text-lg text-center">
                Disclosure of Information
              </h3>
              <p>
                We may disclose information where required by law or with your consent
                to insurers, contractors, and service providers.
              </p>

              <h3 className="font-bold text-lg text-center">
                Location-Based Services
              </h3>
              <p>
                Location data may be collected to provide real-time vehicle and
                location-based services.
              </p>

              <h3 className="font-bold text-lg text-center">
                Privacy Complaints
              </h3>
              <p>
                If you have concerns, contact us and we will respond in writing. You
                may also contact the Office of the Australian Information Commissioner
                (OAIC).
              </p>

              <p className="text-center">
                More info:{" "}
                <span className="underline">www.oaic.gov.au/privacy/privacy-complaints</span>
              </p>

              <h3 className="font-bold text-lg text-center">
                Changes to This Policy
              </h3>
              <p>
                This Privacy Policy may be updated from time to time. Changes will be
                published on our website.
              </p>

              <h3 className="font-bold text-lg text-center">Contact Us</h3>
              <p className="text-center font-semibold">
                Email: info@gmdautogroup.com.au
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setShowTerms(false)}
              className="mt-6 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
