import React, { useState, useEffect, useRef } from 'react';

const DropdownMenuResources = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [closing, setClosing] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
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

    useEffect(() => {
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, []);

    // Classes for animation (matching the Products dropdown)
    const dropdownClasses = `absolute top-full left-1/2 transform -translate-x-1/2 min-w-[800px] z-40 transition-all duration-300 ease-out ${isVisible && !closing
        ? 'translate-y-0 opacity-100'
        : '-translate-y-4 opacity-0 pointer-events-none'
        }`;

    const currentImage = inspiredCarousel[currentImageIndex];

    return (
        <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={triggerRef}
        >

            {/* Trigger for the dropdown - matches the Products button style */}
            <div
                ref={triggerRef}
                className="relative overflow-hidden h-6 group text-white hover:text-white transition-colors cursor-pointer"
            >
                <span className="block group-hover:-translate-y-full text-white transition-transform duration-300">
                    Resources
                </span>
                <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] text-white transition-transform duration-300">
                    Resources
                </span>
            </div>

            {/* Dropdown Menu Container */}
            {isVisible && (
                <div
                    ref={dropdownRef}
                    className={dropdownClasses}
                >
                    <div className="bg-black border border-white/10 rounded-xl shadow-2xl overflow-hidden">
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

                            {/* "View All Resources" Link - matches "View All Features" */}
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
                </div>
            )}
        </div>
    );
};

export default DropdownMenuResources;