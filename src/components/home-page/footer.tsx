import React from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { VscTwitter } from "react-icons/vsc";
import { TfiEmail } from "react-icons/tfi";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="max-w-screen-2xl mx-auto w-full h-auto">
      {/* Newsletter Section */}
      <div className="flex flex-col md:flex-row items-center bg-black lg:w-[1240px] sm:w-auto h-auto rounded-xl justify-between p-8 max-w-screen-2xl mx-auto">
        {/* Heading */}
        <h1 className="font-integral font-extrabold md:text-4xl text-2xl text-white text-start md:text-left md:w-1/2">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>

        {/* Input and Subscription Button */}
        <div className="flex flex-col gap-2 justify-center items-center md:w-1/2 mt-4 md:mt-0 space-y-4 md:space-y-0 md:space-x-4 ">
          <div className="flex items-center bg-white rounded-full px-5 py-2 w-full md:w-auto md:ml-4 font-satoshi">
            <TfiEmail className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Enter your email address"
              className="outline-none flex-grow text-gray-500"
            />
          </div>

          <button className="bg-white text-black font-bold py-2 px-8 rounded-full w-full md:w-auto">
            Subscribe to Newsletter
          </button>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="bg-gray-100 text-black py-12">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start">
            {/* Left Section: Logo and Social Icons */}
            <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
              <h1 className="font-integral font-extrabold text-3xl mb-4">SHOP.CO</h1>
              <p className="text-[18px] font-satoshi text-center md:text-left mb-4 md:max-w-xs">
                We have clothes that suit your style and which you’re proud to wear. From women to men.
              </p>
              <div className="flex space-x-4">
                <VscTwitter className="text-2xl cursor-pointer hover:text-black" />
                <FaFacebook className="text-2xl cursor-pointer hover:text-black" />
                <FaInstagram className="text-2xl cursor-pointer hover:text-black" />
                <FaGithub className="text-2xl cursor-pointer hover:text-black" />
              </div>
            </div>

            {/* Center Section: Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left font-satoshi">
              <div>
                <h3 className="font-bold text-lg mb-2">COMPANY</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-500 hover:text-black">About</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-black">Features</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-black">Works</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-black">Career</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">HELP</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-500 hover:text-black">Customer Support</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-black">Delivery Details</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-black">Terms & Conditions</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-black">Privacy Policy</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">FAQ</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-500 hover:text-black">Account</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-black">Manage Deliveries</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-black">Orders</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-black">Payments</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">RESOURCES</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-500 hover:text-black">Free eBooks</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-black">Development Tutorials</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-black">How-to Blog</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-black">YouTube Playlist</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 border-t pt-4">
            <div className="text-center md:text-left font-satoshi text-sm text-gray-500">
              &copy; {new Date().getFullYear()} SHOP.CO. All Rights Reserved.
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Image src="/footer/img1.png" alt="Visa" width={60} height={60} />
              <Image src="/footer/img2.png" alt="MasterCard" width={60} height={60} />
              <Image src="/footer/img3.png" alt="PayPal" width={60} height={60} />
              <Image src="/footer/img4.png" alt="Apple Pay" width={60} height={60} />
              <Image src="/footer/img5.png" alt="Google Pay" width={60} height={60} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
