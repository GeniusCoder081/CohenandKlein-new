import React from "react";
import images from "../../assets/Images/img";
import icons from "../../assets/icons/icon.js";
import { IoIosLink } from "react-icons/io";
import { Link } from "react-router-dom";
import CoursePdf from "../../assets/CourcesPDF/CoursePdf.js";

const Testimonial = () => {
  return (
    <div className="roboto pb-[80px] bg-[#FFFAF2] grid lg:grid-cols-2 grid-cols-1 2xl:gap-[210px] xl:gap-30 gap-10 my-8  padding-2xl 2xl:pr-25  md:px-15 px-4">
      <div className=" z-10">
        <div>
          <div className="text-primary roboto-serif-font text-xl sm:text-[36px] text-center lg:text-left font-semibold roboto-serif-font sm:pb-[54px] sm:pt-[90px] py-8">
            Some Debt Collections & Revenue Management Testimonials
          </div>
          <div className="flex flex-col sm:gap-6 gap-3 lg:items-left items-center ">
            <div className=" flex gap-3 cursor-pointer items-center max-w-[660px] border-[1px] border-[#C2C2C2] px-5 py-4 rounded-xl bg-white shadow-[0_4px_40px_rgba(1,61,123,0.10)]">
              <Link
                to="#"
                className="text-[#021326] sm:text-[16px] text-xs tracking-[0.02em] "
                onClick={() =>
                  window.open(CoursePdf.debtcolltraining, "_blank")
                }
              >
                Debt Collection and revenue management training for banks and
                other financial institutions
              </Link>
              <IoIosLink className="text-[#039EFF] h-7 w-7 cursor-pointer" />
            </div>
            <div className=" flex gap-3 items-center max-w-[660px] border-[1px] border-[#C2C2C2] px-5 py-4 rounded-xl bg-white shadow-[0_4px_40px_rgba(1,61,123,0.10)]">
              <Link
                to="/debtcollinner"
                className="text-[#021326] sm:text-[16px] text-xs tracking-[0.02em] "
              >
                Inspiring Debt Collection and Revenue Management Training
                Testimonials from Our Satisfied Clients
              </Link>
              <IoIosLink className="text-[#039EFF] h-7 w-7 cursor-pointer" />
            </div>
            <div className="  flex gap-3 items-center max-w-[660px]  border-[1px] border-[#C2C2C2] px-5 py-4 rounded-xl bg-white shadow-[0_4px_40px_rgba(1,61,123,0.10)]">
              <Link
                to="/callinner"
                className="text-[#021326] sm:text-[16px] text-xs tracking-[0.02em]"
              >
                Authentic Call Center and Customer Service Training Testimonials
                from Our Valued Clients
              </Link>
              <IoIosLink className="text-[#039EFF] h-7 w-7 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <div className="items-center">
        <div className="relative">
          <img
            src={images.dotes}
            alt=""
            className="absolute top-[26px] lg:left-0 left-0"
          />
          <img
            src={images.orangecircle}
            alt=""
            className="sm:block hidden absolute top-[128px] lg:left-[125px] right-[125px] z-0 max-w-[370px]"
          />
        </div>
        <div className="flex justify-center sm:justify-start">
          <div className="relative z-10 mt-[79px] sm:left-[53px] items-center">
            <div className="bg-white shadow-[0_4px_40px_rgba(1,61,123,0.10)] max-w-[345px] h-[252px] p-[20px] flex flex-col  rounded-[10px]">
              <div className="pb-[20px] border-b-[2px] border-[rgba(0,0,0,0.1)]">
                <h3 className="text-primary text-[20px] font-semibold roboto-serif-font pb-[10px]">
                  Cohen & Klein Consulting
                </h3>
                <div className="flex items-center gap-[15px]">
                  <img
                    src={icons.many}
                    alt=""
                    className="px-[12px] py-[14px] bg-primary rounded-[10px]"
                  />
                  <img
                    src={icons.sixytythree}
                    alt=""
                    className="px-[12px] py-[14px] bg-primary rounded-[10px]"
                  />
                  <img
                    src={icons.img34}
                    alt=""
                    className="px-[12px] py-[14px] bg-primary rounded-[10px]"
                  />
                  <img
                    src={icons.thousand}
                    alt=""
                    className="px-[12px] py-[14px] bg-primary rounded-[10px]"
                  />
                </div>
              </div>

              <div className="mt-[20px]">
                <p className="text-[#021326]">You can Register through</p>
                <div className="flex gap-[15px] mt-[15px]">
                  <Link to="/registration?method=email">
                    <button className="px-[50px] py-[10px] bg-secondary rounded-[5px] text-white cursor-pointer">
                      Email
                    </button>
                  </Link>
                  <Link to="/registration?method=fax">
                    <button className="px-[50px] py-[10px] bg-primary rounded-[5px] text-white cursor-pointer">
                      By Fax
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-end lg:justify-center 2xl:ml-30 lg:ml-20 ">
          <div
            className="flex flex-col relative z-10 bg-white border-[2px] rounded-[10px] border-[#f8c67b] 2xl:p-3 lg:p-2 sm:p-4 p-2.5 gap-1 2xl:max-w-[510px] max-w-[460px]  sm:mt-[99px] mt-10 lg:ml-[60px] items-center cursor-pointer"
            onClick={() => window.open(CoursePdf.debtcollectionpdf, "_blank")}
          >
            <div className="flex gap-x-2">
              <img src={images.pdf} alt="" className="max-w-15 h-13 m-auto" />
              <h6 className="text-primary leading-[23px] font-medium roboto-serif-font 2xl:text-[22px]  sm:text-lg text-base">
                100+ Debt Collection & Revenue Management Training Courses
              </h6>
            </div>
            <div>
              <p className="text-smallclr roboto 2xl:text-lg text-sm sm:text-base leading-[23px]">
                The longer your delinquent accounts go uncollected, the harder
                they will be to recover.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
