import React, { useState } from "react";
import { ExploreCardData } from "../../data";
import { FaFilePdf, FaPlay } from "react-icons/fa";

const Explore = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handleCardClick = (index, url) => {
    if (index === 0) {
      // Open PDF for the first card
      window.open(url, "_blank");
    } else {
      // Show YouTube popup for other cards
      setVideoUrl(url);
      setIsPopupOpen(true);
    }
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setVideoUrl("");
  };

  return (
    <div className=" pt-9 padding-2xl lg:px-15 px-4 roboto">
      <div className="mx-auto flex justify-center">
        <div>
          <h3 className="font-serif sm:text-[36px] text-xl text-center text-primary font-semibold">
            Explore Our Vision and Videos
          </h3>
          <p className="roboto-serif-font font-bold sm:text-[21px] text-xs text-secondary pt-[10px] flex justify-center">
            Gain insights into our vision and explore engaging videos.
          </p>
        </div>
      </div>
      <div className="py-[70px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-11 gap-6 justify-center">
          {ExploreCardData.map((data, index) => (
            <div
              key={index}
              className="max-w-[510px] w-full rounded-lg overflow-hidden drop-shadow-[0_0_40px_rgba(1,61,123,0.1)] bg-white p-[20px] cursor-pointer"
              onClick={() => handleCardClick(index, data.videoUrl)}
            >
              <div className="relative">
                {/* Icon */}
                <img
                  src={data.icon}
                  alt=""
                  className="absolute p-[12px] bg-white"
                />

                {/* Play/PDF Icon */}
                <div
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2.5 py-2.5 ${
                    index === 0 ? "bg-red-600" : "bg-secondary"
                  } rounded-full flex justify-center items-center border-2 border-white`}
                >
                  {index === 0 ? (
                    <FaFilePdf className="text-white text-xl" />
                  ) : (
                    <FaPlay className="text-white text-sm" />
                  )}
                </div>

                {/* Card Image */}
                <img
                  src={data.image}
                  alt="Card Image"
                  className="w-full h-[265px] object-cover rounded-2xl"
                />
              </div>

              {/* Card Content */}
              <div className="pt-[20px] flex flex-col gap-[15px]">
                <h2 className="text-[20px] font-semibold text-primary tracking-[.2px]">
                  {data.title}
                </h2>
                <p className="text-[#021326] text-base pb-[20px]">
                  {data.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {isPopupOpen && (
          <div
            className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50"
            onClick={handleClosePopup} // Close when clicking outside
          >
            <div
              className="bg-white p-4 rounded-lg relative shadow-lg w-[90%] max-w-[1200px] aspect-video"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              {/* Close Button */}
              <button
                className="absolute top-2 right-2 bg-black px-3 py-1 text-white text-2xl rounded z-10"
                onClick={handleClosePopup}
              >
               Close
              </button>

              {/* Responsive Iframe */}
              <div className="relative w-full h-0 pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={videoUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
