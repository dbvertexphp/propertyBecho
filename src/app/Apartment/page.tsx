"use client";

import Image from "next/image";
import Header2 from "@/components/Header2";
import Footer from "@/components/Footer";
import { FaBath, FaBed, FaRulerCombined, FaMapMarkerAlt } from "react-icons/fa";
import { FiGlobe, FiHeart, FiX } from "react-icons/fi";

const properties = [
  {
    id: 1,
    price: "$280,000",
    owner: "By Owner",
    image: "/appartment.png",
    bhk: "2 BHK",
    bath: "2 BA",
    sqft: "24 sqft",
    location: "1030 Spruce St, Aurora, IL 60506",
    ownerImage: "/Owner1.png",
  },
  {
    id: 2,
    price: "$350,000",
    owner: "By Owner",
    image: "/Apartment2.png",
    bhk: "3 BHK",
    bath: "3 BA",
    sqft: "30 sqft",
    location: "215 Main St, Denver, CO 80205",
    ownerImage: "/Owner2.png",
  },
  {
    id: 3,
    price: "$400,000",
    owner: "By Owner",
    image: "/Apartment3.png",
    bhk: "4 BHK",
    bath: "4 BA",
    sqft: "40 sqft",
    location: "789 Park Ave, Miami, FL 33101",
    ownerImage: "/Owner3.png",
  },
];

export default function Details() {
  return (
    <div>
      <Header2 />

      {/* Filter Bar */}
      <div className="px-4 md:px-[115px] mt-[150px] space-y-3">
        {/* Top Row */}
        <div className="flex items-center gap-3">
          {/* Location Input */}
          <div className="flex items-center flex-1 border rounded-full px-3 py-2 bg-white shadow-sm border-[#0A090926]">
            <img src="/locationapartment.png" className="text-blue-600 mr-2 text-lg" />
            <input
              type="text"
              defaultValue="Santa Rosa, NM"
              className="flex-1 outline-none text-[16px] text-[#121828]"
            />
            <img src="/global-search.png" className="text-gray-500 cursor-pointer mr-2" />
            <FiX className="text-gray-500 cursor-pointer" />
          </div>

          {/* Heart */}
          <div className="flex items-center gap-1 bg-white shadow-sm border rounded-full px-3 py-2 cursor-pointer min-w-[50px] justify-center">
            <span className="text-sm font-medium">02</span>
            <FiHeart className="text-blue-600" />
          </div>
        </div>

        {/* Scrollable Filters */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          <button className="px-4 py-1 border rounded-full bg-white shadow-sm whitespace-nowrap text-[11px] font-semibold  text-[#2450A0]">
            3BHK
          </button>
          <button className="px-4 py-1 border rounded-full  bg-white shadow-sm whitespace-nowrap font-semibold text-[11px]  text-[#2450A0]">
            1106 sqft - 5000sqft
          </button>
          <button className="px-4 py-1 border rounded-full font-semibold bg-white shadow-sm whitespace-nowrap text-[11px]  text-[#2450A0]">
            Any property
          </button>
          <button className="flex items-center gap-1 px-4 py-1 border rounded-full font-semibold bg-white shadow-sm whitespace-nowrap text-[11px]  text-[#2450A0]">
            Sort by
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="mt-6 px-4 md:px-[115px] grid grid-cols-1 md:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-xl shadow-md overflow-hidden w-full"
          >
            {/* Image */}
            <div className="relative w-full h-[205px] md:h-[250px]">
              <Image
                src={property.image}
                alt="Property"
                fill
                className="object-cover rounded-b-2xl"
              />
            </div>

            {/* Details */}
            <div className="p-4 md:p-5">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-[16px] md:text-xl font-bold text-[#0A0909]">
                    {property.price}
                  </h2>
                  <p className="text-[12px] md:text-base text-[#000104CC]">
                    {property.owner}
                  </p>
                </div>
                <Image
                  src={property.ownerImage}
                  alt="Owner"
                  width={40}
                  height={40}
                  className="rounded-full border"
                />
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-[#0000000D] text-[13px] px-3 py-1 rounded-full flex items-center gap-1  font-medium">
                  {property.bhk}
                </span>
                <span className=" px-3 py-1 rounded-full flex items-center gap-1 bg-[#0000000D] text-[13px] font-medium">
                   {property.bath}
                </span>
                <span className=" px-3 py-1 rounded-full flex items-center gap-1 bg-[#0000000D] text-[13px] font-medium">
                   {property.sqft}
                </span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 mt-4 text-sm text-[#0A090999] font-bold" style={{ borderRadius: "13px",border: "1px solid #0000000D" }}>
                <img src="/locationcards.png" className="text-gray-400" />
                {property.location}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}