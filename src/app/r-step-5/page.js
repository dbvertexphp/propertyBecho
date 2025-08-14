"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header2 from "@/components/Header2";

// Furnishings list with unique IDs
const furnishings = [
  { id: "f1", label: "Dining Table", icon: "/facilities/SVG/1.svg" },
  { id: "f2", label: "Washing Machine", icon: "/facilities/SVG/2.svg" },
  { id: "f3", label: "Sofa", icon: "/facilities/SVG/3.svg" },
  { id: "f4", label: "Microwave", icon: "/facilities/SVG/4.svg" },
  { id: "f5", label: "Stove", icon: "/facilities/SVG/5.svg" },
  { id: "f6", label: "Fridge", icon: "/facilities/SVG/6.svg" },
  { id: "f7", label: "Water Purifier", icon: "/facilities/SVG/7.svg" },
  { id: "f8", label: "Gas Pipeline", icon: "/facilities/SVG/8.svg" },
  { id: "f9", label: "Chimney", icon: "/facilities/SVG/9.svg" },
  { id: "f10", label: "Modular Kitchen", icon: "/facilities/SVG/10.svg" },
  { id: "f11", label: "Dining Table", icon: "/facilities/SVG/1.svg" },
  { id: "f12", label: "Washing Machine", icon: "/facilities/SVG/2.svg" },
  { id: "f13", label: "Sofa", icon: "/facilities/SVG/3.svg" },
  { id: "f14", label: "Microwave", icon: "/facilities/SVG/4.svg" },
  { id: "f15", label: "Stove", icon: "/facilities/SVG/5.svg" },
  { id: "f16", label: "Fridge", icon: "/facilities/SVG/6.svg" },
];

// Society amenities list with unique IDs
const societyAmenities = [
  { id: "s1", label: "Swimming Pool", icon: "/facilities/SVG/11.svg" },
  { id: "s2", label: "Gym", icon: "/facilities/SVG/12.svg" },
  { id: "s3", label: "Lift", icon: "/facilities/SVG/13.svg" },
  { id: "s4", label: "Intercom", icon: "/facilities/SVG/14.svg" },
  { id: "s5", label: "Garden", icon: "/facilities/SVG/15.svg" },
  { id: "s6", label: "Sport", icon: "/facilities/SVG/16.svg" },
  { id: "s7", label: "Kids Area", icon: "/facilities/SVG/17.svg" },
  { id: "s8", label: "CCTV", icon: "/facilities/SVG/18.svg" },
  { id: "s9", label: "Gated Community", icon: "/facilities/SVG/19.svg" },
  { id: "s10", label: "Club House", icon: "/facilities/SVG/20.svg" },
  { id: "s11", label: "Community hall", icon: "/facilities/SVG/21.svg" },
  { id: "s12", label: "Regular water supply", icon: "/facilities/SVG/22.svg" },
  { id: "s13", label: "CCTV", icon: "/facilities/SVG/18.svg" },
  { id: "s14", label: "Gated Community", icon: "/facilities/SVG/19.svg" },
  { id: "s15", label: "Club House", icon: "/facilities/SVG/20.svg" },
  { id: "s16", label: "Community hall", icon: "/facilities/SVG/21.svg" },
  { id: "s17", label: "Regular water supply", icon: "/facilities/SVG/22.svg" },
];

