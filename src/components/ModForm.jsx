import { FormatBoldRounded } from "@mui/icons-material";
import React from "react";
import axios from "axios";
import { GATEWAY_URL } from "../env";
import { useNavigate } from "react-router-dom";

export default function ModForm() {

  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const name = event.target.name.value;
      const email = event.target.email.value;
      const phone = event.target.phone.value;
      const password = event.target.password.value;
      if (name === "" || email === "" || phone === "" || password === "") {
        alert("Please fill all the fields");
        return;
      }

      const newMod = {
        name: name,
        email: email,
        phone: phone,
        password: password,
      };

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("token")}`;
      const res = await axios.post(`${GATEWAY_URL}/admin/moderator`, newMod);

      if (res.status !== 200) {
        throw new Error(res.data.message || "Error while adding moderator");
      }

      alert("Moderator added successfully");
      navigate("/admin/moderateurAll");
    } catch (error) {
      console.log(error);
      alert(error.response.data.message || "Error while adding moderator");
    }
  }
  return (
    <div className="max-w-[600px] mx-auto ">
      <h1 className="font-inter font-bold text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-center py-[75px] sm:py-[100px]">
        New moderator !
      </h1>

      <form onSubmit={handleSubmit} className="px-12 pb-16">
        <label className="block font-inter text-xl sm:text-2xl pb-5 font-semibold">
          name :
        </label>
        <div className="w-full">
          <input
            type="text"
            name="name"
            className="w-full rounded-lg font-inter text-xl px-4 py-3 outline-none "
          />
        </div>
        <label className="block font-inter text-xl sm:text-2xl py-6 font-semibold">
          Email :
        </label>
        <div className="w-full">
          <input
            type="email"
            name="email"
            className="w-full rounded-lg font-inter text-xl px-4 py-3 outline-none"
          />
        </div>
        <label className="block font-inter text-xl sm:text-2xl py-6 font-semibold">
          Phone :
        </label>
        <div className="w-full">
          <input
            type="text"
            name="phone"
            className="w-full rounded-lg font-inter text-xl px-4 py-3 outline-none"
          />
        </div>
        <label className="block font-inter text-xl sm:text-2xl py-6 font-semibold">
          Password :
        </label>
        <div className="w-full ">
          <input
            type="password"
            name="password"
            className="w-full rounded-lg font-inter text-xl px-4 py-3 outline-none"
          />
        </div>
        <button className="w-full my-10 py-3 bg-main text-white font-inter rounded-xl text-xl sm:text-2xl">
          Add Moderator
        </button>
      </form>
    </div>
  );
}
