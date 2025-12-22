import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TemplatesNavbar from '../../components/TemplatesNavbar/TemplatesNavbar'; // Nova navbar específica
import ImgFrames from '../../assets/template-one.png';
import ImgTemplate1 from '../../assets/image-asset-hover.webp';
import ImgTemplate2 from '../../assets/image-asset-hover-2.webp';
import ImgTemplate3 from '../../assets/image-asset-hover-3.webp';
import ImgTemplate4 from '../../assets/image-asset-hover-4.webp';
import ImgTemplate5 from '../../assets/image-asset-hover-5.webp';
import ImgTemplate6 from '../../assets/image-asset-hover-6.webp';
import Footer from '../../components/Footer/Footer';
import TemplatesSidebar from '../../components/TemplatesSidebar/TemplatesSidebar';
import TemplatesFilterHeader from '../../components/TemplatesFilterHeader/TemplatesFilterHeader';
import Banner from '../../components/Banner/Banner';
import PageTitle from '../../components/PageTitle/PageTitle';

const templates = () => {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestionsHeight, setSuggestionsHeight] = useState(0);
    const [isInTemplatesSection, setIsInTemplatesSection] = useState(false);
    const searchRef = useRef(null);
    const suggestionsRef = useRef(null);
    const templatesSectionRef = useRef(null);

    // Const Templetes
    const templatesData = [
        {
            id: 1,
            link: '/template1',
            img: ImgFrames,
            title: 'FRAMES IA',
        },
        {
            id: 2,
            link: '/template2',
            img: ImgTemplate2,
            title: 'MYHRA',
        },
        {
            id: 3,
            link: '/template3',
            img: ImgTemplate3,
            title: 'KLIPSAN',
        },
        {
            id: 4,
            link: '/template4',
            img: ImgTemplate4,
            title: 'RANDI',
        },
        {
            id: 5,
            link: '/template5',
            img: ImgTemplate5,
            title: 'RANDI',
        },
        {
            id: 6,
            link: '/template6',
            img: ImgTemplate6,
            title: 'RANDI',
        },
    ];

    // Popular topics for search suggestions
    const popularTopics = [
        'Photography',
        'Design',
        'Education',
        'Consulting',
        'Art',
        'Health',
        'Marketing',
        'Technology',
        'Construction & Maintenance',
        'Apparel',
        'Music',
        'Real Estate & Properties',
        'Beauty',
        'Travel',
        'Weddings'
    ];

    // Calculate suggestions height when they become visible
    useEffect(() => {
        if (showSuggestions && suggestionsRef.current) {
            const height = suggestionsRef.current.scrollHeight;
            setSuggestionsHeight(height);
        } else {
            setSuggestionsHeight(0);
        }
    }, [showSuggestions]);

    // Close suggestions when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Monitora scroll para detectar quando está na section de templates
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const navbarHeight = 80;

            // Monitora a section de templates
            if (templatesSectionRef.current) {
                const sectionRect = templatesSectionRef.current.getBoundingClientRect();
                const sectionTop = sectionRect.top + window.scrollY;
                const sectionBottom = sectionRect.bottom + window.scrollY;

                // Verifica se está dentro da section (com margem de 100px)
                const isInSection = currentScrollY >= sectionTop - navbarHeight - 100 &&
                    currentScrollY <= sectionBottom - navbarHeight - 100;

                setIsInTemplatesSection(isInSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
    };

    const handleSuggestionClick = (topic) => {
        setSearchQuery(topic);
        setShowSuggestions(false);
        console.log('Searching for topic:', topic);
    };

    const handleInputFocus = () => {
        setShowSuggestions(true);
    };

    return (
        <div className="min-h-screen">
            <PageTitle title="Website Templates: Customizable Web Design Templates - Aetheris AE" />

            <Banner />
            <TemplatesNavbar />

            {/* Sidebar fixa - só aparece quando está na section de templates */}
            {isInTemplatesSection && (
                <div className="fixed top-20 left-0 w-64 h-[calc(100vh-5rem)] bg-white border-r border-gray-200 overflow-y-auto z-30 transition-all duration-300">
                    <TemplatesSidebar />
                </div>
            )}

            {/* Header de filtros fixo - só aparece quando está na section de templates */}
            {isInTemplatesSection && <TemplatesFilterHeader />}

            {/* Espaço para quando a sidebar está fixa */}
            {isInTemplatesSection && <div className="w-64"></div>}

            {/* Hero Section */}
            <div className="items-center justify-center relative">
                <div className="w-full justify-center items-center bg-white px-5 md:px-0 md:pt-20 place-items-center">
                    <h1 className="text-3xl sm:text-6xl md:w-150 text-black text-center mb-8">
                        Make any template yours with ease.
                    </h1>

                    <h1 className="text-3xl md:text-[16px] text-gray-500 text-center mb-8">
                        Get AI-powered content and guidance built around your site's needs.
                    </h1>

                    {/* Search Form */}
                    <div ref={searchRef} className="max-w-2xl w-full mx-auto relative">
                        <form onSubmit={handleSearchSubmit} className="relative">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onFocus={handleInputFocus}
                                    placeholder="Search for your site topic"
                                    className="w-full px-6 py-4 text-base text-gray-800 bg-white border border-gray-300 rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.08)] focus:shadow-[0_0_30px_rgba(0,0,0,0.15)] focus:outline-none focus:border-gray-400 transition-all duration-300 pl-12"
                                />
                                <svg
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                                <button
                                    type="submit"
                                    className="block md:hidden absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300"
                                >
                                    Search
                                </button>
                            </div>
                        </form>

                        {/* Suggestions Container with Animation */}
                        <div
                            ref={suggestionsRef}
                            className="absolute top-full left-0 right-0 overflow-y overflow-x-hidden transition-all duration-500 ease-out z-50"
                            style={{
                                transform: showSuggestions ? 'translateY(0)' : 'translateY(-10px)',
                                height: showSuggestions ? `${suggestionsHeight}px` : '0',
                                opacity: showSuggestions ? 1 : 0,
                                maxHeight: '70vh'
                            }}
                        >
                            {/* Suggestions Content */}
                            <div className="bg-white border border-gray-200 rounded-lg shadow-xl mt-2">
                                <div className="p-4 border-b border-gray-100">
                                    <h3 className="text-[11px] text-gray-500 uppercase tracking-wider mb-3">
                                        Popular Topics
                                    </h3>
                                    <div className="space-y-2">
                                        {popularTopics.map((topic, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleSuggestionClick(topic)}
                                                className="w-full text-left px-3 py-2.5 text-sm bg-white hover:bg-gray-50 text-gray-700 rounded-md flex items-center justify-between group cursor-pointer transition-colors duration-200"
                                            >
                                                <span className="font-medium">{topic}</span>
                                                <svg
                                                    className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9 5l7 7-7 7"
                                                    />
                                                </svg>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-4 text-sm text-gray-500 bg-gray-50">
                                    <p>Type to search for specific templates or browse popular categories above.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="min-h-5 bg-white text-black">
                <div className="max-w-7xl mx-auto px-4 py-10 md:px-5 md:py-15">
                    {!isInTemplatesSection && (
                        <div className="flex relative flex-col md:flex-row justify-between items-center">
                            <h1 className="text-4xl md:text-[14px] text-center md:text-left">
                                29 Results
                            </h1>
                            <Link
                                to={'/templates/custom-templates'}
                                className='flex items-center justify-center md:h-10 bg-transparent border-2 border-gray-200 text-black px-2 py-2 md:px-3 md:py-2 cursor-pointer relative overflow-hidden group transition-all duration-300'
                            >
                                <span className="relative text-[12px] z-10 transition-colors duration-300">
                                    TRY BlUEPRINT AI BUILDER
                                </span>
                                <span className="absolute inset-y-0 left-0 w-0 bg-gray-200 transition-all duration-500 ease-out group-hover:w-full group-active:w-full"></span>
                                <span className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-0 group-active:opacity-30 active:opacity-30 bg-gray-200"></span>
                            </Link>
                        </div>
                    )}
                </div>
                {/* Espaço reservado quando o header de filtros está ativo */}
                {isInTemplatesSection && <div className="h-20"></div>}
            </section>

            {/* SEÇÃO TEMPLATES - Adicionando id para navegação */}
            <section
                id="templates-section"
                className="min-h-screen bg-white text-black relative"
                ref={templatesSectionRef}
            >
                <div className="max-w-7xl mx-auto px-4 py-10 md:px-5 md:py-5">
                    <div className="flex relative flex-col md:flex-row justify-between items-center mb-5">
                        <h1 className="text-4xl md:text-[18px] text-center md:text-left md:w-160 mb-6 md:mb-0">
                            Popular Designs Templates (0)
                        </h1>
                    </div>

                    {/* Grid para os templates - 3 colunas layout */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {templatesData.slice(0, 1).map((template, index) => (
                            <div
                                key={template.id}
                                className="group block transition-transform duration-300"
                            >
                                <div className="flex flex-col gap-4 group-hover:shadow-2xl group-active:shadow-2xl border border-gray-300 mb-1 md:mb-1 rounded-lg break-inside-avoid">
                                    <div className="overflow-hidden h-50 relative rounded-lg break-inside-avoid">
                                        <Link to={template.link}>
                                            <div className="relative w-full h-full">
                                                {/* Imagem com efeito de scroll vertical */}
                                                <img
                                                    src={template.img}
                                                    alt={template.title}
                                                    className="absolute inset-0 w-full min-h-115 h-full object-cover transition-transform duration-2000 ease-out transform translate-y-0 group-hover:-translate-y-[56%]"
                                                />
                                            </div>
                                            <div className="absolute bottom-2 flex flex-row justify-between items-center w-full px-3">
                                                <h1 className='text-[14px] font-medium bg-black/40 text-white backdrop-blur-lg p-2 opacity-0 group-hover:opacity-100 group-active:opacity-100 rounded-full transition-all duration-300'>
                                                    {template.title}
                                                </h1>
                                            </div>
                                        </Link>
                                        {/*<div className="absolute bottom-2 right-0 px-3">
                                            <div className="bg-black/40 hover:bg-black text-white backdrop-blur-lg p-2 opacity-0 group-hover:opacity-100 group-active:opacity-100 rounded-full cursor-pointer transition-all duration-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                                </svg>
                                            </div>
                                        </div>*/}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Botão VIEW ALL TEMPLATES */}
                    <div className="flex justify-center mt-5 mb-6 sm:mb-0 sm:mt-8">
                        <Link
                            to={'/templates'}
                            className='flex items-center justify-center w-full bg-white border-2 border-gray-300 hover:border-black active:border-black text-black px-8 py-4 cursor-pointer relative overflow-hidden group transition-all duration-300'
                        >
                            <span className="relative text-[14px] font-semibold z-10 transition-colors duration-300 group-hover:text-white group-active:text-white">
                                VIEW ALL TEMPLATES
                            </span>
                            <span className="absolute inset-y-0 left-0 w-0 bg-[hsl(0,0%,0%)] transition-all duration-500 ease-out group-hover:w-full group-active:w-full"></span>
                            <span className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-0 group-active:opacity-30 active:opacity-30 bg-black"></span>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default templates;