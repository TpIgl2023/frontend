import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterSigned() {
  return (
    <div className="h-[400px] w-full bg-[#1B76FF] flex flex-col justify-between">
      <div className="flex justify-evenly py-16">
        <div className="flex flex-col gap-8 w-[400px]">
            <h1 className="font-jost text-5xl text-white">Logo</h1>
            <p className="font-inter text-white text-xl">Un texte est une série orale ou écrite de mots perçus comme constituant un ensemble cohérent, </p>
        </div>
        <div className="flex flex-col gap-6 w-[200px] items-center">
            <h1 className="font-inter font-semibold text-2xl text-white">Lien rapide</h1>
            <Link to="/Signup" className="font-inter text-white text-xl">sign up</Link>
            <Link to="/Login" className='font-inter text-white text-xl'>log in</Link>
        </div>
        <div className="flex flex-col gap-8 w-[200px] items-center">
            <h1 className="font-inter font-semibold text-2xl text-white"> Contactez nous</h1>
            <p className="font-inter text-white text-xl">dare elbeida alger</p>
            <p className="underline font-inter text-white text-xl">service@esi.dz</p>
            <p className="font-inter text-white text-xl">+21-25533-0000</p>

        </div>
        
      </div>
      <div className="flex justify-center pb-4 text-white text-2xl font-inter">
         2023 pdf .All rights reserved 
     </div>
    </div>
  )
}
