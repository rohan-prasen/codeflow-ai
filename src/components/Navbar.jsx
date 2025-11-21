import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <nav className="fixed top=0 w-full z-50 transition-all duration=300 bg-slate-950/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:20">
          <a
            href="/"
            className="flex items-center space-x-1 group cursor-pointer"
          >
            <div>
              <img
                src="react.svg"
                alt="codeFlow"
                className="w-6 h-6 sm:w-8 h-8"
              />
            </div>
            <span className="text-lg sm_text-xl md:text-2xl font-medium">
              <span className="text-white">Code</span>
              <span className="text-blue-400">Flow</span>
            </span>
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a
              href="#features"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Testimonials
            </a>
          </div>

          <button
            className="md:hidden items-center p-2 text-gray-300 hover:text-white"
            onClick={() => setMobileMenuIsOpen((prev) => !prev)}
          >
            {mobileMenuIsOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuIsOpen && (
        <div>
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
            <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-4">
              <a
                href="#features"
                onClick={() => setMobileMenuIsOpen(false)}
                className="block text-gray-300 hover:text-white text-sm lg:text-base"
              >
                Features
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileMenuIsOpen(false)}
                className="block text-gray-300 hover:text-white text-sm lg:text-base"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                onClick={() => setMobileMenuIsOpen(false)}
                className="block text-gray-300 hover:text-white text-sm lg:text-base"
              >
                Testimonials
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
