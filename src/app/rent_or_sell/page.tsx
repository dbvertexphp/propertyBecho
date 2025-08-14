"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header2 from "@/components/Header2";
import Link from "next/link";

export default function RentOrSell() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [location, setLocation] = useState<string>("");
  const [selected, setSelected] = useState<"SELL" | "RENT">("RENT");

  const isSelected = (type: "SELL" | "RENT") => selected === type;

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
          style={{ maxWidth: "1090px" }}
        >
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
              Tell us a bit about
            </span>{" "}
            <span
              style={{
                color: "#2450A0",
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "29px",
              }}
            >
              your Property
            </span>
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
            Answer a few questions and get your no-obligation cash offer in as{" "}
            <span style={{ fontWeight: "600" }}>little as 3 minutes.</span>
          </p>

          <div
            className="bg-white rounded-2xl shadow-md p-4 relative pb-24"
            style={{
              marginTop: "30px",
              borderRadius: "35px",
              border: "1px solid #e5d6d6ba",
              overflow: "hidden", // so background doesn't overflow
            }}
          >
            {/* Background image */}
            <img
              src="/rent/bg-shape.png"
              alt="Background Shape"
              style={{
                color: "transparent",
                position: "absolute",
                height: "100%",
                width: "66%",
                inset: 0,
              }}
              className="pointer-events-none select-none"
            />

            <div className="flex flex-row justify-center gap-4 mt-20 relative z-10">
              {/* RESIDENTIAL */}
              <div
                onClick={() => setSelected("RENT")}
                className={`relative rounded-2xl h-[76px] w-[146px] overflow-visible flex flex-col items-center justify-end pt-16 cursor-pointer transition-all duration-200
        ${
          isSelected("RENT")
            ? "border-1 border-[#2450A0] bg-white rounded-[21px] text-[rgb(0,0,0)]"
            : "border-1 border-[#a9a9a9] bg-white-100 rounded-[21px]"
        }`}
                style={{
                  paddingBottom: "8px",
                  width: "200px",
                  height: "76px",
                }}
              >
                <Image
                  src="/rent/rentorsell.png"
                  alt="Residential"
                  width={120}
                  height={100}
                />
                <p
                  style={{
                    width: "96px",
                    height: "24px",
                    fontWeight: 500,
                    fontSize: "16px",
                    marginLeft: "50px",
                    color: isSelected("RENT") ? "#2450A0" : "rgb(110 116 133)",
                  }}
                >
                  RENT
                </p>
              </div>

              {/* COMMERCIAL */}
              <div
                onClick={() => setSelected("SELL")}
                className={`relative rounded-2xl h-[76px] w-[146px] overflow-visible flex flex-col items-center justify-end pt-16 cursor-pointer transition-all duration-200
        ${
          isSelected("SELL")
            ? "border-1 border-[#2450A0] bg-white rounded-[21px]"
            : "border-1 border-[#a9a9a9] bg-white-100 rounded-[21px]"
        }`}
                style={{
                  paddingBottom: "8px",
                  width: "200px",
                  height: "76px",
                }}
              >
                <Image
                  src="/rent/rentorsell1.png"
                  alt="Commercial"
                  width={120}
                  height={43}
                />
                <p
                  style={{
                    width: "96px",
                    height: "24px",
                    fontWeight: 600,
                    marginLeft: "63px",
                    fontSize: "16px",
                    color: isSelected("SELL") ? "#2450A0" : "rgb(110 116 133)",
                  }}
                >
                  SELL
                </p>
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
                className="
                  absolute mt-4 cursor-pointer
                  left-1/2 -translate-x-1/2
                  lg:left-[940px] lg:translate-x-0
                "
              />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
