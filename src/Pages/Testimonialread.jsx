import images from "../assets/Images/img";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaFileDownload } from "react-icons/fa";
import { MdStar, MdStarHalf } from "react-icons/md";
import {  NewsdataTest } from "../PdfData";
import CoursePdf from "../assets/CourcesPDF/CoursePdf";
const extractCKEntries = (data) => {
  const regex = /CK\s?(\d{3,4})/i;
  const map = new Map();
  data.forEach((item) => {
    const match = item.title.match(regex);
    if (match) {
      const ckCode = `CK ${match[1]}`;
      if (!map.has(ckCode)) {
        map.set(ckCode, []);
      }
      map.get(ckCode).push(item);
    }
  });

  return Array.from(map.entries()).map(([ckCode, entries]) => ({
    ckCode,
    entries,
  }));
};
const ckEntries = extractCKEntries(NewsdataTest);
const Testimonialread = () => {
  // const [selectedCkCode, setSelectedCkCode] = useState(ckEntries[0]?.ckCode);

  const [sliderIndex, setSliderIndex] = useState(0);
  const sliderRef = useRef(null);
  const ckContainerRef = useRef(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const defaultCk = queryParams.get("ck");
  const [selectedCkCode, setSelectedCkCode] = useState(null);

  const selectedItems =
    ckEntries.find((entry) => entry.ckCode === selectedCkCode)?.entries || [];

  // Auto Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex((prev) => (prev + 1) % 3);
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (defaultCk && ckEntries.some((entry) => entry.ckCode === defaultCk)) {
      setSelectedCkCode(defaultCk);
    } else {
      setSelectedCkCode(ckEntries[0]?.ckCode);
    }
  }, [defaultCk]);

  return (
    <div className="roboto">
      {/* 🔹 Banner Slider */}
      <div className="overflow-hidden relative w-full">
        <div
          ref={sliderRef}
          className="flex w-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${sliderIndex * 100}%)` }}
        >
          <img src={images.bannerevents1} className="w-full flex-shrink-0" />
          <img src={images.bannerevents2} className="w-full flex-shrink-0" />
          <img src={images.bannerevents3} className="w-full flex-shrink-0" />
        </div>
      </div>

      {/* 🔹 CK Code Tabs */}
      <div className="relative w-full flex gap-3 mt-8 2xl:px-28 lg:px-15 sm:px-8 pb-8 px-6">
        <div ref={ckContainerRef} className="flex gap-x-2 gap-y-2 flex-wrap">
          {ckEntries.map(({ ckCode }) => (
            <button
              key={ckCode}
              className={`px-4 py-2 flex-shrink-0 whitespace-nowrap rounded-md text-base font-semibold ${
                selectedCkCode === ckCode
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => setSelectedCkCode(ckCode)}
            >
              {ckCode}
            </button>
          ))}
        </div>
      </div>
    

      {/* 🔹 CK Data */}
      <div className="2xl:px-28 lg:px-15 sm:px-8 pb-8 px-6">
        {selectedItems.map((item) => (
          <div key={item.id} className="mb-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg sm:text-[32px] font-semibold text-primary text-left font-serif">
                {item.title}
              </h3>

              {item.title === "CK 1400 Human Resources Management" && (
                <span
                  className="cursor-pointer flex flex-row gap-1 text-blue-800 hover:text-blue-900 text-2xl ml-4"
                  title="Open PDF"
                >
                  <FaFileDownload
                    className="ml-2 w-8 h-7"
                    onClick={() =>
                      window.open(CoursePdf.sometopicpdf, "_blank")
                    }
                  />
                </span>
              )}
            </div>
            <ul className="flex flex-col sm:gap-6 gap-2 my-4">
              {item.comments?.map((comment) => (
                <li
                  key={comment.id} // or key={index} if comment.id is not unique
                  className="border border-white hover:border-gray-300 hover:shadow-lg rounded-2xl flex flex-col sm:gap-4 gap-3 sm:px-9 px-3 sm:py-7 py-3"
                >
                  <div className="flex flex-col sm:gap-2.5 gap-1">
                    <div className="flex sm:gap-2 sm:text-2xl text-lg text-secondary">
                      <MdStar />
                      <MdStar />
                      <MdStar />
                      <MdStar />
                      <MdStarHalf />
                    </div>
                    <p className="sm:text-base text-sm text-blacklight">
                      {comment.title1}
                    </p>
                    <p className="sm:text-base text-sm text-blacklight">
                      {comment.disc}
                    </p>
                  </div>
                  <div className="flex flex-col sm:gap-2 gap-1">
                    <h5 className="sm:text-base text-sm font-semibold text-black">
                      {comment.title2}
                    </h5>
                    <p className="sm:text-sm text-xs font-medium">
                      {comment.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonialread;