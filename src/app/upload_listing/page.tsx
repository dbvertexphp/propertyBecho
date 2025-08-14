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
    
    <div
      className="relative text-gray-900 bg-gray-50 min-h-screen overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
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
        
        <div className="w-full px-4" style={{ maxWidth: "1090px" }}>
      <div className="w-[50px] h-[50px] flex items-center justify-center border border-[#E6E6E6] rounded-[12px] bg-white" style={{border:'solid #0000001C',borderRadius:'16px'}}>
    <img
      src="/facilities/call.png"
      alt="Call Icon"
      className="w-[29px] h-[29px]"
    />
  </div>
          <h2 className="text-2xl font-[700] text-black" style={{marginTop:'33px'}}>Upload Listing</h2>
          <p className="text-sm text-gray-500 mt-3">
            Fill out the form with your requirements and we’ll connect you with
            properties that match your needs fast, easy, and reliable.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-6 space-y-6">

            {/* Property Title */}
            <div>
              <label style={{ fontSize: "16px", fontWeight: "600", color: "#0A0909" }}>
                Property Title <span style={{ color: "#fc0000ff" }}>*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Property Title"
                value={propertyTitle}
                onChange={(e) => setPropertyTitle(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 placeholder-gray-400"
                style={{
                  borderRadius: "19px",
                  fontSize: "14px",
                  fontWeight: 600
                }}
              />
            </div>

            {/* Expected Price */}
            <div>
              <label style={{ fontSize: "16px", fontWeight: "600", color: "#0A0909" }}>
                Expected Price <span style={{ color: "#fc0000ff" }}>*</span>
              </label>

              <div className="relative">
                <span
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 font-semibold text-[16px]"
                  style={{ color: "#2450A0" }}
                >
                  ₹
                </span>

                <input
                  type="text"
                  placeholder="Enter Price"
                  value={expectedPrice}
                  onChange={handleExpectedPriceChange}
                  className="w-full border border-gray-300 rounded-lg pl-8 pr-16 py-3 placeholder-gray-400"
                  style={{
                    borderRadius: "19px",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#2450A0"
                  }}
                />

                <span
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"
                  style={{ fontSize: "14px", fontWeight: "400" }}
                >
                  /Month
                </span>
              </div>

              {/* Dynamic Short Price */}
              {shortPrice && (
                <div className="text-xs mt-1 cursor-pointer" style={{ float: "right" }}>
                  <span style={{ fontSize: "13px", fontWeight: "400", color: "#2450A0" }}>
                    {shortPrice}
                  </span>
                </div>
              )}
            </div>

            {/* Description */}
            <div>
              <label style={{ fontSize: "16px", fontWeight: "600", color: "#0A0909" }}>
                Description <span style={{ color: "#fc0000ff" }}>*</span>
              </label>
              <textarea
                placeholder="Write A Message"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 placeholder-gray-400 resize-none h-32"
                style={{
                  borderRadius: "19px",
                  fontSize: "14px",
                  fontWeight: 600
                }}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full text-white text-sm font-semibold py-3 rounded-full transition-all duration-200 hover:bg-blue-700"
                style={{ backgroundColor: "#2450A0" }}
              >
                SAVE AND NEXT
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
