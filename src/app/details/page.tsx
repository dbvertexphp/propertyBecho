"use client";

import Image from "next/image";
import Header2 from "@/components/Header2";
import Footer from "@/components/Footer";

export default function Details() {
  return (
    <div>
      <Header2 />

      {/* 🖼️ Image with Tag inside bordered container */}
      <div className="flex justify-center mt-[150px]">
        {/* 🔲 Container with white border */}
        <div className="relative w-[87%] h-[70vh] rounded-2xl bg-white p-2 shadow-md">
          {/* 📸 Image inside container */}
          <div className="w-full h-full rounded-2xl overflow-hidden relative">
            <Image
              src="/details/banner.png"
              alt="Rounded Display"
              fill
              className="object-cover"
            />

            {/* 🟩 Tag — inside border container */}
            <div className="absolute top-0 left-0 translate-x-[-1px] translate-y-[-1px] bg-[#2bad4a] text-white text-xl font-bold px-6 py-2 shadow-md rounded-tr-full rounded-br-full z-10">
              For sale by owner
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
