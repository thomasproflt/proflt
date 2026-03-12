"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import useFadeOutOnScroll from "../hooks/useFadeOutOnScroll";
import Brands from "../components/brands";

const ChevronDown = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
    </svg>
);

export default function Contact() {
    const [opacity, setOpacity] = useState(1);
    const formFade = useFadeOutOnScroll(2.0);
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
                    <h1 className="max-w-[30rem] text-3xl md:text-6xl text-zinc-600 dark:text-zinc-400">
                        Vamos nos conectar.
                    </h1>
                    <p className="max-w-[35rem] text-[14px] md:text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                        Será um prazer ouvir você. Seja para colaborar, discutir novas oportunidades ou iniciar a construção da sua marca e presença digital.
                    </p>
                    <div className="flex items-center justify-center gap-5">
                        <a
                            href={
                                "https://wa.me/5566996399303?text=Ol%C3%A1%2C%20olhei%20seu%20portf%C3%B3lio%20e%20notei%20um%20grande%20valor!"
                            }
                            target="_blank"
                            rel="noopener nooreferrer"
                            className="flex items-center justify-center gap-2 bg-white border border-solid border-black/[0.08] px-5 py-3 rounded-full hover:bg-black/[0.04] dark:border-white/[0.145] dark:hover:bg-white/80 transition-all duration-200"
                        >
                            <span className="text-[14px] md:text-[16px] text-black font-medium">Conversar no WhatsApp</span>
                        </a>

                        <a
                            href={
                                "#form"
                            }
                            className="flex items-center justify-center gap-2 border border-solid border-black/[0.08] px-5 py-3 rounded-full hover:bg-black/[0.04] dark:border-white/[0.145] dark:hover:bg-[hsl(0,0%,13%)] transition-all duration-200"
                        >
                            <span className="text-[14px] md:text-[16px] text-white">Enviar mensagem</span>
                        </a>
                    </div>

                    <a
                        href={"#form"}
                        className="flex items-center justify-center gap-2 border border-solid border-black/[0.08] p-2 rounded-full hover:bg-black/[0.04] dark:border-white/[0.145] dark:hover:bg-[hsl(0,0%,13%)] group hover:translate-y-2 transition-all duration-200"
                    >
                        <span className="text-[14px] text-zinc-400 group-hover:text-white transition-all duration-100">{ChevronDown}</span>
                    </a>
                </div>
            </section>

            <section
                id="form"
                className="flex container w-full max-w-full min-h-[51rem] bg-[#0D0D0D] flex-col items-center justify-center py-[10rem] px-4 sm:px-6 md:px-[7rem] sm:items-center sm:justify-center"
            >
                <div
                    ref={formFade.ref}
                    style={{ opacity: formFade.opacity }}
                    className="relative z-20 flex flex-col items-center justify-center gap-6 py-0 mb-10"
                >
                    <h1 className="text-center text-4xl text-zinc-600 dark:text-zinc-500">
                        Enviar mensagem
                    </h1>
                </div>

                <div className="w-full max-w-lg max-md:mx-auto backdrop-blur-sm border border-white/10 rounded-xl p-8">

                    <form className="space-y-6">

                        <div>
                            <label className="block text-white text-sm mb-2">Nome</label>

                            <input
                                type="text"
                                required
                                placeholder="Eden Johnson"
                                className="w-full bg-[#00A63E]/5 border border-white/20 rounded-lg px-4 py-3 text-white/40 placeholder:text-white/40 placeholder:text-sm focus:outline-none focus:border-green-600 transition"
                            />
                        </div>

                        <div>
                            <label className="block text-white text-sm mb-2">Email</label>

                            <input
                                type="email"
                                required
                                placeholder="Eden@example.com"
                                className="w-full bg-[#00A63E]/5 border border-white/20 rounded-lg px-4 py-3 text-white/40 placeholder:text-white/40 placeholder:text-sm focus:outline-none focus:border-green-600 transition"
                            />
                        </div>

                        <div>
                            <label className="block text-white text-sm mb-2">Mensagem</label>

                            <textarea
                                rows={4}
                                required
                                placeholder="Escreva sua mensagem aqui..."
                                className="w-full bg-[#00A63E]/5 border border-white/20 rounded-lg px-4 py-3 text-white/40 placeholder:text-white/40 placeholder:text-sm focus:outline-none focus:border-green-600 transition resize-none"
                            />
                        </div>

                        <div className="flex items-center justify-between gap-6">

                            {/**<p className="text-xs md:text-sm text-white/60 max-w-[200px]">
                                    Ao enviar, você concorda com nossos <span className="text-white">Termos</span> e <span className="text-white">Política de Privacidade</span>.
                                </p> */}

                            <button
                                type="submit"
                                className="bg-gradient-to-r from-green-950 to-green-600 hover:from-green-600 hover:to-green-950 text-white text-sm px-8 md:px-16 py-3 rounded-full transition duration-300"
                            >
                                Enviar
                            </button>

                        </div>

                    </form>

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
}
