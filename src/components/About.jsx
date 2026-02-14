import React from "react";
import Doctor from "../assets/DoctorImage.jpg";

const About = () => {
  return (
    <section id="about"className="w-full min-h-screen px-6 md:px-20 py-14">
      
      {/* Section Title */}
      <h1 className="text-4xl font-bold mb-10 text-[#0A2540] text-center">
        About Us
      </h1>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-[#1E3C72]">
            Professional & Patient-Friendly Eye Clinic
          </h2>

          <p className="text-gray-700 leading-relaxed text-justify">
            Vishwakarma Eye Care is a professional and patient-friendly eye clinic
            located at Naushad Chowk, Gorakhpur. We offer complete eye examinations
            using advanced computerized machines to ensure accurate results.
          </p>

          <div className="flex flex-col gap-2 text-gray-700">
            <p>✅ Proper eye examination</p>
            <p>✅ Correct vision diagnosis</p>
            <p>✅ Spectacles & contact lenses</p>
            <p>✅ Prescribed eye drops</p>
            <p>✅ Child eye care checkups</p>
          </div>

          <p className="mt-4 font-semibold text-[#1E3C72]">
            We believe in honest consultation, quality treatment, and personal care
            for every patient.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={Doctor}
            alt="Doctor"
            className="w-full max-w-md md:max-w-full h-[400px] md:h-[520px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
