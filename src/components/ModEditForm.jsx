import { FormatBoldRounded } from "@mui/icons-material";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { GATEWAY_URL } from "../env";
import { useNavigate } from "react-router-dom";

export default function ModEditForm(props) {
  const navigate = useNavigate();
  const [modValues, setModValues] = useState(props.modValues);

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      var newValues = {};
      if (event.target.name.value != "") {
        newValues.name = event.target.name.value;
      }
      if (event.target.email.value != "") {
        newValues.email = event.target.email.value;
      }
      if (event.target.phone.value != "") {
        newValues.phone = event.target.phone.value;
      }
      if (event.target.password.value != "") {
        newValues.password = event.target.password.value;
      }

      if (!newValues) {
        alert("Please fill at least one field");
        return;
      }

      newValues.id = modValues.id;

      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const res = await axios.put(`${GATEWAY_URL}/admin/moderator`, newValues);

      if (res.status !== 200) {
        alert(res.data.message || "Error while editing moderator");
        return;
      }

      if (!newValues.name) newValues.name = modValues.name;
      if (!newValues.email) newValues.email = modValues.email;
      if (!newValues.phone) newValues.phone = modValues.phone;

      setModValues(newValues);
      alert("Moderator edited successfully");

      navigate("/admin/moderateurAll");
    } catch (error) {
      console.log(error);
      alert(error.response.data.message || "Error while editing moderator");
    }
  }

  async function handleDelete(event) {
    try {
      event.preventDefault();
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios.defaults.headers.common["id"] = modValues.id;
      const res = await axios.delete(`${GATEWAY_URL}/admin/moderator`);

      if (res.status !== 200) {
        alert(res.data.message || "Error while deleting moderator");
        return;
      }

      alert("Moderator deleted successfully");
      navigate("/admin/moderateurAll");
    } catch (error) {
      console.log(error);
      alert(error.response.data.message || "Error while deleting moderator");
    }
  }
  return (
    <div className="max-w-[600px] mx-auto ">
      <h1 className="font-inter font-bold text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-center py-[75px] sm:py-[100px]">
        Edit Moderator !
      </h1>

      <form onSubmit={handleSubmit} className="px-12 pb-16">
        <label className="block font-inter text-xl sm:text-2xl pb-5 font-semibold">
          Name :
        </label>
        <div className="w-full">
          <input
            type="text"
            name="name"
            placeholder={modValues.name}
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
            placeholder={modValues.email}
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
            placeholder={modValues.phone}
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
            placeholder="Password"
            className="w-full rounded-lg font-inter text-xl px-4 py-3 outline-none"
          />
        </div>
        <button className="w-full mt-10 py-3 bg-main text-white font-inter rounded-xl text-xl sm:text-2xl">
          Edit Moderator
        </button>
      </form>
      <button
        onClick={handleDelete}
        className="w-full my-10 py-3 bg-red-500 text-white font-inter rounded-xl text-xl sm:text-2xl"
      >
        Delete Moderator
      </button>
    </div>
  );
}
