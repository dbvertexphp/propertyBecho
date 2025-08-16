"use client";
import Image from "next/image";
import Header2 from "@/components/Header2";
import Link from "next/link";
import { useState } from "react";

export default function Page1() {
  const [selected, setSelected] = useState("COMMERCIAL");

  const isSelected = (type: string) => selected === type;

  return (
    <div
      className="relative text-gray-900 bg-gray-50 min-h-screen overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Google Fonts: Poppins */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      {/* Background bubbles */}
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
        className="pt-[120px] pb-12 relative z-10"
        style={{ top: "37px", paddingBottom: "120px" }}
      >
        {/* Container with same width as header */}
        <div className="w-[87%] mx-auto">
          <h2 className="text-2xl font-bold">
            <span
              style={{
                color: "#000000",
                fontWeight: "700",
                fontSize: "26px",
                lineHeight: "29px",
              }}
            >
              Tell us a bit about
            </span>{" "}
            <span
              style={{
                color: "#2450A0",
                fontWeight: "700",
                fontSize: "26px",
                lineHeight: "29px",
              }}
            >
              your Property
            </span>
          </h2>

          <p
            className="mt-1"
            style={{
              marginTop: "12px",
              color: "rgba(102, 102, 102, 1)",
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
            Answer a few questions and get your no-obligation cash offer in as{" "}
            <span style={{ fontWeight: "600" }}>little as 3 minutes.</span>
          </p>

          {/* Property Type Selection */}
          <div
            className="bg-white rounded-2xl shadow-md p-4 relative pb-10 mx-auto md:max-w-[70%] w-full md:h-[250px]"
            style={{ marginTop: "30px" }}
          >
            <div className="flex flex-row justify-center gap-8 sm:gap-12 lg:gap-20 mt-10">
              {/* Residential */}
              <div
                onClick={() => setSelected("COMMERCIAL")}
                className={`relative md:mt-5 md:h-[90px] h-[90px] w-[140px] sm:w-[200px] overflow-visible flex flex-col items-center justify-end pt-12 sm:pt-16 cursor-pointer transition-all duration-200 rounded-[21px]
                  ${
                    isSelected("RESIDENTIAL")
                      ? "border border-[#2450A0] bg-white"
                      : "bg-gray-100 border border-transparent"
                  }`}
                style={{ paddingBottom: "8px" }}
              >
                <Image
  src="/home1.png"
  alt="Residential"
  width={120}
  height={120}
  className="
    absolute left-1/2 -translate-x-1/2 scale-x-[-1]
    w-[96px] bottom-[38px]     /* mobile ke liye */
    md:w-[120px] md:bottom-auto md:mb-4 md:sm:mb-6   /* desktop ke liye */
  "
/>

                <p
                  style={{
                    fontWeight: 500,
                    fontSize: "15px",
                    color: isSelected("COMMERCIAL")
                      ? "#2450A0"
                      : "rgb(110 116 133)",
                  }}
                >
                  COMMERCIAL
                </p>
              </div>

              {/* Commercial */}
              <div
                onClick={() => setSelected("RESIDENTIAL")}
                className={`relative md:mt-5 md:h-[90px] h-[90px] w-[140px] sm:w-[200px] overflow-visible flex flex-col items-center justify-end pt-12 sm:pt-16 cursor-pointer transition-all duration-200 rounded-[21px]
                  ${
                    isSelected("COMMERCIAL")
                      ? "border border-[#2450A0] bg-white"
                      : "bg-gray-100 border border-transparent"
                  }`}
                style={{ paddingBottom: "8px" }}
              >
                <Image
                  src="/home2.png"
                  alt="Commercial"
                  width={120}
                  height={120}
                 className="
    absolute left-1/2 -translate-x-1/2 scale-x-[-1]
    w-[96px] bottom-[38px]     /* mobile ke liye */
    md:w-[120px] md:bottom-auto md:mb-4 md:sm:mb-6   /* desktop ke liye */
  "
                />
                <p
                  style={{
                    fontWeight: 600,
                    fontSize: "15px",
                    textAlign: "center",
                    color: isSelected("RESIDENTIAL")
                      ? "#2450A0"
                      : "rgb(110 116 133)",
                  }}
                >
                  RESIDENTIAL
                  
                </p>
              </div>
            </div>

            {/* Property Type Tag */}
            <div className="absolute left-1/2 -bottom-4 transform -translate-x-1/2 bg-white text-black md:text-lg text:sm font-semibold px-4 py-1 rounded-full shadow-md border border-gray-200">
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  width: "85px",
                  height: "18px",
                }}
              >
                Property Type
              </span>
            </div>
          </div>

          {/* Location Input */}
          <div className="mt-[40px] bg-white rounded-2xl shadow-md p-5 md:p-8 mx-auto md:max-w-[40%] w-full">
            <p
              style={{
                fontSize: "14px",
                fontWeight: "500",
                color: "rgba(102, 102, 102, 1)",
              }}
            >
              First, enter the address of the property you're looking to sell.
            </p>

            <div className="relative">
              <input
                type="text"
                placeholder="Location"
                className="w-full px-4 py-2 pr-10 border border-[#2450A0] rounded-2xl font-semibold text-gray-500 placeholder-gray-400 outline-none md:h-[50px] h-[40px] mt-5"
              />
              <Image
                src="/Location.png"
                alt="Location Icon"
                width={24}
                height={24}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 md:mt-2 mt-2"
              />
            </div>
          </div>

          {/* Next Button */}
          <div className="mt-8 flex justify-center lg:justify-end">
            <Link href="/c-step3">
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