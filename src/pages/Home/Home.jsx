import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import HomeNavbar from '../../components/HomeNavbar/HomeNavbar';
import Img from '../../assets/pexels-catiamatos-1061559.jpg';
import Video from '../../assets/device-desktop-3.mp4';
import Tailored from '../../assets/tailoring-desktop-3.mp4';
import ImgTemplate1 from '../../assets/template-one.png';
import ImgTemplate2 from '../../assets/image-asset-2.webp';
import ImgTemplate3 from '../../assets/image-asset-3.webp';
import ImgTemplate4 from '../../assets/image-asset-4.webp';
import ImgDesignIntelligence1 from '../../assets/solidpixels-iq2RzBMj-Wg-unsplash.jpg';
import ImgDesignIntelligence2 from '../../assets/azwedo-l-lc-uSx99gjoSoc-unsplash.jpg';
import ImgDesignIntelligence3 from '../../assets/azwedo-l-lc-6uR0dkm3ya0-unsplash.jpg';
import ImgDesignIntelligence4 from '../../assets/drafts-desktop-1500w.webp';
import ImgCreativeTools1 from '../../assets/responsive-desktop-1500w.webp';
import ImgCreativeTools2 from '../../assets/media-desktop-1500w.webp';
import ImgCreativeTools3 from '../../assets/styles-desktop-1500w.webp';
import ImgCreativeTools4 from '../../assets/drafts-desktop-1500w.webp';
import ImgAccessBuild1 from '../../assets/domains-desktop-1500w.webp';
import ImgAccessBuild2 from '../../assets/professional-email-desktop-1500w.webp';
import ImgAccessBuild3 from '../../assets/online-store-desktop-3-1500w.webp';
import ImgSharp from '../../assets/6853e15c580e7d581e42e819_yellow-cap-poster.webp';
import ImgSharp2 from '../../assets/6853e15e5104d359ae231783_furry-poster.webp';
import Footer from '../../components/Footer/Footer';
import ContactForm from '../../components/ContactForm/ContactForm';

