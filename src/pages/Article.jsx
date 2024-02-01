import React, { useState } from 'react'
import NavArticles from '../components/navbars/NavArticles'
import FooterSigned from '../components/footers/FooterSigned'
import UserTypes from '../constants/enums'
import ArticlePopup from '../components/ArticlePopup'

export default function Article() {
  
  const UserType=UserTypes.ADMIN  
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

  return (
    <div>
      <NavArticles/>
      <div>
        {Articles.map((Article) => (
          <ArticlePopup favoris={false} Article={Article}  UserType={UserType}/>
        ))}
      </div>
      <FooterSigned/> 
    </div>
  )
}
