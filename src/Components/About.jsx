import React, { useEffect } from "react";
import img from "../assets/photographer.jpg";
import im2 from "../assets/photographerr.jpg"
import img1 from "../assets/photographer1.jfif"
import img2 from "../assets/photographer2.jpg"
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { ImOpt } from "react-icons/im";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
   <div className="bg-base-100 w-full min-h-screen pt-12 md:pt-24">
     <div className="max-w-7xl mx-auto px-4 py-10 lg:py-16">

      {/* Heading */}
        <h2
          data-aos="fade-right"
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
        >

          <span className="text-primary">আমি </span>সাকিব হাসান
        </h2>

        <p
          data-aos="fade-left"
          className="font-normal font-regular text-secondary text-sm md:text-xl sm:text-lg mb-10 max-w-3xl"
        >
          A passionate photographer with an eye for honest, powerful moments
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <img
            data-aos="zoom-in"
            src={img}
            alt=""
            className="w-full h-64 sm:h-80 md:h-full object-cover rounded-2xl shadow-xl"
          />

          <div
            data-aos="fade-up"
            className="grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 md:block hidden space-y-2"
          >
            <img
              src={img1}
              alt=""
              className="w-full h-48 sm:h-64 object-cover rounded-2xl shadow-xl"
            />
            <img
              src={img2}
              alt=""
              className="w-full h-48 sm:h-64 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      
      {/* My Story Section */}
      <section className="py-20 px-4 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Text */}
            <div data-aos="fade-right" className="text-center space-y-6 md:mx-12">
              <h2 className="text-3xl md:text-4xl font-normal">
                আমার গল্প
              </h2>

              <p className="text-[#707070] text-xl leading-relaxed">
                একটি সাধারণ ক্যামেরা আর একটি সূর্যাস্ত থেকেই শুরু হয়েছিল আমার এই পথচলা।
              </p>

              <p className="text-[#707070] text-xl leading-relaxed">
                সেই থেকে আমি খুঁজে ফিরি জীবনের সত্যিকারের মুহূর্তগুলো—
                হাসি, আবেগ, আর সেই ছোট ছোট দৃশ্য,
                যেগুলো আমাদের জীবনকে অর্থবহ করে তোলে।
              </p>

              <p className="text-[#707070] text-xl leading-relaxed">
                আমার কাছে ফটোগ্রাফি শুধু ছবি তোলা নয়,
                এটি আপনার জীবনের গল্পগুলোকে চিরদিনের জন্য ধরে রাখার একটি মাধ্যম।
              </p>
            </div>

            {/* Image */}
            <div data-aos="zoom-in-up" className="flex justify-center  items-center">
              <img
                src={img2}
                alt=""
                className=" lg:w-full shadow-xl border-4 hover:scale-105 transition"
              />
            </div>
          </div>

          {/* Quote */}
          {/* <div data-aos="fade-up" className="text-center mt-36 md:mt-48 md:px-36">
            <h3 className="text-xl md:text-4xl max-w-3xl mx-auto leading-relaxed">
              আমি বিশ্বাস করি, সেরা ছবি তখনই তৈরি হয়
              যখন আপনি নিজেকে স্বাভাবিকভাবে প্রকাশ করেন—
              কোনো সাজানো মুহূর্ত নয়, বরং একদম বাস্তব।
            </h3>
          </div> */}
        </div>
      </section>

      {/* Behind the Lens */}
      <section className="bg-base-100 py-16 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-12">
          <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-normal">
            লেন্সের আড়ালে
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-secondary mt-3 max-w-xl mx-auto text-xl leading-relaxed"
          >
            ক্যামেরার বাইরে আমি খুব সাধারণ একজন মানুষ—
            ঘুরতে ভালোবাসি, এক কাপ কফিতে সময় কাটাই,
            আর সূর্যাস্তের সৌন্দর্যে হারিয়ে যাই।
          </p>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          <div data-aos="fade-right" className="overflow-hidden rounded-2xl">
            <img src={img} alt="" className="w-full md:h-[600px] object-cover hover:scale-110 transition duration-500" />
          </div>

          <div data-aos="fade-up" data-aos-delay="200" className="grid grid-rows-3 gap-5 md:h-[600px]">
            <div className="overflow-hidden rounded-2xl">
              <img src={img} alt="" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
            </div>

            <div className="overflow-hidden rounded-2xl">
              <img src={img} alt="" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
            </div>

            <div className="overflow-hidden rounded-2xl">
              <img src={img} alt="" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
            </div>
          </div>

          <div data-aos="fade-left" data-aos-delay="400" className="overflow-hidden rounded-2xl">
            <img src={img} alt="" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
          </div>
        </div> */}
      </section>

      {/* CTA */}
      {/* <div data-aos="zoom-in" className="text-center my-16">
        <h2 className="text-2xl md:text-4xl font-normal">
          আপনার বিশেষ মুহূর্তগুলো ধরে রাখতে প্রস্তুত?
        </h2>

        <p className="text-secondary mt-3 text-sm md:text-xl leading-relaxed">
          চলুন কথা বলি—আপনার গল্পকে কীভাবে সুন্দরভাবে ফ্রেমে বন্দী করা যায়।
        </p>
      </div> */}

      <div data-aos="fade-up" data-aos-delay="200" className="text-center">
        <Link
          to="/booking"
          className="btn btn-primary bg-black text-white rounded-xl px-8 mx-auto mb-8 md:mb-16"
        >
          এখনই বুক করুন
        </Link>
      </div>

    </div>
   </div>
  );
};

export default About;