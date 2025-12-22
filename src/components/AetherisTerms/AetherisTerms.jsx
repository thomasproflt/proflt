import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from '../Navbar';
import Footer from '../Footer/Footer';
import { NavLink } from 'react-router-dom';

const AetherisTerms = () => {

    const mainContent = {
        id: 1,
        title: "Terms of Service",
        subtitle: "Last Updated: October 28, 2025",
        /*btn1: {
            text: "Recursos",
            link: "#",
        },
        btn2: {
            text: "Comece construir",
            link: "#",
        }*/
    };

    return (
        <div className="min-h-screen items-center justify-center flex flex-col">
            <Navbar />

            <main className="flex flex-col w-full">
                <section className="flex flex-col items-center justify-center pt-25 lg:pt-25 text-white text-sm w-full">
                    <div className="flex flex-col items-center justify-between gap-8 lg:gap-8 w-full">
                        <div className="flex flex-col w-full items-center justify-center text-center lg:text-center px-2">
                            <h1 className="text-center text-2xl w-full lg:text-5xl lg:w-auto font-medium mb-4 lg:mb-6 leading-tight">
                                {mainContent.title}
                            </h1>
                            <p className="text-center w-full text-sm md:text-[16px] text-gray-200 mb-6 lg:mb-9 leading-relaxed max-w-xl mx-auto lg:mx-0 lg:font-light px-2">
                                {mainContent.subtitle}
                            </p>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start text-white text-sm w-full">
                    <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start lg:ml-40 gap-2">
                        <NavLink
                            to="/portfolio/aetheris-terms/"
                            className={({ isActive }) =>
                                `flex px-2 py-2 lg:px-5 lg:py-2 relative overflow-hidden ${isActive
                                    ? 'border-l-3 border-white text-white bg-white/10 rounded-[5px]'
                                    : 'text-gray-300 bg-white/10'
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    {isActive && (
                                        <div className=""></div> /**absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[hsl(0,0%,90%)] to-[hsl(0,0%,50%)] */
                                    )}
                                    Aetheris Terms of Service
                                </>
                            )}
                        </NavLink>
                        <NavLink
                            to="/portfolio/aetheris-privacy/"
                            className={({ isActive }) =>
                                `flex px-2 py-2 lg:px-5 lg:py-2 relative overflow-hidden ${isActive
                                    ? 'text-white bg-white/0'
                                    : 'text-gray-600 bg-white/0'
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    {isActive && (
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[hsl(0,0%,20%)] to-[hsl(0,0%,50%)]"></div>
                                    )}
                                    Aetheris Privacy
                                </>
                            )}
                        </NavLink>
                    </div>
                    <div className="lg:hidden max-w-100 w-full h-1 bg-white/10"></div>
                    <div className="flex flex-col lg:flex-row mx-auto px-4 sm:px-6 lg:px-10 bg-white/5 lg:bg-transparent pt-20 md:pt-0 pb-12 md:pb-16 w-full">
                        <div className="hidden lg:flex w-[0.5px] max-h-100 bg-white/10"></div>
                        <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:px-10 lg:gap-8 w-full">
                            <div className="flex flex-col w-full items-start justify-center text-left lg:text-left px-2">
                                <div className="flex flex-col items-start justify-center gap-3">
                                    <h1 className="flex text-3xl">Welcome discord bot Aetheris</h1>
                                    <p className="flex text-1xl text-gray-400 font-light">1. O Aetheris é um assistente automatizado para servidores Discord.<br />
                                        <br />
                                        2. Não use o bot para atividades ilegais, spam ou assédio.<br />
                                        <br />
                                        3. Reservamo-nos o direito de suspender o acesso ao bot a qualquer momento.<br />
                                        <br />
                                        4. O uso do bot implica aceitação destes termos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default AetherisTerms;