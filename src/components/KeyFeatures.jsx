import React from 'react'
import ComprehensiveData from "../assets/ComprehensiveData.svg"
import IntelligentRecom from "../assets/IntelligentRecom.svg"
import PrecisionSearch from "../assets/PrecisionSearch.svg"

export default function KeyFeatures() {
  return (
    <div className="w-full py-10">
        <h1 className="text-6xl font-inter font-bold text-center pb-[50px]">Key features </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-10">
            <div className="mx-auto max-w-[300px]  sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] my-auto  ">
                <h1 className="font-inter text-4xl font-bold py-8 ">Precision search :</h1>
                <p className="font inter text-3xl ">PDFinder employs state-of-the-art search algorithms to deliver precise results, ensuring researchers find exactly what they need for their studies.</p>
            </div>
            <img src={PrecisionSearch} alt="" className="w-[800px] mx-auto"/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-10">
          <img src={ComprehensiveData} alt="" className="max-w-[400px] sm:max-w-[600px] md:max-w-[800px] mx-auto px-3w-[800px] mx-auto order-2 md:order-1 "/>

            <div className="mx-auto max-w-[300px]  sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] my-auto order-1 md:order-2 ">
                <h1 className="font-inter text-4xl font-bold py-8 ">Comprehensive Database: </h1>
                <p className="font inter text-3xl ">Access a comprehensive database of scientific articles, spanning various disciplines. PDFinder ensures that users have a wealth of scholarly information at their fingertips.</p>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-10">

            <div className="mx-auto max-w-[300px]  sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] my-auto ">
                <h1 className="font-inter text-4xl font-bold py-8 ">Intelligent Recommendations: </h1>
                <p className="font inter text-3xl ">Benefit from intelligent recommendations based on search history and preferences, streamlining the research process and uncovering articles that might have otherwise gone.</p>
            </div>          
            <img src={IntelligentRecom} alt="" className="max-w-[400px] sm:max-w-[600px] md:max-w-[800px] mx-auto px-3"/>
        </div>

    </div>
  )
}
