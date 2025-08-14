"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header2 from "@/components/Header2";
import Link from "next/link";

export default function BuilderOrInvestor() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [location, setLocation] = useState<string>("");
  const [selected, setSelected] = useState<"Investor" | "Builder">("Builder");

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
        <div className="w-full max-w-[87%] px-4" style={{ maxWidth: "1090px" }}>
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

          <h2 className="text-2xl font-bold ml-[-150px]" style={{ marginTop: "30px" }}>
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
              Are you a
            </span>{" "}
            <span
              style={{
                color: "#2450A0",
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "29px",
              }}
            >
              builder or investor?
            </span>
          </h2>

          <p
            className="text-sm text-gray-500 mt-1 text-[15px] ml-[-150px]"
            style={{
              marginTop: "12px",
              color: "rgba(102, 102, 102, 1)",
              fontSize: "14px",
              fontWeight: "400",
            }}
          >
            Explore builder and investor deals in few steps.{" "}
          </p>

          <div
            className="bg-white rounded-2xl shadow-md p-4 relative pb-12 sm:pb-24"
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
                color: "transpaBuilder",
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
                onClick={() => setSelected("Builder")}
                className={`relative rounded-2xl h-[76px] w-[146px] overflow-visible flex flex-col items-center justify-end pt-16 cursor-pointer transition-all duration-200
    ${
      isSelected("Builder")
        ? "border-1 border-[#2450A0] bg-white rounded-[21px] text-black"
        : "border-1 border-[#a9a9a9] bg-white rounded-[21px]"
    }`}
                style={{
                  paddingBottom: "8px",
                  width: "200px",
                  height: "89px",
                }}
              >
                <Image
                  src="/collaboration/builder.png"
                  alt="Residential"
                  width={120}
                  height={100}
                />
                <p
                  style={{
                    width: "96px",
                    height: "24px",
                    fontWeight: 500,
                    fontSize: "15px",
                    marginLeft: "50px",
                    color: isSelected("Builder")
                      ? "#2450A0"
                      : "rgb(110 116 133)",
                  }}
                >
                  Builder
                </p>
              </div>

              {/* COMMERCIAL */}
              <div
                onClick={() => setSelected("Investor")}
                className={`relative rounded-2xl h-[76px] w-[146px] overflow-visible flex flex-col items-center justify-end pt-16 cursor-pointer transition-all duration-200
    ${
      isSelected("Investor")
        ? "border-1 border-[#2450A0] bg-white rounded-[21px]"
        : "border-1 border-[#a9a9a9] bg-white rounded-[21px]"
    }`}
                style={{
                  paddingBottom: "8px",
                  width: "200px",
                  height: "89px",
                }}
              >
                <Image
                  src="/collaboration/investor.png"
                  alt="Commercial"
                  width={120}
                  height={43}
                />
                <p
                  style={{
                    width: "96px",
                    height: "24px",
                    fontWeight: 500,
                    marginLeft: "63px",
                    fontSize: "15px",
                    color: isSelected("Investor")
                      ? "#2450A0"
                      : "rgb(110 116 133)",
                  }}
                >
                  Investor
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
