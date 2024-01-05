// components/ArticleList.js
import React from 'react';
import ArticleBox from './ArticleBox';

const ArticleList = ({ articles }) => {
    const handleToggleFavorite = (index) => {
        const updatedArticles = [...articles];
        updatedArticles[index].isFavorite = !updatedArticles[index].isFavorite;
        // Mettez à jour l'état des articles dans le composant parent
        // (vous pouvez utiliser un état local ou un état géré par Redux, par exemple)
        // ...

        // Vous pouvez également envoyer les articles mis à jour à votre backend pour persister les favoris
        // ...

        // Exemple de mise à jour de l'état local (vous devez adapter cela à votre gestion d'état spécifique)
        // this.setState({ articles: updatedArticles });
    };

    return (
        <div className="grid grid-cols-3 justify-evenly items-center justify-items-center gap-y-16 pb-16">
            {articles.map((article, index) => (
                <ArticleBox
                    key={index}
                    title={article.title}
                    authors={article.authors}
                    summary={article.summary}
                    isFavorite={article.isFavorite}
                    onToggleFavorite={() => handleToggleFavorite(index)}
                />
            ))}
        </div>
    );
};

export default ArticleList;
