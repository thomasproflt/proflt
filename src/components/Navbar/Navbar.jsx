import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useTranslation } from '../../contexts/TranslationContext'; // Adicionar esta linha
import LoginModal from '../Login/Login';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import DropdownMenuResources from '../DropdownMenuResources/DropdownMenuResources';

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
    const { language, translate } = useTranslation(); // Adicionar hook de tradução
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [openDropdown, setOpenDropdown] = useState(null);
    const navbarRef = useRef(null);
    
    // Textos para tradução
    const [translatedTexts, setTranslatedTexts] = useState({
        navItems: [
            { label: 'Products', hasDropdown: true, dropdownKey: 'products' },
            { label: 'Resources', resourcesDropdown: true, dropdownKey: 'resources' },
        ],
        buttons: {
            startNow: 'COMEÇAR AGORA',
            logout: 'Sair',
            hello: 'Olá,',
            close: 'Fechar'
        }
    });

    // Traduz textos quando o idioma muda
    useEffect(() => {
        const translateTexts = async () => {
            if (language === 'pt') return; // Mantém português
            
            try {
                const translatedNavItems = await Promise.all(
                    translatedTexts.navItems.map(async (item) => ({
                        ...item,
                        label: await translate(item.label)
                    }))
                );
                
                const translatedButtons = {
                    startNow: await translate(translatedTexts.buttons.startNow),
                    logout: await translate(translatedTexts.buttons.logout),
                    hello: await translate(translatedTexts.buttons.hello),
                    close: await translate(translatedTexts.buttons.close)
                };
                
                setTranslatedTexts({
                    navItems: translatedNavItems,
                    buttons: translatedButtons
                });
            } catch (error) {
                console.error('Erro na tradução do Navbar:', error);
            }
        };
        
        translateTexts();
    }, [language, translate]);

    const navItems = translatedTexts.navItems;

    useEffect(() => {
        const handleScroll = () => {
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
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const handleDropdownToggle = (dropdownKey) => {
        setOpenDropdown(openDropdown === dropdownKey ? null : dropdownKey);
    };

    const redirectToWhatsApp = () => {
        const phoneNumber = '5566996399303';
        const message = encodeURIComponent(language === 'en' 
            ? "Hello, I liked your projects and would like more information!" 
            : "Olá, eu gostei de seus projetos gostaria de saber mais informações!");
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    const navbarClasses = `fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-300 ease-in-out ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
        } ${isScrolled
            ? 'bg-black'
            : 'bg-transparent'
        } px-4 lg:px-6 py-4 text-white text-sm`;

    return (
        <>
            <nav
                ref={navbarRef}
                className={navbarClasses}
                style={{
                    width: '100vw',
                    margin: 0,
                }}
            >
                <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
                    <a href="/" className="flex items-center gap-2 z-10">
                        <Logo className="text-white w-7 h-7" />
                    </a>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        {user ? (
                            <div className="flex items-center gap-3">
                                <span className="text-gray-300">
                                    {translatedTexts.buttons.hello} {user.name}
                                </span>
                                <button
                                    onClick={logout}
                                    className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full text-sm font-medium transition"
                                >
                                    {translatedTexts.buttons.logout}
                                </button>
                            </div>
                        ) : (
                            <>
                                <button
                                    onClick={redirectToWhatsApp}
                                    className="bg-white hover:bg-gray-200 text-black px-6 py-2 text-sm font-medium cursor-pointer transition-all duration-300"
                                >
                                    {translatedTexts.buttons.startNow}
                                </button>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => {
                            setIsMobileMenuOpen(!isMobileMenuOpen);
                            setOpenDropdown(null);
                        }}
                        className="md:hidden text-gray-300 z-50"
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

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="fixed md:hidden top-0 left-0 right-0 bottom-0 bg-black p-6 pt-24 flex flex-col items-center gap-4 z-40 w-screen h-screen">
                        <div className="w-full max-w-sm flex flex-col items-center gap-4">
                            <div className="w-full my-4 pt-6 flex flex-col gap-4">
                                {user ? (
                                    <>
                                        <div className="text-center text-gray-300 mb-2 text-lg">
                                            {translatedTexts.buttons.hello} {user.name}
                                        </div>
                                        <button
                                            onClick={() => {
                                                logout();
                                                setIsMobileMenuOpen(false);
                                            }}
                                            className="bg-red-500 hover:bg-red-600 px-4 py-3 rounded-full text-base font-medium transition w-full"
                                        >
                                            {translatedTexts.buttons.logout}
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            onClick={() => {
                                                redirectToWhatsApp();
                                                setIsMobileMenuOpen(false);
                                            }}
                                            className='flex items-center justify-center w-full bg-white text-black px-5 py-5 cursor-pointer relative overflow-hidden group transition-all duration-300 mx-auto'
                                        >
                                            <span className="relative text-[14px] z-10 transition-colors duration-300 delay-100 group-hover:text-white group-active:text-white active:delay-0">
                                                {translatedTexts.buttons.startNow}
                                            </span>
                                            <span className="absolute inset-y-0 left-0 w-0 bg-[hsl(0,0%,12%)] transition-all duration-500 ease-out group-hover:w-full group-active:w-full"></span>
                                            <span className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-0 group-active:opacity-30 active:opacity-30 bg-black"></span>
                                        </button>
                                    </>
                                )}
                            </div>

                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-4 text-gray-400 hover:text-white transition-colors py-2"
                            >
                                {translatedTexts.buttons.close}
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Login Modal */}
            <LoginModal
                isOpen={isLoginModalOpen}
                onClose={() => setIsLoginModalOpen(false)}
            />
        </>
    );
};

export default Navbar;