import { Search } from '@mui/icons-material'
import React from 'react'
import SearchIcon from "../assets/SearchIcon.svg"

export default function SearchSection() {
  return (
    <div className="h-[600px] w-full flex items-center  ">
      <div className="pl-36 flex flex-col gap-[100px]">
        <h1 className="text-5xl font-inter font-bold">
          Never waste Your time again .
        </h1>
        <div className="flex py-5 px-5 bg-white rounded-full shadow-[0px_10px_10px_rgb(128,128,128)]">
          <input className=" w-full text-2xl font-inter font-semibold outline-none px-4 placeholder-opacity-100 placeholder-black" placeholder="General relativity ... "/>
          <img src={SearchIcon} alt="" className="cursor-pointer"/>
        </div>
      </div>
    </div>
  )
}
