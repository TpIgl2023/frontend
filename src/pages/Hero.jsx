import React from 'react'
import {styles} from "../styles"
import { useState } from 'react'
import {Link} from "react-router-dom"
import NavUnsigned from '../components/navbars/NavUnsigned'
import HeroSection from '../assets/HeroSection.svg'
import HeroSectionMobile from '../assets/HeroSectionMobile.svg'
import { South } from '@mui/icons-material'
import FooterUnsigned from '../components/footers/FooterUnsigned'
export default function Hero() {
  const [visible, setVisible] = useState(true)
 
  const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 0) {
          setVisible(false)
      }
      else if (scrolled <= 0) {
          setVisible(true)
      }
  };

  const scrollToBottom = () => {
      window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth'
          /* you can also use 'auto' behaviour 
             in place of 'smooth' */
      });
  };
  window.addEventListener('scroll', toggleVisible);
  return (
    <div className="bg-gradient-to-br from-[#F5F6F8] via-[#F5F6F8] to-[#EFE8F0] w-full">
      <NavUnsigned/>
      <div className="w-full flex justify-evenly items-center pt-8 sm:pt-20 px-4">
        <div className="w-[150px] xs:w-[200px] sm:w-[320px] md:w-[400px] lg:w-[500px] xl:w-[600px] 2xl:w-[700px] py-16">
          <div className="flex-col">
            <h1 className="font-inter font-semibold lg:leading-[60px] xl:leading-[90px] text-2xl xs:text-3xl sm:text-4xl md:text-5xl xl:text-7xl">Get details of millions of articles with us</h1>
            <p className="font-inter pt-20 text-2xl xl:text-3xl text-[#4D4D4D]/[69%]  hidden lg:block">PDFinder helps you find articles about a large area of topics rapidly , securely and in just simple clicks !</p>
          </div>
        </div>
        <div className="w-[175px] xs:w-[220px]  sm:w-[300px] md:w-[350px] lg:w-[500px] xl:w-[700px] 2xl:w-[800px]">
          <div className="hidden sm:block">
            <div className="flex-col">
              <img src={HeroSection} className='w-full' alt="" />
            </div>
          </div>
          <div className="sm:hidden">
            <div className="flex-col">
              <img src={HeroSectionMobile} className='w-full' alt="" />
            </div>
          </div>
        </div>  
      </div>
      <div className="h-[300px] w-full flex justify-evenly ">
          <div className=" w-[500px] xl:w-[600px] 2xl:w-[700px] h-[300px] flex flex-col justify-evenly">
              <div className="flex justify-around">
                 <Link to="/signup" className="bg-[#1B76FF] rounded-full px-[20px] lg:px-[40px] py-[8px] text-white font-inter font-semibold   text-md md:text-lg lg:text-xl xl:text-4xl ">
                    Get Started 
                 </Link>
                 <Link className=" text-2xl lg:text-3xl font-inter py-[8px] " onClick={scrollToBottom} >
                    Contact us <span className="text-[#0e0e0e]"> {'>'} </span>
                 </Link>
              </div>
              <div className="bg-[#E1E1E1] rounded-full w-[45px] h-[45px] flex justify-center items-center ml-10"> 
                <South className="text-[#6E6868]"/>
              </div>
          </div>
          <div className="hidden md:block">
            <div className="flex flex-col justify-center align-center h-full  w-[400px] xl:w-[700px] 2xl:w-[800px]">
                <div className="flex justify-center align-center">
                    <div className="flex gap-6">
                      <div className="h-[25px] w-[25px] rounded-full border-[#1B76FF] border-[3px]"></div>
                      <div className="h-[25px] w-[25px] rounded-full bg-[#1B76FF]"></div>
                      <div className="h-[25px] w-[25px] rounded-full border-[#1B76FF] border-[3px]"></div>
                      <div className="h-[25px] w-[25px] rounded-full border-[#1B76FF] border-[3px]"></div>


                    </div>
                </div>
            </div>
          </div>

      </div>
      <FooterUnsigned/>
    </div>
  )
}
