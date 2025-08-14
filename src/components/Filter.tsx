"use client";
import { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { FaHome, FaSwimmingPool, FaParking, FaDumbbell } from "react-icons/fa";
import { MdApartment, MdVerified, MdOutlineDomain } from "react-icons/md";
import { GiModernCity } from "react-icons/gi";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  filters: {
    forSale: string;
    bhk: string;
    sqft: [number, number];
    bath: string;
    construction: string;
  };
  handleFilterChange: (filterType: string, value: any) => void;
  clearFilter: (filterType: string) => void;
}

export default function FilterModal({
  isOpen,
  onClose,
  filters,
  handleFilterChange,
  clearFilter,
}: FilterModalProps) {
  const [localFilters, setLocalFilters] = useState(filters);

  const toggleBhk = (type: string) => {
    setLocalFilters((prev) => {
      const bhkArray = prev.bhk.includes(type)
        ? prev.bhk
            .split(",")
            .filter((t) => t !== type)
            .join(",")
        : prev.bhk
        ? `${prev.bhk},${type}`
        : type;
      return { ...prev, bhk: bhkArray };
    });
  };

  const handleApply = () => {
    handleFilterChange("forSale", localFilters.forSale);
    handleFilterChange("bhk", localFilters.bhk);
    handleFilterChange("sqft", localFilters.sqft);
    handleFilterChange("bath", localFilters.bath);
    handleFilterChange("construction", localFilters.construction);
    onClose();
  };

  const handleClearAll = () => {
    clearFilter("forSale");
    clearFilter("bhk");
    clearFilter("sqft");
    clearFilter("bath");
    clearFilter("construction");
    setLocalFilters({
      forSale: "",
      bhk: "",
      sqft: [100, 5000],
      bath: "",
      construction: "",
    });
  };

  const getActiveFilters = () => {
    const active: { label: string; icon: string; type: string }[] = [];

    if (localFilters.sqft[0] !== 100 || localFilters.sqft[1] !== 5000) {
      active.push({
        label: `${localFilters.sqft[0]} sqft - ${localFilters.sqft[1]} sqft`,
        icon: "/icons/size.png",
        type: "sqft",
      });
    }
    if (localFilters.bhk) {
      active.push({
        label: localFilters.bhk,
        icon: "/icons/bed.png",
        type: "bhk",
      });
    }
    if (localFilters.forSale) {
      active.push({
        label: localFilters.forSale,
        icon: "/icons/home.png",
        type: "forSale",
      });
    }
    if (localFilters.construction) {
      active.push({
        label: localFilters.construction,
        icon: "/icons/status.png",
        type: "construction",
      });
    }

    return active;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center md:justify-end bg-black bg-opacity-50">
      <div className="w-full max-w-full h-full bg-white shadow-lg flex flex-col">
        {/* Header */}
        <div className="flex flex-col gap-4 p-4 border-b">
          {/* Title + Close */}
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Filter</h2>
            <button
              onClick={onClose}
              className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-300 hover:border-gray-500"
            >
              <img
                src="/facilities/call.png"
                alt="Close"
                className="w-7 h-7 object-contain"
              />
            </button>
          </div>

          {/* Active Filters Row with Fixed Image + Horizontal Scroll for Chips */}
          {getActiveFilters().length > 0 && (
            <div className="flex items-center gap-2 mr-1">
              {/* Fixed Image */}
              <div className="flex-shrink-0">
                <img
                  src="/Frame 2.svg"
                  alt="Filters"
                  className="w-[70px] h-10 "
                />
              </div>

              {/* Scrollable Chips */}
              <div className="flex-1 overflow-x-auto">
                <div className="flex gap-2 min-w-max">
                  {getActiveFilters().map((f, idx) => (
                    <div
                      key={idx}
                      className="flex items-center bg-blue-50 text-blue-700 rounded-xl px-3 py-1 border border-blue-200"
                    >
                      <span className="text-sm">{f.label}</span>
                      <button
                        onClick={() => clearFilter(f.type)}
                        className="ml-2 text-blue-500 hover:text-blue-700"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Search in with Location Input */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-700">Search in</span>
            <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 border border-gray-200">
              <img
                src="/Location.png"
                alt="Location"
                className="w-4 h-4 mr-1"
              />
              <input
                type="text"
                placeholder="Enter location"
                className="bg-transparent border-none outline-none text-sm w-32 h-3 ml-1 "
              />
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Looking to */}
          <div>
            <p className="text-lg font-bold mb-2">I'm Looking to</p>
            <div className="flex gap-3">
              {["Buy", "Rent"].map((opt) => (
                <button
                  key={opt}
                  className={`flex-1 py-3 rounded-xl border text-sm font-medium ${
                    localFilters.forSale === opt
                      ? "bg-[#7497e2] text-gray-800 border-[#2b56b6]"
                      : "bg-gray-200 text-gray-800 border-gray-300"
                  }`}
                  onClick={() => setLocalFilters({ ...localFilters, forSale: opt })}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Budget */}
          <div>
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold">Budget in ₹</p>
              <button
                onClick={() => clearFilter("sqft")}
                className="text-red-500 text-xs font-bold border border-red-500 rounded-lg px-2 py-1"
              >
                CLEAR
              </button>
            </div>

            <div className="mt-4">
              {/* Display selected values */}
              <div className="flex justify-between text-sm mb-2">
                <span>₹{localFilters.sqft[0].toLocaleString()}</span>
                <span>₹{localFilters.sqft[1].toLocaleString()}</span>
              </div>

              {/* Range sliders */}
              <div className="relative">
                {/* Track */}
                <div className="absolute top-2 left-0 right-0 h-1 bg-gray-300 rounded"></div>

                {/* Filled Track */}
                <div
                  className="absolute top-2 h-1 bg-[#2b56b6] rounded"
                  style={{
                    left: `${(localFilters.sqft[0] / 100000) * 100}%`,
                    right: `${100 - (localFilters.sqft[1] / 100000) * 100}%`
                  }}
                ></div>

                {/* Min slider */}
                <input
                  type="range"
                  min="100"
                  max="100000"
                  step="100"
                  value={localFilters.sqft[0]}
                  onChange={(e) =>
                    setLocalFilters({
                      ...localFilters,
                      sqft: [
                        Math.min(parseInt(e.target.value), localFilters.sqft[1] - 100),
                        localFilters.sqft[1],
                      ],
                    })
                  }
                  className="absolute top-0 w-full bg-transparent appearance-none pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-[#2b56b6] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-[#2b56b6] [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer"
                />

                {/* Max slider */}
                <input
                  type="range"
                  min="100"
                  max="100000"
                  step="100"
                  value={localFilters.sqft[1]}
                  onChange={(e) =>
                    setLocalFilters({
                      ...localFilters,
                      sqft: [
                        localFilters.sqft[0],
                        Math.max(parseInt(e.target.value), localFilters.sqft[0] + 100),
                      ],
                    })
                  }
                  className="absolute top-0 w-full bg-transparent appearance-none pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-[#2b56b6] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-[#2b56b6] [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* BHK Type */}
<div>
  <p className="text-lg font-bold mt-[50px]">BHK Type</p>
  <div className="flex flex-wrap gap-2 mt-2">
    {["1 RK", "1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK", "5+ BHK"].map((type) => {
      const isSelected = localFilters.bhk === type;
      return (
        <label
          key={type}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm cursor-pointer transition-all
            ${isSelected
              ? "bg-[#eaf0ff] border-[#2b56b6] text-[#2b56b6]"
              : "bg-white border-gray-300 text-gray-700"
            }`}
        >
          <input
            type="radio"
            name="bhk"
            value={type}
            checked={isSelected}
            onChange={() => setLocalFilters((prev) => ({ ...prev, bhk: type }))}
            className="hidden rounded-md"
          />
          {/* Outer Border Box */}
          <span
            className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center
              ${isSelected
                ? "border-[#2b56b6]"
                : "border-gray-300"
              }`}
          >
            {/* Inner Square */}
            <span
              className={`w-3 h-3 rounded-md
                ${isSelected
                  ? "bg-[#2b56b6]"
                  : "bg-gray-200"
                }`}
            ></span>
          </span>
          {type}
        </label>
      );
    })}
  </div>
</div>




          {/* Construction Status */}
          <div>
            <p className="text-sm font-medium mb-2">Construction Status</p>
            <div className="flex gap-2">
              {["Ready to move", "Under Construction"].map((status) => (
                <button
                  key={status}
                  onClick={() =>
                    setLocalFilters({ ...localFilters, construction: status })
                  }
                  className={`px-4 py-2 rounded-full border text-sm ${
                    localFilters.construction === status
                      ? "bg-[#2b56b6] text-white border-[#2b56b6]"
                      : "bg-white text-gray-700 border-gray-300"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {/* Other Filters */}
          <div>
            <p className="text-sm font-medium mb-2">Other Filters</p>
            <div className="space-y-2">
              {[
                { label: "View Verified properties only", icon: <MdVerified /> },
                {
                  label: "View properties with images only",
                  icon: <MdOutlineDomain />,
                },
                { label: "View RERA Compliant only", icon: <GiModernCity /> },
              ].map((f) => (
                <button
                  key={f.label}
                  className="w-full border rounded-lg px-3 py-2 flex items-center gap-2 text-sm text-gray-700"
                >
                  {f.icon} {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Advanced Filters */}
          <div>
            <p className="text-sm font-medium mb-2">Advanced Filters</p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Gated Community", icon: <FaHome /> },
                { label: "Lift", icon: <MdApartment /> },
                { label: "Swimming Pool", icon: <FaSwimmingPool /> },
                { label: "Gym", icon: <FaDumbbell /> },
                { label: "Parking", icon: <FaParking /> },
              ].map((item) => (
                <button
                  key={item.label}
                  className="flex flex-col items-center p-3 border rounded-xl text-sm text-gray-700"
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t flex gap-2">
          <button
            onClick={handleClearAll}
            className="flex-1 py-2 border rounded-lg text-gray-700"
          >
            Clear All
          </button>
          <button
            onClick={handleApply}
            className="flex-1 py-2 bg-[#2b56b6] text-white rounded-lg"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}