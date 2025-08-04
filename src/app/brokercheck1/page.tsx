'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import Header2 from "@/components/Header2";
import { FiArrowRight } from "react-icons/fi";
import React from "react";

interface FacilityItem {
  label: string;
  icon: string;
}

interface FormData {
  businessType: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  dob: string;
}

interface Counts {
  [key: string]: number;
}

const furnishings: FacilityItem[] = [
  { label: "Apartment", icon: "/facilities/1.png" },
  { label: "Independent House", icon: "/facilities/2.png" },
  { label: "Duplex", icon: "/facilities/3.png" },
  { label: "Independent Floor", icon: "/facilities/4.png" },
  { label: "Villa", icon: "/facilities/5.png" },
  { label: "Studio", icon: "/facilities/6.png" },
  { label: "Penthouse", icon: "/facilities/7.png" },
  { label: "Plot", icon: "/facilities/8.png" },
  { label: "Farm House", icon: "/facilities/9.png" },
  { label: "Agricultural Land", icon: "/facilities/10.png" },
];

const societyAmenities: FacilityItem[] = [
  { label: "Office", icon: "/facilities/11.png" },
  { label: "Retail Shop", icon: "/facilities/12.png" },
  { label: "Showroom", icon: "/facilities/13.png" },
  { label: "Ware house", icon: "/facilities/14.png" },
  { label: "Plot", icon: "/facilities/15.png" },
  { label: "Others", icon: "/facilities/16.png" },

];

const MovingDetail: React.FC = () => {
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);

  const [formData, setFormData] = useState<FormData>({
    businessType: "Individual",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    dob: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleFacility = (item: string) => {
    setSelectedFacilities(prev =>
      prev.includes(item)
        ? prev.filter(f => f !== item)
        : [...prev, item]
    );
  };

  return (
    <div className="relative text-gray-900 bg-gray-50 min-h-screen overflow-hidden" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      <div className="relative">
        <img src="/bubble.png" alt="Bubble 2" className="absolute top-0 right-0 w-[120px] md:w-[190px] z-0 opacity-80" />
        <img src="/bubble1.png" alt="Bubble 1" className="absolute top-0 right-0 w-[90px] md:w-[134px] z-10" />
      </div>

      <Header2 />

      <main className="pt-[120px] pb-12 flex justify-center relative z-10" style={{ top: '35px' }}>
        <div className="w-full max-w-[650px] px-4" style={{ maxWidth: '1264px' }}>
          <div className="grid grid-cols-[449px_1fr]">
            <div className="relative p-6">
              <ul className="relative ml-6 mt-6 space-y-8">
                <div className="absolute left-[33px] top-0 w-[2px] h-full bg-gray-300 z-0" />

                <li className="flex items-center p-4 rounded-[19px] gap-4 relative z-10 bg-[#2450a0] text-white" style={{ width: '239px' }}>
                  <div className="w-10 h-10 rounded-full bg-[#f4f5f8] flex items-center justify-center z-10">
                    <Image src="/step-icons/step1blue.svg" alt="Step 1" width={24} height={24} />
                  </div>
                  <div>
                    <p className="font-bold  text-white" style={{ fontSize: '17px' }}>Personal Details</p>
                  </div>
                </li>

                {['step2gray.svg', 'step3gray.svg', 'step4gray.svg'].map((icon, i) => (
                  <li
                    key={i}
                    className="flex items-center p-4 rounded-[19px] gap-4 relative z-10 group transition hover:bg-[#2450a0] hover:text-white cursor-pointer"
                    style={{ width: '239px' }}
                  >
                    <div className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center group-hover:border-[#2450a0]">
                      <Image src={`/step-icons/${icon}`} alt={`Step ${i + 2}`} width={24} height={24} />
                    </div>
                    <div>
                      <p className="font-bold text-[#2a2a2a] group-hover:text-white" style={{ fontSize: '17px' }}>
                        {['Choose Commodity', 'Select Area & Specialization', 'Select A Builder'][i]}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-20">
                <p className="text-3xl font-extrabold text-black">Welcome,</p>
                <p className="text-3xl font-extrabold text-[#2450a0]">
                  Signup <span className="text-black font-medium">to Continue!</span>
                </p>
                <p className="text-sm mt-1 text-gray-500">
                  Already Have Account <a href="#" className="text-[#2450a0] underline">Login here</a>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-15" style={{ borderRadius: '35px', marginTop: '30px' }}>
              <p className="text-sm font-medium" style={{ color: '#605959' }}>Step 1 / 4</p>
              <h2 className="text-2xl font-medium mb-2">Broker Profile</h2>
              <p className="text-sm text-gray-500 mb-6">
                Specializing in connecting buyers, sellers, and investors with the right opportunities.
              </p>

              <form className="grid grid-cols-2 gap-6">
                <div className="mt-6">
                  <h3 className="font-semibold mb-4" style={{ fontWeight: '500', fontSize: '15px' }}>Flat Furnishings</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {furnishings.map((item, index) => {
                      const isLast = index === furnishings.length - 1;
                      const mod = furnishings.length % 3;
                      const isCenteredLast = isLast && mod === 1;

                      return (
                        <button
                          key={index}
                          type="button"
                          onClick={() => toggleFacility(item.label)}
                          className={`flex flex-col items-center justify-center h-[100px] rounded-lg p-2 ${
                            selectedFacilities.includes(item.label)
                              ? 'border border-[#0052CC] bg-[#EBF1FF] text-[#0052CC]'
                              : 'border border-[#1218280D] bg-[#f3f3f3] text-[#121212]'
                          } ${isCenteredLast ? 'col-span-3 w-1/3 justify-self-center' : 'w-full'}`}
                        >
                          <img src={item.icon} alt={item.label} className="w-[40px] h-[40px]" />
                          <span className={`text-sm mt-2 font-medium ${selectedFacilities.includes(item.label) ? 'text-[#0052CC]' : 'text-[rgba(113,117,128,1)]'}`} style={{ fontSize: '14px', fontWeight: '500' }}>
                            {item.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
                <br />
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-4" style={{ fontWeight: '500', fontSize: '15px' }}>Society Amenities</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {societyAmenities.map((item, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => toggleFacility(item.label)}
                        className={`flex flex-col items-center justify-center w-full h-[100px] rounded-lg p-2 ${
                          selectedFacilities.includes(item.label)
                            ? 'border border-[#0052CC] bg-[#EBF1FF] text-[#0052CC]'
                            : 'border border-[#1218280D] bg-[#f3f3f3] text-[#121212]'
                        }`}
                      >
                        <img src={item.icon} alt={item.label} className="w-[40px] h-[40px]" />
                        <span className="text-sm mt-2 text-center" style={{ fontSize: '14px', fontWeight: '500' }}>{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="col-span-2 text-right">
                  <button className="bg-[#2450A0] text-white px-6 py-2 rounded-full w-full md:w-[40%]">
                    Save and Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MovingDetail;
