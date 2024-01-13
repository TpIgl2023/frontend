import React, { useState, useEffect } from 'react';
import NavArticles from '../components/navbars/NavArticles';
import FooterSigned from '../components/footers/FooterSigned';

export default function ArticleInfo() {
    const [selectedButton, setSelectedButton] = useState('references');

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };

    useEffect(() => {
        handleButtonClick('references');
    }, []);

    const buttons = ['references', 'resume', 'institution', 'auteurs', 'url', 'text', 'motcle'];

    const articleInfo = {
        references: [
            'Maecenas hendrerit aliquet quam, et temps justo consequat ac. Don in vestibulum turpis, a vehicula me Duis',
            'Maecenas hendrerit aliquet quam, et temps justo consequat ac. Donec in vestibulum turpis, a vehicula me Duis',
            'Maecenas hendrerit aliquet quam, et temps justo consequat ac Donec in vestibulum turpis, a vehicula me Duis',
        ],
        resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. General relativity Maecenas hendrerit aliquet quam, et tempus justo consequat ac. Donec in vestibulum turpis, a vehicula metus. Duis...',
        institution: [
            'Department of CSE, Lucknow, UP, India (ko@gmail.com)',
            'Vardhaman College of Engineering (knn@gmail.com)',
            'Department of CSE, UP, India (kpn@gmail.com)',
        ],
        auteurs: ['Fares', 'CCD'],
        url: 'Vide',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. General relativity Maecenas hendrerit aliquet quam, et tempus justo consequat ac. Donec in vestibulum turpis, a vehicula metus. Duis...',
        motcle: ['Dataset', 'Knn', 'Gaussian Naive', 'Lstm'],
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <NavArticles />

            <div className="container mx-auto mt-10 border border-blue-500 rounded-lg overflow-hidden">
                {/* Version pour les grands écrans */}
                <div className="hidden lg:flex">
                    {buttons.map((buttonName, index) => (
                        <button
                            key={index}
                            onClick={() => handleButtonClick(buttonName)}
                            className={`flex-1 px-4 py-2 border border-blue-500 ${selectedButton === buttonName ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
                                } ${index === 0 ? 'rounded-l' : ''} ${index === buttons.length - 1 ? 'rounded-r' : ''} ${index !== 0 ? 'border-l' : ''
                                }`}
                        >
                            {buttonName.charAt(0).toUpperCase() + buttonName.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Version pour les petites écrans */}
                <div className="lg:hidden">
                    <h2 className="text-3xl font-bold mb-4">Contenu de l'article</h2>
                    <div className="flex flex-col">
                        {buttons.map((buttonName, index) => (
                            <button
                                key={index}
                                onClick={() => handleButtonClick(buttonName)}
                                className={`w-full px-4 py-2 border mb-2 ${selectedButton === buttonName ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
                                    }`}
                            >
                                {buttonName.charAt(0).toUpperCase() + buttonName.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mt-2 p-4 border ">
                    {selectedButton && (
                        <div>
                            {selectedButton !== 'institution' && selectedButton !== 'motcle' && selectedButton !== 'url' && (
                                <h2 className="text-xl lg:text-2xl font-bold mb-4">{articleInfo[selectedButton]}</h2>
                            )}
                            {/* Afficher le contenu en fonction du bouton sélectionné */}
                            {selectedButton === 'institution' && (
                                <ul>
                                    {articleInfo.institution.map((institution, index) => (
                                        <li key={index}>{institution}</li>
                                    ))}
                                </ul>
                            )}
                            {selectedButton === 'auteurs' && (
                                <ul>
                                    {articleInfo.auteurs.map((auteur, index) => (
                                        <li key={index}>{auteur}</li>
                                    ))}
                                </ul>
                            )}
                            {selectedButton === 'references' && (
                                <ol>
                                    {articleInfo.references.map((reference, index) => (
                                        <li key={index}>{`[${index + 1}] ${reference}`}</li>
                                    ))}
                                </ol>
                            )}
                            {selectedButton === 'motcle' && (
                                <ul>
                                    {articleInfo.motcle.map((motcle, index) => (
                                        <li key={index}>{motcle}</li>
                                    ))}
                                </ul>
                            )}
                            {selectedButton === 'url' && (
                                <div className="flex flex-col items-center">
                                    <p className="text-sm lg:text-base">Cliquez ici pour voir le PDF</p>
                                    <button
                                        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                                        onClick={() => console.log('Ouvrir le PDF')}
                                    >
                                        PDF
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            <FooterSigned />
        </div>
    );
}
