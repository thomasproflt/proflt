import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { TranslationProvider } from './contexts/TranslationContext'; // ADICIONE ESTE IMPORT
import Home from './pages/Home/Home';
import Templates from './pages/templates/templates';
import Cookie from './components/Cookie/Cookie';
import Loader from './components/Loader/Loader';

// Componente wrapper para controlar o loader
const AppContent = () => {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);
    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        // Verifica se a rota mudou para /templates
        if (location.pathname === '/templates' && currentPath !== '/templates') {
            setIsLoading(true);

            // Simula o carregamento dos templates
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 1500); // Ajuste este tempo conforme necessário

            return () => clearTimeout(timer);
        }

        setCurrentPath(location.pathname);
    }, [location.pathname]);

    return (
        <>
            {/* Mostra o loader apenas na rota /templates enquanto carrega */}
            {isLoading && <Loader />}

            {/* Routes para renderizar as páginas */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/templates"
                    element={
                        <>
                            {!isLoading && <Templates />}
                        </>
                    }
                />
                {/* Adicione outras rotas aqui */}
            </Routes>

            {/* Componente Cookie fixo em todas as páginas */}
            {/*<Cookie />*/}
        </>
    );
};

const App = () => {
    return (
        <TranslationProvider> {/* ENVOLVA TODO O APP COM O TRANSLATIONPROVIDER */}
            <Router>
                <AppContent />
            </Router>
        </TranslationProvider>
    );
};

export default App;