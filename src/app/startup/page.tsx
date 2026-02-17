import Image from "next/image";
import Navbar from "../components/navbar";
import ImgSwit from "@/public/startup/workperch-m-jcgSZlLS0-unsplash.jpg";
import Footer from "../components/footer";

export default function Startup() {
    return (
        <>
            <div className="min-h-screen items-center justify-center font-sans overflow-x-hidden">
                <Navbar />
                <section className="flex container mx-auto min-h-screen w-full max-w-full flex-col items-center justify-center py-32 px-5 md:px-0 sm:items-center sm:justify-start">
                    <div className="absolute top-0 flex max-w-full w-full max-h-[50rem] h-full -z-10">
                        <Image
                            className="relative w-full max-w-full max-h-full object-cover select-none pointer-events-none -z-50"
                            src={ImgSwit}
                            alt="Desk"
                            width={1500}
                            height={10}
                            priority
                        />
                        <div className="absolute min-h-screen bg-gradient-to-t from-[hsla(0,0%,10%,1)] via-[hsla(0,0%,10%,0.6)] to-transparent w-full h-full" />
                    </div>

                    <h1 className="text-3xl drop-shadow-lg mb-5">AETHERIS AE</h1>
                    <p className="text-center md:text-left text-1xl max-w-3xl md:max-w-3xl drop-shadow-lg">Negócios operam com padrões. Onde surgem gargalos, falhas ou limitações, existem sinais claros de que uma solução pode — e deve — ser aplicada. A marca nasce com esse princípio: identificar problemas antes que se tornem bloqueios e estruturar soluções definitivas que sustentam crescimento, eficiência e tomada de decisão.
                        <br />
                        <br />
                        À frente da marca está Thomas Santos, fundador e CEO, responsável pela visão estratégica, desenvolvimento das soluções e direcionamento técnico do ecossistema. A liderança é orientada por lógica, análise e previsibilidade, garantindo que cada decisão esteja conectada a resultados reais e sustentáveis para empresários e negócios.
                        <br />
                        <br />
                        Atuamos na criação de soluções digitais, sistemas, automações, plataformas e estratégias pensadas para resolver dores reais de negócios em diferentes estágios. Cada solução é construída para atuar na raiz do problema, eliminando retrabalho, ineficiência e limitações operacionais.
                        <br />
                        <br />
                        Oficializada em 31/12/2026, a marca evolui de forma contínua. Novos recursos, ferramentas e soluções serão incorporados progressivamente, expandindo o suporte estratégico para empresários, startups e organizações que buscam não apenas resolver problemas atuais, mas se antecipar aos desafios futuros. Onde há um problema previsível, existe uma solução inevitável — e ela começa aqui.
                    </p>
                </section>
            </div>
            <Footer />
        </>
    );
}
