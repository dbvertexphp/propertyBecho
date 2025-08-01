import React from "react";

const RealEstateSection = () => {
  const cards = [
    {
      price: "$280,000",
      owner: "By Owner",
      image: "/house1.jpg",
      bhk: "2 BHK",
      ba: "2 BA",
      sqft: "24 sqft",
      address: "1030 Spruce St, Aurora, IL, 60506",
    },
    {
      price: "$310,000",
      owner: "By Agent",
      image: "/house2.jpg",
      bhk: "3 BHK",
      ba: "2 BA",
      sqft: "28 sqft",
      address: "456 Maple Ave, Naperville, IL, 60540",
    },
    {
      price: "$295,000",
      owner: "By Owner",
      image: "/house3.jpg",
      bhk: "2 BHK",
      ba: "1 BA",
      sqft: "22 sqft",
      address: "789 Oak Blvd, Joliet, IL, 60431",
    },
    {
      price: "$325,000",
      owner: "By Agent",
      image: "/house4.jpg",
      bhk: "4 BHK",
      ba: "3 BA",
      sqft: "30 sqft",
      address: "321 Birch Ln, Chicago, IL, 60616",
    },
  ];

  return (
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[200px]">
        {cards.map((item, index) => (
          <div key={index} className="rounded-xl overflow-hidden shadow-lg">
            <img src={item.image} alt="House" className="w-full h-[180px] object-cover" />
            <div className="p-4">
              <div className="text-[#2450A0] font-bold text-lg">{item.price}</div>
              <div className="text-sm text-gray-500">{item.owner}</div>
              <div className="mt-2 text-sm text-gray-600">
                {item.bhk} • {item.ba} • {item.sqft}
              </div>
              <div className="mt-1 text-sm text-black">{item.address}</div>
            </div>
          </div>
        ))}
      </div>
  );
};

export default RealEstateSection;
