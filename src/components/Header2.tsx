'use client';

import { useState } from 'react';
import { UserIcon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Image from 'next/image';

const Header2 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full z-50 py-4 absolute top-0 left-0">
      <div className="w-[95%] mx-auto px-4 sm:w-[95%]">
        <div className="p-1  outline-1 outline-[#ffffff] rounded-[3vh] shadow-md bg-[#e9e9e9]">
          <div className="p-1 bg-white rounded-[3vh] shadow-md">
            <nav className="relative bg-white rounded-[3vh] px-4 py-4 sm:px-6 sm:py-2 flex items-center justify-between flex-wrap">
              {/* Left Side Pills */}
              <div className="hidden lg:flex items-center flex-1 max-w-[30%]">
                {["Buy", "Sell", "Rent", "Collaboration"].map((item, index) => (
                  <div
                    key={item}
                    className="px-4 py-2 rounded-[4vh] text-[90%] font-semibold text-black cursor-pointer hover:bg-[#9a90e4] transition"
                    style={{
                      backgroundColor: "rgba(233, 229, 255, 0.7)",
                      marginRight: index !== 3 ? "4%" : "0",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* Centered Logo */}
              <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center max-w-[20%]">
                <Link href="/" className="flex justify-center">
                  <Image
                    src="/Logo Container.png"
                    alt="PropertyBecho Logo"
                    width={150}
                    height={75}
                    className="object-contain w-full h-[7vh]"
                    priority
                  />
                </Link>
              </div>

              {/* Right Side Buttons */}
              <div className="hidden lg:flex items-center space-x-4 flex-1 max-w-[30%] justify-end">
                <button className="px-4 py-2 rounded-[4vh] bg-white border border-[#D1D5DB] text-[90%] font-semibold text-black hover:bg-gray-100 whitespace-nowrap">
                  Upload Listing
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-[4vh] bg-white border border-[#D1D5DB] text-[90%] font-semibold text-black hover:bg-gray-100 whitespace-nowrap">
                  Customer Support
                  <Image
                    src="/24-support.png"
                    alt="Support Icon"
                    width={18}
                    height={18}
                    className="w-5 h-5"
                  />
                </button>
                <a
                  href="#"
                  className="flex items-center justify-center px-4 py-2 rounded-[4vh] text-white font-semibold text-[90%] bg-[#2450A0] border border-[#C4D9FF] whitespace-nowrap"
                >
                  SIGN IN
                  <UserIcon className="ml-1 h-5 w-5" />
                </a>
              </div>

              {/* Mobile Menu Toggle */}
              <div className="lg:hidden ml-auto">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-1 rounded-[2vh] bg-[#2450A0]"
                >
                  {isMobileMenuOpen ? (
                    <XMarkIcon className="w-6 h-6 text-white" />
                  ) : (
                    <Image
                      src="/hamburger.png"
                      alt="Menu"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  )}
                </button>
              </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
              <div className="lg:hidden mt-2 bg-white rounded-[2vh] shadow-xl p-2 border border-gray-200">
                <ul className="flex flex-col space-y-2">
                  {["Buy", "Sell", "Rent", "Collaboration"].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="block bg-[#e9e5ff] text-[#1f1f1f] font-semibold text-[80%] px-2 py-1 rounded-[2vh] text-center"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                  <hr />
                  <li>
                    <a
                      href="#"
                      className="block text-center text-gray-700 font-bold text-[80%] hover:text-[#2450A0] transition"
                    >
                      Upload Listing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block text-center text-gray-700 font-bold text-[80%] hover:text-[#2450A0] transition"
                    >
                      Customer Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center bg-[#2450A0] text-white font-bold text-[80%] px-2 py-1 rounded-[2vh] hover:bg-blue-700 transition"
                    >
                      SIGN IN
                      <UserIcon className="ml-1 h-5 w-5" />
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header2;