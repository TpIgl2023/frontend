import React, { useState } from 'react';
import NavArticles from '../components/navbars/NavArticles';
import FooterSigned from '../components/footers/FooterSigned';

export default function ArticleInfo() {
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <NavArticles />

            <div className="container mx-auto mt-10 border border-blue-500 rounded-lg overflow-hidden">
                <div className="flex">
                    {['titre', 'resume', 'institutuin', 'auteurs', 'url', 'text'].map((buttonName, index) => (
                        <button
                            key={index}
                            onClick={() => handleButtonClick(buttonName)}
                            className={`flex-1 px-4 py-2 border border-blue-500 ${selectedButton === buttonName ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
                                } ${index === 0 ? 'rounded-l' : ''} ${index === 5 ? 'rounded-r' : ''} ${index !== 0 ? 'border-l' : ''
                                }`}
                        >
                            {buttonName.charAt(0).toUpperCase() + buttonName.slice(1)}
                        </button>
                    ))}
                </div>

                <div className="mt-2 p-4 ">
                    {selectedButton && (
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Contenu du bouton {selectedButton} :</h2>
                            {/* Afficher le contenu en fonction du bouton sélectionné */}
                            {/* Vous pouvez remplacer ce texte par le contenu réel que vous souhaitez afficher */}
                            <p>Ceci est un exemple de contenu pour le bouton {selectedButton}.</p>
                        </div>
                    )}
                </div>
            </div>

            <FooterSigned />
        </div>
    );
}
