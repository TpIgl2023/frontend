import React from "react";
import NavUnsigned from "../components/navbars/NavUnsigned";
import FooterUnsigned from "../components/footers/FooterUnsigned";
import { Label } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { GATEWAY_URL } from "../env.js";

import axios from "axios";

export default function Signup() {
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      if (
        event.target.name.value === "" ||
        event.target.phone_number.value === "" ||
        event.target.email.value === "" ||
        event.target.password.value === ""
      ) {
        alert("Please fill all the fields");
        return;
      }

      const registerData = {
        name: event.target.name.value,
        phone: event.target.phone_number.value,
        email: event.target.email.value,
        password: event.target.password.value,
      };

      console.log(JSON.stringify(registerData));
      const res = await axios.post(
        `${GATEWAY_URL}/auth/register/user`,
        registerData
      );

      console.log(res);

      if (res.status === 200) {
        navigate("/Login");
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.message || "Error while registering user");
    }
  }
  return (
    <div>
      <NavUnsigned />
      <div className="bg-gradient-to-r from-[#F5F6F8] via-[#F5F6F8]  to-[#EFE8F0]">
        <div className=" max-w-[300px] xs:max-w-[380px] sm:max-w-[500px] lg:max-w-[550px] xl:max-w-[650px] 2xl:max-w-[700px] mx-auto py-[100px] ">
          <div className="h-full w-full bg-white rounded-[60px] ">
            <form
              onSubmit={handleSubmit}
              className="mx-auto px-6 md:px-16 pb-[100px]"
            >
              <h2 className="text-center py-12 text-[#1B76FF] font-inter font-semibold text-3xl xs:text-4xl lg:text-5xl 2xl:text-6xl">
                Register new user
              </h2>
              <div className="flex flex-col sm:pt-7 lg:pt-10">
                <label className="font-inter text-xl sm:text-2xl lg:text-3xl py-3 sm:py-8 ">
                  Name :
                </label>
                <input
                  name="name"
                  type="text"
                  className="bg-[#F4F4F4] p-2 sm:p-4 text-2xl font-inter rounded-xl  focus:outline-[#1B76FF]"
                />
              </div>
              <div className="flex flex-col ">
                <label className="font-inter text-xl sm:text-2xl lg:text-3xl py-3 sm:py-8 ">
                  Phone number :
                </label>
                <input
                  name="phone_number"
                  type="text"
                  className="bg-[#F4F4F4]  p-2 sm:p-4 text-2xl font-inter rounded-xl focus:outline-[#1B76FF]"
                />
              </div>
              <div className="flex flex-col ">
                <label className="font-inter text-xl sm:text-2xl lg:text-3xl py-3 sm:py-8 ">
                  Email :
                </label>
                <input
                  name="email"
                  type="email"
                  className="bg-[#F4F4F4]  p-2 sm:p-4 text-2xl font-inter rounded-xl focus:outline-[#1B76FF]"
                />
              </div>
              <div className="flex flex-col pb-[50px] sm:pb-[100px] ">
                <label className="font-inter text-xl sm:text-2xl lg:text-3xl py-3 sm:py-8 ">
                  Password :
                </label>
                <input
                  name="password"
                  type="password"
                  className="bg-[#F4F4F4]  p-2 sm:p-4 text-2xl font-inter rounded-xl focus:outline-[#1B76FF]"
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-[#1B76FF] text-3xl text-center py-4 rounded-xl"
              >
                Register
              </button>
              <p className="text-center pt-5 text-[#6E6868] font-inter text-md sm:text-lg">
                already have an account ?{" "}
                <Link to="/Login" className="text-[#1B76FF]">
                  Log in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <FooterUnsigned className="" />
    </div>
  );
}
