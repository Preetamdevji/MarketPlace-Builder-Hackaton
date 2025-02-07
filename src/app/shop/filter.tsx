"use client";
import React, { useState } from "react";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Filter = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  return (
    // Use a relative container here so we can layer our fixed elements
    <div className="relative">
      {/* Mobile Header (full-width text) */}
      <div className="w-full md:hidden mb-2 text-center">
        <h1 className="text-[23px] font-bold">Casual</h1>
        <p className="text-[12px]">Showing 1-10 of 100 Products</p>
      </div>

      {/* Toggle Button: Use fixed positioning so it’s always in the top-right of the viewport on mobile */}
      <button
        className="fixed md:hidden right-4 top-4 bg-black text-white p-2 rounded-full shadow-lg z-50"
        onClick={() => setIsFilterVisible(!isFilterVisible)}
      >
        <HiAdjustmentsVertical className="text-[20px]" />
      </button>

      {/* Sidebar Filters */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-gray-50 p-4 border shadow-lg rounded-xl border-gray-300 z-40 transform transition-transform duration-300
          ${isFilterVisible ? "translate-x-0" : "translate-x-full"}
          md:static md:w-[310px] md:translate-x-0 overflow-y-auto`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Filters</h2>
          <button
            onClick={() => setIsFilterVisible(false)}
            className="text-gray-500 text-xl md:hidden"
          >
            ✕
          </button>
        </div>

        {/* Filter Categories */}
        <ul className="space-y-2 p-2 border-t">
          {["T-Shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map(
            (style) => (
              <li
                key={style}
                className="cursor-pointer hover:text-black flex justify-between items-center hover:bg-slate-100 rounded-xl py-2 px-2"
              >
                {style}
                <IoIosArrowForward />
              </li>
            )
          )}
        </ul>

        {/* Price Range */}
        <div className="mb-6 border-t p-2">
          <h3 className="text-lg font-semibold mb-2">Price</h3>
          <input type="range" min="50" max="200" className="w-full" />
          <div className="flex justify-between text-lg text-black">
            <span>$50</span>
            <span>$200</span>
          </div>
        </div>

        {/* Colors */}
        <div className="mb-6 border-t p-2">
          <Accordion type="single" collapsible>
            <AccordionItem value="colors">
              <AccordionTrigger>Colors</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    "#00C12B",
                    "#F50606",
                    "#F5DD06",
                    "#F57906",
                    "#06CAF5",
                    "#063AF5",
                    "#7D06F5",
                    "#F506A4",
                    "#FFFFFF",
                    "#000000",
                  ].map((color) => (
                    <div
                      key={color}
                      className="w-10 h-10 rounded-full cursor-pointer border"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Sizes */}
        <div className="mb-6 p-2">
          <Accordion type="single" collapsible>
            <AccordionItem value="sizes">
              <AccordionTrigger>Sizes</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    "XX-Small",
                    "X-Small",
                    "Small",
                    "Medium",
                    "Large",
                    "X-Large",
                    "XX-Large",
                    "3X-Large",
                    "4x-Large",
                  ].map((size) => (
                    <button
                      key={size}
                      className="border rounded-full px-4 py-2 text-sm hover:bg-black hover:text-white"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Dress Style */}
        <div className="mb-6">
          <Accordion type="single" collapsible>
            <AccordionItem value="dress-style">
              <AccordionTrigger>Dress Style</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2">
                  {["Casual", "Formal", "Party", "Gym"].map((style) => (
                    <li
                      key={style}
                      className="cursor-pointer hover:text-black flex justify-between items-center px-2 py-1"
                    >
                      {style}
                      <MdKeyboardArrowRight />
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Apply Filter Button */}
        <button className="w-full bg-black text-white py-2 mt-4 rounded-lg">
          Apply Filter
        </button>
      </aside>

      {/* Mobile Overlay */}
      {isFilterVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsFilterVisible(false)}
        />
      )}
    </div>
  );
};

export default Filter;
