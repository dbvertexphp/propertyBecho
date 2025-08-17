"use client";

import React from "react";

interface Rent1Props {
  formData: {
    location: string;
    propertyType: string;
    propertyName: string;
    bhkType: string;
  };
  formErrors: {
    location: boolean;
    propertyType: boolean;
    propertyName: boolean;
    bhkType: boolean;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelect: (field: string, value: string) => void;
  handleNext: () => void;
}

const Rent1: React.FC<Rent1Props> = ({
  formData,
  formErrors,
  handleChange,
  handleSelect,
  handleNext,
}) => {
  return (
    <div className="mt-6 space-y-5">
      {/* Location */}
      <div className="relative w-full md:w-[600px] lg:w-[500px] xl:w-[870px]">
  <input
    type="text"
    name="location"
    placeholder="Enter Rental House Location"
    value={formData.location}
    onChange={handleChange}
    className={`w-full border rounded-lg pl-4 pr-10 py-3 text-sm focus:outline-none ${
      formErrors.location ? "border-red-500" : "border-gray-300"
    }`}
  />
  <img
    src="/location.png"
    alt="location"
    className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none"
  />
</div>


      {/* Property Available For */}
      <div>
        <label
          className="block text-[15px] font-semibold text-[#0A0909] mb-2"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Property Available For
        </label>
        <div className="flex gap-4 flex-wrap">
          {[
            { value: "only_rent", label: "Only Rent" },
            { value: "only_lease", label: "Only Lease" },
          ].map((option) => {
            const isSelected = formData.propertyType === option.value;
            return (
              <div
                key={option.value}
                onClick={() => handleSelect("propertyType", option.value)}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl border font-semibold cursor-pointer transition-all ${isSelected
                    ? "bg-[#E7ECF5] border-[#2450A0] text-[#2450A0]"
                    : "bg-white border-[#E5E7EB] text-[#121828]/60 hover:bg-[#f5faff]"
                  }`}
                style={{ borderWidth: "1.6px", maxWidth: "200px" }}
              >
                <div className="w-5 h-5 rounded-full border flex items-center justify-center">
                  <div
                    className={`w-3 h-3 rounded-full ${isSelected ? "bg-[#2450A0]" : "bg-[#E5E7EB]"
                      }`}
                  ></div>
                </div>
                <span className="text-[14px] font-medium">{option.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Property Name */}
      <div className="relative w-full md:w-[600px] lg:w-[500px] xl:w-[870px]">
        <label
          className="block text-[16px] font-semibold text-[#0A0909] mb-2 mt-6"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Property Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="propertyName"
          placeholder="Enter Your Property Name"
          value={formData.propertyName}
          onChange={handleChange}
          className={`w-full border rounded-full px-4 py-3 text-sm focus:outline-none ${formErrors.propertyName ? "border-red-500" : "border-gray-300"
            }`}
        />
      </div>
      <div>
        <label
          className="block font-semibold mb-2 text-gray-900"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          BHK Type
        </label>
        <div className="grid grid-cols-3 gap-3">
          {["1 RK", "1 BHK", "2 BHK", "3 BHK", "4 BHK", "5+ BHK"].map((type) => {
            const isSelected = formData.bhkType === type;
            return (
              <div
                key={type}
                onClick={() => handleSelect("bhkType", type)}
                className={`flex items-center gap-4 px-4 py-4 rounded-2xl border font-extrabold cursor-pointer transition-all ${isSelected
                    ? "bg-[#E7ECF5] border-[#2450A0] text-[#2450A0]"
                    : "bg-white border-[#E5E7EB] text-[#121828]/60 hover:bg-[#f5faff]"
                  }`}
                style={{ borderWidth: "1.6px", maxWidth: "200px" }}
              >
                {/* Square Radio Icon */}
                <div className="w-5 h-5 rounded-lg border flex items-center justify-center">
                  <div
                    className={`w-3 h-3 rounded-md ${isSelected ? "bg-[#2450A0]" : "bg-transparent"
                      }`}
                  ></div>
                </div>

                <span className="text-[14px] font-semibold">{type}</span>
              </div>
            );
          })}
        </div>
      </div>


      {/* Save & Next */}
         <div className="col-span-2 text-right pt-5">
            <button
              onClick={handleNext}
              style={{ marginRight: "147px" }}
              type="submit"
              className="bg-[#2450A0] text-white px-6 py-2 y- rounded-full w-full md:w-[40%]"
            >
              SAVE & NEXT
            </button>
          </div>
    </div>
  );
};

export default Rent1;