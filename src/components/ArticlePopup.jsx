import React, { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import UserTypes from '../constants/enums';
import { Link } from 'react-router-dom';

export default function ArticlePopup({favoris,Article,removeArticle,UserType}) {//if use case 1 it is used pour afficher article if use case 2 it is used pour favoris if 3 it is used for review
    const handleRemove = () => {
        removeArticle(Article.id);
      };

    const handleLike = () =>{
      setLiked(!liked)
    }

    const JoinedAuthors = Article.Authors.join(', ');
    const JoinedKeyWords = Article.KeyWords.join(', ');
    const finalStringAuthors = `Auteurs : ${JoinedAuthors}`;

    const finalStringKeyWords = `Mots-clés : ${JoinedKeyWords}`;

    const [liked, setLiked] = useState(Article.Liked);
  return (
    <div className="my-[80px] mx-auto w-[80%] flex justify-center rounded-3xl h-[350px] shadow-[0px_2px_5px_5px_rgb(140,140,140)] lg:shadow-[0px_5px_10px_5px_rgb(140,140,140)]">
        <div className="py-10   px-5 sm:px-10">
            <div className="flex flex-col gap-[10px] items-center sm:flex-row sm:justify-between ">
                <h1 className="font-inter text-lg xs:text-xl sm:text-2xl lg:text-3xl font-semibold order-2 sm:order-1 text-center" >{Article.Title}</h1>
              
                {
                  UserType==UserTypes.USER ?

                  favoris ?
                  
                  <div onClick={handleRemove} className='cursor-pointer order-1 sm:order-2'>
                    
                  <Favorite fontSize='large'/>
                  </div>  
                  :
                  
                    liked ? 
                    <div onClick={handleLike} className='cursor-pointer order-1 sm:order-2'>
                      <Favorite fontSize='large'/>
                    </div>  
                    :
                    <div onClick={handleLike} className='cursor-pointer order-1 sm:order-2'>
                      <FavoriteBorderIcon fontSize='large'/>
                    </div>  
                    :
                    <></>
                }
         
            </div>
            <div className="pt-5 ">
               <p className='font-inter font-semibold text-sm xs:text-md md:text-lg  text-ellipsis overflow-hidden line-clamp-1 text-main underline'>{finalStringAuthors}</p>
            </div>
            <div className="pt-5 ">
               <p className='font-inter text-sm xs:text-md md:text-lg  text-ellipsis overflow-hidden line-clamp-2'>{Article.Summary}</p>
            </div>
            <div className="pt-5 ">
               <p className='font-inter font-semibold text-sm xs:text-md md:text-lg  text-ellipsis overflow-hidden line-clamp-1  '>{finalStringKeyWords}</p>
            </div>
            {
              UserTypes.MODERATOR==UserType ? 
              <div className="flex flex-col justify-evenly gap-[10px] sm:flex-row sm:justify-between font-inter items-center text-lg sm:text-xl md:text-2xl  pt-[20px]">
                  <div className="cursor-pointer" >
                    <p>Lire la suite {'>'}</p>
                  </div>
                  <div className="cursor-pointer px-10 py-1 bg-black text-white rounded-full">
                    <p>Modifier</p>
                  </div>
              </div>
              :
              <div className=" pt-10 flex justify-center sm:justify-end font-inter items-center text-lg sm:text-xl md:text-2xl">
                  <div className="cursor-pointer" >
                    <p>Lire la suite {'>'}</p>
                  </div>

              </div>
            }
        </div>
    </div>
  )
}