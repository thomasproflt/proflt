import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const HomeLogo = ({ className = "fill-current" }) => {
    return (
        <svg width="32" height="32" viewBox="0 0 270 263" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <g clipPath="url(#clip0_1_4)">
                <path d="M22 53L0 1H134C161.614 1 184 23.3858 184 51V53L75 263L38 216L124 53H22Z" fill="black" />
                <path d="M191.095 32.9763L183 53H251.5L269.5 -3L230.842 2.1544C213.014 4.53152 197.836 16.3011 191.095 32.9763Z" fill="black" />
            </g>
            <defs>
                <clipPath id="clip0_1_4">
                    <rect width="270" height="263" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

const HomeNavbar = ({ onNavigate, sectionRef }) => {
    const { user } = useAuth();
    const [activeItem, setActiveItem] = useState('');
    const [showHomeNavbar, setShowHomeNavbar] = useState(false);
    const [isScrollingDown, setIsScrollingDown] = useState(false);
    const [currentSection, setCurrentSection] = useState('');
    const [isLightSection, setIsLightSection] = useState(false);
    const [hasBlackBackground, setHasBlackBackground] = useState(false);
    const [isTransitioningToTemplates, setIsTransitioningToTemplates] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const homeNavbarRef = useRef(null);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isInSection, setIsInSection] = useState(false);

    const navItems = [
        { id: 'templates', label: 'Projetos' },
        { id: 'design', label: 'Serviços' },
        { id: 'tools', label: 'Tecnologias' },
        { id: 'seo', label: 'Sobre Mim' },
    ];

    // Seções que têm fundo preto/escuro
    const darkBackgroundSections = ['hero', 'seo', 'tools'];
    // Seções que têm fundo branco/claro
    const lightBackgroundSections = ['templates'];

    // Função para navegação suave
    const handleNavigate = (id) => {
        setActiveItem(id);
        if (onNavigate) {
            onNavigate(id);
        }

        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        // Fechar menu mobile após navegação
        setIsMobileMenuOpen(false);
    };

    // Monitora qual seção está visível na tela
    useEffect(() => {
        let activeSection = '';
        let timeoutId;

        const checkSection = () => {
            const navbarHeight = homeNavbarRef.current?.offsetHeight || 80;

            // Todas as seções para verificar
            const allSections = [...navItems.map(item => item.id), 'hero'];

            // Verifica se está em transição para templates (quando está perto do topo da seção templates)
            const templatesElement = document.getElementById('templates');
            if (templatesElement) {
                const templatesRect = templatesElement.getBoundingClientRect();
                // Se o topo da seção templates está próximo da navbar (a 200px de distância)
                const isNearTemplates = templatesRect.top <= navbarHeight + 200 && templatesRect.top > navbarHeight;

                if (isNearTemplates && !isTransitioningToTemplates) {
                    setIsTransitioningToTemplates(true);
                    // Aplica tema claro durante a transição
                    setIsLightSection(true);
                    setHasBlackBackground(false);
                } else if (!isNearTemplates && isTransitioningToTemplates) {
                    setIsTransitioningToTemplates(false);
                }
            }

            allSections.forEach(sectionId => {
                const element = document.getElementById(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();

                    // Verifica se a seção está visível no viewport
                    const isSectionInView = (
                        rect.top <= navbarHeight &&
                        rect.bottom >= navbarHeight
                    );

                    if (isSectionInView && activeSection !== sectionId) {
                        activeSection = sectionId;
                        setCurrentSection(sectionId);

                        // Aplica tema baseado na seção
                        if (lightBackgroundSections.includes(sectionId)) {
                            setIsLightSection(true);
                            setHasBlackBackground(false);
                        } else if (darkBackgroundSections.includes(sectionId)) {
                            setIsLightSection(false);
                            setHasBlackBackground(true);
                        } else {
                            setIsLightSection(false);
                            setHasBlackBackground(false);
                        }
                    }
                }
            });
        };

        const handleScroll = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(checkSection, 50);

            // Fechar menu mobile ao rolar
            if (isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        // Verifica inicialmente
        checkSection();

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutId);
        };
    }, [navItems, isTransitioningToTemplates, isMobileMenuOpen]);

    // Monitora scroll para mostrar/ocultar a HomeNavbar
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollingDown = currentScrollY > lastScrollY;
            setIsScrollingDown(scrollingDown);

            // Verifica se está na seção de conteúdo
            if (sectionRef?.current) {
                const sectionTop = sectionRef.current.offsetTop;
                const navbarHeight = 80;

                // Verifica se está dentro da seção
                if (currentScrollY >= sectionTop - navbarHeight) {
                    setIsInSection(true);
                    setShowHomeNavbar(true);
                } else {
                    setIsInSection(false);
                    setShowHomeNavbar(false);
                }
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY, sectionRef]);

    // Bloquear scroll quando menu mobile está aberto
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    // Classes baseadas na seção atual
    const getNavbarClasses = () => {
        const baseClasses = `fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${showHomeNavbar
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0 pointer-events-none'
            }`;

        // Aplica transição de cores apenas quando a navbar está visível
        if (showHomeNavbar) {
            if (hasBlackBackground) {
                return `${baseClasses} bg-transparent transition-colors duration-300`;
            }

            if (isLightSection || isTransitioningToTemplates) {
                return `${baseClasses} bg-transparent transition-colors duration-300`;
            }

            return `${baseClasses} bg-transparent transition-colors duration-300`;
        }

        return baseClasses;
    };

    // Classes para os elementos baseados na seção
    const getElementClasses = () => {
        // Se estiver em transição para templates ou em seção clara
        if (isLightSection || isTransitioningToTemplates) {
            return {
                logoColor: 'text-black',
                bgClass: 'bg-white/80 backdrop-blur-sm',
                textClass: 'text-black',
                hoverBgClass: 'hover:bg-black/5',
                activeBgClass: 'bg-black/10 text-black',
                inactiveTextClass: 'text-black/70',
                buttonBgClass: 'bg-black text-white hover:bg-black',
                buttonHoverTextClass: 'group-hover:text-black',
                buttonHoverBg: 'bg-white',
                mobileBg: 'bg-white',
                mobileText: 'text-black',
                mobileBorder: 'border-gray-200',
                mobileContentBg: 'bg-white/90'
            };
        }

        // Se estiver em seção com fundo preto
        if (hasBlackBackground) {
            return {
                logoColor: 'text-white',
                bgClass: 'bg-[hsla(0,0%,50%,0.5)] backdrop-blur-sm',
                textClass: 'text-white',
                hoverBgClass: 'hover:bg-white/20',
                activeBgClass: 'bg-white/20 text-white',
                inactiveTextClass: 'text-white/80',
                buttonBgClass: 'bg-white text-black hover:bg-white/90',
                buttonHoverTextClass: 'group-hover:text-white',
                buttonHoverBg: 'bg-black',
                mobileBg: 'bg-black',
                mobileText: 'text-white',
                mobileBorder: 'border-gray-700',
                mobileContentBg: 'bg-black/90'
            };
        }

        // Para outras seções (transparentes)
        return {
            logoColor: 'text-white',
            bgClass: 'bg-white/10 backdrop-blur-sm',
            textClass: 'text-white',
            hoverBgClass: 'hover:bg-white/20',
            activeBgClass: 'bg-white/20 text-white',
            inactiveTextClass: 'text-white/80',
            buttonBgClass: 'bg-white text-black hover:bg-white/90',
            buttonHoverTextClass: 'group-hover:text-white',
            buttonHoverBg: 'bg-black',
            mobileBg: 'bg-black',
            mobileText: 'text-white',
            mobileBorder: 'border-gray-800',
            mobileContentBg: 'bg-gray-900/90'
        };
    };

    const elementClasses = getElementClasses();

    return (
        <>
            <nav
                ref={homeNavbarRef}
                className={getNavbarClasses()}
                style={{
                    width: '100vw',
                    margin: 0,
                }}
            >
                <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-6 py-3">
                    {/* Logo com BG */}
                    <div className={`flex items-center gap-2 z-10 ${elementClasses.bgClass} px-4 py-2 rounded-full transition-all duration-300`}>
                        <a href="/" className="flex items-center gap-2">
                            <HomeLogo className={`${elementClasses.logoColor} w-7 h-7 transition-colors duration-300`} />
                        </a>
                    </div>

                    {/* Menu Items com BG - Desktop */}
                    <div className={`hidden md:flex items-center gap-1 absolute left-1/2 transform -translate-x-1/2 ${elementClasses.bgClass} px-1 py-1 rounded-full transition-all duration-300`}>
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleNavigate(item.id)}
                                className={`px-4 py-2 rounded-full cursor-pointer transition-all duration-300 whitespace-nowrap ${currentSection === item.id
                                    ? `${elementClasses.activeBgClass}`
                                    : `${elementClasses.inactiveTextClass} ${elementClasses.hoverBgClass} hover:${elementClasses.textClass.replace('text-', 'text-')}`
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Botão GET STARTED com BG */}
                    <div className="hidden md:block">
                        <button
                            onClick={() => {/* Adicionar ação para Get Started */ }}
                            className={`flex items-center justify-center ${elementClasses.buttonBgClass} px-6 py-2.5 cursor-pointer relative overflow-hidden group text-sm font-medium transition-all duration-300 hover:shadow-lg`}
                        >
                            <span className={`relative z-10 transition-colors duration-300 ${elementClasses.buttonHoverTextClass}`}>
                                GET STARTED
                            </span>
                            <span className={`absolute inset-0 ${elementClasses.buttonHoverBg} transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0 group-active:translate-x-0`}></span>
                        </button>
                    </div>

                    {/* Versão Mobile - Botão Hamburguer */}
                    <div className={`md:hidden ${elementClasses.bgClass} px-3 py-2 rounded-full transition-all duration-300 z-50`}>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`${elementClasses.textClass} transition-colors duration-300`}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Menu Mobile - COBRINDO TODA A TELA */}
                {isMobileMenuOpen && (
                    <div
                        className={`fixed md:hidden top-0 left-0 right-0 bottom-0 ${elementClasses.mobileBg} z-40`}
                        style={{
                            width: '100vw',
                            height: '100vh',
                            margin: 0,
                            padding: 0
                        }}
                    >
                        {/* Overlay com conteúdo */}
                        <div
                            className="absolute inset-0 flex flex-col"
                            style={{
                                width: '100%',
                                height: '100%'
                            }}
                        >
                            {/* Header do menu mobile */}
                            <div className={`w-full ${elementClasses.mobileBg} px-6 py-4 flex items-center justify-between border-b ${elementClasses.mobileBorder}`}>
                                <div className="flex items-center gap-2">
                                    <HomeLogo className={`${elementClasses.mobileText} w-7 h-7`} />
                                    <span className={`${elementClasses.mobileText} font-medium text-lg`}>Menu</span>
                                </div>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`${elementClasses.mobileText} p-2`}
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Conteúdo principal do menu */}
                            <div className="flex-1 overflow-y-auto p-6">
                                <div className="space-y-6">
                                    {navItems.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => handleNavigate(item.id)}
                                            className={`w-full px-4 py-4 rounded-lg cursor-pointer transition-all duration-300 text-left ${currentSection === item.id
                                                ? `${elementClasses.activeBgClass} font-medium`
                                                : `${elementClasses.inactiveTextClass} hover:${elementClasses.hoverBgClass}`
                                                } ${elementClasses.mobileText} border-b ${elementClasses.mobileBorder} last:border-b-0`}
                                        >
                                            <div className="text-lg font-medium">{item.label}</div>
                                        </button>
                                    ))}
                                </div>

                                {/* Botão GET STARTED no mobile */}
                                <div className={`mt-8 pt-8`}>
                                    <div className="block md:hidden">
                                        <button
                                            onClick={() => {/* Adicionar ação para Get Started */ }}
                                            className={`flex items-center justify-center w-full ${elementClasses.buttonBgClass} px-6 py-2.5 cursor-pointer relative overflow-hidden group text-sm font-medium transition-all duration-300 hover:shadow-lg`}
                                        >
                                            <span className={`relative z-10 transition-colors duration-300 ${elementClasses.buttonHoverTextClass}`}>
                                                GET STARTED
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                {/* Informações do usuário (se logado) */}
                                {user && (
                                    <div className={`mt-6 p-4 rounded-lg ${elementClasses.mobileBg}`}>
                                        <p className={`text-sm font-medium ${elementClasses.mobileText} mb-1`}>
                                            Olá, {user.name}
                                        </p>
                                        <p className={`text-xs ${elementClasses.inactiveTextClass}`}>
                                            Bem-vindo de volta
                                        </p>
                                    </div>
                                )}

                                {/* Rodapé do menu */}
                                <div className={`mt-12 pt-6 border-t ${elementClasses.mobileBorder}`}>
                                    <p className={`text-xs text-center ${elementClasses.inactiveTextClass}`}>
                                        © 2024 Aetheris AE. Todos os direitos reservados.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default HomeNavbar;