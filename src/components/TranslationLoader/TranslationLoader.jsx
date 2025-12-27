import React from 'react';
import { useTranslation } from '../../contexts/TranslationContext';

const TranslationLoader = () => {
    const { isTranslating } = useTranslation();

    if (!isTranslating) return null;

    return (
        <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-black/80 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
            <span className="text-sm">Traduzindo...</span>
        </div>
    );
};

export default TranslationLoader;