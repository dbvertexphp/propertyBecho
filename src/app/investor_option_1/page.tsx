"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header2 from "@/components/Header2";
import Link from "next/link";

export default function BuilderOrInvestor() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selected, setSelected] = useState<"Investor" | "Builder">("Builder");

  // Location search states
  const allLocations = [
    "Mumbai",
    "Mumbala",
    "Green Park",
    "Indore",
    "Delhi",
    "Pune",
  ];
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

  const isSelected = (type: "Investor" | "Builder") => selected === type;

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

      {/* Backgrounds */}
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
        <div
          className="w-full max-w-[650px] px-4"
          style={{ maxWidth: "1299px" }}
        >
          <div
            className="w-[50px] h-[50px] items-center justify-center border border-[#E6E6E6] rounded-[12px] bg-white block md:hidden"
            style={{ border: "solid #0000001C", borderRadius: "16px" }}
          >
            <img
              src="/facilities/call.png"
              alt="Call Icon"
              className="w-[29px] h-[29px]"
            />
          </div>

          <h2 className="text-2xl font-bold" style={{ marginTop: "30px" }}>
            <span
              style={{
                color: "#000000",
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "29px",
                width: "343px",
                height: "58px",
              }}
            >
              Ready to find a
            </span>{" "}
            <span
              style={{
                color: "#2450A0",
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "29px",
              }}
            >
              suitable builder
            </span>
            &nbsp; for your plot
          </h2>

          <p
            className="text-sm text-gray-500 mt-1 text-[15px]"
            style={{
              marginTop: "12px",
              color: "rgba(102, 102, 102, 1)",
              fontSize: "14px",
              fontWeight: "400",
            }}
          >
            Partner with top-tier builders curated for your location, budget,
            and project goals.
          </p>

          {/* Address Input */}
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

          {/* Plot Size */}
          <div className="mt-4">
            <label
              className="block text-[15px] font-semibold text-gray-900 mb-1"
              style={{ fontSize: "16px" }}
            >
              Select Plot Siz<span className="text-red-500">*</span>
            </label>
            <div
              className="flex items-center border border-[#E5E7EB] rounded-full px-4 py-3 bg-white"
              style={{ borderRadius: "15px" }}
            >
              <input
                type="text"
                placeholder="Enter Plot Area"
                className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400"
              />
              <div className="relative">
                <select className="appearance-none pl-3 pr-6 py-1 rounded-full bg-[#F9FAFB] border border-[#E5E7EB] text-gray-700 text-sm outline-none cursor-pointer">
                  <option value="sqft">sqft</option>
                  <option value="sqm">sqm</option>
                </select>
                {/* Dropdown Arrow */}
                <svg
                  className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="text-right mt-4">
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
