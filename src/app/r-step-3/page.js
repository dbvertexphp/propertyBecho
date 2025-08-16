"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header2 from "@/components/Header2";

export default function PropertyTypeSelection() {
  const options = [
    { label: "Apartment", image: "/apartment (2).png" },
    { label: "Independent House", image: "/group.png" },
    { label: "Builder Floor", image: "/buiding_floor.png" },
    { label: "Villa", image: "/villa.png" },
    { label: "Penthouse", image: "/pentahouse.png" },
    { label: "Studio", image: "/studio.png" },
    { label: "Plot", image: "/plot.png" },
    { label: "Land", image: "/land.png" },
    { label: "Farm House", image: "/farm.png" },
    { label: "Agricultural Land", image: "/Parking.png" },
    { label: "Apartment", image: "/apartment (2).png" },
    { label: "Independent House", image: "/group.png" },
    { label: "Builder Floor", image: "/buiding_floor.png" },
    { label: "Villa", image: "/villa.png" },
    { label: "Penthouse", image: "/pentahouse.png" },
    { label: "Studio", image: "/studio.png" },
    { label: "Plot", image: "/plot.png" },
    { label: "Land", image: "/land.png" },
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
        style={{ top: "35px", paddingBottom: "120px" }}
      >
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
              Property
            </span>{" "}
            <span
              style={{
                color: "#2450A0",
                fontWeight: "700",
                fontSize: "26px",
                lineHeight: "29px",
              }}
            >
              Type
            </span>
          </h2>

          <p
            className="text-sm text-gray-500 mt-1 text-[15px]"
            style={{ marginTop: "12px", color: "rgba(102, 102, 102, 1)" }}
          >
            Answer a few questions and get your no-obligation cash offer in as
            little as 3 minutes.
          </p>

          <div className="bg-white rounded-2xl shadow-md mt-6 p-4">
            <h3
              className="mb-4 border-l-4 pl-3 text-lg md:text-2xl font-semibold mt-mt-1"
              style={{ borderColor: "#2450A0" }}
            >
              <span className="font-[700] text-[rgba(36,80,160,1)]">C</span>
              <span className="font-[600] text-[rgba(10,9,9,1)] md:whitespace-nowrap">
                hoose property type you would like to sell?
              </span>
            </h3>

            {/* Desktop layout: exactly 6 columns */}
            <div className="hidden lg:grid grid-cols-6 gap-3">
              {options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setSelected(index)}
                  className={`flex flex-col items-center justify-center rounded-xl border px-3 py-4 transition-all text-sm font-semibold
                    ${
                      selected === index
                        ? "bg-[#E7ECF5] border-[rgba(36,80,160,0.53)] text-[#2450A0]"
                        : "bg-[#F7F8FA] border-transparent text-gray-700 hover:border-blue-300"
                    }`}
                >
                  <div className="mb-2">
                    <img
                      src={option.image}
                      alt="icon"
                      className="w-9 h-6 object-contain"
                    />
                  </div>
                  <span style={{ fontWeight: "500" }}>{option.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile layout */}
            <div className="grid grid-cols-3 gap-3 lg:hidden">
              {options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setSelected(index)}
                  className={`flex flex-col items-center justify-center rounded-xl border px-3 py-4 transition-all text-sm font-semibold
                    ${
                      selected === index
                        ? "bg-[#E7ECF5] border-[rgba(36,80,160,0.53)] text-[#2450A0]"
                        : "bg-[#F7F8FA] border-transparent text-gray-700 hover:border-blue-300"
                    }`}
                >
                  <div className="mb-2">
                    <img
                      src={option.image}
                      alt="icon"
                      className="w-9 h-9 object-contain"
                    />
                  </div>
                  <span className="text-[12px]" style={{ fontWeight: "500" }}>{option.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center lg:justify-end">
            <Link href="/r-step-4">
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