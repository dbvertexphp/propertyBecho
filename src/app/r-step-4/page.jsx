"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header2 from "@/components/Header2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Building2,
  Home,
  LayoutGrid,
  Landmark,
  Tent,
  Trees,
  MapPinned,
  Layers3,
  Mountain,
} from "lucide-react";

export default function PropertyDetail() {
  const options = [
    { label: "Apartment", icon: <Building2 size={24} /> },
    { label: "Independent House", icon: <Home size={24} /> },
    { label: "Builder Floor", icon: <LayoutGrid size={24} /> },
    { label: "Villa", icon: <Landmark size={24} /> },
    { label: "Penthouse", icon: <Tent size={24} /> },
    { label: "Studio", icon: <Trees size={24} /> },
    { label: "Plot", icon: <MapPinned size={24} /> },
    { label: "Land", icon: <Layers3 size={24} /> },
    { label: "Farm House", icon: <Mountain size={24} /> },
    { label: "Agricultural Land", icon: <Trees size={24} /> },
  ];

  const [selected, setSelected] = useState(0);
  const [selectedYear, setSelectedYear] = useState(null);
  const [yearOpen, setYearOpen] = useState(false);

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

      {/* Background Bubbles */}
      <div className="relative">
        <img
          src="/bubble.png"
          alt="Bubble 2"
          className="absolute top-0 right-0 w-[118px] md:w-[190px] z-0 opacity-80"
        />
        <img
          src="/bubble1.png"
          alt="Bubble 1"
          className="absolute top-0 right-0 w-[90px] md:w-[134px] z-10"
        />
      </div>

      <Header2 />

      <main
        className="pt-[118px] pb-12 flex justify-center relative z-10"
        style={{ top: "35px", paddingBottom: "118px" }}
      >
        <div className="w-[87%] mx-auto">
          <h2 className="font-bold text-xl md:text-2xl">
            <span className="text-black font-bold">Property</span>
            <span className="text-[#2450A0] font-bold"> Details</span>
          </h2>

          <p className="mt-3 text-sm md:text-base text-gray-600">
            Answer a few questions and get your no-obligation cash offer in as
            little as 3 minutes.
          </p>

          {/* Form Box */}
          <div className="bg-white rounded-2xl shadow-md mt-6 p-6 space-y-4">
            {/* Building/Project/Society */}
            <div>
              <label className="block font-medium mb-1 text-base md:text-lg text-[#0A0909]">
                Building/Project/Society
              </label>
              <input
                type="text"
                placeholder="Type Here And Select"
                className="w-full border rounded-2xl px-4 py-3 placeholder:text-gray-400"
              />
            </div>

            {/* Plot Area & Length */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold mb-1 text-base md:text-lg text-[#0A0909]">
                  Plot Area <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Plot Area"
                  className="w-full border rounded-2xl px-4 py-3 placeholder:text-gray-400"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1 text-base md:text-lg text-[#0A0909]">
                  Length <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Length"
                  className="w-full border rounded-2xl px-4 py-3 placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Width & Built Area */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold mb-1 text-base md:text-lg text-[#0A0909]">
                  Width <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Width"
                  className="w-full border rounded-2xl px-4 py-3 placeholder:text-gray-400"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1 text-base md:text-lg text-[#0A0909]">
                  Built area
                </label>
                <input
                  type="text"
                  placeholder="Built area"
                  className="w-full border rounded-2xl px-4 py-3 placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Area Unit */}
            <div>
              <label className="block font-semibold mb-1 text-base md:text-lg text-[#0A0909]">
                Area Unit <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select className="w-full border rounded-2xl px-4 py-2.5 text-gray-900 appearance-none pr-10">
                  <option value="">Area Unit</option>
                  <option value="sqft">sq ft</option>
                  <option value="sqyd">sq yd</option>
                  <option value="sqm">sq m</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <img
                    src="/arrow-down.png"
                    alt="Dropdown Icon"
                    className="w-6 h-6 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Road width */}
            <div>
              <label className="block font-semibold mb-1 text-base md:text-lg text-[#0A0909]">
                Road width in front
              </label>
              <input
                type="text"
                placeholder="Road width in front"
                className="w-full border rounded-2xl px-4 py-3 placeholder:text-gray-400"
              />
            </div>

            {/* Year Built with Calendar */}
            <div>
              <label className="block font-semibold mb-1 text-base md:text-lg text-[#0A0909]">
                Year built
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Select Year Built"
                  readOnly
                  value={selectedYear ? selectedYear.getFullYear() : ""}
                  className="w-full border rounded-2xl px-4 py-3 pr-12 placeholder:text-gray-400 cursor-pointer"
                  onClick={() => setYearOpen(!yearOpen)}
                />
                <div
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                  onClick={() => setYearOpen(!yearOpen)}
                >
                  <img
                    src="/calendar-2.png"
                    alt="Calendar Icon"
                    className="w-6 h-6 object-contain"
                  />
                </div>

                {yearOpen && (
                  <div className="absolute z-50 mt-1">
                    <DatePicker
                      selected={selectedYear}
                      onChange={(date) => {
                        setSelectedYear(date);
                        setYearOpen(false);
                      }}
                      showYearPicker
                      dateFormat="yyyy"
                      inline
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Furnish Type */}
            <div>
              <label className="block font-semibold mb-1 text-base md:text-lg text-[#0A0909]">
                Furnish Type
              </label>
              <div className="relative">
                <select className="w-full border rounded-2xl px-4 py-2.5 text-gray-900 appearance-none pr-10">
                  <option value="">Furnish Type</option>
                  <option value="furnished">Furnished</option>
                  <option value="semi">Semi-furnished</option>
                  <option value="unfurnished">Unfurnished</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <img
                    src="/arrow-down.png"
                    alt="Dropdown Icon"
                    className="w-6 h-6 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <div className="mt-8 mb-7 flex justify-center lg:justify-end">
            <Link href="/r-step-5">
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
