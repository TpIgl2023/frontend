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
  const user=JSON.parse(localStorage.getItem("user"))
  const userType=user.status
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

  </nav>


    </>
  );
}
