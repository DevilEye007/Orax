import React from "react";
import { FiMail } from "react-icons/fi";

const SubscribeSection = () => {
  return (
    <div className="flex justify-center items-center py-20 px-4">
      <div className="bg-[#f8f5ff] w-full max-w-5xl rounded-xl rounded-tl-[100px] py-16 px-6 text-center shadow-sm">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-700 leading-snug">
          Subscribe to get information, latest news and other <br />
          interesting offers about Jadoo
        </h2>

        {/* Input + Button */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
          
          {/* Email Input */}
          <div className="flex items-center bg-white rounded-xl px-4 py-3 w-full max-w-md shadow-sm">
            <FiMail className="text-gray-500 text-xl" />
            <input
              type="email"
              placeholder="Your email"
              className="ml-3 w-full outline-none text-gray-700"
            />
          </div>

          {/* Button */}
          <button className="px-6 py-3 bg-[#ff7c5c] text-white font-medium rounded-xl shadow hover:opacity-90 transition">
            Subscribe
          </button>

        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
