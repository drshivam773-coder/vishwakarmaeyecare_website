import React from "react";
import Introbg from "../assets/bg.png";

const BasicIntroduction = () => {
  return (
    <div>
      <section id="home" className="relative h-1/2 w-screen md:p-20 p-10 text-center overflow-hidden">
        
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-bottom bg-no-repeat bg-cover opacity-15"
          style={{ backgroundImage: `url(${Introbg})` }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/10"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-5 text-[#0A2540]">
            Welcome to Vishwakarma Eye Care
          </h1>

          <p className="mb-3 text-gray-700">
            Vishwakarma Eye Care is a trusted eye clinic in Gorakhpur providing
            complete eye care services with modern machines and expert consultation.
            We focus on accurate eye testing, proper diagnosis, child eye care, and
            clear guidance for medical or surgical treatment.
          </p>

          <p className="text text-lg text-[#1DA1F2] font-medium">
            "Our goal is to provide safe, affordable, and reliable eye care for
            patients of all age groups."
          </p>
        </div>
      </section>
    </div>
  );
};

export default BasicIntroduction;
