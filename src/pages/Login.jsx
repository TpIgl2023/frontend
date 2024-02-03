import React from "react";
import NavUnsigned from "../components/navbars/NavUnsigned";
import FooterUnsigned from "../components/footers/FooterUnsigned";
import { Label } from "@mui/icons-material";
import { Link } from "react-router-dom";

import { GATEWAY_URL } from "../env.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      if (
        event.target.email.value === "" ||
        event.target.password.value === ""
      ) {
        alert("Please fill all the fields");
        return;
      }

      const registerData = {
        email: event.target.email.value,
        password: event.target.password.value,
      };

      const res = await axios.post(`${GATEWAY_URL}/auth/login`, registerData);
      console.log("hi"+user)
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        console.log(res.data.token);
        if (res.data.user.status === "administrator") {
          navigate("/ajouter");
        } else if (res.data.user.type === "user") {
          navigate("/home");
        } else {
          navigate("/home");// fares i changed this nta dertha articles there was an error
        }
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
              className="mx-auto  px-6 sm:px-16 pb-[100px] pt-[50px]"
            >
              <h2 className="text-center py-12 text-[#1B76FF] font-inter font-semibold text-3xl xs:text-4xl sm:text-5xl 2xl:text-6xl">
                Welcome back !
              </h2>

              <div className="flex flex-col pb-[10px] pt-[15px] sm:pb-[20px] sm:pt-[30px] md:pb-[50px] md:pt-[50px]     ">
                <label className="font-inter text-2xl sm:text-3xl py-5 ">
                  Email :
                </label>
                <input
                  id="email_in"
                  name="email"
                  type="email"
                  className="bg-[#F4F4F4]  p-4 text-2xl font-inter rounded-xl focus:outline-[#1B76FF]"
                />
              </div>
              <div className="flex flex-col pb-[50px] sm:pb-[70px] md:pb-[100px]     ">
                <label className="font-inter text-2xl sm:text-3xl py-5 ">
                  Password :
                </label>
                <input
                  id="password_in"
                  name="password"
                  type="password"
                  className="bg-[#F4F4F4]  p-4 text-2xl font-inter rounded-xl focus:outline-[#1B76FF]"
                />
              </div>
              <button
                id="login_button"
                className="w-full text-white bg-[#1B76FF] text-2xl sm:text-3xl text-center py-2 sm:py-4 rounded-xl"
              >
                Log in
              </button>
              <p className="text-center pt-5 text-[#6E6868] font-inter text-lg">
                Dont have an account ?{" "}
                <Link to="/Signup" className="text-[#1B76FF]">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <FooterUnsigned />
    </div>
  );
}
