import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useTranslation } from '../../contexts/TranslationContext';

const Logo = ({ className = "fill-current" }) => {
    return (
        <svg width="32" height="32" viewBox="0 0 270 263" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <g clipPath="url(#clip0_1_4)">
                <path d="M22 53L0 1H134C161.614 1 184 23.3858 184 51V53L75 263L38 216L124 53H22Z" fill="white" />
                <path d="M191.095 32.9763L183 53H251.5L269.5 -3L230.842 2.1544C213.014 4.53152 197.836 16.3011 191.095 32.9763Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_1_4">
                    <rect width="270" height="263" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

const Navbar = () => {
    const { user, logout } = useAuth();
    const { language, translate } = useTranslation();
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const navbarRef = useRef(null);
    
    // Textos para tradução com useMemo para evitar recriações
    const originalTexts = useMemo(() => ({
        buttons: {
            startNow: 'COMEÇAR AGORA',
            logout: 'Sair',
            hello: 'Olá,',
            close: 'Fechar'
        }
    }), []);

    const [translatedTexts, setTranslatedTexts] = useState(originalTexts);

    // Tradução otimizada
    useEffect(() => {
        const translateTexts = async () => {
            if (language === 'pt') {
                setTranslatedTexts(originalTexts);
                return;
            }
            
            try {
                const translatedButtons = {
                    startNow: await translate(originalTexts.buttons.startNow),
                    logout: await translate(originalTexts.buttons.logout),
                    hello: await translate(originalTexts.buttons.hello),
                    close: await translate(originalTexts.buttons.close)
                };
                
                setTranslatedTexts({
                    buttons: translatedButtons
                });
            } catch (error) {
                console.error('Erro na tradução do Navbar:', error);
                setTranslatedTexts(originalTexts);
            }
        };
        
        translateTexts();
    }, [language, translate, originalTexts]);

    // Scroll handler otimizado com useCallback
    useEffect(() => {
        let ticking = false;
        
        const handleScroll = () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;

                    if (currentScrollY === 0) {
                        setIsScrolled(false);
                    } else {
                        setIsScrolled(true);
                    }

                    if (currentScrollY > lastScrollY && currentScrollY > 100) {
                        setIsNavbarVisible(false);
                    } else if (currentScrollY < lastScrollY) {
                        setIsNavbarVisible(true);
                    }

                    setLastScrollY(currentScrollY);
                    ticking = false;
                });
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // WhatsApp redirect otimizado
    const redirectToWhatsApp = useCallback(() => {
        const phoneNumber = '5566996399303';
        const message = encodeURIComponent(language === 'en' 
            ? "Hello, I liked your projects and would like more information!" 
            : "Olá, eu gostei de seus projetos gostaria de saber mais informações!");
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    }, [language]);

    // Classes para navbar com otimização
    const navbarClasses = `fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-300 ease-in-out transform ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'} ${isScrolled ? 'bg-black' : 'bg-transparent'} px-4 lg:px-6 py-4 text-white text-sm`;

    // Fechar menu mobile ao pressionar Escape
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };
        
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isMobileMenuOpen]);

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

    return (
        <>
            <nav
                ref={navbarRef}
                className={navbarClasses}
                style={{
                    width: '100vw',
                    margin: 0,
                }}
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
                    <a 
                        href="/" 
                        className="flex items-center gap-2 z-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded"
                        aria-label="Go to homepage"
                    >
                        <Logo className="text-white w-7 h-7" />
                    </a>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        {user ? (
                            <div className="flex items-center gap-3">
                                <span className="text-gray-300" aria-live="polite">
                                    {translatedTexts.buttons.hello} {user.name}
                                </span>
                                <button
                                    onClick={logout}
                                    className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
                                    aria-label="Logout"
                                >
                                    {translatedTexts.buttons.logout}
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={redirectToWhatsApp}
                                className="bg-white hover:bg-gray-200 text-black px-6 py-2 text-sm font-medium cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded"
                                aria-label="Start now on WhatsApp"
                            >
                                {translatedTexts.buttons.startNow}
                            </button>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => {
                            setIsMobileMenuOpen(!isMobileMenuOpen);
                        }}
                        className="md:hidden text-gray-300 z-50 p-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded"
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-menu"
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

                {/* Mobile Menu com animação de translate-x */}
                <div
                    id="mobile-menu"
                    className={`fixed md:hidden top-0 left-0 right-0 bottom-0 bg-black z-40 transition-all duration-300 ease-in-out transform ${
                        isMobileMenuOpen 
                            ? 'translate-x-0 opacity-100' 
                            : 'translate-x-full opacity-0 pointer-events-none'
                    }`}
                    style={{
                        width: '100vw',
                        height: '100vh',
                        margin: 0,
                    }}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Mobile menu"
                >
                    <div className="relative w-full h-full p-6 pt-24 flex flex-col items-center gap-4 overflow-y-auto">
                        <div className="w-full max-w-sm flex flex-col items-center gap-4">
                            <div className="w-full my-4 pt-6 flex flex-col gap-4">
                                {user ? (
                                    <>
                                        <div className="text-center text-gray-300 mb-2 text-lg" aria-live="polite">
                                            {translatedTexts.buttons.hello} {user.name}
                                        </div>
                                        <button
                                            onClick={() => {
                                                logout();
                                                setIsMobileMenuOpen(false);
                                            }}
                                            className="bg-red-500 hover:bg-red-600 px-4 py-3 rounded-full text-base font-medium transition w-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
                                            aria-label="Logout"
                                        >
                                            {translatedTexts.buttons.logout}
                                        </button>
                                    </>
                                ) : (
                                    <button
                                        onClick={() => {
                                            redirectToWhatsApp();
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className='flex items-center justify-center w-full bg-white text-black px-5 py-5 cursor-pointer relative overflow-hidden group transition-all duration-300 mx-auto focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded'
                                        aria-label="Start now on WhatsApp"
                                    >
                                        <span className="relative text-[14px] z-10 transition-colors duration-300 delay-100 group-hover:text-white group-active:text-white active:delay-0">
                                            {translatedTexts.buttons.startNow}
                                        </span>
                                        <span className="absolute inset-y-0 left-0 w-0 bg-[hsl(0,0%,12%)] transition-all duration-500 ease-out group-hover:w-full group-active:w-full"></span>
                                    </button>
                                )}
                            </div>

                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-4 text-gray-400 hover:text-white transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded"
                                aria-label="Close menu"
                            >
                                {translatedTexts.buttons.close}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;