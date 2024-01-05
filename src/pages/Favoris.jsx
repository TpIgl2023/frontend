import React from 'react';
import NavArticles from '../components/navbars/NavArticles';
import ArticleList from '../components/ArticleList';
import FooterSigned from '../components/footers/FooterSigned';

const Favoris = () => {
  // Remplacez cette liste d'exemple par votre propre liste d'articles avec la propriété isFavorite
  const favoriteArticles = [
    {
      title: "Article favori 1",
      authors: "Auteur(s) 1",
      summary: "Résumé de l'article favori 1...",
      isFavorite: true,
    },
    // Ajoutez d'autres articles favoris
  ];

  return (
    <div>
      <NavArticles />
      <div style={{ margin: '20px 0' }} />
      <h2 className="text-2xl font-bold mb-4"></h2>
      <ArticleList articles={favoriteArticles} />
      <FooterSigned />
    </div>
  );
};

export default Favoris;
