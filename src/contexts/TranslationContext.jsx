import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import AutoTranslateService from '../services/autoTranslateService';

const TranslationContext = createContext();

export const useTranslation = () => useContext(TranslationContext);

export const TranslationProvider = ({ children }) => {
    const [language, setLanguage] = useState('pt');
    const [isTranslating, setIsTranslating] = useState(false);
    const [translationCache, setTranslationCache] = useState({});

    // Load saved language
    useEffect(() => {
        const savedLang = localStorage.getItem('appLanguage') || 'pt';
        setLanguage(savedLang);
        
        // Dispatch event for other components
        window.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { language: savedLang }
        }));
        
        console.log('📱 Idioma carregado:', savedLang);
    }, []);

    // Translate text dynamically with better error handling
    const translate = useCallback(async (text, targetLang = language) => {
        if (targetLang === 'pt' || !text) {
            return text;
        }
        
        const cacheKey = `${targetLang}-${text}`;
        
        // Check cache first
        if (translationCache[cacheKey]) {
            console.log(`📦 Cache hit: "${text}"`);
            return translationCache[cacheKey];
        }
        
        setIsTranslating(true);
        try {
            console.log(`🌐 Iniciando tradução: "${text}" para ${targetLang}`);
            const translated = await AutoTranslateService.translateText(text, targetLang);
            
            // Update cache
            setTranslationCache(prev => ({
                ...prev,
                [cacheKey]: translated
            }));
            
            console.log(`✅ Tradução concluída: "${text}" -> "${translated}"`);
            return translated;
        } catch (error) {
            console.error('❌ Translation error:', error);
            return text;
        } finally {
            setIsTranslating(false);
        }
    }, [language, translationCache]);

    // Change language
    const changeLanguage = useCallback(async (newLang) => {
        if (newLang === language) return;
        
        console.log(`🔄 Mudando idioma de ${language} para ${newLang}`);
        setIsTranslating(true);
        
        try {
            setLanguage(newLang);
            localStorage.setItem('appLanguage', newLang);
            
            // Clear cache for old language
            setTranslationCache({});
            
            // Dispatch event
            window.dispatchEvent(new CustomEvent('languageChanged', {
                detail: { language: newLang }
            }));
            
            console.log(`✅ Idioma alterado para: ${newLang}`);
        } catch (error) {
            console.error('❌ Error changing language:', error);
        } finally {
            // Dá um pequeno delay para mostrar o loading
            setTimeout(() => {
                setIsTranslating(false);
            }, 500);
        }
    }, [language]);

    return (
        <TranslationContext.Provider value={{
            language,
            setLanguage: changeLanguage,
            translate,
            isTranslating,
            translationCache
        }}>
            {children}
        </TranslationContext.Provider>
    );
};