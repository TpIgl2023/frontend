import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const ArticleBox = ({ title, authors, summary, isFavorite, onToggleFavorite }) => {
    const [showFullSummary, setShowFullSummary] = useState(false);
    const [isTitleHovered, setIsTitleHovered] = useState(false);

    return (
        <div className="w-full border p-5 mb-8 shadow-md rounded-md relative">
            <FontAwesomeIcon
                icon={faHeart}
                className={`absolute top-2 right-2 cursor-pointer text-${isFavorite ? 'red' : 'black'}`}
                onClick={onToggleFavorite}
            />
            <div
                className={`text-black font-bold text-${isTitleHovered ? 'xl' : 'lg'} ${isTitleHovered ? 'underline' : 'no-underline'} transition-all duration-300`}
                onMouseEnter={() => setIsTitleHovered(true)}
                onMouseLeave={() => setIsTitleHovered(false)}
            >
                {title}
            </div>
            <div className="text-blue-500 text-sm mt-2">{authors}</div>
            <div className={`text-black text-base leading-6 overflow-hidden ${showFullSummary ? 'max-h-full' : 'max-h-24'} transition-all duration-300`}>
                {summary}
            </div>
            {!showFullSummary && (
                <div className="cursor-pointer text-blue-500 underline absolute bottom-2 right-2" onClick={() => setShowFullSummary(!showFullSummary)}>
                    Lire la suite >>
                </div>
            )}
        </div>
    );
};

export default ArticleBox;
