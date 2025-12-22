import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLanguage,
  faChevronDown,
  faXmark
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faDiscord, faPagelines } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { language, changeLanguage, t, isLanguageDropdownOpen, setIsLanguageDropdownOpen } = useLanguage();

  // Efeito de scroll para navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar menu/dropdowns quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.mobile-menu-button')) {
        setIsMenuOpen(false);
      }

      if (activeDropdown && !event.target.closest('.desktop-dropdown')) {
        setActiveDropdown(null);
      }

      // Fechar dropdown de idioma
      if (isLanguageDropdownOpen && !event.target.closest('.language-dropdown')) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen, activeDropdown, isLanguageDropdownOpen]);

  // Função para toggle dropdown de idioma
  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  // Função para navegação com scroll suave
  const handleNavigation = (path, sectionId = null) => {
    // Verifica se está na mesma página (considerando com e sem barra no final)
    const currentPath = location.pathname.replace(/\/$/, '');
    const targetPath = path.replace(/\/$/, '');

    if (currentPath === targetPath && sectionId) {
      scrollToSection(sectionId);
    } else if (path.startsWith('/')) {
      if (sectionId) {
        sessionStorage.setItem('scrollToSection', sectionId);
      }
      navigate(path);
    } else if (path.startsWith('http')) {
      window.open(path, '_blank', 'noopener,noreferrer');
    }

    setIsMenuOpen(false);
    setActiveDropdown(null);
    setIsLanguageDropdownOpen(false);
  };

  // Função para scroll suave até uma seção
  const scrollToSection = (sectionId) => {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  // Função para navegação da Home
  const handleHomeNavigation = (sectionId = null) => {
    const currentPath = location.pathname.replace(/\/$/, '');

    if (currentPath === '/portfolio' || currentPath === '') {
      if (sectionId) {
        scrollToSection(sectionId);
      } else {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    } else {
      if (sectionId) {
        sessionStorage.setItem('scrollToSection', sectionId);
      }
      navigate('/portfolio');
    }

    setIsMenuOpen(false);
  };

  // Função para toggle dropdown desktop
  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  // Dropdown items data - OTIMIZADO
  const dropdownItems = {
    pages: [
      {
        name: t('home'),
        description: t('language') === 'pt' ? "Página inicial" : "Home page",
        icon: faPagelines,
        color: "bg-gradient-to-br from-purple-500/20 to-indigo-500/20",
        iconColor: "text-purple-500",
        path: "/portfolio",
        section: "hero"
      },
      {
        name: t('about'),
        description: t('language') === 'pt' ? "Conheça minha história" : "Get to know my story",
        icon: faGithub,
        color: "bg-gradient-to-br from-gray-500/20 to-gray-700/20",
        iconColor: "text-gray-600",
        path: "/portfolio",
        section: "about"
      },
      {
        name: t('projects'),
        description: t('language') === 'pt' ? "Veja meus projetos" : "See my projects",
        icon: faGithub,
        color: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
        iconColor: "text-blue-500",
        path: "/portfolio",
        section: "projects"
      },
      {
        name: t('community'),
        description: t('language') === 'pt' ? "Junte-se à comunidade" : "Join the community",
        icon: faDiscord,
        color: "bg-gradient-to-br from-green-500/20 to-teal-500/20",
        iconColor: "text-green-500",
        path: "/portfolio",
        section: "community"
      },
      {
        name: t('language') === 'pt' ? "Negócios" : "Business",
        description: t('language') === 'pt' ? "Veja novos negócios" : "See new business",
        icon: faGithub,
        color: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
        iconColor: "text-purple-500",
        path: "/portfolio/business"
      }
    ]
  };

  // Componente Dropdown Desktop
  const DesktopDropdown = ({ title, items, dropdownKey }) => {
    return (
      <div className="relative group desktop-dropdown">
        <button
          className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-200 transition-colors duration-200 rounded-lg hover:bg-gray-600/50 cursor-pointer"
          onClick={() => toggleDropdown(dropdownKey)}
        >
          {title}
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`text-xs transition-transform duration-200 ${activeDropdown === dropdownKey ? 'rotate-180' : ''
              }`}
          />
        </button>

        <div
          className={`absolute top-full left-0 mt-2 w-80 bg-[#01040a] backdrop-blur-lg rounded-xl shadow-2xl border border-gray-200/10 transition-all duration-300 transform origin-top-right z-50 ${activeDropdown === dropdownKey
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
            }`}
        >
          <div className="p-2">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(item.path, item.section)}
                className="flex items-start gap-3 p-3 w-full text-left hover:bg-white/5 rounded-lg transition-all duration-200 group cursor-pointer"
              >
                <div className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                  <FontAwesomeIcon icon={item.icon} className={`${item.iconColor} text-sm`} />
                </div>
                <div className="flex flex-col items-start flex-1">
                  <span className="text-gray-300 font-semibold text-sm group-hover:text-white transition-colors">
                    {item.name}
                  </span>
                  <span className="text-gray-300 text-xs text-left mt-1">
                    {item.description}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Componente de Seleção de Idioma
  const LanguageSelector = () => (
    <div className="relative language-dropdown">
      <button
        onClick={toggleLanguageDropdown}
        className="flex items-center justify-center w-9 h-9 bg-gray-600/50 text-gray-200 hover:text-gray-200 rounded-lg text-sm font-medium hover:bg-gray-700/50 transition-all duration-200 cursor-pointer border border-transparent hover:border-gray-300/50"
      >
        <FontAwesomeIcon icon={faLanguage} />
      </button>

      {isLanguageDropdownOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-[#01040a] backdrop-blur-lg rounded-xl shadow-2xl border border-gray-200/10 z-50">
          <div className="p-2">
            <button
              onClick={() => changeLanguage('pt')}
              className={`flex items-center gap-3 p-3 w-full text-left hover:bg-white/5 rounded-lg transition-all duration-200 cursor-pointer ${language === 'pt' ? 'bg-white/10' : ''}`}
            >
              <span className="w-6 h-4 bg-green-500 rounded-sm flex items-center justify-center text-xs text-white font-bold">PT</span>
              <span className="text-gray-300 font-medium">Português</span>
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={`flex items-center gap-3 p-3 w-full text-left hover:bg-white/5 rounded-lg transition-all duration-200 cursor-pointer ${language === 'en' ? 'bg-white/10' : ''}`}
            >
              <span className="w-6 h-4 bg-blue-500 rounded-sm flex items-center justify-center text-xs text-white font-bold">EN</span>
              <span className="text-gray-300 font-medium">English</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-3 bg-[#01040a]/30 backdrop-blur-md z-50 border-b transition-all duration-300 ${scrolled ? 'border-gray-200/10 shadow-sm' : 'border-gray-200/10'
      }`}>
      {/* Logo e Navegação Desktop */}
      <div className="flex items-center gap-8">
        {/* Logo */}
        <button
          onClick={() => handleHomeNavigation()}
          className="flex items-center select-none group cursor-pointer"
        >
          <div className="relative">
            <svg className="w-7 h-7" width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="145.159" y="18" width="31.0227" height="31.0227" fill="#D9D9D9" />
              <rect x="227.886" y="18" width="31.0227" height="31.0227" fill="#D9D9D9" />
              <rect x="289.932" y="59.3636" width="31.0227" height="31.0227" fill="#D9D9D9" />
              <rect x="254.773" y="92.4545" width="31.0227" height="31.0227" fill="#D9D9D9" />
              <rect x="323.023" y="94.5227" width="31.0227" height="31.0227" fill="#D9D9D9" />
              <rect x="289.932" y="125.545" width="31.0227" height="31.0227" fill="#D9D9D9" />
              <rect x="349.909" y="164.841" width="31.0227" height="31.0227" fill="#D9D9D9" />
              <rect x="349.909" y="224.818" width="31.0227" height="31.0227" fill="#D9D9D9" />
              <rect x="289.932" y="257.909" width="31.0227" height="31.0227" fill="#D9D9D9" />
              <rect x="323.023" y="288.932" width="31.0227" height="31.0227" fill="#D9D9D9" />
              <rect x="289.932" y="322.023" width="31.0227" height="31.0227" fill="#D9D9D9" />
              <rect x="254.773" y="291" width="31.0227" height="31.0227" fill="#D9D9D9" />
              <rect x="227.886" y="350.977" width="31.0227" height="31.0227" fill="#D9D9D9" />
              <rect x="145.159" y="350.977" width="31.0227" height="31.0227" fill="#D9D9D9" />
              <rect width="31.0227" height="31.0227" transform="matrix(-1 0 0 1 110 49.0227)" fill="#D9D9D9" />
              <rect width="31.0227" height="31.0227" transform="matrix(-1 0 0 1 145.159 82.1136)" fill="#D9D9D9" />
              <rect width="31.0227" height="31.0227" transform="matrix(-1 0 0 1 76.9091 84.1818)" fill="#D9D9D9" />
              <rect width="31.0227" height="31.0227" transform="matrix(-1 0 0 1 110 115.205)" fill="#D9D9D9" />
              <rect width="31.0227" height="31.0227" transform="matrix(-1 0 0 1 50.0227 154.5)" fill="#D9D9D9" />
              <rect width="31.0227" height="31.0227" transform="matrix(-1 0 0 1 50.0227 214.477)" fill="#D9D9D9" />
              <rect width="31.0227" height="31.0227" transform="matrix(-1 0 0 1 110 247.568)" fill="#D9D9D9" />
              <rect width="31.0227" height="31.0227" transform="matrix(-1 0 0 1 76.9091 278.591)" fill="#D9D9D9" />
              <rect width="31.0227" height="31.0227" transform="matrix(-1 0 0 1 110 311.682)" fill="#D9D9D9" />
              <rect width="31.0227" height="31.0227" transform="matrix(-1 0 0 1 145.159 280.659)" fill="#D9D9D9" />
            </svg>
          </div>
        </button>

        {/* Navegação Desktop */}
        <nav className="hidden lg:flex items-center gap-1">
          <div className="flex items-center gap-2 font-light">
            <button
              onClick={() => handleHomeNavigation()}
              className="bg-transparent lg:px-2 lg:py-2 text-white hover:bg-white/10 rounded-[15px] transition-all duration-150 cursor-pointer"
            >
              {t('home')}
            </button>
            <button
              onClick={() => handleHomeNavigation('about')}
              className="bg-transparent lg:px-2 lg:py-2 text-white hover:bg-white/10 rounded-[15px] transition-all duration-150 cursor-pointer"
            >
              {t('about')}
            </button>
            <button
              onClick={() => handleHomeNavigation('recommendations')}
              className="bg-transparent lg:px-2 lg:py-2 text-white hover:bg-white/10 rounded-[15px] transition-all duration-150 cursor-pointer"
            >
              {t('recommendations')}
            </button>
            <button
              onClick={() => handleHomeNavigation('projects')}
              className="bg-transparent lg:px-2 lg:py-2 text-white hover:bg-white/10 rounded-[15px] transition-all duration-150 cursor-pointer"
            >
              {t('projects')}
            </button>
            <button
              onClick={() => handleHomeNavigation('community')}
              className="bg-transparent lg:px-2 lg:py-2 text-white hover:bg-white/10 rounded-[15px] transition-all duration-150 cursor-pointer"
            >
              {t('community')}
            </button>
          </div>
        </nav>
      </div>

      <div className="flex items-center space-x-3">
        {/* Download CV */}
        <a className=" hidden sm:flex group w-full sm:w-auto px-3 py-2 border border-white/50 bg-transparent hover:bg-white/20 rounded-[5px] hover:rounded-[50px] active:hover:rounded-[50px] active:hover:bg-white/20 text-white cursor-pointer transition-all duration-300 text-sm font-medium lg:font-light relative items-center justify-center gap-2" href='./curriculo.pdf' download='curriculo.pdf'>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
          </svg>
          {t('downloadCV')}
        </a>

        {/* Seletor de Idioma */}
        <LanguageSelector />

        {/* Menu mobile */}
        <button
          className="mobile-menu-button flex lg:hidden items-center justify-center w-10 h-10 text-gray-200 hover:bg-gray-600/30 rounded-lg transition-all duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FontAwesomeIcon icon={faXmark} className="text-lg" />
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Menu Mobile Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={() => setIsMenuOpen(false)}>
          <div
            className="absolute top-full right-0 mt-2 w-80 max-w-[90vw] bg-[#01040a] backdrop-blur-lg rounded-xl shadow-2xl border border-gray-200/10 max-h-[80vh] overflow-y-auto transform transition-all duration-300 mobile-menu"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="py-2">
              <div className="flex flex-col">
                <button
                  onClick={() => handleHomeNavigation()}
                  className="py-4 px-4 text-left text-gray-200 font-medium transition-colors duration-200 cursor-pointer hover:bg-white/5"
                >
                  {t('home')}
                </button>
                <button
                  onClick={() => handleHomeNavigation('about')}
                  className="py-4 px-4 text-left text-gray-200 font-medium transition-colors duration-200 cursor-pointer hover:bg-white/5"
                >
                  {t('about')}
                </button>
                <button
                  onClick={() => handleHomeNavigation('recommendations')}
                  className="py-4 px-4 text-left text-gray-200 font-medium transition-colors duration-200 cursor-pointer hover:bg-white/5"
                >
                  {t('recommendations')}
                </button>
                <button
                  onClick={() => handleHomeNavigation('projects')}
                  className="py-4 px-4 text-left text-gray-200 font-medium transition-colors duration-200 cursor-pointer hover:bg-white/5"
                >
                  {t('projects')}
                </button>
                <button
                  onClick={() => handleHomeNavigation('community')}
                  className="py-4 px-4 text-left text-gray-200 font-medium transition-colors duration-200 cursor-pointer hover:bg-white/5"
                >
                  {t('community')}
                </button>
              </div>

              {/* Seletor de Idioma Mobile */}
              <div className="p-4 border-t border-gray-200/10">
                <div className="flex items-center gap-3 mb-3">
                  <FontAwesomeIcon icon={faLanguage} className="text-gray-400" />
                  <span className="text-gray-300 font-medium">Idioma / Language</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => changeLanguage('pt')}
                    className={`flex-1 py-2 px-3 rounded-lg border transition-all duration-200 ${language === 'pt' ? 'bg-green-500/20 border-green-500/50 text-green-300' : 'bg-gray-600/20 border-gray-500/50 text-gray-300 hover:bg-gray-500/20'}`}
                  >
                    PT
                  </button>
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`flex-1 py-2 px-3 rounded-lg border transition-all duration-200 ${language === 'en' ? 'bg-blue-500/20 border-blue-500/50 text-blue-300' : 'bg-gray-600/20 border-gray-500/50 text-gray-300 hover:bg-gray-500/20'}`}
                  >
                    EN
                  </button>
                </div>
              </div>

              {/* Download CV Mobile */}
              <div className="flex p-4 border-t border-gray-200/10 items-center justify-center">
                <a href='./curriculo.pdf' download='curriculo.pdf' className="flex group w-auto px-3 py-2 border-1 border-white/50 bg-transparent active:bg-white/20 active:border-white rounded-[5px] active:rounded-[50px] text-white cursor-pointer transition-all duration-300 text-sm font-medium lg:font-light relative items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                  </svg>
                  {t('downloadCV')}
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;