import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from '../../contexts/TranslationContext';

const ContactForm = () => {
    const form = useRef();
    const { language, translate } = useTranslation();
    const [isSending, setIsSending] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');
    
    // Textos padrão em português (idioma base)
    const defaultTexts = {
        title: 'Entre em Contato',
        labels: {
            name: 'Nome *',
            email: 'Email *',
            message: 'Mensagem *'
        },
        placeholders: {
            name: 'Seu nome',
            email: 'seu@email.com',
            message: 'Escreva sua mensagem aqui...'
        },
        button: 'Enviar Mensagem',
        sending: 'Enviando...',
        success: '✅ Mensagem enviada com sucesso!',
        error: '❌ Falha ao enviar. Tente novamente.'
    };
    
    const [translatedTexts, setTranslatedTexts] = useState(defaultTexts);

    // Traduz textos quando o idioma muda
    useEffect(() => {
        const translateTexts = async () => {
            if (language === 'pt') {
                // Se for português, usa os textos padrão
                setTranslatedTexts(defaultTexts);
                return;
            }
            
            try {
                // Traduz cada texto do objeto padrão
                const translated = {
                    title: await translate(defaultTexts.title),
                    labels: {
                        name: await translate(defaultTexts.labels.name),
                        email: await translate(defaultTexts.labels.email),
                        message: await translate(defaultTexts.labels.message)
                    },
                    placeholders: {
                        name: await translate(defaultTexts.placeholders.name),
                        email: await translate(defaultTexts.placeholders.email),
                        message: await translate(defaultTexts.placeholders.message)
                    },
                    button: await translate(defaultTexts.button),
                    sending: await translate(defaultTexts.sending),
                    success: await translate(defaultTexts.success),
                    error: await translate(defaultTexts.error)
                };
                
                setTranslatedTexts(translated);
            } catch (error) {
                console.error('Erro na tradução do ContactForm:', error);
                // Em caso de erro, mantém os textos em português
                setTranslatedTexts(defaultTexts);
            }
        };
        
        translateTexts();
    }, [language, translate]); // Remove defaultTexts da dependência

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);
        setStatusMessage(translatedTexts.sending);

        const serviceID = 'service_nwmab28';
        const templateID = 'template_ej43j3q';
        const publicKey = 'Fz8lfMOyzTp84i0wW';

        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then(() => {
                setStatusMessage(translatedTexts.success);
                form.current.reset();
            }, (error) => {
                console.error('Erro no envio:', error);
                setStatusMessage(translatedTexts.error);
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <form
            ref={form}
            onSubmit={sendEmail}
            className="relative flex flex-col w-full max-w-lg mx-auto p-8 bg-black/50 backdrop-blur-sm border border-white/20 rounded-2xl space-y-6"
        >
            {/*<h2 className="text-2xl font-bold text-white text-center">{translatedTexts.title}</h2>*/}

            <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-white/80">
                    {translatedTexts.labels.name}
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border-b border-white/20 text-white placeholder-white/40 outline-none transition-all"
                    placeholder={translatedTexts.placeholders.name}
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-white/80">
                    {translatedTexts.labels.email}
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border-b border-white/20 text-white placeholder-white/40 outline-none transition-all"
                    placeholder={translatedTexts.placeholders.email}
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-white/80">
                    {translatedTexts.labels.message}
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="w-full px-4 py-3 border-b border-white/20 text-white placeholder-white/40 outline-none transition-all resize-none"
                    placeholder={translatedTexts.placeholders.message}
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={isSending}
                className="w-full py-3 bg-white text-black font-semibold hover:bg-gray-200 active:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-all duration-300"
            >
                {isSending ? translatedTexts.sending : translatedTexts.button}
            </button>

            {statusMessage && (
                <p className={`text-center text-sm ${statusMessage.includes('✅') ? 'text-green-400' : 'text-red-400'}`}>
                    {statusMessage}
                </p>
            )}
        </form>
    );
};

export default ContactForm;