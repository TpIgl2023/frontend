import React, { useState } from 'react'
import NavArticles from '../components/navbars/NavArticles'
import FooterSigned from '../components/footers/FooterSigned'
import UserTypes from '../constants/enums'
import ReviewPopup from '../components/ReviewPopup'

export default function Article() {
  
  const UserType=UserTypes.MODERATOR
  const [Articles,setArticles]=useState([
    {

      id:1,
      Liked:false,
      Title:"ERUPTION VOLCANIQUE",
      Summary:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      KeyWords:["volcan","soleil","staff","lorem","madre"],
      Authors:["The New York times","Bouchene Mehdi", "Yekene sofiane","Nehari Walid","Adem"],

    },
    {
      id:2,
      Liked:true,
      Title:"ERUPTION VOLCANIQUE",
      Summary:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      KeyWords:["volcan","soleil","staff","lorem","madre"],
      Authors:["The New York times","Bouchene Mehdi", "Yekene sofiane","Nehari Walid","Adem"],
    },
    {
      id:3,
      Liked:false,
      Title:"ERUPTION VOLCANIQUE",
      Summary:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      KeyWords:["volcan","soleil","staff","lorem","madre"],
      Authors:["The New York times","Bouchene Mehdi", "Yekene sofiane","Nehari Walid","Adem"],
      
    },])
    function activateFilter(){
    
    }
  return (
    <div>
      <NavArticles/>
      
      <div className="w-[80%] mx-auto flex justify-center sm:justify-end pt-[50px] min-h-[80%]">
            <div className="py-2 px-5 sm:px-10 text-white bg-main rounded-3xl text-xl xs:text-2xl sm:text-3xl font-inter cursor-pointer" onClick={activateFilter}>
                Filtrer les articles
            </div>
      </div>
      <div>
        {Articles.map((Article) => (
          <ReviewPopup  Article={Article}  UserType={UserType}/>
        ))}
      </div>
      <FooterSigned/> 
    </div>
  )
}
