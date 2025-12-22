import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext({});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('system');
    const [resolvedTheme, setResolvedTheme] = useState('dark');
    const [loading, setLoading] = useState(true);

    // Determina o tema real baseado na preferência do sistema
    const getSystemTheme = () => {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    // Aplica o tema ao documento
    const applyTheme = (themeMode) => {
        const root = window.document.documentElement;

        // Remove classes antigas
        root.classList.remove('light', 'dark');

        // Determina o tema real a ser aplicado
        let actualTheme = themeMode;
        if (themeMode === 'system') {
            actualTheme = getSystemTheme();
        }

        // Aplica o tema
        root.classList.add(actualTheme);
        setResolvedTheme(actualTheme);

        // Salva no localStorage
        localStorage.setItem('theme', themeMode);
    };

    // Carrega tema salvo
    const loadTheme = async () => {
        try {
            // Primeiro tenta carregar do localStorage
            const savedTheme = localStorage.getItem('theme') || 'system';
            setTheme(savedTheme);
            applyTheme(savedTheme);

            // Se usuário está logado, tenta carregar do backend
            const token = localStorage.getItem('token');
            if (token) {
                const response = await fetch('http://localhost:5000/api/user/theme', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    if (data.theme) {
                        setTheme(data.theme);
                        applyTheme(data.theme);
                    }
                }
            }
        } catch (error) {
            console.error('Erro ao carregar tema:', error);
        } finally {
            setLoading(false);
        }
    };

    // Salva tema no backend (se usuário logado)
    const saveThemeToBackend = async (themeMode) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) return;

            await fetch('http://localhost:5000/api/user/theme', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ theme: themeMode })
            });
        } catch (error) {
            console.error('Erro ao salvar tema no backend:', error);
        }
    };

    // Muda o tema
    const changeTheme = async (themeMode) => {
        setTheme(themeMode);
        applyTheme(themeMode);

        // Salva no backend se usuário logado
        await saveThemeToBackend(themeMode);
    };

    // Alterna entre claro/escuro
    const toggleTheme = () => {
        const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
        changeTheme(newTheme);
    };

    // Observa mudanças no tema do sistema
    useEffect(() => {
        loadTheme();

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            if (theme === 'system') {
                applyTheme('system');
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    // Aplica tema quando muda
    useEffect(() => {
        if (!loading) {
            applyTheme(theme);
        }
    }, [theme, loading]);

    return (
        <ThemeContext.Provider value={{
            theme,
            resolvedTheme,
            loading,
            changeTheme,
            toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    );
};