"use client";
import Image from "next/image";
import Head from "next/head";
import Header2 from "@/components/Header2";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaCheck } from "react-icons/fa";
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

export default function Page1() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [location, setLocation] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"user" | "broker">("user");
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
    console.log(`Checkbox clicked: name=${name}, checked=${checked}`);
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
      className="relative text-gray-900 bg-gray-50 min-h-screen overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Google Fonts */}
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Bubbles */}
      <div className="relative">
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
      </div>

      {/* Header */}
      <Header2 />

      {/* Mobile Layout */}
      <div className="block lg:hidden px-4 mt-6">
        {/* Tabs */}
        <div className="relative w-full max-w-[360px] mx-auto mt-[270px]">
          <div className="flex justify-between mt-[-50px]">
            <button
              onClick={() => setActiveTab("user")}
              className="w-1/2 text-center pb-2"
            >
              <span
                className={`text-[15px] font-semibold ${
                  activeTab === "user" ? "text-[#2450A0]" : "text-black"
                }`}
              >
                User
              </span>
            </button>
            <button
              onClick={() => setActiveTab("broker")}
              className="w-1/2 text-center pb-2"
            >
              <span
                className={`text-[15px] font-semibold ${
                  activeTab === "broker" ? "text-[#2450A0]" : "text-black"
                }`}
              >
                Broker
              </span>
            </button>
          </div>
          {/* Tab underline */}
          <div className="absolute w-full h-[3px] bg-gray-300 rounded-[8px] top-[38px]" />
          <div
            className="absolute h-[3px] bg-[#2450A0] rounded-[8px] transition-all duration-300"
            style={{
              width: "50%",
              top: "38px",
              left: activeTab === "user" ? "0px" : "50%",
            }}
          />
        </div>

        {/* Mobile Content */}
        {activeTab === "user" && (
          <>
            <div className="mt-[-95px]">
              <h2 className="text-2xl font-bold text-left">Register</h2>
              <p className="text-gray-600 text-left mt-1">Welcome to the app</p>
            </div>
            <div className="mt-[60px]">
              {/* Inputs */}
              <div className="mt-6 space-y-4">
                <div>
                  <label className="block text-md font-semibold text-black mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2450A0]"
                  />
                </div>

                <div>
                  <label className="block text-md font-semibold text-black mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2450A0]"
                  />
                </div>

                <div>
                  <label className="block text-md font-semibold text-black mb-1">
                    Mobile Number / Email
                  </label>
                  <input
                    type="text"
                    placeholder="Mobile Number / Email"
                    className="w-full border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2450A0]"
                  />
                </div>
              </div>

              {/* Login Button */}
              <button className="mt-6 w-full bg-[#2450A0] text-white font-bold py-3 rounded-lg hover:bg-[#1d3f80] transition-colors">
                LOGIN →
              </button>

              {/* OR Divider */}
              <div className="flex items-center justify-center my-6">
                <div className="w-17 h-px bg-gray-500"></div>
                <span className="px-3 text-gray-500 text-sm">OR</span>
                <div className="w-17 h-px bg-gray-500"></div>
              </div>

              {/* Google Login */}
              <Link href="/continue_with_google">
  <button className="w-full flex items-center justify-center border border-gray-300 rounded-2xl py-3 font-semibold hover:bg-gray-50 transition-colors">
    <FcGoogle className="mr-2 text-xl" /> Continue with Google
  </button>
</Link>

              {/* Create Account Link */}
              <p className="text-center mt-6 text-md text-gray-900 font-semibold">
                Don’t have Account?{" "}
                <Link href="#" className="text-[#2450A0] font-semibold">
                  Create New
                </Link>
              </p>
            </div>
          </>
        )}

        {activeTab === "broker" && (
          <div className="mt-[60px]">
            <div
              className="w-[50px] h-[50px] flex items-center justify-center border border-[#E6E6E6] rounded-[12px] bg-white"
              style={{ border: "solid #0000001C", borderRadius: "16px" }}
            >
              <img
                src="/facilities/call.png"
                alt="Call Icon"
                className="w-[29px] h-[29px]"
              />
            </div>
            <h2 className="text-2xl font-extrabold mt-10">Broker Profile</h2>
            <p className="text-sm text-gray-500 mb-6">
              Specializing in connecting buyers, sellers, and investors with the
              right opportunities.
            </p>

            <div className="relative grid grid-cols-4 gap-[40px] mb-6">
              {/* Full gray line */}
              <div className="absolute top-[4px] left-[6px] right-[6px] h-1 bg-gray-300 z-0" />

              {/* Blue progress line */}
              <div
                className="absolute top-[4px] left-[6px] h-1 bg-[#2450A0] z-0 transition-all duration-300"
                style={{
                  width: `${(currentStep / (steps.length - 1)) * 100}%`,
                }}
              />

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
                      className={`text-[11px] font-semibold ${
                        isCompleted || isCurrent
                          ? "text-[#2450A0]"
                          : "text-black"
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
        )}
      </div>

      {/* Desktop Layout */}
      <main
        className="pt-[120px] pb-12 hidden lg:flex justify-center relative z-10"
        style={{ top: "35px" }}
      >
        <div className="w-full max-w-[1090px] px-4 pb-[100px]">
          {/* Tabs */}
          <div className="relative w-full max-w-[360px] mx-auto mt-5">
            <div className="flex justify-between">
              <button
                onClick={() => setActiveTab("user")}
                className="w-[170px] text-center pb-2"
              >
                <span
                  className={`text-[15px] lg:text-[17px] font-semibold ${
                    activeTab === "user" ? "text-[#2450A0]" : "text-black"
                  }`}
                >
                  User
                </span>
              </button>
              <button
                onClick={() => setActiveTab("broker")}
                className="w-[170px] text-center pb-2"
              >
                <span
                  className={`text-[15px] lg:text-[17px] font-semibold ${
                    activeTab === "broker" ? "text-[#2450A0]" : "text-black"
                  }`}
                >
                  Broker
                </span>
              </button>
            </div>

            {/* Tab underline */}
            <div className="absolute w-full h-[3px] bg-gray-400 rounded-[8px] top-[38px]" />
            <div
              className="absolute h-[3px] bg-[#2450A0] rounded-[8px] transition-all duration-300"
              style={{
                width: "189.75px",
                top: "38px",
                left: activeTab === "user" ? "0px" : "170px",
              }}
            />
          </div>

          {/* User Tab Content */}
          {activeTab === "user" && (
            <div className="bg-white mt-8 max-w-lg mx-auto p-8 rounded-2xl shadow-lg">
              <h2 className="text-center text-3xl font-bold">
                Welcome Back, <br />
                <span className="text-[#2450A0] font-extrabold">
                  Signin
                </span>{" "}
                <span className="font-extrabold">to Continue!</span>
              </h2>

              {/* Inputs */}
              <div className="mt-6 space-y-4">
                <div>
                  <label className="block text-md font-semibold text-black mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2450A0]"
                  />
                </div>

                <div>
                  <label className="block text-md font-semibold text-black mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2450A0]"
                  />
                </div>

                <div>
                  <label className="block text-md font-semibold text-black mb-1">
                    Mobile Number / Email
                  </label>
                  <input
                    type="text"
                    placeholder="Mobile Number / Email"
                    className="w-full border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2450A0]"
                  />
                </div>
              </div>

              {/* Login Button */}
              <button className="mt-6 w-full bg-[#2450A0] text-white font-bold py-3 rounded-lg hover:bg-[#1d3f80] transition-colors">
                LOGIN →
              </button>
              {/* OR Divider */}
              <div className="w-full flex justify-center my-6 items-center">
                <div className="w-13 md:w-28 h-px bg-gray-500"></div>
                <span className="px-3 text-gray-500 text-sm">OR</span>
                <div className="w-13 md:w-28 h-px bg-gray-500"></div>
              </div>
              {/* Google Login */}
              <Link href="/continue_with_google">
  <button className="w-full flex items-center justify-center border border-gray-300 rounded-2xl py-3 font-semibold hover:bg-gray-50 transition-colors">
    <FcGoogle className="mr-2 text-xl" /> Continue with Google
  </button>
</Link>
              {/* Create Account Link */}
              <p className="text-center mt-6 text-md text-gray-900 font-semibold">
                Don’t have Account?{" "}
                <Link href="#" className="text-[#2450A0] font-semibold">
                  Create New
                </Link>
              </p>
            </div>
          )}
          {/* Broker Tab Content */}
          {activeTab === "broker" && (
            <div className="max-w-[1388px] mx-0 grid grid-cols-[449px_1fr] mt-8">
              {/* Sidebar Stepper */}
              <div className="relative p-6">
                <ul className="relative ml-[-180px] -mt-3 space-y-8">
                  {/* Connecting line */}
                  <div
                    className="absolute top-0 w-[2px] md:h-[90%] bg-gray-300 z-0"
                    style={{
                      right: "90%",
                      transform: "translateX(-50%)", // Center the line
                    }}
                  />
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
                        {/* Circle */}
                        <div
                          className={`flex items-center justify-center rounded-full overflow-hidden ${
                            isActiveOrCompleted
                              ? "bg-[#f4f5f8]"
                              : "bg-white border-2 border-gray-300 group-hover:border-[#2450A0]"
                          }`}
                          style={{
                            width: "100px",
                            height: "80px",
                            minWidth: "80px",
                            minHeight: "80px",
                          }}
                        >
                          <Image
                            src={`/step-icons/step${i + 1}${
                              isActiveOrCompleted ? "blue" : "gray"
                            }.svg`}
                            alt={`Step ${i + 1}`}
                            width={50}
                            height={50}
                            style={{ objectFit: "contain" }}
                          />
                        </div>

                        {/* Step Label */}
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
                <div className="mt-15 ml-[-170px]">
                  <p className="text-3xl font-extrabold text-black">Welcome,</p>
                  <p className="text-3xl font-extrabold text-[#2450a0]">
                    Signup{" "}
                    <span className="text-black font-medium">to Continue!</span>
                  </p>
                  <p className="text-sm mt-1 text-gray-500">
                    Already Have Account{" "}
                    <a href="#" className="text-[#2450A0] underline">
                      Login here
                    </a>
                  </p>
                </div>
              </div>
              {/* Step Content */}
              <div
                className="bg-white rounded-[35px] shadow-md p-10 ml-[-170px]"
                style={{ width: "1037px" }}
              >
                <p className="text-sm font-medium text-gray-500">
                  Step {currentStep + 1} / {steps.length}
                </p>
                <h2 className="text-3xl font-bold mb-2">Broker Profile</h2>
                <p className="text-sm text-gray-500 mb-6">
                  Specializing in connecting buyers, sellers, and investors with
                  the right opportunities.
                </p>
                {renderStep()}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
