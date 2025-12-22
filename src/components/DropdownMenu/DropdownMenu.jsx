import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [closing, setClosing] = useState(false);
    const dropdownRef = useRef(null);
    const triggerRef = useRef(null);
    let timeoutId = null;

    const handleMouseEnter = () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }
        setClosing(false);
        setIsVisible(true);
    };

    const handleMouseLeave = () => {
        setClosing(true);
        timeoutId = setTimeout(() => {
            setIsVisible(false);
            setClosing(false);
        }, 200);
    };

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
                icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
            },
            {
                link: '/2',
                title: "Circle",
                description: "The partner program for freelancers and agencies",
                icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
            }
        ]
    };

    useEffect(() => {
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, []);

    // Classes de animação
    const dropdownClasses = `absolute top-full left-1/2 transform -translate-x-1/2 min-w-[1000px] z-40 transition-all duration-300 ease-out ${isVisible && !closing
        ? 'translate-y-0 opacity-100'
        : '-translate-y-4 opacity-0 pointer-events-none'
        }`;

    return (
        <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={triggerRef}
        >

            {/* Trigger do dropdown */}
            <div
                ref={triggerRef}
                className="relative overflow-hidden h-6 group text-white hover:text-white transition-colors cursor-pointer"
            >
                <span className="block group-hover:-translate-y-full text-white transition-transform duration-300">
                    Products
                </span>
                <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] text-white transition-transform duration-300">
                    Products
                </span>
            </div>

            {/* Dropdown Menu */}
            {isVisible && (
                <div
                    ref={dropdownRef}
                    className={dropdownClasses}
                >
                    <div className="bg-black border border-white/10 rounded-xl shadow-2xl overflow-hidden">
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

                                {/* BUSINESS TOOLS - ocupa linha 2, coluna 3 (abaixo de MARKETING) */}
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
                                                <Link to={item.link} key={index} className="flex relative bg-white/5 rounded-lg min-w-90 p-4 hover:bg-white/10 cursor-pointer transition-colors duration-300">
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
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Link "View All Features" - ABAIXO de tudo, linha completa */}
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
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;