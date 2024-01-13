import React, { useState } from 'react';

const ArticleBoxmod = ({ title, authors, summary }) => {
    const [showFullSummary, setShowFullSummary] = useState(false);
    const [isTitleHovered, setIsTitleHovered] = useState(false);

    return (
        <div className="w-full border p-5 mb-8 shadow-md rounded-md relative">
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
            <div className="flex justify-between mt-4">
                {!showFullSummary && (
                    <div className="cursor-pointer text-blue-500 underline" onClick={() => setShowFullSummary(!showFullSummary)}>
                        Lire la suite >>
                    </div>
                )}
                <button className="bg-black text-white px-4 py-2 rounded" onClick={() => alert('Logique de modification')}>
                    Modifier
                </button>
            </div>
        </div>
    );
};

export default ArticleBoxmod;

