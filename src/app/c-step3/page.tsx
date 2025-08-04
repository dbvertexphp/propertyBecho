'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import Header2 from "@/components/Header2";
import {
  Building2, Home, LayoutGrid, Landmark, Tent,
  Trees, MapPinned, Layers3, Mountain
} from "lucide-react";

export default function PropertyTypeSelection() {
  const options = [
    { label: "Office", image: "/office.png" },
    { label: "Retail shop", image: "/retail.png" },
    { label: "Showroom", image: "/showroom.png" },
    { label: "Warehouse", image: "/warehouse.png" },
    { label: "Plot", image: "/plot.png" },
    { label: "Other", image: "/others.png" },
  ];

  const [selectedOption, setSelectedOption] = useState("Office");
  const [otherText, setOtherText] = useState("");
  const [error, setError] = useState("");
  const [selected, setSelected] = useState(0);

  const handleNextClick = (e: { preventDefault: () => void; }) => {
    if (selectedOption === "Other" && otherText.trim() === "") {
      e.preventDefault();
      setError("Please enter the property type.");
      return;
    }
    setError("");
    // Save selectedOption and otherText if needed
  };

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

      {/* Bubble Backgrounds */}
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

      <main className="pt-[120px] pb-12 flex justify-center relative z-10" style={{ top: '35px', paddingBottom: '120px' }}>
        <div className="w-full max-w-[650px] px-4" style={{ maxWidth: '1090px' }}>
          <h2 className="text-2xl font-bold">
            <span style={{ color: '#000000', fontWeight: '700', fontSize: '24px', lineHeight: '29px' }}>
              Property
            </span>{' '}
            <span style={{ color: '#2450A0', fontWeight: '700', fontSize: '24px', lineHeight: '29px' }}>
              Type
            </span>
          </h2>

          <p
            className="text-sm text-gray-500 mt-1 text-[15px]"
            style={{ marginTop: '12px', color: 'rgba(102, 102, 102, 1)' }}
          >
            Answer a few questions and get your no-obligation cash offer in as little as 3 minutes.
          </p>

          <div className="bg-white rounded-2xl shadow-md mt-6 p-4">
            <h3
              className="text-lg font-semibold mb-4 border-l-4 pl-3 w-[313px] h-[65px] opacity-100"
              style={{ color: 'rgba(36, 80, 160, 1)' }}
            >
              <span className="text-[#2450A0] text-2xl font-bold">C</span>
              <span
                className="font-semibold text-[20px] leading-[100%] tracking-[0]"
                style={{ color: '#0A0909', fontWeight: '600' }}
              >
                hoose Property Type would you like to sell?
              </span>
            </h3>

            <div className="grid grid-cols-3 gap-3">
              {options.map((option, index) => {
                const isLast = index === options.length - 1;
                const isIncompleteLastRow = options.length % 3 !== 0 && index >= options.length - (options.length % 3);

                return (
                  <button
                    key={index}
                    onClick={() => {
                      setSelected(index);
                      setSelectedOption(option.label);
                    }}
                    className={`
                      flex flex-col items-center justify-center rounded-xl border px-3 py-4 transition-all text-sm font-semibold
                      ${selected === index
                        ? 'bg-[#E7ECF5] border-[rgba(36,80,160,0.53)] text-[#2450A0]'
                        : 'bg-[#F7F8FA] border-transparent text-gray-700 hover:border-blue-300'}
                      ${isLast && isIncompleteLastRow && options.length % 3 === 1 ? 'col-span-1 col-start-2' : ''}
                    `}
                  >
                    <div className="mb-2">
                      <img src={option.image} alt="icon" />
                    </div>
                    <span style={{ fontWeight: '500', fontSize: '15px' }}>{option.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Show Other field only if selected */}
           {selectedOption === "Other" && (
  <div className="mt-6">
    <label className="block mb-1 text-[16px] font-medium text-[#0A0909]">
      Other <span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      placeholder="If Select Other"
      value={otherText}
      onChange={(e) => setOtherText(e.target.value)}
      className={`mt-1 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${
        error
          ? "border-red-500 focus:ring-red-500"
          : "border-gray-300 focus:ring-[#2450A0]"
      }`}
      style={{
        width: '309px',
        height: '50px',
        borderRadius: '19px',
        paddingTop: '13px',
      }}
    />
    {error && (
      <p className="text-red-500 text-sm mt-1">{error}</p>
    )}
  </div>
)}

          </div>

          <div className="text-right mt-4">
            <Link href="/c-step5" onClick={handleNextClick}>
              <Image
                src="/next.png"
                alt="Bottom Image"
                width={300}
                height={300}
                className="absolute mt-4 cursor-pointer left-1/2 -translate-x-1/2 lg:left-[940px] lg:translate-x-0"
              />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
