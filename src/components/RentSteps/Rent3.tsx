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

interface Step3Props {
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;
  handleNext: () => void;
  handleBack: () => void;
}

const Step3: React.FC<Step3Props> = ({
  formData,
  setFormData,
  handleNext,
  handleBack,
}) => {
  const [selectedAvailability, setSelectedAvailability] = useState(
    formData.availability || "Everyday"
  );
  const [selectedDate, setSelectedDate] = useState(formData.availableDate || "");
  const [selectedTime, setSelectedTime] = useState(formData.availableTime || "");

  const areaOptions = ["Everyday", "Weekday", "Weekend"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      availability: selectedAvailability,
      availableDate: selectedDate,
      availableTime: selectedTime,
    }));
    handleNext();
  };

  return (
    <div
      className="relative text-gray-900 min-h-screen overflow-hidden bg-gray-50"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <main className="pb-12 flex justify-center relative z-10">
        <div className="w-full px-4" style={{ maxWidth: "1090px" }}>
          <form onSubmit={handleSubmit} className="mt-8 bg-white p-6 rounded-xl shadow-sm w-full">
            {/* Availability */}
            <label
              className="block text-[16px] font-semibold text-[#0A0909] mb-2"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Availability<span className="text-red-500">*</span>
            </label>
            <div className="flex gap-4 w-full mb-6 flex-nowrap overflow-x-auto">
              {areaOptions.map((option) => {
                const isSelected = selectedAvailability === option;
                return (
                  <div
                    key={option}
                    onClick={() => setSelectedAvailability(option)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border cursor-pointer transition-all text-sm font-medium ${
                      isSelected
                        ? "bg-[#1218280D] border-[#2450A0] text-[#2450A0]"
                        : "bg-white border-gray-300 text-[#121828] hover:bg-[#f5faff]"
                    }`}
                  >
                    <div
                      className={`w-6 h-6 flex items-center justify-center rounded-[8px] border transition-all duration-200 ${
                        isSelected
                          ? "border-[#2450A0] bg-[#F0F4FF]"
                          : "border-gray-300 bg-white"
                      }`}
                    >
                      {isSelected && (
                        <div className="w-3 h-3 rounded-[4px] bg-[#2450A0]"></div>
                      )}
                    </div>
                    {option}
                  </div>
                );
              })}
            </div>

            {/* Select Date */}
            <div className="mb-4 relative">
              <label
                className="block text-[16px] font-semibold text-[#0A0909] mb-1"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Select Date<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="06/07/2025"
                value={selectedDate}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = "text";
                }}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full border border-gray-300 rounded-full px-4 py-2 pr-10 text-sm focus:outline-none"
              />
              <img
                src="/calender.png"
                alt="calendar"
                className="absolute right-4 top-12 -translate-y-1/2 w-5 h-5 pointer-events-none"
              />
            </div>

            {/* Select Time */}
            <div className="mb-4 relative">
              <label
                className="block text-[16px] font-semibold text-[#0A0909] mb-1"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Select Time<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="06:15.00"
                value={selectedTime}
                onFocus={(e) => (e.target.type = "time")}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = "text";
                }}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full border border-gray-300 rounded-full px-4 py-2 pr-10 text-sm focus:outline-none"
              />
              <img
                src="/timedate.png"
                alt="clock"
                className="absolute right-4 top-12 -translate-y-1/2 w-5 h-5 pointer-events-none"
              />
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
        </div>
      </main>
    </div>
  );
};

export default Step3;