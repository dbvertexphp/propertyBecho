"use client";

import { useState, ChangeEvent } from "react";
import Header2 from "@/components/Header2";

export default function UploadListing() {
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const [selectedImages, setSelectedImages] = useState<File[]>([]);
    const [showAll, setShowAll] = useState<boolean>(false);

    const TOTAL_IMAGES = 12;
    const dummyImages = Array.from({ length: TOTAL_IMAGES }, () => "/upload_listing/img1.png");

    const steps = [
        { title: "Property Details" },
        { title: "Price Details" },
        { title: "Availability" },
        { title: "Others" },
        { title: "Upload Images" },
    ];
    const activeStep = 4; // Index starts from 0, so 4 = "Upload Images"

    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const filesArray = Array.from(e.target.files);
            setSelectedImages((prev) => [...prev, ...filesArray]);
        }
    };

    return (
        <div className="relative text-gray-900 bg-gray-50 min-h-screen overflow-hidden font-poppins">
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
                rel="stylesheet"
            />

            {/* Background */}
            <div className="relative">
                <img src="/bubble.png" alt="Bubble" className="absolute top-0 right-0 w-[120px] md:w-[190px] opacity-80" />
                <img src="/bubble1.png" alt="Bubble" className="absolute top-0 right-0 w-[90px] md:w-[134px]" />
            </div>

            <Header2 />

            <main className="pt-[120px] pb-12 flex justify-center relative z-10" style={{ top: "35px" }}>
                <div className="w-full px-4" style={{ maxWidth: "1000px" }}>
                    
                    {/* Page Heading */}
                    <h2 className="text-[24px] font-[700] text-[#000000] mt-[33px]">Rent a Home</h2>
                    <p className="text-[14px] text-[#666666] mt-3">
                        Fill out the form with your requirements and we’ll connect you
                        with properties that match your needs fast, easy, and reliable.
                    </p>

                    {/* Stepper */}
                    <div className="flex flex-wrap justify-center gap-3 md:flex-nowrap mt-12 ">
                        {steps.map((step, index) => (
                            <div key={index} className="flex-1 flex flex-col items-center relative">
                                {/* Circle */}
                                <div
                                    className={`w-5 h-5 flex items-center justify-center border-2 rounded-full
                                        ${index === activeStep ? "border-[#2450A0]" : "border-[#2450A0]"}
                                        ${index === activeStep ? "bg-white" : "bg-gray-100"}
                                    `}
                                >
                                    {index === activeStep && <div className="w-2 h-2 bg-[#2450A0] rounded-full"></div>}
                                </div>

                                {/* Label */}
                                <span
                                    className={`mt-2 text-[12px] ${
                                        index === activeStep ? "text-[#2450A0] font-semibold" : "text-gray-500"
                                    }`}
                                >
                                    {step.title}
                                </span>

                                {/* Line */}
                                {index < steps.length - 1 && (
                                    <div
                                        className={`absolute top-2 left-1/2 w-full h-[2px] -z-10 ${
                                            index < activeStep ? "bg-[#2450A0]" : "bg-gray-300"
                                        }`}
                                    ></div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Upload Images Section */}
                    <div className="mt-6">
                        <label className="text-[16px] font-semibold text-[#0A0909] block mb-2">
                            Upload Images <span className="text-red-500">*</span>
                        </label>

                        {/* Preview */}
                        <div className="grid grid-cols-3 gap-2 sm:gap-3 relative">
                            {dummyImages.slice(0, 3).map((img, index) => (
                                <div key={index} className="relative">
                                    <img src={img} className="w-full rounded-lg object-cover" />
                                    {index === 2 && !showAll && (
                                        <div
                                            onClick={() => setShowAll(true)}
                                            className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-lg font-semibold cursor-pointer rounded-lg"
                                        >
                                            +{TOTAL_IMAGES - 3} more
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {showAll && (
                            <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-4">
                                {dummyImages.slice(3).map((img, index) => (
                                    <img key={index + 3} src={img} className="w-full rounded-lg object-cover" />
                                ))}
                            </div>
                        )}

                        {selectedImages.length > 0 && (
                            <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-4">
                                {selectedImages.map((file, index) => (
                                    <img
                                        key={index}
                                        src={URL.createObjectURL(file)}
                                        alt={`upload-${index}`}
                                        className="w-full rounded-lg object-cover"
                                    />
                                ))}
                            </div>
                        )}

                        {/* Upload Button */}
                        <div className="mt-4">
                            <label htmlFor="uploadImages">
                                <div className="w-full py-3 text-center cursor-pointer border border-[#2450A0] rounded-full">
                                    <span className="text-[#2450A0] text-[14px] font-semibold">UPLOAD MORE IMAGES</span>
                                    <input
                                        type="file"
                                        id="uploadImages"
                                        multiple
                                        accept="image/*"
                                        style={{ display: "none" }}
                                        onChange={handleImageUpload}
                                    />
                                </div>
                            </label>
                        </div>
                    </div>

                    {/* Submit */}
                    <div className="mt-6">
                        <button
                            className="w-full py-3 rounded-full"
                            style={{ backgroundColor: "#2450A0" }}
                        >
                            <span className="text-[14px] font-medium text-white">SUBMIT</span>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}

