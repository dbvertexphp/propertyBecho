"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import Header2 from "@/components/Header2";
import Footer from "@/components/Footer";
import NavigationButtons from "@/components/NavigationButtons";
import { FaChevronDown, FaChevronUp, FaCheckCircle } from "react-icons/fa";

// Interfaces
interface MapMarker {
  id: number;
  position: [number, number];
  title: string;
  price: string;
}

interface MapsProps {
  center: [number, number];
  markers: MapMarker[];
}

interface PropertyData {
  id: number;
  lat: number;
  lng: number;
  bhk: number;
  address: string;
  price: string;
  imageUrl: string;
}

// Data for sections (Facts and Features)
const sections = [
  {
    title: "Interior",
    cards: [
      { title: "Bedrooms & bathrooms", items: ["Bedrooms: 2", "Bathrooms: 1", "Full bathrooms: 1"] },
      { title: "Kitchen & Dining", items: ["Kitchen: 1", "Dining area: 1"] },
      { title: "Amenities", items: ["Pool: Yes", "Gym: Yes", "Parking: 2 cars"] },
    ],
  },
  {
    title: "Construction",
    cards: [
      { title: "Foundation", items: ["Concrete", "Steel Rods"] },
      { title: "Walls", items: ["Bricks", "Plaster"] },
    ],
  },
  {
    title: "Property",
    cards: [
      { title: "Plot", items: ["Area: 2000 sq ft", "Fencing"] },
      { title: "Garden", items: ["Plants", "Water Fountain"] },
    ],
  },
];

// Data for Previous Places carousel
const cardData = [
  {
    price: "$280,000",
    owner: "By Owner",
    type: "2 BHK",
    bath: "2 BA",
    area: "24 sqft",
    address: "1030 Spruce St, Aurora, IL, 60506",
    image: "/Card media container.png",
  },
  {
    price: "$450,000",
    owner: "By Agent",
    type: "3 BHK",
    bath: "3 BA",
    area: "36 sqft",
    address: "221B Baker Street, London, UK",
    image: "/Card media.png",
  },
  {
    price: "$320,000",
    owner: "By Owner",
    type: "1 BHK",
    bath: "1 BA",
    area: "18 sqft",
    address: "5th Ave, New York, NY 10011",
    image: "/Card media.png",
  },
  {
    price: "$600,000",
    owner: "By Agent",
    type: "4 BHK",
    bath: "4 BA",
    area: "48 sqft",
    address: "90210 Beverly Hills, CA",
    image: "/Card media.png",
  },
  {
    price: "$280,000",
    owner: "By Owner",
    type: "2 BHK",
    bath: "2 BA",
    area: "24 sqft",
    address: "1030 Spruce St, Aurora, IL, 60506",
    image: "/Card media container.png",
  },
  {
    price: "$450,000",
    owner: "By Agent",
    type: "3 BHK",
    bath: "3 BA",
    area: "36 sqft",
    address: "221B Baker Street, London, UK",
    image: "/Card media.png",
  },
  {
    price: "$320,000",
    owner: "By Owner",
    type: "1 BHK",
    bath: "1 BA",
    area: "18 sqft",
    address: "5th Ave, New York, NY 10011",
    image: "/Card media.png",
  },
  {
    price: "$600,000",
    owner: "By Agent",
    type: "4 BHK",
    bath: "4 BA",
    area: "48 sqft",
    address: "90210 Beverly Hills, CA",
    image: "/Card media.png",
  },
];

