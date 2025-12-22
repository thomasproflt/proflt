import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = ({ showLabels = false, compact = false }) => {
    const { theme, resolvedTheme, toggleTheme, changeTheme } = useTheme();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const themes = [
        { id: 'light', label: 'Claro', icon: '☀️' },
        { id: 'dark', label: 'Escuro', icon: '🌙' },
        { id: 'system', label: 'Sistema', icon: '💻' }
    ];

    if (compact) {
        return (
            <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                title={`Tema: ${themes.find(t => t.id === theme)?.label}`}
            >
                {resolvedTheme === 'dark' ? '🌙' : '☀️'}
            </button>
        );
    }

    return (
        <div className="relative">
            {/* Botão principal */}
            <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
            >
                <span className="text-lg">
                    {themes.find(t => t.id === theme)?.icon}
                </span>
                {showLabels && (
                    <span className="font-medium">
                        {themes.find(t => t.id === theme)?.label}
                    </span>
                )}
                <svg
                    className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown */}
            {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-50">
                    {themes.map((themeOption) => (
                        <button
                            key={themeOption.id}
                            onClick={() => {
                                changeTheme(themeOption.id);
                                setIsDropdownOpen(false);
                            }}
                            className={`flex items-center gap-3 w-full px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${theme === themeOption.id
                                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                                    : 'text-gray-800 dark:text-gray-200'
                                } ${themeOption.id === 'light' ? 'rounded-t-xl' : ''} ${themeOption.id === 'system' ? 'rounded-b-xl' : ''}`}
                        >
                            <span className="text-lg">{themeOption.icon}</span>
                            <div className="flex-1">
                                <div className="font-medium">{themeOption.label}</div>
                                {themeOption.id === 'system' && (
                                    <div className="text-xs text-gray-500 dark:text-gray-400">
                                        Usa configuração do dispositivo
                                    </div>
                                )}
                            </div>
                            {theme === themeOption.id && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ThemeToggle;