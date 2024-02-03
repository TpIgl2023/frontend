import React, { useState } from "react";
import NavArticles from "../components/navbars/NavArticles";
import ArticlePopupFavorite from "../components/ArticlePopupFavorite";
import ArticlePopup from "../components/ArticlePopup";
import FooterSigned from "../components/footers/FooterSigned";
import UserTypes from "../constants/enums";
import { useEffect } from "react";
import axios from "axios";
import { GATEWAY_URL } from "../env";

export default function Favoris() {
  var UserType,
    searched = false;
  const user = localStorage.getItem("user");
  if (user === null) {
    window.location.href = "/login";
  } else if (user.status === "user") {
    UserType = UserTypes.USER;
  } else if (user.status === "administrator") {
    UserType = UserTypes.ADMIN;
  } else {
    UserType = UserTypes.MODERATOR;
  }

  const [Articles, setArticles] = useState([]);

  const removeArticle = (id) => {
    setArticles((prevArticles) =>
      prevArticles.filter((article) => article.id !== id)
    );
  };

  async function getLikedArticles() {
    try {
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
      const res = await axios.get(`${GATEWAY_URL}/articles/favorite`);
      let likedArticles = res.data.articles;
      setArticles(likedArticles);
    } catch (error) {
      console.log(error);
      alert(
        error.response.data.message || "Error while getting liked articles"
      );
    }
  }

  useEffect(() => {
    if (!searched) {
      getLikedArticles();
      searched = true;
    }
  }, []);
  function activateFilter() {}
  return (
    <div className="flex flex-col min-h-[100vh]">
      <NavArticles />
      <div className="grow">
        <div>
          {Articles.map((Article) => (
            <ArticlePopupFavorite
              Article={Article}
              removeArticle={removeArticle}
            />
          ))}
        </div>
      </div>
      <FooterSigned />
    </div>
  );
}
