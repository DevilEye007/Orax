import LOGO from "../assets/Jadoo.png";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-[150px] px-8 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src={LOGO} alt="Jadoo Logo" className="h-6 w-auto ml-2" />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="px-6 text-gray-700 hover:text-yellow-600 font-medium transition-colors"
            >
              Destinations
            </a>
            <a
              href="#"
              className="px-6 text-gray-700 hover:text-yellow-600 font-medium transition-colors"
            >
              Hotels
            </a>
            <a
              href="#"
              className="px-6 text-gray-700 hover:text-yellow-600 font-medium transition-colors"
            >
              Flights
            </a>
            <a
              href="#"
              className="px-6 text-gray-700 hover:text-yellow-600 font-medium transition-colors"
            >
              Bookings
            </a>

            <div className="hidden md:flex items-center space-x-4">
              <a
                href="#"
                className="px-6 text-gray-700 hover:text-yellow-600 font-medium transition-colors"
              >
                Login
              </a>
              <a
                href="#"
                className="px-6 text-gray-700 border py-2 rounded-md font-medium hover:bg-gray-700 hover:text-white transition-colors"
              >
                Sign up
              </a>
            </div>

            <div className="px-6 flex items-center space-x-2 text-gray-700 cursor-pointer">
              <span className="font-medium">EN</span>
              <ChevronDown className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
