import { FormatBoldRounded } from '@mui/icons-material'
import React from 'react'

export default function ModEditForm() {
    function handleSubmit(event){
        event.preventDefault()
        console.log(event.target.name.value)
        console.log(event.target.email.value)
        console.log(event.target.phone.value)
        console.log(event.target.password.value)

    
    }
    const mod ={
        name:"Mezenner Fares",
        email:"lm_bouchene@esi.dz",
        id:"83413464"
    }
  return (
    <div className="max-w-[600px] mx-auto ">
        <h1 className="font-inter font-bold text-6xl text-center py-[100px]">Edit Moderator</h1>
        
        <form onSubmit={handleSubmit} className="px-12 pb-16">
            <label className="block font-inter text-xl pb-5 font-semibold">name :</label>
            <div className="w-full">
                <input type="text" name="name" className="w-full rounded-lg font-inter text-xl px-4 py-3 outline-none " />
            </div>
            <label className="block font-inter text-xl py-6 font-semibold">Email :</label>
            <div className="w-full">
                <input type="email" name="email" className="w-full rounded-lg font-inter text-xl px-4 py-3 outline-none" />
            </div>            
            <label className="block font-inter text-xl py-6 font-semibold">Phone :</label>
            <div className="w-full">
                <input type="text" name="phone" className="w-full rounded-lg font-inter text-xl px-4 py-3 outline-none"/>
            </div>
            <label className="block font-inter text-xl py-6 font-semibold">Password :</label>
            <div className="w-full ">
                <input type="password" name="password" className="w-full rounded-lg font-inter text-xl px-4 py-3 outline-none"/>
            </div>
            <button className="w-full my-10 py-3 bg-main text-white font-inter rounded-xl text-2xl">Add Moderator</button>
        </form>
    </div>
  )
}
