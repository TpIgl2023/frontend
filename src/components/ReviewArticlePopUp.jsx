import React, { useState } from "react";

function InputText({ fieldName, Value, setValue }) {
  return (
    <div>
      <label>
        <div className="flex w-full justify-center align-middle flex-col py-4">
          <div className="text-main text-xl font-semibold px-4 py-2">
            {fieldName} :
          </div>
          <div className="px-5 py-4 border-4 border-main">
            <textarea
              rows="3"
              className="w-full rounded-lg  font-semibold  outline-none"
              type="text"
              value={Value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>
      </label>
    </div>
  );
}

function InputTextArea({ fieldName, Value, setValue }) {
  return (
    <div>
      <label>
        <div className="flex w-w-full justify-center align-middle flex-col py-2">
          <div className="text-main text-xl px-4 py-2 font-inter font-semibold">
            {fieldName} :
          </div>
          <div className="px-5 py-4 border-4 border-main">
            <textarea
              rows="6"
              className=" w-full rounded-lg  my-1 font-inter font-semibold outline-none"
              value={Value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>
      </label>
    </div>
  );
}

export default function ReviewArticlePopUp({
  isOpen,
  handleClose,
  article,
  handleSubmit,
}) {
  console.log("the Article of the pop up is: ", JSON.stringify(article));
  const Article = { ...article };
  const id = Article.id;
  var [Title, setTitle] = useState(Article.Title? Article.Title: "");
  var [pdfUrl, setPdfUrl] = useState(Article.pdfUrl? Article.pdfUrl: "");
  var [Summary, setSummary] = useState(Article.Summary? Article.Summary: "");
  var [Authors, setAuthors] = useState(Article.Authors? Article.Authors.join(", "): "");
  var [institutions, setInstitutions] = useState(
    Article.institutions? Article.institutions.join(", ") : ""
  );
  var [KeyWords, setKeyWords] = useState(Article.KeyWords? Article.KeyWords.join(", ") : "");
  var [text, setText] = useState(Article.text? Article.text: "");
  var [references, setReferences] = useState(Article.references? Article.references.join(", "): "");
  var [publishDate, setPublishDate] = useState(Article.publishDate ? Article.publishDate: "");

  function handleClick() {
    let Article = {
      id: id,
      Title: Title,
      pdfUrl: pdfUrl,
      Summary: Summary,
      Authors: Authors.split(","),
      institutions: institutions.split(","),
      KeyWords: KeyWords.split(","),
      text: text,
      references: references.split(","),
      publishDate: publishDate,
    };
    handleSubmit(Article);
    handleClose();
    console.log(Article);
  }

  if (!isOpen) {
    return null;
  }

  console.log("Title: ", Title);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 500,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "1em",
          maxHeight: "90%",
          width: "88%",
          overflow: "auto",
          maxWidth: "1000px",
          borderRadius: "20px",
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="flex justify-center align-middle flex-col overflow-auto font-inter"
        >
          <div className="flex justify-center sm:justify-end">
            <button
              onClick={handleClose}
              className=" px-6 py-2 font-bold bg-auto bg-red-500 text-white rounded-lg text-lg "
            >
              Close
            </button>
          </div>
          <h1 className="text-center pb-10 font-bold text-3xl lg:text-4xl text-main">
            Article Review
          </h1>
          <div className="w-full my-10">
            <label className=" text-xl font-inter font-semibold  px-4 text-main">
              PDF URL:
            </label>
            <div className="px-5 py-4 mt-2 border-4 border-main">
              <input
                id="pdfUrl"
                className="px-4 underline py-2 rounded-lg w-full font-bold text-black outline-none "
                type="text"
                value={pdfUrl}
                onChange={(e) => setPdfUrl(e.target.value)}
              />
            </div>
          </div>
          <InputText
            inputId="Title"
            fieldName="Title"
            Value={Title}
            setValue={setTitle}
          />
          <InputTextArea
            inputId="Summary"
            fieldName="Summary"
            Value={Summary}
            setValue={setSummary}
          />
          <InputText
            inputId="Authors"
            fieldName="Authors"
            Value={Authors}
            setValue={setAuthors}
          />
          <InputText
            inputId="Institutions"
            fieldName="Institutions"
            Value={institutions}
            setValue={setInstitutions}
          />
          <InputText
            inputId="KeyWords"
            fieldName="KeyWords"
            Value={KeyWords}
            setValue={setKeyWords}
          />
          <InputTextArea
            inputId="text"
            fieldName="Text"
            Value={text}
            setValue={setText}
          />
          <InputText
            inputId="references"
            fieldName="References"
            Value={references}
            setValue={setReferences}
          />
          <div className="flex flex-col gap-[50px] justify-center items-center xs:flex-row xs:justify-evenly py-[50px]">
            <label className="text-main text-lg sm:text-xl font-inter font-semibold">
              Publish Date:
            </label>
            <input
              id="publishDate"
              className="text-semibold text-lg sm:text-xl font-bold rounded ml-6 "
              type="date"
              value={publishDate}
              onChange={(e) => setPublishDate(e.target.value)}
            />
          </div>

          <div className="w-full justify-evenly flex mb-10">
            <button
              type="button"
              className="inline-block rounded-2xl bg-[#1b76ff] font-semibold py-4  px-[50px] sm:px-[100px] text-xl uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              onClick={handleClick}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
