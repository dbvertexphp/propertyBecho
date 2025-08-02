"use client";

import { useState } from "react";
import Image from "next/image";
import Header2 from "@/components/Header2";

export default function BrokerProfilePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    firm: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    email: false,
  });
  const [showRequiredMessage, setShowRequiredMessage] = useState(false);

  const steps = [
    "Personal Details",
    "Choose Commodity",
    "Select Area and Specialization",
    "Select a Builder",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (value.trim()) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const validateStep1 = () => {
    const newErrors = {
      name: !formData.name.trim(),
      phone: !formData.phone.trim(),
      email: !formData.email.trim(),
    };
    setErrors(newErrors);
    const hasErrors = Object.values(newErrors).some((error) => error);
    setShowRequiredMessage(hasErrors);
    return !hasErrors;
  };

  const goNext = () => {
    if (currentStep === 1 && !validateStep1()) {
      return;
    }
    setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  };

  const goBack = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="max-w-7xl mx-auto">
      <div className="min-h-screen bg-white flex flex-col font-sans">
        {/* 🔷 Header */}
        <div className="p-4 top-0 w-full z-20 bg-white">
          <Header2 />
        </div>

        {/* 🔙 Back Button */}
        <div className="mt-[150px] md:mt-[150px] ml-4 lg:ml-10">
          <div className="w-10 h-10 p-2 border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
            <Image
              src="/Line arrow-left.png"
              alt="Back"
              width={24}
              height={24}
            />
          </div>
        </div>

        {/* Mobile Heading */}
        <div className="block lg:hidden px-4 pb-2 mt-10">
          <h2 className="text-2xl font-extrabold text-black">Broker Profile</h2>
          <p className="text-sm text-gray-400 mt-1">
            Specializing in connecting buyers, sellers, and investors with the
            right opportunities.
          </p>
        </div>

        {/* 🔄 Layout */}
        <div className="flex flex-1 flex-col lg:flex-row p-4 lg:p-10 gap-8 lg:h-[calc(100vh-200px)] lg:items-stretch lg:overflow-hidden">
          <div className="hidden lg:flex flex-col w-1/3 relative mt-6">
            {/* Continuous Vertical Gray Line */}
            <div
              className="absolute left-[30px] top-[64px] w-[3px] bg-gray-300 z-0"
              style={{ height: `${(steps.length - 1) * 124}px` }}
            />
            {steps.map((step, index) => (
              <div
                className="flex items-start gap-6 mb-20 relative z-10"
                key={index}
              >
                {/* Blue Rectangle Background */}
                {(currentStep === index + 1 || currentStep > index + 1) && (
                  <div className="absolute -left-4 -top-2 w-[400px] h-[72px] bg-[#2D5BE3]/20 rounded-xl z-5" />
                )}
                {/* Step Icon */}
                <div className="flex flex-col items-center relative">
                  {/* White circle to mask the vertical line inside the icon */}
                  <div className="absolute top-0 left-0 w-16 h-16 rounded-full bg-white z-10" />

                  {/* Circle with Step Icon */}
                  <div
                    className={`w-16 h-16 rounded-full border-3 overflow-hidden flex items-center justify-center z-20
                    ${
                      currentStep === index + 1
                        ? "border-[#2D5BE3]"
                        : currentStep > index + 1
                        ? "border-[#2D5BE3]"
                        : "border-gray-300"
                    }`}
                  >
                    <img
                      src={`/step-icons/step${index + 1}${
                        currentStep === index + 1 || currentStep > index + 1
                          ? "blue"
                          : "gray"
                      }.svg`}
                      alt={`step${index + 1}`}
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                </div>

                {/* Step Name (left aligned) */}
                <div className="pt-4 text-left">
                  <span
                    className={`text-xl font-bold ${
                      currentStep === index + 1
                        ? "text-[#2D5BE3]"
                        : currentStep > index + 1
                        ? "text-[#2D5BE3]"
                        : "text-gray-500"
                    }`}
                  >
                    {step}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* 🔁 Stepper Top (Mobile) */}
          <div className="lg:hidden w-full px-2 mb-6 relative mt-[20px]">
            {/* Connecting Line */}
            <div className="absolute top-[5px] left-[6px] right-[6px] h-1 bg-gray-300 z-0" />

            {/* Step Grid */}
            <div className="relative grid grid-cols-4 gap-[40px] justify-start items-start pl-0">
              {steps.map((step, index) => {
                const isCompleted = currentStep > index;

                return (
                  <div
                    key={index}
                    className="relative z-10 flex flex-col items-start"
                  >
                    {/* Step Dot */}
                    <div
                      className={`rounded-full mb-1 border-4 transition-all duration-300 ${
                        isCompleted
                          ? "w-4 h-4 border-[#2D5BE3] bg-white"
                          : "w-3 h-3 border-gray-300 bg-gray-300"
                      }`}
                    />

                    {/* Step Label */}
                    <span
                      className={`text-[11px] leading-tight break-words text-left max-w-[90px] font-bold ${
                        isCompleted ? "text-[#2D5BE3]" : "text-[#0A0909]"
                      }`}
                    >
                      {step === "Select Area and Specialization" ? (
                        <>
                          Select Area
                          <br />
                          and Specialization
                        </>
                      ) : (
                        step
                      )}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 📝 Form Content */}
          {currentStep === 1 && (
            <div className="lg:w-2/3 lg:mx-auto lg:rounded-2xl lg:shadow-lg lg:p-12 lg:bg-white space-y-5 h-full overflow-y-auto">
              {showRequiredMessage && (
                <p className="text-red-500 text-sm">
                  * indicates required field
                </p>
              )}
              <div>
                <label className="block text-[#0A0909] font-bold mb-1 md:text-xl">
                  Enter your name {errors.name && (
                    <span className="text-red-500">*</span>
                  )}
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`border ${errors.name ? 'border-red-500' : 'border-gray-400'} p-2 w-full placeholder-gray-400 text-black rounded-2xl`}
                  placeholder="Ex. Ramesh"
                />
              </div>

              <div>
                <label className="block text-[#0A0909] font-bold mb-1 md:text-xl">
                  Enter your phone number {errors.phone && (
                    <span className="text-red-500">*</span>
                  )}
                </label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`border ${errors.phone ? 'border-red-500' : 'border-gray-400'} p-2 w-full placeholder-gray-400 text-black rounded-2xl`}
                  placeholder="Ex. 9876543210"
                />
              </div>

              <div>
                <label className="block text-[#0A0909] font-bold mt-1 md:text-xl">
                  Enter your email {errors.email && (
                    <span className="text-red-500">*</span>
                  )}
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`border ${errors.email ? 'border-red-500' : 'border-gray-400'} p-2 w-full placeholder-gray-400 text-black rounded-2xl`}
                  placeholder="ramesh@gmail.com"
                />
              </div>

              <div>
                <label className="block text-[#0A0909] font-bold mb-1 md:text-xl">
                  Enter your firm{" "}
                  <span className="text-gray-500 text-sm">(optional)</span>
                </label>
                <input
                  name="firm"
                  value={formData.firm}
                  onChange={handleInputChange}
                  className="border border-gray-400 p-2 w-full placeholder-gray-400 text-black rounded-2xl"
                  placeholder="Ex. Ramesh Builders"
                />
              </div>

              <div className="flex justify-center w-full">
                <button
                  onClick={goNext}
                  className="bg-[#2450A0] text-white px-6 py-2 rounded-full w-full md:w-[40%]"
                >
                  Save and Next
                </button>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="lg:w-2/3 lg:mx-auto lg:border lg:rounded-2xl lg:shadow-lg lg:p-8 lg:bg-white space-y-5">
              <h2 className="text-lg font-bold mb-4">Step 2: Specialty</h2>
              <input
                className="border border-gray-400 p-2 w-full placeholder-gray-400 text-black rounded-2xl"
                placeholder="Specialty"
              />
              <div className="flex justify-between">
                <button
                  onClick={goBack}
                  className="bg-gray-200 px-4 py-2 rounded"
                >
                  Back
                </button>
                <button
                  onClick={goNext}
                  className="bg-[#2D5BE3] text-white px-4 py-2 rounded"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="lg:w-2/3 lg:mx-auto lg:border lg:rounded-2xl lg:shadow-lg lg:p-8 lg:bg-white space-y-5">
              <h2 className="text-lg font-bold mb-4">Step 3: Area Selection</h2>
              <input
                className="border border-gray-400 p-2 w-full placeholder-gray-400 text-black rounded-2xl"
                placeholder="Area"
              />
              <div className="flex justify-between">
                <button
                  onClick={goBack}
                  className="bg-gray-200 px-4 py-2 rounded"
                >
                  Back
                </button>
                <button
                  onClick={goNext}
                  className="bg-[#2D5BE3] text-white px-4 py-2 rounded"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="lg:w-2/3 lg:mx-auto lg:border lg:rounded-2xl lg:shadow-lg lg:p-8 lg:bg-white space-y-5">
              <h2 className="text-lg font-bold mb-4">Step 4: Associations</h2>
              <input
                className="border border-gray-400 p-2 w-full placeholder-gray-400 text-black rounded-2xl"
                placeholder="Association"
              />
              <div className="flex justify-between">
                <button
                  onClick={goBack}
                  className="bg-gray-200 px-4 py-2 rounded"
                >
                  Back
                </button>
                <button className="bg-[#2D5BE3] text-white px-4 py-2 rounded">
                  Finish
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}