import React from "react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import GooglePlay from "../assets/playstore.png";
import AppStore from "../assets/apple.png";

const Footer = () => {
  return (
    <footer className="py-20 mx-[150px] px-4 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-16">
        <div className="w-full lg:w-1/4">
          <h2 className="text-4xl font-bold text-[#1a1a3d]">Jadoo.</h2>
          <p className="text-sm text-gray-500 mt-3 leading-relaxed">
            Book your trip in minute, get full <br />
            Control for much longer.
          </p>
        </div>
        
        <div className="flex justify-between w-full lg:w-1/2">
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Company</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>About</li>
              <li>Careers</li>
              <li>Mobile</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Help/FAQ</li>
              <li>Press</li>
              <li>Affilates</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-black mb-4">More</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Airlinefees</li>
              <li>Airline</li>
              <li>Low fare tips</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start">

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white shadow rounded-full flex items-center justify-center">
              <FiFacebook className="text-gray-700 text-lg" />
            </div>
            <div className="w-10 h-10 bg-[#ff7c5c] shadow rounded-full flex items-center justify-center text-white">
              <FiInstagram className="text-lg" />
            </div>
            <div className="w-10 h-10 bg-white shadow rounded-full flex items-center justify-center">
              <FiTwitter className="text-gray-700 text-lg" />
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-700 mt-8 text-lg mb-4 font-['Poppins']">
              Discover our app
            </p>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <div className=" cursor-pointer group">
                <div className="w-[120px] flex items-center bg-black rounded-[100px] p-2 mx-2 pr-5 shadow hover:shadow-lg transition-all">
                  <img
                    src={GooglePlay}
                    alt="Google Play"
                    className="w-6 h-6 mr-3 rounded-lg p-1"
                  />
                  <div>
                    <div className="text-[8px] font-bold text-gray-300">
                      GET IT ON
                    </div>
                    <div className="text-[10px] text-white">Google Play</div>
                  </div>
                </div>
              </div>

              <div className=" cursor-pointer group">
                <div className="w-[125px] flex items-center bg-black rounded-[100px] p-2 mx-2 pr-5 shadow hover:shadow-lg transition-all">
                  <img
                    src={AppStore}
                    alt="Google Play"
                    className="w-7 h-7 mr-3 rounded-lg p-1"
                  />
                  <div>
                    <div className="text-[7px] font-bold text-gray-300">
                      Available on the
                    </div>
                    <div className="text-[11px] text-white">Apple Store</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center text-gray-500 text-sm mt-16">
        All rights reserved @jadoo.co
      </p>
    </footer>
  );
};

export default Footer;
