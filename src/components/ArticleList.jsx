import React from 'react';
import ArticleBox from './ArticleBox';

const ArticleList = ({ articles }) => {
    const handleToggleFavorite = (index) => {
        // ... votre logique de bascule de favori
    };

    return (
        <div className="grid grid-cols-3 justify-evenly items-center justify-items-center gap-y-16 pb-16" style={{ width: '100%' }}>
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
