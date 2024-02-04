import React from 'react'

export default function NonExisting() {
  return (
    <div className="h-[100vh] w-[100%]">
        <div className="flex flex-col justify-center items-center h-full w-full gap-[50px]">
            <h1 className="text-4xl md:text-5xl text-main font-bold">Sorry !</h1>
            <p className="text-[#808080] text-2xl sm:text-3xl md:text-4xl font-semibold w-[50%] text-center">the page that you are trying to access does not exist</p>
        </div>
    </div>
  )
}
