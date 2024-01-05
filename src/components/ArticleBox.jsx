// components/ArticleBox.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const ArticleBox = ({ title, authors, summary }) => {
    const [heartState, setHeartState] = useState(false);
    const [showFullSummary, setShowFullSummary] = useState(false);
    const [isTitleHovered, setIsTitleHovered] = useState(false);

    const boxStyle = {
        width: '90%', // Modification ici pour occuper toute la largeur
        border: '1px solid #ccc',
        padding: '10px',
        marginBottom: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        borderRadius: '10px',
        position: 'relative',
        margin: '0 auto',
    };

    const titleStyle = {
        color: 'black',
        fontSize: isTitleHovered ? '22px' : '20px',
        fontWeight: 'bold',
        textDecoration: isTitleHovered ? 'underline' : 'none',
        transition: 'font-size 0.3s, text-decoration 0.3s',
    };

    const authorStyle = {
        color: 'blue',
        fontSize: '16px',
        margin: '10px 0',
    };

    const summaryStyle = {
        color: 'black',
        fontSize: '14px',
        lineHeight: '1.5',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxHeight: showFullSummary ? 'none' : '75px',
    };

    const readMoreButtonStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        cursor: 'pointer',
        color: 'blue',
        textDecoration: 'underline',
    };

    const handleLikeClick = () => {
        setHeartState(!heartState);
    };

    const handleReadMoreClick = () => {
        setShowFullSummary(!showFullSummary);
    };

    return (
        <div style={boxStyle}>
            <FontAwesomeIcon
                icon={faHeart}
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    color: heartState ? 'red' : 'black',
                    cursor: 'pointer',
                }}
                onClick={handleLikeClick}
            />
            <div
                style={titleStyle}
                onMouseEnter={() => setIsTitleHovered(true)}
                onMouseLeave={() => setIsTitleHovered(false)}
            >
                {title}
            </div>
            <div style={authorStyle}>{authors}</div>
            <div style={summaryStyle}>{summary}</div>
            {!showFullSummary && (
                <div style={readMoreButtonStyle} onClick={handleReadMoreClick}>
                  Lire la suite >>
                </div>
            )}
        </div>
    );
};

export default ArticleBox;
