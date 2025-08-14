import React from "react";
import Link from "next/link";

interface Step1Props {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    firmName?: string;
    officeAddress?: string;
    agreedToTerms: boolean;
  };
  formErrors: {
    firstName: boolean;
    lastName: boolean;
    email: boolean;
    phone: boolean;
    agreedToTerms: boolean;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheckbox: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNext: () => void;
}

const Step1: React.FC<Step1Props> = ({
  formData,
  formErrors,
  handleChange,
  handleCheckbox,
  handleNext,
}) => {
  return (
    <>
      {/* Mobile View */}
      <form className="space-y-5 lg:hidden max-w-md mx-auto px-4">
        <div className="mt-10">
          <label className="block font-semibold text-[14px]">
            Enter your first name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`mt-1 w-full border ${
              formErrors.firstName ? "border-red-500" : "border-gray-300"
            } rounded-2xl p-2 text-sm`}
            placeholder="Ex. Ramesh"
          />
          {formErrors.firstName && (
            <p className="text-red-500 text-sm mt-1">First name is required</p>
          )}
        </div>

        <div>
          <label className="block font-semibold text-[14px]">
            Enter your last name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`mt-1 w-full border ${
              formErrors.lastName ? "border-red-500" : "border-gray-300"
            } rounded-2xl p-2 text-sm`}
            placeholder="Ex. Sharma"
          />
          {formErrors.lastName && (
            <p className="text-red-500 text-sm mt-1">Last name is required</p>
          )}
        </div>

        <div>
          <label className="block font-semibold text-[14px]">
            Enter your phone number<span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`mt-1 w-full border ${
              formErrors.phone ? "border-red-500" : "border-gray-300"
            } rounded-2xl p-2 text-sm`}
            placeholder="Ex. +91 9876543210"
          />
          {formErrors.phone && (
            <p className="text-red-500 text-sm mt-1">Phone number is required</p>
          )}
        </div>

        <div>
          <label className="block font-semibold text-[14px]">
            Enter your email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 w-full border ${
              formErrors.email ? "border-red-500" : "border-gray-300"
            } rounded-2xl p-2 text-sm`}
            placeholder="ramesh@gmail.com"
          />
          {formErrors.email && (
            <p className="text-red-500 text-sm mt-1">Email is required</p>
          )}
        </div>

        <div>
          <label className="block font-semibold text-[14px]">
            Enter your firm name (optional)
          </label>
          <input
            type="text"
            name="firmName"
            value={formData.firmName || ""}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded-2xl p-2 text-sm"
            placeholder="Ex. Gurgaon Realty Hub"
          />
        </div>

        <div>
          <label className="block font-semibold text-[14px]">
            Enter Office Address (optional)
          </label>
          <div className="relative">
            <input
              type="text"
              name="officeAddress"
              value={formData.officeAddress || ""}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-2xl p-2 pr-10 text-sm"
              placeholder="Ex. DLF Cyber City, Tower 10, Phase II"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <img
                src="/broker/location.webp"
                alt="Location Icon"
                style={{ width: "18px" }}
              />
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="agreedToTerms"
            checked={formData.agreedToTerms}
            onChange={handleCheckbox}
            className="h-4 w-4 text-[#2450A0] border-gray-300 rounded"
            style={{ zIndex: 10 }}
          />
          <p className="text-sm">
            I agree to the Broker{" "}
            <Link href="#" className="text-[#2450a0] underline">
              Terms & Conditions
            </Link>
          </p>
        </div>
        {formErrors.agreedToTerms && (
          <p className="text-red-500 text-sm mt-1">
            You must agree to the Terms & Conditions
          </p>
        )}

        <div className="text-center mb-8">
          <button
            type="button"
            onClick={handleNext}
            className="bg-[#2450A0] text-white px-6 py-2 rounded-full w-full max-w-xs"
          >
            Save and Next
          </button>
        </div>
      </form>

      {/* Desktop View */}
      <form className="hidden lg:grid grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div>
          <label className="block text-lg font-semibold">
            Enter your first name<span className="text-red-500">*</span>
          </label>
          <input
            style={{ width: "420px", height: "50px" }}
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`mt-1 w-full border ${
              formErrors.firstName ? "border-red-500" : "border-gray-300"
            } rounded-2xl p-2`}
            placeholder="Ex. Ramesh"
          />
          {formErrors.firstName && (
            <p className="text-red-500 text-sm mt-1">First name is required</p>
          )}
        </div>

        <div>
          <label className="block text-lg font-semibold">
            Enter your last name<span className="text-red-500">*</span>
          </label>
          <input
            style={{ width: "420px", height: "50px" }}
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`mt-1 w-full border ${
              formErrors.lastName ? "border-red-500" : "border-gray-300"
            } rounded-2xl p-2`}
            placeholder="Ex. Sharma"
          />
          {formErrors.lastName && (
            <p className="text-red-500 text-sm mt-1">Last name is required</p>
          )}
        </div>

        <div>
          <label className="block text-lg font-semibold">
            Enter your phone number<span className="text-red-500">*</span>
          </label>
          <input
            style={{ width: "420px", height: "50px" }}
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`mt-1 w-full border ${
              formErrors.phone ? "border-red-500" : "border-gray-300"
            } rounded-2xl p-2`}
            placeholder="Ex. +91 2345332158"
          />
          {formErrors.phone && (
            <p className="text-red-500 text-sm mt-1">Phone number is required</p>
          )}
        </div>

        <div>
          <label className="block text-lg font-semibold">
            Enter your email<span className="text-red-500">*</span>
          </label>
          <input
            style={{ width: "420px", height: "50px" }}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 w-full border ${
              formErrors.email ? "border-red-500" : "border-gray-300"
            } rounded-2xl p-2`}
            placeholder="ramesh@gmail.com"
          />
          {formErrors.email && (
            <p className="text-red-500 text-sm mt-1">Email is required</p>
          )}
        </div>

        <div>
          <label className="block text-lg font-semibold">
            Enter your firm name (optional)
          </label>
          <input
            style={{ width: "420px", height: "50px" }}
            type="text"
            name="firmName"
            value={formData.firmName || ""}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded-2xl p-2"
            placeholder="Ex. Gurgaon Realty Hub"
          />
        </div>

        <div className="relative">
          <label className="block text-lg font-semibold mb-1">
            Enter Office Address (optional)
          </label>
          <div className="relative">
            <input
              type="text"
              name="officeAddress"
              value={formData.officeAddress || ""}
              onChange={handleChange}
              placeholder="Ex. DLF Cyber City"
              style={{ width: "420px", height: "50px" }}
              className="w-full border border-gray-300 rounded-2xl p-2 pr-10"
            />
            <span className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400">
              <img
                src="/broker/location.webp"
                alt="Location Icon"
                style={{ width: "22px" }}
              />
            </span>
          </div>
        </div>

        <div className="col-span-2 flex items-center gap-2">
          <input
            type="checkbox"
            name="agreedToTerms"
            checked={formData.agreedToTerms}
            onChange={handleCheckbox}
            className="h-4 w-4 text-[#2450A0] border-gray-300 rounded"
            style={{ zIndex: 10, position: "relative" }}
          />
          <p className="text-md">
            I agree to the Broker{" "}
            <Link href="#" className="text-[#2450a0] underline">
              Terms & Conditions
            </Link>
          </p>
        </div>
        {formErrors.agreedToTerms && (
          <p className="text-red-500 text-sm mt-1">
            You must agree to the Terms & Conditions
          </p>
        )}

        <div className="col-span-2 text-center ">
          <button
            type="button"
            onClick={handleNext}
            className="bg-[#2450A0] text-white px-6 py-2 rounded-full w-full md:w-[50%] md:h-[50px] md:mt-10"
          >
            Save and Next
          </button>
        </div>
      </form>
    </>
  );
};

export default Step1;