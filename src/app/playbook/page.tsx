"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { indexWhoAreOurUsers } from "../data/indexWhoAreOurUsers.data";
import { indexCurrentExperience } from "../data/indexCurrentExperience.data";
import { indexBetterFuture } from "../data/indexBetterFuture.data";
import { indexOurValueProposition } from "../data/indexOurValueProposition.data";
import { indexValueInReturn } from "../data/indexValueInReturn.data";
import { indexGreatJob } from "../data/indexGreatJob.data";
import { indexHavingTheExperience } from "../data/indexHavingTheExperience.data";
import { indexOutcome } from "../data/indexOutcome.data";
import useFadeOutOnScroll from "../hooks/useFadeOutOnScroll";

const ChevronDown = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
    </svg>
);

export default function RightChoice() {
    const [opacity, setOpacity] = useState(1);
    const whoAreOurUsersFade = useFadeOutOnScroll(4.0);
    const currentExperienceFade = useFadeOutOnScroll(4.0);
    const betterFutureFade = useFadeOutOnScroll(4.0);
    const ourValuePropositionFade = useFadeOutOnScroll(4.0);
    const valueInReturnFade = useFadeOutOnScroll(4.0);
    const greatJobFade = useFadeOutOnScroll(4.0);
    const havingTheExperienceFade = useFadeOutOnScroll(4.0);
    const outcomeFade = useFadeOutOnScroll(4.0);
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
                    <h1 className="max-w-full text-3xl md:text-6xl text-zinc-600 dark:text-zinc-400">
                        Onde a Estratégia<br /><span className="highlight-text">Encontra a Experiência.</span>
                    </h1>
                    <p className="max-w-[40rem] text-[14px] md:text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                        Vou ajudar você a criar clareza, reduzir riscos e responder perguntas estratégicas com confiança, fortalecendo tanto a experiência do usuário quanto os resultados do negócio.
                    </p>

                    <a
                        href={"#define"}
                        className="flex items-center justify-center gap-2 border border-solid border-black/[0.08] p-2 rounded-full hover:bg-black/[0.04] dark:border-white/[0.145] dark:hover:bg-[hsl(0,0%,13%)] group hover:translate-y-2 transition-all duration-200"
                    >
                        <span className="text-[14px] text-zinc-400 group-hover:text-white transition-all duration-100">{ChevronDown}</span>
                    </a>
                </div>
            </section>

            <section
                id="define"
                className="flex container w-full max-w-full min-h-[51rem] bg-[#0D0D0D] flex-col items-center justify-center py-[10rem] px-4 sm:px-6 md:px-[7rem] sm:items-start sm:justify-center"
            >
                <div
                    ref={whoAreOurUsersFade.ref}
                    style={{ opacity: whoAreOurUsersFade.opacity }}
                    className="relative z-30 flex flex-col w-full max-w-full items-start justify-center gap-6 transition-all duration-300"
                >
                    <span className="bg-[#191919] px-4 py-2 rounded-full text-left text-[16px] text-zinc-600 dark:text-zinc-400 mb-[2rem]">
                        DEFINE
                    </span>
                    <h1 className="text-center text-5xl text-zinc-600 dark:text-zinc-100 mb-[1rem]">
                        Quem são nossos usuários?
                    </h1>

                    <p className="font-bold text-left text-[18px] text-zinc-600 dark:text-zinc-300 mb-[20px] opacity-90">
                        Vou ajudar você a definir...
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl w-full gap-5 mb-[5rem]">
                        {indexWhoAreOurUsers.map((item) => (
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

                    <div className="flex items-center justify-center mx-auto">
                        <a
                            href={"#baseline"}
                            className="flex items-center justify-center gap-2 border border-solid border-black/[0.08] p-2 rounded-full hover:bg-black/[0.04] dark:border-white/[0.145] dark:hover:bg-[hsl(0,0%,13%)] group hover:translate-y-2 transition-all duration-200"
                        >
                            <span className="text-[14px] text-zinc-400 group-hover:text-white transition-all duration-100">{ChevronDown}</span>
                        </a>
                    </div>
                </div>

            </section>

            <section
                id="baseline"
                className="flex container w-full max-w-full min-h-[51rem] bg-[#0D0D0D] flex-col items-center justify-center py-[10rem] px-4 sm:px-6 md:px-[7rem] sm:items-start sm:justify-center"
            >
                <div
                    ref={currentExperienceFade.ref}
                    style={{ opacity: currentExperienceFade.opacity }}
                    className="relative z-30 flex flex-col w-full max-w-full items-start justify-center gap-6 transition-all duration-300"
                >
                    <span className="bg-[#191919] px-4 py-2 rounded-full text-left text-[16px] text-zinc-600 dark:text-zinc-400 mb-[2rem]">
                        BASELINE
                    </span>

                    <h1 className="text-left max-w-[40rem] text-5xl text-zinc-600 dark:text-zinc-100 mb-[1rem]">
                        O que sabemos sobre a experiência atual?
                    </h1>

                    <p className="font-bold text-left text-[18px] text-zinc-600 dark:text-zinc-300 mb-[20px] opacity-90">
                        Vou ajudar você a trazer clareza sobre...
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl w-full gap-5">
                        {indexCurrentExperience.map((item) => (
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

                    <div className="flex items-center justify-center mx-auto">
                        <a
                            href={"#direction"}
                            className="flex items-center justify-center gap-2 border border-solid border-black/[0.08] p-2 rounded-full hover:bg-black/[0.04] dark:border-white/[0.145] dark:hover:bg-[hsl(0,0%,13%)] group hover:translate-y-2 transition-all duration-200"
                        >
                            <span className="text-[14px] text-zinc-400 group-hover:text-white transition-all duration-100">{ChevronDown}</span>
                        </a>
                    </div>
                </div>

            </section>

            <section
                id="direction"
                className="flex container w-full max-w-full min-h-[51rem] bg-[#0D0D0D] flex-col items-center justify-center py-[10rem] px-4 sm:px-6 md:px-[7rem] sm:items-start sm:justify-center"
            >
                <div
                    ref={betterFutureFade.ref}
                    style={{ opacity: betterFutureFade.opacity }}
                    className="relative z-30 flex flex-col w-full max-w-full items-start justify-center gap-6 transition-all duration-300"
                >
                    <span className="bg-[#191919] px-4 py-2 rounded-full text-left text-[16px] text-zinc-600 dark:text-zinc-400 mb-[2rem]">
                        DIRECTION
                    </span>

                    <h1 className="text-left max-w-[35rem] text-5xl text-zinc-600 dark:text-zinc-100 mb-[1rem]">
                        Como poderia ser um futuro melhor?
                    </h1>

                    <p className="font-bold text-left text-[18px] text-zinc-600 dark:text-zinc-300 mb-[20px] opacity-90">
                        Vou trabalhar com você para identificar...
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl w-full gap-5">
                        {indexBetterFuture.map((item) => (
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

                    <div className="flex items-center justify-center mx-auto">
                        <a
                            href={"#value"}
                            className="flex items-center justify-center gap-2 border border-solid border-black/[0.08] p-2 rounded-full hover:bg-black/[0.04] dark:border-white/[0.145] dark:hover:bg-[hsl(0,0%,13%)] group hover:translate-y-2 transition-all duration-200"
                        >
                            <span className="text-[14px] text-zinc-400 group-hover:text-white transition-all duration-100">{ChevronDown}</span>
                        </a>
                    </div>
                </div>

            </section>

            <section
                id="value"
                className="flex container w-full max-w-full min-h-[51rem] bg-[#0D0D0D] flex-col items-center justify-center py-[10rem] px-4 sm:px-6 md:px-[7rem] sm:items-start sm:justify-center"
            >
                <div
                    ref={ourValuePropositionFade.ref}
                    style={{ opacity: ourValuePropositionFade.opacity }}
                    className="relative z-30 flex flex-col w-full max-w-full items-start justify-center gap-6 transition-all duration-300"
                >
                    <span className="bg-[#191919] px-4 py-2 rounded-full text-left text-[16px] text-zinc-600 dark:text-zinc-400 mb-[2rem]">
                        VALUE
                    </span>

                    <h1 className="text-left max-w-[40rem] text-5xl text-zinc-600 dark:text-zinc-100 mb-[1rem]">
                        Qual é a nossa proposta de valor para os usuários?
                    </h1>

                    <p className="font-bold text-left text-[18px] text-zinc-600 dark:text-zinc-300 mb-[20px] opacity-90">
                        Vou guiar você na descoberta de...
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl w-full gap-5">
                        {indexOurValueProposition.map((item) => (
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

                    <div className="flex items-center justify-center mx-auto">
                        <a
                            href={"#business"}
                            className="flex items-center justify-center gap-2 border border-solid border-black/[0.08] p-2 rounded-full hover:bg-black/[0.04] dark:border-white/[0.145] dark:hover:bg-[hsl(0,0%,13%)] group hover:translate-y-2 transition-all duration-200"
                        >
                            <span className="text-[14px] text-zinc-400 group-hover:text-white transition-all duration-100">{ChevronDown}</span>
                        </a>
                    </div>
                </div>

            </section>

            <section
                id="business"
                className="flex container w-full max-w-full min-h-[51rem] bg-[#0D0D0D] flex-col items-center justify-center py-[10rem] px-4 sm:px-6 md:px-[7rem] sm:items-start sm:justify-center"
            >
                <div
                    ref={valueInReturnFade.ref}
                    style={{ opacity: valueInReturnFade.opacity }}
                    className="relative z-30 flex flex-col w-full max-w-full items-start justify-center gap-6 transition-all duration-300"
                >
                    <span className="bg-[#191919] px-4 py-2 rounded-full text-left text-[16px] text-zinc-600 dark:text-zinc-400 mb-[2rem]">
                        BUSINESS
                    </span>

                    <h1 className="text-left max-w-[40rem] text-5xl text-zinc-600 dark:text-zinc-100 mb-[1rem]">
                        Como isso irá gerar valor para o negócio?
                    </h1>

                    <p className="font-bold text-left text-[18px] text-zinc-600 dark:text-zinc-300 mb-[20px] opacity-90">
                        Vou trabalhar com você para...
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl w-full gap-5">
                        {indexValueInReturn.map((item) => (
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

                    <div className="flex items-center justify-center mx-auto">
                        <a
                            href={"#outcome"}
                            className="flex items-center justify-center gap-2 border border-solid border-black/[0.08] p-2 rounded-full hover:bg-black/[0.04] dark:border-white/[0.145] dark:hover:bg-[hsl(0,0%,13%)] group hover:translate-y-2 transition-all duration-200"
                        >
                            <span className="text-[14px] text-zinc-400 group-hover:text-white transition-all duration-100">{ChevronDown}</span>
                        </a>
                    </div>
                </div>

            </section>

            <section
                id="outcome"
                className="flex container w-full max-w-full min-h-[51rem] bg-[#0D0D0D] flex-col items-center justify-center py-[10rem] px-4 sm:px-6 md:px-[7rem] sm:items-start sm:justify-center"
            >
                <div
                    ref={greatJobFade.ref}
                    style={{ opacity: greatJobFade.opacity }}
                    className="relative z-30 flex flex-col w-full max-w-full items-start justify-center gap-6 transition-all duration-300"
                >
                    <span className="bg-[#191919] px-4 py-2 rounded-full text-left text-[16px] text-zinc-600 dark:text-zinc-400 mb-[2rem]">
                        UX OUTCOME
                    </span>

                    <h1 className="text-left max-w-[40rem] text-5xl text-zinc-600 dark:text-zinc-100 mb-[1rem]">
                        Como vamos melhorar a vida dos usuários se fizermos um ótimo trabalho?
                    </h1>

                    <p className="font-bold text-left text-[18px] text-zinc-600 dark:text-zinc-300 mb-[20px] opacity-90">
                        Vou ajudar você a alcançar resultados que irão...
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl w-full gap-5">
                        {indexGreatJob.map((item) => (
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

                    <div className="flex items-center justify-center mx-auto">
                        <a
                            href={"#problem"}
                            className="flex items-center justify-center gap-2 border border-solid border-black/[0.08] p-2 rounded-full hover:bg-black/[0.04] dark:border-white/[0.145] dark:hover:bg-[hsl(0,0%,13%)] group hover:translate-y-2 transition-all duration-200"
                        >
                            <span className="text-[14px] text-zinc-400 group-hover:text-white transition-all duration-100">{ChevronDown}</span>
                        </a>
                    </div>
                </div>

            </section>

            <section
                id="problem"
                className="flex container w-full max-w-full min-h-[51rem] bg-[#0D0D0D] flex-col items-center justify-center py-[10rem] px-4 sm:px-6 md:px-[7rem] sm:items-start sm:justify-center"
            >
                <div
                    ref={havingTheExperienceFade.ref}
                    style={{ opacity: havingTheExperienceFade.opacity }}
                    className="relative z-30 flex flex-col w-full max-w-full items-start justify-center gap-6 transition-all duration-300"
                >
                    <span className="bg-[#191919] px-4 py-2 rounded-full text-left text-[16px] text-zinc-600 dark:text-zinc-400 mb-[2rem]">
                        PROBLEMS TO SOLVE
                    </span>

                    <h1 className="text-left max-w-[40rem] text-5xl text-zinc-600 dark:text-zinc-100 mb-[1rem]">
                        O que impede os usuários de terem a experiência que buscamos?
                    </h1>

                    <p className="font-bold text-left text-[18px] text-zinc-600 dark:text-zinc-300 mb-[20px] opacity-90">
                        Vou ajudar você a mapear...
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl w-full gap-5">
                        {indexHavingTheExperience.map((item) => (
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

                    <div className="flex items-center justify-center mx-auto">
                        <a
                            href={"#solutions"}
                            className="flex items-center justify-center gap-2 border border-solid border-black/[0.08] p-2 rounded-full hover:bg-black/[0.04] dark:border-white/[0.145] dark:hover:bg-[hsl(0,0%,13%)] group hover:translate-y-2 transition-all duration-200"
                        >
                            <span className="text-[14px] text-zinc-400 group-hover:text-white transition-all duration-100">{ChevronDown}</span>
                        </a>
                    </div>
                </div>

            </section>

            <section
                id="solutions"
                className="flex container w-full max-w-full min-h-[51rem] bg-[#0D0D0D] flex-col items-center justify-center py-[10rem] px-4 sm:px-6 md:px-[7rem] sm:items-start sm:justify-center"
            >
                <div
                    ref={outcomeFade.ref}
                    style={{ opacity: outcomeFade.opacity }}
                    className="relative z-30 flex flex-col w-full max-w-full items-start justify-center gap-6 transition-all duration-300"
                >
                    <span className="bg-[#191919] px-4 py-2 rounded-full text-left text-[16px] text-zinc-600 dark:text-zinc-400 mb-[2rem]">
                        SOLUTIONS
                    </span>

                    <h1 className="text-left max-w-[40rem] text-5xl text-zinc-600 dark:text-zinc-100 mb-[1rem]">
                        Qual solução vai nos ajudar a alcançar o resultado de experiência desejado?
                    </h1>

                    <p className="font-bold text-left text-[18px] text-zinc-600 dark:text-zinc-300 mb-[20px] opacity-90">
                        Vou ajudar você a criar experiências projetadas que irão...
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl w-full gap-5">
                        {indexOutcome.map((item) => (
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
                    <div className="flex flex-col md:flex-row max-w-full w-full bg-[#161617] p-5 gap-10 rounded-2xl">
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
                            <h1 className="text-left text-2xl md:text-center md:text-5xl text-zinc-600 dark:text-zinc-100 mb-[1rem]">
                                Portfólio
                            </h1>
                            <p className="max-w-[30rem] text-left font-semibold text-[16px] text-zinc-600 dark:text-zinc-400 mb-[3rem]">
                                Explore como minha experiência pode apoiar suas necessidades.
                            </p>
                            <div className="flex items-center justify-center gap-5">
                                <a
                                    href={"/right-choice"}
                                    className="flex items-center justify-center gap-2 bg-white border border-solid border-black/[0.08] px-5 py-3 rounded-full hover:bg-black/[0.04] dark:border-white/[0.145] dark:hover:bg-white/80 transition-all duration-200"
                                >
                                    <span className="text-[11px] md:text-[16px] text-black font-medium">Ver trabalho</span>
                                </a>

                                <a
                                    href={
                                        "/playbook#home"
                                    }
                                    className="flex items-center justify-center gap-2 border border-solid border-black/[0.08] px-5 py-3 rounded-full hover:bg-black/[0.04] dark:border-white/[0.145] dark:hover:bg-[hsl(0,0%,13%)] transition-all duration-200"
                                >
                                    <span className="text-[11px] md:text-[16px] text-white">Por que sou a escolha certa</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <Footer />
        </div>
    );
};