import React, { useState } from "react";
import ProfilePic from "../assets/ProfilePic.svg";
import { Edit, Label } from "@mui/icons-material";
import { json } from "react-router-dom";
import { getAbreviation } from "../utils/utils";
import axios from "axios";
import { GATEWAY_URL } from "../env";

export default function ProfileInfo() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [userValues, setUserValues] = useState(user);

  async function updateInfo(newValues) {
    try {
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const res = await axios.put(`${GATEWAY_URL}/profile`, newValues);
      if (res.status === 200) {
        if (!newValues.name) newValues.name = userValues.name;
        if (!newValues.email) newValues.email = userValues.email;
        if (!newValues.phone) newValues.phone = userValues.phone;
        setUserValues(newValues);
        alert("User info updated successfully");
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.message || "Error while updating user");
    }
  }

  async function updatePassword(oldPassword, newPassword) {
    try {
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const res = await axios.put(`${GATEWAY_URL}/profile/password`, {
        oldPassword,
        newPassword,
      });
      if (res.status === 200) {
        console.log(res.data);
        alert("Password updated successfully");
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.message || "Error while updating password");
    }
  }

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
      updateInfo(newValues);
    }

    const oldPassword = event.target.OldPassword.value;
    const newPassword = event.target.NewPassword.value;
    const repeatPassword = event.target.RepeatPassword.value;

    if (!oldPassword || !newPassword || !repeatPassword) {
      return;
    }

    if (newPassword != repeatPassword) {
      alert("New password and repeated password do not match");
      return;
    }

    updatePassword(oldPassword, newPassword);
  }
  return (
    <form onSubmit={EditInfo}>
      <div className="bg-gradient-to-r from-[#F5F6F8] via-[#F5F6F8] to-[#EFE8F0] pb-[70px] ,x-auto">
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
        {/*Number END  */}
        <div className="mt-[70px] bg-white w-[90%] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[900px] mx-auto rounded-2xl ">
          <div className="flex flex-col sm:flex-row  py-16 ustify-center sm:justify-normal sm:items-center w-full pl-[10%] sm:pl-0 gap-[10px] sm:gap-0">
            <div className="w-full sm:w-[200px] lg:w-[250px]  ml-0 sm:ml-[15%] lg:ml-[20%] ">
              <label className="font-inter font-semibold text-xl lg:text-2xl ">
                Old password :
              </label>
            </div>
            <input
              name="OldPassword"
              type="password"
              className="border-[#A9AABC] border-2 w-[90%] sm:w-[250px] lg:w-[280px] outline-none py-1 text-center font-inter text-xl text-[#A9AABC]"
            />
          </div>
          <div className="flex flex-col sm:flex-row  ustify-center sm:justify-normal sm:items-center w-full pl-[10%] sm:pl-0 gap-[10px] sm:gap-0">
            <div className="w-full sm:w-[200px] lg:w-[250px]  ml-0 sm:ml-[15%] lg:ml-[20%]">
              <label className="font-inter font-semibold text-xl lg:text-2xl  ">
                New password :
              </label>
            </div>
            <input
              name="NewPassword"
              type="password"
              className="border-[#A9AABC] border-2 w-[90%] sm:w-[250px] lg:w-[280px] outline-none py-1 text-center font-inter text-xl text-[#A9AABC]"
            />
          </div>
          <div className="flex flex-col sm:flex-row  py-16 ustify-center sm:justify-normal sm:items-center w-full pl-[10%] sm:pl-0 gap-[10px] sm:gap-0">
            <div className="w-full sm:w-[200px] lg:w-[250px] ml-0 sm:ml-[15%] lg:ml-[20%]">
              <label className="font-inter font-semibold text-xl lg:text-2xl  ">
                Repeat password :
              </label>
            </div>
            <input
              name="RepeatPassword"
              type="password"
              className="border-[#A9AABC] border-2 w-[90%] sm:w-[250px] lg:w-[280px] outline-none py-1 text-center font-inter text-xl text-[#A9AABC]"
            />
          </div>
        </div>
        {/*password END  */}

        <div className="mt-[70px] flex  justify-center mx-auto">
          <button
            type="submit"
            className="sm:w-[300px] lg:w-[500px] text-2xl lg:text-3xl font-inter font-semibold text-white bg-main py-5 px-10 rounded-xl"
          >
            Save information
          </button>
        </div>
      </div>
    </form>
  );
}
