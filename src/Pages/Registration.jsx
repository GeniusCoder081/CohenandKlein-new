import images from "../assets/Images/img";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const Registration = () => {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const method = queryParams.get("method"); // "email" or "fax"

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const headingText =
    method === "fax"
      ? "Fax your registration form to 954-731-6606"
      : "Fill Your Contact Information";

  return (
    <div>
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
      <div className="roboto lg:py-25 sm:py-15 py-8 pb-[100px] 2xl:px-25 max-w-[1650px] lg:px-16 sm:px-10 mx-auto px-6">
        {/* Title Section */}
        <div className="mx-auto flex justify-start ">
          <h3 className="roboto-serif-font text-[24px] md:text-[30px] lg:text-[34px] text-primary font-semibold max-w-[800px]">
              {headingText}
          </h3>
        </div>
        <form
          action="#"
          className="bg-[#F2F9FF] lg:p-15 sm:p-8 p-5 rounded-md shadow-md lg:mt-15 mt-8"
        >
          <div className="flex flex-col sm:gap-9 gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-9 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Name of Company<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="companyname"
                  placeholder="Enter Company Name"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="participantname"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Name Participant Name<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="participantname"
                  placeholder="Enter your email"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="text"
                className="text-[16px] font-medium  text-blacklight "
              >
                Job Title of Participant<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="jobtitle"
                placeholder="Enter Job Title"
                className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-9 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="text"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Work Phone<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="workphone"
                  placeholder="Enter Work Phone"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="text"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Ext
                </label>
                <input
                  type="text"
                  id="ext"
                  placeholder="Enter Ext"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="text"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Home Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Enter Home Phone"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-9 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="phone"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Cell Phone #1<span className="text-red-600">*</span>
                </label>
                <input
                  type="phone"
                  id="cellphone1"
                  placeholder="Enter Cell Phone #1"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="phone"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Cell Phone #2
                </label>
                <input
                  type="phone"
                  id="cellphone2"
                  placeholder="Enter Cell Phone #2"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="phone"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Fax
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Enter Fax"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-9 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Email<span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Other Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Other Email"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Work Email"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-9 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="number"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  C&K Course Number
                </label>
                <input
                  type="number"
                  id="number"
                  placeholder="Enter C&K Course Number"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="text"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Course Title
                </label>
                <input
                  type="text"
                  id="coursetitle"
                  placeholder="Enter Course Title"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-9 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="calendar"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Course Date
                </label>
                <input
                  type="calendar"
                  id="date"
                  placeholder="Enter Course Date"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="text"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Course Location (Country)
                </label>
                <input
                  type="text"
                  id="location"
                  placeholder="Enter Course Location"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-9 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="number"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  How Many Participant
                </label>
                <input
                  type="number"
                  id="participatenumber"
                  placeholder="Enter NO. of Participant"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="number"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Unit Price
                </label>
                <input
                  type="number"
                  id="unitprice"
                  placeholder="Enter Unit Price"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="number"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Total Price
                </label>
                <input
                  type="number"
                  id="totalprice"
                  placeholder="Enter Total Price"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="text"
                className="text-[16px] font-medium  text-blacklight "
              >
                Contact Person
              </label>
              <input
                type="text"
                id="contactperson"
                placeholder="Enter Contact Person Name"
                className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-9 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="text"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Address Line 1
                </label>
                <input
                  type="text"
                  id="addressline1"
                  placeholder="Enter Address Line 1"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="text"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Address Line 2
                </label>
                <input
                  type="text"
                  id="addressline2"
                  placeholder="Enter Address Line 2"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-9 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="text"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  placeholder="Enter city"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="text"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  placeholder="Enter State"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-9 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="text"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  placeholder="Enter Country"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="number"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Zip
                </label>
                <input
                  type="text"
                  id="zip"
                  placeholder="Enter Zip"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <label className="block font-semibold text-blacklight">
                Billing Address:
              </label>
              <div className="grid grid-cols-3 gap-4">
                <label className="text-base font-medium text-blacklight flex items-center whitespace-nowrap">
                  <input type="checkbox" className="mr-3 w-[18px] h-[18px]" />{" "}
                  Check if same as shipping address
                </label>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-9 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Billing Name"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="text"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Address
                </label>
                <input
                  type="text"
                  id="billingaddress"
                  placeholder="Enter Billing Address"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-9 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="text"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  City
                </label>
                <input
                  type="text"
                  id="billingcity"
                  placeholder="Enter Billing City"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="text"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  State
                </label>
                <input
                  type="text"
                  id="billingstate"
                  placeholder="Enter Billing State"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-9 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="text"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Country
                </label>
                <input
                  type="text"
                  id="billingcountry"
                  placeholder="Enter Billing Country"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="number"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Zip
                </label>
                <input
                  type="number"
                  id="billingzip"
                  placeholder="Enter Billing Zip"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-[16px] font-medium  text-blacklight "
              >
                Email
              </label>
              <input
                type="email"
                id="billingemail"
                placeholder="Enter Billing Email"
                className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-9 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="text"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Credit Card Number
                </label>
                <input
                  type="number"
                  id="creditcardnumber"
                  placeholder="Enter Credit Card Number"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="text"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Name on Card
                </label>
                <input
                  type="text"
                  id="namecard"
                  placeholder="Enter Name on Card"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-9 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="calendar"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Expiration Date
                </label>
                <input
                  type="calendar"
                  id="expiredate"
                  placeholder="Enter Expiration Date"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="code"
                  className="text-[16px] font-medium  text-blacklight "
                >
                  Security Code
                </label>
                <input
                  type="number"
                  id="securitycode"
                  placeholder="Enter Security Code"
                  className="bg-white rounded-[3px] px-3 py-2.5 text-normal roboto focus:outline-none focus:ring-2 focus:ring-secondary text-base"
                />
              </div>
            </div>
            <div className="flex flex-col sm:gap-8 gap-4">
              <label className="block font-semibold text-blacklight">
                What factors influenced you to buy this product?
              </label>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div className="flex flex-col gap-[15px]">
                  <label className="text-base font-medium text-blacklight flex items-center">
                    <input type="checkbox" className="mr-3 w-[18px] h-[18px]" />{" "}
                    Company Reputation
                  </label>
                  <label className="text-base font-medium text-blacklight flex items-center">
                    <input type="checkbox" className="mr-3 w-[18px] h-[18px]" />{" "}
                    Features
                  </label>
                  <label className="text-base font-medium text-blacklight flex items-center">
                    <input type="checkbox" className="mr-3 w-[18px] h-[18px]" />{" "}
                    Recommendations
                  </label>
                </div>
                <div className="flex flex-col gap-[15px]">
                  <label className="text-base font-medium text-blacklight flex items-center">
                    <input type="checkbox" className="mr-3 w-[18px] h-[18px]" />{" "}
                    Benefits to Employee
                  </label>
                  <label className="text-base font-medium text-blacklight flex items-center">
                    <input type="checkbox" className="mr-3 w-[18px] h-[18px]" />{" "}
                    Other (Insert Below)
                  </label>
                  <label className="text-base font-medium text-blacklight flex items-center">
                    <input type="checkbox" className="mr-3 w-[18px] h-[18px]" />{" "}
                    Benefits to Corporations
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="phone"
                className="text-[16px] font-medium  text-blacklight "
              >
                Comment Your Questions
              </label>
              <textarea
                name="comment"
                id="comment"
                rows={6}
                className="bg-white px-3 py-2.5 text-base"
                placeholder="Enter here..."
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-4 bg-secondary text-white py-2 px-4 rounded-md hover:bg-hoverclr transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
