import { Search } from "@mui/icons-material";
import React, { useRef } from "react";
import SearchIcon from "../assets/SearchIcon.svg";
import { useNavigate } from "react-router-dom";

export default function SearchSection() {
  const inputRef = useRef(null);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const search = inputRef.current.value;
    if (!search) {
      alert("Please enter a search term");
      return;
    }

    navigate(`/articles/${search}`);
  }

  return (
    <div className="h-[350px]  sm:h-[500px] lg:h-[600px] w-full flex items-center sm:pl-20  md:pl-28 xl:pl-36 justify-center sm:justify-normal">
      <div className=" flex flex-col W-full gap-[50px] sm:gap-[75px] xl:gap-[100px] ">
        <h1 className="text-[19px] xs:text-[24px] sm:text-[27px] lg:text-[34px] xl:text-[40px] 2xl:text-5xl font-inter font-bold">
          Never waste Your time again .
        </h1>
        <div className="flex py-4 lg:py-5 px-5 w-[280px] xs:w-[350px] md:w-[400px] lg:w-[500px] xl:w-[600px] 2xl:w-[700px] bg-white rounded-full shadow-[0px_10px_10px_rgb(128,128,128)]">
          <input
            id="search_in"
            ref={inputRef}
            className=" w-full xs:text-lg sm:text-[20px] md:text-2xl font-inter font-semibold outline-none px-4 placeholder-opacity-100 placeholder-black"
            placeholder="General relativity ... "
          />
          <img
            id="search_button"
            src={SearchIcon}
            alt=""
            className="cursor-pointer w-[30px] sm:w-[50px]"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}
