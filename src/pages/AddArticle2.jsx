import React, { useState, useEffect } from 'react';
import NavArticles from '../components/navbars/NavArticles';
import FooterSigned from '../components/footers/FooterSigned';

const ArticleTitle = ({ titre, boxHeight, handleTextareaChange }) => {
    return (
        <div className="mb-4 text-gray-700 dark:text-gray-400">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Titre :
            </h5>
            <textarea
                id="boxTextarea"
                className="border-none outline-none text-base resize-none w-full"
                value={titre}
                onChange={(e) => handleTextareaChange(e)}
                style={{ height: boxHeight }}
            />
        </div>
    );
};

const ArticleSummary = ({ resume, boxHeight, handleSummaryChange }) => {
    return (
        <div className="mb-4 text-gray-700 dark:text-gray-400">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Résumé :
            </h5>
            <textarea
                id="boxSummary"
                className="border-none outline-none text-base resize-none w-full"
                value={resume}
                onChange={(e) => handleSummaryChange(e)}
                style={{ height: boxHeight }}
            />
        </div>
    );
};

const ArticleReferences = ({ references, boxHeight, handleReferencesChange }) => {
    return (
        <div className="mb-4 text-gray-700 dark:text-gray-400">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Références :
            </h5>
            <textarea
                id="boxReferences"
                className="border-none outline-none text-base resize-none w-full"
                value={references}
                onChange={(e) => handleReferencesChange(e)}
                style={{ height: boxHeight }}
            />
        </div>
    );
};

const ArticleURL = ({ url, boxHeight, handleURLChange }) => {
    return (
        <div className="mb-4 text-gray-700 dark:text-gray-400">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                URL :
            </h5>
            <textarea
                id="boxURL"
                className="border-none outline-none text-base resize-none w-full"
                value={url}
                onChange={(e) => handleURLChange(e)}
                style={{ height: boxHeight }}
            />
        </div>
    );
};

const ArticleText = ({ text, boxHeight, handleTextChange }) => {
    return (
        <div className="mb-4 text-gray-700 dark:text-gray-400">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Texte :
            </h5>
            <textarea
                id="boxText"
                className="border-none outline-none text-base resize-none w-full"
                value={text}
                onChange={(e) => handleTextChange(e)}
                style={{ height: boxHeight }}
            />
        </div>
    );
};

const ArticleAuthors = ({ authors, boxHeight, handleAuthorsChange }) => {
    return (
        <div className="mb-4 text-gray-700 dark:text-gray-400">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Auteurs :
            </h5>
            <textarea
                id="boxAuthors"
                className="border-none outline-none text-base resize-none w-full"
                value={authors}
                onChange={(e) => handleAuthorsChange(e)}
                style={{ height: boxHeight }}
            />
        </div>
    );
};

const ArticleInstitution = ({ institution, boxHeight, handleInstitutionChange }) => {
    return (
        <div className="mb-4 text-gray-700 dark:text-gray-400">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Institution :
            </h5>
            <textarea
                id="boxInstitution"
                className="border-none outline-none text-base resize-none w-full"
                value={institution}
                onChange={(e) => handleInstitutionChange(e)}
                style={{ height: boxHeight }}
            />
        </div>
    );
};


