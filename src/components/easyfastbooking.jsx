import React from "react";
import { MapPin, CreditCard, Calendar } from "lucide-react";
import TRIP_IMAGE from "../assets/t.jpg";

const EasyFastBooking = () => {
  const steps = [
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      title: "Choose Destination",
      description:
        "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
      bgColor: "bg-blue-600",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-white" />,
      title: "Make Payment",
      description:
        "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
      bgColor: "bg-yellow-500",
    },
    {
      icon: <Calendar className="w-6 h-6 text-white" />,
      title: "Reach Airport on Selected Date",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
      bgColor: "bg-pink-500",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="mb-10">
              <h3 className="text-lg text-gray-600 mb-4 tracking-wide uppercase font-['Poppins']">
                Easy and Fast
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-[#181E4B] mb-6 font-['Volkhov']">
                Book Your Next Trip
                <br />
                In 3 Easy Steps
              </h2>
            </div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div
                    className={`${step.bgColor} w-12 h-12 rounded-[10px] flex items-center justify-center flex-shrink-0`}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#181E4B] mb-2 font-['Poppins']">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 font-['Poppins']">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative ml-20 w-[400px]">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-md ml-auto">
              <div className="h-64 p-8 overflow-hidden relative">
                <img
                  src= {TRIP_IMAGE}
                  alt="Trip to Greece"
                  className="w-full h-full rounded-[10px] object-cover"
                />
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 font-['Poppins']">
                    Trip To Greece
                  </h3>
                  <div className="flex items-center text-gray-600">
                    <span className="font-bold">14-29 June</span>
                    <span className="mx-2">|</span>
                    <span className="font-bold">by Robbin jt</span>
                  </div>
                </div>
                <div className="flex space-x-4 mb-6">
                  <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-50">
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                  <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-50">
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      />
                    </svg>
                  </button>
                  <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-50">
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <span className="ml-3 text-gray-600 font-medium">
                      24 people going
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-[-100px] -left-[-220px] bg-white rounded-xl shadow-xl p-4 max-w-[400px]">
              <div className="text-center w-[200px]">
                <div className="flex justify-between mb-2">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                      alt="Rome"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mb-3 ">
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                      Ongoing
                    </span>
                    <p className="text-sm font-semibold text-gray-800 mt-1">
                      Trip to Rome
                    </p>
                  </div>
                </div>
                <p className="text-xs mb-2 font-semibold text-gray-700">
                  <span className="text-[#8A79DF]">40%</span> completed
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div
                    className="bg-[#8A79DF] h-2 rounded-full"
                    style={{ width: "40%" }}
                  ></div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasyFastBooking;
