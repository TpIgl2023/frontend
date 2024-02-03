import React, { useState, Fragment } from "react";
import { styles } from "../../styles";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ProfilePic from "../../assets/ProfilePic.svg";
import DropDownHero from "../DropDowns/DropDownHero";

export default function NavUnsigned() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <nav
        className={`lg:px-28 md:px-16 sm:px-12 px-6 ${styles.paddingY}  flex justify-between  `}
      >
        <Link to="/Hero" className="font-jost font-bold text-3xl">
          PDFinder
        </Link>
        <div className="block sm:hidden">
          <DropDownHero />
        </div>
        <div className="hidden sm:flex gap-[60px] lg:gap-[125px]">
          <Link
            id="login_in"
            to="/login"
            className="font-inter font-semibold text-2xl"
          >
            Log In
          </Link>
          <div className="bg-black px-[15px] py-[2px] rounded-full">
            <Link
              to="/signup"
              className="font-inter font-semibold text-white text-2xl"
            >
              sign up
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
