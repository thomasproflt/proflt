"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import useFadeOutOnScroll from "../hooks/useFadeOutOnScroll";
import { indexTheWayIWork } from "../data/indexTheWayIWork.data";
import { indexResumeContributed } from "../data/indexResumeContributed.data";
import { indexWorked } from "../data/indexWorked.data";
import { indexResumeWhereIComeFrom } from "../data/indexResumeWhereIComeFrom.data";
import ImgBrand from "@/public/brands/Subtract.png";
import ImgTablet from "@/public/recently-worked/aetheris-tablet.png";
import ImgPhone from "@/public/design-phone.png";
import CodeWorkspace from "../components/codeWorkspace";
import Brands from "../components/brands";

const ChevronDown = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
    </svg>
);

const PlusIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
    </svg>
);

export default function Resume() {
    const [opacity, setOpacity] = useState(1);
    const valuesFade = useFadeOutOnScroll(2.0);
    const contributedFade = useFadeOutOnScroll(2.0);
    const workedFade = useFadeOutOnScroll(2.0);
    const whereIComeFromFade = useFadeOutOnScroll(4.0);
    const selectedWorkFade = useFadeOutOnScroll(4.0);
    const endPageFade = useFadeOutOnScroll(2.0);

    const [openItem, setOpenItem] = useState<number | null>(null);

    const toggleItem = (id: number) => {
        setOpenItem(openItem === id ? null : id);
    };

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
                className="-z-10 flex min-h-screen bg-white w-full max-w-full items-center justify-center" /**sticky top-0 #0D0D0D  */
            >
                <div
                    style={{
                        opacity,
                        transform: `translateY(${(1 - opacity) * 80}px)`
                    }}
                    className="relative z-30 flex flex-col items-center justify-center gap-6 text-center py-30 transition-all duration-300"
                >
                    <Image
                        className="dark:invert select-none pointer-events-none mb-5"
                        src="/favicon.svg"
                        alt="AI"
                        width={100}
                        height={10}
                        priority
                    />
                    <h1 className="max-w-[60rem] text-5xl text-zinc-600 dark:text-zinc-500">
                        Trago uma <span className="highlight-text-black">abordagem centrada no ser humano</span> para o <span className="highlight-text-black">crescimento de produtos</span> e <span className="highlight-text-black">para melhorar a vida das pessoas.</span>
                    </h1>
                    <p className="max-w-full font-semibold text-lg leading-8 text-zinc-600 dark:text-zinc-600">
                        Conectando necessidades humanas aos resultados de negócios.
                    </p>
                    <div className="flex items-center justify-center gap-5">
                        <a
                            href={"/"}
                            target="_blank"
                            rel="noopener nooreferrer"
                            className="flex items-center justify-center gap-2 bg-black px-5 py-3 rounded-full group transition-all duration-200"
                        >
                            <span className="text-[16px] text-white font-medium group-hover:opacity-60 transition-all duration-500">Baixar currículo</span>
                        </a>

                        <a
                            href={
                                "#the-way-i-work"
                            }
                            className="flex items-center justify-center gap-2 border border-solid border-black/[0.08] px-5 py-3 rounded-full dark:border-black/[0.145] group transition-all duration-200"
                        >
                            <span className="text-[16px] text-black group-hover:opacity-60 transition-all duration-500">Como eu trabalho</span>
                        </a>
                    </div>

                    <a
                        href={"#the-way-i-work"}
                        className="flex items-center justify-center gap-2 border border-solid border-zinc-200 p-2 rounded-full hover:bg-black/[0.04] dark:border-zinc-950/15 dark:hover:bg-zinc-950/15 group hover:translate-y-2 transition-all duration-200"
                    >
                        <span className="text-[14px] text-black transition-all duration-100">{ChevronDown}</span>
                    </a>
                </div>
            </section>

            <section
                id="the-way-i-work"
                className="flex container w-full max-w-full min-h-[0rem] bg-white flex-col items-center justify-center py-[10rem] px-4 sm:px-6 md:px-[7rem] sm:items-start sm:justify-center"
            >
                <div
                    ref={valuesFade.ref}
                    style={{ opacity: valuesFade.opacity }}
                    className="relative z-30 flex flex-col w-full max-w-full items-start justify-center gap-6 transition-all duration-300"
                >
                    <div className="relative z-20 flex flex-col gap-6 py-0 mb-10">
                        <h1 className="text-left max-w-[35rem] text-4xl text-zinc-600 dark:text-zinc-500">
                            Como <span className="highlight-text-black">eu trabalho.</span>
                        </h1>
                    </div>
                    <div className="flex flex-row gap-10">
                        {indexTheWayIWork.map((item) => (
                            <div key={item.id} className="bg-zinc-100 p-5 rounded-2xl">
                                <div className="flex flex-col lg:flex-row justify-between items-center gap-10 text-center lg:text-left w-full">
                                    <div className="flex flex-col">
                                        <h1 className="max-w-xs text-[25px] font-normal text-black dark:text-black mb-2">
                                            {item.title}
                                        </h1>

                                        <p className="max-w-[20rem] font-semibold text-[16px] text-zinc-600 dark:text-zinc-600">
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
                className="flex container w-full max-w-full min-h-[0rem] bg-white flex-col items-center justify-center py-[0rem] px-4 sm:px-6 md:px-[7rem] sm:items-start sm:justify-center mb-[10rem]"
            >
                <div
                    ref={workedFade.ref}
                    style={{ opacity: workedFade.opacity }}
                    className="relative z-30 flex flex-col w-full max-w-full items-start justify-center gap-6 transition-all duration-300"
                >
                    <div className="relative z-20 flex flex-col gap-6 py-0 mb-10">
                        <h1 className="text-left max-w-[35rem] text-4xl text-zinc-600 dark:text-zinc-500">
                            Trabalhei com <span className="highlight-text-black">design em diversos setores</span> e áreas de atuação.
                        </h1>
                    </div>

                    <div className="flex flex-row gap-10">
                        {indexWorked.map((item) => (
                            <div key={item.id} className="bg-zinc-100 p-5 rounded-2xl">
                                <div className="flex flex-col lg:flex-row justify-between items-center gap-10 text-center lg:text-left w-full">
                                    <div className="flex flex-col">
                                        <p className="max-w-[20rem] text-[18px] text-zinc-600 dark:text-zinc-500">
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
                className="flex container w-full max-w-full min-h-[0rem] bg-white flex-col items-center justify-center py-[0rem] px-4 sm:px-6 md:px-[7rem] sm:items-start sm:justify-center mb-[10rem]"
            >
                <div
                    ref={contributedFade.ref}
                    style={{ opacity: contributedFade.opacity }}
                    className="relative z-30 flex flex-col w-full max-w-full items-start justify-center gap-6 transition-all duration-300"
                >
                    <div className="relative z-20 flex flex-col gap-6 py-0 mb-10">
                        <h1 className="text-left max-w-[35rem] text-4xl text-zinc-600 dark:text-zinc-500">
                            Contribuí como <span className="highlight-text-black">designer prático</span> e <span className="highlight-text-black">líder de design</span> para:
                        </h1>
                    </div>

                    <div className="grid grid-cols-2 w-full max-w-full gap-10 items-start">
                        {indexResumeContributed.map((item) => {
                            const isOpen = openItem === item.id;

                            return (
                                <div key={item.id} className="bg-zinc-100 p-5 rounded-2xl">
                                    <div className="flex flex-col w-full">

                                        <div className="flex justify-between items-start w-full">

                                            <div className="flex flex-col">
                                                <h1 className="text-3xl text-zinc-600 dark:text-black">
                                                    {item.title}
                                                </h1>

                                                <span className="text-[18px] text-zinc-600 font-semibold">
                                                    {item.tag}
                                                </span>

                                                <span className="text-[18px] text-zinc-500">
                                                    {item.date}
                                                </span>
                                            </div>

                                            <button
                                                onClick={() => toggleItem(item.id)}
                                                className={`p-2 rounded-full hover:bg-zinc-200 transition-transform duration-300 ${isOpen ? "rotate-45" : ""
                                                    }`}
                                            >
                                                {PlusIcon}
                                            </button>

                                        </div>
                                        <div
                                            className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${isOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
                                                }`}
                                        >
                                            <p className="font-semibold max-w-[35rem] text-[18px] text-zinc-600">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </section>

            <section
                className="flex container w-full max-w-full min-h-[0rem] bg-white flex-col items-center justify-center py-[0rem] px-4 sm:px-6 md:px-[7rem] sm:items-start sm:justify-center mb-[10rem]"
            >
                <div
                    ref={whereIComeFromFade.ref}
                    style={{ opacity: whereIComeFromFade.opacity }}
                    className="relative z-30 flex flex-col w-full max-w-full items-center justify-center gap-6 transition-all duration-300"
                >
                    <div className="relative z-20 flex flex-col gap-6 py-0 mb-10 items-center justify-center">
                        <h1 className="text-center max-w-[35rem] text-4xl text-zinc-600 dark:text-black">
                            De onde eu venho.
                        </h1>

                        <p className="text-center max-w-[45rem] font-semibold text-[18px] text-zinc-600 dark:text-zinc-700">
                            Nascido e criado em Gotland, na Suécia, aprendi desde cedo o valor da adaptabilidade e da colaboração. Esses princípios ainda guiam minha forma de trabalhar: ouvir ativamente, fazer as perguntas certas e ajudar outras pessoas a alcançarem sucesso. Baseado em Estocolmo durante a maior parte da minha carreira, também trabalhei de perto com equipes em Oslo, Londres, Tel Aviv, Nova York, San Jose e Kuala Lumpur.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 w-full max-w-full gap-10">
                        {indexResumeWhereIComeFrom.map((item) => (
                            <div key={item.id} className="bg-zinc-100 p-5 rounded-2xl">
                                <div className="flex flex-col lg:flex-row justify-between items-center gap-10 text-center lg:text-left w-full">
                                    <div className="flex flex-col">
                                        <h1 className="max-w-[20rem] text-3xl text-zinc-600 dark:text-black mb-[1rem]">
                                            {item.title}
                                        </h1>

                                        <p className="max-w-[35rem] font-medium text-[18px] text-zinc-600 dark:text-zinc-600">
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
                                Explore como minha experiência pode apoiar suas necessidades.
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
                                        "/right-choice"
                                    }
                                    className="flex items-center justify-center gap-2 border border-solid border-black/[0.08] px-5 py-3 rounded-full hover:bg-black/[0.04] dark:border-white/[0.145] dark:hover:bg-[hsl(0,0%,13%)] transition-all duration-200"
                                >
                                    <span className="text-[16px] text-white">Por que sou a escolha certa</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <Footer />
            <section
                className="flex relative container w-full max-w-full min-h-[0rem]"
            >
                <Brands />
            </section>
        </div>
    );
};