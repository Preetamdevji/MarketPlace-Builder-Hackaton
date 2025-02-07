import React from 'react'

const Ratting = () => {
  return (
    <div className="md:hidden flex flex-col w-full sm:w-[278px] h-auto mt-10">
  {/* First Row */}
  <div className="flex justify-between items-center w-full pb-4">
    {/* First Section */}
    <div className="flex flex-col items-center w-1/2 border-r-2 pr-4">
      <h1 className="font-satoshi font-bold text-[24px] sm:text-[28px] text-black">
        200+
      </h1>
      <p className="font-satoshi font-normal text-[14px] sm:text-[16px] text-center text-gray-600 mt-2">
        International Brands
      </p>
    </div>
    {/* Second Section */}
    <div className="flex flex-col items-center w-1/2 pl-4">
      <h1 className="font-satoshi font-bold text-[24px] sm:text-[28px] text-black">
        2,000+
      </h1>
      <p className="font-satoshi font-normal text-[14px] sm:text-[16px] text-center text-gray-600 mt-2">
        High-Quality Products
      </p>
    </div>
  </div>

  {/* Second Row */}
  <div className="flex justify-center items-center w-full mt-4">
    {/* Third Section */}
    <div className="flex flex-col items-center">
      <h1 className="font-satoshi font-bold text-[24px] sm:text-[28px] text-black">
        30,000+
      </h1>
      <p className="font-satoshi font-normal text-[14px] sm:text-[16px] text-center text-gray-600 mt-2">
        Happy Customers
      </p>
    </div>
  </div>
</div>

  )
}

export default Ratting