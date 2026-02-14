import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const BookAppointment = () => {
  const formRef = useRef();

  const serviceId = import.meta.env.VITE_SERVICEID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const doctorTemplateId = import.meta.env.VITE_DOCTOR_TEMPLATEID;
  const patientTemplateId = import.meta.env.VITE_PATIENT_TEMPLATEID;

  const hidePrevDates = () => {
    const today = new Date().toISOString().split("T")[0];
    document.getElementsByName("date")[0].setAttribute("min", today);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      // Send email to Doctor
      emailjs.sendForm(serviceId, doctorTemplateId, formRef.current, publicKey);

      // Send confirmation email to Patient
      emailjs.sendForm(
        serviceId,
        patientTemplateId,
        formRef.current,
        publicKey,
      );
    } catch (error) {
      toast.error("Failed to book appointment. Please try again.");
      console.error("EmailJS Error:", error);
      return;
    }

    toast.success("Appointment booked successfully!");
    e.target.reset();
  };

  return (
    <section id="appointment" className="w-full py-14 bg-[#F7FAFC]">
      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-4xl font-bold text-[#0A2540]">
          Book an Appointment
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          Visit us or contact us to schedule your eye checkup
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {/* LEFT: FORM */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          <h2 className="text-xl font-semibold text-[#0A2540] mb-6">
            📅 Book Your Appointment
          </h2>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="patient_name"
                required
                placeholder="Enter your full name"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                name="patient_phone"
                required
                placeholder="Enter your phone number"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="patient_email"
                required
                placeholder="Enter your email"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Service *
              </label>
              <select
                name="service"
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
              >
                <option value="">Choose a service</option>
                <option>Eye Checkup</option>
                <option>Child Eye Care</option>
                <option>Contact Lens</option>
                <option>Spectacles</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Date *
              </label>
              <input
                type="date"
                name="date"
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
                onClick={hidePrevDates}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Additional Message
              </label>
              <textarea
                name="message"
                rows="3"
                placeholder="Any specific concerns?"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition"
            >
              📅 Book Appointment
            </button>
          </form>
        </div>

        {/* RIGHT: CONTACT INFO */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          <h2 className="text-xl font-semibold text-[#0A2540] mb-6">
            Contact Information
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>📍 Naushad Chowk, Gorakhpur, Uttar Pradesh</p>
            <p>
              📞 <span className="text-orange-500 font-medium">+91-8112669394</span>
            </p>
            <p>
              📞 <span className="text-orange-500 font-medium">+91-9935039401</span>
            </p>
            <p>
              📧{" "}
              <span className="text-orange-500 font-medium">
                shivamsharma353535@gmail.com
              </span>
            </p>
            <p>⏰ Mon – Sat: 9:00 AM – 7:00 PM</p>
          </div>

          <a
            href="https://wa.me/918112669394"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-full transition">
              📞 Call / WhatsApp
            </button>
          </a>
          <a
            href="https://www.instagram.com/shivam_vishwakarma_11?igsh=OXBscm81cXd60WJx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-8 w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
              📷 Instagram
            </button>
          </a>
          <a
            href="https://www.facebook.com/shivam.sharma.665400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
              👥 Facebook
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;
