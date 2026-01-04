import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import HomeNavbar from '../../components/HomeNavbar/HomeNavbar';
import Img from '../../assets/fernando-hernandez-CosHjyONRk8-unsplash.jpg';
import ImgTemplate1 from '../../assets/template-one.png';
import ImgTemplate2 from '../../assets/template-two.png';
import ImgTemplate3 from '../../assets/template-three.png';
import ImgDesignIntelligence1 from '../../assets/solidpixels-iq2RzBMj-Wg-unsplash.jpg';
import ImgDesignIntelligence2 from '../../assets/azwedo-l-lc-uSx99gjoSoc-unsplash.jpg';
import ImgDesignIntelligence3 from '../../assets/azwedo-l-lc-6uR0dkm3ya0-unsplash.jpg';
import ImgCreativeTools1 from '../../assets/responsive-desktop-1500w.webp';
import ImgCreativeTools2 from '../../assets/media-desktop-1500w.webp';
import ImgCreativeTools3 from '../../assets/styles-desktop-1500w.webp';
import ImgCreativeTools4 from '../../assets/drafts-desktop-1500w.webp';""
import ImgAccessBuild1 from '../../assets/domains-desktop-1500w.webp';
import ImgAccessBuild2 from '../../assets/professional-email-desktop-1500w.webp';
import ImgAccessBuild3 from '../../assets/online-store-desktop-3-1500w.webp';
import TestemonialPhoto1 from '../../assets/carrie-discord-feedb.webp';
import TestemonialPhoto2 from '../../assets/dc.jpg';
import Footer from '../../components/Footer/Footer';
import ContactForm from '../../components/ContactForm/ContactForm';
import { useTranslation } from '../../contexts/TranslationContext';
import TranslationLoader from '../../components/TranslationLoader/TranslationLoader';
import OptimizedImage, { OptimizedBackground, OptimizedImageCard } from '../../components/OptimizedImage/OptimizedImage';

