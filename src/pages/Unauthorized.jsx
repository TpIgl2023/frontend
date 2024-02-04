import React from 'react'
import NavAuth from '../components/navbars/NavAuth'
import FooterAuth from '../components/footers/FooterAuth'
import UnauthorizedImg from '../assets/UnauthorizedImg.jpg'
export default function Unauthorized() {
  return (
    <div className="flex flex-col min-h-[100vh]">
        <NavAuth/>
        <div className="flex flex-col md:flex-row justify-center md:gap-[40px] lg:gap-[50px] py-5 items-center grow">
            <img src={UnauthorizedImg} alt="" className="w-[90%] md:w-[50%] xl:w-[40%] order-2 md:order-1" />
            <div className=" pt-10 text-xl lg:text-2xl xl:text-3xl font-inter text-[#808080] w-[80%] md:w-[40%] lg:w-[30%] xl:w-[20%] order-1 md:order-2">
                <h1 className="text-4xl xl:text-5xl 2xl:text-6xl text-main font-bold pb-10 text-center">Sorry !</h1>
                <p className="pb-5">you are not authorized to access this page. please check your login credentials or contact the administrator for special access</p>
            </div>
        </div>
        <FooterAuth/>
    </div>
  )
}
