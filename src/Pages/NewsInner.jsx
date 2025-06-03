import images from "../assets/Images/img";
import { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { MdStar, MdStarHalf } from "react-icons/md";
import { GrPrevious, GrNext } from "react-icons/gr";
import { NewsdataTest, NewsInnerdata, Pdfdata } from "../PdfData";
import useOutsideClick from "../Components/useOutsideClick";
import CoursePdf from "../assets/CourcesPDF/CoursePdf";
import { Link } from "react-router-dom";

const NewsInner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedOption = NewsdataTest[selectedIndex];
  const dropdownRef = useRef(null);

  useOutsideClick(dropdownRef, () => setIsOpen(false));

  const truncateTitle = (title, words) =>
    title.split(" ").slice(0, words).join(" ") +
    (title.split(" ").length > words ? "..." : "");

  // Handle Previous and Next Button Navigation
  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % NewsdataTest.length);
  };

  const handlePrevious = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? NewsdataTest.length - 1 : prevIndex - 1
    );
  };

  // Auto Slider for Banner
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="roboto">
      {/* 🔹 Banner Slider */}
      <div className="overflow-hidden relative w-full">
        <div
          ref={sliderRef}
          className="flex w-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          <img
            src={images.bannerevents1}
            alt="Event 1"
            className="w-full flex-shrink-0"
          />
          <img
            src={images.bannerevents2}
            alt="Event 2"
            className="w-full flex-shrink-0"
          />
          <img
            src={images.bannerevents3}
            alt="Event 3"
            className="w-full flex-shrink-0"
          />
        </div>
      </div>
      {/* Dropdown and Main Content */}
      <div className="flex justify-between">
        <div>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-3 px-5 pt-2 pb-8 max-w-[1500px]">
            <button
              className="text-primary rounded-lg 2xl:py-2  py-2 2xl:text-xl lg:text-sm sm:text-[13px] roboto-serif-font cursor-pointer border border-primary hover:bg-primary hover:text-white transition-all"
              onClick={() => window.open(CoursePdf.debtcolltraining, "_blank")}
            >
              <Link to="#">Revenue Management Testimonials</Link>
            </button>
            <button className="text-primary rounded-lg 2xl:py-2  py-2 px-2 2xl:text-xl lg:text-sm sm:text-[13px] roboto-serif-font cursor-pointer border border-primary hover:bg-primary hover:text-white  transition-all">
              <Link to="/callinner">Call Center Testimonials</Link>
            </button>
            <button className="bg-primary rounded-lg 2xl:py-2  py-2 px-2 2xl:text-xl lg:text-sm sm:text-[13px] text-white roboto-serif-font cursor-pointer border border-primary transition-all">
              <Link to="/newsinner">Extensive List of Positive Testimonials</Link>
            </button>
            <button className=" text-primary rounded-lg 2xl:py-2  py-2 2xl:text-xl lg:text-sm sm:text-[12px] roboto-serif-font cursor-pointer border border-primary hover:bg-primary hover:text-white  transition-all">
              <Link to="/debtcollinner">Debt Collection Training Testimonials</Link>
            </button>
          </div>
          <div className="2xl:px-15 lg:px-15 sm:px-8 pb-8 px-6 flex flex-col justify-center 2xl:gap-12 md:gap-8 gap-6">
            <div className="relative inline-block text-left" ref={dropdownRef}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-white text-primary sm:text-xl text-sm sm:px-6 px-3 sm:py-4 py-2 sm:rounded-2xl rounded-lg shadow-md border border-gray-100 hover:bg-primary hover:text-white transition flex items-center text-left justify-between gap-3 sm:w-full "
              >
                <span>{truncateTitle(selectedOption.title)}</span>
                <FaAngleDown />
              </button>

              {isOpen && (
                <div className="absolute mt-2 w-full sm:h-[500px] h-[370px] bg-white border border-gray-300 rounded-lg shadow-lg overflow-y-auto custom-scrollbar">
                  {/* Heading */}
                  <div className="px-4 py-3">
                    <h3 className="text-primary lg:text-2xl sm:text-xl text-base  font-semibold roboto-serif-font">
                    Extensive List of Positive Testimonials
                    </h3>
                  </div>

                  {/* Dropdown Items */}
                  {NewsdataTest.map((item, index) => (
                    <button
                      key={item.id}
                      className="block sm:text-xl text-sm w-full text-blacklight text-left px-4 py-2 hover:bg-gray-100 roboto-serif-font"
                      onClick={() => {
                        setSelectedIndex(index);
                        setIsOpen(false);
                      }}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <h3 className=" mainHeading sm:text-[32px] text-lg font-semibold roboto-serif-font text-primary text-left">
              {selectedOption.title}
            </h3>
          </div>

          {/* Comments Section */}
          <div className="2xl:px-20 lg:px-15 sm:px-8 px-6 flex flex-col justify-center md:gap-7 gap-4">
            <h3 className="sm:text-xl text-lg roboto-serif-font font-medium text-blacklight sm:my-8">
              {selectedOption.title}
            </h3>

            <ul className="flex flex-col sm:gap-6 gap-2 my-4">
              {NewsInnerdata.map((data, index) => (
                <li
                  key={index}
                  className="border-[1px] border-white hover:border-[1px] hover:border-gray-300 hover:shadow-lg rounded-2xl flex flex-col sm:gap-4 gap-3 sm:px-9 px-3 sm:py-7 py-3"
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
                      {data.title1}
                    </p>
                  </div>
                  <div className="flex flex-col sm:gap-2 gap-1">
                    <h5 className="sm:text-base text-sm  font-semibold text-black">
                      {data.title2}
                    </h5>
                    <p className="sm:text-sm text-xs font-medium">
                      {data.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Pagination Buttons */}
          {/* <div className="2xl:px-[130px] lg:px-15 sm:px-8 lg:py-25 sm:py-15 py-10 px-6 flex flex-wrap justify-center gap-2">
            <button
              onClick={handlePrevious}
              disabled={selectedIndex === 0}
              className="bg-primary text-white px-4 py-2 rounded-md disabled:opacity-50 flex items-center"
            >
              <GrPrevious className="mr-2" /> Prev
            </button>

            {Array.from({ length: NewsdataTest.length })
              .slice(
                Math.max(0, selectedIndex - 2),
                Math.min(NewsdataTest.length, selectedIndex + 3)
              )
              .map((_, i) => {
                const pageIndex =
                  selectedIndex <= 1
                    ? i
                    : selectedIndex >= NewsdataTest.length - 2
                    ? NewsdataTest.length - 5 + i
                    : selectedIndex - 2 + i;

                if (pageIndex < 0 || pageIndex >= NewsdataTest.length)
                  return null;

                return (
                  <button
                    key={pageIndex}
                    onClick={() => setSelectedIndex(pageIndex)}
                    className={`w-10 h-10 rounded-md font-semibold text-sm flex items-center justify-center ${
                      pageIndex === selectedIndex
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-300"
                    }`}
                  >
                    {pageIndex + 1}
                  </button>
                );
              })}

            <button
              onClick={handleNext}
              disabled={selectedIndex === NewsdataTest.length - 1}
              className="bg-primary text-white px-4 py-2 rounded-md disabled:opacity-50 flex items-center"
            >
              Next <GrNext className="ml-2" />
            </button>
          </div> */}
          {/* 🔹 Pagination Buttons for NewsdataTest */}
          <div className="2xl:px-[130px] lg:px-15 sm:px-8 lg:py-25 sm:py-15 py-10 px-6 flex flex-wrap justify-center gap-2">
            {/* Prev Button */}
            <button
              onClick={() => {
                handlePrevious(); // your original function
                window.scrollTo({ top: 0, behavior: "smooth" }); // added scroll
              }}
              disabled={selectedIndex === 0}
              className="bg-primary text-white px-4 py-2 rounded-md disabled:opacity-50 flex items-center"
            >
              <GrPrevious className="mr-2" /> Prev
            </button>

            {/* Page Number Buttons */}
            {Array.from({ length: NewsdataTest.length })
              .slice(
                Math.max(0, selectedIndex - 2),
                Math.min(NewsdataTest.length, selectedIndex + 3)
              )
              .map((_, i) => {
                const pageIndex =
                  selectedIndex <= 1
                    ? i
                    : selectedIndex >= NewsdataTest.length - 2
                    ? NewsdataTest.length - 5 + i
                    : selectedIndex - 2 + i;

                if (pageIndex < 0 || pageIndex >= NewsdataTest.length)
                  return null;

                return (
                  <button
                    key={pageIndex}
                    onClick={() => {
                      setSelectedIndex(pageIndex); // your original function
                      window.scrollTo({ top: 0, behavior: "smooth" }); // added scroll
                    }}
                    className={`w-10 h-10 rounded-md font-semibold text-sm flex items-center justify-center ${
                      pageIndex === selectedIndex
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-300"
                    }`}
                  >
                    {pageIndex + 1}
                  </button>
                );
              })}

            {/* Next Button */}
            <button
              onClick={() => {
                handleNext(); // your original function
                window.scrollTo({ top: 0, behavior: "smooth" }); // added scroll
              }}
              disabled={selectedIndex === NewsdataTest.length - 1}
              className="bg-primary text-white px-4 py-2 rounded-md disabled:opacity-50 flex items-center"
            >
              Next <GrNext className="ml-2" />
            </button>
          </div>
        </div>
        <div>
          <div className="w-[420px] lg:flex hidden flex-col">
            <div className="h-1070 overflow-y-auto relative custom-scrollbar">
              <ul className="flex flex-col">
                {/* Fixed Tab */}
                <li className="bg-primary text-white 2xl:text-2xl sm:text-base text-base px-9 2xl:py-5 py-3 roboto-serif-font sticky top-0 z-10">
                  Training Courses That You Should Attend Urgently
                </li>

                {/* Scrollable List */}
                {Pdfdata.slice(0, 58).map((data, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 px-9 py-5 bg-[#F2F9FF] cursor-pointer hover:bg-blue-100 transition"
                    onClick={() => window.open(data.pdf, "_blank")}
                  >
                    <img
                      src={images.pdf}
                      alt="PDF Icon"
                      className="w-11 h-11"
                    />
                    <div className="text-blacklight sm:text-lg text-sm font-semibold">
                      <h4 className="inline">
                        {data.id} - {data.title}
                      </h4>
                      <span className="text-gray-600 sm:text-base text-xs pl-1">
                        {data.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsInner;
