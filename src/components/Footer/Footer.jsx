import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

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
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const [closing, setClosing] = useState(false);
    const dropdownRef = useRef(null);
    let timeoutId = null;

    const languages = [
        { code: 'en', name: 'English' },
        { code: 'es', name: 'Español' },
        { code: 'pt', name: 'Português' },
        { code: 'fr', name: 'Français' },
        { code: 'de', name: 'Deutsch' },
        { code: 'it', name: 'Italiano' },
        { code: 'ja', name: '日本語' },
        { code: 'zh', name: '中文' },
    ];

    const getCurrentLanguageName = () => {
        const lang = languages.find(l => l.code === selectedLanguage);
        return lang ? lang.name : 'English';
    };

    const handleLanguageSelect = (languageCode) => {
        setSelectedLanguage(languageCode);
        setIsLanguageDropdownOpen(false);
        console.log(`Idioma alterado para: ${languageCode}`);
    };

    const handleMouseEnter = () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }
        setClosing(false);
        setIsLanguageDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setClosing(true);
        timeoutId = setTimeout(() => {
            setIsLanguageDropdownOpen(false);
            setClosing(false);
        }, 200);
    };

    const dropdownClasses = `absolute bottom-full left-0 mb-2 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl min-w-[200px] z-50 transition-all duration-300 ease-out ${isLanguageDropdownOpen && !closing
        ? 'translate-y-0 opacity-100'
        : '-translate-y-4 opacity-0 pointer-events-none'
        }`;

    return (
        <footer className="relative w-full bg-black text-white pt-0 pb-2 py-5 px-6 lg:px-10 md:py-5">
            <div className="flex flex-wrap justify-center md:justify-center items-center gap-4 text-sm">
                <a href="https://github.com/ThomasSantosz" rel='noreferrer' target='_blank' className="text-white/40 hover:text-white transition-colors duration-200 text-xs md:text-[13px] whitespace-nowrap">
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/thomas-santos-ramos-063683304/" rel='noreferrer' target='_blank' className="text-white/40 hover:text-white transition-colors duration-200 text-xs md:text-[13px] whitespace-nowrap">
                    LinkedIn
                </a>
                {/*<a href="#" className="underline text-white/40 hover:text-white transition-colors duration-200 text-xs md:text-[13px] whitespace-nowrap">
                            Cookie Preferences
                        </a>
                        <a href="#" className="text-white/40 hover:text-white transition-colors duration-200 text-xs md:text-[13px] whitespace-nowrap">
                            Security Measures
                        </a>
                        <a href="#" className="text-white/40 hover:text-white transition-colors duration-200 text-xs md:text-[13px] whitespace-nowrap">
                            Sitemap
                        </a>*/}
                <span className="text-white text-xs md:text-[13px] whitespace-nowrap">
                    © 2025 Thomas, Inc.
                </span>
            </div>
            <div className="mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div
                        className="relative"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        ref={dropdownRef}
                    >
                        {/*<button className="flex items-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 rounded-lg cursor-pointer transition-all duration-300 group">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
                                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                            </svg>
                            <span className="text-sm font-medium">
                                {getCurrentLanguageName()}
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
                        </button>

                        {isLanguageDropdownOpen && (
                            <div className={dropdownClasses}>
                                <div className="absolute -bottom-3 left-6">
                                    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 10L0 0H20L10 10Z" fill="#1a1a1a" />
                                    </svg>
                                </div>

                                <ul className="py-2 px-2">
                                    {languages.map((language) => (
                                        <li key={language.code}>
                                            <button
                                                className="w-full text-left px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg cursor-pointer transition-colors duration-200 flex items-center justify-between"
                                                onClick={() => handleLanguageSelect(language.code)}
                                            >
                                                <span>{language.name}</span>
                                                {language.code === selectedLanguage && (
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.333 4L6.00033 11.3333L2.66699 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                )}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}*/}
                    </div>


                </div>
            </div>
        </footer>
    );
};

export default Footer;