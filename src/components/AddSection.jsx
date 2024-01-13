import React from 'react'
import Image from "../assets/UrlAddImg.svg"
import { Add } from '@mui/icons-material';

export default function AddSection() {
  function handleSubmit(event){
    event.preventDefault()
    console.log(event.target.url.value);


  }
  return (
    <form onSubmit={handleSubmit}>
    <div className="w-full">
      <div className="py-[60px] sm:py-[100px] w-[80%] mx-auto sm:grid sm:grid-cols-10 sm:grid-rows-1 flex-col items-center">

        <div className="sm:row-span-full sm:col-start-1 sm:col-span-6 w-full  sm:z-10 sm:self-center ">
          <h1 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-inter font-bold w-full text-center ">ADD NEW ARTICLE</h1>
          <div className=" rounded-2xl py-[25px] sm:py-[50px] md:py-[75px] xl:py-[100px] ">
            <form action="">
              <div className="w-full rounded-2xl bg-[#ECECEC] flex">
                <input type="text" placeholder="url..." name="url" className=" w-[85%] rounded-l-2xl text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl bg-[#ECECEC]  outline-none font-inter font-thin py-3 md:py-4 xl:py-5 px-6 text-black z-10" />
                <button type='submit'  className="w-[15%] bg-main rounded-r-2xl text-white">
                  <Add fontSize='large'/>
                </button>
              </div>
            </form>
          </div>
        </div>
              <img src={Image} alt="" className=" sm:row-span-full sm:col-span-7 sm:col-end-11 sm:self-center "/>

      </div>
    </div>
    </form>

  )
}
