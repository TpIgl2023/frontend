import React, { useState } from "react";
import NavArticles from "../components/navbars/NavArticles";
import FooterSigned from "../components/footers/FooterSigned";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { GATEWAY_URL } from "../env";

export default function Article() {
  const { id } = useParams();

  const [resume, setResume] = useState(false);
  const [keyWord, setKeyWord] = useState(false);
  const [author, setAuthor] = useState(false);
  const [institution, setInstitution] = useState(false);
  const [text, setText] = useState(false);
  const [URL, setURL] = useState(false);
  const [ref, setRef] = useState(false);

  const classPassive =
    "  bg-main flex-1 text-center py-5 text-white cursor-pointer";
  const classActive =
    "   bg-white flex-1 text-center py-5 text-black font-bold border-y-4 border-main ";
  const TestArticle = {
    id: "",
    title: "",
    resume: "",
    authors: [""],
    institutions: [""],
    keywords: [""],
    text: "",
    references: [""],
    publishDate: "2000-01-01",
    pdfUrl: "",
  };

  const [article, setArticle] = useState(TestArticle);

  const [activeTab, setActiveTab] = useState("resume");

  // Content for each tab
  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const getArticle = async () => {
    // Get article from API
    try {
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const res = await axios.get(`${GATEWAY_URL}/articles/${id}`);
      if (res.status === 200) {
        setArticle(res.data.article);
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.detail.message || "An error occured");
    }
    // Set article to state
  };

  useEffect(() => {
    getArticle();
  });

  return (
    <div className="flex flex-col min-h-[100vh] ">
      <NavArticles />
      <div className="font-inter w-[80%] md:w-[95%] lg:w-[90%] grow mx-auto ">
        <div className="flex justify-center text-md xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold w-full py-[30px] pt-14 sm:py-[50px] md:py-[80px]">
          <h1 className="text-center w-[80%] xs:w-[75%] sm:w-[60%] lg:w-[50%]">
            {article.title}
          </h1>
        </div>
        <div className="flex justify-center text-md xs:text-lg sm:text-lg md:text-xl lg:text-2xl font-semibold w-full py-[30px] pt-14 sm:py-[50px] md:py-[80px]">
          <h1 className="text-center w-[80%] xs:w-[75%] sm:w-[60%] lg:w-[50%]">
            <span className="text-main">Publié le :</span> {article.publishDate}
          </h1>
        </div>
        <div className="hidden md:block">
          <div className="flex text-xl lg:text-2xl font-semibold">
            <div
              className={`rounded-tl-2xl border-l-4 border-main ${
                activeTab == "resume" ? classActive : classPassive
              }`}
              onClick={() => handleTabClick("resume")}
            >
              Résumé
            </div>
            <div
              className={`  ${
                activeTab == "author" ? classActive : classPassive
              }`}
              onClick={() => handleTabClick("author")}
            >
              Auteurs
            </div>
            <div
              className={` ${
                activeTab == "keyword" ? classActive : classPassive
              }`}
              onClick={() => handleTabClick("keyword")}
            >
              Mots clés
            </div>
            <div
              className={` ${
                activeTab == "insti" ? classActive : classPassive
              }`}
              onClick={() => handleTabClick("insti")}
            >
              Institutions
            </div>
            <div
              className={` ${
                activeTab == "contenu" ? classActive : classPassive
              }`}
              onClick={() => handleTabClick("contenu")}
            >
              Contenu
            </div>
            <div
              className={` ${activeTab == "url" ? classActive : classPassive}`}
              onClick={() => handleTabClick("url")}
            >
              URL
            </div>
            <div
              className={`rounded-tr-2xl border-r-4 border-main ${
                activeTab == "ref" ? classActive : classPassive
              }`}
              onClick={() => handleTabClick("ref")}
            >
              Réferences
            </div>
          </div>
          <div className="w-full h-[600px] border-l-4 border-r-4 border-b-4 border-main mb-[100px]  rounded-b-2xl   text-xl">
            <div className="overflow-y-auto h-full w-full  px-10 py-5">
              {activeTab == "resume" && (
                <div className="my-4">{article.resume}</div>
              )}
              {activeTab == "contenu" && (
                <div className="my-4">{article.text}</div>
              )}
              {activeTab == "author" && (
                <div>
                  {article.authors.map((author) => (
                    <h1 className="font-semibold text-2xl pt-5">
                      <span className="text-4xl text-main font-bold">. </span>
                      {author}
                    </h1>
                  ))}
                </div>
              )}
              {activeTab == "keyword" && (
                <div>
                  {article.keywords.map((keyword) => (
                    <h1 className="font-semibold text-2xl pt-5">
                      <span className="text-4xl text-main font-bold">. </span>
                      {keyword}
                    </h1>
                  ))}
                </div>
              )}
              {activeTab == "ref" && (
                <div>
                  {article.references.map((ref) => (
                    <h1 className="font-semibold text-2xl pt-5">
                      <span className="text-4xl text-main font-bold">. </span>
                      {ref}
                    </h1>
                  ))}
                </div>
              )}
              {activeTab == "insti" && (
                <div>
                  {article.institutions.map((institution) => (
                    <h1 className="font-semibold text-2xl pt-5">
                      <span className="text-4xl text-main font-bold">. </span>
                      {institution}
                    </h1>
                  ))}
                </div>
              )}
              {activeTab == "url" && (
                <div className="flex flex-col h-full w-full justify-center items-center gap-[50px]">
                  <h1 className="text-3xl lg:text-4xl font-bold underline">
                    {article.pdfUrl}
                  </h1>
                  {/* <button
                    className="bg-[#E1F8FF] text-main py-2 px-16 lg:px-20 rounded-2xl border-4 border-main font-semibold text-3xl"
                    onClick={() => {
                      window.open(article.pdfUrl, "_blank");
                    }}
                  >
                    Download here
                  </button> */}
                </div>
              )}
            </div>
          </div>
        </div>
        {/*mobile version*/}
        <div className="md:hidden font-inter py-10">
          <div
            className="text-2xl w-full text-bold px-10 border-l-4 border-main font-bold"
            onClick={() => setResume(!resume)}
          >
            <h1>Résumé</h1>
          </div>
          {resume && <div className="py-5 text-md">{article.resume}</div>}
          <div
            className="text-2xl w-full text-bold px-10 border-l-4 border-main font-bold mt-10"
            onClick={() => setKeyWord(!keyWord)}
          >
            <h1>Mots clés</h1>
          </div>
          {keyWord && (
            <div className="py-5 text-md">
              {article.keywords.map((keyword) => (
                <h1 className="font-semibold text-lg pt-1">
                  <span className="text-4xl text-main font-bold pr-5">.</span>
                  {keyword}
                </h1>
              ))}
            </div>
          )}
          <div
            className="text-2xl w-full text-bold px-10 border-l-4 border-main font-bold mt-10"
            onClick={() => setAuthor(!author)}
          >
            <h1>Auteurs</h1>
          </div>
          {author && (
            <div className="py-5 text-md">
              {article.authors.map((author) => (
                <h1 className="font-semibold text-lg pt-1">
                  <span className="text-4xl text-main font-bold pr-5">.</span>
                  {author}
                </h1>
              ))}
            </div>
          )}
          <div
            className="text-2xl w-full text-bold px-10 border-l-4 border-main font-bold mt-10"
            onClick={() => setInstitution(!institution)}
          >
            <h1>Institutions</h1>
          </div>
          {institution && (
            <div className="py-5 text-md">
              {article.institutions.map((institutione) => (
                <h1 className="font-semibold text-lg pt-1">
                  <span className="text-4xl text-main font-bold pr-5">.</span>
                  {institutione}
                </h1>
              ))}
            </div>
          )}
          <div
            className="text-2xl w-full text-bold px-10 border-l-4 border-main font-bold mt-10"
            onClick={() => setText(!text)}
          >
            <h1>Contenu</h1>
          </div>
          {text && <div className="py-5 text-md">{article.text}</div>}
          <div
            className="text-2xl w-full text-bold px-10 border-l-4 border-main font-bold mt-10"
            onClick={() => setURL(!URL)}
          >
            <h1>URL</h1>
          </div>
          {URL && (
            <div className="flex flex-col h-full  justify-center items-center  gap-[20px] py-10">
              <h1 className="text-xl font-bold underline text-center">
                {article.pdfUrl}
              </h1>
              {/* <button
                className="bg-[#E1F8FF] text-main py-2 px-10 rounded-2xl border-4 border-main font-semibold text-md"
                onClick={() => {
                  window.open(article.pdfUrl, "_blank");
                }}
              >
                Download here
              </button> */}
            </div>
          )}
          <div
            className="text-2xl w-full text-bold px-10 border-l-4 border-main font-bold mt-10"
            onClick={() => setRef(!ref)}
          >
            <h1>Références</h1>
          </div>
          {ref && (
            <div className="py-5 text-md pb-10">
              {article.references.map((reference) => (
                <h1 className="font-semibold text-lg pt-1">
                  <span className="text-4xl text-main font-bold pr-5">.</span>
                  {reference}
                </h1>
              ))}
            </div>
          )}
        </div>
      </div>

      <FooterSigned />
    </div>
  );
}
