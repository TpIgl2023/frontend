import React, { useState } from 'react'
import ProfilePic from "../assets/ProfilePic.svg"
import { Edit, Label } from '@mui/icons-material'
export default function ProfileAdmin() {
  
  const user =
    {
      id: "859365",
      full_name: "Yekene sofiane",
      email:"yekenetyrone@love.com",
      phone_number:"099999999",
    }

    const [name,setName]=useState(user.full_name);
    const [email,setEmail]=useState(user.email);
    const [phone_number,setPhone]=useState(user.phone_number);
    

  function EditInfo(event){
    event.preventDefault()
    if(event.target.NewName.value != ""){
      setName(event.target.NewName.value);
      user.full_name=event.target.NewName.value;
    }
    if(event.target.NewEmail.value != ""){
      setEmail(event.target.NewEmail.value);
      user.email=event.target.NewEmail.value;

    }
    if(event.target.NewNumber.value != ""){
      setPhone(event.target.NewNumber.value);
      user.phone_number=event.target.NewNumber.value;
    }

  }
  return (
    <form onSubmit={EditInfo} className="py-[100px]">

    <div className="bg-gradient-to-r from-[#F5F6F8] via-[#F5F6F8] to-[#EFE8F0] pb-[70px] ,x-auto">
      <div className="bg-white max-w-[900px] mx-auto rounded-2xl ">
        <div className="flex justify-evenly py-10 items-center">
            <div className="flex justify-center items-center h-[70px] w-[70px] rounded-full bg-[#E1F8FF]">
              <h1 className="font-inter font-semibold text-[#8966F5] text-2xl">YS</h1>
            </div>
            <h1 className="font-inter font-semibold text-2xl">User ID: <span className="font-inter text-xl text-[#A9AABC] px-5 font-normal">id {user.id }</span></h1>
        </div>
        <div className=" pl-[30%] py-5 flex">
          <label className="font-inter font-semibold text-2xl  ">Full name :</label>
          <input className="font-inter text-xl text-[#A9AABC] px-5 font-normal outline-none"  placeholder={`${name} `} name="NewName" />

        </div>
        <div className=" pl-[30%] py-10 flex">
          <label className="font-inter font-semibold text-2xl  ">Email :</label>
          <input className="font-inter text-xl text-[#A9AABC] px-5 font-normal outline-none"  placeholder={`${email} `} name="NewEmail" />
        </div>
    
      </div>
      <div className="mt-[70px] bg-white max-w-[900px] mx-auto rounded-2xl ">
        <div className="flex py-16 items-center w-full">
          <label className="font-inter font-semibold pl-[10%] pr-[15%] text-2xl">Phone Number :</label>
          <div className="border-[#A9AABC] border-2">
            <input placeholder={`${phone_number} `} className="w-[300px] outline-none py-1 text-center font-inter text-xl text-[#A9AABC]" name="NewNumber" />
          </div>
        </div>
      </div>

    
      <div className="mt-[70px] flex justify-center mx-auto">
          <button type="submit" className=" text-2xl font-inter font-semibold text-white bg-[#1B76FF] py-5 px-10 rounded-xl" >Edit information</button>
      </div>
    </div>
    </form>

  )
}