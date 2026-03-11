"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import useFadeOutOnScroll from "./hooks/useFadeOutOnScroll";
import { indexValues } from "./data/indexValues.data";
import { indexContributed } from "./data/indexContributed.data";
import { indexWorked } from "./data/indexWorked.data";
import ImgBrand from "@/public/brands/Subtract.png";
import ImgTablet from "@/public/recently-worked/aetheris-tablet.png";
import ImgPhone from "@/public/design-phone.png";
import Brands from "./components/brands";

const ChevronDown = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
  </svg>
);

export default function Home() {
  const [opacity, setOpacity] = useState(1);
  const valuesFade = useFadeOutOnScroll(2.0);
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
          <div className="overflow-hidden rounded-full bg-transparent w-20 h-20">
            <Image
              className="w-full h-full object-cover pointer-events-none select-none"
              src="/person.jpg"
              alt="person"
              width={600}
              height={600}
              priority
            />
          </div>
          <h1 className="max-w-[35rem] text-4xl text-zinc-600 dark:text-zinc-400">
            Eu sou Thomas, <span className="highlight-text">acelerando seu negócio</span> ao melhorar vidas.
          </h1>
          <p className="max-w-full text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Liderar a estratégia de experiência do usuário, da concepção ao produto final.
          </p>
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
            href={"#values"}
            className="flex items-center justify-center gap-2 border border-solid border-black/[0.08] p-2 rounded-full hover:bg-black/[0.04] dark:border-white/[0.145] dark:hover:bg-[hsl(0,0%,13%)] group hover:translate-y-2 transition-all duration-200"
          >
            <span className="text-[14px] text-zinc-400 group-hover:text-white transition-all duration-100">{ChevronDown}</span>
          </a>
        </div>
      </section>

      <section
        className="flex relative container w-full max-w-full min-h-[0rem]"
      >
        <Brands />
      </section>

      <section
        id="values"
        className="flex container w-full max-w-full min-h-[0rem] bg-white flex-col items-center justify-center py-[10rem] px-4 sm:px-6 md:px-[7rem] sm:items-start sm:justify-center"
      >
        <div
          ref={valuesFade.ref}
          style={{ opacity: valuesFade.opacity }}
          className="relative z-30 flex flex-col w-full max-w-full items-start justify-center gap-6 transition-all duration-300"
        >
          <div className="relative z-20 flex flex-col gap-6 py-0 mb-10">
            <h1 className="text-left max-w-[35rem] text-4xl text-zinc-600 dark:text-zinc-500">
              Eu ajudo você a <span className="highlight-text-black">estruturar seu negócio digital</span> e <span className="highlight-text-black">construir resultados</span> que realmente importam.
            </h1>
          </div>
          <div className="flex flex-row gap-10">
            {indexValues.map((item) => (
              <div key={item.id} className="bg-zinc-100 p-5 rounded-2xl">
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
              </div>
            ))}
          </div>
        </div>

      </section>

      <section
        id="values"
        className="flex container w-full max-w-full min-h-[0rem] bg-gradient-to-t from-[#0D0D0D] to-[#0F1D25] flex-col items-center justify-center py-[10rem] px-4 sm:px-6 md:px-[7rem] sm:items-start sm:justify-center"
      >
        <div
          ref={contributedFade.ref}
          style={{ opacity: contributedFade.opacity }}
          className="relative z-30 flex flex-col w-full max-w-full items-start justify-center gap-6 transition-all duration-300"
        >
          <div className="relative z-20 flex flex-col gap-6 py-0 mb-10">
            <h1 className="text-left max-w-[35rem] text-4xl text-zinc-600 dark:text-zinc-500">
              Atuo como <span className="highlight-text">consultor estratégico</span> e <span className="highlight-text">desenvolvedor de soluções digitais</span> para:
            </h1>
          </div>
          <div className="grid grid-cols-2 max-w-7xl w-full gap-10">
            {indexContributed.map((item) => (
              <div key={item.id} className="bg-[#0D0D0D] p-5 rounded-2xl hover:bg-[#121111] transition-all duration-150 cursor-pointer">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-10 text-center lg:text-left w-full">
                  <div className="flex flex-col">
                    <h1 className="max-w-xs text-[25px] font-normal text-black dark:text-zinc-200 mb-5">
                      {item.title}
                    </h1>

                    <span className="font-semibold max-w-[20rem] text-[16px] text-zinc-600 dark:text-zinc-200">
                      {item.tag}
                    </span>

                    <p className="max-w-[20rem] text-[16px] text-zinc-600 dark:text-zinc-400">
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
        id="values"
        className="flex container w-full max-w-full min-h-[0rem] bg-white flex-col items-center justify-center py-[10rem] px-4 sm:px-6 md:px-[7rem] sm:items-start sm:justify-center"
      >
        <div
          ref={workedFade.ref}
          style={{ opacity: workedFade.opacity }}
          className="relative z-30 flex flex-col w-full max-w-full items-start justify-center gap-6 transition-all duration-300"
        >
          <div className="relative z-20 flex flex-col gap-6 py-0 mb-10">
            <h1 className="text-left max-w-[35rem] text-4xl text-zinc-600 dark:text-zinc-500">
              Já trabalhei com <span className="highlight-text-black">estratégia digital e desenvolvimento</span> em diferentes tipos de negócios e segmentos.
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
        id="values"
        className="flex container w-full max-w-full min-h-[0rem] bg-[#0D0D0D] flex-col items-center justify-center py-[10rem] px-4 sm:px-6 md:px-[7rem] sm:items-start sm:justify-center"
      >
        <div
          ref={recentlyWorkedFade.ref}
          style={{ opacity: recentlyWorkedFade.opacity }}
          className="relative z-30 flex flex-col w-full max-w-full items-start justify-center gap-6 transition-all duration-300"
        >
          <div className="relative z-20 flex flex-row max-w-9xl w-full justify-between gap-0 py-0 mb-10">
            <div className="flex flex-col">
              <h1 className="text-left max-w-[35rem] text-4xl text-zinc-600 dark:text-zinc-500 mb-[4rem]">
                Recentemente trabalhei no desenvolvimento da <span className="highlight-text">Aetheris AE</span>, criando <span className="highlight-text">estrutura digital</span> e <span className="highlight-text">arquitetura de produtos.</span>
              </h1>

              <Image
                className="select-none pointer-events-none mb-[2rem]"
                src={ImgBrand}
                alt="AI"
                width={40}
                height={10}
                priority
              />

              <span className="font-semibold text-left max-w-[35rem] text-[18px] text-zinc-600 dark:text-zinc-200 mb-1">
                Digital Strategy & Web Development
              </span>
              <p className="text-left max-w-[35rem] font-medium text-[16px] text-zinc-600 dark:text-zinc-400 mb-5">
                Na Aetheris AE, estou estruturando a presença digital da marca, desenvolvendo websites, landing pages e sistemas que transformam posicionamento estratégico em plataformas digitais reais.
              </p>
            </div>

            <div className="absolute -right-60">
              <Image
                className="select-none pointer-events-none mb-[2rem]"
                src={ImgTablet}
                alt="AI"
                width={600}
                height={400}
                priority
              />
            </div>
          </div>
        </div>

      </section>

      <section
        id="work"
        className="flex container w-full max-w-full min-h-[0rem] bg-white flex-col items-center justify-center py-[4rem] px-4 sm:px-6 md:px-[7rem] sm:items-start sm:justify-center"
      >
        <div
          ref={selectedWorkFade.ref}
          style={{ opacity: selectedWorkFade.opacity }}
          className="relative z-30 flex flex-col w-full max-w-full items-start justify-center gap-6 transition-all duration-300"
        >
          <div className="relative z-20 flex flex-col max-w-9xl w-full gap-0 py-0 mb-10">
            <h1 className="text-left max-w-[35rem] text-4xl text-zinc-600 dark:text-zinc-500 mb-[4rem]">
              <span className="highlight-text-black">Projetos selecionados</span> que tornam <span className="highlight-text-black">negócios mais fortes</span> e <span className="highlight-text-black">presenças digitais mais profissionais.</span>
            </h1>

            <div className="flex flex-col items-center justify-center">
              <Image
                className="select-none pointer-events-none mb-[3rem] -rotate-12"
                src={ImgPhone}
                alt="AI"
                width={240}
                height={240}
                priority
              />

              <Image
                className="dark:invert select-none pointer-events-none mb-[1rem]"
                src={ImgBrand}
                alt="AI"
                width={30}
                height={10}
                priority
              />
              <span className="font-semibold text-center max-w-[35rem] text-[18px] text-zinc-600 dark:text-zinc-600 mb-1">
                Arquiteto de Presença Digital
              </span>
              <p className="text-center max-w-[40rem] font-medium text-[16px] text-zinc-600 dark:text-zinc-600 mb-5">
                Desenvolvo estratégias digitais, websites e estruturas online que ajudam empresas, empreendedores e marcas pessoais a construir autoridade, atrair clientes e crescer de forma sustentável.
              </p>
              <a
                href={
                  "https://wa.me/5566996399303?text=Ol%C3%A1%2C%20olhei%20seu%20portf%C3%B3lio%20e%20notei%20um%20grande%20valor!"
                }
                target="_blank"
                rel="noopener nooreferrer"
                className="flex items-center justify-center gap-2 border border-solid border-zinc-300 px-5 py-3 rounded-full group transition-all duration-200"
              >
                <span className="text-[16px] text-black group-hover:text-zinc-400 transition-all duration-150">Ver Case</span>
              </a>
            </div>
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
                O Que Eu Trago
              </h1>
              <p className="max-w-[30rem] text-left font-semibold text-[16px] text-zinc-600 dark:text-zinc-400 mb-[3rem]">
                Descubra como estratégia, tecnologia e desenvolvimento web podem transformar sua presença digital em um verdadeiro ativo de negócios.
              </p>
              <div className="flex items-center justify-center gap-5">
                <a
                  href={"/right-choice"}
                  className="flex items-center justify-center gap-2 bg-white border border-solid border-black/[0.08] px-5 py-3 rounded-full hover:bg-black/[0.04] dark:border-white/[0.145] dark:hover:bg-white/80 transition-all duration-200"
                >
                  <span className="text-[16px] text-black font-medium">Por que trabalhar comigo</span>
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
}
