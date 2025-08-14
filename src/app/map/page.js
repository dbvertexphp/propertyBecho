"use client";
import { useState } from "react";
import Image from "next/image";
import { IoMdClose, IoIosArrowDown } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import Header2 from "@/components/Header2";
import Footer from "@/components/Footer";
import FilterModal from "@/components/Filter";

export default function PropertyWithMap() {
  // 🔸 State definitions
  const [likedStates, setLikedStates] = useState(Array(6).fill(false));
  const [sortOrder, setSortOrder] = useState("");
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [location, setLocation] = useState("");
  const [showMobileMap, setShowMobileMap] = useState(false);
  const [activeFilterDropdown, setActiveFilterDropdown] = useState(null);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filters, setFilters] = useState({
    forSale: "",
    bhk: "",
    sqft: [100, 5000],
    bath: "",
    construction: "",
  });

  // 🔹 Calculate liked count
  const likedCount = likedStates.filter(Boolean).length;

  // 🔹 Toggle like for a card
  const toggleLike = (index) => {
    const updatedLikes = [...likedStates];
    updatedLikes[index] = !updatedLikes[index];
    setLikedStates(updatedLikes);
  };

  // 🔸 Property data
  const propertyData = [
    {
      price: 280000,
      ownerType: "By Owner",
      bhk: 2,
      bath: 2,
      sqft: 900,
      address: "1030 Spruce St, Aurora, IL",
      imageUrl: "/Card media container.png",
      construction: "Ready to move",
    },
    {
      price: 350000,
      ownerType: "By Dealer",
      bhk: 3,
      bath: 2,
      sqft: 1200,
      address: "221B Baker Street, London",
      imageUrl: "/Card media.png",
      construction: "Under Construction",
    },
    {
      price: 180000,
      ownerType: "By Owner",
      bhk: 1,
      bath: 1,
      sqft: 600,
      address: "742 Evergreen Terrace, Springfield",
      imageUrl: "/Card media container.png",
      construction: "Ready to move",
    },
    {
      price: 420000,
      ownerType: "By Dealer",
      bhk: 4,
      bath: 3,
      sqft: 1600,
      address: "1600 Pennsylvania Ave NW, DC",
      imageUrl: "/Card media.png",
      construction: "Under Construction",
    },
    {
      price: 310000,
      ownerType: "By Owner",
      bhk: 3,
      bath: 2,
      sqft: 1100,
      address: "12 Grimmauld Place, London",
      imageUrl: "/Card media container.png",
      construction: "Ready to move",
    },
    {
      price: 265000,
      ownerType: "By Dealer",
      bhk: 2,
      bath: 2,
      sqft: 950,
      address: "4 Privet Drive, Little Whinging",
      imageUrl: "/Card media.png",
      construction: "Ready to move",
    },
  ];

  // 🔹 Filter and sort property data
  const filteredData = propertyData.filter((property) => {
    const matchesForSale = filters.forSale
      ? property.ownerType === filters.forSale
      : true;
    const matchesBhk = filters.bhk
      ? filters.bhk === "Any"
        ? true
        : filters.bhk === "2+ BHK"
        ? property.bhk >= 2
        : filters.bhk.split(",").includes(property.bhk.toString())
      : true;
    const matchesSqft =
      property.sqft >= filters.sqft[0] && property.sqft <= filters.sqft[1];
    const matchesBath = filters.bath
      ? filters.bath === "Any"
        ? true
        : filters.bath === "2+"
        ? property.bath >= 2
        : property.bath === parseInt(filters.bath)
      : true;
    const matchesConstruction = filters.construction
      ? property.construction === filters.construction
      : true;
    return (
      matchesForSale &&
      matchesBhk &&
      matchesSqft &&
      matchesBath &&
      matchesConstruction
    );
  });

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortOrder === "asc") return a.price - b.price;
    if (sortOrder === "desc") return b.price - a.price;
    return 0;
  });

  // 🔹 Handle filter changes
  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
    setActiveFilterDropdown(null);
  };

  // 🔹 Clear specific filter
  const clearFilter = (filterType) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: filterType === "sqft" ? [100, 5000] : "",
    }));
    setActiveFilterDropdown(null);
  };

  // 🔸 Filter options
  const filterOptions = {
    "For Sale": ["By Owner", "By Dealer"],
    BHK: ["Any", "1 BHK", "2 BHK", "2+ BHK"],
    "Sqft.": "range",
    Bath: ["Any", "1", "2", "2+"],
  };

  return (
    <div className="text-gray-900 min-h-screen flex flex-col font-nunito">
      {/* 🔹 Header */}
      <Header2 />

      {/* 🔹 Main Content */}
      <div className="flex-grow mt-[150px]">
        {showMobileMap ? (
          <div className="block md:hidden px-4 mb-20">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center bg-white border border-gray-300 rounded-2xl px-3 py-2 shadow-sm w-[calc(100%-60px)]">
                  <Image
                    src="/locationblue.png"
                    alt="Location"
                    width={20}
                    height={20}
                  />
                  <input
                    type="text"
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="mx-2 text-black text-base bg-transparent outline-none flex-grow"
                  />
                  <IoMdClose
                    className="text-gray-400 text-sm cursor-pointer ml-auto"
                    onClick={() => setLocation("")}
                  />
                  <Image
                    src="/global.png"
                    alt="Globe"
                    width={20}
                    height={20}
                    className="ml-2"
                  />
                </div>
                <div className="w-12 h-12 bg-white border border-[#E5E5E5] rounded-2xl flex items-center justify-center">
                  <div className="bg-gray-100 rounded-2xl px-2 py-1 flex flex-col items-center justify-center">
                    <span className="text-xs font-semibold text-gray-800 leading-tight">
                      {likedCount.toString().padStart(2, "0")}
                    </span>
                    {likedCount > 0 ? (
                      <FaHeart className="text-[#2450A0] text-base mt-[2px]" />
                    ) : (
                      <FiHeart className="text-gray-400 text-base mt-[2px]" />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center relative">
                {/* Left: Filter */}
                <div className="relative flex items-center gap-2">
                  <div
                    className="bg-white border border-gray-300 rounded-2xl px-3 py-2 w-32 flex items-center gap-2 shadow-sm cursor-pointer"
                    onClick={() => setShowFilterModal(!showFilterModal)}
                  >
                    <div className="flex items-center bg-gray-100 px-4 py-1 rounded-xl">
                      <Image src="/filter.png" alt="Filter" width={16} height={16} />
                      <p className="text-sm text-gray-700 whitespace-nowrap ml-1">Filter</p>
                      <IoIosArrowDown className="text-gray-500 text-base ml-1" />
                    </div>
                  </div>
                  {showFilterModal && (
                    <FilterModal
                      isOpen={showFilterModal}
                      onClose={() => setShowFilterModal(false)}
                      filters={filters}
                      handleFilterChange={handleFilterChange}
                      clearFilter={clearFilter}
                    />
                  )}
                </div>

                {/* Right: Sort by */}
                <div className="relative">
                  <div
                    className="bg-white border border-gray-300 rounded-2xl px-3 py-2 w-32 flex items-center gap-2 shadow-sm cursor-pointer"
                    onClick={() => setShowSortDropdown(!showSortDropdown)}
                  >
                    <div className="flex items-center bg-gray-100 px-2 py-1 rounded-xl">
                      <p className="text-sm text-gray-700 whitespace-nowrap">Sort by</p>
                      <IoIosArrowDown className="text-gray-500 text-base ml-1" />
                    </div>
                    <Image src="/arrow-swap.png" alt="Swap" width={16} height={16} />
                  </div>
                  {showSortDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-md z-10">
                      <button
                        onClick={() => {
                          setSortOrder("asc");
                          setShowSortDropdown(false);
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                      >
                        Price: Low to High
                      </button>
                      <button
                        onClick={() => {
                          setSortOrder("desc");
                          setShowSortDropdown(false);
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                      >
                        Price: High to Low
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <Image
                src="/maplocation.png"
                alt="Map View"
                width={150}
                height={150}
                className="w-full h-[500px] object-cover rounded-lg mt-8"
              />
              {!showFilterModal && (
                <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 block md:hidden">
                  <button onClick={() => setShowMobileMap(false)}>
                    <Image
                      src="/listview.png"
                      alt="List View"
                      width={150}
                      height={150}
                      className="w-32"
                    />
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div>
            {/* 🔹 Desktop Filters */}
            <div className="hidden md:flex items-center max-w-screen-xl w-full mx-auto px-4 mt-4 space-x-4">
              <div className="flex items-center bg-white border border-gray-300 rounded-2xl px-4 py-2 shadow-sm flex-shrink-0 w-[500px]">
                <Image
                  src="/locationblue.png"
                  alt="Location"
                  width={20}
                  height={20}
                />
                <input
                  type="text"
                  placeholder="Enter location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="mx-2 text-black text-base bg-transparent outline-none flex-grow"
                />
                <IoMdClose
                  className="text-gray-400 text-sm cursor-pointer ml-auto"
                  onClick={() => setLocation("")}
                />
                <Image
                  src="/global.png"
                  alt="Globe"
                  width={20}
                  height={20}
                  className="ml-2"
                />
              </div>
              <div className="w-12 h-12 bg-white border border-[#E5E5E5] rounded-2xl flex items-center justify-center">
                <div className="bg-gray-100 rounded-2xl px-2 py-1 flex flex-col items-center justify-center">
                  <span className="text-xs font-semibold text-gray-800 leading-tight">
                    {likedCount.toString().padStart(2, "0")}
                  </span>
                  {likedCount > 0 ? (
                    <FaHeart className="text-[#2450A0] text-base mt-[2px]" />
                  ) : (
                    <FiHeart className="text-gray-400 text-base mt-[2px]" />
                  )}
                </div>
              </div>
              <div className="flex items-center gap-4 ml-auto relative">
                {Object.keys(filterOptions).map((filter, index) => (
                  <div key={index} className="relative">
                    <div
                      className="flex items-center gap-1 px-3 py-1.5 bg-[#edf1fd] text-sm text-[#2b56b6] font-medium rounded-full flex-shrink-0 cursor-pointer"
                      onClick={() =>
                        setActiveFilterDropdown(
                          activeFilterDropdown === filter ? null : filter
                        )
                      }
                    >
                      {filter} <IoIosArrowDown />
                    </div>
                    {activeFilterDropdown === filter && (
                      <div className="absolute right-0 top-10 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-md z-10">
                        <div className="p-4 space-y-3">
                          {filter === "Sqft." ? (
                            <div>
                              <label className="text-sm font-semibold">
                                Sqft Range: {filters.sqft[0]} -{" "}
                                {filters.sqft[1] === 5000
                                  ? "5000+"
                                  : filters.sqft[1]}
                              </label>
                              <div className="flex flex-col gap-2 mt-2">
                                <input
                                  type="range"
                                  min="100"
                                  max="5000"
                                  value={filters.sqft[0]}
                                  onChange={(e) =>
                                    setFilters((prev) => ({
                                      ...prev,
                                      sqft: [
                                        parseInt(e.target.value),
                                        Math.max(
                                          parseInt(e.target.value),
                                          filters.sqft[1]
                                        ),
                                      ],
                                    }))
                                  }
                                  className="w-full"
                                />
                                <input
                                  type="range"
                                  min="100"
                                  max="5000"
                                  value={filters.sqft[1]}
                                  onChange={(e) =>
                                    setFilters((prev) => ({
                                      ...prev,
                                      sqft: [
                                        Math.min(
                                          filters.sqft[0],
                                          parseInt(e.target.value)
                                        ),
                                        parseInt(e.target.value),
                                      ],
                                    }))
                                  }
                                  className="w-full"
                                />
                              </div>
                            </div>
                          ) : (
                            filterOptions[filter].map((option) => (
                              <label
                                key={option}
                                className="flex items-center space-x-2"
                              >
                                <input
                                  type="checkbox"
                                  checked={filters[filter.toLowerCase()] === option}
                                  onChange={() =>
                                    handleFilterChange(filter.toLowerCase(), option)
                                  }
                                  className="accent-[#2450A0]"
                                />
                                <span>{option}</span>
                              </label>
                            ))
                          )}
                          <button
                            onClick={() => clearFilter(filter.toLowerCase())}
                            className="w-full bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300 text-sm"
                          >
                            Clear Filter
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                <div className="relative">
                  <div
                    className="bg-white border border-gray-300 rounded-2xl px-3 py-2 w-32 flex items-center gap-2 shadow-sm cursor-pointer"
                    onClick={() => setShowSortDropdown(!showSortDropdown)}
                  >
                    <div className="flex items-center bg-gray-100 px-2 py-1 rounded-2xl">
                      <p className="text-sm text-gray-700 whitespace-nowrap">
                        Sort by
                      </p>
                      <IoIosArrowDown className="text-gray-500 text-base ml-1" />
                    </div>
                    <Image
                      src="/arrow-swap.png"
                      alt="Swap"
                      width={16}
                      height={16}
                    />
                  </div>
                  {showSortDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-md z-10">
                      <button
                        onClick={() => {
                          setSortOrder("asc");
                          setShowSortDropdown(false);
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                      >
                        Price: Low to High
                      </button>
                      <button
                        onClick={() => {
                          setSortOrder("desc");
                          setShowSortDropdown(false);
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                      >
                        Price: High to Low
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* 🔹 Desktop Layout: Map + Cards */}
            <div className="hidden md:flex mt-8 mx-auto max-w-[87%] px-4">
              <div className="md:w-1/2 h-[calc(100vh-120px)] sticky top-[120px]">
                <Image
                  src="/maplocation.png"
                  alt="Map"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 overflow-y-auto h-[calc(100vh-120px)] px-4 py-6 hide-scrollbar">
                <div className="grid grid-cols-2 gap-2">
                  {sortedData.map((property, index) => (
                    <div
                      key={index}
                      className="bg-white w-full shadow-md overflow-hidden rounded-2xl"
                    >
                      <div className="relative">
                        <Image
                          src={property.imageUrl}
                          alt={`Property ${index + 1}`}
                          width={400}
                          height={300}
                          className="w-full h-56 object-contain"
                        />
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            toggleLike(index);
                          }}
                          className="absolute top-2 right-2"
                        >
                          <Image
                            src={
                              likedStates[index]
                                ? "/Heart button.svg"
                                : "/Heart button icon.svg"
                            }
                            alt="like"
                            width={20}
                            height={20}
                            className="w-10 h-10 transition-all duration-200"
                          />
                        </button>
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-center">
                          <p className="text-lg font-extrabold text-black">
                            ${parseInt(property.price).toLocaleString("en-US")}
                          </p>
                        </div>
                        <p className="text-sm text-gray-500">
                          {property.ownerType}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <span className="bg-gray-100 px-2 py-1 text-xs font-bold text-gray-700 rounded-full">
                            <span className="text-[#2b56b6]">
                              {property.bhk}
                            </span>{" "}
                            BHK
                          </span>
                          <span className="bg-gray-100 px-2 py-1 text-xs font-bold text-gray-700 rounded-full">
                            <span className="text-[#2b56b6]">
                              {property.bath}
                            </span>{" "}
                            Bath
                          </span>
                          <span className="bg-gray-100 px-2 py-1 text-xs font-bold text-gray-700 rounded-full">
                            <span className="text-[#2b56b6]">
                              {property.sqft}
                            </span>{" "}
                            sqft
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mt-3 text-xs font-bold text-gray-600 border border-gray-200 px-3 py-1 rounded-full">
                          <Image
                            src="/loc.png"
                            alt="location"
                            width={16}
                            height={16}
                            className="w-4 h-4"
                          />
                          <span>{property.address}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 🔹 Mobile View: Property Cards + Map Toggle */}
            <div className="md:hidden px-4 mb-20 hide-scrollbar">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center bg-white border border-gray-300 rounded-2xl px-5 py-2 shadow-sm w-[calc(100%-60px)]">
                    <Image
                      src="/locationblue.png"
                      alt="Location"
                      width={20}
                      height={20}
                    />
                    <input
                      type="text"
                      placeholder="Enter location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="mx-2 text-black text-base bg-transparent outline-none flex-grow"
                    />
                    <IoMdClose
                      className="text-gray-400 text-sm cursor-pointer ml-auto"
                      onClick={() => setLocation("")}
                    />
                    <Image
                      src="/global.png"
                      alt="Globe"
                      width={20}
                      height={20}
                      className="ml-2"
                    />
                  </div>
                  <div className="w-12 h-12 bg-white border border-[#E5E5E5] rounded-2xl flex items-center justify-center">
                    <div className="bg-gray-100 rounded-2xl px-2 py-1 flex flex-col items-center justify-center">
                      <span className="text-xs font-semibold text-gray-800 leading-tight">
                        {likedCount.toString().padStart(2, "0")}
                      </span>
                      {likedCount > 0 ? (
                        <FaHeart className="text-[#2450A0] text-base mt-[2px]" />
                      ) : (
                        <FiHeart className="text-gray-400 text-base mt-[2px]" />
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center relative">
                  <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap py-1">
                    {Object.keys(filterOptions).map((filter, index) => (
                      <div key={index} className="relative">
                        <div
                          className="flex items-center gap-1 px-3 py-1.5 bg-[#edf1fd] text-sm text-[#2b56b6] font-medium rounded-full flex-shrink-0 cursor-pointer"
                          onClick={() =>
                            setActiveFilterDropdown(
                              activeFilterDropdown === filter ? null : filter
                            )
                          }
                        >
                          {filter} <IoIosArrowDown />
                        </div>
                        {activeFilterDropdown === filter && (
                          <div className="absolute left-0 top-10 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-md z-10">
                            <div className="p-4 space-y-3">
                              {filter === "Sqft." ? (
                                <div>
                                  <label className="text-sm font-semibold">
                                    Sqft Range: {filters.sqft[0]} -{" "}
                                    {filters.sqft[1] === 5000
                                      ? "5000+"
                                      : filters.sqft[1]}
                                  </label>
                                  <div className="flex flex-col gap-2 mt-2">
                                    <input
                                      type="range"
                                      min="100"
                                      max="5000"
                                      value={filters.sqft[0]}
                                      onChange={(e) =>
                                        setFilters((prev) => ({
                                          ...prev,
                                          sqft: [
                                            parseInt(e.target.value),
                                            Math.max(
                                              parseInt(e.target.value),
                                              filters.sqft[1]
                                            ),
                                          ],
                                        }))
                                      }
                                      className="w-full"
                                    />
                                    <input
                                      type="range"
                                      min="100"
                                      max="5000"
                                      value={filters.sqft[1]}
                                      onChange={(e) =>
                                        setFilters((prev) => ({
                                          ...prev,
                                          sqft: [
                                            Math.min(
                                              filters.sqft[0],
                                              parseInt(e.target.value)
                                            ),
                                            parseInt(e.target.value),
                                          ],
                                        }))
                                      }
                                      className="w-full"
                                    />
                                  </div>
                                </div>
                              ) : (
                                filterOptions[filter].map((option) => (
                                  <label
                                    key={option}
                                    className="flex items-center space-x-2"
                                  >
                                    <input
                                      type="checkbox"
                                      checked={filters[filter.toLowerCase()] === option}
                                      onChange={() =>
                                        handleFilterChange(
                                          filter.toLowerCase(),
                                          option
                                        )
                                      }
                                      className="accent-[#2450A0]"
                                    />
                                    <span>{option}</span>
                                  </label>
                                ))
                              )}
                              <button
                                onClick={() => clearFilter(filter.toLowerCase())}
                                className="w-full bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300 text-sm"
                              >
                                Clear Filter
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="relative flex items-center gap-2">
                    <div className="relative">
                      <div
                        className="bg-white border border-gray-300 rounded-2xl px-3 py-2 w-32 flex items-center gap-2 shadow-sm cursor-pointer"
                        onClick={() => setShowSortDropdown(!showSortDropdown)}
                      >
                        <div className="flex items-center bg-gray-100 px-2 py-1 rounded-2xl">
                          <p className="text-sm text-gray-700 whitespace-nowrap">
                            Sort by
                          </p>
                          <IoIosArrowDown className="text-gray-500 text-base ml-1" />
                        </div>
                        <Image
                          src="/arrow-swap.png"
                          alt="Swap"
                          width={16}
                          height={16}
                        />
                      </div>
                      {showSortDropdown && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-md z-10">
                          <button
                            onClick={() => {
                              setSortOrder("asc");
                              setShowSortDropdown(false);
                            }}
                            className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                          >
                            Price: Low to High
                          </button>
                          <button
                            onClick={() => {
                              setSortOrder("desc");
                              setShowSortDropdown(false);
                            }}
                            className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                          >
                            Price: High to Low
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-2 py-10">
                {sortedData.map((property, index) => (
                  <div
                    key={index}
                    className="bg-white w-full rounded-2xl shadow-lg overflow-hidden relative"
                  >
                    <div className="relative">
                      <Image
                        src={property.imageUrl}
                        alt={`Property ${index + 1}`}
                        width={400}
                        height={300}
                        className="w-full h-56 object-cover"
                      />
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleLike(index);
                        }}
                        className="absolute top-2 right-2"
                      >
                        <Image
                          src={
                            likedStates[index]
                              ? "/Heart button.svg"
                              : "/Heart button icon.svg"
                          }
                          alt="like"
                          width={20}
                          height={20}
                          className="w-10 h-10 transition-all duration-200"
                        />
                      </button>
                    </div>
                    <div className="p-4 space-y-1">
                      <h2 className="text-lg font-extrabold text-black">
                        ${parseInt(property.price).toLocaleString("en-US")}
                      </h2>
                      <p className="text-xs text-gray-600">
                        {property.ownerType}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="bg-gray-100 px-2 py-1 rounded-2xl text-xs font-bold text-gray-700">
                          <span className="text-[#2b56b6]">{property.bhk}</span>{" "}
                          BHK
                        </span>
                        <span className="bg-gray-100 px-2 py-1 rounded-2xl text-xs font-bold text-gray-700">
                          <span className="text-[#2b56b6]">
                            {property.bath}
                          </span>{" "}
                          Bath
                        </span>
                        <span className="bg-gray-100 px-2 py-1 rounded-2xl text-xs font-bold text-gray-700">
                          <span className="text-[#2b56b6]">
                            {property.sqft}
                          </span>{" "}
                          sqft
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-3 text-xs font-bold text-gray-600">
                        <Image
                          src="/loc.png"
                          alt="location"
                          width={16}
                          height={16}
                          className="w-4 h-4"
                        />
                        <p className="text-sm text-gray-800 font-semibold">
                          {property.address}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 block md:hidden">
                <button onClick={() => setShowMobileMap(true)}>
                  <Image
                    src="/mapview.png"
                    alt="Map View"
                    width={150}
                    height={150}
                    className="w-32"
                  />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 🔹 Footer */}
      <Footer />
    </div>
  );
}