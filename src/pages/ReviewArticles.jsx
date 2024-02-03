import React, { useState } from 'react'
import NavArticles from '../components/navbars/NavArticles'
import FooterSigned from '../components/footers/FooterSigned'
import UserTypes from '../constants/enums'
import ReviewPopup from '../components/ReviewPopup'
import ReviewArticlePopUp from '../components/ReviewArticlePopUp.jsx'
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import axios from 'axios';
import { GATEWAY_URL } from "../env.js";
import { ColorRing } from 'react-loader-spinner';
import { setRef } from '@mui/material'
import { TERipple } from "tw-elements-react";
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial,
} from 'react-awesome-button';

export default function Article() {
  const { url } = useParams();
  const [decodedUrl, setDecodedUrl] = useState("");
  const [finishedFetching, setFinishedFetching] = useState(false);
  const [finishedLoading, setFinishedLoading] = useState(false);
  const [Articles, setArticles] = useState([]);
  const [Refresh, setRefresh] = useState(false);
  const [Progress, setProgress] = useState("0%");
  const [isPopupOpen, setPopupOpen] = useState(false);
  
  let id = 0;

  let firstFetch = false;

  function parseArticle(res){
    if (res == null || res == undefined){
      return null;
    }
    // Turn an article from PDF handler to article 
    let article = {}
    article.id = id;
    id++;
    article.Title = res.title;
    article.pdfUrl = res.URL;
    article.Summary = res.abstract;
    article.Authors = res.authors;
    article.institutions = res.institutions;
    article.KeyWords = res.keywords;
    article.text = res.text;
    article.references = res.bibliography;
    article.publishDate = res.publishingDate;
    console.log(article);
    return article;
  }

  function updateProgressBar(nbArticlesUpdates , nbArticles){
    let newProgress = (nbArticlesUpdates/nbArticles)*100;
    setProgress(newProgress+"%");
  }

  function unparseArticle(article){
    if (article == null || article == undefined){
      return null;
    }
    // Turn an article from PDF handler to article
    let res = {}
    res.title = article.Title || "";
    res.URL = article.pdfUrl || "";
    res.resume = article.Summary || "";
    res.authors = article.Authors || [];
    res.institutions = article.institutions || [];
    res.keywords = article.KeyWords || [];
    res.text = article.text || "";
    res.references = article.references || [];
    res.publishDate = article.publishDate || "1677-09-21";
    return res;
  }


  function saveArticles(){
    console.log(Articles);
    let articles = Articles;
    let numberUpdatedArticles = 0;
    for (let i = 0; i < articles.length; i++){
      let article = articles[i];
      let res = unparseArticle(article);
      console.log(res);
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
      axios.post(`${GATEWAY_URL}/articles`, res).then((res) => {
        console.log(res);
        numberUpdatedArticles++;
        console.log("Articles length: "+articles.length);
        if (numberUpdatedArticles == articles.length){
          alert("All articles updated successfully !");
        }
      }).catch (err => {
        console.log(err);
        numberUpdatedArticles++;
      });

    }

  }

  useEffect(() => {
    setDecodedUrl(decodeURIComponent(url));
  }, [url]);
  useEffect(() => {
    const fetchDataAsync = async () => {
      if (finishedFetching == false){
        const res = await fetchData();
        console.log("it's loading");
        if (res != null){
          setFinishedFetching(true);
          console.log("it's loaded");
          if (res.sourceType == "fileLink"){
            let article = parseArticle(res);
            let articlesArray = [article];
            setProgress("100%");
            setArticles(articlesArray);
            setFinishedLoading(true);

          }else{
            let finishedDownloads = 0;
            let downloadLinks = res.downloadLinks;
            if (downloadLinks == null || downloadLinks.length == 0){
              setFinishedLoading(true);
              return;
            }
            console.log(downloadLinks);
            let articlesArray = [];
            let secondRes;
            for (let i = 0; i < downloadLinks.length; i++){
              console.log("Starting Updating article "+i);

              const token = localStorage.getItem("token");
              axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
              axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
              axios.post(`${GATEWAY_URL}/admin/extract`, {
                "URL": downloadLinks[i]
              }).then((res) => {
              console.log(res.data);
              console.log("Updating article "+i);
              let article = parseArticle(res.data);
              articlesArray.push(article);

              let newArray = [...articlesArray];
              

              setArticles(newArray);
              setRefresh(!Refresh);
              finishedDownloads++;
              updateProgressBar(finishedDownloads, downloadLinks.length);
              if (finishedDownloads == downloadLinks.length){
                setFinishedLoading(true);
              }
            }).catch (err => {
              console.log(err);
              finishedDownloads++;
              if (finishedDownloads == downloadLinks.length){
                setFinishedLoading(true);
              }});
            }
          }


        }
      }}
    fetchDataAsync();

  },[decodedUrl]);


  
  let defaultArticles = [{
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
  }]

  async function fetchData() {
    if (firstFetch == false){
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
      const res = await axios.post(`${GATEWAY_URL}/admin/extract`, {
        "URL": decodedUrl
      })
      if (res.data.success == true){
        return res.data;
      }
      return null;
    }
  }

  function handleSubmitArticle(article){
    // Replace the article with the same id
    let newArticles = [...Articles];
    let index = newArticles.findIndex((a) => a.id == article.id);
    newArticles[index] = article;
    setArticles(newArticles);

  }




  const UserType=UserTypes.MODERATOR

    function activateFilter(){
    
    }
  return (
    <div>
      <NavArticles/>
      {
        Articles.length > 0 &&
      <ReviewArticlePopUp isOpen={isPopupOpen} handleClose={() => setPopupOpen(false)} article={Articles[0]} handleSubmit={handleSubmitArticle} />
      }
      <div className="w-[80%] mx-auto flex justify-center sm:justify-end pt-[50px] min-h-[80%]">
      </div>
      <div className="min-h-[500px] justify-center w-full">
     
        {Articles.map((Article) => (
          <ReviewPopup  Article={Article}  UserType={UserType} togglePopUp={() => setPopupOpen(true)}/>
        ))}
        { !finishedLoading && (<div className="w-full flex justify-center align-middle"><ColorRing
      visible={true}
      height="120"
      width="120"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      /></div>)}
      { finishedLoading && (<div className='w-full flex justify-center align-middle'>
      <TERipple rippleColor="light">
        <button
          type="button"
          className="inline-block rounded bg-[#1b76ff] px-8 pb-4 pt-4 text-m font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          onClick={saveArticles}
        >
          Submit
        </button>
      </TERipple>
        </div>)}

      </div>
      <div className="w-full bg-neutral-200 dark:bg-neutral-600">
          <div
          className="bg-[#1b76ff] p-1 text-center text-xs font-medium leading-none text-primary-100"
          style={{ width : Progress}}
          >
          </div>
      </div>
      <FooterSigned/> 
    </div>
  )
}
