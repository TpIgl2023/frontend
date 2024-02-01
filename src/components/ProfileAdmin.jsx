import React, { useState } from "react";
import ProfilePic from "../assets/ProfilePic.svg";
import { Edit, Label } from "@mui/icons-material";

import { getAbreviation, updateInfo, updatePassword } from "../utils/utils";

export default function ProfileAdmin() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [userValues, setUserValues] = useState(user);

  function EditInfo(event) {
    event.preventDefault();
    var newValues;
    if (event.target.NewName.value != "") {
      if (!newValues) newValues = {};
      newValues.name = event.target.NewName.value;
    }
    if (event.target.NewEmail.value != "") {
      if (!newValues) newValues = {};
      newValues.email = event.target.NewEmail.value;
    }
    if (event.target.NewNumber.value != "") {
      if (!newValues) newValues = {};
      newValues.phone = event.target.NewNumber.value;
    }

    if (newValues) {
      updateInfo(newValues, setUserValues, userValues);
    } else {
      alert("Please fill any field if you want to edit your information");
    }
  }

  function Edit(event) {
    event.preventDefault();
    EditInfo(event);
  }
  return (
    <form onSubmit={Edit} className="py-[45px] sm:py-[60px]">
      <h1 className="text-center font-inter font-semibold text-5xl xl:text-6xl py-[50px] sm:py-[75px] md:py-[100px]">
        Profile
      </h1>
      <div className="bg-white w-[90%] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[900px] mx-auto rounded-2xl ">
        <div className="flex justify-evenly py-10 items-center ">
          <div className="flex justify-center items-center h-[60px] sm:h-[70px] w-[60px] sm:w-[70px] rounded-full bg-[#E1F8FF]">
            <h1 className="font-inter font-semibold text-[#8966F5] text-2xl">
              {getAbreviation(userValues.name)}
            </h1>
          </div>
        </div>
        <div className="pl-[10%] sm:pl-[20%] lg:pl-[25%] py-5 flex flex-col sm:flex-row  gap-[10px] sm:gap-[20px] justify-center sm:justify-normal sm:items-center">
          <label className="font-inter font-semibold text-xl lg:text-2xl w-full sm:w-[150px] lg:w-[200px] ">
            Full name :
          </label>
          <input
            className="border-[#A9AABC] border-2 py-2 w-[90%] sm:w-[250px] lg:w-[280px] font-inter text-lg sm:text-xl text-[#A9AABC] px-5 font-normal outline-none"
            placeholder={`${userValues.name} `}
            name="NewName"
          />
        </div>
        <div className=" pl-[10%] sm:pl-[20%] lg:pl-[25%]  py-10 flex justify-center sm:justify-normal sm:items-center gap-[10px] sm:gap-[20px] flex-col sm:flex-row">
          <label className="font-inter font-semibold text-xl lg:text-2xl w-full sm:w-[150px] lg:w-[200px] ">
            Email :
          </label>
          <input
            type="email"
            className=" border-[#A9AABC] border-2 py-2 w-[90%] sm:w-[250px] lg:w-[280px] font-inter text-lg sm:text-xl text-[#A9AABC] px-5 font-normal outline-none"
            placeholder={`${userValues.email} `}
            name="NewEmail"
          />
        </div>
      </div>
      {/*PROFILE END  */}

      <div className="mt-[70px] bg-white w-[90%] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[900px] mx-auto rounded-2xl ">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-normal sm:items-center py-16 w-full pl-[10%] sm:pl-[15%] lg:pl-[20%] gap-[10px] sm:gap-0">
          <label className="w-full sm:w-[200px] lg:w-[250px] font-inter font-semibold text-xl lg:text-2xl">
            Phone Number :
          </label>
          <input
            placeholder={`${userValues.phone} `}
            className="border-[#A9AABC] border-2 py-2 w-[90%] sm:w-[250px] lg:w-[280px] text-center font-inter text-lg sm:text-xl text-[#A9AABC] px-5 font-normal outline-none"
            name="NewNumber"
          />
        </div>
      </div>
      <div className="mt-[70px] flex  justify-center mx-auto">
        <button
          type="submit"
          className="sm:w-[300px] lg:w-[500px] text-2xl lg:text-3xl font-inter font-semibold text-white bg-main py-5 px-10 rounded-xl"
        >
          Edit information
        </button>
      </div>
    </form>
  );
}
