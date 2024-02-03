import React, { useState } from "react";

function InputText({ fieldName, Value, setValue }) {
  return (
    <div>
      <label>
        <div className="flex w-full justify-center align-middle flex-col">
          <div className="text-white text-xl font-semibold">{fieldName} :</div>
          <input
            className="w-full rounded my-1 font-semibold"
            type="text"
            value={Value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </label>
    </div>
  );
}

function InputTextArea({ fieldName, Value, setValue }) {
  return (
    <div>
      <label>
        <div className="flex w-w-full justify-center align-middle flex-col">
          <div className="text-white text-l font-inter font-semibold">
            {fieldName} :
          </div>
          <textarea
            className="w-full rounded my-1 font-inter font-semibold"
            value={Value}
            onChange={(e) => setValue(e.target.value)}
          />
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
  var [Title, setTitle] = useState(Article.Title);
  var [pdfUrl, setPdfUrl] = useState(Article.pdfUrl);
  var [Summary, setSummary] = useState(Article.Summary);
  var [Authors, setAuthors] = useState(Article.Authors.join(", "));
  var [institutions, setInstitutions] = useState(
    Article.institutions.join(", ")
  );
  var [KeyWords, setKeyWords] = useState(Article.KeyWords.join(", "));
  var [text, setText] = useState(Article.text);
  var [references, setReferences] = useState(Article.references.join(", "));
  var [publishDate, setPublishDate] = useState(Article.publishDate);

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
          backgroundColor: "#1b76ff",
          padding: "1em",
          width: "80%",
          maxWidth: "1000px",
          borderRadius: "10px",
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="flex justify-center align-middle flex-col"
        >
          <div className="w-full">
            <label className="text-white text-xl font-inter font-semibold">
              PDF URL:
              <input
                id="pdfUrl"
                className="rounded w-full text-black"
                type="text"
                value={pdfUrl}
                onChange={(e) => setPdfUrl(e.target.value)}
              />
            </label>
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
          <div>
            <label className="text-white text-xl font-inter font-semibold">
              Publish Date:
              <input
                id="publishDate"
                className="text-black rounded ml-6"
                type="date"
                value={publishDate}
                onChange={(e) => setPublishDate(e.target.value)}
              />
            </label>
          </div>

          <div className="w-full justify-center flex ">
            <button
              type="button"
              className="inline-block rounded max-w-[200px] bg-[#2e5591] px-8 pb-4 pt-4 text-m font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              onClick={handleClick}
            >
              Submit
            </button>
          </div>
        </form>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}
