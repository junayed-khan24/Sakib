import React from "react";
import { Link,  } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-black text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top section */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-wide">
              সাকিব হাসান
            </h2>
            <p className="text-gray-400 mt-2 text-lg">
              ডিজিটাল ফটোগ্রাফার
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-2 gap-12  ">

            {/* Pages */}
            <div>
              <h3 className="font-semibold mb-4">Pages</h3>
              <ul className="space-y-2 md:space-y-3 text-gray-400">
               <Link to="/">
                <li className="hover:text-white cursor-pointer transition mb-2">Home</li>
               </Link>
              <Link to="/portfolio">
                <li className="hover:text-white cursor-pointer transition mb-2">Portfolio</li>
              </Link>
              <Link to="/about">
                <li className="hover:text-white cursor-pointer transition mb-2">About</li>
              </Link>
              <Link to="/blog">
              <li className="hover:text-white cursor-pointer transition mb-2">Blog</li>
              </Link>
              <Link to="/contact">
              <li className="hover:text-white cursor-pointer transition mb-2">Contact</li>
              </Link>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h3 className="font-semibold mb-4">Socials</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer transition">Facebook</li>
                <li className="hover:text-white cursor-pointer transition">Instagram</li>
                <li className="hover:text-white cursor-pointer transition">X (Twitter)</li>
                <li className="hover:text-white cursor-pointer transition">Snapchat</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-800 text-sm">
           © 2026  sakib hasan. All rights reserved
        </div>

      </div>
    </footer>
  );
};

export default Footer;