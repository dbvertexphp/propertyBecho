"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header2 from "@/components/Header2";

export default function MovingDetail() {
  const options = [
    "As soon as possible",
    "Within 1 Month",
    "2–3 Months",
    "4 Months",
    "Just Browsing",
  ];

  const [selected, setSelected] = useState(0);

  return (
    <div
      className="relative text-gray-900 bg-gray-50 min-h-screen overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      {/* Background Bubbles */}
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

      {/* Header */}
      <Header2 />

      {/* Main Content */}
      <main
        className="pt-[120px] pb-12 flex justify-center relative z-10"
        style={{ top: "35px" }}
      >
        {/* Matches Header width */}
        <div className="w-[85%] mx-auto">
          {/* Title */}
          <h2 className="text-xl md:text-3xl font-[700]">
            <span className="text-black">Moving</span>{" "}
            <span className="text-[rgba(36,80,160,1)]">Details</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-sm md:text-base text-[rgba(102,102,102,1)] font-normal">
            Answer a few questions and get your no-obligation cash offer in as{" "}
            <span className="font-semibold">little as 3 minutes.</span>
          </p>

          {/* Question Card */}
          <div className="bg-white rounded-2xl shadow-md mt-8 p-4">
            <h3
  className="mb-4 border-l-4 pl-3 flex flex-wrap md:flex-nowrap items-center text-lg md:text-2xl font-semibold"
  style={{ borderColor: "#2450A0" }}
>
  <span className="text-[rgba(36,80,160,1)] font-[700]">
    H
    <span className="text-[rgba(10,9,9,1)] font-[600]">
      ow soon would you like to sell?
    </span>
  </span>
</h3>

            <form className="space-y-3">
              {options.map((label, index) => (
                <label
                  key={index}
                  className={`flex items-center border rounded-xl px-4 py-3 cursor-pointer transition-all duration-200 ${
                    selected === index
                      ? "bg-[#E7ECF5] border-blue-600"
                      : "border-gray-300 hover:border-blue-400"
                  }`}
                  onClick={() => setSelected(index)}
                >
                  <input
                    type="radio"
                    name="sell_time"
                    className="sr-only"
                    checked={selected === index}
                    onChange={() => setSelected(index)}
                  />
                  <div
                    className="w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3"
                    style={{ borderColor: "#1218282E" }}
                  >
                    <div
                      className={`w-2.5 h-2.5 rounded-full transition-transform duration-200 ${
                        selected === index ? "scale-100" : "scale-0"
                      }`}
                      style={{ backgroundColor: "#2450A0" }}
                    />
                  </div>
                  <span
                    className={`font-semibold text-sm md:text-lg ${
                      selected === index ? "text-[#2450A0]" : "text-[#757577]"
                    }`}
                  >
                    {label}
                  </span>
                </label>
              ))}
            </form>
          </div>

          {/* Next Button */}
          <div className="mt-8 flex justify-center lg:justify-end">
            <Link href="/r-step-3">
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
