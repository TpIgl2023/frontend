import React, { useState, useEffect } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import UserTypes from "../constants/enums";
import { Link } from "react-router-dom";
import { GATEWAY_URL } from "../env.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ArticlePopupFavorite({ Article, removeArticle }) {
  const navigate = useNavigate();
  //if use case 1 it is used pour afficher article if use case 2 it is used pour favoris if 3 it is used for review

  const JoinedAuthors = Article.authors.join(", ");
  const JoinedKeyWords = Article.keywords.join(", ");
  const finalStringAuthors = `Auteurs : ${JoinedAuthors}`;

  const finalStringKeyWords = `Mots-clés : ${JoinedKeyWords}`;

  function HeartIcon() {
    return (
      <div
        onClick={removeFromFavorite}
        className="cursor-pointer order-1 sm:order-2"
      >
        <Favorite fontSize="large" />
      </div>
    );
  }

  async function removeFromFavorite() {
    try {
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios.defaults.headers.common["article_id"] = `${Article.id}`;
      axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
      await axios.delete(`${GATEWAY_URL}/articles/favorite`).then((res) => {
        removeArticle(Article.id);
      });
    } catch (error) {
      console.log(error);
    }
  }

  const viewArticle = () => {
    window.location.href = `/article/${Article.id}`;
  };
  return (
    <div className="my-[80px] mx-auto w-[80%] flex justify-begin rounded-3xl min-h-[350px] shadow-[0px_2px_5px_5px_rgb(140,140,140)] lg:shadow-[0px_5px_10px_5px_rgb(140,140,140)]">
      <div className="py-10   px-5 sm:px-10 w-full">
        <div className="flex flex-col gap-[10px] items-center sm:flex-row sm:justify-between ">
          <h1 className="font-inter text-lg xs:text-xl sm:text-2xl lg:text-3xl font-semibold order-2 sm:order-1 text-center">
            {Article.title}
          </h1>

          {
            <div
              onClick={removeFromFavorite}
              className="cursor-pointer order-1 sm:order-2"
            >
              <HeartIcon />
            </div>
          }
        </div>
        <div className="pt-5 ">
          <p className="font-inter font-semibold text-sm xs:text-md md:text-lg  text-ellipsis overflow-hidden line-clamp-1 text-main underline">
            {finalStringAuthors}
          </p>
        </div>
        <div className="pt-5 ">
          <p className="font-inter text-sm xs:text-md md:text-lg  text-ellipsis overflow-hidden line-clamp-3 sm:line-clamp-2">
            {Article.resume}
          </p>
        </div>
        <div className="pt-5 ">
          <p className="font-inter font-semibold text-sm xs:text-md md:text-lg  text-ellipsis overflow-hidden line-clamp-1  ">
            {finalStringKeyWords}
          </p>
        </div>
        {
          <div className=" pt-10 flex justify-center sm:justify-end font-inter items-center text-lg sm:text-xl md:text-2xl">
            <div
              id="read_button"
              onClick={viewArticle}
              className="cursor-pointer"
            >
              <p>Read more {">"}</p>
            </div>
          </div>
        }
      </div>
    </div>
  );
}
