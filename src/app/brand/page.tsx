"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import useFadeOutOnScroll from "../hooks/useFadeOutOnScroll";
import { indexBrandHelp } from "../data/indexBrandHelp.data";
import { indexContributed } from "../data/indexContributed.data";
import { indexWorked } from "../data/indexWorked.data";
import ImgBrand from "@/public/brands/Subtract.png";
import ImgTablet from "@/public/recently-worked/aetheris-tablet.png";
import ImgPhone from "@/public/design-phone.png";
import Brands from "../components/brands";
import { motion } from "framer-motion";

const ChevronDown = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
    </svg>
);

const textLeft = {
    hidden: {
        opacity: 0,
        x: -80
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const textRight = {
    hidden: {
        opacity: 0,
        x: 80
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const catalogContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

const catalogItem = {
    hidden: {
        opacity: 0,
        y: 40
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

export default function Brand() {
    const [opacity, setOpacity] = useState(1);
    const brandHelpFade = useFadeOutOnScroll(2.0);
    const contributedFade = useFadeOutOnScroll(2.0);
    const workedFade = useFadeOutOnScroll(2.0);
    const recentlyWorkedFade = useFadeOutOnScroll(2.0);
    const selectedWorkFade = useFadeOutOnScroll(4.0);
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
                    <div className="bg-transparent w-[7rem] h-[4rem]">
                        <Image
                            className="w-full h-full object-cover pointer-events-none select-none"
                            src="/brands/Subtract.png"
                            alt="person"
                            width={600}
                            height={600}
                            priority
                        />
                    </div>
                    <motion.h1
                        variants={textLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-[40rem] text-4xl text-zinc-600 dark:text-zinc-400"
                    >
                        Aetheris AE, <span className="highlight-text">construindo a infraestrutura digital</span> de negócios modernos.
                    </motion.h1>

                    <motion.p
                        variants={textRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-[40rem] text-lg leading-8 text-zinc-600 dark:text-zinc-400"
                    >
                        Arquitetando websites, landing pages e sistemas digitais projetados para posicionar empresas e acelerar resultados.
                    </motion.p>
                    <a
                        href={
                            "https://wa.me/5566996399303?text=Ol%C3%A1%2C%20olhei%20seu%20portf%C3%B3lio%20e%20notei%20um%20grande%20valor!"
                        }
                        target="_blank"
                        rel="noopener nooreferrer"
                        className="flex items-center justify-center gap-2 border border-solid border-black/[0.08] px-5 py-2 rounded-2xl hover:bg-black/[0.04] dark:border-white/[0.145] dark:hover:bg-[hsl(0,0%,13%)] transition-all duration-200"
                    >
                        <span className="text-[14px] text-white">Conectar</span>
                    </a>

                    <a
                        href={"#brand-help"}
                        className="flex items-center justify-center gap-2 border border-solid border-black/[0.08] p-2 rounded-full hover:bg-black/[0.04] dark:border-white/[0.145] dark:hover:bg-[hsl(0,0%,13%)] group hover:translate-y-2 transition-all duration-200"
                    >
                        <span className="text-[14px] text-zinc-400 group-hover:text-white transition-all duration-100">{ChevronDown}</span>
                    </a>
                </div>
            </section>

            <section
                id="brand-help"
                className="flex container w-full max-w-full min-h-[0rem] bg-white flex-col items-center justify-center py-[10rem] px-4 sm:px-6 md:px-[7rem] sm:items-start sm:justify-center"
            >
                <div
                    ref={brandHelpFade.ref}
                    style={{ opacity: brandHelpFade.opacity }}
                    className="relative z-30 flex flex-col w-full max-w-full items-start justify-center gap-6 transition-all duration-300"
                >
                    <div className="relative z-20 flex flex-col gap-6 py-0 mb-10">
                        <motion.h1
                            variants={textLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-left max-w-[40rem] text-4xl text-zinc-600 dark:text-zinc-500"
                        >
                            Ajudamos empresas a <span className="highlight-text-black">resolver problemas digitais</span> e <span className="highlight-text-black">criar soluções web</span> que realmente geram resultados.
                        </motion.h1>
                    </div>

                    <motion.div
                        variants={catalogContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-row gap-10"
                    >
                        {indexBrandHelp.map((item) => (
                            <motion.div
                                key={item.id}
                                variants={catalogItem}
                                className="bg-zinc-100 p-5 rounded-2xl"
                            >
                                <div className="flex flex-col lg:flex-row justify-between items-center gap-10 text-center lg:text-left w-full">
                                    <div className="flex flex-col">
                                        <h1 className="max-w-xs text-[25px] font-normal text-black dark:text-black mb-2">
                                            {item.title}
                                        </h1>

                                        <p className="max-w-[20rem] text-[16px] text-zinc-600 dark:text-zinc-400">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </section>

            <section className="flex container w-full max-w-full min-h-auto bg-[#0D0D0D] flex-col items-center justify-center py-[5rem] px-4 sm:px-6 md:px-[7rem] sm:items-start sm:justify-center">
                <div className="relative z-30 flex flex-col w-full max-w-full items-start justify-center gap-6 transition-all duration-300">
                    <div className="flex flex-row max-w-full w-full bg-[#161617] p-5 gap-10 rounded-2xl">
                        <div className="overflow-hidden rounded-2xl">
                            <Image
                                className="select-none pointer-events-none mb-5 rounded-2xl object-cover"
                                src="/AI2jb02.png"
                                alt="AI"
                                width={420}
                                height={500}
                                priority
                            />
                        </div>
                        <div className="flex flex-col items-start justify-center">
                            <h1 className="text-center text-5xl text-zinc-600 dark:text-zinc-100 mb-[1rem]">
                                O que eu trago
                            </h1>
                            <p className="max-w-[30rem] text-left font-semibold text-[16px] text-zinc-600 dark:text-zinc-400 mb-[3rem]">
                                Veja como minha experiência e abordagem se alinham às suas necessidades.
                            </p>
                            <div className="flex items-center justify-center gap-5">
                                <a
                                    href={"/right-choice"}
                                    className="flex items-center justify-center gap-2 bg-white border border-solid border-black/[0.08] px-5 py-3 rounded-full hover:bg-black/[0.04] dark:border-white/[0.145] dark:hover:bg-white/80 transition-all duration-200"
                                >
                                    <span className="text-[16px] text-black font-medium">Por que sou a escolha certa</span>
                                </a>

                                <a
                                    href={
                                        "/playbook#home"
                                    }
                                    className="flex items-center justify-center gap-2 border border-solid border-black/[0.08] px-5 py-3 rounded-full hover:bg-black/[0.04] dark:border-white/[0.145] dark:hover:bg-[hsl(0,0%,13%)] transition-all duration-200"
                                >
                                    <span className="text-[16px] text-white">Ver Playbook</span>
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