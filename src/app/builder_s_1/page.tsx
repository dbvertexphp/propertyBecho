"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header2 from "@/components/Header2";
import Link from "next/link";

export default function BuilderOrInvestor() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selected, setSelected] = useState<"Investor" | "Builder">("Builder");

  // Budget states
  const [minBudget, setMinBudget] = useState(1); // 1 crore
  const [maxBudget, setMaxBudget] = useState(100); // 100 crore

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxBudget - 1);
    setMinBudget(value);
  };
  const allLocations = ["Mumbai", "Mumbala", "Green Park", "Indore", "Delhi", "Pune","Shujalpur"];
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const filteredSuggestions = allLocations.filter(
    (loc) =>
      loc.toLowerCase().includes(inputValue.toLowerCase()) &&
      !tags.includes(loc) &&
      inputValue.trim() !== ""
  );

  const handleSelectSuggestion = (location: string) => {
    setTags([...tags, location]);
    setInputValue("");
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };
  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minBudget + 1);
    setMaxBudget(value);
  };

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
        className="pt-[120px] pb-12 flex justify-center relative z-10"
        style={{ top: "37px", paddingBottom: "120px" }}
      >
        <div className="w-full max-w-[650px] px-4" style={{ maxWidth: "1299px" }}>
          {/* Mobile call icon */}
          <div
            className="w-[50px] h-[50px] flex items-center justify-center border border-[#E6E6E6] rounded-[12px] bg-white block md:hidden"
            style={{ border: "solid #0000001C", borderRadius: "16px" }}
          >
            <img
              src="/facilities/call.png"
              alt="Call Icon"
              className="w-[29px] h-[29px]"
            />
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-bold mt-[30px]">
            <span
              style={{
                color: "#000000",
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "29px",
              }}
            >
              Start Your
            </span>{" "}
            <span
              style={{
                color: "#2450A0",
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "29px",
              }}
            >
              Builder Profile
            </span>
          </h2>

          <p
            className="text-sm text-gray-500 mt-3 text-[14px] font-normal"
            style={{
              color: "rgba(102, 102, 102, 1)",
            }}
          >
            Share a few quick details to get featured and grow your visibility in the real estate network.
          </p>

          {/* Double Range Slider */}
          
<div className="mt-4" style={{ marginTop: "45px" }}>
            <label
              className="block text-[15px] font-semibold text-gray-900 mb-1"
              style={{ fontSize: "16px" }}
            >
              Your Address<span className="text-red-500">*</span>
            </label>

            <div className="flex items-center gap-2 border border-[#E5E7EB] rounded-2xl px-3 py-2 bg-white relative">
              {/* Location Icon */}
              <div className="flex items-center justify-center w-[34px] h-[34px] bg-[#F5F7FA] rounded-full">
                <Image
                  src="/collaboration/location.png"
                  alt="Location"
                  width={25}
                  height={20}
                />
              </div>

              {/* Tags + Input */}
              <div className="flex flex-wrap gap-2 flex-1">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 px-3 py-1 border border-[#2450A0] rounded-full bg-white text-[#2450A0] text-sm"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="text-[#2450A0] font-bold"
                    >
                      <img src="/collaboration/close_circle.png" alt="" />
                    </button>
                  </span>
                ))}
                <input
  type="text"
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
  className="outline-none text-sm text-gray-700 flex-1"
  autoComplete="off"
