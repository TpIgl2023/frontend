import React from "react";
import NavArticles from "../components/navbars/NavArticles";
import FooterSigned from "../components/footers/FooterSigned";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import dropMenu from "../assets/dropMenu.svg";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import exitIcon from "../assets/exitIcon.png";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GATEWAY_URL } from "../env.js";
import ReactLoading from "react-loading";
import ArticlePopup from '../components/ArticlePopup'
import UserTypes from '../constants/enums'
import axios from "axios";
import { ColorRing } from 'react-loader-spinner';

var searching = false;
var articles = [];

function FilterElement({ filterElement, listItem }){
}

function Articles() {
  const { query } = useParams();
  const [filter, toggleFilter] = useState(false);
  const [Articles,setArticles]=useState([])
  const [searched, setSearched] = useState(false);
  const [liked, setLiked] = useState([]);

  const UserType=UserTypes.USER  

    function activateFilter(){
        //Ecris le code de l'activation ici
    }
  let likedArticlesIds = []
  async function search(query) {
    try {
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
      const res = await axios.get(`${GATEWAY_URL}/articles/?query=${query}`)
      console.log(res.data.articles)
      articles = res.data.articles;
      setArticles(res.data.articles);
      setSearched(true);
      console.log("finished searching");
      console.log(Articles);

    } catch (error) {
      console.log(error);
    }
  }



  async function getLikedArticles() {
    try {
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
      const res = await axios.get(`${GATEWAY_URL}/articles/favorite`)
      let likedArticles = res.data.articles;
      likedArticlesIds = likedArticles.map((article) => article.id);
      setLiked(likedArticlesIds);
      console.log("liked articles inside getLikedArticles: ")
      console.log(likedArticlesIds)

    } catch (error) {
      console.log(error);
    }
  }

  async function fetchData (){
    await search(query);
    await getLikedArticles();
    return true;
  }

  useEffect(() => {
    const fetchDataAsync = async () => {
      if (searched == false){
        const res = await fetchData();
        // Assuming fetchData updates Articles
      }
    };
  
    fetchDataAsync();
  }, [Articles, searched,fetchData]); // Add Articles and searched as dependencies
  
  useEffect(() => {
    console.log("Articles ids");
    console.log(liked);
    articles.forEach((article) => {
      if (liked.includes(article.id)) {
        article.Liked = true;
      } else {
        article.Liked = false;
      }
    });
  
    console.log("Articles after updating the likes : ")
    console.log(articles);
    setSearched(true);
  }, [articles, liked]); // Add likedArticlesIds as a dependency


  return (
    <div>
      <NavArticles />
      {!filter && (
        <button
          className="p-4 m-4 bg-orange-600"
          onClick={() => toggleFilter(!filter)}
        >
          Open filter
        </button>
      )}
      <div className="min-h-[370px]">
      <div className="h-full w-full flex justify-center align-middle">

      { !searched && (<ColorRing
      visible={true}
      height="120"
      width="120"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />)}
      </div>
      <div>
        {filter && (
          <div
            id="filter"
            className="relative left-0 w-2/3 py-5 bg-[#4D4D4D] font-inter"
          >
            <div className=" text-center w-full py-4 flex justify-around items-center">
              <div></div>
              <h1 className="font-bold text-2xl text-white">Filter</h1>{" "}
              <img
                className="invert  h-6"
                src={exitIcon}
                onClick={() => toggleFilter(!filter)}
              />{" "}
            </div>
            <div className="w-full h-1"></div>
            {/* keywords  */}
            <FilterElement 
              filterElement="Keywords" 
              listItem={['Value 1', 'Value 2', 'Value 3', 'value4', 'value5', 'value6', 'value7']}
            />
            {/* Authors  */}
            <FilterElement 
              filterElement="Authors" 
              listItem={['Value 1', 'Value 2', 'Value 3', 'value4', 'value5', 'value6', 'value7']} 
            />
            {/* Institutions  */}
            <FilterElement 
              filterElement="Institutions" 
              listItem={['Value 1', 'Value 2', 'Value 3', 'value4', 'value5', 'value6', 'value7']}
            />
            {/* Publishing date */}
            <div className="p-4 w-full flex flex-col md:flex-row justify-evenly">
              <h1 className="text-white">Publishing date : </h1>
              <div>
                <h1 className="text-white">From :</h1>
                <input className="rounded" placeholder="DD/MM/YYYY" />
              </div>
              <div>
                <h1 className="text-white">To :</h1>
                <input className="rounded" placeholder="DD/MM/YYYY" />
              </div>
            </div>
            <div className="w-full flex justify-center">
              <Button className="bg-orange-600">Filter</Button>
            </div>
          </div>
        )}
      </div>
      <div>
        {articles.map((Article) => (<>
            <ArticlePopup favoris={Article.Liked} Article={Article}  UserType={UserType}/></>
          ))}
      </div>
      </div>
      <div className="w-screen">
        <FooterSigned />
      </div>
    </div>
  );
}



export default Articles;