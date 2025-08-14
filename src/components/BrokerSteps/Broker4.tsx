"use client";

import React, { useState, useEffect } from "react";

interface Step4Props {
  formData: {
    areas?: string[];
  };
  setFormData: (data: any) => void;
  handleNext: () => void;
  handleBack: () => void;
}

const areaOptions = [
  "COUNTRYWIDE PROMOTERS PRIVATE LIMITED",
  "BPTP LIMITED",
  "CHD DEVELOPERS LTD.",
  "EMPIRE REALTECH PVT. LTD.",
  "GLS INFRATECH PVT.LTD",
  "VSR INFRATECH PRIVATE LIMITED",
];

const Step4: React.FC<Step4Props> = ({
  formData,
  setFormData,
  handleNext,
  handleBack,
}) => {
  const [selectedAreas, setSelectedAreas] = useState<string[]>(
    formData.areas || []
  );

  useEffect(() => {
    setFormData((prev: any) => ({ ...prev, areas: selectedAreas }));
  }, [selectedAreas]);

  const toggleArea = (area: string) => {
    setSelectedAreas((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    );
  };

  const removeTag = (area: string) => {
    setSelectedAreas((prev) => prev.filter((a) => a !== area));
  };

  return (
    <>
      <h3 className="text-base font-semibold mb-2">
        Select from areas that the broker specializes in{" "}
        <span className="text-red-500">*</span>
      </h3>

      {/* Selected Tags */}
      <div
        className="flex flex-wrap gap-2 border border-gray-300 rounded-xl p-2 min-h-[52px] mb-4"
        style={{ maxWidth: "650px" }}
      >
        {selectedAreas.map((area) => (
          <div
            key={area}
            className="flex items-center gap-1 px-3 py-1 bg-white text-[#2450a0] rounded-full text-sm font-medium border border-[#2450a0]"
          >
            <span>{area}</span>
            <button onClick={() => removeTag(area)}>
              <img
                src="/broker/close-circle.png"
                alt="remove"
                className="w-4"
              />
            </button>
          </div>
        ))}
        <div className="ml-auto mt-1">
          <img src="/broker/Dropdown.png" alt="dropdown" />
        </div>
      </div>

      {/* Area Selection List */}
      <div className="flex flex-col gap-3">
        {areaOptions.map((area) => {
          const isSelected = selectedAreas.includes(area);
          return (
            <div
              key={area}
              onClick={() => toggleArea(area)}
              className={`flex items-center gap-4 px-4 py-4 rounded-2xl border font-extrabold cursor-pointer transition-all ${
                isSelected
                  ? "bg-[#E7ECF5] border-[#2450a0] text-[#2450a0]"
                  : "bg-white border-[#E5E7EB] text-[#121828]/60 hover:bg-[#f5faff]"
              }`}
              style={{ borderWidth: "1.6px", maxWidth: "650px" }}
            >
              {/* Custom Radio */}
              <div className="flex items-center justify-center w-5 h-5">
                <div
                  style={{
                    padding: "14px",
                    borderRadius: "12px",
                    backgroundColor: "white",
                  }}
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                    isSelected ? "border-[#2450a0]" : "border-[#D1D5DB]"
                  }`}
                >
                  <div
                    style={{ padding: "7px", borderRadius: "3px" }}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      isSelected
                        ? "bg-[#2450a0] shadow-[0_1px_6px_0_#c192f1]"
                        : "bg-[#E5E7EB]"
                    }`}
                  ></div>
                </div>
              </div>

              <span className="text-sm font-bold uppercase">{area}</span>
            </div>
          );
        })}
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mt-6 max-w-[650px]">
        <button
          type="button"
          onClick={handleBack}
          className="hidden bg-gray-300 text-gray-900 px-6 py-2 rounded-full w-full sm:w-[48%]"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="bg-[#2450A0] text-white px-6 py-2 rounded-full w-full sm:w-[48%] md:mb-0 mb-8"
        >
          SUBMIT
        </button>
      </div>
    </>
  );
};

export default Step4;