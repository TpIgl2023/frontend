import React, { useState } from 'react'
import ProfilePic from "../assets/ProfilePic.svg"
import { Edit, Label } from '@mui/icons-material'
export default function ProfileInfo() {
  
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
      console.log(event.target.NewName.value);

    }
    if(event.target.NewEmail.value != ""){
      setEmail(event.target.NewEmail.value);
      user.email=event.target.NewEmail.value;
      console.log(event.target.NewEmail.value);

    }
    if(event.target.NewNumber.value != ""){
      setPhone(event.target.NewNumber.value);
      user.phone_number=event.target.NewNumber.value;
      console.log(event.target.NewNumber.value);
    }

  }
  return (
    <form onSubmit={EditInfo}>

    <div className="bg-gradient-to-r from-[#F5F6F8] via-[#F5F6F8] to-[#EFE8F0] pb-[70px] ,x-auto">
      <h1 className="text-center font-inter font-semibold text-5xl xl:text-6xl py-[50px] sm:py-[75px] md:py-[100px]">Profile</h1>
      <div className="bg-white w-[90%] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[900px] mx-auto rounded-2xl ">
        <div className="flex justify-evenly py-10 items-center ">
            <div className="flex justify-center items-center h-[60px] sm:h-[70px] w-[60px] sm:w-[70px] rounded-full bg-[#E1F8FF]">
              <h1 className="font-inter font-semibold text-[#8966F5] text-2xl">YS</h1>
            </div>
            <h1 className="font-inter font-semibold text-xl sm:text-2xl">User ID: <span className="font-inter text-lg sm:text-xl text-[#A9AABC] px-2 sm:px-5 font-normal">id {user.id }</span></h1>
        </div>
        <div className="pl-[10%] sm:pl-[20%] lg:pl-[25%] py-5 flex flex-col sm:flex-row  gap-[10px] sm:gap-[20px] justify-center sm:justify-normal sm:items-center">
          <label className="font-inter font-semibold text-xl lg:text-2xl w-full sm:w-[150px] lg:w-[200px] ">Full name :</label>
          <input className="border-[#A9AABC] border-2 py-2 w-[90%] sm:w-[250px] lg:w-[280px] font-inter text-lg sm:text-xl text-[#A9AABC] px-5 font-normal outline-none"  placeholder={`${name} `} name="NewName" />
        </div>
        <div className=" pl-[10%] sm:pl-[20%] lg:pl-[25%]  py-10 flex justify-center sm:justify-normal sm:items-center gap-[10px] sm:gap-[20px] flex-col sm:flex-row">
          <label className="font-inter font-semibold text-xl lg:text-2xl w-full sm:w-[150px] lg:w-[200px] ">Email :</label>
          <input  type="email" className=" border-[#A9AABC] border-2 py-2 w-[90%] sm:w-[250px] lg:w-[280px] font-inter text-lg sm:text-xl text-[#A9AABC] px-5 font-normal outline-none"  placeholder={`${email} `} name="NewEmail" />
        </div>
    
      </div>
      {/*PROFILE END  */}

      <div className="mt-[70px] bg-white w-[90%] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[900px] mx-auto rounded-2xl ">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-normal sm:items-center py-16 w-full pl-[10%] sm:pl-[15%] lg:pl-[20%] gap-[10px] sm:gap-0">
          <label className="w-full sm:w-[200px] lg:w-[250px] font-inter font-semibold text-xl lg:text-2xl">Phone Number :</label>
          <input placeholder={`${phone_number} `} className="border-[#A9AABC] border-2 py-2 w-[90%] sm:w-[250px] lg:w-[280px] text-center font-inter text-lg sm:text-xl text-[#A9AABC] px-5 font-normal outline-none" name="NewNumber" />
        </div>
      </div>
     { /*Number END  */}
      <div className="mt-[70px] bg-white w-[90%] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[900px] mx-auto rounded-2xl ">
        <div className="flex flex-col sm:flex-row  py-16 ustify-center sm:justify-normal sm:items-center w-full pl-[10%] sm:pl-0 gap-[10px] sm:gap-0">
          <div className="w-full sm:w-[200px] lg:w-[250px]  ml-0 sm:ml-[15%] lg:ml-[20%] ">
                <label className="font-inter font-semibold text-xl lg:text-2xl ">Old password :</label>
          </div>          
          <input type="password" className="border-[#A9AABC] border-2 w-[90%] sm:w-[250px] lg:w-[280px] outline-none py-1 text-center font-inter text-xl text-[#A9AABC]"/>
        </div>
        <div className="flex flex-col sm:flex-row  ustify-center sm:justify-normal sm:items-center w-full pl-[10%] sm:pl-0 gap-[10px] sm:gap-0">
           <div className="w-full sm:w-[200px] lg:w-[250px]  ml-0 sm:ml-[15%] lg:ml-[20%]">
                <label className="font-inter font-semibold text-xl lg:text-2xl  ">New password :</label>
            </div>          
            <input type="password" className="border-[#A9AABC] border-2 w-[90%] sm:w-[250px] lg:w-[280px] outline-none py-1 text-center font-inter text-xl text-[#A9AABC]"/>
        </div>
        <div className="flex flex-col sm:flex-row  py-16 ustify-center sm:justify-normal sm:items-center w-full pl-[10%] sm:pl-0 gap-[10px] sm:gap-0">
          <div className="w-full sm:w-[200px] lg:w-[250px] ml-0 sm:ml-[15%] lg:ml-[20%]">
              <label className="font-inter font-semibold text-xl lg:text-2xl  ">New password :</label>
          </div>
            <input type="password" className="border-[#A9AABC] border-2 w-[90%] sm:w-[250px] lg:w-[280px] outline-none py-1 text-center font-inter text-xl text-[#A9AABC]"/>
        </div>
      </div>
      {/*password END  */}

      <div className="mt-[70px] flex  justify-center mx-auto">
          <button type="submit" className="sm:w-[300px] lg:w-[500px] text-2xl lg:text-3xl font-inter font-semibold text-white bg-main py-5 px-10 rounded-xl" >Edit information</button>
      </div>
    </div>
    </form>

  )
}
