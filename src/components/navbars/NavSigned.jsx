import React from 'react'
import {styles} from "../../styles"
import {Link} from "react-router-dom"
import ProfilePic from "../../assets/ProfilePic.svg"
import MenuIcon from '@mui/icons-material/Menu';
import  { useState } from "react";
export default function NavSigned() {
  const [active, setActive] = useState("Acceuil");
  const navLinks = [
    {
      id: "home",
      title: "Acceuil",
    },
    {
      id: "article",
      title: "Article",
    },
    {
      id: "favoris",
      title: "Favoris",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "ajouter",
      title: "Add new article",
    },
  ];
  return (
    
    <nav className={`${styles.paddingX} ${styles.paddingY}  flex justify-between items-center`}>
      <Link to="/Hero" className="font-inter font-bold text-5xl text-[#1B76FF]">PDFinder</Link>
      <ul className="hidden list-none xl:flex gap-[125px]">
      {navLinks.map((link) => (
              <li
                key={link.id}
                onClick={() => setActive(link.title)}
                className={`${
                  active === link.title
                    ? " font-semibold text-[#1B76FF]"
                    : ""
                } hover:border-b-4 border-[#1B76FF] text-[19px] duration-[0.3s] transition-all`}
                >
                  <Link to={`/${link.id}`} className="font-inter font-semibold text-xl">{link.title}</Link>
                </li>))}
      </ul>
      <div className="flex justify-center items-center h-[70px] w-[70px] rounded-full bg-[#E1F8FF]">
              <h1 className="font-inter font-semibold text-[#8966F5] text-2xl">YS</h1>
      </div>   
      </nav>
  )
}
