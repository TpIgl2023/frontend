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

function FilterElement({ filterElement, listItem , filterByFunction}){
  const [ActiveFiltersList, setActiveFiltersList] = useState([]);

  function addFilter(filter){
    let filters = ActiveFiltersList;
    filters.push(filter);
    setActiveFiltersList(filters);
    filterByFunction(filters);
    console.log("filter added !")
  }

  function removeFilter(filter){
    let filters = ActiveFiltersList;
    filters = filters.filter((item) => item !== filter);
    setActiveFiltersList(filters);
    filterByFunction(filters);
    console.log("filter removed !")
  }

  function handleClick(item) {
    console.log("Handle click function !");
    if (ActiveFiltersList.includes(item)) {
      removeFilter(item);
    } else {
      addFilter(item);
    }
  }



  let listItemCheckbox = listItem.slice(0,3);
  let menuItemsComponents = <></>
  if (listItem.length > 3) {
    let listItemMenu = listItem.slice(3);
    menuItemsComponents = (
      <>
        <Menu closeOnSelect={false}>
          <MenuButton /*as={Button}*/ colorScheme="blue">
            <span className="text-white"> More items</span>{" "}
            <img src={dropMenu} className="w-6 inline" />
          </MenuButton>
          <MenuList minWidth="240px">
            <MenuDivider />
            <MenuOptionGroup title="Country" type="checkbox">
              {listItemMenu.map((item) => (
                <MenuItemOption value={item} onClick={() => handleClick(item)}>
                  {item}
                </MenuItemOption>
              ))}
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </>
    );
  }
  let checkboxList = listItemCheckbox.map((item) => (
      <Checkbox>
        <span className="text-white border-8" value={item} onClick={() => handleClick(item)}>{item}</span>
      </Checkbox>
  ));


  return(
    <>
  <div className="p-4  w-full flex flex-col md:flex-row md:justify-evenly">
              <h1 className="inline-block mx-4 font-bold text-white text-lg">
                {filterElement} :
              </h1>
              {checkboxList}
              {menuItemsComponents}
            </div>

            <div className="w-full h-1 bg-white"></div>
            </>
            )
}

