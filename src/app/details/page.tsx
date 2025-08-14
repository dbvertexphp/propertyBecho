"use client";

import Image from "next/image";
import Header2 from "@/components/Header2";
import Footer from "@/components/Footer";

export default function Details() {
  return (
    <div>
      <Header2 />

      {/* 🖼️ Centered Image before Footer */}
      <div className="md:w-[99%] md:h-[95vh] w-[95%] h-[55vh] relative mx-auto md:mt-1 mt-[150px] rounded-xl overflow-hidden">
        {/* ✅ Image */}
        <Image
          src="/details/banner.png"
          alt="Banner Before Footer"
          fill
          className="object-cover"
        />

        {/* ✅ Tag: For sale by owner */}
        <div className="absolute top-5 left-0 bg-[#2BAD4A] text-white md:mt-[130px] font-semibold md:px-6 md:py-2 py-1 px-4 rounded-tr-full rounded-br-full shadow-lg z-10">
          For sale by owner
        </div>
      </div>

      <Footer />
    </div>
  );
}
