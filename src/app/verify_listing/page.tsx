"use client";

import { useState, ChangeEvent, useRef, useEffect } from "react";
import Header2 from "@/components/Header2";
import Image from "next/image";

const documents = [
  "Registered Sale Deed / Conveyance Deed",
  "Allotment Letter (Builder / Authority)",
  "Builder Buyer Agreement (BBA)",
  "Possession Letter",
  "Agreement to Sell",
  "Electricity Bill",
  "Water Bill / Municipal Water Receipt",
  "Gas Bill",
  "Property Tax Receipt",
  "Mutation Certificate / Khata / Jamabandi",
  "Occupancy Certificate (OC)",
  "Completion Certificate (CC)",
  "Gift Deed",
  "Inheritance Document / Will (Probated)",
  "Registered Power of Attorney (PoA)",
  "RWA or Builder Possession Letter",
  "No Objection Certificate (NOC)",
];

export default function UploadListing() {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [selected, setSelected] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [showImg1, setShowImg1] = useState(false);

  const displayedImages = [
    "/upload_listing/img4.png",
    "/upload_listing/img5.png",
    "/upload_listing/img4.png",
    "/upload_listing/img6.png",
  ];

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle document upload safely
  const handleDocumentUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setUploadedFiles(Array.from(files));
    }
  };

  // Handle image upload safely
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setSelectedImages((prev) => [...prev, ...Array.from(files)]);
    }
  };

  return (
    <div className="relative text-gray-900 bg-gray-50 min-h-screen overflow-hidden font-poppins">
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Background bubbles */}
      <div className="relative">
        <img
          src="/bubble.png"
          alt="Bubble"
          className="absolute top-0 right-0 w-[120px] md:w-[190px] z-0 opacity-80"
        />
        <img
          src="/bubble1.png"
          alt="Bubble"
          className="absolute top-0 right-0 w-[90px] md:w-[134px] z-10"
        />
      </div>

      <Header2 />

      <main className="pt-[120px] pb-12 flex justify-center relative z-10" style={{ top: "35px" }}>
        <div className="w-full px-4 mx-auto" style={{ maxWidth: "87%" }}>
          {/* Header Icon */}
          <div className="md:hidden w-[50px] h-[50px] flex items-center justify-center bg-white border border-[#E6E6E6] rounded-[16px]">
            <img src="/facilities/call.png" alt="Call Icon" className="w-[29px] h-[29px]" />
          </div>

          <h2 className="text-2xl font-bold text-black mt-8" style={{ fontWeight: "800" }}>
            Verify Listing
          </h2>
          <p className="text-sm text-gray-500 mt-3">
            Fill out the form with your requirements and we’ll connect you with properties that match
            your needs fast, easy, and reliable.
          </p>

          {/* DigiLocker Button */}
          <div className="flex flex-col items-center justify-center p-4">
            <button
              className="flex items-center justify-between px-6 py-4 rounded-lg text-white font-semibold w-full max-w-[500px]"
              style={{ backgroundColor: "#2450A0" }}
            >
              <div className="flex items-center gap-2">
                <img
                  src="/upload_listing/digilocker.png"
                  alt="digilocker"
                  style={{ width: "20px", height: "20px" }}
                />
                <span style={{ fontSize: "18px", fontWeight: "500", color: "#FFFFFF" }}>
                  Verify with DigiLocker
                </span>
              </div>
              <span style={{ fontSize: "18px" }}>
                <img src="/upload_listing/shape.png" alt="" />
              </span>
            </button>

            <div className="flex items-center justify-center my-4 w-full">
              <hr className="flex-grow border-gray-300" />
              <span className="px-3 text-gray-500 text-sm">OR</span>
              <hr className="flex-grow border-gray-300" />
            </div>
          </div>

          {/* Document Dropdown */}
           <div
  className="mb-4 relative"
  ref={wrapperRef}
  style={{ borderRadius: "16px" }}
