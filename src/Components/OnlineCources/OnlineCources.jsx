import React from "react";
import images from "../../assets/Images/img";
import { Onlinecourcesdata } from "../../data";
import { FaRegCalendarAlt } from "react-icons/fa";
import CoursePdf from "../../assets/CourcesPDF/CoursePdf.js";
import { Link } from "react-router-dom";
const OnlineCources = () => {
  return (
    <div>
      <div className=" pt-9 padding-2xl lg:px-15 px-4 roboto">
        <h2 className="text-primary 2xl:text-5xl lg:text-4xl 2xl:leading-[53px] sm:text-3xl text-base text-center roboto-serif-font font-semibold mt-8">
          <span className="text-white relative">
            <img
              src={images.Onlineyellow}
              alt=""
              className="absolute -z-10 -left-1 -bottom-1"
            />{" "}
            Cohen & Klein Consulting Inc.{" "}
          </span>{" "}
          Debt Collection and Revenue Management Trainers as well as Consultants
        </h2>
        <h2 className=" font-serif lg:text-[32px] sm:text-2xl text-base text-center text-primary font-semibold mt-5">
          July To December 2025, Debt Collection And Revenue Management Virtual
          Training Schedule
        </h2>
        <div className="flex xl:flex-row flex-col mt-8 gap-10 md:px-15 justify-center">
          <div className="flex justify-center md:justify-end lg:justify-center ">
            <div
              className="flex relative z-10 bg-white border-[2px] rounded-[10px] border-[#f8c67b] p-2 gap-[15px] items-center cursor-pointer"
              onClick={() =>
                window.open(
                  "https://cohenandklein.com/wp-content/uploads/2025/04/CohenUP2025.pdf",
                  "_blank"
                )
              }
            >
              <img src={images.pdf} alt="" className="max-w-12 h-12 " />
              <div>
                <h6 className="text-primary font-medium roboto-serif-font 2xl:text-xl sm:text-lg text-base">
                  Click here for 2025 Debt Collection Training Schedule
                </h6>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-end lg:justify-center">
            <div
              className="flex relative z-10 bg-white border-[2px] rounded-[10px] border-[#f8c67b]  p-2 gap-[15px] items-center cursor-pointer"
              onClick={() =>
                window.open(
                  "https://cohenandklein.com/wp-content/uploads/2025/04/CohenDW2025.pdf",
                  "_blank"
                )
              }
            >
              <img src={images.pdf} alt="" className="max-w-12 h-12 " />
              <div>
                <h6 className="text-primary font-medium roboto-serif-font 2xl:text-xl sm:text-lg text-base">
                  Click here for 2025 Debt Collection Training Outline
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto flex justify-center mt-12 mb-20">
          <div>
            <Link
              className="font-serif lg:text-[36px] sm:text-2xl text-base text-center text-primary font-semibold"
              onClick={() => window.open(CoursePdf.pdf202612, "_blank")}
            >
              2026, Debt Collections and Revenue Management Virtual Training
              Schedule
            </Link>
            <div className="flex xl:flex-row flex-col mt-6 gap-10 md:px-15 justify-center">
              <div className="flex justify-center md:justify-end lg:justify-center ">
                <div
                  className="flex relative z-10 bg-white border-[2px] rounded-[10px] border-[#f8c67b]  p-2 gap-[15px] items-center cursor-pointer"
                  onClick={() => window.open(CoursePdf.pdf202612, "_blank")}
                >
                  <img src={images.pdf} alt="" className="max-w-12 h-12 " />
                  <div>
                    <h6 className="text-primary font-medium roboto-serif-font 2xl:text-xl sm:text-lg text-base">
                    Click here for 2026 Debt Collection Training Schedule
                    </h6>
                  </div>
                </div>
              </div>
              <div className="flex justify-center md:justify-end lg:justify-center">
                <div
                  className="flex relative z-10 bg-white border-[2px] rounded-[10px] border-[#f8c67b] p-2 gap-[15px] items-center cursor-pointer"
                  onClick={() => window.open(CoursePdf.pdf2026, "_blank")}
                >
                  <img src={images.pdf} alt="" className="max-w-12 h-12 " />
                  <div>
                    <h6 className="text-primary font-medium roboto-serif-font 2xl:text-xl sm:text-lg text-base">
                    Click here for 2026 Debt Collection Training Outline
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-12.5 my-15 ">
          {Onlinecourcesdata.sort((a, b) => a.id - b.id) // sort by id ascending
            .map((item, index) => (
              <div
              onClick={() => window.open(CoursePdf.pdf2026, "_blank")}
                key={index}
                className="bg-[#F2F9FF] p-5 relative hover:drop-shadow-[0_0_40px_rgba(1,61,123,0.1)] group hover:bg-white duration-300 transition-all cursor-pointer flex flex-col justify-between min-h-[180px]" // added flex-col, justify-between, min-h
              >
                {/* Badge */}
                <div className="absolute -top-2 flex group-hover:bg-primary bg-secondary pt-0.5 pb-0.5 px-2.5 items-center text-white gap-3 rounded-[5px] text-base font-medium roboto transition-all duration-500">
                  <FaRegCalendarAlt />
                  {item.date}
                </div>

                {/* Top Content */}
                <div>
                  <h3 className="roboto-serif-font font-medium sm:text-xl text-base text-primary sm:pb-2.5 pb-1 ">
                    {item.title}
                  </h3>
                </div>

                {/* Footer Content */}
                <div className="">
                  <p className="footer-content roboto font-normal sm:text-base text-xs text-blacklight flex items-center gap-0.5 sm:pt-2.5 pt-1 whitespace-nowrap border-t-[1px] border-gray-200">
                    <span>Registration Deadline: </span>
                    <span>{item.rd}</span>
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OnlineCources;
