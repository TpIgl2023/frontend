import React from 'react';
import ArticleBoxmod from './ArticleBoxmod';

const ArticleListmod = ({ articles, onToggleFavorite, onModifyArticle }) => {
    return (
        <div className="m-7 gap-y-16 pb-16" style={{ width: '95%' }}>
            {articles.map((article, index) => (
                <ArticleBoxmod
                    key={index}
                    title={article.title}
                    authors={article.authors}
                    summary={article.summary}
                    isFavorite={article.isFavorite}
                    onToggleFavorite={() => onToggleFavorite(index)}
                    onModifyArticle={() => onModifyArticle(index)}
                />
            ))}
        </div>
    );
};

export default ArticleListmod;
