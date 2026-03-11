"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { indexOperationalLeadership } from "../data/indexOperationalLeadership.data";
import { indexBuildingTeams } from "../data/indexBuildingTeams.data";
import { indexStrategicPartner } from "../data/indexStrategicPartner.data";
import { indexVisionDriven } from "../data/indexVisionDriven.data";
import { indexBringingDesign } from "../data/indexBringingDesign.data";
import useFadeOutOnScroll from "../hooks/useFadeOutOnScroll";

const ChevronDown = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
    </svg>
);

export default function RightChoice() {
    const [opacity, setOpacity] = useState(1);
    const operationalFade = useFadeOutOnScroll(2.0);
    const buildingTeamsFade = useFadeOutOnScroll(2.0);
    const strategicPartnerFade = useFadeOutOnScroll(2.0);
    const visionDrivenFade = useFadeOutOnScroll(2.0);
    const bringingDesignFade = useFadeOutOnScroll(2.0);
    const endPageFade = useFadeOutOnScroll(2.0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            const fadeEnd = 400

            const progress = Math.min(scrollY / fadeEnd, 1)

            setOpacity(1 - progress)
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="min-h-screen items-center justify-start font-sans">
            <Navbar />

            <section
                id="home"
                className="-z-10 flex min-h-screen bg-[#0D0D0D] w-full max-w-full items-center justify-center" /**sticky top-0  */
            >
                <div
                    style={{
                        opacity,
                        transform: `translateY(${(1 - opacity) * 80}px)`
                    }}
                    className="relative z-30 flex flex-col items-center justify-center gap-6 text-center py-30 transition-all duration-300"
                >
                    <h1 className="max-w-full text-6xl text-zinc-600 dark:text-zinc-400">
                        Eu ajudo você<br /><span className="highlight-text">a estruturar sua presença digital.</span>
                    </h1>
                    <p className="max-w-[50rem] text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                        Trabalho lado a lado com empreendedores e empresas para diagnosticar problemas estratégicos, estruturar soluções digitais e desenvolver plataformas que geram autoridade, eficiência e crescimento real.
                    </p>

                    <a
                        href={"#operational-leadership"}
                        className="flex items-center justify-center gap-2 border border-solid border-black/[0.08] p-2 rounded-full hover:bg-black/[0.04] dark:border-white/[0.145] dark:hover:bg-[hsl(0,0%,13%)] group hover:translate-y-2 transition-all duration-200"
                    >
                        <span className="text-[14px] text-zinc-400 group-hover:text-white transition-all duration-100">{ChevronDown}</span>
                    </a>
                </div>
            </section>

            <section
                id="operational-leadership"
                className="flex container w-full max-w-full min-h-[51rem] bg-[#0D0D0D] flex-col items-center justify-center py-[10rem] px-4 sm:px-6 md:px-[7rem] sm:items-start sm:justify-center"
            >
                <div
                    ref={operationalFade.ref}
                    style={{ opacity: operationalFade.opacity }}
                    className="relative z-30 flex flex-col w-full max-w-full items-start justify-center gap-6 transition-all duration-300"
                >
                    <span className="bg-[#191919] px-4 py-2 rounded-full text-left text-[16px] text-zinc-600 dark:text-zinc-400 mb-[2rem]">
                        ENTREGANDO RESULTADOS
                    </span>
                    <h1 className="text-center text-5xl text-zinc-600 dark:text-zinc-100 mb-[1rem]">
                        Operational Leadership.
                    </h1>
                    <p className="max-w-[30rem] text-left text-[16px] text-zinc-600 dark:text-zinc-400 mb-[3rem]">
                        Desde o diagnóstico estratégico até a execução técnica, eu estruturo sistemas digitais que transformam
                        presença online em ativo de negócios. O objetivo é simples: alinhar tecnologia, marca e estratégia
                        para gerar crescimento sustentável.
                    </p>

                    <p className="font-bold text-left text-[18px] text-zinc-600 dark:text-zinc-300 mb-[20px] opacity-90">
                        Veja como posso ajudar...
                    </p>

                    <div className="grid grid-cols-2 max-w-7xl w-full gap-5">
                        {indexOperationalLeadership.map((item) => (
                            <div key={item.id} className="bg-[#161617] p-5 rounded-2xl">
                                <div className="flex flex-col lg:flex-row justify-between items-center gap-10 text-center lg:text-left w-full">
                                    <div className="flex flex-col">
                                        <h1 className="text-black dark:text-zinc-200 mb-5">
                                            {item.svg}
                                        </h1>

                                        <h1 className="max-w-xs text-[25px] font-normal text-black dark:text-zinc-200 mb-5">
                                            {item.title}
                                        </h1>

                                        <p className="max-w-[30rem] text-[16px] text-zinc-600 dark:text-zinc-400">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>

            <section
                id="building-teams"
                className="flex container w-full max-w-full min-h-[51rem] bg-[#0D0D0D] flex-col items-center justify-center py-[10rem] px-4 sm:px-6 md:px-[7rem] sm:items-start sm:justify-center"
            >
                <div
                    ref={buildingTeamsFade.ref}
                    style={{ opacity: buildingTeamsFade.opacity }}
                    className="relative z-30 flex flex-col w-full max-w-full items-start justify-center gap-6 transition-all duration-300"
                >
                    <span className="bg-[#191919] px-4 py-2 rounded-full text-left text-[16px] text-zinc-600 dark:text-zinc-400 mb-[2rem]">
                        NEGÓCIOS ESTRUTURADOS
                    </span>
                    <h1 className="text-center text-5xl text-zinc-600 dark:text-zinc-100 mb-[1rem]">
                        Building Strong Foundations.
                    </h1>
                    <p className="max-w-[30rem] text-left text-[16px] text-zinc-600 dark:text-zinc-400 mb-[3rem]">
                        Grandes negócios são construídos sobre estruturas sólidas. Eu ajudo empreendedores a transformar 
    ideias em arquiteturas digitais claras — combinando estratégia, posicionamento e tecnologia para 
    criar presença digital profissional.
                    </p>

                    <p className="font-bold text-left text-[18px] text-zinc-600 dark:text-zinc-300 mb-[20px] opacity-90">
                        O que eu trago para a mesa...
                    </p>

                    <div className="grid grid-cols-2 max-w-7xl w-full gap-5">
                        {indexBuildingTeams.map((item) => (
                            <div key={item.id} className="bg-[#161617] p-5 rounded-2xl">
                                <div className="flex flex-col lg:flex-row justify-between items-center gap-10 text-center lg:text-left w-full">
                                    <div className="flex flex-col">
                                        <h1 className="text-black dark:text-zinc-200 mb-5">
                                            {item.svg}
                                        </h1>

                                        <h1 className="max-w-xs text-[25px] font-normal text-black dark:text-zinc-200 mb-5">
                                            {item.title}
                                        </h1>

                                        <p className="max-w-[30rem] text-[16px] text-zinc-600 dark:text-zinc-400">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>

            <section
                id="strategic-partner"
                className="flex container w-full max-w-full min-h-[51rem] bg-[#0D0D0D] flex-col items-center justify-center py-[10rem] px-4 sm:px-6 md:px-[7rem] sm:items-start sm:justify-center"
            >
                <div
                    ref={strategicPartnerFade.ref}
                    style={{ opacity: strategicPartnerFade.opacity }}
                    className="relative z-30 flex flex-col w-full max-w-full items-start justify-center gap-6 transition-all duration-300"
                >
                    <span className="bg-[#191919] px-4 py-2 rounded-full text-left text-[16px] text-zinc-600 dark:text-zinc-400 mb-[2rem]">
                        CRESCIMENTO DE NEGÓCIOS
                    </span>
                    <h1 className="text-center text-5xl text-zinc-600 dark:text-zinc-100 mb-[1rem]">
                        A Strategic Partner.
                    </h1>
                    <p className="max-w-[30rem] text-left text-[16px] text-zinc-600 dark:text-zinc-400 mb-[3rem]">
                        Meu trabalho vai além de criar sites. Eu atuo como parceiro estratégico, ajudando empresas a 
    transformar sua presença digital em uma estrutura capaz de gerar clientes, autoridade e vantagem competitiva.
                    </p>

                    <p className="font-bold text-left text-[18px] text-zinc-600 dark:text-zinc-300 mb-[20px] opacity-90">
                        Como posso contribuir...
                    </p>

                    <div className="grid grid-cols-2 max-w-7xl w-full gap-5">
                        {indexStrategicPartner.map((item) => (
                            <div key={item.id} className="bg-[#161617] p-5 rounded-2xl">
                                <div className="flex flex-col lg:flex-row justify-between items-center gap-10 text-center lg:text-left w-full">
                                    <div className="flex flex-col">
                                        <h1 className="text-black dark:text-zinc-200 mb-5">
                                            {item.svg}
                                        </h1>

                                        <h1 className="max-w-xs text-[25px] font-normal text-black dark:text-zinc-200 mb-5">
                                            {item.title}
                                        </h1>

                                        <p className="max-w-[30rem] text-[16px] text-zinc-600 dark:text-zinc-400">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>

            <section
                id="vision-driven"
                className="flex container w-full max-w-full min-h-[51rem] bg-[#0D0D0D] flex-col items-center justify-center py-[10rem] px-4 sm:px-6 md:px-[7rem] sm:items-start sm:justify-center"
            >
                <div
                    ref={visionDrivenFade.ref}
                    style={{ opacity: visionDrivenFade.opacity }}
                    className="relative z-30 flex flex-col w-full max-w-full items-start justify-center gap-6 transition-all duration-300"
                >
                    <span className="bg-[#191919] px-4 py-2 rounded-full text-left text-[16px] text-zinc-600 dark:text-zinc-400 mb-[2rem]">
                        VISÃO DE FUTURO
                    </span>
                    <h1 className="text-center text-5xl text-zinc-600 dark:text-zinc-100 mb-[1rem]">
                        Vision-Driven.
                    </h1>
                    <p className="max-w-[30rem] text-left text-[16px] text-zinc-600 dark:text-zinc-400 mb-[3rem]">
                        Negócios evoluem quando existe clareza de visão. Eu ajudo marcas e empreendedores a estruturar 
    uma presença digital alinhada ao futuro — conectando identidade, tecnologia e estratégia de crescimento.
                    </p>

                    <p className="font-bold text-left text-[18px] text-zinc-600 dark:text-zinc-300 mb-[20px] opacity-90">
                        Veja como isso se traduz na prática...
                    </p>

                    <div className="grid grid-cols-2 max-w-7xl w-full gap-5">
                        {indexVisionDriven.map((item) => (
                            <div key={item.id} className="bg-[#161617] p-5 rounded-2xl">
                                <div className="flex flex-col lg:flex-row justify-between items-center gap-10 text-center lg:text-left w-full">
                                    <div className="flex flex-col">
                                        <h1 className="text-black dark:text-zinc-200 mb-5">
                                            {item.svg}
                                        </h1>

                                        <h1 className="max-w-xs text-[25px] font-normal text-black dark:text-zinc-200 mb-5">
                                            {item.title}
                                        </h1>

                                        <p className="max-w-[30rem] text-[16px] text-zinc-600 dark:text-zinc-400">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>

            <section
                id="bringing-design"
                className="flex container w-full max-w-full min-h-[51rem] bg-[#0D0D0D] flex-col items-center justify-center py-[10rem] px-4 sm:px-6 md:px-[7rem] sm:items-start sm:justify-center"
            >
                <div
                    ref={bringingDesignFade.ref}
                    style={{ opacity: bringingDesignFade.opacity }}
                    className="relative z-30 flex flex-col w-full max-w-full items-start justify-center gap-6 transition-all duration-300"
                >
                    <span className="bg-[#191919] px-4 py-2 rounded-full text-left text-[16px] text-zinc-600 dark:text-zinc-400 mb-[2rem]">
                        EXECUÇÃO DIGITAL
                    </span>
                    <h1 className="text-center text-5xl text-zinc-600 dark:text-zinc-100 mb-[1rem]">
                        Bringing Ideas to Life.
                    </h1>
                    <p className="max-w-[30rem] text-left text-[16px] text-zinc-600 dark:text-zinc-400 mb-[3rem]">
                        Estratégia só tem valor quando se transforma em execução. Por isso, além da consultoria estratégica, 
    também desenvolvo websites, landing pages e sistemas digitais que materializam a presença e o posicionamento das marcas.
                    </p>

                    <p className="font-bold text-left text-[18px] text-zinc-600 dark:text-zinc-300 mb-[20px] opacity-90">
                        Formas de apoiar seu projeto...
                    </p>

                    <div className="grid grid-cols-2 max-w-7xl w-full gap-5">
                        {indexBringingDesign.map((item) => (
                            <div key={item.id} className="bg-[#161617] p-5 rounded-2xl">
                                <div className="flex flex-col lg:flex-row justify-between items-center gap-10 text-center lg:text-left w-full">
                                    <div className="flex flex-col">
                                        <h1 className="text-black dark:text-zinc-200 mb-5">
                                            {item.svg}
                                        </h1>

                                        <h1 className="max-w-xs text-[25px] font-normal text-black dark:text-zinc-200 mb-5">
                                            {item.title}
                                        </h1>

                                        <p className="max-w-[30rem] text-[16px] text-zinc-600 dark:text-zinc-400">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>

            <section
                className="flex container w-full max-w-full min-h-auto bg-[#0D0D0D] flex-col items-center justify-center py-[5rem] px-4 sm:px-6 md:px-[7rem] sm:items-start sm:justify-center"
            >
                <div
                    ref={endPageFade.ref}
                    style={{ opacity: endPageFade.opacity }}
                    className="relative z-30 flex flex-col w-full max-w-full items-start justify-center gap-6 transition-all duration-300"
                >
                    <div className="flex flex-row max-w-full w-full bg-[#161617] p-5 gap-10 rounded-2xl">
                        <div className="overflow-hidden rounded-2xl">
                            <Image
                                className="select-none pointer-events-none mb-5 rounded-2xl object-cover"
                                src="/AI2jb08Beyhgk5Jr943gg0Cn6As.avif"
                                alt="AI"
                                width={420}
                                height={500}
                                priority
                            />
                        </div>
                        <div className="flex flex-col items-start justify-center">
                            <h1 className="text-center text-5xl text-zinc-600 dark:text-zinc-100 mb-[1rem]">
                                Portfólio
                            </h1>
                            <p className="max-w-[30rem] text-left font-semibold text-[16px] text-zinc-600 dark:text-zinc-400 mb-[3rem]">
                                Explore como estratégia, tecnologia e posicionamento podem transformar a presença digital de um negócio.
                            </p>
                            <div className="flex items-center justify-center gap-5">
                                <a
                                    href={"/#work"}
                                    className="flex items-center justify-center gap-2 bg-white border border-solid border-black/[0.08] px-5 py-3 rounded-full hover:bg-black/[0.04] dark:border-white/[0.145] dark:hover:bg-white/80 transition-all duration-200"
                                >
                                    <span className="text-[16px] text-black font-medium">Ver trabalho</span>
                                </a>

                                <a
                                    href={
                                        "#form"
                                    }
                                    className="flex items-center justify-center gap-2 border border-solid border-black/[0.08] px-5 py-3 rounded-full hover:bg-black/[0.04] dark:border-white/[0.145] dark:hover:bg-[hsl(0,0%,13%)] transition-all duration-200"
                                >
                                    <span className="text-[16px] text-white">View Playbook</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <Footer />
        </div>
    );
}
