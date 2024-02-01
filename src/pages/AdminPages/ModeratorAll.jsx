import React from "react";
import NavAdmin from "../../components/navbars/NavAdmin";
import SideNavAdmin from "../../components/navbars/SideNavAdmin";
import GridSection from "../../components/GridSection";

export default function ModeratorAll() {
  return (
    <div className="relative w-full px-[50px]">
      <h1 className="text-3xl font-inter font-bold px-10 py-[50px] sm:py-[70px] text-center ">
        Moderators
      </h1>
      <GridSection />
    </div>
  );
}
