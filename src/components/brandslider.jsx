import React from "react";
import One from "../assets/Slider/1.png";
import Two from "../assets/Slider/2.png";
import Three from "../assets/Slider/3.png";
import Four from "../assets/Slider/4.png";
import Five from "../assets/Slider/5.png";

const BrandSlider = () => {
  const brands = [
    {
      name: "Axen",
      logo: One,
    },
    {
      name: "Jetstar",
      logo: Two,
    },
    {
      name: "Expedia",
      logo: Three,
    },
    {
      name: "Qantas",
      logo: Four,
    },
    {
      name: "Alitalia",
      logo: Five,
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex animate-slide gap-12 py-8">
          {[...brands, ...brands].map((brand, index) => (
            <div key={index} className="flex-shrink-0">
              <div className="w-28 h-14 flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          animation: slide 20s linear infinite;
        }
        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default BrandSlider;
