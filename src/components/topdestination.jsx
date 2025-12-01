import React from "react";
import { IoIosSend } from "react-icons/io";
import D1 from '../assets/TD/01.avif';
import D2 from '../assets/TD/02.avif';
import D3 from '../assets/TD/03.avif';

const TopDestinations = () => {
  const destinations = [
    {
      image: D1,
      city: "Rome, Italy",
      price: "$5.42k",
      duration: "10 Days Trip",
    },
    {
      image: D2,
      city: "London, UK",
      price: "$4.2k",
      duration: "12 Days Trip",
    },
    {
      image: D3,
      city: "Full Europe",
      price: "$15k",
      duration: "28 Days Trip",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 text-gray-500 rounded-full text-sm font-semibold mb-4">
            Top Selling
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-['Volkhov']">
            Top Destinations
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group max-w-sm mx-20"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={destination.image}
                  alt={destination.city}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1 font-['Poppins']">
                      {destination.city}
                    </h3>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">
                      {destination.price}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <IoIosSend className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-600">
                      {destination.duration}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;
