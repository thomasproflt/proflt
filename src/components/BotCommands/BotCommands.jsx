import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from '../Navbar';
import Footer from '../Footer/Footer';

const BotCommands = () => {

    const mainContent = {
        id: 1,
        title: "Aetheris AE",
        subtitle1: "Multi-purpose Discord Bot.",
        subtitle2: "Configuration via discord",
        subtitle3: "Completely free.",
    };

    return (
        <div className="min-h-screen items-center justify-center flex flex-col">
            <Navbar />

            <main className="flex flex-col w-full">
                <section className="flex flex-col items-center lg:items-start justify-center px-0 lg:px-18 lg:justify-start pt-25 lg:pt-25 text-white text-sm w-full">
                    <div className="flex flex-col gap-8 lg:gap-8 w-full">
                        <div className="flex flex-col w-full items-start lg:items-start justify-center lg:justify-start text-center lg:text-left px-2">
                            <h1 className="text-2xl w-full lg:text-5xl lg:w-auto font-medium mb-4 lg:mb-6 leading-tight">
                                {mainContent.title}
                            </h1>
                            <p className="w-full text-sm md:text-[16px] text-gray-200 mb-6 lg:mb-0 leading-relaxed max-w-xl mx-auto lg:mx-0 lg:font-light px-2">
                                {mainContent.subtitle1}
                            </p>
                            <p className="w-full text-sm md:text-[16px] text-gray-200 mb-6 lg:mb-0 leading-relaxed max-w-xl mx-auto lg:mx-0 lg:font-light px-2">
                                {mainContent.subtitle2}
                            </p>
                            <p className="w-full text-sm md:text-[16px] text-gray-200 mb-6 lg:mb-0 leading-relaxed max-w-xl mx-auto lg:mx-0 lg:font-light px-2">
                                {mainContent.subtitle3}
                            </p>
                            <div className="flex flex-row lg:pt-5 items-center justify-center gap-2">
                                <button className="flex lg:px-5 lg:py-3 bg-gradient-to-r from-[hsl(187,96%,39%)] to-[hsl(202,97%,39%)] hover:from-[hsl(202,97%,29%)] hover:to-[hsl(187,96%,29%)] rounded-[50px] transition-colors duration-300 cursor-pointer">
                                    <span className="flex [text-shadow:_2px_2px_15px_rgba(0,0,0,1)]">Add to Discord</span>
                                </button>
                                <button className="flex lg:px-5 lg:py-3 bg-[hsl(0,0%,10%)] hover:bg-[hsl(0,0%,15%)] rounded-[50px] transition-colors duration-300 cursor-pointer">
                                    Explore Features
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default BotCommands;