"use client";

import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import Header2 from "@/components/Header2";
import Step1 from "@/components/RentSteps/Rent1";
import Step2 from "@/components/RentSteps/Rent2";
import Step3 from "@/components/RentSteps/Rent3";
import Step4 from "@/components/RentSteps/Rent4";
import Step5 from "@/components/RentSteps/Rent5";

interface FormData {
  location: string;
  propertyType: string;
  propertyName: string;
  bhkType: string;
  commodities: string[];
  price?: string;
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

export default function BrokerProfilePage() {
  const [currentStep, setCurrentStep] = useState(0);

  const [formData, setFormData] = useState<FormData>({
    location: "",
    propertyType: "",
    propertyName: "",
    bhkType: "",
    commodities: [],
    expectedPrice: "",
    expectedDeposit: "",
    rentNegotiable: false,
    monthlyMaintenance: "Maintenance Included",
    availability: "Everyday",
    availableDate: "",
    availableTime: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    location: false,
    propertyType: false,
    propertyName: false,
    bhkType: false,
    commodities: false,
  });

  const steps = [
    "Personal Details",
    "Price Details",
    "Availability",
    "Others",
    "Upload Images",
  ];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name in formErrors) {
      setFormErrors((prev) => ({ ...prev, [name]: false, commodities: false }));
    }
  };

  const handleSelect = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (field in formErrors) {
      setFormErrors((prev) => ({ ...prev, [field]: false }));
    }
  };

  const handleNext = () => {
    if (currentStep === 0) {
      const errors = {
        location: formData.location.trim() === "",
        propertyType: formData.propertyType.trim() === "",
        propertyName: formData.propertyName.trim() === "",
        bhkType: formData.bhkType.trim() === "",
        commodities: false,
      };
      setFormErrors(errors);
      if (Object.values(errors).some((val) => val)) return;
    } else if (currentStep === 1) {
      const errors = {
        ...formErrors,
        commodities: formData.commodities.length === 0,
      };
      setFormErrors(errors);
      if (errors.commodities) return;
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      console.log("Form Submitted:", formData);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <Step1
            formData={formData}
            formErrors={formErrors}
            handleChange={handleChange}
            handleSelect={handleSelect}
            handleNext={handleNext}
          />
        );
      case 1:
        return (
          <Step2
            formData={formData}
            setFormData={setFormData}
            formErrors={formErrors}
            setFormErrors={setFormErrors}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      case 2:
        return (
          <Step3
            formData={formData}
            setFormData={setFormData}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      case 3:
        return (
          <Step4
            formData={formData}
            setFormData={setFormData}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      case 4:
        return (
          <Step5
            formData={formData}
            setFormData={setFormData}
            handleBack={handleBack}
          />
        );
      default:
        return <div className="text-center py-10">Step Coming Soon</div>;
    }
  };
  return (
    <div
      className="relative bg-gray-50 min-h-screen text-gray-900"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <Header2 />
      <div className="block lg:hidden pt-[130px] px-4">
        <div
          className="w-[50px] h-[50px] flex items-center justify-center border border-[#E6E6E6] rounded-[12px] bg-white"
          style={{
            border: "solid #0000001C",
            borderRadius: "16px",
            marginTop: "30px",
          }}
        >
          <img
            src="/facilities/call.png"
            alt="Call Icon"
            className="w-[29px] h-[29px]"
          />
        </div>
        <h2 className="text-2xl font-extrabold mt-10">Rent a Home</h2>
        <p className="text-sm text-gray-500 mb-6">
          Fill out the form with your requirements and we’ll connect you with
          properties that match your needs fast, easy, and reliable.
        </p>

        <div className="relative grid grid-cols-5 gap-[20px] mb-6">
          <div className="absolute top-[4px] left-[6px] right-[6px] h-1 bg-gray-300 z-0" />
          {steps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isCurrent = index === currentStep;
            return (
              <div
                key={index}
                className="relative z-10 flex flex-col items-start"
              >
                {isCompleted ? (
                  <div className="w-5 h-5 rounded-full bg-[#2450A0] text-white flex items-center justify-center mb-1">
                    <FaCheck size={10} />
                  </div>
                ) : (
                  <div
                    className={`rounded-full mb-1 border-4 ${
                      isCurrent
                        ? "w-4 h-4 border-[#2450A0] bg-white"
                        : "w-3 h-3 border-gray-300 bg-gray-300"
                    }`}
                  />
                )}
                <span
                  className={`text-[11px] font-semibold text-center ${
                    isCompleted || isCurrent ? "text-[#2450A0]" : "text-black"
                  }`}
                >
                  {step}
                </span>
              </div>
            );
          })}
        </div>
        {renderStep()}
      </div>

      {/* Desktop View */}
      <main className="hidden lg:block pt-[140px] px-4">
        <div className="max-w-[1388px] mx-auto grid grid-cols-[449px_1fr]">
          {/* Sidebar Stepper */}
          <div className="relative p-6">
            <ul className="relative ml-6 mt-6 space-y-8">
              <div className="absolute left-[33px] top-0 w-[2px] h-full bg-gray-300 z-0" />
              {steps.map((step, i) => {
                const isActiveOrCompleted = i <= currentStep;
                return (
                  <li
                    key={i}
                    className={`flex items-center p-4 rounded-[19px] gap-4 relative z-10 ${
                      isActiveOrCompleted
                        ? "bg-[#2450a0] text-white"
                        : "group transition hover:bg-[#2450A0] hover:text-white cursor-pointer"
                    }`}
                    style={{ width: "250px" }}
                  >
                    <div
                      className={`w-10 h-10 rounded-full ${
                        isActiveOrCompleted
                          ? "bg-[#f4f5f8]"
                          : "bg-white border border-gray-300 group-hover:border-[#2450A0]"
                      } flex items-center justify-center`}
                    >
                      <Image
                        src={`/Rent-step/step${i + 1}${
                          isActiveOrCompleted ? "blue" : "gray"
                        }.svg`}
                        alt={`Step ${i + 1}`}
                        width={24}
                        height={24}
                      />
                    </div>
                    <p
                      className={`font-bold ${
                        isActiveOrCompleted
                          ? "text-white"
                          : "text-[#2a2a2a] group-hover:text-white"
                      }`}
                      style={{ fontSize: "18px" }}
                    >
                      {step}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Step Content */}
          <div
            className="bg-white rounded-[35px] shadow-md p-10 mt-[30px]"
            style={{ width: "1037px" }}
          >
            <p className="text-sm font-medium text-gray-500">
              Step {currentStep + 1} / {steps.length}
            </p>
            <h2 className="text-3xl font-bold mb-2">Rent a Home</h2>
            <p className="text-sm text-gray-500 mb-6">
              Fill out the form with your requirements and we’ll connect you
              with properties that match your needs fast, easy, and reliable.
            </p>

            {renderStep()}
          </div>
        </div>
      </main>
    </div>
  );
}
