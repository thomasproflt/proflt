import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const Login = ({ isOpen, onClose }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { login, register } = useAuth();

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        if (!isLogin && formData.password !== formData.confirmPassword) {
            setError('As senhas não coincidem');
            setLoading(false);
            return;
        }

        try {
            let result;
            if (isLogin) {
                result = await login(formData.email, formData.password);
            } else {
                result = await register(formData.name, formData.email, formData.password);
            }

            if (result.success) {
                onClose();
                setFormData({
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                });
            } else {
                setError(result.message || 'Erro ao realizar operação');
            }
        } catch (err) {
            setError('Erro de conexão com o servidor');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/5 backdrop-blur-sm">
            <div className="relative w-full max-w-sm rounded-xl border border-white/20 bg-black p-6 shadow-2xl">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Título */}
                <h1 className="mb-6 text-center text-2xl font-semibold text-white">
                    {isLogin ? 'Bem-vindo de volta' : 'Criar nova conta'}
                </h1>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                        <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm">
                            {error}
                        </div>
                    )}

                    {!isLogin && (
                        <div>
                            <label htmlFor="name" className="mb-1 block text-sm text-gray-300">Nome</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Seu nome completo"
                                autoComplete="name"
                                className="py-2.5 w-full rounded-lg border border-gray-600 bg-gray-700 px-4 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 focus:outline-none"
                                required={!isLogin}
                            />
                        </div>
                    )}

                    <div>
                        <label htmlFor="email" className="mb-1 block text-sm text-gray-300">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="seu@email.com"
                            autoComplete="email"
                            className="py-2.5 w-full rounded-lg border border-gray-600 bg-gray-700 px-4 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 focus:outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="mb-1 block text-sm text-gray-300">Senha</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            autoComplete={isLogin ? "current-password" : "new-password"}
                            className="py-2.5 w-full rounded-lg border border-gray-600 bg-gray-700 px-4 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 focus:outline-none"
                            required
                        />
                    </div>

                    {!isLogin && (
                        <div>
                            <label htmlFor="confirmPassword" className="mb-1 block text-sm text-gray-300">Confirmar Senha</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="••••••••"
                                autoComplete="new-password"
                                className="py-2.5 w-full rounded-lg border border-gray-600 bg-gray-700 px-4 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 focus:outline-none"
                                required={!isLogin}
                            />
                        </div>
                    )}

                    {isLogin && (
                        <div className="text-right">
                            <a href="#" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors">Esqueceu a senha?</a>
                        </div>
                    )}

                    {/*<button
                        type="submit"
                        disabled={loading}
                        className="py-2.5 font-medium w-full rounded-lg bg-indigo-600 text-white transition-all duration-300 hover:bg-indigo-700 hover:shadow-[0_0_20px_4px] hover:shadow-indigo-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                </svg>
                                Processando...
                            </span>
                        ) : (
                            isLogin ? 'Entrar' : 'Criar Conta'
                        )}
                    </button>*/}
                    <button
                        type="submit"
                        disabled={loading}
                        className='flex items-center justify-center bg-white text-black px-5 py-5 w-full cursor-pointer relative overflow-hidden group transition-all duration-300 mx-auto'
                    >
                        <span className="relative z-10 transition-colors duration-300 delay-100 group-hover:text-white group-active:text-white active:delay-0">
                            {loading ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                    </svg>
                                    Processando...
                                </span>
                            ) : (
                                isLogin ? 'LOG IN' : 'Create Account'
                            )}
                        </span>
                        <span className="absolute inset-y-0 left-0 w-0 bg-[hsl(0,0%,10%)] transition-all duration-500 ease-out group-hover:w-full group-active:w-full"></span>
                        <span className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-0 group-active:opacity-30 active:opacity-30 bg-black"></span>
                    </button>
                </form>

                {/* Divider */}
                <div className="relative my-6 text-center">
                    <div className="absolute top-1/2 right-0 h-px w-2/5 -translate-y-1/2 transform bg-transparent"></div>
                </div>

                {/* Social Login Buttons */}
                <div className="flex relative items-center justify-center gap-2">
                    <button
                        type="button"
                        className="flex px-2.5 py-2.5 items-center justify-center gap-2 rounded-lg bg-white/5 text-gray-300 transition-colors duration-300 hover:bg-white/7 hover:text-white cursor-pointer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                            <path
                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                fill="#9ca3af"
                            ></path>
                        </svg>
                    </button>

                    <button
                        type="button"
                        className="flex px-2.5 py-2.5 items-center justify-center gap-2 rounded-lg bg-white/5 text-gray-300 transition-colors duration-300 hover:bg-white/7 hover:text-white cursor-pointer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20" height="20">
                            <path fill="#FFC107"
                                d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917">
                            </path>
                            <path fill="#FF3D00"
                                d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691">
                            </path>
                            <path fill="#4CAF50"
                                d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44">
                            </path>
                            <path fill="#1976D2"
                                d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917">
                            </path>
                        </svg>
                    </button>
                </div>

                {/* Terms and Policy */}
                <p className="mt-6 text-center text-sm text-gray-400">
                    Ao clicar em {isLogin ? 'entrar' : 'criar conta'}, você concorda com nossos
                    <a href="#" className="mx-1 text-indigo-400 hover:text-indigo-300 transition-colors">Termos de Serviço</a>
                    e <a href="#" className="mx-1 text-indigo-400 hover:text-indigo-300 transition-colors">Política de Privacidade</a>.
                </p>

                {/* Toggle Login/Register */}
                <div className="mt-4 text-center">
                    <button
                        type="button"
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-sm text-gray-400 hover:text-indigo-400 transition-colors"
                    >
                        {isLogin ? 'Não tem uma conta? Registre-se' : 'Já tem uma conta? Entre aqui'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;