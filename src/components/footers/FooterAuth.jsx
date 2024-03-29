import React from 'react'

export default function FooterAuth() {

  return (
    <div className="h-[400px] w-full bg-main flex flex-col justify-between text-white">
      <div className="flex justify-evenly py-14">
        <div className="hidden md:block">
          <div className="flex flex-col gap-8 w-[250px] lg:w-[400px] ">
              <h1 className="font-jost text-3xl lg:text-5xl">PDFinder</h1>
              <p className="font-inter  text-xl">PDFinder is a student project as part of IGL 2023. ESI-ALGER </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:gap-8  w-[200px] items-center ">
            <h1 className="font-inter text-4xl font-bold md:hidden"> PDFinder</h1>
            <h1 className="font-inter font-semibold text-xl lg:text-2xl"> Contact us</h1>
            <p className="font-inter text-lg lg:text-xl">dar El Beida Alger</p>
            <p className="underline font-inter  text-lg lg:text-xl">service@esi.dz</p>
            <p className="font-inter  text-lg lg:text-xl">+21-25533-0000</p>

        </div>
        
      </div>
      <div className="flex justify-center pb-2 text-white text-xl sm:text-2xl font-inter">
         2023 pdf .All rights reserved 
     </div>
    </div>
  )
}