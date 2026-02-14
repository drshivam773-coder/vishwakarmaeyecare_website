import React from "react";
import DoctorBg from "../assets/doctor.jpg"; // <-- add your background image

const Doctor = () => {
  return (
    <section id="doctor" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${DoctorBg})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0A2540]/50"></div>

      {/* Card */}
      <div className="relative z-10 max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-10">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0A2540]">
            Dr. Shivam Sharma
          </h1>
          <p className="text-[#1E3A8A] font-semibold mt-2">
            Eye Sight Specialist
          </p>
          <p className="text-gray-500 mt-1 text-sm">
            Experience – Mumbai Eye Care & Lasik Centre
          </p>
          
          </div>

        {/* Intro */}
        <p className="text-gray-600 leading-relaxed mb-6 text-center">
          Dr. Shivam Sharma is an experienced eye sight specialist trained in
          modern eye care practices.
        </p>

        {/* Qualification Card */}
        <div className="bg-[#F8FAFC] rounded-xl p-6 mb-6">
          <h2 className="text-xl font-bold text-[#0A2540] mb-4">
            Qualification & Experience
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-[#F97316] text-lg">✓</span>
              <span>Eye Sight Specialist</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#F97316] text-lg">✓</span>
              <span>
                Experience from Mumbai Eye Care & Lasik Center
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#F97316] text-lg">✓</span>
              <span>
                Computerized Eye Testing
              </span>
            </li>
          </ul>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-4">
          Dr. Shivam Sharma performs detailed eye testing using advanced machines
          and explains the problem in simple and clear language.
        </p>

        <p className="text-[#F97316] font-semibold leading-relaxed">
          He is especially known as a best doctor for children eye care and
          provides trusted guidance for surgery whenever required.
        </p>
      </div>
    </section>
  );
};

export default Doctor;