>
  <label className="text-sm font-semibold block mb-2 text-black">
    <span
      style={{
        fontSize: "16px",
        fontWeight: "700",
        color: "#0A0909",
      }}
    >
      Select Your Document
    </span>{" "}
    <span className="text-red-500">*</span>
  </label>

  {/* Select box */}
  <div
    onClick={() => setIsOpen(!isOpen)}
    className="relative border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-600 cursor-pointer bg-white"
    style={{ borderRadius: "16px" }}
  >
    {selected || "Select document"}

    {/* Icon */}
    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
      <Image
        src={
          isOpen
            ? "/upload_listing/button1.png"
            : "/upload_listing/arrow_down.png"
        }
        alt="Dropdown Icon"
        width={25}
        height={20}
      />
    </div>
  </div>

  {/* Dropdown list */}
  {isOpen && (
    <ul
      className="absolute z-10 mt-2 max-h-60 w-full overflow-y-scroll bg-white border border-gray-300 rounded-lg shadow-md text-sm"
      style={{
        WebkitOverflowScrolling: "touch",
        overflowY: "scroll",
        scrollbarWidth: "thin", // for Firefox
        scrollbarColor: "#2450A0 #0A090926", // for Firefox
      }}
    >
      <style jsx>{`
        ul::-webkit-scrollbar {
          width: 8px;
          height: 3px;
        }

        ul::-webkit-scrollbar-track {
          background: #0a090926;
          border-radius: 8px;
        }

        ul::-webkit-scrollbar-thumb {
          background-color: #2450a0;
          border-radius: 8px;
        }
      `}</style>

      {documents.map((doc, index) => (
        <li
          key={index}
          onClick={() => {
            setSelected(doc);
            setIsOpen(false);
          }}
          className="px-4 py-2 cursor-pointer transition-all duration-200"
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#E7ECF5";
            const span = e.currentTarget.querySelector("span");
            if (span) span.style.color = "#2450A0";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            const span = e.currentTarget.querySelector("span");
            if (span) span.style.color = "#6e7381";
          }}
        >
          <span
            style={{
              fontSize: "15px",
              fontWeight: "700",
              color: "#6e7381",
            }}
          >
            {doc}
          </span>
        </li>
      ))}
    </ul>
  )}
</div>


          {/* Upload Document */}
          <div className="mb-6 w-full">
            <label className="text-sm font-semibold text-black block mb-2">
              <span style={{ fontSize: "16px", fontWeight: "700", color: "#0A0909" }}>
                Upload the Document
              </span>{" "}
              <span className="text-red-500">*</span>
            </label>

            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden px-4 py-2 bg-white w-full">
              <span className="text-sm text-gray-400 flex-1">Upload the document</span>

              <label
                htmlFor="staticUpload"
                className="flex items-center bg-[#2450A0] text-white text-sm font-semibold px-4 py-1.5 rounded-full cursor-pointer hover:bg-[#1f3f81] transition-colors"
              >
                Upload &nbsp;
                <img src="/upload_listing/upload.png" alt="" />
              </label>

              <input
                type="file"
                id="staticUpload"
                accept=".pdf,image/*"
                className="hidden"
                onChange={handleDocumentUpload}
              />
            </div>
          </div>

          {/* Upload Images Section */}
          <div>
            <label className="text-sm font-semibold text-black block mb-2">
              <span style={{ fontSize: "16px", fontWeight: "700", color: "#0A0909" }}>
                Upload Images
              </span>{" "}
              <span className="text-red-500">*</span>
            </label>

            <div className="grid grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 relative">
              {displayedImages.map((img, index) => (
                <div key={index} className="relative">
                  <img
                    src={img}
                    className="w-full rounded-lg object-cover h-40"
                    alt={`Preview ${index}`}
                  />
                  {index === 3 && !showImg1 && (
                    <div
                      onClick={() => setShowImg1(true)}
                      className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold cursor-pointer rounded-lg"
                      style={{
                        background: "rgba(0,0,0,0.4)",
                        textShadow: "0 1px 3px rgba(0,0,0,0.8)",
                      }}
                    >
                      +9 more
                    </div>
                  )}
                </div>
              ))}
            </div>

            {showImg1 && (
              <div className="grid grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 mt-4">
                {Array.from({ length: 8 }).map((_, idx) => (
                  <img
                    key={idx}
                    src="/upload_listing/img1.png"
                    alt={`Opened Image ${idx}`}
                    className="w-full rounded-lg object-cover h-40"
                  />
                ))}
              </div>
            )}

            {selectedImages.length > 0 && (
              <div className="grid grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 mt-4">
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

            <div className="mt-4 flex justify-center">
              <label htmlFor="uploadImages" className="w-full sm:w-[30%]">
                <div
                  className="w-full py-3 text-center cursor-pointer"
                  style={{ borderRadius: "52px", border: "solid #2450A0 1px" }}
                >
                  <span className="text-[#2450A0] font-semibold text-sm sm:text-base">
                    UPLOAD MORE IMAGES
                  </span>
                  <input
                    type="file"
                    id="uploadImages"
                    multiple
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </div>
              </label>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-[#E7ECF5] text-[#2450A0] text-sm rounded-xl px-4 py-3 flex items-start space-x-2 mb-4 mt-16 w-full sm:w-[50%] mx-auto">
            <img src="/upload_listing/info.png" alt="" />
            <p>
              <span style={{ fontSize: "12px", fontWeight: "600" }}>Once verified, your listing will get a green</span>{" "}
              <span style={{ fontSize: "12px", fontWeight: "600" }}>‘Verified’</span> tag.
            </p>
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex justify-center">
         <button
  className="w-full sm:w-[30%] py-3 text-white font-medium text-sm rounded-full transition-all duration-200 bg-[#2450A0] hover:bg-[#1d3663]"
>
  SUBMIT
</button>


          </div>
        </div>
      </main>
    </div>
  );
}