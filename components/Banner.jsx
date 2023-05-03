import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";

const Banner = () => {
  return (
    <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto">
      <Carousel
        showIndicators={false}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] 
            bg-black z-10 flex justify-center items-center cursor-pointer hover:opacity-90"
          >
            <BiArrowBack className="text-sm md:text-lg" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            onClick={clickHandler}
            className="absolute right-0 md:right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] 
              bg-black z-10 flex justify-center items-center cursor-pointer hover:opacity-90"
          >
            <BiArrowBack className="text-sm md:text-lg rotate-180" />
          </div>
        )}
      >
        <div>
          <img
            src="/slide-1.png"
            alt="banner"
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div className="px-[15px] md:px-[40px] font-oswald py-[10px] md:py-[25px] bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            Shop now
          </div>
        </div>
        <div>
          <img
            src="/slide-2.png"
            alt="banner"
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div className="px-[15px] md:px-[40px] font-oswald py-[10px] md:py-[25px] bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            Shop now
          </div>
        </div>
        <div>
          <img
            src="/slide-3.png"
            alt="banner"
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div className="px-[15px] md:px-[40px] font-oswald py-[10px] md:py-[25px] bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            Shop now
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
