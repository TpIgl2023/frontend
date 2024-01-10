import React from 'react'
import {styles} from "../../styles"
import {Link} from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import ProfilePic from "../../assets/ProfilePic.svg"
import SearchIcon from "../../assets/SearchIcon.svg"
import FooterSigned from '../footers/FooterSigned';
export default function NavArticles() {
  return (
    <nav className={`${styles.paddingX} ${styles.paddingY}  flex items-center justify-between bg-main`}>
      <Link to="/Home" className="font-jost font-bold text-4xl lg:text-5xl text-white  ">PDFinder</Link>
      <div className="hidden lg:block">
        <div className="flex gap-10 items-center">
            <div className="flex py-2 px-3 bg-white rounded-full lg:w-[400px] 2xl:w-[500px] shadow-[0px_5px_10px_rgb(140,140,140)] ">
                <input className=" w-full text-lg font-inter font-semibold outline-none px-4 placeholder-opacity-100 placeholder-black" placeholder="General relativity ... "/>
                <img src={SearchIcon} alt="" className="cursor-pointer"/>
            </div> 

          <p className="font-inter text-white text-2xl cursor-pointer">Filtrer</p>
        </div>
      </div>

      <div className="flex gap-8 items-center">
        <MenuIcon fontSize="large"  />
        <div className="flex justify-center items-center h-[70px] w-[70px] rounded-full bg-[#E1F8FF]">
              <h1 className="font-inter font-semibold text-[#8966F5] text-2xl">YS</h1>
        </div>
      </div>
 

    </nav>
  )
}
