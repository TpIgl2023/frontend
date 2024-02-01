import React from "react";
import LocationIcon from "../../assets/LocationIcon.svg";
import MailIcon from "../../assets/MailIcon.svg";
import PhoneIcon from "../../assets/PhoneIcon.svg";

export default function Help() {
  return (
    <div>
      <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-inter font-bold text-center py-[50px] sm:py-[80px]">
        Logo
      </h1>
      <div className="h-[600px] w-[90%] sm:w-[80%] bg-[#1B76FF] mx-auto rounded-[25px] flex flex-col items-center justify-between py-10 text-white">
        <p className=" font-semibold text-2xl xs:text-3xl font-inter">
          Contact Us!
        </p>
        <div className="flex flex-col gap-12">
          <div className="flex gap-8 sm:gap-10 ">
            <img src={LocationIcon} alt="" className="" />
            <p className="text-lg xs:text-xl font-inter ">dar el Beida alger</p>
          </div>
          <div className="flex gap-8 sm:gap-10">
            <img src={MailIcon} alt="" className="" />
            <p className="text-lg xs:text-xl font-inter underline-white">
              ln_bouchene@esi.dz
            </p>
          </div>
          <div className="flex gap-8 sm:gap-10">
            <img src={PhoneIcon} alt="" className="" />

            <p className="text-lg xs:text-xl font-inter">+21-25533-0000</p>
          </div>
        </div>
        <p className="text-xl sm:text-2xl font-inter font-semibold">
          {" "}
          2023 pdf .All rights reserved
        </p>
      </div>
    </div>
  );
}
