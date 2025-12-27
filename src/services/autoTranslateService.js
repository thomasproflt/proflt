import translate from 'translate';

// Configurar o translate
translate.engine = 'google'; // Usa Google Translate (free tier)
translate.key = null; // Não precisa de chave para uso básico

class AutoTranslateService {
    constructor() {
        this.cache = new Map();
        this.fallbackTranslations = {
            'en': {
                'Crio experiências web modernas<br /> que transformam ideias em produtos reais': 'I create modern web experiences<br /> that transform ideas into real products',
                'Crio experiências web modernas que transformam ideias em produtos reais': 'I create modern web experiences that transform ideas into real products',
                'Especializado em React, animações suaves e aplicações escaláveis com foco em performance e experiência do usuário.': 'Specialized in React, smooth animations and scalable applications with focus on performance and user experience.',
                'COMEÇAR AGORA': 'START NOW',
                'Projetos': 'Projects',
                'Serviços': 'Services',
                'Tecnologias': 'Technologies',
                'Sobre Mim': 'About Me',
                'Projetos em Destaque': 'Featured Projects',
                'Desenvolvimento Web Moderno': 'Modern Web Development',
                'Criação de interfaces web modernas, responsivas e bem estruturadas, focadas em performance, usabilidade e experiência do usuário.': 'Creation of modern, responsive and well-structured web interfaces focused on performance, usability and user experience.',
                'Landing Pages Profissionais': 'Professional Landing Pages',
                'Desenvolvimento de landing pages focadas em apresentar serviços, fortalecer a marca e gerar contato de forma clara e eficiente.': 'Development of landing pages focused on presenting services, strengthening the brand and generating contact clearly and efficiently.',
                'Integrações e Funcionalidades Web': 'Web Integrations and Functionalities',
                'Implementação de funcionalidades web que conectam interfaces a serviços, formulários e APIs, garantindo uma aplicação funcional e preparada para crescimento.': 'Implementation of web functionalities that connect interfaces to services, forms and APIs, ensuring a functional application ready for growth.',
                'Stack de Tecnologias': 'Technology Stack',
                'Tecnologias que utilizo para desenvolver interfaces modernas e aplicações web funcionais.': 'Technologies I use to develop modern interfaces and functional web applications.',
                'Frontend': 'Frontend',
                'Estilização & UI': 'Styling & UI',
                'Backend & Integrações': 'Backend & Integrations',
                'Deploy & Ferramentas': 'Deployment & Tools',
                'Sobre Mim': 'About Me',
                'Sou desenvolvedor web com foco na criação de interfaces modernas, funcionais e bem estruturadas. Trabalho com tecnologias atuais para desenvolver aplicações rápidas, responsivas e escaláveis, sempre priorizando performance e experiência do usuário.': 'I am a web developer focused on creating modern, functional and well-structured interfaces. I work with current technologies to develop fast, responsive and scalable applications, always prioritizing performance and user experience.',
                'O que as pessoas dizem': 'What People Say',
                'Descubra a experiência que os usuários estiveram com o meu trabalho.': 'Discover the experience users have had with my work.',
                'Contato': 'Contact',
                '© 2025 Thomas, Inc.': '© 2025 Thomas, Inc.',
                // Adicione mais traduções de fallback aqui
                'Plataforma de IA para criação de frames e animações inteligentes.': 'AI platform for creating frames and smart animations.',
                'Hub de colaboração para times criativos.': 'Collaboration hub for creative teams.',
                'Sistema de gestão de conteúdo para redes sociais.': 'Content management system for social media.',
                'Uma aplicação web completa que utiliza inteligência artificial para gerar frames e animações customizadas. O sistema inclui editor integrado, exportação em múltiplos formatos e API para integração.': 'A complete web application that uses artificial intelligence to generate custom frames and animations. The system includes integrated editor, multiple format export and API for integration.',
                'Plataforma de colaboração em tempo real para equipes criativas, com ferramentas de compartilhamento, revisão e gestão de projetos.': 'Real-time collaboration platform for creative teams, with sharing, review and project management tools.',
                'Ferramenta completa para agendamento, publicação e análise de conteúdo em múltiplas plataformas de redes sociais.': 'Complete tool for scheduling, publishing and analyzing content on multiple social media platforms.',
                'Editor visual integrado': 'Integrated visual editor',
                'Exportação múltipla': 'Multiple export',
                'API REST': 'REST API',
                'Dashboard analytics': 'Dashboard analytics',
                'Colaboração em tempo real': 'Real-time collaboration',
                'Gestão de projetos': 'Project management',
                'Compartilhamento seguro': 'Secure sharing',
                'Chat integrado': 'Integrated chat',
                'Agendamento inteligente': 'Smart scheduling',
                'Análises detalhadas': 'Detailed analytics',
                'Multiplataforma': 'Multi-platform',
                'Relatórios PDF': 'PDF reports'
            },
            'es': {
                'Crio experiências web modernas que transformam ideias em produtos reais': 'Creo experiencias web modernas que transforman ideas en productos reales',
                'COMEÇAR AGORA': 'COMENZAR AHORA',
                'Projetos': 'Proyectos',
                'Serviços': 'Servicios',
                'Tecnologias': 'Tecnologías',
                'Sobre Mim': 'Sobre Mí'
            },
            'fr': {
                'Crio experiências web modernas que transformam ideias em produtos reais': 'Je crée des expériences web modernes qui transforment les idées en produits réels',
                'COMEÇAR AGORA': 'COMMENCER MAINTENANT',
                'Projetos': 'Projets',
                'Serviços': 'Services',
                'Tecnologias': 'Technologies',
                'Sobre Mim': 'À Propos'
            }
        };
    }

    async translateText(text, targetLang, sourceLang = 'pt') {
        if (targetLang === sourceLang || !text?.trim()) {
            return text;
        }

        const cleanText = text.trim();
        const cacheKey = `${sourceLang}-${targetLang}-${cleanText}`;

        // Verifica cache
        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey);
        }

        // Usa fallback ou retorna original
        const translated = this.fallbackTranslations[targetLang]?.[cleanText] || cleanText;

        this.cache.set(cacheKey, translated);
        return translated;
    }

    async translateWithMyMemory(text, targetLang, sourceLang) {
        // MyMemory Translation API (gratuita)
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}`;

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            const data = await response.json();

            if (data.responseData && data.responseData.translatedText) {
                return data.responseData.translatedText;
            }

            return text;
        } catch (error) {
            console.warn('MyMemory API error:', error);
            throw error;
        }
    }
}

export default new AutoTranslateService();