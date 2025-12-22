import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import LoginModal from '../Login/Login';

// Componente dropdown Products customizado para TemplatesNavbar
const TemplatesDropdownMenu = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Dados estruturados para as colunas
    const menuSections = [
        {
            title: "WEBSITE",
            items: [
                { label: "Websites", hasArrow: false },
                { label: "Website Templates", hasArrow: true },
                { label: "AI Website Builder", hasArrow: true },
                { label: "Design Intelligence", hasArrow: true },
                { label: "Portfolios", hasArrow: true },
                { label: "Blogs", hasArrow: true },
                { label: "Analytics", hasArrow: true },
                { label: "Enterprise", hasArrow: true },
                { label: "Commerce", hasArrow: false }
            ]
        },
        {
            title: "ECOMMERCE",
            items: [
                { label: "Ecommerce Templates", hasArrow: true },
                { label: "Online Stores", hasArrow: true },
                { label: "Services", hasArrow: true },
                { label: "Invoicing", hasArrow: true },
                { label: "Scheduling", hasArrow: true },
                { label: "Content & Memberships", hasArrow: true },
                { label: "Donations", hasArrow: true },
                { label: "Financial Solutions", hasArrow: false }
            ]
        },
        {
            title: "MARKETING",
            items: [
                { label: "Marketing Tools", hasArrow: true },
                { label: "Email Campaigns", hasArrow: true },
                { label: "SEO Tools", hasArrow: true },
                { label: "Free Tools", hasArrow: true }
            ]
        },
        {
            title: "BUSINESS TOOLS",
            items: [
                { label: "Domain Search", hasArrow: true },
                { label: "Domain Transfer", hasArrow: true },
                { label: "Business Email", hasArrow: true }
            ]
        }
    ];

    // Dados para a seção "For Professionals"
    const professionalSection = {
        title: "For Professionals",
        items: [
            {
                link: '/1',
                title: "Squarespace for Pros",
                description: "Powerful enough for pros, easy enough for clients",
            },
            {
                link: '/2',
                title: "Circle",
                description: "The partner program for freelancers and agencies",
            }
        ]
    };

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {/* Trigger do dropdown - TEXT BLACK para TemplatesNavbar */}
            <div className="relative overflow-hidden h-6 group cursor-pointer">
                <span className="block group-hover:-translate-y-full text-black transition-transform duration-300">
                    Products
                </span>
                <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] text-black transition-transform duration-300">
                    Products
                </span>
            </div>

            {/* Dropdown Menu */}
            {isVisible && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 min-w-[1000px] z-40 bg-black border border-white/10 rounded-xl shadow-2xl overflow-hidden mt-2">
                    <div className="px-8 py-10">
                        {/* Layout principal com grid complexo */}
                        <div className="grid grid-cols-5 gap-10 pb-8">
                            {/* WEBSITE - ocupa linha 1, coluna 1 */}
                            <div className="space-y-5">
                                <h3 className="text-[11px] font-extralight text-white/40 uppercase tracking-wider mb-4">
                                    {menuSections[0].title}
                                </h3>
                                <ul className="space-y-1">
                                    {menuSections[0].items.map((item, itemIndex) => (
                                        <li key={itemIndex}>
                                            <a
                                                href="#"
                                                className="flex items-center text-white hover:text-white transition-colors duration-200 group/item py-1.5"
                                            >
                                                <span className="text-sm">{item.label}</span>
                                                {item.hasArrow && (
                                                    <svg
                                                        className="ml-2 w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity flex-shrink-0"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                    </svg>
                                                )}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* ECOMMERCE - ocupa linha 1, coluna 2 */}
                            <div className="space-y-5">
                                <h3 className="text-[11px] font-extralight text-white/40 uppercase tracking-wider mb-4">
                                    {menuSections[1].title}
                                </h3>
                                <ul className="space-y-1">
                                    {menuSections[1].items.map((item, itemIndex) => (
                                        <li key={itemIndex}>
                                            <a
                                                href="#"
                                                className="flex items-center min-w-43 text-white hover:text-white transition-colors duration-200 group/item py-1.5"
                                            >
                                                <span className="text-sm">{item.label}</span>
                                                {item.hasArrow && (
                                                    <svg
                                                        className="ml-2 w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity flex-shrink-0"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                    </svg>
                                                )}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* MARKETING - ocupa linha 1, coluna 3 */}
                            <div className="space-y-5">
                                <h3 className="text-[11px] font-extralight text-white/40 uppercase tracking-wider mb-4">
                                    {menuSections[2].title}
                                </h3>
                                <ul className="space-y-1">
                                    {menuSections[2].items.map((item, itemIndex) => (
                                        <li key={itemIndex}>
                                            <a
                                                href="#"
                                                className="flex items-center text-white hover:text-white transition-colors duration-200 group/item py-1.5"
                                            >
                                                <span className="text-sm">{item.label}</span>
                                                {item.hasArrow && (
                                                    <svg
                                                        className="ml-2 w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity flex-shrink-0"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                    </svg>
                                                )}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* BUSINESS TOOLS - ocupa linha 2, coluna 3 */}
                            <div className="space-y-5 col-start-3 row-start-2 -mt-50">
                                <h3 className="text-[11px] font-extralight text-white/40 uppercase tracking-wider mb-4">
                                    {menuSections[3].title}
                                </h3>
                                <ul className="space-y-1">
                                    {menuSections[3].items.map((item, itemIndex) => (
                                        <li key={itemIndex}>
                                            <a
                                                href="#"
                                                className="flex items-center text-white hover:text-white transition-colors duration-200 group/item py-1.5"
                                            >
                                                <span className="text-sm">{item.label}</span>
                                                {item.hasArrow && (
                                                    <svg
                                                        className="ml-2 w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity flex-shrink-0"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                    </svg>
                                                )}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* For Professionals - ocupa linhas 1-2, coluna 5 */}
                            <div className="-ml-10 pl-10 border-l border-white/10 row-span-1">
                                <div className="space-y-6 w-full">
                                    <h3 className="text-[11px] font-extralight font-medium text-white/40 uppercase tracking-wider mb-1">
                                        {professionalSection.title}
                                    </h3>
                                    <div className="space-y-5">
                                        {professionalSection.items.map((item, index) => (
                                            <a href={item.link} key={index} className="flex relative bg-white/5 rounded-lg min-w-90 p-4 hover:bg-white/10 cursor-pointer transition-colors duration-300">
                                                <div className="flex items-start gap-3">
                                                    <div className="">
                                                        <h4 className="text-sm font-medium text-white mb-1 leading-tight">
                                                            {item.title}
                                                        </h4>
                                                        <p className="text-white/60 text-xs leading-tight">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Link "View All Features" */}
                        <div className="flex justify-between items-center">
                            <a
                                href="#"
                                className="inline-flex items-center text-white hover:text-gray-300 transition-colors duration-300 group"
                            >
                                <span className="text-[14px] font-normal">View All Features</span>
                                <svg
                                    className="w-3 h-3 transform opacity-0 group-hover:translate-x-2 group-hover:opacity-100 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

// Componente dropdown Resources customizado para TemplatesNavbar com carrossel
const TemplatesDropdownMenuResources = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Data for the 24/7 Support Section
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

    // Data for the Image Carousel in GET INSPIRED Section
    const inspiredCarousel = [
        {
            id: 1,
            url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
            title: "Design Trends 2024",
            description: "Explore the latest design trends for this year"
        },
        {
            id: 2,
            url: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=250&fit=crop',
            title: "Success Stories",
            description: "Case studies of clients who transformed their business"
        },
        {
            id: 3,
            url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop',
            title: "Creative Solutions",
            description: "Innovations that are revolutionizing the market"
        }
    ];

    // Handle the carousel rotation
    useEffect(() => {
        if (isVisible) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) =>
                    prevIndex === inspiredCarousel.length - 1 ? 0 : prevIndex + 1
                );
            }, 7000); // Change image every 7 seconds

            return () => clearInterval(interval);
        }
    }, [isVisible]);

    const currentImage = inspiredCarousel[currentImageIndex];

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {/* Trigger for the dropdown - TEXT BLACK para TemplatesNavbar */}
            <div className="relative overflow-hidden h-6 group cursor-pointer">
                <span className="block group-hover:-translate-y-full text-black transition-transform duration-300">
                    Resources
                </span>
                <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] text-black transition-transform duration-300">
                    Resources
                </span>
            </div>

            {/* Dropdown Menu Container */}
            {isVisible && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 min-w-[800px] z-40 bg-black border border-white/10 rounded-xl shadow-2xl overflow-hidden mt-2">
                    <div className="px-8 py-10">
                        {/* Main two-column layout */}
                        <div className="grid grid-cols-2 gap-10 pb-8">

                            {/* Left Column - 24/7 Support */}
                            <div className="space-y-6">
                                <h3 className="text-[11px] font-extralight text-white/40 uppercase tracking-wider mb-4">
                                    24/7 Support
                                </h3>
                                <div className="space-y-4">
                                    {supportItems.map((item, index) => (
                                        <div key={index} className="group/item hover:bg-white/5 p-3 rounded-lg transition-colors duration-200 cursor-pointer">
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

                            {/* Right Column - GET INSPIRED */}
                            <div className="space-y-6 border-l border-white/10 pl-10 -ml-10">
                                <h3 className="text-[11px] font-extralight text-white/40 uppercase tracking-wider mb-4">
                                    GET INSPIRED
                                </h3>
                                <div className="relative overflow-hidden rounded-lg bg-gray-900">
                                    {/* Image Container with Opacity Transition */}
                                    <div className="relative h-60">
                                        {inspiredCarousel.map((image, index) => (
                                            <div
                                                key={image.id}
                                                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                                    }`}
                                            >
                                                <img
                                                    src={image.url}
                                                    alt={image.title}
                                                    className="w-full h-full object-cover"
                                                />
                                                {/* Gradient overlay for text readability */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                                {/* Text content over the image */}
                                                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                                                    <h4 className="font-bold text-lg mb-1">{image.title}</h4>
                                                    <p className="text-sm opacity-90">{image.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Carousel Indicators */}
                                    <div className="flex justify-center space-x-2 p-4">
                                        {inspiredCarousel.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setCurrentImageIndex(index);
                                                }}
                                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
                                                    ? 'bg-white w-6'
                                                    : 'bg-white/40 hover:bg-white/60'
                                                    }`}
                                                aria-label={`Go to slide ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Additional Description */}
                                <div className="text-sm text-white/60">
                                    <p>
                                        Discover inspiring content updated weekly to keep your creativity flowing.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* "View All Resources" Link */}
                        <div className="flex justify-between items-center pt-6 border-t border-white/10">
                            <a
                                href="#"
                                className="inline-flex items-center text-white hover:text-gray-300 transition-colors duration-300 group"
                            >
                                <span className="text-[14px] font-normal">View All Resources</span>
                                <svg
                                    className="w-3 h-3 ml-2 transform opacity-0 group-hover:translate-x-2 group-hover:opacity-100 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const Logo = ({ className = "fill-current" }) => {
    return (
        <svg
            width="32"
            height="32"
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

const TemplatesNavbar = () => {
    const { user, logout } = useAuth();
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    // Itens de navegação - apenas PRODUCTS e RESOURCES
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

    const handleDropdownToggle = (dropdownKey) => {
        setOpenDropdown(openDropdown === dropdownKey ? null : dropdownKey);
    };

    return (
        <>
            <nav className="relative z-50 flex items-center bg-white text-black px-4 lg:px-6 py-4 text-sm w-full">
                <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2 z-10">
                        <Logo className="w-7 h-7" />
                    </a>

                    {/* Desktop Navigation - Centralizado */}
                    <div className="hidden md:flex items-center gap-6 ml-0 absolute left-1/2 transform -translate-x-1/2">
                        {navItems.map((item) => (
                            item.hasDropdown ? (
                                <TemplatesDropdownMenu key={item.label} />
                            ) : item.resourcesDropdown ? (
                                <TemplatesDropdownMenuResources key={item.label} />
                            ) : (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="relative overflow-hidden h-6 group text-black"
                                >
                                    <span className="block group-hover:-translate-y-full text-black">
                                        {item.label}
                                    </span>
                                    <span className="block absolute top-full left-0 text-black">
                                        {item.label}
                                    </span>
                                </a>
                            )
                        ))}
                    </div>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        {user ? (
                            <div className="flex items-center gap-3">
                                <span className="text-black">Olá, {user.name}</span>
                                <button
                                    onClick={logout}
                                    className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full text-sm font-medium transition text-white"
                                >
                                    Sair
                                </button>
                            </div>
                        ) : (
                            <>
                                <button
                                    onClick={() => setIsLoginModalOpen(true)}
                                    className="text-black hover:text-gray-700 text-sm font-medium cursor-pointer transition duration-300"
                                >
                                    LOG IN
                                </button>
                                <button
                                    onClick={() => setIsLoginModalOpen(true)}
                                    className="bg-black hover:bg-[hsl(0,0%,12%)] text-white px-6 py-2 text-sm font-medium cursor-pointer transition-all duration-300"
                                >
                                    GET STARTED
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
                        className="md:hidden text-black z-50"
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

                {/* Mobile Menu - AINDA FIXA quando aberta */}
                {isMobileMenuOpen && (
                    <div className="fixed md:hidden top-0 left-0 right-0 bottom-0 bg-white p-6 pt-24 flex flex-col items-center gap-4 z-40 w-screen h-screen">
                        <div className="w-full max-w-sm flex flex-col items-center gap-4">
                            {/* Mobile Dropdown Items - apenas PRODUCTS e RESOURCES */}
                            {navItems.map((item) => (
                                <div key={item.label} className="w-full">
                                    <button
                                        onClick={() => handleDropdownToggle(item.dropdownKey)}
                                        className="flex items-center justify-between w-full text-black hover:text-blue-600 transition-colors py-3 text-lg font-medium"
                                    >
                                        <span>{item.label}</span>
                                        <svg
                                            className={`w-5 h-5 transform transition-transform ${openDropdown === item.dropdownKey ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {/* Mobile Dropdown Content */}
                                    {openDropdown === item.dropdownKey && (
                                        <div className="w-full pl-4 mt-2 mb-4">
                                            {item.dropdownKey === 'products' ? (
                                                <MobileProductsDropdown onClose={() => setOpenDropdown(null)} />
                                            ) : (
                                                <MobileResourcesDropdown onClose={() => setOpenDropdown(null)} />
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}

                            <div className="w-full border-t border-gray-300 my-4 pt-6 flex flex-col gap-4">
                                {user ? (
                                    <>
                                        <div className="text-center text-black mb-2 text-lg">Olá, {user.name}</div>
                                        <button
                                            onClick={() => {
                                                logout();
                                                setIsMobileMenuOpen(false);
                                            }}
                                            className="bg-red-500 hover:bg-red-600 px-4 py-3 rounded-full text-base font-medium transition w-full text-white"
                                        >
                                            Sair
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            onClick={() => {
                                                setIsLoginModalOpen(true);
                                                setIsMobileMenuOpen(false);
                                            }}
                                            className="text-black hover:text-gray-700 text-base font-medium transition w-full py-3"
                                        >
                                            LOG IN
                                        </button>
                                        <button
                                            onClick={() => {
                                                setIsLoginModalOpen(true);
                                                setIsMobileMenuOpen(false);
                                            }}
                                            className='flex items-center justify-center w-full bg-black text-white px-5 py-5 cursor-pointer relative overflow-hidden group transition-all duration-300 mx-auto hover:bg-gray-800'
                                        >
                                            GET STARTED
                                        </button>
                                    </>
                                )}
                            </div>

                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-4 text-gray-600 hover:text-black transition-colors py-2"
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

// Mobile Components (mantidos para texto preto no mobile)
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
                    <h3 className="text-xs font-medium text-gray-600 uppercase tracking-wider">
                        {section.title}
                    </h3>
                    <ul className="space-y-1 ml-2">
                        {section.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                                <a
                                    href="#"
                                    className="flex items-center text-gray-800 hover:text-black transition-colors duration-200 py-1.5 text-sm"
                                    onClick={onClose}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

            <div className="pt-4 border-t border-gray-300">
                <h3 className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-3">
                    {professionalSection.title}
                </h3>
                <div className="space-y-3">
                    {professionalSection.items.map((item, index) => (
                        <div key={index} className="bg-gray-100 rounded-lg p-3">
                            <h4 className="text-sm font-medium text-black mb-1">
                                {item.title}
                            </h4>
                            <p className="text-xs text-gray-600">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="pt-4">
                <a
                    href="#"
                    className="inline-flex items-center text-black hover:text-gray-700 transition-colors duration-300 text-sm font-medium"
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
                <h3 className="text-xs font-medium text-gray-600 uppercase tracking-wider">
                    24/7 Support
                </h3>
                <div className="space-y-3 ml-2">
                    {supportItems.map((item, index) => (
                        <div key={index} className="group/item p-3 rounded-lg transition-colors duration-200 hover:bg-gray-100">
                            <h4 className="text-sm font-medium text-black mb-1">
                                {item.title}
                            </h4>
                            <p className="text-xs text-gray-600 leading-tight">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Inspired Section */}
            <div className="space-y-4 pt-4 border-t border-gray-300">
                <h3 className="text-xs font-medium text-gray-600 uppercase tracking-wider">
                    GET INSPIRED
                </h3>
                <div className="space-y-3 ml-2">
                    {inspiredItems.map((item, index) => (
                        <div key={index} className="bg-gray-100 rounded-lg p-3">
                            <h4 className="text-sm font-medium text-black mb-1">
                                {item.title}
                            </h4>
                            <p className="text-xs text-gray-600">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
                <p className="text-sm text-gray-600 ml-2">
                    Discover inspiring content updated weekly to keep your creativity flowing.
                </p>
            </div>

            <div className="pt-4">
                <a
                    href="#"
                    className="inline-flex items-center text-black hover:text-gray-700 transition-colors duration-300 text-sm font-medium"
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

export default TemplatesNavbar;