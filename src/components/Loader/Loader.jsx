import React, { useEffect, useState } from 'react';

const Loader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
            {/* Quadrado com animação de rotação 3D */}
            <div 
                className="w-16 h-16 bg-black rounded-lg mb-4 shadow-lg"
                style={{
                    animation: 'flipRotate 1.5s infinite ease-in-out'
                }}
            ></div>
            
            {/* Texto "Loading" em preto */}
            <p className="text-black text-lg font-medium tracking-wider">Loading</p>

            {/* Estilos inline para a animação */}
            <style>
                {`
                @keyframes flipRotate {
                    0% {
                        transform: rotateY(0deg) rotateX(0deg);
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                    25% {
                        transform: rotateY(90deg) rotateX(0deg);
                        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
                    }
                    50% {
                        transform: rotateY(180deg) rotateX(0deg);
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                    75% {
                        transform: rotateY(270deg) rotateX(90deg);
                        box-shadow: -5px -5px 15px rgba(0, 0, 0, 0.15);
                    }
                    100% {
                        transform: rotateY(360deg) rotateX(180deg);
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                }
                `}
            </style>
        </div>
    );
};

export default Loader;