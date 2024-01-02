import React from 'react'
import Image from "../assets/UrlAddImg.svg"

export default function AddSection() {
  function handleSubmit(event){
    event.preventDefault()
    console.log(event.target.url.value);


  }
  return (
    <form onSubmit={handleSubmit}>
    <div className="w-full">
      <div className="py-[100px] w-[80%] mx-auto grid grid-cols-10">

        <div className="row-span-full col-start-1 col-span-6 w-full  z-10 self-center">
          <h1 className="text-6xl font-inter font-bold ">ADD NEW ARTICLE</h1>
          <div className=" rounded-2xl  py-[100px] ">
            <input type="text" placeholder="url..." name="url" className="rounded-2xl text-5xl bg-[#ECECEC]  outline-none font-inter font-thin py-5 px-6 text-black z-10" />
          </div>
        </div>
              <img src={Image} alt="" className=" row-span-full col-span-7 col-end-11 self-center "/>

      </div>
    </div>
    </form>

  )
}
