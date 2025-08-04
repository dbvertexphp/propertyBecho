'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import Head from 'next/head';
import Header2 from "@/components/Header2";
import {
  Building2, Home, LayoutGrid, Landmark, Tent,
  Trees, MapPinned, Layers3, Mountain
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

  return (
   <div
      className="relative text-gray-900 bg-gray-50 min-h-screen overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* ✅ Poppins Google Font */}
      
         <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      

      {/* Background Images */}
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

      <main className="pt-[120px] pb-12 flex justify-center relative z-10" style={{ top: '35px', paddingBottom: '120px' }}>
        <div className="w-full px-4" style={{ maxWidth: '1090px' }}>
          <h2 className="font-bold">
            <span style={{ color: 'rgba(0, 0, 0, 1)', fontSize: '24px', fontWeight: '700' }}>Property</span>
            <span className="text-[#2450A0]" style={{ fontSize: '24px', fontWeight: '700' }}> Details</span>
          </h2>

          <p className="text-sm mt-1 text-[15px]" style={{ marginTop: '12px', color: 'rgba(102, 102, 102, 1)', fontWeight: '400', fontSize: '14px' }}>
            Answer a few questions and get your no-obligation cash offer in as little as 3 minutes.
          </p>

          {/* Form Box */}
          <div className="bg-white rounded-2xl shadow-md mt-6 p-6 space-y-4">
            

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold mb-1" style={{ color: 'rgba(10, 9, 9, 1)', fontWeight: '500', fontSize: '14px' }}>Built area</label>
                <input type="text" placeholder="Built area" className="w-full border rounded-[20px] px-4 py-3 placeholder:text-gray-400"  />
              </div>
              <div>
                <label className="block font-semibold mb-1" style={{ color: 'rgba(10, 9, 9, 1)', fontWeight: '500', fontSize: '14px' }}>Area Unit <span className="text-red-500">*</span></label>
                <input type="text" placeholder="Area Unit" className="w-full border rounded-[20px] px-4 py-3 placeholder:text-gray-400" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold mb-1" style={{ color: 'rgba(10, 9, 9, 1)', fontWeight: '500', fontSize: '14px' }}>Total area <span className="text-red-500">*</span></label>
                <input type="text" placeholder="Total area " className="w-full border rounded-[20px] px-4 py-3 placeholder:text-gray-400"  />
              </div>
               <div>
              <label className="block font-semibold mb-1" style={{ color: 'rgba(10, 9, 9, 1)', fontWeight: '500', fontSize: '14px' }}>Ownership</label>
              <div className="relative">
                <select className="w-full border rounded-[20px] px-4 py-2.5 text-gray-500 appearance-none pr-10" style={{ color: '#0A090966' }}>
                  <option value="" >Ownership</option>
                  
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <img src="/arrow-down.png" alt="Dropdown Icon" className="object-contain" style={{ width: '24px', height: '24px' }} />
                </div>
              </div>
            </div>
            </div>

           
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold mb-1" style={{ color: 'rgba(10, 9, 9, 1)', fontWeight: '500', fontSize: '14px' }}>Total Floor<span className="text-red-500">*</span></label>
                <input type="text" placeholder="Total Floor" className="w-full border rounded-[20px] px-4 py-3 placeholder:text-gray-400"/>
              </div>
              <div>
                <label className="block font-semibold mb-1" style={{ color: 'rgba(10, 9, 9, 1)', fontWeight: '500', fontSize: '14px' }}>Your Floor<span className="text-red-500">*</span></label>
                <input type="text" placeholder="Your Floor" className="w-full border rounded-[20px] px-4 py-3 placeholder:text-gray-400" />
              </div>
            </div>

          

           
          </div>

          <div className="text-right mt-6">
            <Link href="/r-step-5">
              <Image
                src="/next.png"
                alt="Bottom Image"
                width={300}
                height={300}
                className="absolute mt-4 cursor-pointer left-1/2 -translate-x-1/2 lg:left-[940px] lg:translate-x-0"
              />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
