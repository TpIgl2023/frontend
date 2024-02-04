import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterUnsigned() {
  return (
    <div className="h-[450px] w-full bg-gradient-to-r from-[#F5F6F8]  via-[#F5F6F8] to-[#EFE8F0] flex flex-col justify-between">
      <div className="flex justify-evenly py-16">
        <div className="hidden md:block">
          <div className="flex flex-col gap-8 w-[250px] lg:w-[400px] ">
              <h1 className="font-jost text-3xl lg:text-5xl">PDFinder</h1>
              <p className="font-inter text-black/[69%] text-xl">PDFinder is a student project as part of IGL 2023. ESI-ALGER</p>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex flex-col gap-4 lg:gap-6 w-[200px] items-center ">
              <h1 className="font-inter font-semibold text-lg lg:text-2xl">Navigation links</h1>
              <Link to="/Signup" className="font-inter text-black/[69%] text-lg lg:text-xl">sign up</Link>
              <Link to="/Login" className='font-inter text-black/[69%] text-lg lg:text-xl'>log in</Link>
          </div>
        </div>
      
        <div className="flex flex-col gap-6 lg:gap-8  w-[200px] items-center ">
            <h1 className="font-inter text-4xl font-bold md:hidden"> PDFinder</h1>
            <h1 className="font-inter font-semibold text-xl lg:text-2xl"> Contactez nous</h1>
            <p className="font-inter text-black/[69%] text-lg lg:text-xl">dare elbeida alger</p>
            <p className="underline font-inter text-black/[69%] text-lg lg:text-xl">service@esi.dz</p>
            <p className="font-inter text-black/[69%] text-lg lg:text-xl">+21-25533-0000</p>

        </div>
        
      </div>
      <div className="flex justify-center pb-4 text-main text-xl sm:text-2xl font-inter">
         2023 pdf .All rights reserved 
     </div>
    </div>
  )
}
