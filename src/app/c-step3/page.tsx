"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header2 from "@/components/Header2";

export default function PropertyTypeSelection() {
  const options = [
    { label: "Office", image: "/office.png" },
    { label: "Retail shop", image: "/retail.png" },
    { label: "Showroom", image: "/showroom.png" },
    { label: "Warehouse", image: "/warehouse.png" },
    { label: "Plot", image: "/plot.png" },
    { label: "Other", image: "/others.png" },
    { label: "Office", image: "/Broker/office.png" },
    { label: "Retail Shop", image: "/Broker/office.png" },
    { label: "Showroom", image: "/Broker/showroom.png" },
    { label: "Warehouse", image: "/Broker/warehouse.png" },
    { label: "Plot", image: "/Broker/Tiny.png" },
    { label: "Others", image: "/yurt.png" },
    { label: "Warehouse", image: "/warehouse.png" },
    { label: "Plot", image: "/plot.png" },
    { label: "Other", image: "/others.png" },
  ];

  const [selectedOption, setSelectedOption] = useState("Office");
  const [otherText, setOtherText] = useState("");
  const [error, setError] = useState("");
  const [selected, setSelected] = useState(0);

  const handleNextClick = (e: { preventDefault: () => void }) => {
    if (selectedOption === "Other" && otherText.trim() === "") {
      e.preventDefault();
      setError("Please enter the property type.");
      return;
    }
    setError("");
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

      {/* Background */}
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
        <div className="w-full max-w-[85%] mx-auto">
          {/* Title */}
          <h2 className="text-2xl font-bold">
            <span className="text-black font-bold text-[26px] leading-[29px]">
              Property
            </span>{" "}
            <span className="text-[#2450A0] font-bold text-[26px] leading-[29px]">
              Type
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-sm md:text-base text-[rgba(102,102,102,1)] font-normal">
            Answer a few questions and get your no-obligation cash offer in as{" "}
            <span className="font-semibold">little as 3 minutes.</span>
          </p>

          {/* Card */}
          <div className="bg-white rounded-2xl shadow-md mt-10 p-4">
            <h3
              className="border-l-4 pl-3 mb-4 font-semibold text-base md:text-2xl whitespace-normal md:whitespace-nowrap"
              style={{ borderColor: "#2450A0" }}
            >
              <span className="text-[#2450A0] font-bold">C</span>
              <span className="text-[#0A0909] font-semibold">
                hoose Property Type would you like to sell?
              </span>
            </h3>

            {/* Scrollable list */}
            <div className="max-h-[400px] overflow-y-auto pr-1">
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
                {options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelected(index);
                      setSelectedOption(option.label);
                    }}
                    className={`flex flex-col items-center justify-center rounded-xl border px-3 py-4 transition-all
                      ${
                        selected === index
                          ? "bg-[#E7ECF5] border-[rgba(36,80,160,0.53)] text-[#2450A0]"
                          : "bg-[#F7F8FA] border-transparent text-gray-700 hover:border-blue-300"
                      }
                    `}
                  >
                    <div className="mb-2">
                      <img
                        src={option.image}
                        alt={option.label}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <span className="font-medium text-sm lg:text-base text-center">
                      {option.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Show "Other" input */}
            {selectedOption === "Other" && (
              <div className="mt-6">
                <label className="block mb-1 text-[16px] font-medium text-[#0A0909]">
                  Other <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Please Specify"
                  value={otherText}
                  onChange={(e) => setOtherText(e.target.value)}
                  className={`mt-1 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${
                    error
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-[#2450A0]"
                  }`}
                  style={{
                    width: "300px",
                    height: "50px",
                    borderRadius: "19px",
                    paddingTop: "13px",
                  }}
                />
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
              </div>
            )}
          </div>

          {/* Next Button */}
          <div className="mt-8 flex justify-center lg:justify-end">
            <Link href="/c-step5" onClick={handleNextClick}>
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
