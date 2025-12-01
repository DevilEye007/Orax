import React from "react";
import { Cloud, Plane, Calendar, Settings } from "lucide-react";
import One from "../assets/Services/1.png";
import Two from "../assets/Services/2.png";
import Three from "../assets/Services/3.png";
import Four from "../assets/Services/4.png";

const ServicesSection = () => {
  const services = [
    {
      icon: One,
      title: "Calculated Weather",
      description:
        "Built Wicket longer admire do barton vanity itself do in it.",
      highlight:
        "We deliver outsourced aviation services for military customers",
    },
    {
      icon: Two,
      title: "Best Flights",
      description:
        "Engrossed listening. Park gate sell they west hard for the.",
      highlight: "admire do button vanity itself do in it.",
    },
    {
      icon: Three,
      title: "Local Events",
      description:
        "Button vanity itself do in it. Preferd to men it engrossed listening.",
      highlight: "Park gate sell they west hard for the.",
    },
    {
      icon: Four,
      title: "Customization",
      description:
        "We deliver outsourced aviation services for military customers",
      highlight: "admire do button vanity itself do in it.",
    },
  ];

  return (
    <div className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-sm text-gray-600 mb-4 tracking-wide uppercase font-['Poppins']">
            CATEGORY
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-[#181E4B] mb-6 font-['Volkhov']">
            We Offer Best Services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="mb-6">
                <div className="mb-6">
                  <div className="w-[100px] h-[100px] flex items-center justify-center p-4">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-[300px] h-[300px] object-contain"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#181E4B] mb-4 font-['Poppins']">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed font-['Poppins']">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
