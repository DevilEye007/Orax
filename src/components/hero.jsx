import React from "react";
import { IoIosPlay } from "react-icons/io";
import HERO_IMAGE from "../assets/Traveller 1.png";
import PLANE_IMAGE from "../assets/plane.png";

const HeroSection = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-20 lg:px-20 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-sm font-bold text-[#DF6951]">
                BEST DESTINATIONS AROUND THE WORLD
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-[#181E4B] leading-tight font-['Volkhov']">
              Travel, enjoy
              <br />
              and live a new
              <br />
              and full life
            </h1>

            <p className="text-gray-600 text-lg max-w-xl leading-relaxed">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Find out more
              </button>

              <button className="flex items-center space-x-3 text-gray-700 hover:text-yellow-600 group transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative">
                  <div className="w-14 h-14 bg-[#DF6951] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                    <IoIosPlay className="w-8 h-8 text-white" />
                  </div>
                </div>
                <span className="font-semibold text-lg">Play Demo</span>
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="p-4">
                <div className="overflow-hidden relative">
                  <img
                    src={HERO_IMAGE}
                    alt="Travel destination"
                    className="w-[700px] h-[550px] object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -left-[-80px] top-[50px] z-20">
              <div className="text-center">
                <div className="w-[120px] h-[120px] mb-2 mx-auto">
                  <img
                    src={PLANE_IMAGE}
                    alt="Plane"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -right-[30px] bottom-[350px] p-3 z-[-1]">
              <div className="text-center">
                <div className="w-[120px] h-[120px] mb-2 mx-auto">
                  <img
                    src={PLANE_IMAGE}
                    alt="Plane"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
