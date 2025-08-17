"use client";

import { useState, ChangeEvent, Dispatch, SetStateAction } from "react";

interface FormData {
  location: string;
  propertyType: string;
  propertyName: string;
  bhkType: string;
  commodities: string[];
  expectedPrice?: string;
  expectedDeposit?: string;
  rentNegotiable?: boolean;
  monthlyMaintenance?: string;
  availability?: string;
  availableDate?: string;
  availableTime?: string;
}

interface Step4Props {
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;
  handleNext: () => void;
  handleBack: () => void;
}

const Step4: React.FC<Step4Props> = ({
  formData,
  setFormData,
  handleNext,
  handleBack,
}) => {
  const [preferredTenants, setPreferredTenants] = useState<string[]>(
    formData.commodities.includes("Anyone") ? ["Anyone"] : formData.commodities
  );
  const [selectedAreas, setSelectedAreas] = useState<string[]>(formData.commodities);
  const [furnishing, setFurnishing] = useState(
    formData.monthlyMaintenance || "Semi-Furnished"
  );
  const [parking, setParking] = useState(formData.availability || "Both");
  const [description, setDescription] = useState("");

  const areaOptions = [
    "SECTOR-7 EXT",
    "SECTOR-5 (with part of-sec, 3 & 6)",
    "HOUSING BOARD SEC-7",
    "SECTOR-9",
    "SECTOR-9A",
    "SECTOR-10",
  ];

  const toggleTenant = (tenant: string) => {
    let updatedTenants;
    if (tenant === "Anyone") {
      updatedTenants = ["Anyone"];
    } else {
      updatedTenants = preferredTenants.includes(tenant)
        ? preferredTenants.filter((t) => t !== tenant)
        : [...preferredTenants.filter((t) => t !== "Anyone"), tenant];
    }
    setPreferredTenants(updatedTenants);
    setFormData((prev) => ({ ...prev, commodities: updatedTenants }));
  };

  const toggleArea = (area: string) => {
    const updatedAreas = selectedAreas.includes(area)
      ? selectedAreas.filter((a) => a !== area)
      : [...selectedAreas, area];
    setSelectedAreas(updatedAreas);
    setFormData((prev) => ({ ...prev, commodities: updatedAreas }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      commodities: [...new Set([...preferredTenants, ...selectedAreas])],
      monthlyMaintenance: furnishing,
      availability: parking,
    }));
    handleNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 px-4 md:px-[300px] py-6">
      {/* Preferred Areas */}
      <div>
        <label
          className="text-[#0A0909] text-[16px] font-bold mb-2 block"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Preferred Areas <span className="text-red-500">*</span>
        </label>
        <div className="flex flex-wrap gap-8 w-full px-4 py-3">
          {areaOptions.map((area) => {
            const isSelected = selectedAreas.includes(area);
            return (
              <div
                key={area}
                onClick={() => toggleArea(area)}
                className={`flex items-center text-[14px] font-bold gap-2 px-4 py-2 rounded-full border cursor-pointer transition-all ${
                  isSelected
                    ? "bg-[#1218280D] border-[#2450A0] text-[#2450A0]"
                    : "bg-white border-gray-300 text-[#121828] hover:bg-[#f5faff]"
                }`}
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <div
                  className={`w-6 h-6 flex items-center justify-center rounded-[8px] border transition-all duration-200 ${
                    isSelected ? "border-[#2450A0] bg-[#F0F4FF]" : "border-gray-300 bg-white"
                  }`}
                >
                  {isSelected && <div className="w-3 h-3 rounded-[4px] bg-[#2450A0]" />}
                </div>
                <span className="text-sm font-medium">{area}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Preferred Tenants */}
      <div>
        <label
          className="text-[#0A0909] text-[16px] font-bold mb-2 block"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Preferred Tenants <span className="text-red-500">*</span>
        </label>
        <div
          className="flex flex-wrap gap-8 w-full px-4 py-3"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {["Anyone", "Family", "Company", "Bachelor Female", "Bachelor Male"].map(
            (tenant) => {
              const isSelected = preferredTenants.includes(tenant);
              return (
                <div
                  key={tenant}
                  onClick={() => toggleTenant(tenant)}
                  className={`flex items-center text-[14px] font-bold gap-2 px-4 py-2 rounded-full border cursor-pointer transition-all ${
                    isSelected
                      ? "bg-[#1218280D] border-[#2450A0] text-[#2450A0]"
                      : "bg-white border-gray-300 text-[#121828] hover:bg-[#f5faff]"
                  }`}
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  <div
                    className={`w-6 h-6 flex items-center justify-center rounded-[8px] border transition-all duration-200 ${
                      isSelected ? "border-[#2450A0] bg-[#F0F4FF]" : "border-gray-300 bg-white"
                    }`}
                  >
                    {isSelected && <div className="w-3 h-3 rounded-[4px] bg-[#2450A0]" />}
                  </div>
                  <span className="text-sm font-medium">{tenant}</span>
                </div>
              );
            }
          )}
        </div>
      </div>

      {/* Furnishing */}
      <div>
        <label
          className="text-[#0A0909] text-[16px] font-bold mb-2 block"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Furnishing <span className="text-red-500">*</span>
        </label>
        <div className="relative w-full">
          <select
            value={furnishing}
            onChange={(e) => setFurnishing(e.target.value)}
            className="w-full border text-[#0A090966] border-gray-300 rounded-full px-4 py-3 pr-12 focus:outline-none appearance-none"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <option value="Fully-Furnished">Fully-Furnished</option>
            <option value="Semi-Furnished">Semi-Furnished</option>
            <option value="Unfurnished">Unfurnished</option>
          </select>
          <img
            src="/Vector.png"
            alt="arrow"
            className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none w-4 h-2"
          />
        </div>
      </div>

      {/* Parking */}
      <div>
        <label
          className="text-[#0A0909] text-[16px] font-bold mb-2 block"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Parking <span className="text-red-500">*</span>
        </label>
        <div className="relative w-full">
          <select
            value={parking}
            onChange={(e) => setParking(e.target.value)}
            className="w-full text-[#0A090966] border border-gray-300 rounded-full px-4 py-3 pr-12 focus:outline-none appearance-none"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <option value="None">None</option>
            <option value="Car">Car</option>
            <option value="Bike">Bike</option>
            <option value="Both">Both</option>
          </select>
          <img
            src="/Vector.png"
            alt="arrow"
            className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none w-4 h-2"
          />
        </div>
      </div>

      {/* Description */}
      <div>
        <label
          className="text-[#0A0909] text-[16px] font-bold mb-2 block"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Description <span className="text-red-500">*</span>
        </label>
        <div className="relative w-full">
          <textarea
            placeholder="Write A Message"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none"
            style={{ fontFamily: "Poppins, sans-serif" }}
            rows={3}
          />
        </div>
      </div>

      {/* Back and Save & Next Buttons */}
      <div className="flex justify-between pt-5">
        <button
          type="button"
          onClick={handleBack}
          className="bg-gray-200 text-gray-900 px-6 py-2 rounded-full w-full md:w-[40%]"
        >
          BACK
        </button>
        <button
          type="submit"
          className="bg-[#2450A0] text-white px-6 py-2 rounded-full w-full md:w-[40%]"
          style={{ marginRight: "147px" }}
        >
          SAVE & NEXT
        </button>
      </div>
    </form>
  );
};

export default Step4;