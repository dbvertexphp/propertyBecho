"use client";

import Image from "next/image";

interface FacilityItem {
  label: string;
  icon: string;
}

interface FormData {
  businessType: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  commodities: string[];
  firmName?: string;
  agreedToTerms: boolean;
}

interface FormErrors {
  firstName: boolean;
  lastName: boolean;
  email: boolean;
  phone: boolean;
  commodities: boolean;
  agreedToTerms: boolean;
}

interface Step2Props {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  formErrors: FormErrors;
  setFormErrors: React.Dispatch<React.SetStateAction<FormErrors>>;
  handleNext: () => void;
  handleBack: () => void;
}

const furnishings: FacilityItem[] = [
  { label: "Apartment", icon: "/Broker/Apartment.png" },
  { label: "Independent House", icon: "/Broker/house.png" },
  { label: "Duplex", icon: "/Broker/duplex.png" },
  { label: "Independent Floor", icon: "/Broker/independent_house.png" },
  { label: "Villa", icon: "/Broker/Raid.png" },
  { label: "Studio", icon: "/Broker/studio.png" },
  { label: "Penthouse", icon: "/Broker/Yurt.png" },
  { label: "Plot", icon: "/Broker/Parking.png" },
  { label: "Farm House", icon: "/Broker/Farm.png" },
  { label: "Agricultural Land", icon: "/Broker/agriculture.png" },
];

const societyAmenities: FacilityItem[] = [
  { label: "Office", icon: "/Broker/office.png" },
  { label: "Retail Shop", icon: "/Broker/Group.png" },
  { label: "Showroom", icon: "/Broker/showroom.png" },
  { label: "Warehouse", icon: "/Broker/warehouse.png" },
  { label: "Plot", icon: "/Broker/Tiny.png" },
  { label: "Others", icon: "/Broker/Yurt.png" },
];

export default function Step2({
  formData,
  setFormData,
  formErrors,
  setFormErrors,
  handleNext,
  handleBack,
}: Step2Props) {
  const toggleFacility = (item: string) => {
    setFormData((prev) => {
      const currentCommodities = prev.commodities || [];
      if (currentCommodities.includes(item)) {
        return {
          ...prev,
          commodities: currentCommodities.filter((f) => f !== item),
        };
      } else {
        return { ...prev, commodities: [...currentCommodities, item] };
      }
    });
    if (formErrors.commodities) {
      setFormErrors((prev) => ({ ...prev, commodities: false }));
    }
  };

  return (
    <form className="space-y-5">
      <div className="bg-[#E8EDF7] text-[#0052CC] text-sm font-medium p-4 rounded-md flex items-start space-x-2 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mt-[2px] flex-shrink-0 text-[#2450A0]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
          />
        </svg>
        <p style={{ fontSize: "12px", fontWeight: "500" }}>
          All things chosen next are for leads that will be provided so choose
          carefully.
        </p>
      </div>

      {/* 🔹 Residential Section */}
      <div>
        <h3 className="font-semibold mb-4 text-[15px]">
          Residential<span className="text-red-500">*</span>
        </h3>
        <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
          {furnishings.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => toggleFacility(item.label)}
              className={`flex flex-col items-center justify-center rounded-lg p-2 sm:p-3 md:p-4 transition-all h-[90px] sm:h-[100px] ${
                formData.commodities.includes(item.label)
                  ? "border border-[#0052CC] bg-[#EBF1FF] text-[#0052CC]"
                  : "border border-[#1218280D] bg-[#f3f3f3] text-[#121212]"
              }`}
            >
              <img
                src={item.icon}
                alt={item.label}
                className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px]"
              />
              <span
                className={`mt-2 sm:mt-3 font-medium ${
                  formData.commodities.includes(item.label)
                    ? "text-[#0052CC]"
                    : "text-[rgba(113,117,128,1)]"
                } text-[10px] sm:text-[12px] md:text-[15px]`}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 🔹 Commercial Section */}
      <div>
        <h3 className="font-semibold mb-4 text-[15px]">
          Commercial<span className="text-red-500">*</span>
        </h3>
        <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
          {societyAmenities.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => toggleFacility(item.label)}
              className={`flex flex-col items-center justify-center rounded-lg p-2 sm:p-3 md:p-4 transition-all h-[90px] sm:h-[100px] ${
                formData.commodities.includes(item.label)
                  ? "border border-[#0052CC] bg-[#EBF1FF] text-[#0052CC]"
                  : "border border-[#1218280D] bg-[#f3f3f3] text-[#121212]"
              }`}
            >
              <img
  src={item.icon}
  alt={item.label}
  className={`${
    item.label === "Retail Shop"
      ? "w-[35px] h-[35px]"
      : "w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[50px] md:h-[50px]"
  }`}
/>
              <span
                className={`mt-2 sm:mt-3 font-medium ${
                  formData.commodities.includes(item.label)
                    ? "text-[#0052CC]"
                    : "text-[rgba(113,117,128,1)]"
                } text-[10px] sm:text-[12px] md:text-[15px]`}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 🔺 Validation Message */}
      {formErrors.commodities && (
        <p className="text-red-500 text-sm mt-1">
          At least one commodity is required
        </p>
      )}

      {/* 🔻 Navigation Buttons */}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={handleBack}
          className="bg-gray-300 text-gray-900 px-6 py-2 rounded-full w-[48%]"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="bg-[#2450A0] text-white px-6 py-2 rounded-full w-[48%]"
        >
          Save and Next
        </button>
      </div>
    </form>
  );
}
