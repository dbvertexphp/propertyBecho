// "use client";

// import { useState } from "react";
// import Header2 from "@/components/Header2";

// export default function Uploadlisting() {
//     const [propertyTitle, setPropertyTitle] = useState("");
//     const [expectedPrice, setExpectedPrice] = useState("");
//     const [description, setDescription] = useState("");
//     const [shortPrice, setShortPrice] = useState("");

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         console.log({ propertyTitle, expectedPrice, description });
//     };

//     const formatIndianPrice = (value: string) => {
//         const numericValue = value.replace(/[^0-9]/g, "");
//         if (numericValue === "") return "";
//         return Number(numericValue).toLocaleString("en-IN");
//     };

//     const getShortIndianCurrencyFormat = (amount: string): string => {
//         const number = parseInt(amount.replace(/,/g, "") || "0");

//         if (number >= 10000000) {
//             return `₹ ${(number / 10000000).toFixed(1)} Cr`;
//         } else if (number >= 100000) {
//             return `₹ ${(number / 100000).toFixed(1)} Lacs`;
//         } else if (number >= 1000) {
//             return `₹ ${(number / 1000).toFixed(1)} K`;
//         } else {
//             return `₹ ${number}`;
//         }
//     };

//     const handleExpectedPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const input = e.target.value;
//         const formatted = formatIndianPrice(input);
//         setExpectedPrice(formatted);
//         setShortPrice(getShortIndianCurrencyFormat(formatted));
//     };

//     return (

//         <div
//             className="relative text-gray-900 bg-gray-50 min-h-screen overflow-hidden"
//             style={{ fontFamily: "'Poppins', sans-serif" }}
//         >
//             <link
//                 href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
//                 rel="stylesheet"
//             />

//             {/* Decorative Bubbles */}
//             <div className="relative">
//                 <img
//                     src="/bubble.png"
//                     alt="Bubble 2"
//                     className="absolute top-0 right-0 w-[120px] md:w-[190px] z-0 opacity-80"
//                 />
//                 <img
//                     src="/bubble1.png"
//                     alt="Bubble 1"
//                     className="absolute top-0 right-0 w-[90px] md:w-[134px] z-10"
//                 />
//             </div>

//             {/* Header */}
//             <Header2 />

//             {/* Main Section */}
//             <main className="pt-[120px] pb-12 flex justify-center relative z-10" style={{ top: "35px" }}>

//                 <div className="w-full px-4" style={{ maxWidth: "1090px" }}>
//                     <div className="w-[50px] h-[50px] flex items-center justify-center border border-[#E6E6E6] rounded-[12px] bg-white" style={{ border: 'solid #0000001C', borderRadius: '16px' }}>
//                         <img
//                             src="/facilities/call.png"
//                             alt="Call Icon"
//                             className="w-[29px] h-[29px]"
//                         />
//                     </div>
//                     <h2 className="text-2xl font-[700] text-black" style={{ marginTop: '33px' }}>Rent a home </h2>
//                     <p className="text-sm text-gray-500 mt-3">
//                         Fill out the form with your requirements and we’ll connect you with
//                         properties that match your needs fast, easy, and reliable.
//                     </p>

//                     {/* Form */}
//                     {/* Stepper */}
//                     {/* Stepper */}
//                     <div className="flex items-center justify-between mt-6 relative">
//                         {[
//                             { label: "Property Details" },
//                             { label: "Price Details" },
//                             { label: "Availability" },
//                             { label: "Others" },
//                             { label: "Upload Images" },
//                         ].map((step, index) => {
//                             const activeIndex = 1; // Price Details active
//                             const isActive = index === activeIndex;
//                             const isCompleted = index < activeIndex;

//                             return (
//                                 <div key={index} className="flex flex-col items-center flex-1 relative">
//                                     {/* Line before circle */}
//                                     {index > 0 && (
//                                         <div
//                                             className={`absolute top-2 left-0 w-full h-[2px] ${isCompleted ? "bg-blue-500" : "bg-gray-300"
//                                                 }`}
//                                             style={{ zIndex: 0 }}
//                                         ></div>
//                                     )}

//                                     {/* Circle */}
//                                     <div
//                                         className={`relative z-10 flex items-center justify-center w-5 h-5 rounded-full border-2 ${isActive
//                                                 ? "border-blue-500 text-blue-500"
//                                                 : isCompleted
//                                                     ? "border-blue-500 bg-blue-500 text-white"
//                                                     : "border-gray-300 text-gray-300"
//                                             }`}
//                                     >
//                                         {isActive && <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>}
//                                     </div>