const Home = () => {
    const [activeSection, setActiveSection] = useState('');
    const [showHomeNavbar, setShowHomeNavbar] = useState(false);
    const [isHeroSectionVisible, setIsHeroSectionVisible] = useState(true);
    const [isToolsSectionActive, setIsToolsSectionActive] = useState(false);
    const [isSeoSectionActive, setIsSeoSectionActive] = useState(false);
    const [cardRotations, setCardRotations] = useState({});
    const contentSectionRef = useRef(null);
    const heroSectionRef = useRef(null);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Referências para cada seção
    const sectionRefs = {
        templates: useRef(null),
        design: useRef(null),
        tools: useRef(null),
        seo: useRef(null),
    };

    const navItems = [
        { id: 'templates', label: 'Projetos' },
        { id: 'design', label: 'Serviços' },
        { id: 'tools', label: 'Tecnologias' },
        { id: 'seo', label: 'Sobre Mim' },
    ];

    // Const Templetes
    const templatesData = [
        {
            id: 1,
            link: '/template1',
            img: ImgTemplate1,
            title: 'FRAMES IA',
        },
        {
            id: 2,
            link: '/template2',
            img: ImgTemplate2,
            title: 'MYHRA',
        },
        {
            id: 3,
            link: '/template3',
            img: ImgTemplate3,
            title: 'KLIPSAN',
        },
        {
            id: 4,
            link: '/template4',
            img: ImgTemplate4,
            title: 'RANDI',
        },
    ];

    const designIntelligence = [
        {
            id: 1,
            img: ImgDesignIntelligence1,
            title: 'Desenvolvimento Web Moderno',
            description: 'Criação de interfaces web modernas, responsivas e bem estruturadas, focadas em performance, usabilidade e experiência do usuário.',
        },
        {
            id: 2,
            img: ImgDesignIntelligence3,
            title: 'Landing Pages Profissionais',
            description: 'Desenvolvimento de landing pages focadas em apresentar serviços, fortalecer a marca e gerar contato de forma clara e eficiente.',
        },
        {
            id: 3,
            img: ImgDesignIntelligence2,
            title: 'Integrações e Funcionalidades Web',
            description: 'Implementação de funcionalidades web que conectam interfaces a serviços, formulários e APIs, garantindo uma aplicação funcional e preparada para crescimento.',
        },
    ];

    const skillColors = {
        // Frontend
        'React': 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
        'JavaScript': 'bg-yellow-500/10 text-yellow-300 border-yellow-500/30',
        'HTML5': 'bg-orange-500/10 text-orange-300 border-orange-500/30',
        'CSS3': 'bg-blue-500/10 text-blue-300 border-blue-500/30',
        'TailwindCSS': 'bg-teal-500/10 text-teal-300 border-teal-500/30',

        // Estilização
        'CSS Modules / CSS puro': 'bg-purple-500/10 text-purple-300 border-purple-500/30',
        'Framer Motion': 'bg-pink-500/10 text-pink-300 border-pink-500/30',

        // Backend
        'Node.js': 'bg-green-500/10 text-green-300 border-green-500/30',
        'APIs REST': 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30',

        // Ferramentas
        'Vercel': 'bg-black/20 text-white border-white/30',
        'Git & GitHub': 'bg-red-500/10 text-red-300 border-red-500/30',
    };

    const creativeTools = [
        {
            id: 1,
            img: ImgCreativeTools1,
            title: 'Frontend',
            items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'TailwindCSS'],
        },
        {
            id: 2,
            img: ImgCreativeTools3,
            title: 'Estilização & UI',
            items: ['CSS Modules / CSS puro', 'TailwindCSS', 'Framer Motion'],
        },
        {
            id: 3,
            img: ImgCreativeTools2,
            title: 'Backend & Integrações',
            items: ['Node.js', 'JavaScript', 'APIs REST'],
        },
        {
            id: 4,
            img: ImgCreativeTools4,
            title: 'Deploy & Ferramentas',
            items: ['Vercel', 'Git & GitHub'],
        },
    ];

    const seoAnalytics = [
        {
            id: 1,
            title: 'SEO tools',
            description: 'Expand your reach and show up more in global search engine results with a powerful set of integrated features.',
        },
        {
            id: 2,
            title: 'Integrations and extensions',
            description: 'Unite your digital world through integrations with popular social platforms and multi-media accounts.',
        },
        {
            id: 3,
            title: 'Website analytics',
            description: 'Access traffic data you need to scale, plus insights into user behavior and engagement to direct your focus.',
        },
    ];

    const accessBuild = [
        {
            id: 1,
            link: '/1',
            img: ImgAccessBuild1,
            tag: 'DOMAINS',
            title: 'Find a domain for your website',
        },
        {
            id: 2,
            link: '/2',
            img: ImgAccessBuild2,
            tag: 'PROFESSIONAL EMAIL',
            title: 'Make it official with Google Workspace',
        },
        {
            id: 3,
            link: '/3',
            img: ImgAccessBuild3,
            tag: 'ONLINE STORES',
            title: 'Sell anything, everywhere',
        },
    ];

    const support247 = [
        {
            id: 1,
            link: '/support',
            title: 'Help Center',
            description: 'Get help from our award-winning Customer Support team.',
        },
        {
            id: 2,
            link: '/learning',
            title: 'Webinars',
            description: 'Free online sessions to learn the basics and refine your skills.',
        },
    ];

    // Estado para gerenciar múltiplos vídeos
    const [videosState, setVideosState] = useState({
        hero: {
            isPlaying: false,
            isInView: false,
            ref: useRef(null),
            containerRef: useRef(null)
        },
        design: {
            isPlaying: false,
            isInView: false,
            ref: useRef(null),
            containerRef: useRef(null)
        },
        footer: {
            isPlaying: false,
            isInView: false,
            ref: useRef(null),
            containerRef: useRef(null)
        }
    });

    // Monitora qual seção está visível
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const heroElement = heroSectionRef.current;

            if (heroElement) {
                const heroRect = heroElement.getBoundingClientRect();
                // Verifica se a hero section está visível (pelo menos 30% visível)
                const isHeroVisible = heroRect.bottom > window.innerHeight * 0.3 && heroRect.top < window.innerHeight * 0.7;

                setIsHeroSectionVisible(isHeroVisible);

                // Se estiver na hero section, limpa o activeSection
                if (isHeroVisible && activeSection !== '') {
                    setActiveSection('');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]);

    useEffect(() => {
        const handleScroll = () => {
            const toolsElement = sectionRefs.tools.current;

            if (toolsElement) {
                const toolsRect = toolsElement.getBoundingClientRect();
                // Verifica se a seção TOOLS está visível (pelo menos 50% visível)
                const isToolsVisible = toolsRect.top <= window.innerHeight / 2 &&
                    toolsRect.bottom >= window.innerHeight / 2;

                setIsToolsSectionActive(isToolsVisible);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const seoElement = sectionRefs.seo.current;

            if (seoElement) {
                const seoRect = seoElement.getBoundingClientRect();
                // Verifica se a seção SEO está visível (pelo menos 50% visível)
                const isSeoVisible = seoRect.top <= window.innerHeight / 2 &&
                    seoRect.bottom >= window.innerHeight / 2;

                setIsSeoSectionActive(isSeoVisible);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Monitora visibilidade para cada vídeo
    useEffect(() => {
        const observers = {};

        Object.keys(videosState).forEach((videoKey) => {
            const videoData = videosState[videoKey];

            observers[videoKey] = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        setVideosState(prev => ({
                            ...prev,
                            [videoKey]: {
                                ...prev[videoKey],
                                isInView: entry.isIntersecting
                            }
                        }));

                        if (entry.isIntersecting) {
                            // Quando o vídeo entra na viewport, inicia automaticamente
                            if (videoData.ref.current) {
                                videoData.ref.current.play().then(() => {
                                    setVideosState(prev => ({
                                        ...prev,
                                        [videoKey]: {
                                            ...prev[videoKey],
                                            isPlaying: true
                                        }
                                    }));
                                }).catch(error => {
                                    console.log(`Autoplay bloqueado para ${videoKey}:`, error);
                                });
                            }
                        } else {
                            // Quando sai da viewport, pausa
                            if (videoData.ref.current) {
                                videoData.ref.current.pause();
                                setVideosState(prev => ({
                                    ...prev,
                                    [videoKey]: {
                                        ...prev[videoKey],
                                        isPlaying: false
                                    }
                                }));
                            }
                        }
                    });
                },
                {
                    threshold: 0.5,
                    rootMargin: '0px'
                }
            );

            if (videoData.containerRef.current) {
                observers[videoKey].observe(videoData.containerRef.current);
            }
        });

        return () => {
            Object.keys(observers).forEach((videoKey) => {
                if (videosState[videoKey]?.containerRef.current) {
                    observers[videoKey].unobserve(videosState[videoKey].containerRef.current);
                }
            });
        };
    }, []);

    // Controla o fim de cada vídeo para reiniciar
    useEffect(() => {
        Object.keys(videosState).forEach((videoKey) => {
            const videoElement = videosState[videoKey].ref.current;

            const handleVideoEnd = () => {
                if (videosState[videoKey].isInView) {
                    // Se ainda está visível, reinicia
                    if (videoElement) {
                        videoElement.currentTime = 0;
                        videoElement.play().then(() => {
                            setVideosState(prev => ({
                                ...prev,
                                [videoKey]: {
                                    ...prev[videoKey],
                                    isPlaying: true
                                }
                            }));
                        });
                    }
                }
            };

            if (videoElement) {
                videoElement.addEventListener('ended', handleVideoEnd);
            }

            return () => {
                if (videoElement) {
                    videoElement.removeEventListener('ended', handleVideoEnd);
                }
            };
        });
    }, [videosState]);

    // Função para controlar play/pause de um vídeo específico
    const toggleVideoPlayback = (videoKey) => {
        const videoData = videosState[videoKey];

        if (videoData.ref.current) {
            if (videoData.isPlaying) {
                videoData.ref.current.pause();
                setVideosState(prev => ({
                    ...prev,
                    [videoKey]: {
                        ...prev[videoKey],
                        isPlaying: false
                    }
                }));
            } else {
                videoData.ref.current.play().then(() => {
                    setVideosState(prev => ({
                        ...prev,
                        [videoKey]: {
                            ...prev[videoKey],
                            isPlaying: true
                        }
                    }));
                });
            }
        }
    };

    const handleNavigate = (sectionId) => {
        setActiveSection(sectionId);

        const element = sectionRefs[sectionId]?.current;
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            element.classList.add('animate-fade-in');
            setTimeout(() => {
                element.classList.remove('animate-fade-in');
            }, 1000);
        }
    };

    // Monitora scroll para controlar visibilidade da HomeNavbar
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (!contentSectionRef.current) return;

            const sectionTop = contentSectionRef.current.offsetTop;
            const navbarHeight = 80;

            if (currentScrollY >= sectionTop - navbarHeight) {
                setShowHomeNavbar(true);
            } else {
                setShowHomeNavbar(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const handleCardMouseMove = (e, index) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();

        // Calcula a posição do mouse relativa ao card
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Calcula a porcentagem da posição do mouse
        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;

        // Calcula a rotação baseada na posição do mouse
        const rotateY = ((xPercent - 50) / 50) * 5; // ±5 graus em Y
        const rotateX = ((50 - yPercent) / 50) * 5; // ±5 graus em X

        setCardRotations(prev => ({
            ...prev,
            [index]: { x: rotateX, y: rotateY }
        }));
    };

    const handleCardMouseLeave = (index) => {
        // Reseta a rotação quando o mouse sai
        setCardRotations(prev => ({
            ...prev,
            [index]: { x: 0, y: 0 }
        }));
    };

    return (
        <div className="min-h-screen">
            <Navbar />
            <HomeNavbar
                onNavigate={handleNavigate}
                isVisible={showHomeNavbar}
                sectionRef={contentSectionRef}
            />

            <section
                id='hero'
                ref={heroSectionRef}
                className="items-center justify-center relative"
            >
                <img src={Img} alt="Background" className='min-h-screen md:max-w-full md:w-full object-cover opacity-70' />
                <div className="absolute w-full justify-center items-center px-5 md:px-0 top-0 pt-20 md:pt-45 place-items-center">
                    {/*<h1 className="pasbile-font text-1xl sm:text-2xl text-white text-center mb-8">
                        Websites
                    </h1>*/}
                    <h1 className="text-3xl md:text-5xl text-white text-center mb-8">
                        Crio experiências web modernas<br /> que transformam ideias em produtos reais
                    </h1>
                    <p className="text-1xl md:text-[16px] text-[hsl(0,0%,90%)] w-150 text-center mb-8">
                        Especializado em React, animações suaves e aplicações escaláveis com foco em performance e experiência do usuário.
                    </p>
                    <button
                        className='flex items-center justify-center bg-white text-black px-5 py-5 mb-3 md:mb-3 cursor-pointer relative overflow-hidden group transition-all duration-300 mx-auto'
                    >
                        <span className="relative text-[14px] z-10 transition-colors duration-300 delay-100 group-hover:text-white group-active:text-white active:delay-0">
                            COMEÇAR AGORA
                        </span>
                        <span className="absolute inset-y-0 left-0 w-0 bg-black transition-all duration-500 ease-out group-hover:w-full group-active:w-full"></span>
                        <span className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-0 group-active:opacity-30 active:opacity-30 bg-black"></span>
                    </button>

                    <div
                        ref={contentSectionRef}
                        className="flex relative items-center justify-center w-auto md:w-auto md:mt-30 mb-3 md:mb-0 bg-black/5 backdrop-blur-[120px] px-1 py-1 sm:font-medium rounded-full"
                    >
                        {navItems.map((item) => (
                            <ul key={item.id}>
                                <button
                                    onClick={() => handleNavigate(item.id)}
                                    className={`flex text-[10px] sm:text-[14px] px-2 py-2 sm:px-4 sm:py-3 rounded-full cursor-pointer transition-all duration-300 ${
                                        // Só mostra como ativo se não estiver na hero section
                                        !isHeroSectionVisible && activeSection === item.id
                                            ? 'bg-white/20 text-white'
                                            : 'bg-transparent hover:bg-white/10 text-white/80 hover:text-white'
                                        }`}
                                >
                                    {item.label}
                                </button>
                            </ul>
                        ))}
                    </div>
                </div>
            </section>

            {/* Seções de conteúdo */}
            <div className="space-y-0">
                {/* SEÇÃO TEMPLATES */}
                <section
                    id="templates"
                    ref={sectionRefs.templates}
                    className="min-h-screen flex items-start justify-center bg-white text-black relative overflow-hidden md:px-5 md:py-20"
                >
                    <div className="flex flex-col w-full max-w-6xl mx-auto gap-8 px-5 md:px-0 mt-10 md:mt-0 mb-20 md:mb-0">
                        <div className="flex relative flex-col md:flex-row justify-between items-center">
                            <h1 className="pasbile-font text-4xl md:text-5xl text-center md:text-left md:w-160 mb-6 md:mb-0">
                                Projetos em Destaque
                            </h1>
                            {/*<Link
                                to={'/templates/custom-templates'}
                                className='flex items-center justify-center md:h-10 bg-transparent border-2 border-gray-300 hover:border-black active:border-black text-black px-4 py-2 sm:px-8 sm:py-2 cursor-pointer relative overflow-hidden group transition-all duration-300'
                            >
                                <span className="relative text-[14px] font-semibold z-10 transition-colors duration-300 group-hover:text-white group-active:text-white">
                                    BUILD YOUR OWN WITH AI
                                </span>
                                <span className="absolute inset-y-0 left-0 w-0 bg-[hsl(0,0%,0%)] transition-all duration-500 ease-out group-hover:w-full group-active:w-full"></span>
                                <span className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-0 group-active:opacity-30 active:opacity-30 bg-black"></span>
                            </Link>*/}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {templatesData.slice(0, 3).map((template, index) => (
                                <div
                                    key={template.id}
                                    className="group block transition-transform duration-300"
                                >
                                    <div className="flex flex-col gap-4 group-hover:shadow-2xl group-active:shadow-2xl border border-gray-300 mb-1 md:mb-1 rounded-lg break-inside-avoid">
                                        <div className="overflow-hidden h-48 relative rounded-lg break-inside-avoid">
                                            <Link to={template.link}>
                                                <div className="relative w-full h-full">
                                                    <img
                                                        src={template.img}
                                                        alt={template.title}
                                                        className="absolute inset-0 w-full min-h-110 h-full object-cover transition-transform duration-2000 ease-out transform translate-y-0 group-hover:-translate-y-[56%] group-active:-translate-y-[56%]"
                                                    />
                                                </div>
                                                <div className="absolute bottom-2 flex flex-row justify-between items-center w-full px-3">
                                                    <h1 className='text-[14px] font-medium bg-black/40 text-white backdrop-blur-lg p-2 opacity-0 group-hover:opacity-100 group-active:opacity-100 rounded-full transition-all duration-300'>
                                                        {template.title}
                                                    </h1>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SEÇÃO DESIGN INTELLIGENCE */}
                <section
                    id="design"
                    ref={sectionRefs.design}
                    className="min-h-screen flex items-center justify-center md:items-start md:justify-start bg-[hsl(0,8%,12%)] text-white relative overflow-hidden px-5 md:px-10 md:py-20"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex flex-col mt-10 md:mt-20 gap-5">
                            <h1 className="pasbile-font text-center md:text-left text-2xl md:text-4xl md:w-90">Serviços</h1>
                            <div className="grid grid-cols-1 md:grid-cols-3 columns-1 gap-4 md:gap-6 space-y-4">
                                {designIntelligence.map((item, index) => (
                                    <div key={index} className="relative rounded-2xl overflow-hidden break-inside-avoid mb-4 md:mb-6">
                                        <div className="absolute max-w-full w-full max-h-full h-full bg-gradient-to-b from-black to-black/0"></div>
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className='w-full h-auto object-cover rounded-2xl'
                                        />

                                        <div className="absolute top-3 md:top-6 left-3 md:left-6 max-w-[80%]">
                                            <h1 className='text-base md:text-[18px] lg:text-lg font-medium text-white drop-shadow-lg'>{item.title}</h1>
                                            <p className='text-sm md:text-[15px] lg:text-base text-white/90 drop-shadow mt-1'>{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* SEÇÃO CREATIVE TOOLS - BACKGROUND AMARRONZADO ESCURO */}
                <section
                    id="tools"
                    ref={sectionRefs.tools}
                    className={`min-h-screen flex items-start justify-start text-white relative overflow-hidden md:px-10 md:py-10 transition-all duration-1000 ease-in-out ${isToolsSectionActive
                        ? 'bg-[#3a2c2b]'
                        : 'bg-[hsl(0,8%,12%)]'
                        }`}
                >
                    <div className="flex flex-row justify-between items-center w-full mt-10 md:mt-0 mb-6 md:mb-0">
                        <div className="flex flex-col md:mt-20 gap-5 w-full px-4 lg:px-8">
                            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">
                                <h1 className="clarkson-font text-center md:text-left text-4xl lg:text-5xl lg:w-1/3">
                                    Stack de Tecnologias
                                </h1>
                                <div className="space-y-5 lg:w-2/5 z-10">
                                    <p className="text-center md:text-left text-[16px] lg:text-lg text-white/90">
                                        Tecnologias que utilizo para desenvolver interfaces modernas e aplicações web funcionais.
                                    </p>
                                </div>
                            </div>

                            <div className="md:mt-30">
                                <div className="grid grid-cols-1 md:grid-cols-4 columns-1 gap-4 md:gap-6 space-y-4 md:space-y-6">
                                    {creativeTools.map((item, index) => (
                                        <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                                            <div className="flex flex-col">
                                                <h1 className='text-base md:text-[18px] lg:text-lg font-medium text-white drop-shadow-lg mb-3'>
                                                    {item.title}
                                                </h1>
                                                <div className="flex flex-wrap gap-2">
                                                    {item.items.map((skill, skillIndex) => (
                                                        <span
                                                            key={skillIndex}
                                                            className="px-3 py-1.5 rounded-full text-xs md:text-sm font-medium bg-white/10 text-white/90 border border-white/20 hover:bg-white/20 hover:text-white transition-all duration-200"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SEÇÃO SEO & ANALYTICS */}
                <section
                    id="seo"
                    ref={sectionRefs.seo}
                    className='flex items-start justify-start bg-black text-white relative overflow-hidden md:px-10 md:py-10 transition-all duration-1000 ease-in-out pb-20'
                >
                    <div className="w-full max-w-7xl mx-auto mt-10 md:mt-0 px-5 md:px-0">
                        <div className="flex flex-col md:mt-20 gap-8">
                            <div className="flex flex-col justify-between items-center lg:items-center gap-8">
                                <h1 className="clarkson-font text-center text-4xl lg:text-5xl lg:w-1/2">
                                    Sobre Mim
                                </h1>
                                <p className="text-center text-[14px] md:text-[18px] lg:w-1/2">
                                    Sou desenvolvedor web com foco na criação de interfaces modernas, funcionais e bem estruturadas. Trabalho com tecnologias atuais para desenvolver aplicações rápidas, responsivas e escaláveis, sempre priorizando performance e experiência do usuário.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className='flex items-center justify-center text-white relative overflow-hidden md:px-10 md:py-10 transition-all duration-1000 ease-in-out pb-0 bg-black'>
                    <div className="w-full max-w-7xl md:max-h-180 mx-auto mt-10 md:mt-0 px-5 md:px-0">
                        <div className="flex flex-col md:mt-20 gap-8 items-center">
                            <div className="flex flex-col justify-between items-center lg:items-center gap-8 z-10">
                                <h1 className="text-center text-4xl lg:text-6xl lg:w-130">
                                    Contato
                                </h1>
                            </div>

                                <div className="flex items-center justify-center mb-0 md:mb-10">
                                    <ContactForm />
                                </div>
                            <div className="flex flex-col items-center">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;