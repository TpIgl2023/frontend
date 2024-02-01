import React from "react";
import { Outlet } from "react-router-dom";
import SideNavAdmin from "../components/navbars/SideNavAdmin";
import FooterSigned from "../components/footers/FooterSigned";
import NavAdmin from "../components/navbars/NavAdmin";
import { useState } from "react";
export default function Adminlayout() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [userValues, setUserValues] = useState(user);
  return (
    <div className="relative w-full  ">
      <NavAdmin userValues={userValues} className="" />
      <div className="flex min-h-screen">
        <div className="hidden lg:block">
          <SideNavAdmin userValues={userValues} setUserValues={setUserValues} />
        </div>
        <div className="bg-gradient-to-r from-[#F5F6F8] via-[#F5F6F8] to-[#EFE8F0] w-full ">
          <Outlet test="TEST" className="grow" />
        </div>
      </div>
    </div>
  );
}