export default function FacilitiesDetail() {
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const [counts, setCounts] = useState({
    bedroom: 1,
    fullBath: 1,
    threeQuarterBath: 1,
    halfBath: 1,
    floors: 1,
  });

  const handleCountChange = (key, delta) => {
    setCounts((prev) => ({
      ...prev,
      [key]: Math.max(prev[key] + delta, 0),
    }));
  };

  const toggleFacility = (id) => {
    setSelectedFacilities((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
        * {
          font-family: "Poppins", sans-serif !important;
        }
        .icon-selected {
          filter: invert(30%) sepia(100%) saturate(500%) hue-rotate(200deg)
            brightness(90%) contrast(90%);
        }
        .icon-unselected {
          filter: invert(45%) sepia(6%) saturate(250%) hue-rotate(170deg)
            brightness(90%) contrast(85%);
        }
      `}</style>

      <div className="relative text-gray-900 bg-gray-50 min-h-screen overflow-hidden">
        {/* Background Gradients */}
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

        <Header2 />

        <main
          className="pt-[120px] pb-12 flex justify-center relative z-10"
          style={{ top: "35px", paddingBottom: "120px" }}
        >
          <div className="w-[87%] mx-auto px-4">
            <h2 className="text-2xl font-bold">
              <span style={{ color: "#000000", fontWeight: "700", fontSize: "26px", lineHeight: "29px" }}>
                Facilities{" "}
              </span>
              <span style={{ color: "#2450A0", fontWeight: "700", fontSize: "26px", lineHeight: "29px" }}>
                Details
              </span>
            </h2>
            <p
              className="text-sm text-gray-500 mt-1 text-[15px]"
              style={{ marginTop: "12px", color: "rgba(102, 102, 102, 1)" }}
            >
              Answer a few questions and get your no-obligation cash offer in as little as 3 minutes.
            </p>

            <div className="bg-white rounded-2xl shadow-md mt-6 p-4">
              {/* Facility Count Section */}
              <h3
                className="border-l-4 pl-3 mb-4 font-semibold text-base md:text-2xl whitespace-normal md:whitespace-nowrap"
                style={{ borderColor: "#2450A0" }}
              >
                <span className="text-[#2450A0] font-bold">W</span>
                <span className="text-[#0A0909] font-semibold">
                  hich facitily have in your property?
                </span>
              </h3>

              {[
                { label: "Bedroom", key: "bedroom" },
                { label: "Full Bathrooms", key: "fullBath", sub: "Tub, Shower, Sink and toilet" },
                { label: "3/4 Bathrooms", key: "threeQuarterBath", sub: "Shower, Sink and toilet" },
                { label: "1/2 Bathrooms", key: "halfBath", sub: "Sink and toilet" },
                { label: "Floor (above Ground)", key: "floors" },
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center rounded-xl px-4 py-3 mb-3 md:ml-0 -ml-6">
                  <div>
                    <div
                      className="md:w-[250px] w-[100%] h-[45px] rounded-[9px] px-[10px] py-[10px] flex items-center space-x-2"
                      style={{ background: "rgba(36, 80, 160, 0.04)" }}
                    >
                      <div className="font-semibold text-[14px] md:text-[17px]" style={{ fontWeight: "500" }}>
                        {item.label}
                        {item.sub && (
                          <br />
                        )}
                        <span className="text-[10px] md:text-[12px]" style={{ color: "rgba(10, 9, 9, 0.7)", fontWeight: "400" }}>
                          {item.sub}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center md:gap-2 gap-1 md:ml-0 -ml-2">
                    <button
                      onClick={() => handleCountChange(item.key, -1)}
                      className="md:w-[36px] md:h-[36px] w-[25px] h-[25px] flex items-center justify-center border border-gray-300 text-xl"
                      style={{ borderRadius: "10px", border: "1px solid #2450A0" }}
                    >
                      <h4 className="font-bold text-[#2450A0]" style={{ width: "11px" }}>
                        -
                      </h4>
                    </button>

                    <span
                      className="md:w-[24px] md:h-[24px] w-[15px] h-[15px] flex items-center justify-center rounded-md bg-[#F0F2F9] text-black text-sm font-medium"
                      style={{ borderRadius: "10px", width: "45px", height: "33px", border: "1px solid #0000001A" }}
                    >
                      <span className="text-[13px] md:text-[16px] font-medium" style={{ color: "#000000" }}>
                        {counts[item.key]}
                      </span>
                    </span>
                    <button
                      onClick={() => handleCountChange(item.key, 1)}
                      className="md:w-[36px] md:h-[36px] w-[25px] h-[25px] flex items-center justify-center rounded-full bg-[#2450A0] text-white text-xl"
                      style={{ borderRadius: "10px" }}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}

              {/* Flat Furnishings */}
              <h3 className="text-lg font-semibold mb-4" style={{ fontWeight: "500", fontSize: "15px" }}>
                Flat Furnishings
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {furnishings.map((item, index) => {
                  const isSelected = selectedFacilities.includes(item.id);
                  const isLast = index === furnishings.length - 1;
                  const modMobile = furnishings.length % 3;

                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleFacility(item.id)}
                      className={`flex flex-col items-center justify-center h-[100px] rounded-lg p-2
                        ${isSelected ? "border border-[#0052CC] bg-[#EBF1FF] text-[#0052CC]" : "border border-[#1218280D] bg-[#f3f3f3] text-[#121212]"}
                        ${isLast && modMobile === 1 ? "col-span-3 w-1/3 mx-auto md:col-span-1 md:w-full md:mx-0" : "w-full"}
                      `}
                    >
                      <img
                        src={item.icon}
                        alt={item.label}
                        className={`w-[40px] h-[40px] ${isSelected ? "icon-selected" : "icon-unselected"}`}
                      />
                      <span
                        className={`text-sm mt-2 font-medium ${isSelected ? "text-[#0052CC]" : "text-[rgba(113,117,128,1)]"}`}
                        style={{ fontSize: "14px", fontWeight: "500" }}
                      >
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Society Amenities */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-4" style={{ fontWeight: "500", fontSize: "15px" }}>
                  Society Amenities
                </h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                  {societyAmenities.map((item) => {
                    const isSelected = selectedFacilities.includes(item.id);
                    return (
                      <button
                        key={item.id}
                        onClick={() => toggleFacility(item.id)}
                        className={`flex flex-col items-center justify-center w-full h-[100px] rounded-lg p-2 ${isSelected ? "border border-[#0052CC] bg-[#EBF1FF] text-[#0052CC]" : "border border-[#1218280D] bg-[#f3f3f3] text-[#121212]"}`}
                      >
                        <img
                          src={item.icon}
                          alt={item.label}
                          className={`w-[40px] h-[40px] ${isSelected ? "icon-selected" : "icon-unselected"}`}
                        />
                        <span
                          className="text-sm mt-2 text-center"
                          style={{
                            fontSize: "14px",
                            fontWeight: "500",
                            color: isSelected ? "#0052CC" : "rgba(113,117,128,1)",
                          }}
                        >
                          {item.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center lg:justify-end">
              <Link href="#">
                <Image
                  src="/next.png"
                  alt="Next Step"
                  width={350}
                  height={350}
                  className="cursor-pointer w-[250px] md:w-[300px] lg:w-[350px]"
                />
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
