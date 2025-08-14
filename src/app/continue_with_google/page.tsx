"use client";
import Image from "next/image";
import Header2 from "@/components/Header2";
import Link from "next/link";
import React, { useState } from "react";

export default function Page1() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [location, setLocation] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"user" | "broker">("user");

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

      {/* Header */}
      <Header2 />

      {/* Main Content */}
      <main className="pt-[120px] pb-12 flex justify-center relative z-10">
        <div className="w-full px-4">
          {/* Call Icon */}
          <div className="mx-auto mt-10 flex justify-start w-full lg:w-[87%]">
            <div className="w-16 h-16 rounded-2xl border-2 border-gray-300 flex items-center justify-center">
              <img
                src="/facilities/call.png"
                alt="Call"
                className="w-10 h-10"
              />
            </div>
          </div>

          {/* Desktop Card */}
          <div className="hidden lg:flex justify-center mt-6">
            <div className="bg-white rounded-2xl shadow-lg p-10 w-[650px] flex flex-col items-center">
              <h2 className="text-3xl font-bold mt-3">Login</h2>
              <p className="text-gray-600 mt-2 text-center">
                Welcome Back to the app
              </p>

              {/* Form Fields */}
              <form className="mt-6 w-full space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Enter Your E-mail / Phone number"
                    className="mt-1 w-full px-4 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder:text-sm placeholder:font-normal"
                  />
                </div>

                {/* Google Button */}
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="bg-[#2450A0] w-[50%] py-2.5 rounded-full font-medium text-white text-sm"
                  >
                    Continue with Google
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Mobile View */}
          <div className="lg:hidden mt-6 w-full px-4">
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#000000",
                marginTop: "30px",
              }}
            >
              Login
            </h2>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "400",
                color: "#666666",
                marginTop: "15px",
              }}
            >
              Welcome Back to the app
            </p>

            <form className="mt-6 space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Enter Your E-mail / Phone number"
                  className="mt-1 w-full px-4 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder:text-sm placeholder:font-normal"
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="button"
                  className="bg-[#2450A0] py-2.5 rounded-full font-medium text-sm text-white w-[60%]"
                >
                  Continue with Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
