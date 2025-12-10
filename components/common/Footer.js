"use client";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-20 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Address */}
        <div>
          <h3 className="font-bold text-lg mb-4">Address</h3>
          <p>50 Sussex StMaylands WA 6051</p>
          <p className="mt-2">0459 778 259</p>
          <p className="mt-2">info@gmd.com</p>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="font-bold text-lg mb-4">Opening Hours</h3>
          <p>Monday - Friday: 09.00 AM - 09.00 PM</p>
          <p className="mt-2">Saturday - Sunday: 09.00 AM - 12.00 PM</p>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-lg mb-4">Services</h3>
          <p>We do services for all motor vehicles.</p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-bold text-lg mb-4">Newsletter</h3>
          <p>Subscribe to our newsletter to get the latest updates.</p>
          <form className="mt-4 flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-md text-black flex-1"
            />
            <button className="bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <p>
          © Your Site Name, All Rights Reserved. Designed By HTML Codex
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-4">
          <span className="hover:text-white cursor-pointer">Home</span>
          <span className="hover:text-white cursor-pointer">Cookies</span>
          <span className="hover:text-white cursor-pointer">Help</span>
          <span className="hover:text-white cursor-pointer">FAQs</span>
        </div>
      </div>
    </footer>
  );
}
