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

interface FormErrors {
  location: boolean;
  propertyType: boolean;
  propertyName: boolean;
  bhkType: boolean;
  commodities: boolean;
}

interface Step2Props {
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;
  formErrors: FormErrors;
  setFormErrors: Dispatch<SetStateAction<FormErrors>>;
  handleNext: () => void;
  handleBack: () => void;
}

const Step2: React.FC<Step2Props> = ({
  formData,
  setFormData,
  formErrors,
  setFormErrors,
  handleNext,
  handleBack,
}) => {
  const [checked, setChecked] = useState(formData.rentNegotiable || false);

  const formatIndianPrice = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    if (numericValue === "") return "";
    return Number(numericValue).toLocaleString("en-IN");
  };

  const getShortIndianCurrencyFormat = (amount: string): string => {
    const number = parseInt(amount.replace(/,/g, "") || "0");
    if (number >= 10000000) {
      return `₹ ${(number / 10000000).toFixed(1)} Cr`;
    } else if (number >= 100000) {
      return `₹ ${(number / 100000).toFixed(1)} Lacs`;
    } else if (number >= 1000) {
      return `₹ ${(number / 1000).toFixed(1)} K`;
    } else {
      return `₹ ${number}`;
    }
  };

  const handleExpectedPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const formatted = formatIndianPrice(input);
    setFormData((prev) => ({ ...prev, expectedPrice: formatted }));
    setFormErrors((prev) => ({ ...prev, commodities: false }));
  };

  const handleExpectedDepositChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const formatted = formatIndianPrice(input);
    setFormData((prev) => ({ ...prev, expectedDeposit: formatted }));
  };

  const handleMaintenanceChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, monthlyMaintenance: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.expectedPrice && formData.expectedDeposit) {
      handleNext();
    } else {
      setFormErrors((prev) => ({
        ...prev,
        commodities: !formData.expectedPrice || !formData.expectedDeposit,
      }));
    }
  };

  return (
    <div
      className="relative text-gray-900 min-h-screen overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <main className="pb-12 flex justify-center relative z-10">
        <div className="w-full px-4" style={{ maxWidth: "1090px" }}>
          <form onSubmit={handleSubmit}>
            {/* Expected Rent */}
            <div className="mt-8 relative w-full md:w-[600px] lg:w-[500px] xl:w-[870px]">
              <label
                className="block text-[16px] font-semibold text-[#0A0909] mb-2"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Expected Rent<span className="text-red-500">*</span>
              </label>
              <div
                className={`flex items-center border rounded-full px-3 py-2 bg-white text-[#2450A0] ${
                  formErrors.commodities ? "border-red-500" : "border-[#0A090926]"
                }`}
              >
                <span className="text-blue-600 font-medium">₹</span>
                <input
                  type="text"
                  value={formData.expectedPrice || ""}
                  onChange={handleExpectedPriceChange}
                  placeholder="0"
                  className="flex-1 ml-2 focus:outline-none"
                />
                <span className="text-[#0A090966] text-[15px]">/Month</span>
              </div>
              {formData.expectedPrice && (
                <p className="absolute right-3 text-[#2450A0] text-sm mt-1">
                  {getShortIndianCurrencyFormat(formData.expectedPrice)}
                </p>
              )}
            </div>

            {/* Expected Deposit */}
            <div className="mt-5 relative w-full md:w-[600px] lg:w-[500px] xl:w-[870px]">
              <label
                className="block text-[16px] font-semibold text-[#0A0909] mb-2"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Expected Deposit<span className="text-red-500">*</span>
              </label>
              <div
                className={`flex items-center border rounded-full px-3 py-2 bg-white text-[#2450A0] ${
                  formErrors.commodities ? "border-red-500" : "border-[#0A090926]"
                }`}
              >
                <span className="text-blue-600 font-medium">₹</span>
                <input
                  type="text"
                  value={formData.expectedDeposit || ""}
                  onChange={handleExpectedDepositChange}
                  placeholder="0"
                  className="flex-1 ml-2 focus:outline-none"
                />
                <span className="text-[#0A090966] text-[15px]">/Month</span>
              </div>
              {formData.expectedDeposit && (
                <p className="absolute right-3 text-[#2450A0] text-sm mt-1">
                  {getShortIndianCurrencyFormat(formData.expectedDeposit)}
                </p>
              )}
            </div>

            {/* Rent Negotiable */}
            <div className="mt-8 flex items-center gap-2">
              <div
                onClick={() => {
                  setChecked(!checked);
                  setFormData((prev) => ({ ...prev, rentNegotiable: !checked }));
                }}
                className={`w-6 h-6 rounded-[8px] border flex items-center justify-center cursor-pointer transition-all ${
                  checked
                    ? "border-[#2450A0] shadow-[0_0_6px_2px_rgba(150,71,255,0.3)]"
                    : "border-gray-400"
                }`}
              >
                {checked && (
                  <div className="w-3 h-3 rounded-[4px] bg-[#2450A0]"></div>
                )}
              </div>
              <label
                onClick={() => {
                  setChecked(!checked);
                  setFormData((prev) => ({ ...prev, rentNegotiable: !checked }));
                }}
                className="text-[14px] text-[#0A0909] font-semibold cursor-pointer"
              >
                Rent Negotiable
              </label>
            </div>

            {/* Monthly Maintenance */}
            <div className="mt-6 relative w-full md:w-[600px] lg:w-[500px] xl:w-[870px]">
              <label
                className="block text-[16px] font-semibold text-[#0A0909] mb-2"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Monthly Maintenance<span className="text-red-500">*</span>
              </label>
              <select
                value={formData.monthlyMaintenance || "Maintenance Included"}
                onChange={handleMaintenanceChange}
                className="w-full border rounded-full px-3 py-2 pr-10 text-sm text-[#0A090966] bg-white focus:outline-none appearance-none"
              >
                <option>Maintenance Included</option>
                <option>Extra Charges</option>
              </select>
              <img
                src="/vector.png"
                alt="arrow"
                className="absolute right-3 top-12 -translate-y-1/2 w-4 h-2 pointer-events-none"
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

export default Step2;