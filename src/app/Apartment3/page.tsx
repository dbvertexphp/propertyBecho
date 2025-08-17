
"use client";

import Image from "next/image";
import Header2 from "@/components/Header2";
import Footer from "@/components/Footer";

// Card ke liye SVG Icons
const GatedCommunityIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 20V4H22V20H2ZM4 18H20V6H4V18Z" fill="#2450A0" />
        <path d="M6 16V8H8V16H6Z" fill="#2450A0" />
        <path d="M10 16V8H12V16H10Z" fill="#2450A0" />
        <path d="M14 16V8H16V16H14Z" fill="#2450A0" />
    </svg>
);

const LiftIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="2" width="12" height="20" rx="1" stroke="#4B5563" strokeWidth="2" />
        <path d="M9 10L12 7L15 10" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 14L12 17L15 14" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const SwimmingPoolIcon = () => (
    <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 10C2 10 4.5 8 7.5 8C10.5 8 12.5 10 15.5 10C18.5 10 20.5 8 23.5 8C26.5 8 28 10 28 10" stroke="#2450A0" strokeWidth="2" strokeLinecap="round" />
        <path d="M2 15C2 15 4.5 13 7.5 13C10.5 13 12.5 15 15.5 15C18.5 15 20.5 13 23.5 13C26.5 13 28 15 28 15" stroke="#2450A0" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 6L20 4L22 6" stroke="#2450A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="2" r="1" fill="#2450A0" />
    </svg>
);

const ParkingIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 3H15C17.2091 3 19 4.79086 19 7C19 9.20914 17.2091 11 15 11H9V3Z" stroke="#4B5563" strokeWidth="2" />
        <path d="M9 11V21" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const SmartSecurityIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L3 5V11C3 16.5 7.5 21.5 12 22C16.5 21.5 21 16.5 21 11V5L12 2Z" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const EVChargingIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4Z" stroke="#4B5563" strokeWidth="2" />
        <path d="M12 8L10 12H14L12 16" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 12H22" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export default function Details() {
    const properties = [
        { id: 1, img: "/Appartmentnew.png", price: "$280,000", owner: "By Owner", verified: true, bhk: "2 ", bath: "2 ", sqft: "24 ", location: "1030 Spruce St, Aurora, IL, 60506" },
        { id: 2, img: "/Appartmentnew.png", price: "$450,000", owner: "By Agent", verified: false, bhk: "3 ", bath: "3 ", sqft: "36 ", location: "221B Baker Street, London, UK" },
        { id: 3, img: "/Appartmentnew.png", price: "$320,000", owner: "By Owner", verified: true, bhk: "1 ", bath: "1 ", sqft: "18 ", location: "5th Ave, New York, NY 10011" },
        { id: 4, img: "/Appartmentnew.png", price: "$600,000", owner: "By Agent", verified: true, bhk: "4 ", bath: "4 ", sqft: "48 ", location: "90210 Beverly Hills, CA" },
    ];

    const amenities = [
        { name: "Gated Community", icon: <img src="/Container.png" />, special: true },
        { name: "Lift", icon: <img src="/Cycladic home.png" />, special: false },
        { name: "Swimming Pool", icon: <img src="/Pool.png" />, special: true },
        { name: "Parking", icon: <img src="/Frame.png" />, special: false },
        { name: "Smart Security", icon: <img src="/Frames.png" />, special: false },
        { name: "EV Charging", icon: <img src="/Frameappartment.png" />, special: false },
    ];

    return (
        <div>
            <Header2 />

            <section className="w-[87%] mx-auto mt-[150px] flex justify-center">
                {/* Aranya Heights Card - Desktop view ke liye updated */}
                <div className="w-full max-w-md md:max-w-[1400px] bg-white rounded-2xl shadow-lg p-5 sm:p-6 font-sans">

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
                                <h1 className="text-[18px] sm:text-[18px] font-bold text-gray-900">Aranya Heights</h1>
                                <img
                                    src="/Verified.png"
                                    alt="Success Icon"
                                    width={20}
                                    height={20}
                                />
                            </div>
                            <p className="text-[12px] text-[#000000] mt-1">Evolve Buildtech Pvt. Ltd.</p>
                            <p className="text-[12px] text-[#20202099]">Sector 79B, Gurgaon, Haryana</p>
                        </div>
                    </div>

                    {/* Total Property Listing */}
                    <div className="mt-4 bg-[#2450A01C]/89 p-3 rounded-lg flex items-center space-x-3">
                        <span className="text-xl sm:text-2xl font-bold text-[#2450A0]">10</span>
                        <span className="text-gray-800 font-medium text-sm">Total Property Listing</span>
                    </div>

                    {/* Description */}
                    <div className="mt-4">
                        <h2 className="font-bold text-base text-gray-900">Aranya Heights at Gurgaon</h2>
                        <p className=" text-[12px] md:text-[18px] text-[#20202099] mt-1 leading-relaxed " style={{ fontWeight: '400' }}>
                            It is a premium residential development nestled in the heart of New Gurgaon. Thoughtfully designed to provide luxury with convenience, this project offers a modern lifestyle blended with natural surroundings.
                        </p>
                    </div>

                    {/* Key Amenities */}
                    <div className="mt-4">
                        <h2 className="font-bold text-[14px] text-[#0A0909] mb-3">Key Amenities</h2>
                        <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
                            {amenities.map((amenity) => (
                                <div key={amenity.name} className={`rounded-lg p-3 flex flex-col items-center justify-center h-24 ${amenity.special ? 'bg-[#2450A087]/47 border border-blue-200' : 'bg-gray-100'}`} >
                                    {amenity.icon}
                                    <span className={`text-xs sm:text-[12px] font-semibold mt-2 ${amenity.special ? 'text-[#2450A0]' : 'text-gray-700'}`} >
                                        {amenity.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* Properties For Sale Section */}
            <section className="w-[87%] mx-auto mt-[40px]">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-[24px] text-[#121828] font-extrabold">Properties For Sale</h2>
                    <div className="flex gap-2">
                        <button className="p-2">
                            <Image src="/left arrow.svg" alt="Previous" width={40} height={40} />
                        </button>
                        <button className="p-2">
                            <Image src="/right arrow.svg" alt="Next" width={40} height={40} />
                        </button>
                    </div>
                </div>
                <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
                    {properties.map((p) => (
                        <div key={p.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all">
                            <div className="relative w-full h-55">
                                <Image src={p.img} alt={p.location} fill className="object-cover rounded-b-2xl" />
                            </div>
                            <div className="p-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-bold">{p.price}</h3>
                                    <div className="flex items-center gap-2">
                                        {p.verified && (
                                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">✅ Verified</span>
                                        )}
                                        <button className="bg-white border border-gray-300 rounded-full p-1 shadow-sm hover:scale-105 transition">🤍</button>
                                    </div>
                                </div>
                                <p className="text-gray-500 text-sm">{p.owner}</p>
                                <div className="flex gap-2 mt-3 text-[14px] font-semibold flex-wrap">
                                    <span className="px-2 py-1 bg-[#0000000D] text-[#2450A0] rounded-md">{p.bhk} <span className="text-[#0A0909A6]">BHK</span></span>
                                    <span className="px-2 py-1 bg-[#0000000D] text-[#2450A0] rounded-md">{p.bath} <span className="text-[#0A0909A6]">BA</span></span>
                                    <span className="px-2 py-1 bg-[#0000000D] text-[#2450A0] rounded-md">{p.sqft} <span className="text-[#0A0909A6]">sqft</span></span>
                                </div>
                                <div className="flex items-center gap-2 mt-4 text-[10px] text-[#0A090999] font-extrabold">
                                    <img src="/locationcards.png" /> <span>{p.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Properties For Rent Section */}
            <section className="w-[87%] mx-auto mt-[40px]">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-[24px] text-[#121828] font-extrabold">Properties For Rent</h2>
                    <div className="flex gap-2">
                        <button className="p-2 ">
                            <Image src="/left arrow.svg" alt="Previous" width={40} height={40} />
                        </button>
                        <button className="p-2">
                            <Image src="/right arrow.svg" alt="Next" width={40} height={40} />
                        </button>
                    </div>
                </div>
                <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
                    {properties.map((p) => (
                        <div key={p.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all">
                            <div className="relative w-full h-55">
                                <Image src={p.img} alt={p.location} fill className="object-cover rounded-b-2xl" />
                            </div>
                            <div className="p-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-bold">{p.price}</h3>
                                    <div className="flex items-center gap-2">
                                        {p.verified && (
                                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">✅ Verified</span>
                                        )}
                                        <button className="bg-white border border-gray-300 rounded-full p-1 shadow-sm hover:scale-105 transition">🤍</button>
                                    </div>
                                </div>
                                <p className="text-gray-500 text-sm">{p.owner}</p>
                                <div className="flex gap-2 mt-3 text-[14px] font-semibold flex-wrap">
                                    <span className="px-2 py-1 bg-[#0000000D] text-[#2450A0] rounded-md">{p.bhk} <span className="text-[#0A0909A6]">BHK</span></span>
                                    <span className="px-2 py-1 bg-[#0000000D] text-[#2450A0] rounded-md">{p.bath} <span className="text-[#0A0909A6]">BA</span></span>
                                    <span className="px-2 py-1 bg-[#0000000D] text-[#2450A0] rounded-md">{p.sqft} <span className="text-[#0A0909A6]">sqft</span></span>
                                </div>
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