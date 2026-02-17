"use client";

import { useEffect } from "react";
import Image from "next/image";
import ImgSwit from "@/public/startup/workperch-m-jcgSZlLS0-unsplash.jpg";

export default function Consultancy() {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href =
                "https://wa.me/5566996399303?text=Olá,%20vim%20pela%20Aetheris%20AE%20e%20gostaria%20de%20iniciar%20uma%20análise%20estratégica.";
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen relative flex items-center justify-center font-sans overflow-hidden text-white">

            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src={ImgSwit}
                    alt="Desk"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsla(0,0%,10%,1)] via-[hsla(0,0%,10%,0.6)] to-transparent" />
            </div>

            {/* Conteúdo Central */}
            <div className="flex flex-col items-center gap-6 text-center px-6">

                {/* Loader */}
                <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>

                <h1 className="text-2xl tracking-wide">
                    Iniciando Consultoria Estratégica
                </h1>

                <p className="text-sm text-white/70 max-w-md">
                    Conectando você ao canal direto da Aetheris AE.
                </p>

            </div>
        </div>
    );
}