"use client";

import { useState } from "react";
import Header2 from "@/components/Header2";

export default function Uploadlisting() {
    const [location, setLocation] = useState("");
    const [propertyType, setPropertyType] = useState("only_rent");
    const [propertyName, setPropertyName] = useState("");
    const [bhkType, setBhkType] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({
            location,
            propertyType,
            propertyName,
            bhkType
        });
    };

    return (
        <div
            className="relative text-gray-900 bg-gray-50 min-h-screen overflow-hidden"
            style={{ fontFamily: "'Poppins', sans-serif" }}
        >
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
                rel="stylesheet"
            />

            {/* Decorative Bubbles */}
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

            {/* Main Section */}
            <main
                className="pt-[120px] pb-12 flex justify-center relative z-10"
                style={{ top: "35px" }}
            >
                <div
                    className="w-full px-4"
                    style={{ maxWidth: "1090px" }}
                >
                    {/* Icon */}
                    <div
                        className="w-[50px] h-[50px] flex items-center justify-center border border-[#E6E6E6] rounded-[12px] bg-white"
                        style={{ border: "solid #0000001C", borderRadius: "16px" }}
                    >
                        <img
                            src="/facilities/call.png"
                            alt="Call Icon"
                            className="w-[29px] h-[29px]"
                        />
                    </div>

                    {/* Heading */}
                    <h2 className="text-2xl font-[700] text-black mt-[33px]">
                        Rent a Home
                    </h2>
                    <p className="text-sm text-gray-500 mt-3">
                        Fill out the form with your requirements and we’ll connect you
                        with properties that match your needs fast, easy, and reliable.
                    </p>
                    <div className="flex items-center justify-between mt-6">
                        {[
                            { label: "Property Details", active: true },
                            { label: "Price Details", active: false },
                            { label: "Availability", active: false },
                            { label: "Others", active: false },
                            { label: "Upload Images", active: false },
                        ].map((step, index, arr) => (
                            <div key={index} className="flex-1 flex items-center">
                                {/* Circle */}
                                <div
                                    className={`w-5 h-5 flex items-center justify-center rounded-full border-2 ${step.active
                                        ? "border-[#2450A0] bg-white"
                                        : "border-gray-300 bg-white"
                                        }`}
                                >
                                    {step.active && (
                                        <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>
                                    )}
                                </div>

                                {/* Label */}
                                <span
                                    className={`ml-2 text-sm ${step.active ? "text-[#2450A0] font-medium" : "text-gray-500"
                                        }`}
                                >
                                    {step.label}
                                </span>

                                {/* Line to next */}
                                {index < arr.length - 1 && (
                                    <div className="flex-1 h-[2px] bg-gray-300 mx-2"></div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Form */}
                    <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
                        {/* Location */}
                        <input
                            type="text"
                            placeholder="Enter Rental House Location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none"
                        />

                        {/* Property Available For */}
                        {/* <div>
                            <label className="block text-[16px] font-bold mb-2 text-[#0A0909]">
                                Property Available For
                            </label>
                            <div className="flex items-center gap-4">
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="propertyType"
                                        value="only_rent"
                                        checked={propertyType === "only_rent" }
                                        onChange={(e) => setPropertyType(e.target.value)}
                                    />
                                    Only Rent
                                </label>
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="propertyType"
                                        value="only_lease"
                                        checked={propertyType === "only_lease"}
                                        onChange={(e) => setPropertyType(e.target.value)}
                                    />
                                    Only Lease
                                </label>
                            </div>
                        </div> */}
                        <div>
                            <label className="block text-[16px] font-semibold mb-2 text-[#0A0909] mt-5">
                                Property Available For
                            </label>
                            <div className="flex items-center gap-4">
                                {/* Only Rent */}
                                <label
                                    className={`flex items-center gap-2 cursor-pointer ${propertyType === "only_rent"
                                        ? "text-[#2450A0] font-semibold"
                                        : "text-[#121828]"
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        name="propertyType"
                                        value="only_rent"
                                        checked={propertyType === "only_rent"}
                                        onChange={(e) => setPropertyType(e.target.value)}
                                        className="accent-blue-600"
                                    />
                                    Only Rent
                                </label>

                                {/* Only Lease */}
                                <label
                                    className={`flex items-center gap-2 cursor-pointer ${propertyType === "only_lease"
                                        ? "text-[#2450A0] font-semibold"
                                        : "text-gray-700"
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        name="propertyType"
                                        value="only_lease"
                                        checked={propertyType === "only_lease"}
                                        onChange={(e) => setPropertyType(e.target.value)}
                                        className="accent-blue-600"
                                    />
                                    Only Lease
                                </label>
                            </div>

                            {/* Property Name */}
                            <div>
                                <label className="block text-[16px] font-semibold text-[#0A0909] mb-2 mt-8">
                                    Property Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Your Property Name"
                                    value={propertyName}
                                    onChange={(e) => setPropertyName(e.target.value)}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none"
                                />
                            </div>

                            {/* BHK Type */}
                            <div>
                                <label className="block text-[16px] font-semibold text-[#0A0909] mb-2 mt-5">
                                    BHK Type
                                </label>
                                <div className="grid grid-cols-3 gap-3">
                                    {["1 RK", "1 BHK", "2 BHK", "3 BHK", "4 BHK", "5+ BHK"].map(
                                        (type) => (
                                            <button
                                                type="button"
                                                key={type}
                                                onClick={() => setBhkType(type)}
                                                className={`border px-4 py-2 rounded-lg text-[14px] ${bhkType === type
                                                    ? "bg-[] text-[#2450A0] border-blue-500"
                                                    : "bg-white text-gray-700 border-gray-300"
                                                    }`}
                                            >
                                                {type}
                                            </button>
                                        )
                                    )}
                                </div>
                            </div>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full bg-[#2450A0]  text-white py-3 rounded-lg font-medium"
                            >
                                SAVE & NEXT
                            </button>
                    </form>
                </div>
            </main>
        </div>
    );
}