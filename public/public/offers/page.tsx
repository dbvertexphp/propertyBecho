'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import Head from 'next/head';
import Header2 from "@/components/Header2";

export default function PropertyDetail() {


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
        <div className="w-full px-4" style={{ maxWidth: '1365px' }}>
          <h2 className="font-bold">
            <span style={{ color: 'rgba(0, 0, 0, 1)', fontSize: '24px', fontWeight: '700' }}>My</span>
            <span className="text-[#2450A0]" style={{ fontSize: '24px', fontWeight: '700' }}> Offers</span>
          </h2>

          <p className="text-sm mt-1 text-[15px]" style={{ marginTop: '12px', color: 'rgba(102, 102, 102, 1)', fontWeight: '400', fontSize: '14px' }}>
Welcome to our exclusive offers page! Here you will find the best deals...
          </p>

          {/* Form Box */}
         {/* Offer Card */}
<div className="bg-white rounded-2xl shadow-md p-4" style={{marginTop:'30px',boxShadow:'0px 0px 6px 0px #0000002B'}}>
  <h3 className="font-semibold text-lg mb-4">
    Vally Apartment In Gandhi Park Apartment For Sale In UP West
  </h3>

  {[
    { name: "Saheel", price: "$280,000", img: "/offers/img1.png" },
    { name: "Jacky", price: "$250,000", img: "/offers/img2.png" },
    { name: "Bonn", price: "$210,000", img: "/offers/img3.png" },
  ].map((offer, index) => (
    <div
      key={index}
      className="flex items-center justify-between py-3 border-b-2 border-[#EAEAEA] last:border-none"
    >
      {/* Profile */}
      <div className="flex items-center space-x-3">
             <img
  src={offer.img}
  alt={offer.name}
  className="w-[41px] h-[41px] sm:w-[64px] sm:h-[64px] rounded-full object-cover"
/>
<span 
  className="font-medium text-gray-800 text-[11px] sm:text-[13px]" 
  style={{fontWeight:'500',color:'#1B1F26B8'}}
>
  {offer.name}
</span>

      </div>

      {/* Price */}
     <span className="font-bold text-[#2450A0] text-[12px] sm:text-base">
  {offer.price}
</span>


      {/* Actions */}
      <div className="flex space-x-2">
       <button
  className="hover:bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium w-[64px] sm:w-auto"
  style={{ backgroundColor: "#00B36B" }}
>
  <span style={{ fontSize: "11px", fontWeight: "500" }}>Accept</span>
</button>

<button
  className="hover:bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium w-[64px] sm:w-auto"
  style={{ backgroundColor: "#FF5B5B" }}
>
  <span style={{ fontSize: "11px", fontWeight: "500" }}>Decline</span>
</button>

      </div>
    </div>
  ))}
</div>
<div className="bg-white rounded-2xl shadow-md p-4" style={{marginTop:'30px',boxShadow:'0px 0px 6px 0px #0000002B'}}>
  <h3 className="font-semibold text-lg mb-4">
    Vally Apartment In Gandhi Park Apartment For Sale In UP West
  </h3>

  {[
    { name: "John", price: "$290,000", img: "/offers/img4.png" },
   
  ].map((offer, index) => (
    <div
      key={index}
      className="flex items-center justify-between py-3 border-b last:border-none"
    >
      {/* Profile */}
      <div className="flex items-center space-x-3">
             <img
  src={offer.img}
  alt={offer.name}
  className="w-[41px] h-[41px] sm:w-[64px] sm:h-[64px] rounded-full object-cover"
/>
<span 
  className="font-medium text-gray-800 text-[11px] sm:text-[13px]" 
  style={{fontWeight:'500',color:'#1B1F26B8'}}
>
  {offer.name}
</span>
    
      </div>

      {/* Price */}
      <span className="font-bold text-[#2450A0] text-[12px] sm:text-base">
  {offer.price}
</span>


      {/* Actions */}
      <div className="flex space-x-2">
        <button className=" hover:bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium " style={{backgroundColor:'#ACECD3',borderRadius:'9px'}}>
          <span style={{fontSize:'11px',color:'#555956'}}>Accepted</span>
        </button>
        
      </div>
    </div>
  ))}
</div>
<div className="bg-white rounded-2xl shadow-md p-4" style={{marginTop:'30px',boxShadow:'0px 0px 6px 0px #0000002B'}}>
  <h3 className="font-semibold text-lg mb-4">
   1 RK Apartment In Vishnu Park Apartment For Sale In Virar West
  </h3>

  {[
    { name: "Sarif", price: "$270,000", img: "/offers/img5.png" },
   
  ].map((offer, index) => (
    <div
      key={index}
      className="flex items-center justify-between py-3 border-b last:border-none"
    >
      {/* Profile */}
      <div className="flex items-center space-x-3">
            <img
  src={offer.img}
  alt={offer.name}
  className="w-[41px] h-[41px] sm:w-[64px] sm:h-[64px] rounded-full object-cover"
/>

<span 
  className="font-medium text-gray-800 text-[11px] sm:text-[13px]" 
  style={{fontWeight:'500',color:'#1B1F26B8'}}
>
  {offer.name}
</span>
      </div>

      {/* Price */}
       <span className="font-bold text-[#2450A0] text-[12px] sm:text-base">
  {offer.price}
</span>


      {/* Actions */}
      <div className="flex space-x-2">
        
        <button className=" hover:bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium" style={{backgroundColor:'#FF5B5B80',borderRadius:'9px'}}>
         <span style={{fontSize:'11px'}}>Declined</span>
        </button>
      </div>
    </div>
  ))}
</div>


          {/* <div className="text-right mt-6">
            <Link href="/r-step-5">
              <Image
                src="/next.png"
                alt="Bottom Image"
                width={300}
                height={300}
                className="absolute mt-4 cursor-pointer left-1/2 -translate-x-1/2 lg:left-[940px] lg:translate-x-0"
              />
            </Link>
          </div> */}
        </div>
      </main>
       <img
  src="/images/bottom_wave.png"
  alt="Bottom Wave"
  className="absolute bottom-0 z-0 w-[129px] md:w-[144px]"
/>

      <img
  src="/images/bottom_wave1.png"
  alt="Bottom Wave"
  className="absolute bottom-0 z-0 
             w-[224px] left-[9px]     /* Mobile default */
             md:w-[180px] md:left-[100px]" /* Desktop override */
/>
    </div>
  );
}
