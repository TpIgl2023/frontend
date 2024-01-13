import React from 'react';
import NavArticles from '../components/navbars/NavArticles';
import FooterSigned from '../components/footers/FooterSigned';
import ArticleListmod from '../components/ArticleListmod';

const ArticleMod = () => {
    const articles = [
        {
            title: "Titre de l'article 1",
            authors: "Auteur(s) 1",
            summary: "Résumé de l'article 1. La suite du résumé est composée de points...",
            isFavorite: false,
        },
        {
            title: "Titre de l'article 2",
            authors: "Auteur(s) 2",
            summary: "Résumé de l'article 2. La suite du résumé est composée de points...",
            isFavorite: false,
        },
        {
            title: "Titre de l'article 2",
            authors: "Auteur(s) 2",
            summary: "Résumé de l'article 2. La suite du résumé est composée de points...",
            isFavorite: false,
        },
        // Ajoutez d'autres articles 
    ];

    return (
        <div>
            <NavArticles />
            <div className="my-20" />
            <ArticleListmod articles={articles} />
            <FooterSigned />
        </div>
    );
};

export default ArticleMod;
