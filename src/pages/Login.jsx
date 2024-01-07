import React from 'react'
import NavUnsigned from '../components/navbars/NavUnsigned'
import FooterUnsigned from '../components/footers/FooterUnsigned'
import { Label } from '@mui/icons-material'
import { Link } from 'react-router-dom'
export default function Signup() {
  function handleSubmit(event){
    event.preventDefault()
    console.log(event.target.email.value)
    console.log(event.target.password.value)
  }
  return (
    <div>
      <NavUnsigned/>
      <div className="bg-gradient-to-r from-[#F5F6F8] via-[#F5F6F8]  to-[#EFE8F0]">
        <div className=" max-w-[300px] xs:max-w-[380px] sm:max-w-[500px] lg:max-w-[550px] xl:max-w-[650px] 2xl:max-w-[700px] mx-auto py-[100px] ">
            <div className="h-full w-full bg-white rounded-[60px] ">
                <form onSubmit={handleSubmit} className="mx-auto  px-6 sm:px-16 pb-[100px] pt-[50px]">
                    <h2 className="text-center py-12 text-[#1B76FF] font-inter font-semibold text-3xl xs:text-4xl sm:text-5xl 2xl:text-6xl">Welcome back !</h2>

                    <div className="flex flex-col pb-[10px] pt-[15px] sm:pb-[20px] sm:pt-[30px] md:pb-[50px] md:pt-[50px]     ">
                        <label className="font-inter text-2xl sm:text-3xl py-5 ">Email :</label>
                        <input name="email" type="email" className="bg-[#F4F4F4]  p-4 text-2xl font-inter rounded-xl focus:outline-[#1B76FF]" />
                    </div>
                    <div className="flex flex-col pb-[50px] sm:pb-[70px] md:pb-[100px]     ">
                        <label className="font-inter text-2xl sm:text-3xl py-5 ">Password :</label>
                        <input name="password" type="password" className="bg-[#F4F4F4]  p-4 text-2xl font-inter rounded-xl focus:outline-[#1B76FF]" />
                    </div>
                    <button className="w-full text-white bg-[#1B76FF] text-2xl sm:text-3xl text-center py-2 sm:py-4 rounded-xl">Log in</button>
                    <p className="text-center pt-5 text-[#6E6868] font-inter text-lg">Dont have an account ? <Link to="/Signup" className="text-[#1B76FF]">Sign up</Link></p>
                </form>
            </div>
        </div>
      </div>
      <FooterUnsigned />
    </div>
  )
}
