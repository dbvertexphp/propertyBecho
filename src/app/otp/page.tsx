"use client";
import Image from "next/image";
import Header2 from "@/components/Header2";
import Link from "next/link";
import React, { useState } from "react";
import { FaHome, FaBuilding } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

export default function Page1() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [location, setLocation] = useState<string>("");
    const [activeTab, setActiveTab] = useState<'user' | 'broker'>('user');

  return (
    <div
      className="relative text-gray-900 bg-gray-50 min-h-screen overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Google Fonts link directly in JSX */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      {/* Gradient Patch on Right Top */}
     
<div className="relative">
  {/* Header */}
 

  {/* Bubble 2 (Background Layer) */}
  <img
    src="/bubble.png"
    alt="Bubble 2"
    className="absolute top-0 right-0 w-[120px] md:w-[190px] z-0 opacity-80"
  />

  {/* Bubble 1 (Front Layer) */}
  <img
    src="/bubble1.png"
    alt="Bubble 1"
    className="absolute top-0 right-0 w-[90px] md:w-[134px] z-10"
  />
</div>

      {/* Header */}
      <Header2 />

      {/* Main Content */}
      <main className="pt-[120px] pb-12 flex justify-center relative z-10" style={{ top: '35px' }}>
        
        <div className="w-full max-w-[650px] px-4"  style={{maxWidth:'1090px',paddingBottom:'100px'}}>
            <img src="/facilities/call.png" 
            style={{width:'42px',height:'42px'}}
            alt="" />
         {/* yaha hoga Content */}
         {/* Register Form Section */}

  <h2 style={{fontSize:'24px',fontWeight:'700',color:'#000000',width:'343px',height:'29px',marginTop:'30px'}}>OTP Verification</h2>
  <p style={{fontSize:'14px',fontWeight:'400px',color:'#666666',marginTop:'15px'}}>Enter the verificaiton code we just sent on your phone number</p>

  {/* Tabs: User / Broker */}

  


  {/* Form Fields */}
  <form className="mt-6 space-y-4">
   {/* //otp input box */}
<div className="flex justify-center">
  <div
    className="flex justify-between 
               gap-[30px] sm:gap-[40px] md:gap-[55px]
               mr-0 sm:mr-10 md:mr-[168px]
               ml-[20px] sm:ml-[40px] md:ml-[60px]
               w-full max-w-[250px] md:max-w-[300px] lg:max-w-[350px]">
    {[0, 1, 2, 3].map((_, index) => (
      <input
        key={index}
        type="text"
        maxLength={1}
        className="w-[60px] h-[60px] text-center text-[20px] font-semibold rounded-xl outline-none
          bg-[#F1F2F6] text-[#2450A0] focus:bg-white focus:ring-2 focus:ring-[#2450A0] border 
          focus:border-[#2450A0] border-transparent"
      />
    ))}
  </div>
</div>






    {/* Google Button */}
    <div className="flex justify-center">
  <button
    type="button"
    className="bg-[#2450A0] py-2.5 rounded-full font-medium text-sm"
    style={{ width: '567px' }}
  >
    <span
      style={{
        fontSize: '14px',
        fontWeight: '100',
        color: '#FFFFFF',
        display: 'block',
        textAlign: 'center',
      }}
    >
      Verify
    </span>
  </button>
</div>

  </form>



          <div className="text-right mt-6">
            <Link href="/r-step-3">
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