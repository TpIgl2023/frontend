import React, { useState } from 'react'
import {styles} from "../../styles"
import {Link} from "react-router-dom"
import DropDownProfile from '../DropDowns/DropDownProfile'
import { MenuItem } from '@mui/material'
import DropDownAdmin from '../DropDowns/DropDownAdmin'
export default function NavAdmin() {

  return (

  <nav className={`px-10 ${styles.paddingY}  flex items-center justify-between`}>
      <Link to="/Home" className="font-jost font-bold text-3xl sm:text-4xl md:text-5xl  text-main">PDFinder</Link>

      <div className="lg:flex gap-16 items-center hidden ">
        <h1 className="font-inter text-xl font-semibold">Yekene Sofiane</h1>
        <div className="hidden lg:block">
          <DropDownProfile/>
        </div>
      </div>
      <div className="lg:hidden">
        <DropDownAdmin/>
      </div>
 

    </nav>
  )
}
