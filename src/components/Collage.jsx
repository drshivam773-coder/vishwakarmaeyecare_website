import React from 'react';
import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
import four from "../assets/four.jpg";
import five from "../assets/five.webp";
import six from "../assets/six.jpg";
import seven from "../assets/seven.jpg";
import eight from "../assets/eight.jpg";
import nine from "../assets/nine.jpg";

const Collage = () => {
  const photos = [
    {
      id: 1,
      src: three,
      alt: 'Mobile Eye Care Clinic',
      category: 'Community Service'
    },
    {
      id: 2,
      src: two,
      alt: 'Eye Examination',
      category: 'Patient Care'
    },
    {
      id: 3,
      src: nine,
      alt: 'Eye Camp',
      category: 'Outreach Programs'
    },
    {
      id: 4,
      src: six,
      alt: 'VR Vision Therapy',
      category: 'Advanced Technology'
    },
    {
      id: 5,
      src: eight,
      alt: 'Modern Equipment',
      category: 'Technology'
    },
    {
      id: 6,
      src: five,
      alt: 'Professional Consultation',
      category: 'Expert Care'
    },
    {
      id: 7,
      src: one,
      alt: 'Advanced Diagnostic Tools',
      category: 'Equipment'
    },
    {
      id: 8,
      src: four,
      alt: 'Pediatric Eye Care',
      category: 'Specialized Care'
    },
    {
      id: 9,
      src: seven,
      alt: 'Eye Care Specialist',
      category: 'Our Team'
    }
  ];

  return (
    <section id='services' className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Gallery
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our state-of-the-art facilities and dedicated team providing exceptional eye care services
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                  {photo.category}
                </div>
              </div>

              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white text-lg sm:text-xl font-bold mb-2">
                  {photo.alt}
                </h3>
                <div className="w-12 h-1 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>

              {/* Hover Icon */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Collage;