import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import HomeNavbar from '../../components/HomeNavbar/HomeNavbar';
import Img from '../../assets/fernando-hernandez-CosHjyONRk8-unsplash.jpg';
import ImgTemplate1 from '../../assets/template-one.png';
import ImgTemplate2 from '../../assets/template-two.png';
import ImgTemplate3 from '../../assets/image-asset-3.webp';
import ImgDesignIntelligence1 from '../../assets/solidpixels-iq2RzBMj-Wg-unsplash.jpg';
import ImgDesignIntelligence2 from '../../assets/azwedo-l-lc-uSx99gjoSoc-unsplash.jpg';
import ImgDesignIntelligence3 from '../../assets/azwedo-l-lc-6uR0dkm3ya0-unsplash.jpg';
import ImgCreativeTools1 from '../../assets/responsive-desktop-1500w.webp';
import ImgCreativeTools2 from '../../assets/media-desktop-1500w.webp';
import ImgCreativeTools3 from '../../assets/styles-desktop-1500w.webp';
import ImgCreativeTools4 from '../../assets/drafts-desktop-1500w.webp';
import ImgAccessBuild1 from '../../assets/domains-desktop-1500w.webp';
import ImgAccessBuild2 from '../../assets/professional-email-desktop-1500w.webp';
import ImgAccessBuild3 from '../../assets/online-store-desktop-3-1500w.webp';
import TestemonialPhoto1 from '../../assets/carrie-discord-feedb.webp';
import Footer from '../../components/Footer/Footer';
import ContactForm from '../../components/ContactForm/ContactForm';
import { useTranslation } from '../../contexts/TranslationContext';
import TranslationLoader from '../../components/TranslationLoader/TranslationLoader';

