import React, { useState , useEffect } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import UserTypes from '../constants/enums';
import { Link } from 'react-router-dom';
import { GATEWAY_URL } from "../env.js";
import axios from "axios";


                

export default function ArticlePopup({favoris,Article,removeArticle,UserType}) {//if use case 1 it is used pour afficher article if use case 2 it is used pour favoris if 3 it is used for review



    const [searched, setSearched] = useState(false);
    const JoinedAuthors = Article.authors.join(', ');
    const JoinedKeyWords = Article.keywords.join(', ');
    const finalStringAuthors = `Auteurs : ${JoinedAuthors}`;

    const finalStringKeyWords = `Mots-clés : ${JoinedKeyWords}`;

    const [liked, setLiked] = useState(Article.isFavorite);

    async function handleLike(){
      if (liked){
        await removeFromFavorite();
      }else{
        await addToFavorite();
      }
    }

    function HeartIcon(){
      if (liked===true){
        return(
      <div onClick={handleLike} className='cursor-pointer order-1 sm:order-2'>
           <Favorite fontSize='large'/>
      </div>);}
      else{
        return(
          <div onClick={handleLike} className='cursor-pointer order-1 sm:order-2'>
          <FavoriteBorderIcon fontSize='large'/>
        </div>  
        );
      }
    }

    async function addToFavorite() {
      try {
        const token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        axios.defaults.headers.common["article_id"] = `${Article.id}`;
        axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
        await axios.post(`${GATEWAY_URL}/articles/favorite`).then((res) => {
          setSearched(true);
          setLiked(true); // Add this line
        });
      } catch (error) {
        console.log(error);
      }
    }

    async function removeFromFavorite() {
      try{
        const token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        axios.defaults.headers.common["article_id"] = `${Article.id}`;
        axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
        await axios.delete(`${GATEWAY_URL}/articles/favorite`).then((res) => {
          setSearched(true);
          setLiked(false); // Add this line
        });
      } catch (error) {
        console.log(error);
      }
    }





  
  
  return (
    <div className="my-[80px] mx-auto w-[80%] flex justify-begin rounded-3xl h-[350px] shadow-[0px_2px_5px_5px_rgb(140,140,140)] lg:shadow-[0px_5px_10px_5px_rgb(140,140,140)]">
        <div className="py-10   px-5 sm:px-10 w-full">
            <div className="flex flex-col gap-[10px] items-center sm:flex-row sm:justify-between ">
                <h1 className="font-inter text-lg xs:text-xl sm:text-2xl lg:text-3xl font-semibold order-2 sm:order-1 text-center" >{Article.title}</h1>
              
                {
                      <div onClick={handleLike} className='cursor-pointer order-1 sm:order-2'>
                        <HeartIcon liked={liked}/>
                      </div>  



                }
         
            </div>
            <div className="pt-5 ">
               <p className='font-inter font-semibold text-sm xs:text-md md:text-lg  text-ellipsis overflow-hidden line-clamp-1 text-main underline'>{finalStringAuthors}</p>
            </div>
            <div className="pt-5 ">
               <p className='font-inter text-sm xs:text-md md:text-lg  text-ellipsis overflow-hidden line-clamp-2'>{Article.resume}</p>
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