//                                     {/* Label */}
//                                     <span
//                                         className={`mt-2 text-xs ${isActive
//                                                 ? "text-blue-500 font-medium"
//                                                 : "text-gray-500"
//                                             }`}
//                                     >
//                                         {step.label}
//                                     </span>
//                                 </div>
//                             );
//                         })}
//                     </div>


//                     {/* Expected Rent */}
//                     <div className="mt-8">
//                         <label className="block text-sm font-semibold mb-2">
//                             Expected Rent<span className="text-red-500">*</span>
//                         </label>
//                         <div className="flex items-center border rounded-lg px-3 py-2 bg-white">
//                             <span className="text-blue-600 font-medium">₹</span>
//                             <input
//                                 type="text"
//                                 value={expectedPrice}
//                                 onChange={handleExpectedPriceChange}
//                                 placeholder="0"
//                                 className="flex-1 ml-2 focus:outline-none"
//                             />
//                             <span className="text-gray-500 text-sm">/Month</span>
//                         </div>
//                         {shortPrice && (
//                             <p className="text-blue-600 text-sm mt-1">{shortPrice}</p>
//                         )}
//                     </div>

//                     {/* Expected Deposit */}
//                     <div className="mt-5">
//                         <label className="block text-sm font-semibold mb-2">
//                             Expected Deposit<span className="text-red-500">*</span>
//                         </label>
//                         <div className="flex items-center border rounded-lg px-3 py-2 bg-white">
//                             <span className="text-blue-600 font-medium">₹</span>
//                             <input
//                                 type="text"
//                                 placeholder="0"
//                                 className="flex-1 ml-2 focus:outline-none"
//                             />
//                             <span className="text-gray-500 text-sm">/Month</span>
//                         </div>
//                         <p className="text-blue-600 text-sm mt-1">₹ 1.2 Lacs</p>
//                     </div>

//                     {/* Rent Negotiable */}
//                     <div className="mt-4 flex items-center gap-2">
//                         <input type="checkbox" id="negotiable" className="accent-blue-600" />
//                         <label htmlFor="negotiable" className="text-sm text-gray-700">
//                             Rent Negotiable
//                         </label>
//                     </div>

//                     {/* Monthly Maintenance */}
//                     <div className="mt-4">
//                         <label className="block text-sm font-semibold mb-2">
//                             Monthly Maintenance
//                         </label>
//                         <select className="w-full border rounded-lg px-3 py-2 text-sm bg-white focus:outline-none">
//                             <option>Maintenance Included</option>
//                             <option>Extra Charges</option>
//                         </select>
//                     </div>

//                     {/* Save & Next Button */}
//                     <button
//                         type="submit"
//                         className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-medium"
//                     >
//                         SAVE & NEXT
//                     </button>


//                 </div>
//             </main>
//         </div>
//     );
// }
"use client";

import { useState } from "react";
import Header2 from "@/components/Header2";
export default function Uploadlisting() {
    const [propertyTitle, setPropertyTitle] = useState("");
    const [expectedPrice, setExpectedPrice] = useState("");
    const [description, setDescription] = useState("");
    const [shortPrice, setShortPrice] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ propertyTitle, expectedPrice, description });
    };

    const formatIndianPrice = (value: string) => {
        const numericValue = value.replace(/[^0-9]/g, "");
        if (numericValue === "") return "";
        return Number(numericValue).toLocaleString("en-IN");
    };

    const getShortIndianCurrencyFormat = (amount: string): string => {
        const number = parseInt(amount.replace(/,/g, "") || "0");

        if (number >= 10000000) {
            return `₹ ${(number / 10000000).toFixed(1)} Cr`;
        } else if (number >= 100000) {
            return `₹ ${(number / 100000).toFixed(1)} Lacs`;
        } else if (number >= 1000) {
            return `₹ ${(number / 1000).toFixed(1)} K`;
        } else {
            return `₹ ${number}`;
        }
    };

    const handleExpectedPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        const formatted = formatIndianPrice(input);
        setExpectedPrice(formatted);
        setShortPrice(getShortIndianCurrencyFormat(formatted));
    };






