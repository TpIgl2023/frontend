import React from 'react'
import {styles} from "../../styles"
import {Link} from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import ProfilePic from "../../assets/ProfilePic.svg"

export default function NavUnsigned() {
  return (
    <nav className={`${styles.paddingX} ${styles.paddingY}  flex justify-between`}>
      <Link to="/Hero" className="font-jost font-bold text-3xl">Logo</Link>
      <div className="hidden sm:flex gap-[125px]">
        <Link to="/login" className="font-inter font-semibold text-2xl">Log In</Link>
        <div className="bg-black px-[15px] py-[2px] rounded-full">
          <Link  to="/signup" className="font-inter font-semibold text-white text-2xl">sign up</Link>
        </div>
      </div>

    </nav>
  )
}
