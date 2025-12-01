import React from "react";
import One from "../assets/Slider/1.png";
import Two from "../assets/Slider/2.png";
import Three from "../assets/Slider/3.png";
import Four from "../assets/Slider/4.png";
import Five from "../assets/Slider/5.png";

const BrandSlider = () => {
  const brands = [
    { name: "Axen", logo: One },
    { name: "Jetstar", logo: Two },
    { name: "Expedia", logo: Three },
    { name: "Qantas", logo: Four },
    { name: "Alitalia", logo: Five },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-8 py-8 flex-wrap">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="w-32 h-16 flex items-center justify-center bg-white rounded-lg shadow-sm"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-full h-full object-contain p-2"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
