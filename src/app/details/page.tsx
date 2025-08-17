"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Header2 from "@/components/Header2";
import Footer from "@/components/Footer";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
});
const [mapCenter, setMapCenter] = useState<[number, number]>([41.7606, -88.3201]);
 const [sortedData, setSortedData] = useState([
    {
      id: 1,
      lat: 41.7606,
      lng: -88.3201,
      bhk: 2,
      address: "1030 Spruce St, Aurora, IL 60506",
      price: "$280,000",
      imageUrl: "/details/1.png",
    },
    {
      id: 2,
      lat: 41.7706,
      lng: -88.3301,
      bhk: 3,
      address: "12 Oakwood Ave, Aurora, IL 60506",
      price: "$350,000",
      imageUrl: "/details/2.png",
    },
  ]);
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
        <div
          className="absolute top-5 left-0 bg-[#2BAD4A] text-white md:mt-[130px] font-semibold md:px-6 md:py-2 py-1 px-4 
                        rounded-tr-full rounded-br-full rounded-tl-lg rounded-bl-lg
                        shadow-md z-20 border-t-2 border-r-2 border-b-2 border-white"
        >
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

          const roundedClass =
            idx % 2 === 0
              ? "rounded-bl-[40px] rounded-tr-[40px] rounded-tl-[40px]"
              : "rounded-br-[40px] rounded-bl-[40px] rounded-tl-[40px]";

          return (
            <div
              key={idx}
              className={`relative cursor-pointer border-4 border-white shadow-2xl ${roundedClass}`}
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
                className="cursor-pointer border-4 border-white shadow-2xl rounded-lg"
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

      {/* 🏠 Card and Map Layout */}
      <div className="w-[90%] mx-auto mt-9 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left side (Card + Owner) */}
        <div className="flex flex-col justify-between h-full">
          {/* Property Card */}
          <div className="p-4 bg-white rounded-2xl shadow-lg relative flex-1">
            {/* Price in top-left */}
            <span className="absolute top-4 left-4 text-2xl font-extrabold text-[#2450A0]">
              $280,000
            </span>

            {/* Top-right icons */}
            <div className="absolute top-4 right-4 flex space-x-2 text-gray-600">
              <div className="flex items-center space-x-1 bg-gray-100 border border-gray-300 rounded-2xl px-2 py-1">
                <img src="/details/heart.svg" alt="Likes" className="w-5 h-5" />
                <span className="text-sm text-gray-700 font-medium">25k</span>
              </div>
              <div className="flex items-center space-x-1 bg-gray-100 border border-gray-300 rounded-2xl px-2 py-1">
                <img
                  src="/details/share-08.svg"
                  alt="Share"
                  className="w-5 h-5 cursor-pointer"
                />
              </div>
              <div className="flex items-center space-x-1 bg-gray-100 border border-gray-300 rounded-2xl px-2 py-1">
                <img
                  src="/details/warning-2.svg"
                  alt="Info"
                  className="w-5 h-5 cursor-pointer"
                />
              </div>
            </div>

            {/* Property details */}
            <div className="flex space-x-3 text-sm mt-10">
              <div className="flex items-center space-x-1 bg-gray-100 border border-gray-300 rounded-2xl px-2 py-1">
                <img
                  src="/details/Bed icon.svg"
                  alt="Bed"
                  className="w-5 h-5 text-[#2450A0]"
                />
                <span className="text-gray-700 font-bold text-base">
                  <span className="text-[#2450A0] font-extrabold">2</span> BHK
                </span>
              </div>
              <div className="flex items-center space-x-1 bg-gray-100 border border-gray-300 rounded-2xl px-2 py-1">
                <img
                  src="/details/bathtub-01.svg"
                  alt="Bath"
                  className="w-5 h-5 text-[#2450A0]"
                />
                <span className="text-gray-700 font-bold text-base">
                  <span className="text-[#2450A0] font-extrabold">2</span> BA
                </span>
              </div>
              <div className="flex items-center space-x-1 bg-gray-100 border border-gray-300 rounded-2xl px-2 py-1">
                <img
                  src="/details/ruler.svg"
                  alt="Area"
                  className="w-5 h-5 text-[#2450A0]"
                />
                <span className="text-gray-700 font-bold text-base">
                  <span className="text-[#2450A0] font-extrabold">24</span> sqft
                </span>
              </div>
            </div>

            <div className="mt-3 w-full flex items-center space-x-2 text-sm text-gray-700 border border-gray-300 rounded-full px-3 py-2 bg-gray-50">
              <img
                src="/details/location.svg"
                alt="Location"
                className="w-5 h-5"
              />
              <span>1030 Spruce St, Aurora, IL 60506</span>
            </div>
          </div>

          {/* Owner heading */}
          <div className="mt-4 p-4 text-2xl md:text-3xl font-extrabold text-black flex-0">
            Owned <span className="text-[#2450A0]">by</span>
          </div>

          {/* Owner Card */}
          <div className="p-4 bg-white shadow-lg rounded-2xl w-full md:w-96 mx-auto flex flex-col">
            <div className="flex w-full items-center space-x-4">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200 shadow-lg flex-shrink-0">
                <img
                  src="/details/owner.jpg"
                  alt="Owner"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col space-y-2 flex-1">
                <div className="flex items-center space-x-2 bg-gray-100 rounded-xl px-3 py-1">
                  <img
                    src="/details/call-calling.svg"
                    alt="Phone"
                    className="w-5 h-5"
                  />
                  <span className="text-gray-700 text-sm">+91 9292989798</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-100 rounded-xl px-3 py-1">
                  <img
                    src="/details/sms-tracking.svg"
                    alt="Email"
                    className="w-5 h-5"
                  />
                  <span className="text-gray-700 text-sm">shop@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between w-full">
              <div className="flex flex-col">
                <h2 className="text-xl font-bold text-black">Josef Jorden</h2>
                <p className="text-gray-500 text-sm flex items-center space-x-1">
                  <img
                    src="/details/location.svg"
                    alt="Location"
                    className="w-4 h-4"
                  />
                  <span>Aurora, IL</span>
                </p>
              </div>
              <button className="bg-[#2450A0] text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition">
                SEE PROFILE
              </button>
            </div>
          </div>
        </div>

        {/* Right side (Map) */}
        <Map
  center={mapCenter}
  markers={sortedData.map((p: { id: any; lat: number; lng: number; bhk: any; address: any; price: any; imageUrl: any; }) => ({
    id: p.id,
    position: [p.lat, p.lng] as [number, number], // make sure lat/lng are numbers
    title: `${p.bhk} BHK - ${p.address}`,
    price: p.price,
    imageUrl: p.imageUrl,
  }))}
/>

      </div>

      {/* 🔽 New Section: Main Features + Apartment */}
      <div className="w-[90%] mx-auto mt-9 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-6 bg-white rounded-2xl shadow-lg">
          <h2 className="text-2xl font-extrabold text-black mb-4">
            Main <span className="text-[#2450A0]">Features</span>
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center space-x-2">
              <img src="/details/check.svg" alt="check" className="w-5 h-5" />
              <span>Spacious Living Room</span>
            </li>
            <li className="flex items-center space-x-2">
              <img src="/details/check.svg" alt="check" className="w-5 h-5" />
              <span>Modern Kitchen</span>
            </li>
            <li className="flex items-center space-x-2">
              <img src="/details/check.svg" alt="check" className="w-5 h-5" />
              <span>Balcony with City View</span>
            </li>
            <li className="flex items-center space-x-2">
              <img src="/details/check.svg" alt="check" className="w-5 h-5" />
              <span>Reserved Parking</span>
            </li>
          </ul>
        </div>
        <div className="p-6 rounded-2xl">
          <div className="mt-4 p-4 text-2xl md:text-3xl font-extrabold text-black flex-0">
            Apartment
          </div>
          <div className="p-4 bg-white shadow-lg rounded-2xl w-full md:w-96 mx-auto flex flex-col">
            <div className="flex w-full items-center space-x-4">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200 shadow-lg flex-shrink-0">
                <img
                  src="/details/building.png"
                  alt="Apartment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col space-y-2 flex-1">
                <div className="flex items-center space-x-2 bg-gray-100 rounded-xl px-3 py-1">
                  <img
                    src="/details/call-calling.svg"
                    alt="Phone"
                    className="w-5 h-5"
                  />
                  <span className="text-gray-700 text-sm">+91 9292989798</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-100 rounded-xl px-3 py-1">
                  <img
                    src="/details/sms-tracking.svg"
                    alt="Email"
                    className="w-5 h-5"
                  />
                  <span className="text-gray-700 text-sm">shop@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between w-full">
              <div className="flex flex-col">
                <h2 className="text-xl font-bold text-black">Ilahi Apartment</h2>
                <p className="text-gray-500 text-sm flex items-center space-x-1">
                  <img
                    src="/details/location.svg"
                    alt="Location"
                    className="w-4 h-4"
                  />
                  <span>Aurora, IL</span>
                </p>
              </div>
              <div className="flex space-x-3 text-sm mt-10">
                <div className="flex items-center space-x-1 bg-gray-100 border border-gray-300 rounded-2xl px-2 py-1">
                  <img
                    src="/details/Bed icon.svg"
                    alt="Bed"
                    className="w-5 h-5 text-[#2450A0]"
                  />
                  <span className="text-gray-700 font-bold text-base">
                    <span className="text-[#2450A0] font-extrabold">2</span> BHK
                  </span>
                </div>
                <div className="flex items-center space-x-1 bg-gray-100 border border-gray-300 rounded-2xl px-2 py-1">
                  <img
                    src="/details/bathtub-01.svg"
                    alt="Bath"
                    className="w-5 h-5 text-[#2450A0]"
                  />
                  <span className="text-gray-700 font-bold text-base">
                    <span className="text-[#2450A0] font-extrabold">2</span> BA
                  </span>
                </div>
                <div className="flex items-center space-x-1 bg-gray-100 border border-gray-300 rounded-2xl px-2 py-1">
                  <img
                    src="/details/ruler.svg"
                    alt="Area"
                    className="w-5 h-5 text-[#2450A0]"
                  />
                  <span className="text-gray-700 font-bold text-base">
                    <span className="text-[#2450A0] font-extrabold">24</span> sqft
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}