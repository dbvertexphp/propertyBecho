"use client";

import { ChangeEvent, useState } from "react";
import Image from "next/image";
import Header2 from "@/components/Header2";
import Step1 from "@/components/BrokerSteps/Broker1";
import Step2 from "@/components/BrokerSteps/Broker2";
import Step3 from "@/components/BrokerSteps/Broker3";
import Step4 from "@/components/BrokerSteps/Broker4";

interface FormData {
  businessType: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  commodities: string[];
  firmName?: string;
  agreedToTerms: boolean;
  areas?: string[];
}

interface FormErrors {
  firstName: boolean;
  lastName: boolean;
  email: boolean;
  phone: boolean;
  commodities: boolean;
  agreedToTerms: boolean;
}

export default function BrokerProfilePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    businessType: "Individual",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    commodities: [],
    firmName: "",
    agreedToTerms: false,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    commodities: false,
    agreedToTerms: false,
  });

  const steps = [
    "Personal Details",
    "Choose Commodity",
    "Select Area and Specialization",
    "Select a Builder",
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name in formErrors) {
      setFormErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
    if (name in formErrors) {
      setFormErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleNext = () => {
    if (currentStep === 0) {
      const errors = {
        firstName: formData.firstName.trim() === "",
        lastName: formData.lastName.trim() === "",
        email: formData.email.trim() === "",
        phone: formData.phone.trim() === "",
        agreedToTerms: !formData.agreedToTerms,
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
      setCurrentStep(currentStep + 1);
    } else {
      window.location.href = "/next-page";
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
            handleCheckbox={handleCheckbox}
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

      <img
        src="/bubble.png"
        alt="Bubble 2"
        className="absolute top-0 right-0 w-[120px] md:w-[190px] z-0 opacity-80"
      />
      <img
        src="/bubble1.png"
        alt="Bubble 1"
        className="absolute top-0 right-0 w-[90px] md:w-[134px] z-10"
      />

      {/* Mobile Stepper */}
      <div className="block lg:hidden pt-[130px] px-4">
        <h2 className="text-2xl font-extrabold mt-10">Broker Profile</h2>
        <p className="text-sm text-gray-500 mb-6">
          Specializing in connecting buyers, sellers, and investors with the
          right opportunities.
        </p>

        <div className="relative grid grid-cols-4 gap-[40px] mb-6">
          <div className="absolute top-[4px] left-[6px] right-[6px] h-1 bg-gray-300 z-0" />
          {steps.map((step, index) => {
            const isCompleted = index <= currentStep;
            return (
              <div
                key={index}
                className="relative z-10 flex flex-col items-start"
              >
                <div
                  className={`rounded-full mb-1 border-4 ${
                    isCompleted
                      ? "w-4 h-4 border-[#2D5BE3] bg-white"
                      : "w-3 h-3 border-gray-300 bg-gray-300"
                  }`}
                />
                <span
                  className={`text-[11px] font-semibold ${
                    isCompleted ? "text-[#2D5BE3]" : "text-gray-400"
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
        <div className="max-w-[1264px] mx-auto grid grid-cols-[449px_1fr]">
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
                        : "group transition hover:bg-[#2450a0] hover:text-white cursor-pointer"
                    }`}
                    style={{ width: "250px" }}
                  >
                    <div
                      className={`w-10 h-10 rounded-full ${
                        isActiveOrCompleted
                          ? "bg-[#f4f5f8]"
                          : "bg-white border border-gray-300 group-hover:border-[#2450a0]"
                      } flex items-center justify-center`}
                      style={{
                        width: i === 2 ? "63px" : i === 3 ? "41px" : "46px",
                      }}
                    >
                      <Image
                        src={`/step-icons/step${i + 1}${
                          isActiveOrCompleted ? "blue" : "gray"
                        }.svg`}
                        alt={`Step ${i + 1}`}
                        width={24}
                        height={24}
                        style={{width:"100px"}}
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
            <div className="mt-20">
              <p className="text-3xl font-extrabold text-black">Welcome,</p>
              <p className="text-3xl font-extrabold text-[#2450a0]">
                Signup{" "}
                <span className="text-black font-medium">to Continue!</span>
              </p>
              <p className="text-sm mt-1 text-gray-500">
                Already Have Account{" "}
                <a href="#" className="text-[#2450a0] underline">
                  Login here
                </a>
              </p>
            </div>
          </div>

          {/* Step Content */}
          <div className="bg-white rounded-[35px] shadow-md p-10 mt-[30px] max-w-[800px] w-full">
            <p className="text-sm font-medium text-gray-500">
              Step {currentStep + 1} / {steps.length}
            </p>
            <h2 className="text-3xl font-bold mb-2">Broker Profile</h2>
            <p className="text-sm text-gray-500 mb-6">
              Specializing in connecting buyers, sellers, and investors with the
              right opportunities.
            </p>

            {renderStep()}
          </div>
        </div>
      </main>
    </div>
  );
}