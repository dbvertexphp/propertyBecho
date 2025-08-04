"use client";
import Image from "next/image";
import Header2 from "@/components/Header2";
import Link from "next/link";
import { useState } from "react";
import { FaHome, FaBuilding } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

export default function Page1() {
  const [selectedType, setSelectedType] = useState(null);
  const [location, setLocation] = useState("");

const [selected, setSelected] = useState("COMMERCIAL");

  const isSelected = (type: string) => selected === type;

 

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

      <Header2 />

      <main className="pt-[120px] pb-12 flex justify-center relative z-10" style={{ top: '37px',paddingBottom:'120px' }}>
        <div className="w-full max-w-[650px] px-4" style={{maxWidth:'1090px'}}>
          <h2 className="text-2xl font-bold">
            <span style={{
              color: '#000000',
              fontWeight: '700',
              fontSize: '24px',
              lineHeight: '29px',
              width:'343px',
              height:'58px'
            }}>
             Tell us a bit about
            </span>{' '}
            <span style={{
              color: '#2450A0',
              fontWeight: '700',
              fontSize: '24px',
              lineHeight: '29px'
            }}>
              your Property
            </span>
          </h2>

          <p
            className="text-sm text-gray-500 mt-1 text-[15px]"
            style={{ marginTop: '12px', color: 'rgba(102, 102, 102, 1)',fontSize:'14px',fontWeight:'400'}}
          >
            Answer a few questions and get your no-obligation cash offer in as <span style={{fontWeight:'600'}}>little as 3 minutes.</span>
          </p>

     <div
      className="bg-white rounded-2xl shadow-md p-4 relative pb-10"
      style={{ marginTop: "30px" }}
    >
      <div className="flex flex-row justify-center gap-12 mt-10">
        {/* Grey Box 1 - RESIDENTIAL */}
        <div
          onClick={() => setSelected("RESIDENTIAL")}
          className={`relative rounded-2xl h-[76px] w-[146px] overflow-visible flex flex-col items-center justify-end pt-16 cursor-pointer transition-all duration-200
            ${isSelected("RESIDENTIAL") ? "border-1 border-[#2450A0] bg-white rounded-[21px] text-[rgb(0,0,0)]" : "bg-gray-100"}`}
          style={{ paddingBottom: "8px",width:'200px',height:'76px' }}
        >
          <Image
            src="/home1.png"
            alt="Residential"
            width={100}
            height={100}
            className="absolute mb-6 left-1/2 -translate-x-1/2 scale-x-[-1]"
          />
       <p
  style={{
    width: "96px",
    height: "24px",
    fontWeight: 500,
    fontSize: "16px",
    color: isSelected("RESIDENTIAL")
      ? "#2450A0"
      : "rgb(110 116 133)",
  }}
>
  RESIDENTIAL
</p>


        </div>

        {/* Grey Box 2 - COMMERCIAL */}
        <div
          onClick={() => setSelected("COMMERCIAL")}
          className={`relative rounded-2xl h-[76px] w-[146px] overflow-visible flex flex-col items-center justify-end pt-16 cursor-pointer transition-all duration-200
            ${isSelected("COMMERCIAL") ? "border-1 border-[#2450A0] bg-white rounded-[21px]" : "bg-gray-100"}`}
          style={{ paddingBottom: "8px",width:'200px',height:'76px'  }}
        >
    {/* <img
    src="/circular.png"
    alt="bg circle"
    className="absolute top-[2px] left-1/2 -translate-x-1/2 z-0"
    style={{
      width: "153px",
      height: "71px",
      borderRadius: "19px",
    }}
  /> */}

          <Image
            src="/home2.png"
            alt="Commercial"
            width={107}
            height={43}
            className="absolute mb-8 left-1/2 -translate-x-1/2 scale-x-[-1]"
          />
          <p
            style={{
              width: "96px",
              height: "24px",
              fontWeight: 600,
              fontSize: "16px",
              color: isSelected("COMMERCIAL")
                ? "#2450A0"
                : "rgb(110 116 133)",
            }}
          >
            COMMERCIAL
          </p>
        </div>
      </div>

      {/* Property Type Tag */}
      <div className="absolute left-1/2 -bottom-4 transform -translate-x-1/2 bg-white text-black text-sm font-semibold px-4 py-1 rounded-full shadow-md border border-gray-200" >
         <span style={{fontSize:'12px',fontWeight:'600',width:'85px',height:'18px'}}>Property Type</span>
      </div>
    </div>

  <div className="mt-[40px] bg-white rounded-2xl shadow-md p-5 md:p-8 md:w-3/4 md:mx-auto">
          <p style={{fontSize:'14px',fontWeight:'500',color:'rgba(102, 102, 102, 1)'}}>
            First, enter the address of the property you're looking to sell.
          </p>

          <div className="relative">
            <input
              type="text"
              placeholder="Location"
              className="w-full px-4 py-3 pr-10 border border-[#2450A0] rounded-2xl font-bold text-gray-500 placeholder-gray-400 outline-none"
             style={{height:'67px'}}/>
            <Image
              src="/Location.png"
              alt="Location Icon"
              width={24}
              height={24}
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
            />
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