const Home = () => {
    const { language, translate, isTranslating } = useTranslation();
    const [translatedTexts, setTranslatedTexts] = useState(null);
    const [activeSection, setActiveSection] = useState('');
    const [showHomeNavbar, setShowHomeNavbar] = useState(false);
    const [isHeroSectionVisible, setIsHeroSectionVisible] = useState(true);
    const [isToolsSectionActive, setIsToolsSectionActive] = useState(false);
    const [isSeoSectionActive, setIsSeoSectionActive] = useState(false);
    const [cardRotations, setCardRotations] = useState({});
    const [translatedServices, setTranslatedServices] = useState([]);
    const contentSectionRef = useRef(null);
    const heroSectionRef = useRef(null);
    const [lastScrollY, setLastScrollY] = useState(0);

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [modalAnimation, setModalAnimation] = useState('enter');

    // Referências para cada seção
    const sectionRefs = {
        templates: useRef(null),
        design: useRef(null),
        tools: useRef(null),
        seo: useRef(null),
    };

    // Textos originais em português
    const originalTexts = {
        navItems: [
            { id: 'templates', label: 'Projetos' },
            { id: 'design', label: 'Serviços' },
            { id: 'tools', label: 'Tecnologias' },
            { id: 'seo', label: 'Sobre Mim' },
        ],
        hero: {
            title: "Crio experiências web modernas<br /> que transformam ideias em produtos reais",
            description: "Especializado em React, animações suaves e aplicações escaláveis com foco em performance e experiência do usuário.",
            button: "COMEÇAR AGORA"
        },
        projects: {
            title: "Projetos em Destaque"
        },
        services: {
            title: "Serviços"
        },
        technologies: {
            title: "Stack de Tecnologias",
            description: "Tecnologias que utilizo para desenvolver interfaces modernas e aplicações web funcionais."
        },
        about: {
            title: "Sobre Mim",
            description: "Sou desenvolvedor web com foco na criação de interfaces modernas, funcionais e bem estruturadas. Trabalho com tecnologias atuais para desenvolver aplicações rápidas, responsivas e escaláveis, sempre priorizando performance e experiência do usuário."
        },
        testimonials: {
            title: "O que as pessoas dizem",
            description: "Descubra a experiência que os usuários estiveram com o meu trabalho."
        },
        contact: {
            title: "Contato"
        }
    };

    // Design intelligence data original
    const originalDesignIntelligence = [
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

    // Use translated texts or fallback to originals
    const texts = translatedTexts || originalTexts;

    const servicesToDisplay = translatedServices.length > 0 ? translatedServices : originalDesignIntelligence;

    // Templates data - agora com função de tradução
    const [templatesData, setTemplatesData] = useState([
        {
            id: 1,
            link: '/template1',
            img: ImgTemplate1,
            title: 'FRAMES IA',
            description: 'Plataforma de IA para criação de frames e animações inteligentes.',
            detailedDescription: 'Uma aplicação web completa que utiliza inteligência artificial para gerar frames e animações customizadas. O sistema inclui editor integrado, exportação em múltiplos formatos e API para integração.',
            tags: ['React', 'Node.js', 'TailwindCSS', 'Framer Motion'],
            features: ['Editor visual integrado', 'Exportação múltipla', 'API REST', 'Dashboard analytics'],
            linkDemo: 'https://frames-ai-repo.vercel.app/',
            linkGithub: 'https://github.com/thomasproflt/frames-ai-repo'
        },
        {
            id: 2,
            link: '/template2',
            img: ImgTemplate2,
            title: 'Harmony Hub',
            description: 'Hub de colaboração para times criativos.',
            detailedDescription: 'Plataforma de colaboração em tempo real para equipes criativas, com ferramentas de compartilhamento, revisão e gestão de projetos.',
            tags: ['React', 'TypeScript', 'Supabase', 'Tailwind'],
            features: ['Colaboração em tempo real', 'Gestão de projetos', 'Compartilhamento seguro', 'Chat integrado'],
            linkDemo: 'https://harmony-hub-gamma.vercel.app/',
            linkGithub: 'https://github.com/thomasproflt/harmony-hub'
        },
        {
            id: 3,
            link: '/template3',
            img: ImgTemplate3,
            title: 'Advocacia',
            description: 'Um site para advogados e associados.',
            detailedDescription: 'Este site contém 6 páginas em específico, contando com sistema de contato.',
            tags: ['Next.js', 'TypeScript', 'TailwindCSS'],
            features: ['Advogados', 'Blog', 'Serviços', 'Divulgação'],
            linkDemo: 'https://veritas-collective.vercel.app/',
            linkGithub: 'https://github.com/thomasproflt/veritas-collective'
        },
    ]);

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

    const testemonial = [
        {
            id: 1,
            img: TestemonialPhoto1,
            title: 'Carrie',
            tag: 'Developer',
            description: 'Delivered exactly what I needed — a clean, responsive data table with filtering, sorting, and pagination. The backend and frontend were both structured well, and the setup instructions were clear. Great communication and fast delivery!',
        },
        {
            id: 2,
            img: TestemonialPhoto2,
            title: 'Snag',
            tag: 'Client',
            description: 'It took some time and patience but the result is perfect thank you very much I recommend 100%',
        }
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

    // Traduz serviços quando o idioma muda
    useEffect(() => {
        const translateServices = async () => {
            if (language === 'pt') {
                setTranslatedServices(originalDesignIntelligence);
                return;
            }

            try {
                console.log('🌐 Traduzindo serviços para:', language);
                const translated = await Promise.all(
                    originalDesignIntelligence.map(async (service) => ({
                        ...service,
                        title: await translate(service.title),
                        description: await translate(service.description)
                    }))
                );
                setTranslatedServices(translated);
                console.log('✅ Serviços traduzidos!');
            } catch (error) {
                console.error('❌ Erro na tradução dos serviços:', error);
                setTranslatedServices(originalDesignIntelligence);
            }
        };

        translateServices();
    }, [language, translate]);

    // Traduz todos os textos quando o idioma muda
    useEffect(() => {
        console.log('🚀 Idioma mudou para:', language);

        const translateAllTexts = async () => {
            if (language === 'pt') {
                console.log('✅ Mantendo português');
                setTranslatedTexts(originalTexts);
                return;
            }

            console.log('🌐 Traduzindo para:', language);

            try {
                const translated = {};

                // Traduz navItems
                translated.navItems = await Promise.all(
                    originalTexts.navItems.map(async (item) => {
                        const translatedLabel = await translate(item.label);
                        console.log(`📝 "${item.label}" -> "${translatedLabel}"`);
                        return {
                            ...item,
                            label: translatedLabel
                        };
                    })
                );

                // Traduz hero section
                const translatedTitle = await translate(originalTexts.hero.title);
                const translatedDesc = await translate(originalTexts.hero.description);
                const translatedButton = await translate(originalTexts.hero.button);

                console.log(`🎯 Hero: "${originalTexts.hero.title.substring(0, 30)}..." -> "${translatedTitle.substring(0, 30)}..."`);

                translated.hero = {
                    title: translatedTitle,
                    description: translatedDesc,
                    button: translatedButton
                };

                // Traduz outras seções
                translated.projects = {
                    title: await translate(originalTexts.projects.title)
                };

                translated.services = {
                    title: await translate(originalTexts.services.title)
                };

                translated.technologies = {
                    title: await translate(originalTexts.technologies.title),
                    description: await translate(originalTexts.technologies.description)
                };

                translated.about = {
                    title: await translate(originalTexts.about.title),
                    description: await translate(originalTexts.about.description)
                };

                translated.testimonials = {
                    title: await translate(originalTexts.testimonials.title),
                    description: await translate(originalTexts.testimonials.description)
                };

                translated.contact = {
                    title: await translate(originalTexts.contact.title)
                };

                console.log('✅ Tradução completa!');
                setTranslatedTexts(translated);

            } catch (error) {
                console.error('❌ Erro na tradução:', error);
                setTranslatedTexts(originalTexts);
            }
        };

        translateAllTexts();
    }, [language, translate]);

    // Função para abrir o modal
    const openModal = (project) => {
        setSelectedProject(project);
        setModalAnimation('enter');
        setModalOpen(true);
        // Impede scroll do body quando modal estiver aberto
        document.body.style.overflow = 'hidden';
    };

    // Função para fechar o modal
    const closeModal = () => {
        setModalAnimation('exit');
        setTimeout(() => {
            setModalOpen(false);
            setSelectedProject(null);
            document.body.style.overflow = 'auto';
        }, 300); // Tempo igual à duração da animação
    };

    // Fechar modal com ESC
    useEffect(() => {
        const handleEscKey = (e) => {
            if (e.key === 'Escape' && modalOpen) {
                closeModal();
            }
        };

        document.addEventListener('keydown', handleEscKey);
        return () => document.removeEventListener('keydown', handleEscKey);
    }, [modalOpen]);

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

    const redirectToWhatsApp = () => {
        // Seu número com 2 noves (66996399303)
        const phoneNumber = '5566996399303'; // Adicione o código do país (55 para Brasil)
        const message = encodeURIComponent("Olá, eu gostei de seus projetos gostaria de saber mais informações!");
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

        // Redireciona para o WhatsApp
        window.open(whatsappUrl, '_blank');
    };

    // Mostrar loading enquanto traduz
    if (isTranslating || !translatedTexts) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent mx-auto mb-4"></div>
                    <p className="text-white">Traduzindo conteúdo...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            <TranslationLoader />
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
                    <h1 className="text-3xl md:text-5xl text-white text-center mb-8"
                        dangerouslySetInnerHTML={{ __html: texts.hero.title }}
                    />
                    <p className="text-1xl md:text-[16px] text-[hsl(0,0%,90%)] w-80 md:w-150 text-center mb-8">
                        {texts.hero.description}
                    </p>
                    <button
                        onClick={redirectToWhatsApp}
                        className='flex items-center justify-center bg-white text-black px-5 py-5 mb-3 md:mb-3 cursor-pointer relative overflow-hidden group transition-all duration-300 mx-auto'
                    >
                        <span className="relative text-[14px] z-10 transition-colors duration-300 delay-100 group-hover:text-white group-active:text-white active:delay-0">
                            {texts.hero.button}
                        </span>
                        <span className="absolute inset-y-0 left-0 w-0 bg-black transition-all duration-500 ease-out group-hover:w-full group-active:w-full"></span>
                        <span className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-0 group-active:opacity-30 active:opacity-30 bg-black"></span>
                    </button>

                    <div
                        ref={contentSectionRef}
                        className="flex relative items-center justify-center w-auto md:w-auto md:mt-30 mb-3 md:mb-0 bg-black/5 backdrop-blur-[120px] px-1 py-1 md:font-medium rounded-full"
                    >
                        {texts.navItems.map((item) => (
                            <ul key={item.id}>
                                <button
                                    onClick={() => handleNavigate(item.id)}
                                    className={`flex text-[10px] md:text-[14px] px-2 py-2 sm:px-4 md:py-3 rounded-full cursor-pointer transition-all duration-300 ${!isHeroSectionVisible && activeSection === item.id
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
                                {texts.projects.title}
                            </h1>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {templatesData.slice(0, 3).map((template, index) => (
                                <div
                                    key={template.id}
                                    className="group block transition-transform duration-300 cursor-pointer"
                                    onClick={() => openModal(template)}
                                >
                                    <div className="flex flex-col gap-4 group-hover:shadow-2xl group-active:shadow-2xl border border-gray-300 mb-1 md:mb-1 rounded-lg break-inside-avoid transition-all duration-300 hover:border-gray-400">
                                        <div className="overflow-hidden h-47 relative rounded-lg break-inside-avoid">
                                            <div className="relative w-full h-full">
                                                <img
                                                    src={template.img}
                                                    alt='image'
                                                    className="absolute inset-0 w-full min-h-107 h-full object-cover transition-transform duration-2000 ease-out transform translate-y-0 group-hover:-translate-y-[56%] group-active:-translate-y-[56%]"
                                                />
                                            </div>
                                            <div className="absolute bottom-2 flex flex-row justify-between items-center w-full px-3">
                                                <h1 className='text-[14px] font-medium bg-black/40 text-white backdrop-blur-lg p-2 opacity-0 group-hover:opacity-100 group-active:opacity-100 rounded-full transition-all duration-300'>
                                                    {template.title}
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Modal Component */}
                    {modalOpen && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

                            {/* Overlay simples */}
                            <div
                                className="absolute inset-0 bg-black/70"
                                onClick={closeModal}
                            />

                            {/* Modal */}
                            <div
                                className={`relative w-full max-w-4xl bg-neutral-900 rounded-xl border border-neutral-800 shadow-lg transition-all duration-200
      ${modalAnimation === 'enter' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                            >

                                {/* Header */}
                                <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800">
                                    <h2 className="text-lg font-semibold text-white">
                                        {selectedProject?.title}
                                    </h2>

                                    <button
                                        onClick={closeModal}
                                        className="text-neutral-400 hover:text-white transition"
                                    >
                                        ✕
                                    </button>
                                </div>

                                {/* Conteúdo */}
                                <div className="p-6 overflow-y-auto max-h-[75vh]">

                                    {/* Imagem */}
                                    <img
                                        src={selectedProject?.img}
                                        alt="Projeto"
                                        className="w-full rounded-lg mb-6 object-cover"
                                    />

                                    {/* Descrição */}
                                    <p className="text-neutral-300 leading-relaxed mb-6">
                                        {selectedProject?.detailedDescription}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {selectedProject?.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 text-sm bg-neutral-800 text-neutral-300 rounded-md"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Ações */}
                                    <div className="flex gap-4">
                                        {selectedProject?.linkDemo && (
                                            <a
                                                href={selectedProject.linkDemo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 text-center py-3 rounded-lg bg-white text-black font-medium hover:bg-neutral-200 transition"
                                            >
                                                Ver Demo
                                            </a>
                                        )}

                                        {selectedProject?.linkGithub && (
                                            <a
                                                href={selectedProject.linkGithub}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 text-center py-3 rounded-lg border border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500 transition"
                                            >
                                                GitHub
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </section>

                {/* SEÇÃO DESIGN INTELLIGENCE */}
                <section
                    id="design"
                    ref={sectionRefs.design}
                    className="min-h-screen flex items-center justify-center md:items-start md:justify-start bg-[hsl(0,8%,12%)] text-white relative overflow-hidden px-5 md:px-10 md:py-20"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex flex-col mt-10 md:mt-20 gap-5">
                            <h1 className="pasbile-font text-center md:text-left text-2xl md:text-4xl md:w-90">{texts.services.title}</h1>
                            <div className="grid grid-cols-1 md:grid-cols-3 columns-1 gap-4 md:gap-6 space-y-4">
                                {servicesToDisplay.map((item) => (
                                    <div key={item.id} className="relative rounded-2xl overflow-hidden break-inside-avoid mb-4 md:mb-6">
                                        <div className="absolute max-w-full w-full max-h-full h-full bg-gradient-to-b from-black to-black/0"></div>
                                        <img
                                            src={item.img}
                                            alt='image'
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
                                    {texts.technologies.title}
                                </h1>
                                <div className="space-y-5 lg:w-2/5 z-10">
                                    <p className="text-center md:text-left text-[16px] lg:text-lg text-white/90">
                                        {texts.technologies.description}
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

                {/* SOBRE MIM */}
                <section
                    id="seo"
                    ref={sectionRefs.seo}
                    className='flex items-start justify-start bg-black text-white relative overflow-hidden md:px-10 md:py-10 transition-all duration-1000 ease-in-out pb-20'
                >
                    <div className="w-full max-w-7xl mx-auto mt-10 md:mt-0 px-5 md:px-0">
                        <div className="flex flex-col md:mt-20 gap-8">
                            <div className="flex flex-col justify-between items-center lg:items-center gap-8">
                                <h1 className="clarkson-font text-center text-4xl lg:text-5xl lg:w-1/2">
                                    {texts.about.title}
                                </h1>
                                <p className="text-center text-[14px] md:text-[18px] lg:w-1/2">
                                    {texts.about.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/** Testemunhas */}
                <section
                    id="tools"
                    ref={sectionRefs.tools}
                    className='min-h-screen flex items-start justify-start text-white relative overflow-hidden md:px-10 md:py-10 transition-all duration-1000 ease-in-out'
                >
                    <div className="flex flex-row justify-between items-center w-full mt-10 md:mt-0 mb-6 md:mb-0">
                        <div className="flex flex-col md:mt-20 gap-5 w-full px-4 lg:px-8">
                            <div className="flex flex-col justify-between items-start lg:items-center gap-6 mb-10">
                                <h1 className="clarkson-font text-center text-4xl lg:text-5xl lg:w-1/3">
                                    {texts.testimonials.title}
                                </h1>
                                <div className="space-y-5 lg:w-2/5 z-10">
                                    <p className="text-center text-[16px] lg:text-lg text-white/90">
                                        {texts.testimonials.description}
                                    </p>
                                </div>
                            </div>

                            <div className="">
                                <div className="grid grid-cols-1 md:grid-cols-4 columns-1 gap-4 md:gap-6 space-y-4 md:space-y-6">
                                    {testemonial.map((item, index) => (
                                        <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                                            <div className="w-20 h-20 overflow-hidden rounded-full mb-5">
                                                <img src={item.img} alt='image' className='w-full h-auto rounded-full select-none pointer-events-none' />
                                            </div>
                                            <div className="flex flex-col">
                                                <h1 className='text-base md:text-[18px] font-medium text-white drop-shadow-lg mb-0'>
                                                    {item.title}
                                                </h1>
                                                <span className='text-base md:text-[14px] text-amber-200 drop-shadow-lg mb-3'>
                                                    {item.tag}
                                                </span>
                                                <p className='text-base md:text-[14px] text-white drop-shadow-lg mb-3'>
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className='flex items-center justify-center text-white relative overflow-hidden md:px-10 md:py-10 transition-all duration-1000 ease-in-out pb-0 bg-black'>
                    <div className="w-full max-w-7xl md:max-h-180 mx-auto mt-10 md:mt-0 px-5 md:px-0">
                        <div className="flex flex-col md:mt-20 gap-8 items-center">
                            <div className="flex flex-col justify-between items-center lg:items-center gap-8 z-10">
                                <h1 className="text-center text-4xl lg:text-6xl lg:w-130">
                                    {texts.contact.title}
                                </h1>
                            </div>

                            <div className="flex items-center justify-center min-w-80 md:min-w-200 mb-0 md:mb-10">
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