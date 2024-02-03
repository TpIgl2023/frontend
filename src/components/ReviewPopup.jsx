import React, { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import UserTypes from '../constants/enums';
import { Link } from 'react-router-dom';

export default function ReviewPopup({Article,UserType,togglePopUp}) {//if use case 1 it is used pour afficher article if use case 2 it is used pour favoris if 3 it is used for review

    const JoinedAuthors = Article.Authors.join(', ');
    const JoinedKeyWords = Article.KeyWords.join(', ');
    const finalStringAuthors = `Auteurs : ${JoinedAuthors}`;

    const finalStringKeyWords = `Mots-clés : ${JoinedKeyWords}`;

  return (
    <div className="my-[80px] mx-auto w-[80%] rounded-3xl h-[310px] md:h-[350px] shadow-[0px_2px_5px_5px_rgb(140,140,140)] lg:shadow-[0px_5px_10px_5px_rgb(140,140,140)] ">
        <div className="py-10  px-5 sm:px-10 flex flex-col justify-evenly">
            <div className="flex justify-between">
                <h1 className="font-inter text-lg xs:text-xl sm:text-2xl lg:text-3xl font-semibold text-center" >{Article.Title}</h1>
            </div>
            <div className="pt-5 ">
               <p className='font-inter font-semibold text-sm xs:text-md md:text-lg text-ellipsis overflow-hidden line-clamp-1 text-main underline'>{finalStringAuthors}</p>
            </div>
            <div className="pt-5 ">
               <p className='font-inter text-sm xs:text-md md:text-lg  text-ellipsis overflow-hidden line-clamp-2'>{Article.Summary}</p>
            </div>
            <div className="pt-5 ">
               <p className='font-inter font-semibold text-sm xs:text-md md:text-lg text-ellipsis overflow-hidden line-clamp-1  '>{finalStringKeyWords}</p>
            </div>
            <div className="flex justify-center sm:justify-end font-inter items-center text-lg sm:text-xl md:text-2xl pt-[20px]">
                <div className="cursor-pointer px-10 py-1 bg-black text-white rounded-full" onClick={togglePopUp}>
                    <p>Review</p>
                </div>
            </div>
        </div>
    </div>  
  )
}
