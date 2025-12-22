import React, { useState, useEffect, useRef } from 'react';

const Cookie = () => {
    const [showCookieBanner, setShowCookieBanner] = useState(false);
    const [userChoice, setUserChoice] = useState(null);
    const [showAnimation, setShowAnimation] = useState(false);
    const [showManageSettings, setShowManageSettings] = useState(false);
    const [cookiePreferences, setCookiePreferences] = useState({
        necessary: true,
        analytics: false,
        marketing: false,
        personalization: false
    });
    const cookieRef = useRef(null);

    // Opções de cookies
    const cookieOptions = [
        { id: 'necessary', name: 'Necessary Cookies', description: 'These cookies are essential for the website to function properly. They enable basic functions like page navigation and access to secure areas.', required: true, enabled: true },
        { id: 'analytics', name: 'Analytics Cookies', description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.', required: false, enabled: false },
        { id: 'marketing', name: 'Marketing Cookies', description: 'These cookies are used to track visitors across websites to display more relevant advertisements.', required: false, enabled: false },
        { id: 'personalization', name: 'Personalization Cookies', description: 'These cookies allow the website to remember choices you make and provide enhanced, more personal features.', required: false, enabled: false }
    ];

    // Verificar escolha do usuário ao carregar o componente
    useEffect(() => {
        const savedChoice = localStorage.getItem('cookieConsent');
        const savedPreferences = localStorage.getItem('cookiePreferences');
        
        if (savedChoice) {
            setUserChoice(savedChoice);
            if (savedChoice === 'accepted' || savedChoice === 'rejected') {
                setShowCookieBanner(false);
            }
        } else {
            // Se não há escolha salva, mostrar banner com animação
            setShowCookieBanner(true);
            setTimeout(() => {
                setShowAnimation(true);
            }, 100);
        }

        if (savedPreferences) {
            setCookiePreferences(JSON.parse(savedPreferences));
        } else {
            // Configuração inicial padrão
            const initialPreferences = {};
            cookieOptions.forEach(option => {
                initialPreferences[option.id] = option.enabled;
            });
            setCookiePreferences(initialPreferences);
        }
    }, []);

    // Salvar preferências no localStorage
    const savePreferences = (prefs) => {
        localStorage.setItem('cookiePreferences', JSON.stringify(prefs));
    };

    // Lidar com aceitação
    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        // Salvar todas as preferências como aceitas
        const allAccepted = {};
        cookieOptions.forEach(option => {
            allAccepted[option.id] = true;
        });
        savePreferences(allAccepted);
        setUserChoice('accepted');
        setShowAnimation(false);
        setTimeout(() => {
            setShowCookieBanner(false);
        }, 300);
    };

    // Lidar com rejeição
    const handleReject = () => {
        localStorage.setItem('cookieConsent', 'rejected');
        // Salvar apenas cookies necessários
        const onlyNecessary = {};
        cookieOptions.forEach(option => {
            onlyNecessary[option.id] = option.required;
        });
        savePreferences(onlyNecessary);
        setUserChoice('rejected');
        setShowAnimation(false);
        setTimeout(() => {
            setShowCookieBanner(false);
        }, 300);
    };

    // Lidar com gerenciamento de configurações
    const handleManageSettings = () => {
        setShowManageSettings(true);
    };

    // Salvar configurações personalizadas
    const handleSaveSettings = () => {
        localStorage.setItem('cookieConsent', 'custom');
        savePreferences(cookiePreferences);
        setUserChoice('custom');
        setShowManageSettings(false);
        setShowAnimation(false);
        setTimeout(() => {
            setShowCookieBanner(false);
        }, 300);
    };

    // Atualizar preferência individual
    const handlePreferenceChange = (id, value) => {
        setCookiePreferences(prev => ({
            ...prev,
            [id]: value
        }));
    };

    // Resetar para configurações padrão
    const handleResetSettings = () => {
        const defaultPreferences = {};
        cookieOptions.forEach(option => {
            defaultPreferences[option.id] = option.enabled;
        });
        setCookiePreferences(defaultPreferences);
    };

    // Fechar gerenciamento de configurações
    const handleCloseManageSettings = () => {
        setShowManageSettings(false);
    };

    // Aceitar todos do modal de configurações
    const handleAcceptAllInModal = () => {
        const allAccepted = {};
        cookieOptions.forEach(option => {
            allAccepted[option.id] = true;
        });
        setCookiePreferences(allAccepted);
    };

    // Rejeitar todos do modal de configurações
    const handleRejectAllInModal = () => {
        const onlyNecessary = {};
        cookieOptions.forEach(option => {
            onlyNecessary[option.id] = option.required;
        });
        setCookiePreferences(onlyNecessary);
    };

    // Se o usuário já fez uma escolha e não está visualizando configurações, não mostrar nada
    if (!showCookieBanner && !showManageSettings) {
        return null;
    }

    return (
        <>
            {/* Overlay para modal */}
            {showManageSettings && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={handleCloseManageSettings}
                />
            )}

            {/* Modal de Gerenciamento de Configurações */}
            {showManageSettings && (
                <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                    <div 
                        className="bg-white shadow-2xl max-w cursor-pointer-2xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-800">Cookie Settings</h2>
                                <button 
                                    onClick={handleCloseManageSettings}
                                    className="text-gray-500 hover:text-gray-700 text-2xl"
                                >
                                    ×
                                </button>
                            </div>
                            
                            <p className="text-gray-600 mb-6">
                                Customize your cookie preferences. Necessary cookies are always active to ensure the website functions properly.
                            </p>
                            
                            <div className="space-y-6 mb-8">
                                {cookieOptions.map((option) => (
                                    <div key={option.id} className="border-b pb-4">
                                        <div className="flex justify-between items-center mb-2">
                                            <div>
                                                <h3 className="font-semibold text-gray-800">{option.name}</h3>
                                                {option.required && (
                                                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Always active</span>
                                                )}
                                            </div>
                                            {!option.required && (
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        className="sr-only peer"
                                                        checked={cookiePreferences[option.id]}
                                                        onChange={(e) => handlePreferenceChange(option.id, e.target.checked)}
                                                        disabled={option.required}
                                                    />
                                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                                </label>
                                            )}
                                        </div>
                                        <p className="text-sm text-gray-600">{option.description}</p>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="flex flex-wrap gap-3 justify-between">
                                <div className="flex gap-3">
                                    <button
                                        onClick={handleAcceptAllInModal}
                                        className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
                                    >
                                        Accept All
                                    </button>
                                    <button
                                        onClick={handleRejectAllInModal}
                                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
                                    >
                                        Reject All
                                    </button>
                                </div>
                                <div className="flex gap-3">
                                    <button
                                        onClick={handleResetSettings}
                                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors"
                                    >
                                        Reset
                                    </button>
                                    <button
                                        onClick={handleSaveSettings}
                                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                                    >
                                        Save Settings
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Banner de Cookies */}
            {showCookieBanner && (
                <div 
                    ref={cookieRef}
                    className={`fixed bottom-0 left-0 right-0 bg-white text-gray-800 shadow-2xl border-t border-gray-200 z-30 transform transition-transform duration-500 ease-out ${
                        showAnimation ? 'translate-y-0' : 'translate-y-full'
                    }`}
                >
                    <div className="container mx-auto px-4 py-6">
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                            <div className="flex-1">
                                <p className="text-gray-500">
                                    We use cookies and similar technologies to enhance your browsing experience, 
                                    analyze site traffic, and personalize content. By clicking "Accept All", 
                                    you consent to our use of cookies. You can manage your preferences at any time 
                                    by clicking "Manage Settings".
                                </p>
                                <div className="mt-4 text-sm text-gray-500">
                                    <a href="#" className="text-black underline mr-4">Cookie Policy</a>
                                    <a href="#" className="text-black underline">Privacy Policy</a>
                                </div>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto text-[14px]">
                                <button 
                                    onClick={handleAccept}
                                    className="px-6 py-3 bg-[hsl(0,8%,12%)] text-white cursor-pointer transition-colors font-medium whitespace-nowrap"
                                >
                                    Accept All
                                </button>
                                <button 
                                    onClick={handleReject}
                                    className="px-6 py-3 bg-[hsl(0,8%,12%)] text-white cursor-pointer transition-colors font-medium whitespace-nowrap"
                                >
                                    Reject All
                                </button>
                                <button 
                                    onClick={handleManageSettings}
                                    className="px-6 py-3 border border-transparent text-gray-800 hover:bg-transparent cursor-pointer transition-colors underline font-medium whitespace-nowrap"
                                >
                                    MANAGE SETTINGS
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Cookie;