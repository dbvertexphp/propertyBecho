"use client";
import Image from "next/image";
import Header2 from "@/components/Header2";
import Link from "next/link";
import React, { useState, useRef } from "react";

export default function Page1() {
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number): void => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // only last character
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div
      className="relative text-gray-900 bg-gray-50 min-h-screen overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      {/* Bubbles */}
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
        style={{ top: "35px" }}
      >
        <div className="w-full max-w-[1090px] px-4 pb-[100px]">
          {/* Call Icon (mobile only) */}
          <div className="flex justify-start mt-6">
            <div
              className="md:hidden w-[60px] h-[60px] flex items-center justify-center border border-[#E6E6E6] rounded-[12px] bg-white"
              style={{ border: "solid #0000001C", borderRadius: "20px" }}
            >
              <img
                src="/facilities/call.png"
                alt="Call Icon"
                className="w-[29px] h-[29px]"
              />
            </div>
          </div>

          {/* OTP Section (same layout for mobile + desktop) */}
          <div className="flex items-center justify-center mt-10 md:mt-[-120px] min-h-[400px] md:min-h-screen">
            <div className="bg-transparent md:bg-white md:rounded-[70px] md:shadow-md md:p-8 md:max-w-[600px] w-full">
              {/* Heading */}
              <div className="text-center">
                <h1 className="text-black text-[24px] md:text-[28px] font-semibold">
                  Welcome back
                </h1>
                <div className="flex items-baseline gap-2 justify-center">
                  <h2 className="text-[#2450A0] text-[24px] md:text-[28px] font-bold">
                    Sign in
                  </h2>
                  <span className="text-black text-[24px] md:text-[28px] font-bold">
                    to continue!
                  </span>
                </div>
              </div>

              <p className="mt-5 text-center text-[14px] md:text-[16px] text-[#666666]">
                Enter the verification code we just sent on your phone number
              </p>

              {renderOtpForm()}
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  // OTP form
  function renderOtpForm() {
    return (
      <form className="mt-8 space-y-8">
        <div className="flex flex-col items-center space-y-[20px]">
          {/* OTP Inputs */}
          <div className="flex gap-6 sm:gap-6 md:gap-8 flex-wrap justify-center">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                maxLength={1}
                value={digit}
                placeholder="0"
                onChange={(e) =>
                  handleChange(e.target.value.replace(/[^0-9]/g, ""), index)
                }
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={`w-[55px] h-[55px] sm:w-[60px] sm:h-[60px] text-center text-[18px] sm:text-[20px] font-semibold rounded-xl outline-none
                  bg-[#F1F2F6] 
                  placeholder:text-[18px] placeholder:font-medium placeholder:text-[#0000001A]
                  ${
                    digit
                      ? "text-[#2450A0] border border-[#2450A0]"
                      : "text-[#2450A0] border border-transparent"
                  }
                  focus:ring-1 focus:ring-[#2450A0] transition-all duration-200`}
              />
            ))}
          </div>

          {/* Verify Button */}
          <div className="w-[80%] flex flex-col items-center">
            <button
              type="button"
              className="bg-[#2450A0] py-3 rounded-full font-medium text-sm w-[325px] sm:w-[300px] md:w-[400px] lg:w-[400px]"
            >
              <span
                className="text-[14px] font-medium text-white"
                style={{ fontWeight: "100" }}
              >
                VERIFY
              </span>
            </button>

            {/* Resend OTP */}
            <p
              className="text-center mt-[30px]"
              style={{
                fontSize: "15px",
                color: "#000000",
                fontWeight: "500",
              }}
            >
              Resend OTP in 12secs
            </p>
            <p
              className="text-center mt-[4px]"
              style={{
                fontSize: "14px",
                color: "#4c4c4ccf",
              }}
            >
              Resend OTP
            </p>
          </div>
        </div>
      </form>
    );
  }
}