function Articles() {
  const { query } = useParams();
  const [filter, toggleFilter] = useState(false);
  const [Articles,setArticles]=useState([])
  const [searched, setSearched] = useState(false);
  const [liked, setLiked] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const [keywords, setKeywords] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [institutions, setInstitutions] = useState([]);
  const [publishingDate, setPublishingDate] = useState([]);

  const [filterKeywords, setFilterKeywords] = useState([]);
  const [filterAuthors, setFilterAuthors] = useState([]);
  const [filterInstitutions, setFilterInstitutions] = useState([]);

  function extractKeywords(Articles){
    let keywords = [];
    Articles.forEach((Article) => {
      keywords.push(...Article.keywords);
    });
    keywords = [...new Set(keywords)];
    setKeywords(keywords);
  }

  function extractInstitutions(Articles){
    let institutions = [];
    Articles.forEach((Article) => {
      institutions.push(...Article.institutions);
    });
    institutions = [...new Set(institutions)];
    setInstitutions(institutions);
  }

  function extractAuthors(Articles){
    let authors = [];
    Articles.forEach((Article) => {
      authors.push(...Article.authors);
    });
    authors = [...new Set(authors)];
    setAuthors(authors);
  }
  
  function filterByKeywords(keywords){
    setFilterKeywords(keywords);
    updateArticlesForFilter(keywords, filterAuthors, filterInstitutions);
  };
  function filterByInstitutions(institutions){
    setFilterInstitutions(institutions);
    updateArticlesForFilter(filterKeywords, filterAuthors, institutions);
  }
  function filterByAuthors(authors){
    setFilterAuthors(authors);
    updateArticlesForFilter(filterKeywords, authors, filterInstitutions);
  }

  function updateArticlesForFilter(filterKeywords, filterAuthors, filterInstitutions){
    let articles = Articles;
    // Initialize all articles to be visible
    articles.forEach((article) => {
      article.hidden = false;
    });


    articles.forEach((article) => {
      if (filterKeywords.length > 0) {
        if (article.keywords.some(keyword => filterKeywords.includes(keyword))) {
          article.hidden = false;
        } else {
          article.hidden = true;
        }
      }
      if (filterAuthors.length > 0) {
        if (article.authors.some(author => filterAuthors.includes(author))) {
          article.hidden = false;
        } else {
          article.hidden = true;
        }
      }
      if (filterInstitutions.length > 0) {
        if (article.institutions.some(institution => filterInstitutions.includes(institution))) {
          article.hidden = false;
        } else {
          article.hidden = true;
        }
      }
    });
    
    console.log("Setting up the articles updated hidden");
    console.log("Articles : ")
    console.log(articles);

    console.log("Filters : ")
    console.log(filterKeywords);
    console.log(filterAuthors);
    console.log(filterInstitutions);
    console.log("Correctly setted up");

    setArticles(articles);
    setArticles(articles);
    setRefresh(!refresh);

    
  }

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
        let extraArticles = [
          {
            "id": 1,
            "publishDate": "2023-06-01",
            "title": "Introduction to AI",
            "resume": "A brief overview of artificial intelligence",
            "authors": ["John Doe", "Alice Smith"],
            "institutions": ["MIT", "Stanford"],
            "keywords": ["AI", "Machine Learning"],
            "text": "This article provides an introduction to the field of artificial intelligence.",
            "pdfUrl": "www.example.com/intro-to-ai.pdf",
            "references": ["Ref1", "Ref2"]
          },
          {
            "id": 2,
            "publishDate": "2023-06-02",
            "title": "AI in Healthcare",
            "resume": "Exploring the impact of AI on the healthcare industry",
            "authors": ["Jane Brown", "David Chen"],
            "institutions": ["Harvard", "Johns Hopkins"],
            "keywords": ["AI", "Healthcare"],
            "text": "This article discusses the applications of AI in improving healthcare services.",
            "pdfUrl": "www.example.com/ai-in-healthcare.pdf",
            "references": ["Ref3", "Ref4"]
          },
          {
            "id": 3,
            "publishDate": "2023-06-03",
            "title": "Ethical Considerations in AI",
            "resume": "Examining ethical issues surrounding artificial intelligence",
            "authors": ["Emily White", "Michael Lee"],
            "institutions": ["Oxford", "Cambridge"],
            "keywords": ["AI", "Ethics"],
            "text": "This article explores ethical considerations and challenges in the development of AI technologies.",
            "pdfUrl": "www.example.com/ethical-ai.pdf",
            "references": ["Ref5", "Ref6"]
          },
          {
            "id": 4,
            "publishDate": "2023-06-04",
            "title": "AI and Robotics",
            "resume": "The intersection of AI and robotics in modern technology",
            "authors": ["Susan Miller", "Carlos Rodriguez"],
            "institutions": ["Carnegie Mellon", "UC Berkeley"],
            "keywords": ["AI", "Robotics"],
            "text": "This article explores the integration of AI and robotics for advanced technological applications.",
            "pdfUrl": "www.example.com/ai-and-robotics.pdf",
            "references": ["Ref7", "Ref8"]
          },
          {
            "id": 5,
            "publishDate": "2023-06-05",
            "title": "Future Trends in AI",
            "resume": "Predictions and insights into the future of artificial intelligence",
            "authors": ["Sophie Taylor", "Ahmed Khan"],
            "institutions": ["MIT", "ETH Zurich"],
            "keywords": ["AI", "Future Trends"],
            "text": "This article speculates on the potential future developments and trends in the field of AI.",
            "pdfUrl": "www.example.com/future-trends-ai.pdf",
            "references": ["Ref9", "Ref10"]
          }
        ];
        //
        articles = Articles;
        articles = articles.concat(extraArticles);
        setArticles(articles);
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
    console.log(articles)
    extractKeywords(articles);
    extractAuthors(articles);
    extractInstitutions(articles);
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
            className="relative left-0 w-full py-5 bg-[#4D4D4D] font-inter"
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
              listItem={keywords}
              filterByFunction={filterByKeywords}
            />
            {/* Authors  */}
            <FilterElement 
              filterElement="Authors" 
              listItem={authors} 
              filterByFunction={filterByAuthors}
            />
            {/* Institutions  */}
            <FilterElement 
              filterElement="Institutions" 
              listItem={institutions}
              filterByFunction={filterByInstitutions}
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
           {!Article.hidden && <ArticlePopup favoris={Article.Liked} Article={Article}  UserType={UserType}/>}</>
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