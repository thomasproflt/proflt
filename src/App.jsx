import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { TranslationProvider } from './contexts/TranslationContext';
import Home from './pages/Home/Home';
//import Templates from './pages/templates/templates';
//import Cookie from './components/Cookie/Cookie';
//import Loader from './components/Loader/Loader';

// Componente wrapper para controlar o loader
const AppContent = () => {
    //const location = useLocation();
    //const [isLoading, setIsLoading] = useState(false);
    //const [currentPath, setCurrentPath] = useState('');

    {/*useEffect(() => {
        if (location.pathname === '/templates' && currentPath !== '/templates') {
            setIsLoading(true);

            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 1500);

            return () => clearTimeout(timer);
        }

        setCurrentPath(location.pathname);
    }, [location.pathname]);*/}

    return (
        <>
            {/* Mostra o loader apenas na rota /templates enquanto carrega */}
            {/**{isLoading && <Loader />} */}

            {/* Routes para renderizar as páginas */}
            <Routes>
                <Route path="/" element={<Home />} />
                {/*<Route
                    path="/templates"
                    element={
                        <>
                            {!isLoading && <Templates />}
                        </>
                    }
                />*/}
            </Routes>

            {/*<Cookie />*/}
        </>
    );
};

const App = () => {
    return (
        <TranslationProvider>
            <Router>
                <AppContent />
            </Router>
        </TranslationProvider>
    );
};

export default App;