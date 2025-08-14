'use client';

import { useState } from 'react';
import Header2 from "@/components/Header2";

export default function MovingDetail() {
  return (
    <div className="relative text-gray-900 bg-gray-50 min-h-screen overflow-hidden" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Poppins Font Import */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');`}
      </style>

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
      <main className="pt-[310px] pb-12 flex justify-center relative z-10">
        <div className="w-[375px] px-4 flex flex-col items-center gap-[10px] text-center">
          <h2 className="font-extrabold" style={{fontSize:'34px'}}>
            <span style={{color:'rgba(0, 0, 0, 1)',fontWeight:'700'}}>Get </span>
            <span className="text-[#2450A0]">Valuation</span>
          </h2>

          <p className="text-gray-500 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          </p>

          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-center sm:space-x-4">
      <button
  className="bg-[#2450A0] text-white rounded-[52px] border-[2px] border-white flex items-center justify-center gap-[10px]" style={{border:'1px solid white',boxShadow:'3px 5px 21px 0px #0000003B',paddingLeft:'30px',paddingBottom:'10px',paddingRight:'30px',paddingTop:'10px'}}
>
  <span style={{ fontSize: '14px', fontWeight: '500', width: '77px', height: '21px' }}>
    GET QUOTE
  </span>
</button>


            <button className="bg-white border border-[#1A3A78] font-semibold py-3 px-5 rounded-full shadow-md hover:bg-gray-100 transition duration-300" style={{paddingLeft:'30px',paddingBottom:'10px',paddingRight:'30px',paddingTop:'10px'}}>
              <span style={{fontSize:'14px',fontWeight:'600',color:'#2450A0',}}>UPLOAD LISTING</span>
            </button>
          </div>
        </div>
      </main>

      {/* Bottom Left Background Shape */}
      <img
        src="bubble 4.png"
        alt="Bottom Wave"
        className="absolute bottom-0 z-0"
        style={{ width: "181px" }}
      />
      <img
        src="bubble 3.png"
        alt="Bottom Wave"
        className="absolute bottom-0 z-0"
        style={{ width: "180px", left: '100px' }}
      />
    </div>
  );
}
