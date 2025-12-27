import { useCallback } from 'react';
import autoTranslateService from '../services/autoTranslateService';

export const useAutoTranslate = () => {
    const translate = useCallback(async (content, targetLang) => {
        return await autoTranslateService.translateText(content, targetLang);
    }, []);

    const translateElement = useCallback(async (element, targetLang) => {
        if (!element || targetLang === 'pt') return element;

        // Se for string, traduz diretamente
        if (typeof element === 'string') {
            return await translate(element, targetLang);
        }

        // Se for React element, traduz recursivamente
        if (React.isValidElement(element)) {
            return await translateReactElement(element, targetLang);
        }

        return element;
    }, []);

    const translateReactElement = useCallback(async (element, targetLang) => {
        if (!element.props) return element;

        const newProps = { ...element.props };

        // Traduz children
        if (newProps.children) {
            const childrenArray = React.Children.toArray(newProps.children);
            const translatedChildren = await Promise.all(
                childrenArray.map(async (child) => {
                    return await translateElement(child, targetLang);
                })
            );
            newProps.children = translatedChildren;
        }

        // Traduz outras props de texto
        for (const [key, value] of Object.entries(newProps)) {
            if (typeof value === 'string' && key !== 'className' && key !== 'id') {
                newProps[key] = await translate(value, targetLang);
            }
        }

        return React.cloneElement(element, newProps);
    }, []);

    return {
        translate,
        translateElement,
        translateReactElement
    };
};