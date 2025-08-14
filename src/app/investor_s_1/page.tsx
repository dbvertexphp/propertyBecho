"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header2 from "@/components/Header2";
import Link from "next/link";

export default function BuilderOrInvestor() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [location, setLocation] = useState<string>("");
  const [selected, setSelected] = useState<"Investor" | "Builder">(
    "Builder"
  );

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
        
        <div className="w-full max-w-[87%] mx-auto px-4" style={{ maxWidth: "1089px" }}>
       <div 
  className="w-[50px] h-[50px] flex items-center justify-center border border-[#E6E6E6] rounded-[12px] bg-white md:hidden"
  style={{ border: 'solid #0000001C', borderRadius: '16px' }}
>
  <img
    src="/facilities/call.png"
    alt="Call Icon"
    className="w-[29px] h-[29px]"
  />
</div>

            
          <h2 className="text-2xl font-bold ml-[-150px]" style={{marginTop:'30px'}}>
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
             Investor Profile

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
          Share a few quick details to discover curated investment opportunities that fit your goals.{" "}
            
          </p>
           <h1 style={{fontSize:'18px',fontWeight:'600',marginTop:'30px'}}>Choose Any One</h1>
            {/* yaha de do bhai */}
             {/* Radio Button Options */}
<div className="flex flex-col gap-3 mt-4">
  {[
    "Ready to find a suitable builder for your plot",
    "Looking for a builder and plot to collaborate",
  ].map((option) => {
    const isSelected = selectedType === option;
    return (
      <div
        key={option}
        onClick={() => setSelectedType(option)}
        className={`flex items-center gap-4 px-4 py-4 rounded-2xl border font-extrabold cursor-pointer transition-all ${
          isSelected
            ? "bg-[#E7ECF5] border-[#2450A0] text-[#2450A0]"
            : "bg-white border-[#E5E7EB] text-[#121828]/60 hover:bg-[#f5faff]"
        }`}
        style={{ borderWidth: "1.6px", maxWidth: "829px" }}
      >
        {/* Custom Radio */}
        <div className="flex items-center justify-center w-5 h-5">
          <div
            style={{
              padding: "14px",
              borderRadius: "12px",
              backgroundColor: "white",
            }}
            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
              isSelected ? "border-[#2450A0]" : "border-[#D1D5DB]"
            }`}
          >
            <div
              style={{ padding: "7px", borderRadius: "3px" }}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                isSelected
                  ? "bg-[#2450A0] shadow-[0_1px_6px_0_#c192f1]"
                  : "bg-[#E5E7EB]"
              }`}
            ></div>
          </div>
        </div>
        <span style={{fontSize:'14px',fontWeight:'600'}}>{option}</span>
      </div>
    );
  })}
</div>


          <div className="text-right mt-4">
            <Link href="#">
              <Image
                src="/next.png"
                alt="Bottom Image"
                width={300}
                height={300}
                className="
                  absolute mt-4 cursor-pointer
                  left-1/2 -translate-x-1/2
                  lg:left-[799px] lg:translate-x-0
                "
              />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
