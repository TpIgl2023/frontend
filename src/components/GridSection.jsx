import { Add, Edit, MoreHoriz } from "@mui/icons-material";
import React from "react";
import AddMod from "../assets/AddMod.svg";
import { Link } from "react-router-dom";
import { getAbreviation } from "../utils/utils";
import axios from "axios";
import { GATEWAY_URL } from "../env";
import { useState } from "react";

var searching = false;

async function getMods(setMods) {
  try {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const res = await axios.get(`${GATEWAY_URL}/admin/moderator`);
    if (res.status !== 200) {
      throw new Error("Error while getting moderators");
    }
    setMods(res.data.moderators);
  } catch (error) {
    console.log(error);
    alert(error.response.data.message || "Error while getting moderators");
  }
}

export default function GridSection() {
  const [mods, setMods] = useState([]);

  React.useEffect(() => {
    getMods(setMods);
    searching = true;
  }, []);

  return (
    <div className="w-full grid md:grid-cols-2 xl:grid-cols-3 justify-evenly items-center justify-items-center gap-y-16 pb-16">
      {mods.map((mod) => (
        <div
          key={mod.id}
          className="bg-white xs:h-[350px] w-[275px] xs:w-[300px]  px-5 py-5 flex flex-col rounded-2xl    "
        >
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center h-[70px] w-[70px] rounded-full bg-[#E1F8FF]">
              <h1 className="font-inter font-semibold text-[#8966F5] text-2xl">
                {getAbreviation(mod.name)}
              </h1>
            </div>
            <Link to={`/admin/ModifyMod/${JSON.stringify(mod)}`}>
              <Edit fontSize={"large"} className=" cursor-pointer" />
            </Link>
          </div>

          <p className="font-inter text-xl pl-10 pt-5">{mod.name}</p>
          <p className="font-inter text-xl pl-10 text-[#A9AABC] pt-5">
            id : {mod.id}
          </p>
          <p className="font-inter text-xl pl-10 pt-5">Email :</p>
          <p className="font-inter text-xl pl-10 text-[#A9AABC] underline pt-5">
            {mod.email}
          </p>
        </div>
      ))}
      <div className="bg-white rounded-2xl h-[350px] w-[300px] flex flex-col justify-evenly items-center">
        <img src={AddMod} alt="" className="h-[60px] cursor-pointer" />
        <Link
          to="/admin/AjouterMod"
          className=" font-inter font-bold text-3xl w-[80%] text-center"
        >
          Add new moderator
        </Link>
      </div>
    </div>
  );
}
