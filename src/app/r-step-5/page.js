'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import Header2 from "@/components/Header2";


const furnishings = [
  { label: "Dining Table", icon: "/facilities/1.png" },
  { label: "Washing Machine", icon: "/facilities/2.png" },
  { label: "Sofa", icon: "/facilities/3.png" },
  { label: "Microwave", icon: "/facilities/4.png" },
  { label: "Stove", icon: "/facilities/5.png" },
  { label: "Fridge", icon: "/facilities/6.png" },
  { label: "Water Purifier", icon: "/facilities/7.png" },
  { label: "Gas Pipeline", icon: "/facilities/8.png" },
  { label: "Chimney", icon: "/facilities/9.png" },
  { label: "Modular Kitchen", icon: "/facilities/10.png" },
];

const societyAmenities = [
  { label: "Swimming Pool", icon: "/facilities/11.png" },
  { label: "Gym", icon: "/facilities/12.png" },
  { label: "Lift", icon: "/facilities/13.png" },
  { label: "Intercom", icon: "/facilities/14.png" },
  { label: "Garden", icon: "/facilities/15.png" },
  { label: "Sport", icon: "/facilities/16.png" },
  { label: "Kids Area", icon: "/facilities/17.png" },
  { label: "CCTV", icon: "/facilities/18.png" },
  { label: "Gated Community", icon: "/facilities/19.png" },
  { label: "Club House", icon: "/facilities/20.png" },
  { label: "Community hall", icon: "/facilities/21.png" },
  { label: "Regular water supply", icon: "/facilities/22.png" },
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
    setCounts(prev => ({
      ...prev,
      [key]: Math.max(prev[key] + delta, 0),
    }));
  };

  const toggleFacility = (item) => {
    setSelectedFacilities(prev =>
      prev.includes(item)
        ? prev.filter(f => f !== item)
        : [...prev, item]
    );
  };

  return (
    <>
      {/* ✅ Poppins font applied globally */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        * {
          font-family: 'Poppins', sans-serif !important;
        }
      `}</style>

      <div className="relative text-gray-900 bg-gray-50 min-h-screen overflow-hidden">
        {/* Background Gradients */}
        <div className="relative">
  {/* Header */}
 

  {/* Bubble 2 (Background Layer) */}
  <img
    src="/bubble.png"
    alt="Bubble 2"
    className="absolute top-0 right-0 w-[120px] md:w-[190px] z-0 opacity-80"
  />

  {/* Bubble 1 (Front Layer) */}
  <img
    src="/bubble1.png"
    alt="Bubble 1"
    className="absolute top-0 right-0 w-[90px] md:w-[134px] z-10"
  />
</div>

        <Header2 />

        <main className="pt-[120px] pb-12 flex justify-center relative z-10" style={{ top: '35px',paddingBottom:'120px' }}>
          <div className="w-full max-w-[650px] px-4" style={{maxWidth:'1090px'}}>
            <h2 className="text-2xl font-bold">
              <span  style={{
              color: '#000000',
              fontWeight: '700',
              fontSize: '24px',
              lineHeight: '29px'
            }}>Facilities </span> <span className="text-[#0052CC]"  style={{
              color: '#2450A0',
              fontWeight: '700',
              fontSize: '24px',
              lineHeight: '29px'
            }}>Details</span>
            </h2>
            <p className="text-sm text-gray-500 mt-1 text-[15px]" style={{ marginTop: '12px', color: 'rgba(102, 102, 102, 1)' }}>
              Answer a few questions and get your no-obligation cash offer in as little as 3 minutes.
            </p>

            {/* Facility Count Section */}
            <div className="bg-white rounded-2xl shadow-md mt-6 p-4">
              <h3 className="text-lg font-semibold mb-4 border-l-4  pl-3 w-[313px] h-[65px] opacity-100" style={{ color: 'rgba(36, 80, 160, 1)' }}>
                <span className="text-[#2450A0] text-2xl font-bold" style={{ color: 'rgba(36, 80, 160, 1)' }}>W</span>
                <span className="text-[20px] leading-[100%] tracking-[0]" style={{ color: '#0A0909', fontWeight: '600' }}>
                  hich Facility have in your Property?
                </span>
              </h3>

              {[
                { label: 'Bedroom', key: 'bedroom' },
                { label: 'Full Bathrooms', key: 'fullBath', sub: 'Tub, Shower, Sink and toilet' },
                { label: '3/4 Bathrooms', key: 'threeQuarterBath', sub: 'Shower, Sink and toilet' },
                { label: '1/2 Bathrooms', key: 'halfBath', sub: 'Sink and toilet' },
                { label: 'Floor (above Ground)', key: 'floors' },
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center rounded-xl px-4 py-3 mb-3">
                  <div>
                    <div className="w-[187px] h-[45px]  rounded-[9px] px-[10px] py-[10px] flex items-center space-x-2" style={{background:'rgba(36, 80, 160, 0.04)',paddingTop:'10px',paddingRight:'5px',paddingBottom:'10px',paddingLeft:'10px'}}>
  <div className="font-semibold text-[14px]" style={{fontWeight:'500'}}>{item.label}
    <br />
   <span style={{color:'rgba(10, 9, 9, 0.7)',fontSize:'12px',fontWeight:'400'}}>{item.sub}</span>
  </div>
</div>

                    {/* {item.sub && <div className="text-sm text-gray-500 -mt-1">{item.sub}</div>} */}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
  onClick={() => handleCountChange(item.key, -1)}
  className="w-[36px] h-[36px] flex items-center justify-center border border-gray-300 text-xl"
  style={{ borderRadius: '10px',border:'1px solid #2450A0' }}
>
  <h4 className="font-bold text-[#2450A0]" style={{ width: '11px'}}>
    -
  </h4>
</button>

<span className="w-[24px] h-[24px] flex items-center justify-center rounded-md bg-[#F0F2F9] text-black text-sm font-medium" style={{borderRadius:'10px',width:'45px',height:'33px',border:'1px solid #0000001A'}}>
  <span style={{fontSize:'16px',fontWeight:'500',color:'#000000'}}>{counts[item.key]}</span>
</span>
                    <button
                      onClick={() => handleCountChange(item.key, 1)}
                      className="w-[36px] h-[36px] flex items-center justify-center rounded-full bg-[#2450A0] text-white text-xl" style={{borderRadius:'10px'}}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}

              {/* Flat Furnishings */}
             <div className="mt-6">
  <h3 className=" font-semibold mb-4" style={{fontWeight:'500',fontSize:'15px'}}>Flat Furnishings</h3>
<div className="grid grid-cols-3 gap-4">
  {furnishings.map((item, index) => {
    const isLast = index === furnishings.length - 1;
    const mod = furnishings.length % 3;
    const isCenteredLast = isLast && mod === 1;

    return (
  <button
  key={index}
  onClick={() => toggleFacility(item.label)}
  className={`flex flex-col items-center justify-center h-[100px] rounded-lg p-2
    ${selectedFacilities.includes(item.label)
      ? 'border border-[#0052CC] bg-[#EBF1FF] text-[#0052CC]'
      : 'border border-[#1218280D] bg-[#f3f3f3] text-[#121212]'
    }
    ${isCenteredLast ? 'col-span-3 w-1/3 justify-self-center' : 'w-full'}
  `}
>
  <img src={item.icon} alt={item.label} className="w-[40px] h-[40px]" />
  <span className={`text-sm mt-2 font-medium ${selectedFacilities.includes(item.label) ? 'text-[#0052CC]' : 'text-[rgba(113,117,128,1)]'}`} style={{ fontSize: '14px', fontWeight: '500' }}>
    {item.label}
  </span>
</button>

    );
  })}
</div>


</div>

              {/* Society Amenities */}
          <div className="mt-6">
  <h3 className="text-lg font-semibold mb-4" style={{fontWeight:'500',fontSize:'15px'}}>Society Amenities</h3>
  <div className="grid grid-cols-3 gap-4" >
    {societyAmenities.map((item, index) => (
      <button
        key={index}
        onClick={() => toggleFacility(item.label)}
        className={`flex flex-col items-center justify-center w-full h-[100px] rounded-lg p-2 ${
          selectedFacilities.includes(item.label)
                ? 'border border-[#0052CC] bg-[#EBF1FF] text-[#0052CC]'
      : 'border border-[#1218280D] bg-[#f3f3f3] text-[#121212]'
        }`}
      >
        <img src={item.icon} alt={item.label} className="w-[40px] h-[40px]"  />
        <span className="text-sm mt-2 text-center" style={{ fontSize: '14px', fontWeight: '500'}}>{item.label}</span>
      </button>
    ))}
  </div>
</div>

            </div>

            {/* Next Button */}
            <div className="text-right mt-6">
              <Link href="/r-step6">
                 <Image
                              src="/next.png"
                              alt="Bottom Image"
                              width={300}
                              height={300}
                              className="
                                absolute mt-4 cursor-pointer
                                left-1/2 -translate-x-1/2
                                lg:left-[940px] lg:translate-x-0
                              "
                            />
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
