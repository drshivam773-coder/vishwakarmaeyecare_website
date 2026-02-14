import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0A2540] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Clinic Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3">
            Vishwakarma Eye Care
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            Complete Eye Care & Vision Solutions.  
            Providing trusted, affordable, and modern eye care services for all age groups.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#home" className="hover:text-[#F97316] transition">Home</a></li>
            <li><a href="#about" className="hover:text-[#F97316] transition">About Us</a></li>
            <li><a href="#services" className="hover:text-[#F97316] transition">Services</a></li>
            <li><a href="#doctor" className="hover:text-[#F97316] transition">Doctor</a></li>
            <li><a href="#appointment" className="hover:text-[#F97316] transition">Book Appointment</a></li>
            <li><a href="#faq" className="hover:text-[#F97316] transition">FAQ</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-start gap-2">
              <span>📍</span>
              <span>Naushad Chowk, Gorakhpur, Uttar Pradesh, India</span>
            </li>
            <li className="flex items-center gap-2">
              <span>📞</span>
              <a href="tel:8112669394" className="hover:text-[#F97316] transition">
                +91 8112669394
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span>📧</span>
              <a
                href="mailto:vishwakarmaeyecare12@gmail.com"
                className="hover:text-[#F97316] transition"
              >
                shivamsharma353535@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span>🕒</span>
              <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Vishwakarma Eye Care. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
