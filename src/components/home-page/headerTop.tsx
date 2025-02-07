
import React from 'react'
import { RxCross2 } from 'react-icons/rx'

const HeaderTop = () => {
  return (
    <header className="bg-black text-white w-full h-[38px] flex justify-center items-center relative max-w-screen-2xl m-auto">
     
        <div className="flex justify-center items-center">

          {/* left */}
          <h3 className="text-white text-xs sm:text-sm">Sign up and get 20% off to your first oredr.</h3>          
          
          {/* Sign Up Now Button */}
          <button className="text-white hover:text-slate-400 ml-3 sm:text-sm">
            <u>Sign Up Now</u>
          </button>
        </div>
       
        <RxCross2 className="text-white absolute right-[50px] hidden sm:block" />
        
    </header>
  )
}

export default HeaderTop
