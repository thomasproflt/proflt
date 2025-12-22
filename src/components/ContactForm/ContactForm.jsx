// ContactForm.jsx
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);
        setStatusMessage('Enviando...');

        // Substitua pelos SEUS IDs do EmailJS
        const serviceID = 'service_nwmab28';
        const templateID = 'template_ej43j3q';
        const publicKey = 'Fz8lfMOyzTp84i0wW';

        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then(() => {
                setStatusMessage('✅ Mensagem enviada com sucesso!');
                form.current.reset(); // Limpa o formulário
            }, (error) => {
                console.error('Erro no envio:', error);
                setStatusMessage('❌ Falha ao enviar. Tente novamente.');
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
            <h2 className="text-2xl font-bold text-white text-center">Entre em Contato</h2>

            <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-white/80">
                    Nome *
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                    placeholder="Seu nome"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-white/80">
                    Email *
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                    placeholder="seu@email.com"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-white/80">
                    Mensagem *
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all resize-none"
                    placeholder="Escreva sua mensagem aqui..."
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={isSending}
                className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 active:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
                {isSending ? 'Enviando...' : 'Enviar Mensagem'}
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