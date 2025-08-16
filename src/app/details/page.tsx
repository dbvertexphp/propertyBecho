"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header2 from "@/components/Header2";
import Footer from "@/components/Footer";

export default function Details() {
  const allImages = [
    "/details/1.png",
    "/details/2.png",
    "/details/3.png",
    "/details/4.png",
    "/details/5.png",
    "/details/6.png",
    "/details/7.png",
    "/details/8.png",
    "/details/9.png",
    "/details/10.png",
    "/details/11.png",
    "/details/12.png",
    "/details/13.png",
    "/details/14.png",
    "/details/15.png",
    "/details/16.png",
  ];

   const [bannerImage, setBannerImage] = useState("/details/banner.png");
  const [showModal, setShowModal] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // ✅ Detect screen size only on client
  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div>
      <Header2 />

      {/* 🖼️ Banner */}
      <div className="relative mx-auto md:mt-1 mt-[150px] md:w-[99%] md:h-[95vh] w-[95%] h-[55vh] rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
        <Image src={bannerImage} alt="Banner" fill className="object-cover" />

        {/* ✅ Tag */}
        <div className="absolute top-5 left-0 bg-[#2BAD4A] text-white md:mt-[130px] font-semibold md:px-6 md:py-2 py-1 px-4 
                        rounded-tr-full rounded-br-full rounded-tl-lg rounded-bl-lg
                        shadow-md z-20 border-t-2 border-r-2 border-b-2 border-white">
          For sale by owner
        </div>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-30">
    <Image 
  src="/details/scroll.svg" 
  alt="icon" 
  width={90} 
  height={90} 
  className="drop-shadow-lg"
/>
  </div>
      </div>
      {/* 📸 Image Grid */}
<div className="grid grid-cols-4 md:grid-cols-6 gap-1 w-[89%] mx-auto mt-4">
  {allImages.slice(0, isDesktop ? 6 : 4).map((img, idx) => {
    const isLast = isDesktop ? idx === 5 : idx === 3;

    // 🎨 Alternate rounded styles
    const roundedClass =
      idx % 2 === 0
        ? "rounded-bl-[40px] rounded-tr-[40px] rounded-tl-[40px]"
        : "rounded-br-[40px] rounded-bl-[40px] rounded-tl-[40px]";

    return (
      <div
        key={idx}
        className={`relative cursor-pointer border-4 border-white shadow-2xl ${roundedClass}`} // ✅ white border + shadow
        onClick={() => {
          if (isLast) {
            setShowModal(true);
          } else {
            setBannerImage(img);
          }
        }}
      >
        <Image
          src={img}
          alt={`Thumbnail ${idx + 1}`}
          width={200}
          height={150}
          className={`md:w-[250px] md:h-[200px] w-[80px] h-[80px] object-cover ${roundedClass}`}
        />

        {/* Overlay for last image */}
        {isLast && (
          <div
            className={`absolute inset-0 bg-black/60 flex items-center justify-center text-white font-extrabold text-2xl ${roundedClass}`}
          >
            {isDesktop ? "10+" : "12+"}
          </div>
        )}
      </div>
    );
  })}
</div>

{/* 🔲 Modal for All Images */}
{showModal && (
  <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 overflow-y-auto">
    <div className="bg-white p-4 rounded-lg grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl w-full">
      {allImages.map((img, idx) => (
        <div
          key={idx}
          className="cursor-pointer border-4 border-white shadow-2xl rounded-lg" // ✅ white border + shadow in modal
          onClick={() => {
            setBannerImage(img);
            setShowModal(false);
          }}
        >
          <Image
            src={img}
            alt={`Modal ${idx + 1}`}
            width={250}
            height={200}
            className="w-full h-32 object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
    <button
      className="absolute top-5 right-5 text-white text-2xl"
      onClick={() => setShowModal(false)}
    >
      ✕
    </button>
  </div>
)}


      <Footer />
    </div>
  );
}