import React, { useState } from "react";

const faqs = [
  {
    question: "Do you provide computerized eye testing?",
    answer:
      "Yes, we use advanced computerized machines for accurate eye testing and power measurement.",
  },
  {
    question: "Are spectacles & contact lenses available?",
    answer:
      "Yes, spectacles and contact lenses are available at the clinic. We offer stylish frames, branded lenses, and proper lens fitting services.",
  },
  {
    question: "Is children eye care available?",
    answer:
      "Yes, we provide complete and safe eye checkups for children. Dr. Shivam Sharma is especially known for excellent children eye care.",
  },
  {
    question: "Are eye drops available?",
    answer:
      "Yes, prescribed eye drops are available at our clinic including lubricating drops and infection control drops.",
  },
  {
    question: "What if surgery is required?",
    answer:
      "Dr. Shivam Sharma provides trusted surgery and refractive surgery guidance. We refer patients to the best doctors and hospitals when surgery is needed.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#F7FAFC]">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0A2540]">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-2 text-lg">
            Common questions about our eye care services
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 transition"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-lg font-semibold text-[#1E3C72]">
                  Q. {faq.question}
                </h3>

                <span className="text-2xl font-bold text-orange-500">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              {activeIndex === index && (
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