const AddArticle2 = () => {
    const [articles, setArticles] = useState([
        {
            titre: 'Noteworthy technology acquisitions 2021',
            resume: 'Ceci est le résumé',
            references: 'URL et autres références',
            url: 'https://example.com',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            authors: 'John Doe, Jane Smith',
        },
        // Ajoutez d'autres articles
    ]);

    const [boxHeightTitle, setBoxHeightTitle] = useState('auto');
    const [boxHeightSummary, setBoxHeightSummary] = useState('auto');
    const [boxHeightReferences, setBoxHeightReferences] = useState('auto');
    const [boxHeightURL, setBoxHeightURL] = useState('auto');
    const [boxHeightText, setBoxHeightText] = useState('auto');
    const [boxHeightAuthors, setBoxHeightAuthors] = useState('auto');
    const [boxHeightInstitution, setBoxHeightInstitution] = useState('auto');


    useEffect(() => {
        // Mettez à jour la hauteur de la boîte en fonction du contenu du titre
        const textAreaHeightTitle = document.getElementById('boxTextarea').scrollHeight;
        setBoxHeightTitle(textAreaHeightTitle + 'px');
    }, [articles]);

    useEffect(() => {
        // Mettez à jour la hauteur de la boîte en fonction du contenu du résumé
        const textAreaHeightSummary = document.getElementById('boxSummary').scrollHeight;
        setBoxHeightSummary(textAreaHeightSummary + 'px');
    }, [articles]);

    useEffect(() => {
        // Mettez à jour la hauteur de la boîte en fonction du contenu des références
        const textAreaHeightReferences = document.getElementById('boxReferences').scrollHeight;
        setBoxHeightReferences(textAreaHeightReferences + 'px');
    }, [articles]);

    useEffect(() => {
        // Mettez à jour la hauteur de la boîte en fonction du contenu de l'URL
        const textAreaHeightURL = document.getElementById('boxURL').scrollHeight;
        setBoxHeightURL(textAreaHeightURL + 'px');
    }, [articles]);

    useEffect(() => {
        // Mettez à jour la hauteur de la boîte en fonction du contenu du texte
        const textAreaHeightText = document.getElementById('boxText').scrollHeight;
        setBoxHeightText(textAreaHeightText + 'px');
    }, [articles]);

    useEffect(() => {
        // Mettez à jour la hauteur de la boîte en fonction du contenu des auteurs
        const textAreaHeightAuthors = document.getElementById('boxAuthors').scrollHeight;
        setBoxHeightAuthors(textAreaHeightAuthors + 'px');
    }, [articles]);

    useEffect(() => {
        // Mettez à jour la hauteur de la boîte en fonction du contenu de l'institution
        const textAreaHeightInstitution = document.getElementById('boxInstitution').scrollHeight;
        setBoxHeightInstitution(textAreaHeightInstitution + 'px');
    }, [articles]);


    const handleTextareaChange = (e) => {
        const updatedArticles = [...articles];
        updatedArticles[0].titre = e.target.value;
        setArticles(updatedArticles);
        setBoxHeightTitle('auto');
    };

    const handleSummaryChange = (e) => {
        const updatedArticles = [...articles];
        updatedArticles[0].resume = e.target.value;
        setArticles(updatedArticles);
        setBoxHeightSummary('auto');
    };

    const handleReferencesChange = (e) => {
        const updatedArticles = [...articles];
        updatedArticles[0].references = e.target.value;
        setArticles(updatedArticles);
        setBoxHeightReferences('auto');
    };

    const handleURLChange = (e) => {
        const updatedArticles = [...articles];
        updatedArticles[0].url = e.target.value;
        setArticles(updatedArticles);
        setBoxHeightURL('auto');
    };

    const handleTextChange = (e) => {
        const updatedArticles = [...articles];
        updatedArticles[0].text = e.target.value;
        setArticles(updatedArticles);
        setBoxHeightText('auto');
    };

    const handleAuthorsChange = (e) => {
        const updatedArticles = [...articles];
        updatedArticles[0].authors = e.target.value;
        setArticles(updatedArticles);
        setBoxHeightAuthors('auto');
    };

    const handleInstitutionChange = (e) => {
        const updatedArticles = [...articles];
        updatedArticles[0].institution = e.target.value;
        setArticles(updatedArticles);
        setBoxHeightInstitution('auto');
    };


    return (
        <div>
            <NavArticles class="mb-20" />
            <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-1">
                Add New Article
            </h1>
            {articles.map((article, index) => (
                <div key={index} className="m-7 border border-blue-500 w-full p-8 bg-white rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mx-auto">
                    <ArticleTitle
                        titre={article.titre}
                        boxHeight={boxHeightTitle}
                        handleTextareaChange={handleTextareaChange}
                    />
                    <ArticleSummary
                        resume={article.resume}
                        boxHeight={boxHeightSummary}
                        handleSummaryChange={handleSummaryChange}
                    />
                    <ArticleReferences
                        references={article.references}
                        boxHeight={boxHeightReferences}
                        handleReferencesChange={handleReferencesChange}
                    />
                    <ArticleURL
                        url={article.url}
                        boxHeight={boxHeightURL}
                        handleURLChange={handleURLChange}
                    />
                    <ArticleText
                        text={article.text}
                        boxHeight={boxHeightText}
                        handleTextChange={handleTextChange}
                    />
                    <ArticleAuthors
                        authors={article.authors}
                        boxHeight={boxHeightAuthors}
                        handleAuthorsChange={handleAuthorsChange}
                    />
                    <ArticleInstitution
                        institution={article.institution}
                        boxHeight={boxHeightInstitution}
                        handleInstitutionChange={handleInstitutionChange}
                    />

                    <div className="flex justify-center">
                        <button className="bg-blue-500 text-white px-6 py-2 rounded-full">
                            Add
                        </button>
                    </div>
                </div>
            ))}
            <FooterSigned />
        </div>
    );
};

export default AddArticle2;
