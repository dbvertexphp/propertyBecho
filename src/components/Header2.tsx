'use client';

import { useState } from 'react';
import { UserIcon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Image from 'next/image';

const Header2 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full z-50 py-4 absolute top-0 left-0">
      <div className="max-w-lg mx-auto px-4 sm:max-w-[90%]">
        <div className="p-2 outline-[2px] outline-[#ffffff] rounded-3xl shadow-md bg-[#e9e9e9]">
          <div className="p-[1px] bg-white rounded-3xl shadow-md">
            <nav className="bg-white rounded-3xl px-6 py-3 flex items-center justify-between relative">
              {/* Left Side Pills */}
              <div className="hidden lg:flex items-center gap-2">
                {["Buy", "Sell", "Rent", "Collaboration"].map((item) => (
                  <div
                    key={item}
                    className="px-4 py-2 rounded-full text-base font-semibold text-black cursor-pointer hover:bg-[#9a90e4] transition"
                    style={{ backgroundColor: "rgba(233, 229, 255, 0.7)" }}
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* Centered Logo */}
              <div className="flex-1 flex justify-center">
                <Link href="/" className="flex justify-center">
                  <Image
                    src="/Logo Container.png"
                    alt="PropertyBecho Logo"
                    width={200}
                    height={100}
                    className="object-contain w-[200px] h-[70px]"
                    priority
                  />
                </Link>
              </div>

              {/* Right Side Buttons */}
              <div className="hidden lg:flex items-center space-x-2">
                <button className="px-4 py-2 rounded-full bg-white border border-[#D1D5DB] text-sm font-semibold text-black hover:bg-gray-100">
                  Upload Listing
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#D1D5DB] text-sm font-semibold text-black hover:bg-gray-100">
                  Customer Support
                  <Image
                    src="/24-support.png"
                    alt="Support Icon"
                    width={15}
                    height={16}
                  />
                </button>
                <a
                  href="/basic_login"
                  className="flex items-center justify-center px-5 py-2 rounded-full text-white font-semibold text-sm bg-[#2450A0] border border-[#C4D9FF]"
                >
                  SIGN IN
                  <UserIcon className="ml-2 h-5 w-5" />
                </a>
              </div>

              {/* Mobile Menu Toggle */}
              <div className="lg:hidden ml-auto">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 rounded-2xl bg-[#2450A0]"
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
              <div className="lg:hidden mt-2 bg-white rounded-xl shadow-xl p-4 border border-gray-200 max-w-lg mx-auto sm:max-w-[90%]">
                <ul className="flex flex-col space-y-4">
                  {["Buy", "Sell", "Rent", "Collaboration"].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="block bg-[#e9e5ff] text-[#1f1f1f] font-semibold text-sm px-4 py-2 rounded-full text-center"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                  <hr />
                  <li>
                    <a
                      href="#"
                      className="block text-center text-gray-700 font-bold text-sm hover:text-[#2450A0] transition"
                    >
                      Upload Listing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block text-center text-gray-700 font-bold text-sm hover:text-[#2450A0] transition"
                    >
                      Customer Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="/basic_login"
                      className="flex items-center justify-center bg-[#2450A0] text-white font-bold text-sm px-5 py-2 rounded-full hover:bg-blue-700 transition"
                    >
                      SIGN IN
                      <UserIcon className="ml-2 h-5 w-5" />
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