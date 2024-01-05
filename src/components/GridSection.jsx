import { Add, MoreHoriz } from '@mui/icons-material'
import React from 'react'
import AddMod from "../assets/AddMod.svg"
import { Link } from 'react-router-dom';

export default function GridSection() {
    function getFirstLetters(inputString) {
        // Split the input string into an array of words
        const words = inputString.split(' ');
      
        // Extract the first letter of each word and concatenate them
        const result = words.map(word => word.charAt(0)).join('');
        
        return result;
    }
  const Moderators = [
    {
        name:"Mezenner Fares",
        email:"lm_bouchene@esi.dz",
        id:"83413464"
    },
    {
        name:"Bouchene Mehdi",
        email:"lm_bouchene@esi.dz",
        id:"83413464"
    },
    {
        name:"Mezenner Fares",
        email:"lm_bouchene@esi.dz",
        id:"83413464"
    },
    {
        name:"Mezenner Fares",
        email:"lm_bouchene@esi.dz",
        id:"83413464"
    },    

  ]
  return (
    <div className="w-full grid grid-cols-3 justify-evenly items-center justify-items-center gap-y-16 pb-16">
                    {Moderators.map((Moderator)=>(
                <>
        <div className="bg-white h-[350px] w-[300px]  px-5 py-5 flex flex-col ">
            <div className="flex justify-between items-center">
                <div className="flex justify-center items-center h-[70px] w-[70px] rounded-full bg-[#E1F8FF]">
                    <h1 className="font-inter font-semibold text-[#8966F5] text-2xl">{getFirstLetters(Moderator.name)}</h1>
                </div>   
                <MoreHoriz fontSize={'large'} className="text-[#D9D9D9] cursor-pointer"/>
            </div>
            
                
                <p className="font-inter text-xl pl-10 pt-5">{Moderator.name}</p>
                <p className='font-inter text-xl pl-10 text-[#A9AABC] pt-5'>id : {Moderator.id}</p>
                <p className='font-inter text-xl pl-10 pt-5' >Email :</p>
                <p className='font-inter text-xl pl-10 text-[#A9AABC] underline pt-5'>{Moderator.email}</p>
                </div>
                </>
            ))}


        <div className="bg-white h-[350px] w-[300px] flex flex-col justify-evenly items-center">
            <img src={AddMod} alt="" className="h-[60px] cursor-pointer"  />
            <Link to="/admin/AjouterMod" className="font-inter font-bold text-3xl w-[80%] text-center">Add new moderator</Link>
        </div>

    </div>
  )
}
