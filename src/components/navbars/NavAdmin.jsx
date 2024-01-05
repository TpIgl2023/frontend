import React from 'react'
import {styles} from "../../styles"
import {Link} from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import ProfilePic from "../../assets/ProfilePic.svg"
import SearchIcon from "../../assets/SearchIcon.svg"
export default function NavAdmin() {
  return (

  <nav className={`px-10 ${styles.paddingY}  flex items-center justify-between`}>
      <Link to="/Home" className="font-jost font-bold text-5xl  text-[#1B76FF]">PDFinder</Link>

      <div className="flex gap-16 items-center">
        <h1 className="font-inter text-xl">Yekene Sofiane</h1>
        <div className="flex justify-center items-center h-[70px] w-[70px] rounded-full bg-[#E1F8FF]">
              <h1 className="font-inter font-semibold text-[#8966F5] text-2xl">YS</h1>
        </div>
      </div>
 

    </nav>
  )
}
