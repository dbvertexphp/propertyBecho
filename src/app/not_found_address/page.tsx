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
      <main className="pt-[200px] pb-12 flex justify-center relative z-10">
        <div
  className="
    w-[336px]         /* mobile default */
    md:w-[1000px]     /* desktop width */
    px-4 flex flex-col items-center gap-[10px] text-center
  "
  style={{
    backgroundColor: "white",
    borderRadius: "24px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
    padding: "4px",
    paddingBottom:'14px'
  }}
>
          <h2 className="font-extrabold" style={{fontSize:'34px'}}>
<span className="text-black font-bold text-[24px] inline-flex items-center gap-2">
  Hi there!
  <img src="/images/handshake.png" alt="handshake" className="w-[30px] h-auto" />
</span>
            
          </h2>

          <p className="text-gray-500 text-base" style={{fontSize:'16px',fontWeight:'400',color:'#000000'}}>
            
You're about to connect with our team on WhatsApp to request a quote.
          </p>
          <p className="text-gray-500 text-base" style={{fontSize:'16px',fontWeight:'400',color:'#000000'}}>           
 We’ll respond shortly with pricing and details.
          </p>
          <p className="text-gray-500 text-base" style={{fontSize:'16px',fontWeight:'400',color:'#000000'}}>
Feel free to type your message or use the default one below:
          </p>

          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-center sm:space-x-4">
      <button
  className="bg-[#2450A0] text-white rounded-[52px] border-[2px] border-white flex items-center justify-center gap-[10px]" style={{border:'1px solid white',boxShadow:'3px 5px 21px 0px #0000003B',paddingLeft:'30px',paddingBottom:'10px',paddingRight:'30px',paddingTop:'10px'}}
>
  <span style={{ fontSize: '14px', fontWeight: '500', width: '77px', height: '21px' }}>
    SEE OFFERS
  </span>
</button>


            
          </div>
        </div>
      </main>

      {/* Bottom Left Background Shape */}
     <img
  src="/images/bottom_wave.png"
  alt="Bottom Wave"
  className="absolute bottom-0 z-0 w-[72px] md:w-[144px]"
/>

      <img
  src="/images/bottom_wave1.png"
  alt="Bottom Wave"
  className="absolute bottom-0 z-0 
             w-[111px] left-[63px]     /* Mobile default */
             md:w-[180px] md:left-[100px]" /* Desktop override */
/>

    <img
  src="/images/pana.png"
  alt="Bottom Wave"
  className="absolute bottom-0 z-0
             w-[229px] left-[145px]     /* Mobile default */
             md:w-[304px] md:left-[264px]" /* Desktop override */
/>

    </div>
  );
}
