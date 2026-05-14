"use client";

import { useEffect, useState } from "react";
import { motion, Variants, easeOut } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Notification from "../components/notification";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const ChevronDown = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
    </svg>
);

const textLeft: Variants = {
    hidden: {
        opacity: 0,
        x: -80
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: easeOut
        }
    }
};

const textRight: Variants = {
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

export default function Contact() {
    const [opacity, setOpacity] = useState(1);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);

    const [loading, setLoading] = useState(false);

    const [notification, setNotification] = useState({
        show: false,
        type: "success" as "success" | "error",
        message: ""
    });

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

    const handleSubmit = async (
        e: React.FormEvent
    ) => {

        e.preventDefault();

        if (!captchaToken) {
            setNotification({
                show: true,
                type: "error",
                message: "Confirme o captcha."
            });

            setTimeout(() => {
                setNotification((prev) => ({
                    ...prev,
                    show: false
                }));
            }, 4000);

            return;
        }

        try {

            setLoading(true);

            await emailjs.send(

                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,

                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,

                {
                    name,
                    email,
                    message,
                    "g-recaptcha-response": captchaToken
                },

                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            setNotification({
                show: true,
                type: "success",
                message: "Mensagem enviada com sucesso."
            });

            setTimeout(() => {
                setNotification((prev) => ({
                    ...prev,
                    show: false
                }));
            }, 4000);

            setName("");
            setEmail("");
            setMessage("");

        } catch (err) {

            console.error(err);

            setNotification({
                show: true,
                type: "error",
                message: "Erro ao enviar mensagem."
            });

            setTimeout(() => {
                setNotification((prev) => ({
                    ...prev,
                    show: false
                }));
            }, 4000);

        } finally {

            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen items-center justify-start font-sans">
            <Navbar />
            <Notification show={notification.show} type={notification.type} message={notification.message} />

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
                    <motion.h1
                        variants={textLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-[30rem] text-3xl md:text-6xl text-zinc-600 dark:text-zinc-400"
                    >
                        Vamos nos conectar.
                    </motion.h1>
                    <motion.p
                        variants={textRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-[35rem] text-[14px] md:text-lg leading-8 text-zinc-600 dark:text-zinc-400"
                    >
                        Será um prazer ouvir você. Seja para colaborar, discutir novas oportunidades ou iniciar a construção da sua marca e presença digital.
                    </motion.p>
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
                <div className="relative z-20 flex flex-col items-center justify-center gap-6 py-0 mb-10">
                    <motion.h1
                        variants={textLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center text-4xl text-zinc-600 dark:text-zinc-500"
                    >
                        Enviar mensagem
                    </motion.h1>
                </div>

                <div className="w-full max-w-lg max-md:mx-auto backdrop-blur-sm border border-white/10 rounded-xl p-8">

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >

                        <div>
                            <label className="block text-white text-sm mb-2">Nome</label>

                            <input
                                type="text"
                                required
                                value={name}
                                onChange={(e) =>
                                    setName(e.target.value)
                                }
                                placeholder="Seu nome"
                                className="w-full bg-[#00A63E]/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 placeholder:text-sm focus:outline-none focus:border-green-600 transition"
                            />
                        </div>

                        <div>
                            <label className="block text-white text-sm mb-2">Email</label>

                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                placeholder="Seu email"
                                className="w-full bg-[#00A63E]/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 placeholder:text-sm focus:outline-none focus:border-green-600 transition"
                            />
                        </div>

                        <div>
                            <label className="block text-white text-sm mb-2">Mensagem</label>

                            <textarea
                                rows={4}
                                required
                                value={message}
                                onChange={(e) =>
                                    setMessage(e.target.value)
                                }
                                placeholder="Escreva sua mensagem..."
                                className="w-full bg-[#00A63E]/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 placeholder:text-sm focus:outline-none focus:border-green-600 transition resize-none"
                            />
                        </div>

                        <div className="flex flex-col items-center justify-between gap-6">

                            <p className="text-center text-xs md:text-sm text-white/60 max-w-[400px]">
                                Vamos transformar sua ideia em uma experiência digital única.
                            </p>

                            <ReCAPTCHA
                                sitekey={
                                    process.env
                                        .NEXT_PUBLIC_RECAPTCHA_SITE_KEY!
                                }
                                onChange={(token) =>
                                    setCaptchaToken(token)
                                }
                            />

                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-gradient-to-r from-green-950 to-green-600 hover:from-green-600 hover:to-green-950 text-white text-sm px-8 md:px-16 py-3 rounded-full transition duration-300"
                            >
                                {loading
                                    ? "Enviando..."
                                    : "Enviar"}
                            </button>
                        </div>

                    </form>

                </div>
            </section>

            <section
                className="flex container w-full max-w-full min-h-auto bg-[#0D0D0D] flex-col items-center justify-center py-[5rem] px-4 sm:px-6 md:px-[7rem] sm:items-start sm:justify-center"
            >
                <div className="relative z-30 flex flex-col w-full max-w-full items-start justify-center gap-6 transition-all duration-300">
                    <div className="flex flex-col md:flex-row max-w-full w-full bg-[#161617] p-5 gap-10 rounded-2xl">
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
