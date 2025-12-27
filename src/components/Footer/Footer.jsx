import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../contexts/TranslationContext';

const Logo = ({ className = "fill-current" }) => {
    return (
        <svg
            width="40"
            height="40"
            viewBox="0 0 588 588"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <g clipPath="url(#clip0_1001_2)">
                <path
                    d="M282.971 62.2441C282.971 73.7931 280.97 85.2551 277.058 96.1211L229.724 227.584H588V360.416H515.327C460.099 360.416 415.327 405.188 415.327 460.416V588H255.586V507.395C255.586 493.968 258.29 480.679 263.536 468.319L320.243 334.735V332.964H0V227.584H39.9639C95.1923 227.584 139.964 182.812 139.964 127.584V0H282.971V62.2441Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath id="clip0_1001_2">
                    <rect width="588" height="588" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

const Footer = () => {
    const { language, setLanguage, isTranslating } = useTranslation();
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Apenas Português e Inglês
    const languages = [
        { code: 'pt', name: 'Português', flag: '🇧🇷' },
        { code: 'en', name: 'English', flag: '🇺🇸' },
    ];

    // Fechar dropdown ao clicar fora
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsLanguageDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLanguageSelect = async (languageCode) => {
        if (isTranslating) return;
        await setLanguage(languageCode);
        setIsLanguageDropdownOpen(false);
    };

    const getCurrentLanguage = () => {
        return languages.find(l => l.code === language) || languages[0];
    };

    // Traduz o texto de copyright automaticamente
    const copyrightText = language === 'en' ? '© 2025 Thomas, Inc.' : '© 2025 Thomas, Inc.';

    return (
        <footer className="relative w-full bg-black text-white pt-0 pb-2 py-5 px-6 lg:px-10 md:py-5">
            <div className="flex flex-wrap justify-center md:flex-row md:justify-between items-center gap-4 text-sm">
                {/* Botão de seleção de idioma */}
                <div
                    className="relative"
                    ref={dropdownRef}
                >
                    <button
                        className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg cursor-pointer transition-all duration-300 disabled:opacity-50"
                        onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                        disabled={isTranslating}
                    >
                        {isTranslating ? (
                            <>
                                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                                <span className="text-sm">
                                    {language === 'en' ? 'Translating...' : 'Traduzindo...'}
                                </span>
                            </>
                        ) : (
                            <>
                                <span className="text-lg">{getCurrentLanguage().flag}</span>
                                <span className="text-sm font-medium">
                                    {getCurrentLanguage().name}
                                </span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className={`bi bi-chevron-down transition-transform duration-300 ${isLanguageDropdownOpen ? 'rotate-180' : ''}`}
                                    viewBox="0 0 16 16"
                                >
                                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                </svg>
                            </>
                        )}
                    </button>

                    {isLanguageDropdownOpen && (
                        <div className="absolute bottom-full left-0 mb-2 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl min-w-[140px] z-50">
                            <div className="py-2">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        className={`w-full text-left px-4 py-3 text-sm transition-colors duration-200 flex items-center gap-3 hover:bg-white/10 ${language === lang.code ? 'bg-white/10' : ''}`}
                                        onClick={() => handleLanguageSelect(lang.code)}
                                    >
                                        <span className="text-lg">{lang.flag}</span>
                                        <span className={`${language === lang.code ? 'text-white font-medium' : 'text-white/70'}`}>
                                            {lang.name}
                                        </span>
                                        {language === lang.code && (
                                            <svg className="ml-auto w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <div className="space-x-10">
                    <a
                        href="https://github.com/ThomasSantosz"
                        rel='noreferrer'
                        target='_blank'
                        className="text-white/40 hover:text-white transition-colors duration-200 text-xs md:text-[13px] whitespace-nowrap"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/thomas-santos-ramos-063683304/"
                        rel='noreferrer'
                        target='_blank'
                        className="text-white/40 hover:text-white transition-colors duration-200 text-xs md:text-[13px] whitespace-nowrap"
                    >
                        LinkedIn
                    </a>
                    <span className="text-white text-xs md:text-[13px] whitespace-nowrap">
                        {copyrightText}
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;