// Stepper configuration
const steps = [
    { label: "Property Details" },
    { label: "Price Details" },
    { label: "Availability" },
    { label: "Others" },
    { label: "Upload Images" },
];
const activeIndex = 1; // "Price Details" is the current step

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
        <main className="pt-[120px] pb-12 flex justify-center relative z-10" style={{ top: "35px" }}>

            <div className="w-full px-4" style={{ maxWidth: "1090px" }}>
                <div className="w-[50px] h-[50px] flex items-center justify-center border border-[#E6E6E6] rounded-[12px] bg-white" style={{ border: 'solid #0000001C', borderRadius: '16px' }}>
                    <img
                        src="/facilities/call.png"
                        alt="Call Icon"
                        className="w-[29px] h-[29px]"
                    />
                </div>
                <h2 className="text-2xl font-[700] text-black mt-[33px]">
                        Rent a Home
                    </h2>
                    <p className="text-sm text-gray-500 mt-3">
                        Fill out the form with your requirements and we’ll connect you
                        with properties that match your needs fast, easy, and reliable.
                    </p>

                {/* Stepper */}
                <div className="w-full mt-8 mb-6 px-4 sm:px-0">
                    <div className="relative">
                        {/* Lines Container to connect the centers of the first and last circles */}
                        <div className="absolute top-3 left-1/2 -translate-x-1/2" style={{ width: `calc(100% - 4rem)` }}>
                            {/* Background Gray Line */}
                            <div className="w-full h-[2px] bg-gray-200"></div>
                            {/* Progress Blue Line */}
                            <div
                                className="absolute top-0 h-[2px] bg-[#2450A0]"
                                style={{ width: `${(activeIndex / (steps.length - 1)) * 100}%` }}
                            ></div>
                        </div>

                        {/* Steps Container */}
                        <div className="flex justify-between">
                            {steps.map((step, index) => {
                                const isActive = index === activeIndex;
                                const isCompleted = index < activeIndex;

                                return (
                                    <div key={step.label} className="relative z-10 flex flex-col items-center">
                                        {/* Circle */}
                                        <div
                                            className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300
                                                ${isCompleted ? "bg-[#2450A0]" : ""}
                                                ${isActive ? "bg-white border-2 border-[#2450A0]" : ""}
                                                ${!isCompleted && !isActive ? "bg-gray-200" : ""}
                                            `}
                                        >
                                            {isCompleted && (
                                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            )}
                                            {isActive && <div className="w-3 h-3 bg-[#2450A0] rounded-full"></div>}
                                        </div>
                                        {/* Label */}
                                        <p className={`mt-2 text-center text-sm font-medium transition-colors duration-300
                                            ${isActive ? "text-[#0A0909]" : ""}
                                            ${isCompleted ? "text-[#0A0909]" : "text-[#2450A0]"}
                                        `}>
                                            {step.label.split(" ")}
                                            {step.label.includes(" ") && <br />}
                                            {step.label.split(" ").slice(1).join(" ")}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>


                {/* Expected Rent */}
                <div className="mt-8">
                    <label className="block text-[16px] font-semibold text-[#0A0909] mb-2">
                        Expected Rent<span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center border rounded-lg px-3 py-2 bg-white">
                        <span className="text-blue-600 font-medium">₹</span>
                        <input
                            type="text"
                            value={expectedPrice}
                            onChange={handleExpectedPriceChange}
                            placeholder="0"
                            className="flex-1 ml-2 focus:outline-none"
                        />
                        <span className="text-[#0A090966] text-[15px]">/Month</span>
                    </div>
                    {shortPrice && (
                        <p className="text-blue-600 text-sm mt-1">{shortPrice}</p>
                    )}
                </div>

                {/* Expected Deposit */}
                <div className="mt-5">
                    <label className="block text-[16px] font-semibold text-[#0A0909] mb-2">
                        Expected Deposit<span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center border rounded-lg px-3 py-2 bg-white">
                        <span className="text-blue-600 font-medium">₹</span>
                        <input
                            type="text"
                            placeholder="0"
                            className="flex-1 ml-2 focus:outline-none"
                        />
                        <span className="text-[#0A090966] text-[15px]">/Month</span>
                    </div>
                    <p className="text-blue-600 text-sm mt-1">₹ 1.2 Lacs</p>
                </div>

                {/* Rent Negotiable */}
                <div className="mt-4 flex items-center gap-2">
                    <input type="checkbox" id="negotiable" className="accent-blue-600" />
                    <label htmlFor="negotiable" className="text-[14px] text-[#0A0909] font-semibold">
                        Rent Negotiable
                    </label>
                </div>

                {/* Monthly Maintenance */}
                <div className="mt-4">
                    <label className="block text-[16px] font-semibold text-[#0A0909] mb-2">
                        Monthly Maintenance
                    </label>
                    <select className="w-full border rounded-lg px-3 py-2 text-sm text-[#0A090966] bg-white focus:outline-none">
                        <option>Maintenance Included</option>
                        <option>Extra Charges</option>
                    </select>
                </div>

                {/* Save & Next Button */}
                <button
                    type="submit"
                    className="w-full mt-6 bg-[#2450A0] text-white py-3 rounded-lg font-medium"
                >
                    SAVE & NEXT
                </button>


            </div>
        </main>
    </div>
);
}
