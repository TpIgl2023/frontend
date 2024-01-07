import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
export default function SideNavAdmin() {
  const [active, setActive] = useState("Dashboard");
  const navLinks = [
    {
      id: "admin/dashboard",
      title: "Dashboard",
    },
    {
      id: "admin/Password",
      title: "Password",
    },
    {
      id: "admin/moderateurAll",
      title: "Moderateurs",
    },
    {
      id: "admin/Help",
      title: "Help",
    },
  ];
  return (
    <aside className=" bg-white sticky flex flex-col">
      <nav >
        <ul className="flex flex-col  items-center w-[300px]   py-[100px] gap-[40px]">
        {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title
                    ? "bg-[#1B76FF] text-white font-bold"
                    : "font-semibold bg-[#EFFBFF]"
                }  py-2 w-[80%] text-center hover:border-b-4 border-[#1B76FF] text-[19px] duration-[0.3s] transition-all `}
                >
                  <Link to={`/${link.id}`} onClick={() => setActive(link.title)} className="font-inter text-2xl ">{link.title}</Link>
                </li>))}
        </ul>

      </nav>
    </aside>
  )
}
