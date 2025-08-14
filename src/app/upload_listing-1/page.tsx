"use client";

import { useState } from "react";
import Header2 from "@/components/Header2";

export default function Uploadlisting() {
  const [showMoreImages, setShowMoreImages] = useState(false);

  const baseImages = ["img1", "img2", "img3", "img4", "img5", "img1", "img2", "img3"];
  const extraImages = ["img4", "img5", "img2","img3","img5","img2"];
  const overlayImage = "img6";

  return (
    <div
      className="relative text-gray-900 bg-gray-50 min-h-screen overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Decorative Bubbles */}
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

      <main
         className="pt-[120px] pb-12 flex justify-center relative z-10" style={{ top: "35px" }}>
      
        <div className="w-full px-4 md:w-[87%] mx-auto">
          {/* Icon + Title */}
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

          <h2
            className="text-2xl font-[700] text-black"
            style={{ marginTop: "33px" }}
          >
            Upload Listing
          </h2>

          <p className="text-sm text-gray-500 mt-3">
            Fill out the form with your requirements and we’ll connect you with
            properties that match your needs fast, easy, and reliable.
          </p>

          {/* Upload Images Section */}
          <div style={{ marginTop: "20px" }}>
            <label
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#0A0909",
                display: "block",
                marginBottom: "10px",
              }}
            >
              Upload Images <span style={{ color: "#fc0000ff" }}>*</span>
            </label>

            {/* Image Grid */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3" style={{ maxWidth: "100%" }}>
              {baseImages.map((img, index) => (
                <img
                  key={index}
                  src={`/upload_listing/${img}.png`}
                  alt={img}
                  className="w-[120%] sm:w-full h-[120px] sm:h-[180px] rounded-[10px] object-cover"
                />
              ))}

              {/* Overlay or last image */}
              {!showMoreImages ? (
                <div
                  style={{ position: "relative", cursor: "pointer" }}
                  onClick={() => setShowMoreImages(true)}
                >
                  <img
                    src={`/upload_listing/${overlayImage}.png`}
                    alt="img6"
                    className="w-[120%] sm:w-full h-[120px] sm:h-[180px] rounded-[10px] object-cover"
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "10px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        color: "#FFFFFF",
                      }}
                    >
                      +9 more
                    </span>
                  </div>
                </div>
              ) : (
                <img
                  src={`/upload_listing/${overlayImage}.png`}
                  alt="img6"
                  className="w-[120%] sm:w-full h-[120px] sm:h-[180px] rounded-[10px] object-cover"
                />
              )}

              {/* Extra Images (after click) */}
              {showMoreImages &&
                extraImages.map((img, index) => (
                  <img
                    key={index}
                    src={`/upload_listing/${img}.png`}
                    alt={img}
                    className="w-[120%] sm:w-full h-[120px] sm:h-[180px] rounded-[10px] object-cover"
                  />
                ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col mt-6 gap-3">
              <label htmlFor="uploadImages">
                <div
                  className="w-full py-3 text-center cursor-pointer"
                  style={{
                    borderRadius: "52px",
                    border: "solid #2450A0 1px",
                  }}
                >
                  <span
                    style={{
                      color: "#2450A0",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    UPLOAD MORE IMAGES
                  </span>
                  <input
                    type="file"
                    id="uploadImages"
                    multiple
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={(e) => {
                      const files = e.target.files;
                      console.log("Selected files:", files);
                    }}
                  />
                </div>
              </label>

              <button
                className="w-full py-3"
                style={{
                  borderRadius: "52px",
                  border: "solid #12182833 1px",
                  backgroundColor: "#1218280D",
                  marginTop: "25px",
                }}
              >
                <span style={{ fontSize: "14px", fontWeight: "500" }}>
                  SKIP AND LISTING
                </span>
              </button>
              <button
                className="w-full py-3"
                style={{
                  borderRadius: "52px",
                  border: "solid #2450A0 1px",
                  backgroundColor: "#2450A0",
                }}
              >
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#FFFFFF",
                  }}
                >
                  VERIFY YOUR LISTING
                </span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