/>

              </div>

              {/* Search Icon */}
              <button
                type="button"
                className="flex items-center justify-center w-[45px] h-[44px] bg-[#2450A0] rounded-full"
                style={{ borderRadius: "12px" }}
              >
                <Image
                  src="/collaboration/search.png"
                  alt="Search"
                  width={35}
                  height={35}
                />
              </button>

              {/* Suggestions Dropdown */}
              {filteredSuggestions.length > 0 && (
                <div className="absolute top-full left-[60px] mt-1 w-[200px] bg-white border border-gray-200 rounded-lg shadow-md z-50">
                  {filteredSuggestions.map((loc) => (
                    <div
                      key={loc}
                      onClick={() => handleSelectSuggestion(loc)}
                      className="px-3 py-2 cursor-pointer hover:bg-gray-100 text-sm"
                    >
                      {loc}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <style>
            {`
              input[type="range"] {
                -webkit-appearance: none;
                appearance: none;
                width: 100%;
                background: transparent;
                pointer-events: auto;
              }
              input[type="range"]::-webkit-slider-thumb {
                -webkit-appearance: none;
                width: 18px;
                height: 18px;
                background: #0052CC;
                border-radius: 50%;
                cursor: pointer;
                border: none;
                position: relative;
                z-index: 3;
              }
              input[type="range"]::-moz-range-thumb {
                width: 18px;
                height: 18px;
                background: #0052CC;
                border-radius: 50%;
                cursor: pointer;
                border: none;
                position: relative;
                z-index: 3;
              }
            `}
          </style>

          <div className="mt-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-2">
              <label className="font-semibold text-[16px]">Budget in ₹</label>
              <button
                onClick={() => {
                  setMinBudget(1);
                  setMaxBudget(100);
                }}
                className="text-[#EB174B] font-semibold text-[13px] border border-[#EB174B] rounded-full px-3 py-[2px]"
              >
                CLEAR
              </button>
            </div>

            {/* Slider Track */}
            <div className="relative w-full h-6">
              {/* Track background */}
              <div className="absolute top-1/2 left-0 right-0 h-[4px] bg-gray-300 rounded-full" />
              {/* Highlighted range */}
              <div
                className="absolute top-1/2 h-[4px] bg-[#0052CC] rounded-full"
                style={{
                  left: `${(minBudget / 100) * 100}%`,
                  right: `${100 - (maxBudget / 100) * 100}%`,
                }}
              />
              {/* Min handle */}
             <style>
{`
  .range-red {
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    pointer-events: all;
  }

  /* Chrome, Safari, Edge */
  .range-red::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    background: white;
    border: 2px solid red;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    z-index: 10;
  }

  /* Firefox */
  .range-red::-moz-range-thumb {
    width: 18px;
    height: 18px;
    background: white;
    border: 2px solid red;
    border-radius: 50%;
    cursor: pointer;
  }
`}
</style>

<input
  type="range"
  min="1"
  max="100"
  value={minBudget}
  onChange={handleMinChange}
  className="absolute w-full bg-transparent range-red"
  style={{ zIndex: minBudget > maxBudget - 10 ? 5 : 3, marginTop: '4px' }}
/>

<input
  type="range"
  min="1"
  max="100"
  value={maxBudget}
  onChange={handleMaxChange}
  className="absolute w-full bg-transparent range-red"
  style={{ marginTop: '4px' }}
/>

            </div>

            {/* Min & Max labels */}
            <div className="flex justify-between mt-3">
              <div className="flex items-center gap-1 border border-[#E0E0E0] rounded-full overflow-hidden text-sm" style={{
  padding: '3px 12px 3px 3px',
  borderRadius: '10px'
}}
>
  {/* Left side with gray background */}
  <span className="bg-[#F5F5F5] px-3 py-1 text-gray-600 font-medium" style={{borderRadius:'10px'}}>
    Min
  </span>
  {/* Right side with blue value */}
  <span className="px-3 py-1 text-[#2450A0] font-semibold">
    ₹{minBudget}cr
  </span>
</div>

              <div className="flex items-center gap-1 border border-[#E0E0E0] rounded-full overflow-hidden text-sm" style={{
  padding: '3px 12px 3px 3px',
  borderRadius: '10px'
}}
>
  {/* Left side with gray background */}
  <span className="bg-[#F5F5F5] px-3 py-1 text-gray-600 font-medium" style={{borderRadius:'10px'}}>
    Min
  </span>
  {/* Right side with blue value */}
  <span className="px-3 py-1 text-[#2450A0] font-semibold">
    ₹{maxBudget}cr
  </span>
</div>


            </div>
          </div>
          {/* Next Button */}
          <div className="text-right mt-8">
            <Link href="/c-step2">
              <Image
                src="/next.png"
                alt="Bottom Image"
                width={300}
                height={300}
                className="absolute mt-4 cursor-pointer left-1/2 -translate-x-1/2 lg:left-[1069px] lg:translate-x-0"
              />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
