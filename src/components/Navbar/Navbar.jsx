import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../contexts/AuthContext';
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
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [openDropdown, setOpenDropdown] = useState(null); // 'products', 'resources', or null
    const navbarRef = useRef(null);

    const navItems = [
        {
            label: 'Products',
            hasDropdown: true,
            dropdownKey: 'products'
        },
        {
            label: 'Resources',
            resourcesDropdown: true,
            dropdownKey: 'resources'
        },
    ];

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
        // Seu número com 2 noves (66996399303)
        const phoneNumber = '5566996399303'; // Adicione o código do país (55 para Brasil)
        const message = encodeURIComponent("Olá, eu gostei de seus projetos gostaria de saber mais informações!");
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

        // Redireciona para o WhatsApp
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
                                <span className="text-gray-300">Olá, {user.name}</span>
                                <button
                                    onClick={logout}
                                    className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full text-sm font-medium transition"
                                >
                                    Sair
                                </button>
                            </div>
                        ) : (
                            <>
                                <button
                                    onClick={redirectToWhatsApp}
                                    className="bg-white hover:bg-gray-200 text-black px-6 py-2 text-sm font-medium cursor-pointer transition-all duration-300"
                                >
                                    COMEÇAR AGORA
                                </button>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => {
                            setIsMobileMenuOpen(!isMobileMenuOpen);
                            setOpenDropdown(null); // Reset dropdown state when closing mobile menu
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
                            <div className="w-full my-4 pt-6 flex flex-col gap-4"> {/**border-t border-slate-700  */}
                                {user ? (
                                    <>
                                        <div className="text-center text-gray-300 mb-2 text-lg">Olá, {user.name}</div>
                                        <button
                                            onClick={() => {
                                                logout();
                                                setIsMobileMenuOpen(false);
                                            }}
                                            className="bg-red-500 hover:bg-red-600 px-4 py-3 rounded-full text-base font-medium transition w-full"
                                        >
                                            Sair
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
                                                COMEÇAR AGORA
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
                                Fechar
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

// Mobile Components
const MobileProductsDropdown = ({ onClose }) => {
    const menuSections = [
        {
            title: "WEBSITE",
            items: [
                { label: "Websites" },
                { label: "Website Templates" },
                { label: "AI Website Builder" },
                { label: "Design Intelligence" },
                { label: "Portfolios" },
                { label: "Blogs" },
                { label: "Analytics" },
                { label: "Enterprise" },
                { label: "Commerce" }
            ]
        },
        {
            title: "ECOMMERCE",
            items: [
                { label: "Ecommerce Templates" },
                { label: "Online Stores" },
                { label: "Services" },
                { label: "Invoicing" },
                { label: "Scheduling" },
                { label: "Content & Memberships" },
                { label: "Donations" },
                { label: "Financial Solutions" }
            ]
        },
        {
            title: "MARKETING",
            items: [
                { label: "Marketing Tools" },
                { label: "Email Campaigns" },
                { label: "SEO Tools" },
                { label: "Free Tools" }
            ]
        },
        {
            title: "BUSINESS TOOLS",
            items: [
                { label: "Domain Search" },
                { label: "Domain Transfer" },
                { label: "Business Email" }
            ]
        }
    ];

    const professionalSection = {
        title: "For Professionals",
        items: [
            {
                title: "Squarespace for Pros",
                description: "Powerful enough for pros, easy enough for clients",
            },
            {
                title: "Circle",
                description: "The partner program for freelancers and agencies",
            }
        ]
    };

    return (
        <div className="space-y-4 overflow-y-auto max-h-[60vh] pr-2">
            {menuSections.map((section, index) => (
                <div key={index} className="space-y-2">
                    <h3 className="text-xs font-medium text-white/60 uppercase tracking-wider">
                        {section.title}
                    </h3>
                    <ul className="space-y-1 ml-2">
                        {section.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                                <a
                                    href="#"
                                    className="flex items-center text-white/80 hover:text-white transition-colors duration-200 py-1.5 text-sm"
                                    onClick={onClose}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

            <div className="pt-4 border-t border-white/20">
                <h3 className="text-xs font-medium text-white/60 uppercase tracking-wider mb-3">
                    {professionalSection.title}
                </h3>
                <div className="space-y-3">
                    {professionalSection.items.map((item, index) => (
                        <div key={index} className="bg-white/5 rounded-lg p-3">
                            <h4 className="text-sm font-medium text-white mb-1">
                                {item.title}
                            </h4>
                            <p className="text-xs text-white/60">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="pt-4">
                <a
                    href="#"
                    className="inline-flex items-center text-white hover:text-gray-300 transition-colors duration-300 text-sm font-medium"
                    onClick={onClose}
                >
                    View All Features
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

const MobileResourcesDropdown = ({ onClose }) => {
    const supportItems = [
        {
            title: "Help Center",
            description: "Find answers to all your questions"
        },
        {
            title: "Forum",
            description: "Connect with our community"
        },
        {
            title: "Webinars",
            description: "Join live sessions with experts"
        },
        {
            title: "Blog",
            description: "Updated articles and tutorials"
        },
        {
            title: "Hire an Expert",
            description: "Get a specialist for your project"
        }
    ];

    const inspiredItems = [
        {
            title: "Design Trends 2024",
            description: "Explore the latest design trends for this year"
        },
        {
            title: "Success Stories",
            description: "Case studies of clients who transformed their business"
        },
        {
            title: "Creative Solutions",
            description: "Innovations that are revolutionizing the market"
        }
    ];

    return (
        <div className="space-y-6 overflow-y-auto max-h-[60vh] pr-2">
            {/* Support Section */}
            <div className="space-y-4">
                <h3 className="text-xs font-medium text-white/60 uppercase tracking-wider">
                    24/7 Support
                </h3>
                <div className="space-y-3 ml-2">
                    {supportItems.map((item, index) => (
                        <div key={index} className="group/item p-3 rounded-lg transition-colors duration-200">
                            <h4 className="text-sm font-medium text-white mb-1">
                                {item.title}
                            </h4>
                            <p className="text-xs text-white/60 leading-tight">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Inspired Section */}
            <div className="space-y-4 pt-4 border-t border-white/20">
                <h3 className="text-xs font-medium text-white/60 uppercase tracking-wider">
                    GET INSPIRED
                </h3>
                <div className="space-y-3 ml-2">
                    {inspiredItems.map((item, index) => (
                        <div key={index} className="bg-white/5 rounded-lg p-3">
                            <h4 className="text-sm font-medium text-white mb-1">
                                {item.title}
                            </h4>
                            <p className="text-xs text-white/60">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
                <p className="text-sm text-white/60 ml-2">
                    Discover inspiring content updated weekly to keep your creativity flowing.
                </p>
            </div>

            <div className="pt-4">
                <a
                    href="#"
                    className="inline-flex items-center text-white hover:text-gray-300 transition-colors duration-300 text-sm font-medium"
                    onClick={onClose}
                >
                    View All Resources
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default Navbar;