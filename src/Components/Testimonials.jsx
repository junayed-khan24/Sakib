
import React from "react";

import user1 from "../assets/wadding.jfif";
import user2 from "../assets/portrate2.jpg";
import user3 from "../assets/portrate3.jpg";  

const testimonials = [
  {
    text: "আমাদের জীবনের সবচেয়ে সুন্দর দিনটিকে আপনি যেভাবে ছবিতে ধরে রেখেছেন, তা সত্যিই অসাধারণ। প্রতিটি ছবি আমাদের কাছে অমূল্য স্মৃতি হয়ে থাকবে।",
    name: "রাফি আলম",
    img: user1,
  },
  {
    text: "অত্যন্ত দক্ষ, আন্তরিক এবং পেশাদার একজন ফটোগ্রাফার। পুরো ফটোশুটের অভিজ্ঞতা ছিল দারুণ উপভোগ্য।",
    name: "নোভা সুলতানা",
    img: user2,
  },
  {
    text: "প্রতিবারই আমার ছবিগুলো এত সুন্দর আসে যে আমি মুগ্ধ হয়ে যাই। আপনার কাজের মান সত্যিই প্রশংসনীয়।",
    name: "মারিয়া ইসলাম",
    img: user3,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-base-200 py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-4xl font-normal font-regular mb-3 text-[#000000]">
            আমাদের সম্মানিত ক্লায়েন্টদের অভিমত
          </h2>

          <p className="text-secondary text-center font-regular font-normal text-sm md:text-xl sm:text-lg mb-10">
            আমাদের ক্লায়েন্টদের সন্তুষ্টিই আমাদের সবচেয়ে বড় অর্জন। তাদের বাস্তব অভিজ্ঞতা ও আন্তরিক মতামতই আমাদের কাজের অনুপ্রেরণা।
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-base-100 rounded-2xl border border-gray-200 p-8 shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between min-h-[200px]"
            >
              {/* Quote */}
              <p className="text-[#000000] text-sm md:text-base mb-8 leading-relaxed font-medium">
                “{item.text}”
              </p>

              {/* User */}
              <div className="flex items-center gap-3">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-gray-300"
                />
                <span className="text-sm font-medium text-[#585858]">
                  {item.name}
                </span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
