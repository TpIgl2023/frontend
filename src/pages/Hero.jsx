import React from 'react'
import {styles} from "../styles"
import {Link} from "react-router-dom"
import NavUnsigned from '../components/navbars/NavUnsigned'
import HeroSection from '../assets/HeroSection.svg'
import { South } from '@mui/icons-material'
import FooterUnsigned from '../components/footers/FooterUnsigned'
export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-[#F5F6F8] via-[#F5F6F8] to-[#EFE8F0] w-full">
      <NavUnsigned/>
      <div className="w-full flex justify-evenly pt-20">
        <div className="w-[700px] py-16">
          <div className="flex-col">
            <h1 className="font-inter font-semibold leading-[90px] text-7xl">Get details of millions of articles with us</h1>
            <p className="font-inter pt-20 text-3xl text-[#4D4D4D]/[69%]">Un texte est une série orale ou écrite de mots perçus comme constituant un ensemble cohérent, porteur de sens et utilisant les structures propres</p>
          </div>
        </div>
        <div className="w-[800px]">
          <div className="flex-col ">
            <img src={HeroSection} className='w-full' alt="" />
          </div>
        </div>
      </div>
      <div className="h-[300px] w-full flex justify-evenly ">
          <div className=" w-[700px] h-[300px] flex flex-col justify-evenly">
              <div className="flex justify-around">
                 <Link className="bg-[#1B76FF] rounded-full px-[40px] py-[8px] text-white text-4xl font-inter font-semibold">
                    Get Started 
                 </Link>
                 <Link className=" text-3xl font-inter py-[8px]">
                    Contact us <span className="text-[#2176FF]"> {'>'} </span>
                 </Link>
              </div>
              <div className="bg-[#E1E1E1] rounded-full w-[45px] h-[45px] flex justify-center items-center"> 
                <South className="text-[#6E6868]"/>
              </div>
          </div>

          <div className="flex flex-col justify-center align-center h-full   w-[800px]">
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
      <FooterUnsigned/>
    </div>
  )
}
