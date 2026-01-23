import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ImgContent1 from "@/public/content/curved-road-10072702.jpg";
import ImgContent2 from "@/public/content/d.jpg";
import ImgContent3 from "@/public/content/azwedo-l-lc-uSx99gjoSoc-unsplash.jpg";
import ImgProject1 from "@/public/template-one.png";
import ImgProject2 from "@/public/template-three.png";
import ImgProject3 from "@/public/template-three.png";
import ImgModels1 from "@/public/offset_spark_icon_outline.png";
import ImgModels2 from "@/public/offset_image_icon_outline.png";
import ImgModels3 from "@/public/offset_videocam_icon_outline.png";
import ImgAvaliations1 from "@/public/carrie-discord-feedb.webp";
import ImgAvaliations2 from "@/public/dc.webp";
import CodeWorkspace from "./components/codeWorkspace";
import Gallery from "./components/gallery";

export default function Home() {
  const contentHome = [
    {
      id: 1,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          fill="currentColor"
          className="bi bi-stars"
          viewBox="0 0 16 16"
        >
          <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
        </svg>
      ),
      span: "Descubra",
      video: "/discover.mp4",
      images: ImgContent1,
      title: "Conheça quem eu sou e o que eu faço",
      description:
        "Explore meu portfólio e descubra minhas habilidades em desenvolvimento web moderno. Trabalho criando interfaces rápidas, responsivas e bem estruturadas, focadas em performance, usabilidade e design limpo. Aqui você encontra projetos reais, ideias criativas e soluções pensadas para o mundo digital.",
    },
    {
      id: 2,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          fill="currentColor"
          className="bi bi-tools"
          viewBox="0 0 16 16"
        >
          <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3q0-.405-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708M3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z" />
        </svg>
      ),
      span: "Construção",
      video: "/build.mp4",
      images: ImgContent2,
      title: "Transformando ideias em aplicações reais",
      description:
        "Desenvolvo aplicações completas do zero, desde o design até a implementação final. Utilizo tecnologias modernas como React, Next.js, TypeScript e animações com Framer Motion, criando experiências interativas, escaláveis e prontas para produção.",
    },
    {
      id: 3,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          fill="currentColor"
          className="bi bi-graph-up-arrow"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"
          />
        </svg>
      ),
      span: "Resultados",
      video: "/operate.mp4",
      images: ImgContent3,
      title: "Código organizado, performance e evolução contínua",
      description:
        "Prezo por boas práticas, código limpo e manutenção eficiente. Meus projetos são pensados para escalar, com foco em performance, SEO, responsividade e experiência do usuário. Estou sempre aprendendo e evoluindo para entregar soluções cada vez melhores.",
    },
  ];

  const exploreProjetos = [
    {
      id: 1,
      project: ImgProject1,
      img: ImgModels1,
      title: "Frames IA",
      description:
        "Este projeto é apenas uma representação do meu trabalho, este website tem chat com API real com IA.",
    },
    {
      id: 2,
      project: ImgProject2,
      img: ImgModels2,
      title: "Advocacia",
      description:
        "Um website para ter uma apresentação formal diante a seus clientes, com um tema clássico e simples para pessoas com menos apego web.",
    },
  ];

  const avaliationsModel = [
    {
      id: 1,
      profile: ImgAvaliations1,
      img: ImgModels1,
      title: "Carrie",
      description:
        "Delivered exactly what I needed — a clean, responsive data table with filtering, sorting, and pagination. The backend and frontend were both structured well, and the setup instructions were clear. Great communication and fast delivery!",
    },
    {
      id: 2,
      profile: ImgAvaliations2,
      img: ImgModels1,
      title: "Snag",
      description:
        "It took some time and patience but the result is perfect thank you very much I recommend 100%",
    },
  ];

  return (
    <div className="min-h-screen items-center justify-start font-sans">
      <Navbar />

      <section
        id="home"
        className="flex container mx-auto min-h-screen w-full max-w-full flex-col items-center justify-center py-32 px-4 sm:px-6 lg:px-0 sm:items-center"
      >
        <Gallery />
        <div className="relative z-20 flex flex-col items-center justify-center gap-6 text-center py-30">
          <Image
            className="dark:invert select-none pointer-events-none mb-5"
            src="/favicon.svg"
            alt="AI"
            width={100}
            height={10}
            priority
          />
          <p className="max-w-full text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Focado na criação de aplicações web de alto desempenho, responsivas
            e escaláveis,
            <br /> utilizando tecnologias modernas como React, Next.js e
            TypeScript.
          </p>
          <a
            href={
              "https://wa.me/5566996399303?text=Ol%C3%A1%2C%20olhei%20seu%20portf%C3%B3lio%20e%20notei%20um%20grande%20valor!"
            }
            target="_blank"
            rel="noopener nooreferrer"
            className="flex items-center justify-center gap-2 border border-solid border-black/[0.08] px-5 py-2 rounded-2xl hover:bg-black/[0.04] dark:border-white/[0.145] dark:hover:bg-[hsl(0,0%,13%)] transition-all duration-200"
          >
            <span className="text-[14px]">Começar Agora</span>
          </a>
        </div>
      </section>

      <section
        id="about"
        className="flex container mx-auto min-h-screen w-full max-w-6xl flex-row items-center justify-between py-32 px-4 sm:px-6 lg:px-0 sm:items-start border-t dark:border-[hsla(0,0%,100%,0.1)]"
      >
        <div className="flex flex-col space-y-100">
          {contentHome.map((item) => (
            <div key={item.id} className="mb-[10rem] md:mb-[40rem] lg:mb-[40rem]">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-10 text-center lg:text-left w-full">
                <div className="flex flex-col">
                  <span className="flex items-center justify-center lg:justify-start gap-2 text-[16px] font-light text-zinc-600 dark:text-zinc-400 mb-2">
                    {item.icon}
                    <p>{item.span}</p>
                  </span>
                  <h1 className="max-w-xs text-[25px] font-extralight text-black dark:text-zinc-50 mb-5">
                    {item.title}
                  </h1>
                  <p className="max-w-md text-[16px] text-zinc-600 dark:text-zinc-400">
                    {item.description}
                  </p>
                </div>
                <div className="relative lg:absolute lg:right-[7rem] w-full max-w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-2xl bg-black">
                  <Image
                    className="absolute inset-0 h-full w-full object-cover"
                    src={item.images}
                    alt="image"
                    width={500}
                    height={500}
                    priority
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col container mx-auto min-h-screen w-full max-w-6xl items-center py-32 px-4 sm:px-6 lg:px-0 sm:items-start border-t dark:border-[hsla(0,0%,100%,0.1)]">
        <h1 className="max-w-xs text-3xl font-light leading-10 tracking-tight text-black dark:text-zinc-300 mb-5">
          Explore Projetos
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          {exploreProjetos.map((item) => (
            <div key={item.id} className="w-full">
              <div className="relative w-full flex flex-col dark:bg-[hsl(0,0%,13%)] border border-[hsla(0,0%,17%,1)] dark:hover:bg-[hsl(0,0%,17%)] min-h-full cursor-pointer transition-all duration-200 group">
                <div className="relative h-[180px] sm:h-[280px] lg:h-[320px] w-full overflow-hidden">
                  <Image
                    className="
              w-full h-[370px] lg:h-[680px] object-cover
              transform transition-transform duration-700 ease-out
              group-hover:translate-y-[-180px]
              select-none pointer-events-none
            "
                    src={item.project}
                    alt={item.title}
                    width={600}
                    height={320}
                    priority
                  />
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-300" />

                <div className="absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h1 className="max-w-xs text-[20px] font-extralight leading-10 tracking-tight text-black dark:text-zinc-50 px-5 pt-5">
                    {item.title}
                  </h1>

                  <p className="max-w-md text-[16px] text-zinc-600 dark:text-zinc-400 px-5 pb-5">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="recommendation"
        className="flex flex-col container mx-auto min-h-screen w-full max-w-6xl items-center justify-between py-32 px-4 sm:px-6 lg:px-0   sm:items-start sm:justify-start"
      >
        <h1 className="max-w-xs text-3xl font-light leading-10 tracking-tight text-black dark:text-zinc-300 mb-10">
          Avaliações
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {avaliationsModel.map((item) => (
            <div key={item.id} className="flex items-center justify-center">
              <div className="relative flex flex-col  dark:bg-[hsl(0,0%,13%)] border border-[hsla(0,0%,17%,1)] dark:hover:bg-[hsl(0,0%,17%)] min-h-full cursor-pointer transition-all duration-200 pb-45">
                <div className="px-5 py-5 overflow-hidden rounded-full">
                  <Image
                    className="overflow-hidden rounded-full object-cover select-none pointer-events-none"
                    src={item.profile}
                    alt="Short"
                    width={80}
                    height={10}
                    priority
                  />
                </div>
                <h1 className="max-w-xs text-[20px] font-extralight leading-10 tracking-tight text-black dark:text-zinc-50 px-5 py-5 pb-0">
                  {item.title}
                </h1>
                <p className="max-w-md text-[16px] text-zinc-600 dark:text-zinc-400 px-5 py-5">
                  {item.description}
                </p>

                <div className="absolute bottom-0 left-0">
                  <Image
                    className="object-cover select-none pointer-events-none"
                    src={item.img}
                    alt="Short"
                    width={150}
                    height={10}
                    priority
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col container mx-auto min-h-screen w-full max-w-6xl items-center justify-between py-32 px-4 sm:px-6 lg:px-0   sm:items-start">
        <h1 className="max-w-xs text-3xl font-light leading-10 tracking-tight text-black dark:text-zinc-300 mb-10">
          Codificação
        </h1>

        <CodeWorkspace />
      </section>

      <section className="flex flex-col container mx-auto w-full max-w-6xl items-center justify-center py-32 px-30 border-t dark:border-[hsla(0,0%,100%,0.1)]">
        <Image
          className="dark:invert opacity-50 select-none pointer-events-none mb-5"
          src="/favicon.svg"
          alt="AI"
          width={100}
          height={10}
          priority
        />
        <p className="text-center max-w-full text-2xl font-extralight leading-10 tracking-tight text-black dark:text-zinc-300 mb-10">
          Construa o que as pessoas usarão amanhã.
        </p>
        <Link
          className="flex h-12 w-[10rem] md:w-full items-center justify-center rounded-2xl border border-solid border-black/[0.08] px-5 transition-colors hover:bg-black/[0.04] dark:border-white/[0.145] dark:hover:bg-[hsl(0,0%,13%)] md:w-[260px]"
          href="https://wa.me/5566996399303?text=Ol%C3%A1%2C%20olhei%20seu%20portf%C3%B3lio%20e%20notei%20um%20grande%20valor!"
          target="_blank"
          rel="noopener noreferrer"
        >
          Solicitar Serviço
        </Link>
      </section>
      <Footer />
    </div>
  );
}
