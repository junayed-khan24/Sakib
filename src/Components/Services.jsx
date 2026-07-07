import React, { useEffect } from "react";
import img from "../assets/portrate2.jpg";
import img1 from "../assets/wadding.jfif";
import img2 from "../assets/brand1.jfif";
import img3 from "../assets/edite.webp";

import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "পোর্ট্রেট ফটোগ্রাফি",
    img: img,
    rotate: "-rotate-3",
  },
  {
    title: "ইভেন্ট ও ওয়েডিং কভারেজ",
    img: img1,
    rotate: "rotate-1",
  },
  {
    title: "এডিটোরিয়াল ও ব্র্যান্ড শুট",
    img: img2,
    rotate: "-rotate-2",
  },
  
  {
    title: "ইমেজ রিটাচিং ও এডিটিং",
    img: img3,
    rotate: "rotate-3",
  },
];

const Services = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-normal font-regular">
            আমাদের সেবাসমূহ
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mb-14 max-w-2xl mx-auto text-1xl md:text-2xl font-normal text-neutral mt-0 md:mt-4"
          >
            আমরা বিভিন্ন ধরনের ফটোগ্রাফি ও ভিডিওগ্রাফি সেবা প্রদান করি। 
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className={`card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 
              ${service.rotate} hover:rotate-0 
              ${index >= 2 ? "hidden sm:block" : ""}`}
            >
              <figure className="h-56 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </figure>

              <div className="card-body p-4 text-center text-secondary">
                <h3 className="font-medium text-sm md:text-base">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;