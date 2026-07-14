import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


import port1 from "../assets/portrate1.jpg";
import port2 from "../assets/portrate2.jpg";
import port3 from "../assets/portrate3.jpg";
import port4 from "../assets/portrate4.jpg";
import port5 from "../assets/portrate5.jpg";
import wedd from "../assets/wadding.jfif";
import wedd2 from "../assets/wadding3.jpg";
import wedd3 from "../assets/wadding2.jpg";
import wedd4 from "../assets/wadding1.jfif";
import wedd5 from "../assets/wadding3.jpg";
import wedd6 from "../assets/hero.png";
import nature from "../assets/Nature.jfif";
import nature1 from "../assets/nature4.jfif";
import nature2 from "../assets/nature2.jpg";
import nature3 from "../assets/nature3.png";
import nature4 from "../assets/nature5.png";
import Pet from "../assets/animal.png";
import Pet1 from "../assets/animal1.jfif";
import Pet2 from "../assets/animal2.jpg";
import { Link } from "react-router";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-base-200 items-center justify-center px-4 py-12 pt-20 md:pt-24">
    

      {/* Portrait Photography */}
      <h2 className="text-2xl text-[#000000] md:text-4xl font-regular font-normal text-center py-8">পোর্ট্রেট ফটোগ্রাফি</h2>

      <div className="md:flex gap-3 items-center justify-center">
        <div className="overflow-hidden rounded-2xl" data-aos="fade-right">
          <img
            src={port1}
            alt="Portfolio 1"
            className="rounded-lg shadow-md w-full md:h-[412px] md:w-[300px] object-cover hidden md:block hover:scale-110 transition duration-300"
          />
        </div>

        <div className="overflow-hidden rounded-2xl" data-aos="zoom-in">
          <img
            src={port2}
            alt="Portfolio 2"
            className="rounded-lg shadow-md w-full md:h-[412px] md:w-[433px] object-cover hidden md:block hover:scale-110 transition duration-300"
          />
        </div>

        <div className="overflow-hidden rounded-2xl" data-aos="fade-left">
          <img
            src={port3}
            alt="Portfolio 3"
            className="rounded-lg shadow-md w-full md:w-[288px] md:h-[412px] object-cover hover:scale-110 transition duration-300"
          />
        </div>
      </div>

      <div className="flex gap-3 mt-3 items-center justify-center">
        <div className="overflow-hidden rounded-2xl" data-aos="fade-up">
          <img
            src={port4}
            alt="Portfolio 4"
            className="rounded-lg shadow-md w-full md:h-[412px] md:w-[456px] object-cover hidden md:block hover:scale-110 transition duration-300"
          />
        </div>

        <div
          className="overflow-hidden rounded-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            src={port5}
            alt="Portfolio 5"
            className="rounded-lg shadow-md w-full md:h-[412px] md:w-[562px] object-cover  hover:scale-110 transition duration-300"
          />
        </div>
      </div>

       <Link to="" className="flex justify-center mt-6">
      <button className="bg-[#000000] text-[#ffffff] py-2 px-6 rounded-lg hover:bg-[#333333] transition duration-300">
       আরও দেখুন
      </button>
      </Link>

      {/* Event & Wedding */}
      <h2 className="text-2xl text-[#000000] md:text-4xl font-regular font-normal text-center py-8 mt-12">
        ইভেন্ট এবং বিয়ের কভারেজ
      </h2>

      <div className="md:flex gap-3 items-center justify-center">
        <div className="overflow-hidden rounded-2xl" data-aos="fade-right">
          <img
            src={wedd}
            alt="Wedding 1"
            className="rounded-lg shadow-md w-full md:h-[412px] md:w-[300px] object-cover hidden md:block hover:scale-110 transition duration-300"
          />
        </div>

        <div className="overflow-hidden rounded-2xl" data-aos="zoom-in">
          <img
            src={wedd2}
            alt="Wedding 2"
            className="rounded-lg shadow-md w-full md:h-[412px] md:w-[433px] object-cover hidden md:block hover:scale-110 transition duration-300"
          />
        </div>

        <div className="overflow-hidden rounded-2xl" data-aos="fade-left">
          <img
            src={wedd3}
            alt="Wedding 3"
            className="rounded-lg shadow-md w-full md:w-[288px] md:h-[412px] object-cover hover:scale-110 transition duration-300"
          />
        </div>
      </div>

      <div className="flex gap-3 mt-3 items-center justify-center">
        <div className="overflow-hidden rounded-2xl" data-aos="fade-up">
          <img
            src={wedd4}
            alt="Wedding 4"
            className="rounded-lg shadow-md w-full md:h-[412px] md:w-[456px] object-cover hover:scale-110 transition duration-300"
          />
        </div>

        <div
          className="overflow-hidden rounded-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            src={wedd5}
            alt="Wedding 5"
            className="rounded-lg shadow-md w-full md:h-[412px] md:w-[562px] object-cover hidden md:block hover:scale-110 transition duration-300"
          />
        </div>
      </div>

      <Link to="/" className="flex justify-center mt-6">
      <button className="bg-[#000000] text-[#ffffff] py-2 px-6 rounded-lg hover:bg-[#333333] transition duration-300">
        আরও দেখুন
      </button>
      </Link>

      {/* Nature Photography */}
      <h2 className="text-2xl text-[#000000] md:text-4xl font-regular font-normal text-center py-8 mt-12">প্রাকৃতিক ফটোগ্রাফি</h2>

      <div className="md:flex gap-3 items-center justify-center">
        <div className="overflow-hidden rounded-2xl" data-aos="flip-left">
          <img
            src={nature}
            alt="Nature 1"
            className="rounded-lg shadow-md w-full md:h-[412px] md:w-[300px] object-cover hidden md:block hover:scale-110 transition duration-300"
          />
        </div>

        <div className="overflow-hidden rounded-2xl" data-aos="zoom-in">
          <img
            src={nature4}
            alt="Nature 2"
            className="rounded-lg shadow-md w-full md:h-[412px] md:w-[433px] object-cover hover:scale-110 transition duration-300"
          />
        </div>

        <div className="overflow-hidden rounded-2xl" data-aos="flip-right">
          <img
            src={nature3}
            alt="Nature 3"
            className="rounded-lg shadow-md w-full md:w-[288px] md:h-[412px] object-cover hidden md:block  hover:scale-110 transition duration-300"
          />
        </div>
      </div>

      <div className="flex gap-3 mt-3 items-center justify-center">
        <div className="overflow-hidden rounded-2xl" data-aos="fade-up">
          <img
            src={nature1}
            alt="Nature 4"
            className="rounded-lg shadow-md w-full md:h-[412px] md:w-[456px] object-cover hidden md:block hover:scale-110 transition duration-300"
          />
        </div>

        <div
          className="overflow-hidden rounded-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            src={nature2}
            alt="Nature 5"
            className="rounded-lg shadow-md w-full md:h-[412px] md:w-[562px] object-cover  hover:scale-110 transition duration-300"
          />
        </div>
      </div>
      <Link to="" className="flex justify-center mt-6">
      <button className="bg-[#000000] text-[#ffffff] py-2 px-6 rounded-lg hover:bg-[#333333] transition duration-300">
        আরও দেখুন
      </button>
      </Link>

      {/* Animal Photography */}
      <h2 className="text-2xl text-[#000000] md:text-4xl font-regular font-normal text-center py-8 mt-12">অ্যানিমাল ফটোগ্রাফি</h2>

      <div className="md:flex gap-3 items-center justify-center">
        <div className="overflow-hidden rounded-2xl" data-aos="zoom-in-up">
          <img
            src={Pet1}
            alt="Animal 1"
            className="rounded-lg shadow-md w-full md:h-[412px] md:w-[300px] object-cover hidden md:block hover:scale-110 transition duration-300"
          />
        </div>

        <div className="overflow-hidden rounded-2xl" data-aos="zoom-in">
          <img
            src={Pet2}
            alt="Animal 2"
            className="rounded-lg shadow-md w-full md:h-[412px] md:w-[433px] object-cover hidden md:block hover:scale-110 transition duration-300"
          />
        </div>

        <div className="overflow-hidden rounded-2xl" data-aos="zoom-in-down">
          <img
            src={Pet}
            alt="Animal 3"
            className="rounded-lg shadow-md w-full md:w-[288px] md:h-[412px] object-cover hover:scale-110 transition duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;