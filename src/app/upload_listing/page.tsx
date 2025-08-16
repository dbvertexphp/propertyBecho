"use client";

import { useState } from "react";
import Header2 from "@/components/Header2";

export default function Uploadlisting() {
  const [propertyTitle, setPropertyTitle] = useState("");
  const [expectedPrice, setExpectedPrice] = useState("");
  const [description, setDescription] = useState("");
  const [shortPrice, setShortPrice] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ propertyTitle, expectedPrice, description });
  };

  const formatIndianPrice = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    if (numericValue === "") return "";
    return Number(numericValue).toLocaleString("en-IN");
  };

  const getShortIndianCurrencyFormat = (amount: string): string => {
    const number = parseInt(amount.replace(/,/g, "") || "0");

    if (number >= 10000000) {
      return `₹ ${(number / 10000000).toFixed(1)} Cr`;
    } else if (number >= 100000) {
      return `₹ ${(number / 100000).toFixed(1)} Lacs`;
    } else if (number >= 1000) {
      return `₹ ${(number / 1000).toFixed(1)} K`;
    } else {
      return `₹ ${number}`;
    }
  };

  const handleExpectedPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const formatted = formatIndianPrice(input);
    setExpectedPrice(formatted);
    setShortPrice(getShortIndianCurrencyFormat(formatted));
  };

  return (
    <div className="relative text-gray-900 bg-gray-50 min-h-screen overflow-hidden font-poppins">
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Decorative Bubbles */}
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

      {/* Main Section */}
      <main className="pt-[120px] pb-12 flex justify-center relative z-10" style={{ top: "35px" }}>
        <div className="w-[87%] mx-auto px-4">
          
          {/* Call Icon */}
          <div className="md:hidden w-[50px] h-[50px] flex items-center justify-center border border-[#0000001C] rounded-2xl bg-white">
            <img
              src="/facilities/call.png"
              alt="Call Icon"
              className="w-[29px] h-[29px]"
            />
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-bold text-black mt-8">Upload Listing</h2>
          <p className="text-sm text-gray-500 mt-3">
            Fill out the form with your requirements and we’ll connect you with
            properties that match your needs fast, easy, and reliable.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-6 space-y-6">

            {/* Property Title */}
            <div>
              <label className="text-[16px] font-semibold text-[#0A0909]">
                Property Title <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Property Title"
                value={propertyTitle}
                onChange={(e) => setPropertyTitle(e.target.value)}
                className="w-full border border-gray-300 rounded-[19px] px-4 py-3 placeholder-gray-400 text-[14px] font-semibold"
              />
            </div>

            {/* Expected Price */}
            <div>
              <label className="text-[16px] font-semibold text-[#0A0909]">
                Expected Price <span className="text-red-600">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 font-semibold text-[16px] text-[#2450A0]">
                  ₹
                </span>
                <input
                  type="text"
                  placeholder="Enter Price"
                  value={expectedPrice}
                  onChange={handleExpectedPriceChange}
                  className="w-full border border-gray-300 rounded-[19px] pl-8 pr-16 py-3 text-[14px] font-semibold text-[#2450A0] placeholder-gray-400"
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-[14px]">
                  /Month
                </span>
              </div>
              {shortPrice && (
                <div className="text-xs mt-1 float-right cursor-pointer text-[#2450A0] font-normal text-[13px]">
                  {shortPrice}
                </div>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="text-[16px] font-semibold text-[#0A0909]">
                Description <span className="text-red-600">*</span>
              </label>
              <textarea
                placeholder="Write A Message"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border border-gray-300 rounded-[19px] px-4 py-3 placeholder-gray-400 resize-none h-32 text-[14px] font-semibold"
              ></textarea>
            </div>

            {/* Submit Button */}
<div className="flex justify-center">
       <button
  type="submit"
  className="w-full md:w-[469px] mx-auto block text-white text-sm font-semibold py-3 rounded-full transition-all duration-200 hover:bg-blue-700"
  style={{ backgroundColor: "#2450A0" }}
>
  <span style={{fontSize:'14px',fontWeight:'500',color:'#FFFFFF'}}>SAVE AND NEXT</span>
</button>
</div>

          </form>
        </div>
      </main>
    </div>
  );
}