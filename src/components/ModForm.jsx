import { FormatBoldRounded } from '@mui/icons-material'
import React from 'react'

export default function ModForm() {
    function handleSubmit(event){
        event.preventDefault()
        console.log(event.target.name.value)
        console.log(event.target.email.value)
        console.log(event.target.phone.value)
        console.log(event.target.password.value)
    }
  return (
    <div className="max-w-[600px] mx-auto ">
        <h1 className="font-inter font-bold text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-center py-[75px] sm:py-[100px]">New moderator !</h1>
        
        <form onSubmit={handleSubmit} className="px-12 pb-16">
            <label className="block font-inter text-xl sm:text-2xl pb-5 font-semibold">name :</label>
            <div className="w-full">
                <input type="text" name="name" className="w-full rounded-lg font-inter text-xl px-4 py-3 outline-none " />
            </div>
            <label className="block font-inter text-xl sm:text-2xl py-6 font-semibold">Email :</label>
            <div className="w-full">
                <input type="email" name="email" className="w-full rounded-lg font-inter text-xl px-4 py-3 outline-none" />
            </div>            
            <label className="block font-inter text-xl sm:text-2xl py-6 font-semibold">Phone :</label>
            <div className="w-full">
                <input type="text" name="phone" className="w-full rounded-lg font-inter text-xl px-4 py-3 outline-none"/>
            </div>
            <label className="block font-inter text-xl sm:text-2xl py-6 font-semibold">Password :</label>
            <div className="w-full ">
                <input type="password" name="password" className="w-full rounded-lg font-inter text-xl px-4 py-3 outline-none"/>
            </div>
            <button className="w-full my-10 py-3 bg-main text-white font-inter rounded-xl text-xl sm:text-2xl">Add Moderator</button>
        </form>
    </div>
  )
}