// AccordionCard Component
const AccordionCard = ({ title, items }: { title: string; items: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow p-4 mb-4 w-full transition-all duration-300 ease-in-out">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${title}`}
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setIsOpen(!isOpen)}
      >
        <h3 className="font-semibold text-black">{title}</h3>
        {isOpen ? <FaChevronUp aria-label="Collapse" /> : <FaChevronDown aria-label="Expand" />}
      </div>
      <div
        id={`accordion-content-${title}`}
        className={`mt-3 grid grid-cols-1 md:grid-cols-2 gap-2 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-1 text-sm"
          >
            <FaCheckCircle className="text-green-600" aria-hidden="true" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Details Component
export default function Details() {
  // Dynamically import Maps with loading state
  const Maps = dynamic(() => import("@/components/Map2"), {
    ssr: false,
    loading: () => <div className="h-[400px] bg-gray-200 animate-pulse rounded-2xl">Loading map...</div>,
  });

  const [sortedData, setSortedData] = useState<PropertyData[]>([
    {
      id: 1,
      lat: 41.7606,
      lng: -88.3201,
      bhk: 2,
      address: "1030 Spruce St, Aurora, IL 60506",
      price: "$280,000",
      imageUrl: "/details/1.png",
    },
    {
      id: 2,
      lat: 41.7706,
      lng: -88.3301,
      bhk: 3,
      address: "12 Oakwood Ave, Aurora, IL 60506",
      price: "$350,000",
      imageUrl: "/details/2.png",
    },
  ]);

  const allImages = [
    "/details/1.png",
    "/details/2.png",
    "/details/3.png",
    "/details/4.png",
    "/details/5.png",
    "/details/6.png",
    "/details/7.png",
    "/details/8.png",
    "/details/9.png",
    "/details/10.png",
    "/details/11.png",
    "/details/12.png",
    "/details/13.png",
    "/details/14.png",
    "/details/15.png",
    "/details/16.png",
  ];

  const [bannerImage, setBannerImage] = useState("/details/banner.png");
  const [showModal, setShowModal] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [openFactsAndFeatures, setOpenFactsAndFeatures] = useState(false);
  const [openSections, setOpenSections] = useState<boolean[]>(sections.map(() => false));
  const [likedStates, setLikedStates] = useState<boolean[]>(cardData.map(() => false));
  const [currentIndexPrevious, setCurrentIndexPrevious] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const cardsPerPage = 4;
  const totalOriginal = cardData.length;
  const extendedCardData = [...cardData, ...cardData.slice(0, cardsPerPage)];

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Toggle individual section (only one open at a time)
  const toggleSection = (index: number) => {
    setOpenSections((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : false))
    );
  };

  // Toggle like for Previous Places carousel
  const toggleLike = (index: number) => {
    console.log(`Toggling like for index: ${index}`); // Debug log
    const updatedLikes = [...likedStates];
    updatedLikes[index % totalOriginal] = !updatedLikes[index % totalOriginal];
    setLikedStates(updatedLikes);
  };

  // Carousel navigation for Previous Places
  const handleNextPrevious = () => {
    console.log(`Next: currentIndexPrevious = ${currentIndexPrevious}`); // Debug log
    setIsTransitioning(true);
    setCurrentIndexPrevious((prevIndex) => {
      const newIndex = prevIndex + cardsPerPage;
      if (newIndex >= totalOriginal) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndexPrevious(0);
        }, 500); // Match the transition duration
      }
      return newIndex;
    });
  };

  const handlePrevPrevious = () => {
    console.log(`Prev: currentIndexPrevious = ${currentIndexPrevious}`); // Debug log
    setIsTransitioning(true);
    setCurrentIndexPrevious((prevIndex) => {
      const newIndex = prevIndex - cardsPerPage;
      if (newIndex < 0) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndexPrevious(totalOriginal - cardsPerPage);
        }, 500); // Match the transition duration
      }
      return newIndex;
    });
  };

  return (
    <div>
      <Header2 />

      {/* Banner */}
      <div className="relative mx-auto md:mt-1 mt-[150px] md:w-[99%] w-[95%] md:h-[95vh] h-[55vh] rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
        <Image
          src={bannerImage}
          alt="Property banner"
          fill
          className="object-cover"
          style={{ objectFit: "cover" }}
          priority
        />
        <div
          className="absolute top-5 left-0 bg-[#2BAD4A] text-white md:mt-[130px] font-semibold md:px-6 md:py-2 py-1 px-4 
            rounded-tr-full rounded-br-full rounded-tl-lg rounded-bl-lg shadow-md z-20 border-t-2 border-r-2 border-b-2 border-white"
        >
          For sale by owner
        </div>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-30">
          <Image
            src="/details/scroll.svg"
            alt="Scroll indicator"
            width={90}
            height={90}
            className="drop-shadow-lg"
          />
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-4 md:grid-cols-6 gap-1 w-[89%] mx-auto mt-4">
        {allImages.slice(0, isDesktop ? 6 : 4).map((img, idx) => {
          const isLast = isDesktop ? idx === 5 : idx === 3;
          const roundedClass =
            idx % 2 === 0
              ? "rounded-bl-[40px] rounded-tr-[40px] rounded-tl-[40px]"
              : "rounded-br-[40px] rounded-bl-[40px] rounded-tl-[40px]";

          return (
            <div
              key={idx}
              className={`relative cursor-pointer border-4 border-white shadow-2xl ${roundedClass}`}
              onClick={() => {
                if (isLast) {
                  setShowModal(true);
                } else {
                  setBannerImage(img);
                }
              }}
              role="button"
              aria-label={isLast ? "View all images" : `Select image ${idx + 1}`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                width={250}
                height={200}
                className={`w-full h-[100px] md:h-[200px] object-cover ${roundedClass}`}
              />
              {isLast && (
                <div
                  className={`absolute inset-0 bg-black/60 flex items-center justify-center text-white font-extrabold text-2xl ${roundedClass}`}
                >
                  {isDesktop ? "10+" : "12+"}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Modal for All Images */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white p-4 rounded-lg grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl w-full">
            {allImages.map((img, idx) => (
              <div
                key={idx}
                className="cursor-pointer border-4 border-white shadow-2xl rounded-lg"
                onClick={() => {
                  setBannerImage(img);
                  setShowModal(false);
                }}
                role="button"
                aria-label={`Select image ${idx + 1}`}
              >
                <Image
                  src={img}
                  alt={`Image ${idx + 1}`}
                  width={250}
                  height={200}
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
          <button
            className="absolute top-5 right-5 text-white text-2xl"
            onClick={() => setShowModal(false)}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>
      )}

      {/* Card and Map Layout */}
      <div className="w-[90%] mx-auto mt-9 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left side (Card + Owner) */}
        <div className="flex flex-col justify-between">
          {/* Property Card */}
          <div className="p-4 bg-white rounded-2xl shadow-lg relative flex-1 lg:max-h-[190px]">
            <span className="absolute top-4 left-4 text-2xl font-extrabold text-[#2450A0]">
              $280,000
            </span>
            <div className="absolute top-4 right-4 flex space-x-2 text-gray-600">
              <div className="flex items-center space-x-1 bg-gray-100 border border-gray-300 rounded-2xl px-2 py-1">
                <img src="/details/heart.svg" alt="Likes" className="w-5 h-5" />
                <span className="text-sm text-gray-700 font-medium">25k</span>
              </div>
              <div className="flex items-center space-x-1 bg-gray-100 border border-gray-300 rounded-2xl px-2 py-1">
                <img
                  src="/details/share-08.svg"
                  alt="Share"
                  className="w-5 h-5 cursor-pointer"
                />
              </div>
              <div className="flex items-center space-x-1 bg-gray-100 border border-gray-300 rounded-2xl px-2 py-1">
                <img
                  src="/details/warning-2.svg"
                  alt="Info"
                  className="w-5 h-5 cursor-pointer"
                />
              </div>
            </div>
            <div className="flex space-x-3 text-sm mt-10">
              <div className="flex items-center space-x-1 bg-gray-100 border border-gray-300 rounded-xl px-2 py-1 mt-3">
                <img src="/details/Bed icon.svg" alt="Bed" className="w-4 h-4" />
                <span className="text-gray-700 font-bold text-sm">
                  <span className="text-[#2450A0] font-extrabold">2</span> BHK
                </span>
              </div>
              <div className="flex items-center space-x-1 bg-gray-100 border border-gray-300 rounded-xl px-2 py-1 mt-3">
                <img
                  src="/details/bathtub-01.svg"
                  alt="Bath"
                  className="w-4 h-4"
                />
                <span className="text-gray-700 font-bold text-sm">
                  <span className="text-[#2450A0] font-extrabold">2</span> BA
                </span>
              </div>
              <div className="flex items-center space-x-1 bg-gray-100 border border-gray-300 rounded-xl px-2 py-1 mt-3">
                <img src="/details/ruler.svg" alt="Area" className="w-4 h-4" />
                <span className="text-gray-700 font-bold text-sm">
                  <span className="text-[#2450A0] font-extrabold">24</span> sqft
                </span>
              </div>
            </div>
            <div className="mt-5 w-full flex items-center space-x-2 text-sm text-gray-700 border border-gray-300 rounded-full px-3 py-2 bg-gray-50">
              <img src="/details/location.svg" alt="Location" className="w-5 h-5" />
              <span>1030 Spruce St, Aurora, IL 60506</span>
            </div>
          </div>

          {/* Owner Heading */}
          <div className="mt-4 p-4 text-2xl md:text-3xl font-extrabold text-black flex-0">
            Owned <span className="text-[#2450A0]">by</span>
          </div>

          {/* Owner Card */}
          <div className="p-4 bg-white shadow-lg rounded-2xl w-full md:w-96 mx-auto flex flex-col">
            <div className="flex w-full items-center space-x-4">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200 shadow-lg flex-shrink-0">
                <img
                  src="/details/owner.jpg"
                  alt="Owner profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col space-y-2 flex-1">
                <div className="flex items-center space-x-2 bg-gray-100 rounded-xl px-3 py-1">
                  <img src="/details/call-calling.svg" alt="Phone" className="w-5 h-5" />
                  <span className="text-gray-700 text-sm">+91 9292989798</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-100 rounded-xl px-3 py-1">
                  <img src="/details/sms-tracking.svg" alt="Email" className="w-5 h-5" />
                  <span className="text-gray-700 text-sm">shop@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between w-full">
              <div className="flex flex-col">
                <h2 className="text-xl font-bold text-black">Josef Jorden</h2>
                <p className="text-gray-500 text-sm flex items-center space-x-1">
                  <img src="/details/location.svg" alt="Location" className="w-4 h-4" />
                  <span className="text-base font-medium">Aurora, IL</span>
                </p>
              </div>
              <button className="bg-[#2450A0] text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition">
                SEE PROFILE
              </button>
            </div>
          </div>
        </div>

        {/* Right side (Map) */}
        <div className="lg:col-span-2">
          <Maps
            center={[41.7606, -88.3201]}
            markers={sortedData.map((item) => ({
              id: item.id,
              position: [item.lat, item.lng] as [number, number],
              title: item.address,
              price: item.price,
            }))}
          />
        </div>
      </div>

      {/* Main Features and Apartment Sections */}
      <div className="w-[90%] mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Features Section */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-extrabold mb-6">
            <span className="text-[#2450A0]">Main </span>
            <span className="text-black">features</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[
              "Single Family Residence",
              "Built in 1929",
              "7,500 Square Feet Lot",
              "$273,400 Zestimate",
              "$343 / square ft",
              "$255 HOA",
            ].map((feature, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center bg-[#C4D9FF80] rounded-2xl px-3 py-3 relative h-[90px]"
              >
                <span className="md:text-lg text-base text-black font-medium max-w-[70%]">
                  {feature}
                </span>
                <div className="flex items-center relative">
                  <div className="absolute left-0 w-2.5 md:h-16 h-[100px] bg-white rotate-12"></div>
                  <div className="w-9 h-9 rounded flex items-center justify-center ml-4">
                    <img
                      src="/details/Features.svg"
                      alt="Feature icon"
                      className="w-8 h-8"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Apartment Section */}
        <div className="lg:col-span-1">
          <div className="text-2xl md:text-3xl font-extrabold text-black md:pl-4">
            Apartment
          </div>
          <div className="p-4 bg-white shadow-lg rounded-2xl w-full md:w-96 mx-auto flex flex-col">
            <div className="flex w-full items-center space-x-4">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200 shadow-lg flex-shrink-0">
                <img
                  src="/details/building.png"
                  alt="Apartment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col space-y-2 flex-1">
                <div className="flex flex-col">
                  <h2 className="text-xl font-bold text-black">Ilahi Apartment</h2>
                  <p className="text-gray-500 text-sm flex items-center space-x-1">
                    <img src="/details/location.svg" alt="Location" className="w-4 h-4" />
                    <span className="text-base font-medium">Aurora, IL</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-start space-x-3">
              <div className="flex flex-col items-center bg-gray-100 border border-gray-300 rounded-2xl px-4 py-3 w-20">
                <img src="/details/Bed icon.svg" alt="Bed" className="w-6 h-6 mb-2" />
                <div className="flex flex-row items-center mb-1">
                  <span className="text-[#2450A0] font-extrabold text-lg mr-1">2</span>
                  <span className="text-gray-700 text-base font-semibold">
                    BHK
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center bg-gray-100 border border-gray-300 rounded-2xl px-4 py-3 w-20">
                <img src="/details/bathtub-01.svg" alt="Bath" className="w-6 h-6 mb-2" />
                <div className="flex flex-row items-center mb-1">
                  <span className="text-[#2450A0] font-extrabold text-lg">4</span>
                  <span className="text-gray-700 text-base font-semibold">BA</span>
                </div>
              </div>
              <div className="flex flex-col items-center bg-gray-100 border border-gray-300 rounded-2xl px-4 py-3 w-20">
                <img src="/details/ruler.svg" alt="Area" className="w-6 h-6 mb-2" />
                <div className="flex flex-row items-center mb-1">
                  <span className="text-[#2450A0] font-extrabold text-lg">24</span>
                  <span className="text-gray-700 text-base font-semibold">sqft</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Properties Heading */}
      <div className="w-[90%] mx-auto mt-12">
        <h2 className="text-3xl font-extrabold">
          <span className="text-black">Properties in same </span>
          <span className="text-[#2450A0]">Apartment</span>
        </h2>
      </div>

      {/* Properties Grid */}
      <div className="w-[90%] mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {sortedData.map((item) => (
          <div
            key={item.id}
            className="flex bg-white shadow-lg rounded-2xl overflow-hidden cursor-pointer h-40"
          >
            <div className="w-1/2 h-full">
              <img
                src={item.imageUrl}
                alt={`Property at ${item.address}`}
                className="w-full h-full object-cover rounded-l-2xl"
              />
            </div>
            <div className="w-1/2 p-3 flex flex-col justify-between">
              <div>
                <h3 className="text-black font-extrabold md:text-xl text-sm">
                  {item.address}
                </h3>
                <p className="text-gray-500 flex items-center md:text-lg text-sm mt-1">
                  <img
                    src="/details/location.svg"
                    alt="Location"
                    className="w-4 h-4 mr-1"
                  />
                  Aurora, IL
                </p>
              </div>
              <div className="flex items-center justify-between mt-2 md:text-lg text-[10px] text-gray-600">
                <span className="text-[#2450A0] font-semibold">{item.price}</span>
                <span>{item.bhk} Bedrooms</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Facts and Features Section */}
      <div className="w-[90%] mx-auto mt-12">
        <div className="bg-white rounded-2xl shadow p-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setOpenFactsAndFeatures(!openFactsAndFeatures)}
            role="button"
            aria-expanded={openFactsAndFeatures}
            aria-controls="facts-and-features-content"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setOpenFactsAndFeatures(!openFactsAndFeatures)}
          >
            <h2 className="text-3xl font-extrabold text-black">
              Facts and Features
            </h2>
            {openFactsAndFeatures ? (
              <FaChevronUp aria-label="Collapse Facts and Features" />
            ) : (
              <FaChevronDown aria-label="Expand Facts and Features" />
            )}
          </div>
          <div
            id="facts-and-features-content"
            className={`mt-6 transition-all duration-300 ease-in-out ${
              openFactsAndFeatures ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            {sections.map((section, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl shadow p-4 mb-6 transition-all duration-300 ease-in-out ${
                  openSections[idx] ? "border-2 border-[#2450A0]" : ""
                }`}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleSection(idx)}
                  role="button"
                  aria-expanded={openSections[idx]}
                  aria-controls={`section-content-${section.title}`}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && toggleSection(idx)}
                >
                  <h3 className="text-2xl font-extrabold">
                    <span className="text-black">Facts and Features: </span>
                    <span className="text-[#2450A0]">{section.title}</span>
                  </h3>
                  {openSections[idx] ? (
                    <FaChevronUp aria-label={`Collapse ${section.title}`} />
                  ) : (
                    <FaChevronDown aria-label={`Expand ${section.title}`} />
                  )}
                </div>
                <div
                  id={`section-content-${section.title}`}
                  className={`mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-300 ease-in-out ${
                    openSections[idx] ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  {section.cards.map((card, index) => (
                    <AccordionCard key={index} title={card.title} items={card.items} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔹 Previous Places Section */}
      <div className="px-4 md:px-12 mt-20 md:mt-[120px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h3 className="text-[31px] md:text-5xl tracking-tight text-left md:ml-[120px]">
              <span className="text-black font-extrabold">Discover</span>{" "}
              <span className="text-[#2b56b6] font-extrabold">
                Previous Places
              </span>
            </h3>
            <p className="mt-4 text-gray-600 text-sm md:text-base max-w-2xl text-left md:ml-[120px]">
              Duis vel interdum elit. Vivamus vel risus est. Integer a porta.
              Quisque nisi felis, tincidunt cursus efficitur at.
            </p>
          </div>
          <div className="mt-4 md:mt-0 mr-6 md:mr-[120px]">
            <NavigationButtons
              onPrev={handlePrevPrevious}
              onNext={handleNextPrevious}
            />
          </div>
        </div>
      </div>

      {/* 🔹 Previous Places Carousel */}
      <section className="px-2 md:px-12 mt-10 flex justify-center">
        <div className="relative max-w-7xl w-full mt-[10px] md:mt-[50px] overflow-hidden min-h-[480px]">
          <div
            className={`flex ${
              isTransitioning
                ? "transition-transform duration-500 ease-in-out"
                : ""
            }`}
            style={{
              transform: `translateX(-${
                (currentIndexPrevious / cardsPerPage) * 100
              }%)`,
            }}
          >
            {extendedCardData.map((item, index) => (
              <div
                key={index}
                className="min-w-full sm:min-w-[50%] lg:min-w-[25%] px-4"
              >
                <Link href="/Selling">
                  <div className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg">
                    <Image
                      src={item.image}
                      alt="Property"
                      width={500}
                      height={150}
                      className="object-contain h-full w-[110%] rounded-2xl"
                    />
                    <div className="px-4 pb-4">
                      <div className="flex justify-between items-center">
                        <p className="text-lg font-extrabold text-black">
                          {item.price}
                        </p>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            toggleLike(index);
                          }}
                          className="rounded-full"
                        >
                          <Image
                            src={
                              likedStates[index % totalOriginal]
                                ? "/Heart buttion.svg"
                                : "/Heart buttion icon.svg"
                            }
                            alt="like"
                            width={20}
                            height={20}
                            className="w-10 h-10 transition-all duration-200"
                          />
                        </button>
                      </div>
                      <p className="text-sm text-gray-500 -mt-2">
                        {item.owner}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="bg-gray-100 px-2 py-1 rounded-2xl text-xs font-bold text-gray-700">
                          <span className="text-[#2b56b6]">
                            {item.type.match(/^\d+/)}
                          </span>
                          {item.type.replace(/^\d+/, "")}
                        </span>
                        <span className="bg-gray-100 px-2 py-1 rounded-2xl text-xs font-bold text-gray-700">
                          <span className="text-[#2b56b6]">
                            {item.bath.match(/^\d+/)}
                          </span>
                          {item.bath.replace(/^\d+/, "")}
                        </span>
                        <span className="bg-gray-100 px-2 py-1 rounded-2xl text-xs font-bold text-gray-700">
                          <span className="text-[#2b56b6]">
                            {item.area.match(/^\d+/)}
                          </span>
                          {item.area.replace(/^\d+/, "")}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-3 text-xs font-bold text-gray-600 border border-gray-200 rounded-full px-3 py-1">
                        <Image
                          src="/loc.png"
                          alt="location"
                          width={16}
                          height={16}
                          className="w-4 h-4"
                        />
                        <span>{item.address}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
