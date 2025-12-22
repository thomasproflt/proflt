import React from 'react';
import { Link } from 'react-router-dom';

const TemplatesFilterHeader = () => {
    return (
        <div className="fixed top-20 left-64 right-0 bg-white px-4 md:px-10 py-4 shadow-lg border-b border-gray-200 z-40 flex flex-col sm:flex-row justify-between items-center transition-all duration-300">
            <h1 className="text-4xl md:text-[18px] text-center md:text-left md:w-160 mb-6 md:mb-0">
                29 Results
            </h1>
            <Link
                to={'/templates/custom-templates'}
                className='flex items-center justify-center md:h-10 bg-transparent border-2 border-gray-300 hover:border-black active:border-black text-black px-4 py-2 sm:px-8 sm:py-2 cursor-pointer relative overflow-hidden group transition-all duration-300'
            >
                <span className="relative text-[14px] font-semibold z-10 transition-colors duration-300 group-hover:text-white group-active:text-white">
                    TRY BlUEPRINT AI BUILDER
                </span>
                <span className="absolute inset-y-0 left-0 w-0 bg-[hsl(0,0%,0%)] transition-all duration-500 ease-out group-hover:w-full group-active:w-full"></span>
                <span className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-0 group-active:opacity-30 active:opacity-30 bg-black"></span>
            </Link>
        </div>
    );
};

export default TemplatesFilterHeader;