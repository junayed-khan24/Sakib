import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-12 pt-20 md:pt-24">
      
      <div
        data-aos="zoom-in"
        className="w-full max-w-xl bg-base-100 shadow-xl rounded-3xl p-8 md:p-12"
      >

        {/* Title */}
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-semibold text-center mb-10"
        >
          Contact me
        </h2>

        {/* Form */}
        <form className="space-y-6">

          {/* Name */}
          <div data-aos="fade-up" data-aos-delay="100">
            <input
              type="text"
              placeholder="Name here"
              className="input input-bordered w-full rounded-xl"
            />
          </div>

          {/* Email */}
          <div data-aos="fade-up" data-aos-delay="200">
            <input
              type="email"
              placeholder="Email Address"
              className="input input-bordered w-full rounded-xl"
            />
          </div>

          {/* Message */}
          <div data-aos="fade-up" data-aos-delay="300">
            <textarea
              rows="5"
              placeholder="Write your message here"
              className="textarea textarea-bordered w-full rounded-xl resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <button
            data-aos="fade-up"
            data-aos-delay="400"
            type="submit"
            className="
              btn w-full rounded-full
              bg-black text-white border-none
               hover:scale-105
              transition-all duration-300
            "
          >
            Send Message
          </button>
        </form>

        {/* Footer Email */}
        <p
          data-aos="fade-up"
          data-aos-delay="500"
          className="text-left mt-8 text-sm text-secondary font-normal font-regular"
        >
          Or you can mail me at
          <br />
          <span className="font-regular font-normal text-2xl text-black underline">
            hello@sakib.com
          </span>
        </p>

      </div>
    </div>
  );
};

export default Contact;