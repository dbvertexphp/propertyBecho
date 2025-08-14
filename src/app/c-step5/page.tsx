"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header2 from "@/components/Header2";

export default function PropertyDetail() {
  const ownershipOptions = [
    "Freehold",
    "Leasehold",
    "Co-operative Housing",
    "Power of Attorney",
  ];

  const [ownershipOpen, setOwnershipOpen] = useState(false);
  const [ownershipValue, setOwnershipValue] = useState("");

  return (
    <div
      className="relative text-gray-900 bg-gray-50 min-h-screen overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      {/* Background Images */}
      <div className="relative">
        <img
          src="/bubble.png"
          alt="Bubble 2"
          className="absolute top-0 right-0 w-[120px] md:w-[190px] z-0 opacity-80"
        />
        <img
          src="/bubble1.png"
          alt="Bubble 1"
          className="absolute top-0 right-0 w-[90px] md:w-[134px] z-10"
        />
      </div>

      <Header2 />

      <main
        className="pt-[120px] pb-12 flex justify-center relative z-10"
        style={{ top: "35px", paddingBottom: "120px" }}
      >
        <div className="w-[87%] mx-auto">
          {/* Title */}
          <h2 className="font-bold text-xl md:text-[26px]">
            <span style={{ color: "black" }}>Property</span>
            <span className="text-[#2450A0]"> Details</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-sm md:text-base text-[#666]">
            Answer a few questions and get your no-obligation cash offer in as{" "}
            <span className="font-semibold">little as 3 minutes.</span>
          </p>

          {/* Form Box */}
          <div className="bg-white rounded-2xl shadow-md mt-6 p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold mb-1 text-base md:text-[20px]">
                  Built area
                </label>
                <input
                  type="text"
                  placeholder="Built area"
                  className="w-full border rounded-[20px] px-4 py-3 placeholder:text-gray-400 text-sm md:text-base"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1 text-base md:text-[20px]">
                  Area Unit <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Area Unit"
                  className="w-full border rounded-[20px] px-4 py-3 placeholder:text-gray-400 text-sm md:text-base"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold mb-1 text-base md:text-[20px]">
                  Total area <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Total area "
                  className="w-full border rounded-[20px] px-4 py-3 placeholder:text-gray-400 text-sm md:text-base"
                />
              </div>

              {/* Custom Dropdown */}
              <div className="relative">
                <label className="block font-semibold mb-1 text-base md:text-[20px]">
                  Ownership
                </label>
                <div
                  className="w-full border rounded-[20px] px-4 py-3 bg-white cursor-pointer flex justify-between items-center text-sm md:text-base"
                  onClick={() => setOwnershipOpen(!ownershipOpen)}
                >
                  <span
                    className={
                      ownershipValue ? "text-black" : "text-gray-400"
                    }
                  >
                    {ownershipValue || "Ownership"}
                  </span>
                  <img
                    src="/arrow-down.png"
                    alt="Dropdown Icon"
                    className={`object-contain w-6 h-6 transition-transform ${
                      ownershipOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {ownershipOpen && (
                  <div className="absolute top-full left-0 w-full mt-1 bg-white border rounded-[20px] shadow-lg z-50 overflow-hidden">
                    {ownershipOptions.map((option, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          setOwnershipValue(option);
                          setOwnershipOpen(false);
                        }}
                        className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-sm md:text-base"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold mb-1 text-base md:text-[20px]">
                  Total Floor<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Total Floor"
                  className="w-full border rounded-[20px] px-4 py-3 placeholder:text-gray-400 text-sm md:text-base"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1 text-base md:text-[20px]">
                  Your Floor<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Floor"
                  className="w-full border rounded-[20px] px-4 py-3 placeholder:text-gray-400 text-sm md:text-base"
                />
              </div>
            </div>
          </div>

          {/* Next Button */}
          <div className="mt-8 flex justify-center lg:justify-end">
            <Link href="#">
              <Image
                src="/next.png"
                alt="Next Step"
                width={350}
                height={350}
                className="cursor-pointer w-[250px] md:w-[300px] lg:w-[350px]"
              />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
