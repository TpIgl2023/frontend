import React from 'react'
import {  Outlet } from 'react-router-dom'
import Test from '../pages/Test'

export default function Rootlayout() {
  return (
    <div>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}
