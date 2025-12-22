import React, { useState } from 'react';

const TemplatesSidebar = () => {
    const [selectedType, setSelectedType] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState('Popular Designs');
    const [showFavorites, setShowFavorites] = useState(false);

    // Tipos com caixas de seleção
    const types = [
        'Online Store',
        'Portfolio',
        'Memberships',
        'Blog',
        'Scheduling',
        'One Page',
        'Courses',
        'Services',
        'Donations'
    ];

    // Tópicos com texto e contador
    const topics = [
        { name: 'All Templates', count: 0 },
        { name: 'Collaborations', count: 0 },
        { name: 'Art & Design', count: 0 },
        { name: 'Community & Non-Profits', count: 0 },
        { name: 'Entertainment', count: 0 },
        { name: 'Events', count: 0 },
        { name: 'Fashion', count: 0 },
        { name: 'Fitness & Sports', count: 0 },
        { name: 'Food', count: 0 },
        { name: 'Health & Beauty', count: 0 },
        { name: 'Home & Decor', count: 0 },
        { name: 'Local Business', count: 0 },
        { name: 'Media & Podcasts', count: 0 },
        { name: 'Nature & Animals', count: 0 },
        { name: 'Personal & CV', count: 0 },
        { name: 'Photography', count: 0 },
        { name: 'Professional Services', count: 0 },
        { name: 'Real Estate & Properties', count: 0 },
        { name: 'Restaurants', count: 0 },
        { name: 'Travel', count: 0 },
        { name: 'Weddings', count: 0 }
    ];

    const handleTypeToggle = (type) => {
        if (selectedType.includes(type)) {
            setSelectedType(selectedType.filter(t => t !== type));
        } else {
            setSelectedType([...selectedType, type]);
        }
    };

    const handleTopicSelect = (topic) => {
        setSelectedTopic(topic);
    };

    return (
        <aside className="w-full h-full p-6 overflow-y-auto">
            {/* Seção TYPE */}
            <div className="mb-8">
                <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-4">
                    Type
                </h2>
                <div className="space-y-2">
                    {types.map((type, index) => (
                        <div 
                            key={index} 
                            className="flex items-center cursor-pointer group"
                            onClick={() => handleTypeToggle(type)}
                        >
                            <div className={`w-4 h-4 border rounded-sm flex items-center justify-center mr-3 transition-all duration-200
                                ${selectedType.includes(type) 
                                    ? 'bg-black border-black' 
                                    : 'border-gray-300 group-hover:border-gray-400'
                                }`}
                            >
                                {selectedType.includes(type) && (
                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                )}
                            </div>
                            <span className={`text-sm transition-colors duration-200
                                ${selectedType.includes(type) 
                                    ? 'text-black font-medium' 
                                    : 'text-gray-600 group-hover:text-gray-800'
                                }`}
                            >
                                {type}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Divider */}
            <div className="relative mb-8">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center">
                    <div className="px-2 bg-white">
                        <span className="text-xs text-gray-400">• • •</span>
                    </div>
                </div>
            </div>

            {/* Seção TOPIC */}
            <div className="mb-8">
                <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-4">
                    Topic
                </h2>
                <div className="space-y-1">
                    {/* Popular Designs com active e contador */}
                    <div 
                        className={`py-2 px-3 rounded-md cursor-pointer transition-all duration-200 relative group
                            ${selectedTopic === 'Popular Designs' 
                                ? 'bg-gray-50 border-l-4 border-black -ml-3 pl-3' 
                                : 'hover:bg-gray-50'
                            }`}
                        onClick={() => handleTopicSelect('Popular Designs')}
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <span className={`text-sm font-medium transition-colors duration-200
                                    ${selectedTopic === 'Popular Designs' 
                                        ? 'text-black' 
                                        : 'text-gray-700 group-hover:text-gray-900'
                                    }`}
                                >
                                    Popular Designs
                                </span>
                                <div className={`ml-2 px-2 py-0.5 rounded-full text-xs transition-all duration-200
                                    ${selectedTopic === 'Popular Designs' 
                                        ? 'bg-black text-white' 
                                        : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                                    }`}
                                >
                                    29
                                </div>
                            </div>
                            {selectedTopic === 'Popular Designs' && (
                                <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                            )}
                        </div>
                    </div>

                    {/* Demais tópicos */}
                    {topics.map((topic, index) => (
                        <div 
                            key={index} 
                            className={`py-2 px-3 rounded-md cursor-pointer transition-all duration-200 relative group
                                ${selectedTopic === topic.name 
                                    ? 'bg-gray-50 border-l-4 border-black -ml-3 pl-3' 
                                    : 'hover:bg-gray-50'
                                }`}
                            onClick={() => handleTopicSelect(topic.name)}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <span className={`text-sm transition-colors duration-200
                                        ${selectedTopic === topic.name 
                                            ? 'text-black font-medium' 
                                            : 'text-gray-600 group-hover:text-gray-800'
                                        }`}
                                    >
                                        {topic.name}
                                    </span>
                                    {topic.count > 0 && (
                                        <div className={`ml-2 px-2 py-0.5 rounded-full text-xs transition-all duration-200
                                            ${selectedTopic === topic.name 
                                                ? 'bg-black text-white' 
                                                : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                                            }`}
                                        >
                                            {topic.count}
                                        </div>
                                    )}
                                </div>
                                {selectedTopic === topic.name && (
                                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Divider */}
            <div className="relative mb-8">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center">
                    <div className="px-2 bg-white">
                        <span className="text-xs text-gray-400">• • •</span>
                    </div>
                </div>
            </div>

            {/* Seção MY FAVORITES */}
            <div 
                className={`py-3 px-4 rounded-lg cursor-pointer transition-all duration-200 relative group
                    ${showFavorites 
                        ? 'bg-red-50 border-l-4 border-red-500 -ml-4 pl-4' 
                        : 'hover:bg-gray-50'
                    }`}
                onClick={() => setShowFavorites(!showFavorites)}
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <svg 
                            className={`w-5 h-5 mr-3 transition-all duration-200
                                ${showFavorites 
                                    ? 'text-red-500 fill-red-500' 
                                    : 'text-gray-400 group-hover:text-gray-500'
                                }`}
                            fill={showFavorites ? "currentColor" : "none"}
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={showFavorites ? "0" : "2"} 
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                            />
                        </svg>
                        <span className={`text-sm font-medium transition-colors duration-200
                            ${showFavorites 
                                ? 'text-red-600' 
                                : 'text-gray-700 group-hover:text-gray-900'
                            }`}
                        >
                            MY FAVORITES
                        </span>
                    </div>
                    {showFavorites && (
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    )}
                </div>
            </div>
        </aside>
    );
};

export default TemplatesSidebar;