const Home = () => {
    const { language, translate, isTranslating } = useTranslation();
    const [translatedTexts, setTranslatedTexts] = useState(null);
    const [activeSection, setActiveSection] = useState('');
    const [showHomeNavbar, setShowHomeNavbar] = useState(false);
    const [isHeroSectionVisible, setIsHeroSectionVisible] = useState(true);
    const [isToolsSectionActive, setIsToolsSectionActive] = useState(false);
    const [isSeoSectionActive, setIsSeoSectionActive] = useState(false);
    const [cardRotations, setCardRotations] = useState({});
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

    // Use translated texts or fallback to originals
    const texts = translatedTexts || originalTexts;

    // Templates data - agora com função de tradução
    const [templatesData, setTemplatesData] = useState([
        {
            id: 1,
            link: '/template1',
            img: ImgTemplate1,
            title: 'FRAMES IA',
            description: 'Plataforma de IA para criação de frames e animações inteligentes.',
            detailedDescription: 'Uma aplicação web completa que utiliza inteligência artificial para gerar frames e animações customizadas. O sistema inclui editor integrado, exportação em múltiplos formatos e API para integração.',
            tags: ['React', 'Node.js', 'Python', 'TailwindCSS', 'Framer Motion'],
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
            title: 'KLIPSAN',
            description: 'Sistema de gestão de conteúdo para redes sociais.',
            detailedDescription: 'Ferramenta completa para agendamento, publicação e análise de conteúdo em múltiplas plataformas de redes sociais.',
            tags: ['Next.js', 'Firebase', 'TailwindCSS', 'Chart.js', 'OAuth'],
            features: ['Agendamento inteligente', 'Análises detalhadas', 'Multiplataforma', 'Relatórios PDF'],
            linkDemo: 'https://klipsan.demo.com',
            linkGithub: 'https://github.com/seuusuario/klipsan'
        },
    ]);

    // Design intelligence data
    const [designIntelligence, setDesignIntelligence] = useState([
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
    }, [language, translate]); // Adicione translate na dependência

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
                    <p className="text-1xl md:text-[16px] text-[hsl(0,0%,90%)] w-150 text-center mb-8">
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
                            {templatesData.slice(0, 2).map((template, index) => (
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
                                                    alt={template.title}
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
                        <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center p-2 sm:p-4">
                            {/* Overlay com gradiente sofisticado */}
                            <div
                                className={`absolute inset-0 transition-all duration-500 ${modalAnimation === 'enter'
                                    ? 'opacity-100 backdrop-blur-sm'
                                    : 'opacity-0 backdrop-blur-none'
                                    }`}
                                style={{
                                    background: 'radial-gradient(circle at center, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.9) 100%)'
                                }}
                                onClick={closeModal}
                            />

                            {/* Modal Content - Design Moderno */}
                            <div
                                className={`relative w-full max-w-5xl max-h-[95vh] md:max-h-[90vh] bg-gradient-to-br from-gray-900 to-black rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-gray-800 transition-all duration-500 transform ${modalAnimation === 'enter'
                                    ? 'translate-y-0 opacity-100 scale-100'
                                    : 'translate-y-10 opacity-0 scale-95'
                                    }`}
                                style={{
                                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.75), 0 0 0 1px rgba(255,255,255,0.1)'
                                }}
                            >
                                {/* Decorative Top Border */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

                                {/* Close Button Moderno */}
                                <button
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-lg flex items-center justify-center hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-xl border border-gray-700 hover:border-gray-600 hover:scale-110 group"
                                    style={{
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
                                    }}
                                >
                                    <svg
                                        className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                {/* Scrollable Content */}
                                <div className="overflow-y-auto max-h-[95vh] md:max-h-[90vh] custom-scrollbar">
                                    {selectedProject && (
                                        <>
                                            {/* Hero Image com Overlay Gradiente */}
                                            <div className="relative h-56 md:h-72 lg:h-96">
                                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent z-10" />
                                                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 z-5" />
                                                <img
                                                    src={selectedProject.img}
                                                    alt={selectedProject.title}
                                                    className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-transform duration-700"
                                                />

                                                {/* Title Section com efeito glassmorphism */}
                                                <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-8 lg:p-10">
                                                    <div className="backdrop-blur-xl bg-gray-900/60 rounded-2xl p-6 border border-gray-700/50 shadow-2xl max-w-3xl">
                                                        <div className="flex items-center gap-3 mb-3">
                                                            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse" />
                                                            <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">
                                                                {language === 'pt' ? 'Projeto em Destaque' : 'Featured Project'}
                                                            </span>
                                                        </div>
                                                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
                                                            {selectedProject.title}
                                                        </h2>
                                                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                                                            {selectedProject.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Content Container */}
                                            <div className="relative -mt-10 md:-mt-16 lg:-mt-20 z-30">
                                                {/* Floating Content Card */}
                                                <div className="bg-gradient-to-b from-gray-900 to-black rounded-t-3xl p-6 md:p-10 lg:p-12">
                                                    {/* Stats Bar */}
                                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 p-6 bg-gray-800/30 rounded-2xl backdrop-blur-sm border border-gray-700/50">
                                                        <div className="text-center">
                                                            <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                                                                {selectedProject.tags.length}
                                                            </div>
                                                            <div className="text-sm text-gray-400">Tecnologias</div>
                                                        </div>
                                                        <div className="text-center">
                                                            <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                                                                {selectedProject.features.length}
                                                            </div>
                                                            <div className="text-sm text-gray-400">Funcionalidades</div>
                                                        </div>
                                                        <div className="text-center">
                                                            <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                                                                {selectedProject.linkDemo ? 'Online' : 'Em breve'}
                                                            </div>
                                                            <div className="text-sm text-gray-400">Status</div>
                                                        </div>
                                                        <div className="text-center">
                                                            <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                                                                Fullstack
                                                            </div>
                                                            <div className="text-sm text-gray-400">Tipo</div>
                                                        </div>
                                                    </div>

                                                    {/* Tags Section Moderna */}
                                                    <div className="mb-10">
                                                        <div className="flex items-center gap-3 mb-6">
                                                            <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                                                            <h3 className="text-2xl font-bold text-white">Stack Tecnológico</h3>
                                                        </div>
                                                        <div className="flex flex-wrap gap-3">
                                                            {selectedProject.tags.map((tag, index) => (
                                                                <span
                                                                    key={index}
                                                                    className="px-4 py-2.5 bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 text-sm font-medium rounded-xl border border-gray-700 hover:border-blue-500/50 hover:from-gray-700 hover:to-gray-800 transition-all duration-300 cursor-default group"
                                                                    style={{
                                                                        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.3)'
                                                                    }}
                                                                >
                                                                    <div className="flex items-center gap-2">
                                                                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover:animate-pulse" />
                                                                        {tag}
                                                                    </div>
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Description Section */}
                                                    <div className="mb-10">
                                                        <div className="flex items-center gap-3 mb-6">
                                                            <div className="w-2 h-8 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full" />
                                                            <h3 className="text-2xl font-bold text-white">Sobre o Projeto</h3>
                                                        </div>
                                                        <div className="bg-gray-800/30 rounded-2xl p-6 md:p-8 border border-gray-700/50 backdrop-blur-sm">
                                                            <p className="text-gray-300 leading-relaxed text-lg">
                                                                {selectedProject.detailedDescription}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* Features Grid Moderna */}
                                                    <div className="mb-10">
                                                        <div className="flex items-center gap-3 mb-6">
                                                            <div className="w-2 h-8 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full" />
                                                            <h3 className="text-2xl font-bold text-white">Funcionalidades Principais</h3>
                                                        </div>
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                            {selectedProject.features.map((feature, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-5 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:scale-[1.02] cursor-default"
                                                                    style={{
                                                                        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.2)'
                                                                    }}
                                                                >
                                                                    <div className="flex items-start gap-4">
                                                                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-blue-500/30 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                                                                            <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                                            </svg>
                                                                        </div>
                                                                        <div>
                                                                            <span className="text-white font-medium text-lg">{feature}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Links Section Moderna */}
                                                    <div className="pt-8 border-t border-gray-800">
                                                        <div className="flex flex-col sm:flex-row gap-4">
                                                            {selectedProject.linkDemo && (
                                                                <a
                                                                    href={selectedProject.linkDemo}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="group flex-1 flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                                                                    style={{
                                                                        boxShadow: '0 8px 20px rgba(59, 130, 246, 0.3)'
                                                                    }}
                                                                >
                                                                    <svg className="w-6 h-6 mr-3 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                                    </svg>
                                                                    Acessar Demo
                                                                </a>
                                                            )}
                                                            {selectedProject.linkGithub && (
                                                                <a
                                                                    href={selectedProject.linkGithub}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="group flex-1 flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 rounded-xl hover:from-gray-700 hover:to-gray-800 hover:text-white transition-all duration-300 font-semibold text-lg border border-gray-700 hover:border-gray-600 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                                                                >
                                                                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                                    </svg>
                                                                    Código Fonte
                                                                </a>
                                                            )}
                                                        </div>

                                                        {/* View Project Button */}
                                                        <div className="mt-6 text-center">
                                                            <button
                                                                onClick={closeModal}
                                                                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium"
                                                            >
                                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                                                </svg>
                                                                Voltar para projetos
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
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
                                            <img src={item.img} alt={item.title} className='w-20 h-auto rounded-full' />
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