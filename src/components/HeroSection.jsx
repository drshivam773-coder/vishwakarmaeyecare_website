import React from "react";
import EyeCareVideo from "../assets/eyecar.mp4";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={EyeCareVideo} type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-[#0A2540]/70"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center text-white">
        
        <h1 className="text-4xl mt-10 sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 leading-tight">
          Vishwakarma Eye Care
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 max-w-3xl text-[#E6F2FF]">
          Complete Eye Care & Vision Solutions
        </p>

        <div className="bg-white/95 text-[#0A2540] md:px-14 md:py-6 px-6 py-5 rounded-2xl mb-8 shadow-xl">
          <p className="text-3xl font-bold">Dr. Shivam Sharma</p>
          <p className="text-xl mt-1 font-medium text-[#1DA1F2]">
            Eye Sight Specialist
          </p>
          <p className="text-lg mt-3 font-medium text-gray-600">
            Mumbai Eye Care & Lasik Center
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="tel:+918112669394"><button className="px-8 py-3 bg-[#FF7A18] hover:bg-[#e96a0f] text-white font-semibold rounded-lg transition duration-300 transform hover:scale-105 shadow-md">
            <i className="ri-phone-fill mr-2"></i>
            Call Now: +91-8112669394
          </button></a>

          <a href="#appointment"><button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-[#0A2540] text-white font-semibold rounded-lg transition duration-300">
            <i className="ri-calendar-fill mr-2"></i>
            Book Consultation
          </button></a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
