
"use client";

import Image from "next/image";
import Header2 from "@/components/Header2";
import Footer from "@/components/Footer";

export default function Details() {
    const properties = [
        {
            id: 1,
            img: "/appartment.png",
            price: "$280,000",
            owner: "By Owner",
            verified: true,
            bhk: "2 ",
            bath: "2 ",
            sqft: "24 ",
            location: "1030 Spruce St, Aurora, IL, 60506",
        },
        {
            id: 2,
            img: "/Apartment3.png",
            price: "$450,000",
            owner: "By Agent",
            verified: false,
            bhk: "3 ",
            bath: "3 ",
            sqft: "36 ",
            location: "221B Baker Street, London, UK",
        },
        {
            id: 3,
            img: "/appartment.png",
            price: "$320,000",
            owner: "By Owner",
            verified: true,
            bhk: "1 ",
            bath: "1 ",
            sqft: "18 ",
            location: "5th Ave, New York, NY 10011",
        },
        {
            id: 4,
            img: "/Apartment3.png",
            price: "$600,000",
            owner: "By Agent",
            verified: true,
            bhk: "4 ",
            bath: "4 ",
            sqft: "48 ",
            location: "90210 Beverly Hills, CA",
        },
    ];

    return (
        <div>
            <Header2 />

            {/* Agent Profile Card */}
            <section className="w-[87%] mx-auto mt-[150px]">
                
                 <div className="flex items-center space-x-4">
                                        {/* Image Container */}
                                        <div className="relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20">
                                            {/* NOTE: Apni image ka sahi path yahan daalein */}
                                            <Image
                                                src="/Owner1.png" // Example path, ise change karein
                                                alt="Profile"
                                                layout="fill"
                                                className="rounded-full object-cover"
                                            />
                                        </div>
                
                                        {/* Text Content Container */}
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h1 className="text-[18px] sm:text-[18px] font-bold text-gray-900">Josef Jorden</h1>

                                                <img
                                                    src="/Verified.png"
                                                    alt="Success Icon"
                                                    width={20}
                                                    height={20}
                                                />
                            <span className="bg-green-100 text-[#2CA003] px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">  RERA </span>

                                            </div>
                                            <p className="text-[12px] text-[#000000] mt-1">Josef Properties</p>
                                            <p className="text-[12px] text-[#20202099]">Operating Since: 2008</p>
                                        </div>
                                    </div>
                
                                    {/* Total Property Listing */}
                                    <div className="mt-4 bg-[#2450A01C]/89 p-3 rounded-lg flex items-center space-x-3">
                                        <span className="text-xl sm:text-2xl font-bold text-[#2450A0]">10</span>
                                        <span className="text-gray-800 font-medium text-sm">Total Property Listing</span>
                                    </div>
                
                                    {/* Description */}
                                    <div className="mt-4">
                                        <h2 className="font-bold text-base text-gray-900">Broker at Josef Properties, India</h2>
                                        <p className=" text-[12px] md:text-[18px] text-[#20202099] mt-1 leading-relaxed " style={{ fontWeight: '400' }}>
                                            As an experienced real estate broker, I specialize in helping clients buy, sell, and invest in residential and commercial properties with confidence.
                                        </p>
                                    </div>
            </section>

            {/* Properties Section */}
            <section className="w-[87%] mx-auto mt-[40px]">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-[24px] text-[#121828] font-extrabold">Properties For Sale</h2>
                    <div className="flex gap-2">
                        {/* Left Arrow */}
                        <button className="p-2 ">
                            <Image
                                src="/left arrow.svg" // your left arrow PNG path
                                alt="Previous"
                                width={40}
                                height={40}
                            />
                        </button>

                        {/* Right Arrow */}
                        <button className="p-2">
                            <Image
                                src="/right arrow.svg" // your right arrow PNG path
                                alt="Next"
                                width={40}
                                height={40}
                            />
                        </button>
                    </div>
                </div>

                {/* Property Cards */}
                <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
                    {properties.map((p) => (
                        <div
                            key={p.id}
                            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all "
                        >
                            {/* Image */}
                            <div className="relative w-full h-55 ">
                                <Image
                                    src={p.img}
                                    alt={p.location}
                                    fill
                                    className="object-cover rounded-b-2xl"
                                />

                            </div>

                            {/* Details */}
                            <div className="p-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-bold">{p.price}</h3>

                                    <div className="flex items-center gap-2">
                                        {p.verified && (
                                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                                                ✅ Verified
                                            </span>
                                        )}
                                        <button className="bg-white border border-gray-300 rounded-full p-1 shadow-sm hover:scale-105 transition">
                                            🤍
                                        </button>
                                    </div>
                                </div>
                                <p className="text-gray-500 text-sm">{p.owner}</p>

                                {/* Specs */}
                                <div className="flex gap-2 mt-3 text-[14px] font-semibold flex-wrap">
                                    <span className="px-2 py-1  bg-[#0000000D] text-[#2450A0] rounded-md">
                                        {p.bhk}  <span className="text-[#0A0909A6]">BHK</span>
                                    </span>
                                    <span className="px-2 py-1 bg-[#0000000D] text-[#2450A0] rounded-md">
                                        {p.bath} <span className="text-[#0A0909A6]">BA</span>
                                    </span>
                                    <span className="px-2 py-1 bg-[#0000000D] text-[#2450A0] rounded-md">
                                        {p.sqft} <span className="text-[#0A0909A6]">sqft</span>
                                    </span>
                                </div>

                                {/* Location */}
                                <div className="flex items-center gap-2 mt-4 text-[10px] text-[#0A090999] font-extrabold">
                                    <img src="/locationcards.png" /> <span>{p.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="w-[87%] mx-auto mt-[40px]">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-[24px] text-[#121828] font-extrabold">Properties For Rent</h2>
                    <div className="flex gap-2">
                        {/* Left Arrow */}
                        <button className="p-2 hover:bg-[#2450A0] ">
                            <Image
                                src="/left arrow.svg" // your left arrow PNG path
                                alt="Previous"
                                width={40}
                                height={40}
                            />
                        </button>

                        {/* Right Arrow */}
                        <button className="p-2 ">
                            <Image
                                src="/right arrow.svg" // your right arrow PNG path
                                alt="Next"
                                width={40}
                                height={40}
                            />
                        </button>
                    </div>

                </div>

                {/* Property Cards */}
                <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
                    {properties.map((p) => (
                        <div
                            key={p.id}
                            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all "
                        >
                            {/* Image */}
                            <div className="relative w-full h-55">
                                <Image
                                    src={p.img}
                                    alt={p.location}
                                    fill
                                    className="object-cover rounded-b-2xl"
                                />

                            </div>

                            {/* Details */}
                            <div className="p-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-bold">{p.price}</h3>

                                    <div className="flex items-center gap-2">
                                        {p.verified && (
                                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                                                ✅ Verified
                                            </span>
                                        )}
                                        <button className="bg-white border border-gray-300 rounded-full p-1 shadow-sm hover:scale-105 transition">
                                            🤍
                                        </button>
                                    </div>
                                </div>
                                <p className="text-gray-500 text-sm">{p.owner}</p>

                                {/* Specs */}
                                <div className="flex gap-2 mt-3 text-[14px] font-semibold flex-wrap">
                                    <span className="px-2 py-1 bg-[#0000000D] text-[#2450A0] rounded-md">
                                        {p.bhk} <span className="text-[#0A0909A6]">BHK</span>
                                    </span>
                                    <span className="px-2 py-1 bg-[#0000000D] text-[#2450A0] rounded-md">
                                        {p.bath} <span className="text-[#0A0909A6]">BA</span>
                                    </span>
                                    <span className="px-2 py-1 bg-[#0000000D] text-[#2450A0] rounded-md">
                                        {p.sqft} <span className="text-[#0A0909A6]">sqft</span>
                                    </span>
                                </div>

                                {/* Location */}
                                <div className="flex items-center gap-2 mt-4 text-[10px] text-[#0A090999] font-extrabold">
                                    <img src="/locationcards.png" /> <span>{p.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}