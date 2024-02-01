import React, { useState } from 'react'
import NavArticles from '../components/navbars/NavArticles'
import ArticlePopup from '../components/ArticlePopup'
import FooterSigned from '../components/footers/FooterSigned'
import UserTypes from '../constants/enums'
export default function Favoris() {
  const UserType=UserTypes.USER
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
      
    },

  ])
  
  const removeArticle = (id) => {
    setArticles(prevArticles =>
      prevArticles.filter(article => article.id !== id)
    );
  };
  function activateFilter(){

  }
  return (
    <div className="flex flex-col min-h-[100vh]">
      <NavArticles/>
      <div className="grow">
        <div className="w-[80%] mx-auto flex justify-center sm:justify-end pt-[50px]">
              <div className="py-2 px-5 sm:px-10 text-white bg-main rounded-3xl text-xl xs:text-2xl sm:text-3xl font-inter cursor-pointer" onClick={activateFilter}>
                  Filtrer les Favoris
              </div>
        </div>
        <div>

          {Articles.map((Article) => (
            <ArticlePopup favoris={true} Article={Article} removeArticle={removeArticle}  UserType={UserType}/>
          ))}
        </div>
      </div>
      <FooterSigned/>
    </div>

  )
}
