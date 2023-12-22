import React from 'react'
import NavUnsigned from '../components/navbars/NavUnsigned'
import FooterUnsigned from '../components/footers/FooterUnsigned'
import { Label } from '@mui/icons-material'
import { Link } from 'react-router-dom'
export default function Signup() {
  function handleSubmit(event){
    event.preventDefault()
    console.log(event.target.username.value)
    console.log(event.target.Fullname.value)
    console.log(event.target.email.value)

  }
  return (
    <div>
      <NavUnsigned/>
      <div className="bg-gradient-to-r from-[#F5F6F8] via-[#F5F6F8]  to-[#EFE8F0]">
        <div className=" max-w-[700px] mx-auto py-[100px] ">
            <div className="h-full w-full bg-white rounded-[60px] ">
                <form onSubmit={handleSubmit} className="mx-auto px-16 pb-[100px]">
                    <h2 className="text-center py-12 text-[#1B76FF] font-inter font-semibold text-6xl">Register new user</h2>
                    <div className="flex flex-col pt-10">
                        <label className="font-inter text-3xl py-8 ">User Name</label>
                        <input name="username" type="text" className="bg-[#F4F4F4] p-4 text-2xl font-inter rounded-xl  focus:outline-[#1B76FF]" />
                    </div>
                    <div className="flex flex-col ">
                        <label className="font-inter text-3xl py-5 ">Full Name</label>
                        <input name="Fullname" type="text" className="bg-[#F4F4F4]  p-4 text-2xl font-inter rounded-xl focus:outline-[#1B76FF]" />
                    </div>
                    <div className="flex flex-col pb-[100px] ">
                        <label className="font-inter text-3xl py-5 ">Email</label>
                        <input name="email" type="text" className="bg-[#F4F4F4]  p-4 text-2xl font-inter rounded-xl focus:outline-[#1B76FF]" />
                    </div>
                    <button className="w-full text-white bg-[#1B76FF] text-3xl text-center py-4 rounded-xl">Register</button>
                    <p className="text-center pt-5 text-[#6E6868] font-inter text-lg">already have an account ? <Link to="/Login" className="text-[#1B76FF]">Log in</Link></p>
                </form>
            </div>
        </div>
      </div>
      <FooterUnsigned className=""/>
    </div>
  )
}
