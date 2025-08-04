// 'use client';

// import Header2 from "@/components/Header2";

// export default function SellingOptions() {
//   return (
//     <div className="relative font-nunito text-gray-900 bg-gray-50 min-h-screen overflow-hidden">
//       {/* 🎨 Background Gradient Bubbles */}
//       <div
//         className="absolute rounded-full bg-gradient-to-br from-[#C4D9FF] to-[#FFFFFF] z-0"
//         style={{
//           width: '299.77px',
//           height: '321.24px',
//           top: '-174.05px',
//           right: '-144px',
//           transform: 'rotate(100deg)',
//         }}
//       ></div>

//       <div
//         className="absolute rounded-full bg-gradient-to-br from-[#88abeb] to-[#FFFFFF] z-0 border-2 border-[#C4D9FF]"
//         style={{
//           width: '323.32px',
//           height: '348.24px',
//           top: '-238.69px',
//           right: '-169px',
//           transform: 'rotate(-31.84deg)',
//         }}
//       ></div>

//       {/* 🧭 Header */}
//       <Header2 />

//       {/* 📄 Main Content */}
//       <main className="pt-[210px] pb-12 flex justify-center relative z-10">
//         <div className="w-[375px] px-4 flex flex-col items-center gap-6 text-center">
//           <div className="flex flex-col items-center gap-3 w-full">
//             <h2 className="text-xl font-extrabold text-[#121212]">
//               Find out your <br />
//               <span className="text-[#121212]">selling options</span>
//             </h2>

//             <button className="self-end text-sm text-[#2450A0] border border-[#2450A0] px-4 py-1 rounded-full hover:bg-[#2450A0]/10">
//               Go Back
//             </button>
//           </div>

//           {/* ⚠️ No Options Box */}
//           <div className="bg-white p-5 rounded-xl shadow-md text-center space-y-4">
//             <p className="text-sm text-gray-600">
//               Unfortunately, we’re not able to show <br /> any selling options for this home.
//             </p>

//             <p className="font-semibold text-gray-800 text-sm">
//               Resources for sellers
//             </p>

//             <div className="flex flex-col gap-3">
//               <button className="border border-[#2450A0] text-[#2450A0] text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#2450A0]/10">
//                 VIEW OUR SELLER GUIDE
//               </button>
//               <button className="border border-[#2450A0] text-[#2450A0] text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#2450A0]/10">
//                 FIND AN AGENT
//               </button>
//             </div>
//           </div>

//           {/* 🖼️ User illustration */}
//           <div className="relative mt-6">
//             <img
//               src="/pana.png"
//               alt="Current Location"
//               className="w-full max-w-xs"
//             />
//             <p className="absolute bottom-[10px] left-1/2 transform -translate-x-1/2 text-xs font-semibold text-white bg-[#2450A0] px-3 py-1 rounded-full shadow">
//               CURRENT LOCATION
//             </p>
//           </div>
//         </div>
//       </main>

//       {/* 🔵 Bottom-left decorative bubble */}
//       <img
//         src="/bubble 4.png"
//         alt="Bottom Bubble"
//         className="absolute bottom-0 z-0"
//         style={{ width: "150px" }}
//       />
//     </div>
//   );
// }
import React from 'react';

const SellingOptions = () => {
  return (
    <div className="min-h-screen bg-white px-4 pt-4">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-[24px]  font-extrabold text-[#000000] leading-[1.1] "   style={{ fontFamily: 'Poppins,' }}>
          Find out your <br></br> selling options
        </h1>
        <button className="border border-[[#2450A0] text-[14px] text-[#333] px-4 py-1 rounded-full">
          Go Back
        </button>
      </div>

      {/* Main Content Box */}
      <div className="bg-[#FFFFFF] rounded-xl p-6 text-center shadow-md">
        <p className="text-[#000000] text-[16px] mb-4" style={{ fontFamily: 'Poppins,' }}>
          Unfortunately, we’re not able to show any selling options for this home.
        </p>
        <h2 className="text-[#000000] text-[18px] font-bold  mb-4" style={{ fontFamily: 'Poppins,' }}>
          Resources for sellers
        </h2>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button className="border border-[#2666EF] text-[14px] text-[#2450A0] font-semibold px-4 py-2 rounded-full">
            VIEW OUR SELLER GUIDE
          </button>
          <button className="border border-[#2666EF] text-[14px] text-[#2450A0] font-semibold px-4 py-2 rounded-full">
            FIND AN AGENT
          </button>
        </div>
      </div>

      {/* Illustration (placeholder) */}
      <div className="mt-20 flex justify-center ml-30">
        <img
          src="/pana.png"
          alt="Illustration"
          className="w-[200px] h-auto"
        />
      </div>
        <img
       src="/bubble 4.png"
        alt="Bottom Bubble"
        className="absolute bottom-0 z-0"
       style={{ width: "150px" }}
       />
    </div>
  );
};

export default SellingOptions;
