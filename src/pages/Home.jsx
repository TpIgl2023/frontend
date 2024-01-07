import React from 'react'
import NavSigned from '../components/navbars/NavSigned'
import SearchSection from '../components/SearchSection'
import KeyFeatures from '../components/KeyFeatures'
import FooterSigned from '../components/footers/FooterSigned'
import gaucheHome from '../assets/gaucheHome.svg'
import droitHome from '../assets/droitHome.svg'

export default function Home() {
  
  return (
    <div className="w-full">
      <NavSigned/>
      <div className="absolute left-0 z-[-1]">
        <img src={gaucheHome} alt="" />
      </div>
      <div className="absolute right-0 z-[-1]">
        <img src={droitHome} alt="" />
      </div>
      <SearchSection/>
      <div className="py-[100px] max-w-[400px] sm:max-w-[500px] md:max-w-[680px] lg:max-w-[1000px] xl:max-w-[1300px] 2xl:max-w-[1500px] mx-auto ">
        <h1 className="text-6xl font-inter font-bold text-center ">WHAT IS PDFinder ?</h1>
        <p className="py-10 text-center font-inter text-3xl ">Introducing PDFinder, the cutting-edge search engine designed exclusively for scientific articles. PDFinder revolutionizes the way researchers and academics explore the vast realm of scholarly knowledge. With its advanced algorithms and user-friendly interface, PDFinder swiftly sifts through extensive databases to pinpoint relevant scientific articles with unparalleled accuracy.</p>
      </div>
      <KeyFeatures/>
      <FooterSigned/>
    </div>
  )
}
