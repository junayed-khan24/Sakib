import React, { useEffect } from "react";
import leftImg from "../assets/edite.webp";
import middleImg from "../assets/port.webp";
import rightImg from "../assets/portrate1.jpg";
import { Link } from "react-router";

import AOS from "aos";
import "aos/dist/aos.css";

const FeaturedShots = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className=" text-center">

      {/* Title */}
      <h2 data-aos="fade-up" className="text-xl md:text-3xl font-bold">
        📸 আমার সেরা ফটোগ্রাফি
      </h2>

      <p 
        data-aos="fade-up"
        data-aos-delay="200"
        className="mb-14 max-w-2xl mx-auto text-1xl md:text-2xl font-normal text-neutral mt-0 md:mt-4"
      >
        দেখুন আমার লেন্সে বন্দী সেরা মুহূর্তগুলো।
      </p>

      {/* Gallery */}
     {/* Gallery */}
<div className="relative flex items-center justify-center ">

  {/* LEFT */}
  <div
    data-aos="fade-right"
    className="
      absolute left-1/2 -translate-x-[120%] md:-translate-x-[150%]
      w-28 md:w-48 lg:w-64
      rotate-[-6deg]
      transition-all duration-500
      hover:rotate-0 hover:-translate-y-4 hover:scale-105 hover:z-20
    "
  >
    <img
      src={leftImg}
      alt="left"
      className="rounded-2xl shadow-xl object-cover w-full h-40 md:h-72"
    />
  </div>

  {/* CENTER */}
  <div
    data-aos="zoom-in"
    className="
      w-40 md:w-96 lg:w-[420px]
      z-10
      transition-all duration-500
      hover:-translate-y-5 hover:scale-105 hover:shadow-2xl
    "
  >
    <img
      src={middleImg}
      alt="center"
      className="rounded-2xl shadow-2xl object-cover w-full h-56 md:h-[420px]"
    />
  </div>

  {/* RIGHT */}
  <div
    data-aos="fade-left"
    className="
      absolute left-2/5 md:left-1/2 translate-x-[90%] md:translate-x-[70%]
      w-28 md:w-48 lg:w-64
      rotate-[6deg]
      transition-all duration-500
      hover:rotate-0 hover:-translate-y-4 hover:scale-105 hover:z-20
    "
  >
    <img
      src={rightImg}
      alt="right"
      className="rounded-2xl shadow-xl object-cover w-full h-40 md:h-72"
    />
  </div>

</div>

      {/* Button */}
      <Link to="/portfolio">
        <div data-aos="fade-up" data-aos-delay="300" className="mt-14">
          <button className="btn btn-neutral bg-black text-white rounded-xl px-10 hover:bg-[#333333] transition duration-300">
            📁 আমার পোর্টফোলিও দেখুন
          </button>
        </div>
      </Link>

    </section>
  );
};

export default FeaturedShots;