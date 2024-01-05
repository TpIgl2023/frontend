import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNavAdmin from "../components/navbars/SideNavAdmin";
import FooterSigned from "../components/footers/FooterSigned";
import NavAdmin from "../components/navbars/NavAdmin";
export default function Adminlayout() {
  return (
    <div className="relative w-full  ">
        <NavAdmin className=""/>
        <div className="flex ">
            <SideNavAdmin/>
                <div className="bg-gradient-to-r from-[#F5F6F8] via-[#F5F6F8] to-[#EFE8F0]  w-full ">
                <Outlet/>                  
            </div>
        </div>
    </div>
    
  )
}
