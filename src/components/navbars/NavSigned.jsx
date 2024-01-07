import React from 'react'
import {styles} from "../../styles"
import {Link} from "react-router-dom"
import ProfilePic from "../../assets/ProfilePic.svg"
import MenuIcon from '@mui/icons-material/Menu';
import  { useState } from "react";
export default function NavSigned() {
  const [visible, setVisible] = useState(true)
 
  const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 0) {
          setVisible(false)
      }
      else if (scrolled <= 0) {
          setVisible(true)
      }
  };

  const scrollToBottom = () => {
      window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth'
          /* you can also use 'auto' behaviour 
             in place of 'smooth' */
      });
  };

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
    
    <nav className={`px-6 2xl:px-24 ${styles.paddingY}  flex justify-between items-center`}>
      <Link to="/Hero" className="font-inter font-bold text-4xl xl:text-5xl text-[#1B76FF]">PDFinder</Link>
      <ul className="hidden list-none lg:flex gap-[50px] xl:gap-[80px] 2xl:gap-[125px]">
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
                  {link.title!="Contact" ? <Link to={`/${link.id}` } className="font-inter font-semibold text-xl">{link.title}</Link> : <Link onClick={scrollToBottom} className="font-inter font-semibold text-xl">{link.title}</Link>}
                </li>))}
      </ul>
      <div className="flex justify-center items-center h-[70px] w-[70px] rounded-full bg-[#E1F8FF]">
              <h1 className="font-inter font-semibold text-[#8966F5] text-2xl">YS</h1>
      </div>   
      </nav>
  )
}
