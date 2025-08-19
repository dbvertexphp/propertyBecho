"use client";

import { useState } from "react";
import { UserIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full z-50 py-[4vh] absolute top-0 left-0">
      <div className="w-[92%] mx-auto px-[1.5%] sm:w-[90%]">
        <div className="p-[0.8%] outline-[0.15vh] outline-[#ffffff] rounded-[2.5vh] shadow-md">
          <div className="p-[0.1%] bg-white rounded-[2.5vh] shadow-md">
            <nav className="relative bg-white rounded-[2.5vh] px-[2%] py-[3.5vh] sm:px-[2.5%] sm:py-[1.2vh] flex items-center justify-between">
              {/* Left Side Pills */}
              <div className="hidden lg:flex items-center">
                {["Buy", "Sell", "Rent", "Collaboration"].map((item, index) => (
                  <div
                    key={item}
                    className="px-[8%] py-[1vh] rounded-[3.5vh] text-[85%] font-semibold text-black cursor-pointer hover:bg-[#9a90e4] transition"
                    style={{
                      backgroundColor: "rgba(233, 229, 255, 0.7)",
                      marginRight: index !== 3 ? "3.5%" : "0",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* Centered Logo */}
              <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center">
                <Link href="/" className="flex justify-center">
                  <Image
                    src="/Logo Container.png"
                    alt="PropertyBecho Logo"
                    width={180}
                    height={90}
                    className="object-contain w-[30%] h-[9vh]"
                    priority
                  />
                </Link>
              </div>

              {/* Right Side Buttons */}
              <div className="hidden lg:flex items-center space-x-3">
                <button className="px-5 py-1 rounded-full bg-white border border-[#D1D5DB] text-xs font-semibold text-black hover:bg-gray-100 whitespace-nowrap">
                  Upload Listing
                </button>
                <button className="flex items-center gap-1.5 px-5 py-1 rounded-full bg-white border border-[#D1D5DB] text-xs font-semibold text-black hover:bg-gray-100 whitespace-nowrap">
                  Customer Support
                  <Image
                    src="/24-support.png"
                    alt="Support Icon"
                    width={16}
                    height={16}
                    className="w-3.5 h-3.5"
                  />
                </button>
                <a
                  href="#"
                  className="flex items-center justify-center px-5 py-1 rounded-full text-white font-semibold text-xs bg-[#2450A0] border border-[#C4D9FF] whitespace-nowrap"
                >
                  SIGN IN
                  <UserIcon className="ml-1.5 h-3.5 w-3.5" />
                </a>
              </div>

              {/* Mobile Menu Toggle */}
              <div className="lg:hidden ml-auto">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-[0.8%] rounded-lg bg-[#2450A0]"
                >
                  {isMobileMenuOpen ? (
                    <XMarkIcon className="w-[2.5vw] h-[2.5vh] text-white" />
                  ) : (
                    <Image
                      src="/hamburger.png"
                      alt="Menu"
                      width={22}
                      height={22}
                      className="w-[6vw] h-[3.5vh]"
                    />
                  )}
                </button>
              </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
              <div className="lg:hidden mt-[1vh] bg-white rounded-[1.8vh] shadow-xl p-[1.5%] border border-gray-200">
                <ul className="flex flex-col space-y-[2vh]">
                  {["Buy", "Sell", "Rent", "Collaboration"].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="block bg-[#e9e5ff] text-[#1f1f1f] font-semibold text-[75%] px-[1.5%] py-[1vh] rounded-[1.8vh] text-center"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                  <hr />
                  <li>
                    <a
                      href="#"
                      className="block text-center text-gray-700 font-bold text-[75%] hover:text-[#2450A0] transition"
                    >
                      Upload Listing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block text-center text-gray-700 font-bold text-[75%] hover:text-[#2450A0] transition"
                    >
                      Customer Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center bg-[#2450A0] text-white font-bold text-[75%] px-[2%] py-[1vh] rounded-[1.8vh] hover:bg-blue-700 transition"
                    >
                      SIGN IN
                      <UserIcon className="ml-[0.8%] h-[1.8vh] w-[2vw]" />
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

export default Header;