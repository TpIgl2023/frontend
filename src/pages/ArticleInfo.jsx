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
        url: '',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. General relativity Maecenas hendrerit aliquet quam, et tempus justo consequat ac. Donec in vestibulum turpis, a vehicula metus. Duis...',
        motcle: ['Dataset', 'Knn', 'Gaussian Naive', 'Lstm'],
    };

    return (
        <div className="min-h-screen bg-gray-100 mb-8">
            <NavArticles />

            <div className="container mx-auto mt-10 border border-blue-500 rounded-lg overflow-hidden mb-8">
                {/* Version pour les grands écrans */}
                <div className="hidden lg:flex flex-col items-center">
                    <h2 className="text-3xl font-bold mb-4 w-full text-center">Titre</h2>

                    <div className="flex">
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
                </div>


                {/* Version pour les petites écrans */}
                <div className="lg:hidden mb-8">
                    <h2 className="text-3xl font-bold mb-4 text-center mt-10">Titre</h2>

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
                            {/* Section 'text' */}
                            {selectedButton === 'text' && (
                                <div className="mt-2">
                                    {articleInfo.text && (
                                        <p className="text-justify">
                                            <span className="mr-1"></span> {articleInfo.text.charAt(0).toUpperCase() + articleInfo.text.slice(1)}
                                        </p>
                                    )}
                                </div>
                            )}

                            {/* Section 'resume' */}
                            {selectedButton === 'resume' && (
                                <div className="mt-2">
                                    {articleInfo.resume && (
                                        <p className="text-justify">
                                            <span className="mr-1"></span> {articleInfo.resume.charAt(0).toUpperCase() + articleInfo.resume.slice(1)}
                                        </p>
                                    )}
                                </div>
                            )}

                            {/* Afficher le contenu en fonction du bouton sélectionné */}



                            {/* Section 'institution' */}
                            {selectedButton === 'institution' && (
                                <ul>
                                    {articleInfo.institution.map((institution, index) => (
                                        <li key={index}>
                                            <span className="mr-1">•</span> {institution}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Section 'auteurs' */}
                            {selectedButton === 'auteurs' && (
                                <ul>
                                    {articleInfo.auteurs.map((auteur, index) => (
                                        <li key={index}>
                                            <span className="mr-1">•</span> {auteur}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Section 'references' */}
                            {selectedButton === 'references' && (
                                <ol>
                                    {articleInfo.references.map((reference, index) => (
                                        <li key={index}>
                                            <span className="mr-1">•</span> {`[${index + 1}] ${reference}`}
                                        </li>
                                    ))}
                                </ol>
                            )}


                            {selectedButton === 'motcle' && (
                                <div className="grid grid-cols-3 gap-4">
                                    {articleInfo.motcle.map((motcle, index) => (
                                        <div key={index}>
                                            <span className="mr-1">•</span> {motcle}
                                        </div>
                                    ))}
                                </div>
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
