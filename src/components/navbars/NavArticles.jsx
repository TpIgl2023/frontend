import React, { useState } from "react";
import { styles } from "../../styles";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ProfilePic from "../../assets/ProfilePic.svg";
import SearchIcon from "../../assets/SearchIcon.svg";
import FooterSigned from "../footers/FooterSigned";
import DropDOwnHome from "../DropDowns/DropDownHome";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Close, KeyboardArrowUp } from "@mui/icons-material";
export default function NavArticles() {
  const [searchBar, setSearchBar] = useState(false);
  return (
    <>
      <nav
        className={`px-6 md:px-10 lg:px-16 2xl:px-24 ${styles.paddingY}  flex items-center justify-between bg-main`}
      >
        <Link
          to="/Home"
          className="font-jost font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-white  "
        >
          PDFinder
        </Link>
        <div className="hidden lg:block">
          <div className="flex gap-10 items-center">
            <div className="flex py-2 px-3 bg-white rounded-full lg:w-[350px] xl:w-[500px] shadow-[0px_5px_10px_rgb(140,140,140)] ">
              <input
                className=" w-full text-lg font-inter font-semibold outline-none px-4 placeholder-opacity-100 placeholder-black"
                placeholder="General relativity ... "
              />
              <img
                src={SearchIcon}
                alt=""
                className="cursor-pointer w-[35px] xl:w-[50px]"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-[20px] sm:gap-[30px] items-center">
          <div className="lg:hidden" onClick={() => setSearchBar(!searchBar)}>
            {searchBar ? (
              <KeyboardArrowUp fontSize="large" />
            ) : (
              <img
                src={SearchIcon}
                alt=""
                className="cursor-pointer w-[35px] text-white"
              />
            )}
          </div>
          <DropDOwnHome />
        </div>
      </nav>
      {searchBar && (
        <div className="w-[80%] py-8 lg:hidden mx-auto  flex gap-[10px] items-center justify-evenly ">
          <div className="flex py-2 px-3 bg-white rounded-full lg:w-[350px] xl:w-[500px] shadow-[0px_5px_10px_rgb(140,140,140)] w-[80%] ">
            <input
              className="w-full text-md font-inter font-semibold outline-none px-4 placeholder-opacity-50 placeholder-black"
              placeholder="General relativity ... "
            />
            <img
              src={SearchIcon}
              alt=""
              className="cursor-pointer w-[35px] xl:w-[50px]"
            />
          </div>
        </div>
      )}
    </>
  );
}
