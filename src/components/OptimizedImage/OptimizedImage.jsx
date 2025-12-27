// src/components/OptimizedImage.jsx
import React from 'react';

/**
 * Componente de imagem otimizada com suporte a:
 * - AVIF (melhor compressão - até 50% menor que WebP)
 * - WebP (suporte amplo - 30% menor que JPG)
 * - JPG (fallback universal)
 * - srcset responsivo automático
 * - Lazy loading inteligente
 * - Placeholder enquanto carrega
 */

const OptimizedImage = ({
    // Nome base da imagem (sem extensão, sem "optimized/")
    // Exemplo: "fernando-hernandez-CosHjyONRk8-unsplash"
    src,

    // Alt obrigatório para acessibilidade
    alt,

    // Classes do Tailwind
    className = '',

    // Tamanhos responsivos
    sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',

    // Modo de carregamento
    loading = 'lazy',

    // Prioridade (use true para imagens LCP)
    priority = false,

    // Objeto de estilos inline
    style = {},

    // Placeholder enquanto carrega
    placeholder = true,

    // Cor do placeholder
    placeholderColor = 'rgba(120, 120, 120, 0.1)',

    // Efeito de blur no carregamento
    blurOnLoad = true,

    // Callback quando carrega
    onLoad,

    // Callback quando há erro
    onError,

    // Outras props
    ...props
}) => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [hasError, setHasError] = React.useState(false);

    // Validar src
    if (!src) {
        console.error('OptimizedImage: prop "src" é obrigatória');
        return null;
    }

    if (!alt) {
        console.warn('OptimizedImage: prop "alt" é recomendada para acessibilidade');
    }

    // Construir o caminho base
    // Remove "optimized/" se estiver no caminho
    const baseSrc = src.replace('optimized/', '').replace(/\.[^/.]+$/, '');
    const fullBasePath = `/assets/optimized/${baseSrc}`;

    // Handler para quando a imagem carrega
    const handleLoad = (e) => {
        setIsLoaded(true);
        if (onLoad) onLoad(e);
    };

    // Handler para erro
    const handleError = (e) => {
        setHasError(true);
        console.error(`OptimizedImage: Erro ao carregar ${src}`, e);
        if (onError) onError(e);
    };

    // Estilos para o container
    const containerStyle = {
        ...style,
        backgroundColor: placeholder && !isLoaded ? placeholderColor : 'transparent',
        overflow: 'hidden',
        position: 'relative',
    };

    // Estilos para a imagem (para efeito de blur)
    const imgStyle = {
        filter: blurOnLoad && !isLoaded ? 'blur(20px)' : 'none',
        transform: blurOnLoad && !isLoaded ? 'scale(1.1)' : 'scale(1)',
        transition: blurOnLoad ? 'filter 0.5s ease-out, transform 0.5s ease-out' : 'none',
    };

    return (
        <div
            className={`optimized-image-container ${className}`}
            style={containerStyle}
            data-src={baseSrc}
            data-loaded={isLoaded}
            data-priority={priority}
        >
            <picture>
                {/* AVIF - Melhor compressão (suporte moderno) */}
                <source
                    srcSet={`
            ${fullBasePath}-320.avif 320w,
            ${fullBasePath}-640.avif 640w,
            ${fullBasePath}-768.avif 768w,
            ${fullBasePath}-1024.avif 1024w,
            ${fullBasePath}-1920.avif 1920w
          `}
                    sizes={sizes}
                    type="image/avif"
                />

                {/* WebP - Excelente suporte (Chrome, Firefox, Edge) */}
                <source
                    srcSet={`
            ${fullBasePath}-320.webp 320w,
            ${fullBasePath}-640.webp 640w,
            ${fullBasePath}-768.webp 768w,
            ${fullBasePath}-1024.webp 1024w,
            ${fullBasePath}-1920.webp 1920w
          `}
                    sizes={sizes}
                    type="image/webp"
                />

                {/* JPG - Fallback universal (todos os browsers) */}
                <source
                    srcSet={`
            ${fullBasePath}-320.jpg 320w,
            ${fullBasePath}-640.jpg 640w,
            ${fullBasePath}-768.jpg 768w,
            ${fullBasePath}-1024.jpg 1024w,
            ${fullBasePath}-1920.jpg 1920w
          `}
                    sizes={sizes}
                    type="image/jpeg"
                />

                {/* Imagem fallback final */}
                <img
                    src={`${fullBasePath}-640.jpg`}
                    alt={alt || ''}
                    className={`optimized-image ${isLoaded ? 'loaded' : 'loading'}`}
                    style={imgStyle}
                    loading={priority ? 'eager' : loading}
                    decoding="async"
                    onLoad={handleLoad}
                    onError={handleError}
                    {...props}
                />
            </picture>

            {/* Placeholder sutil */}
            {placeholder && !isLoaded && !hasError && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-pulse">
                        <div className="w-8 h-8 border-2 border-gray-300/30 border-t-transparent rounded-full"></div>
                    </div>
                </div>
            )}

            {/* Erro state */}
            {hasError && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100/50 p-4">
                    <div className="text-red-500 mb-2">⚠️</div>
                    <div className="text-sm text-gray-600 text-center">
                        Imagem não carregada
                    </div>
                </div>
            )}

            {/* Estilos inline para performance */}
            <style jsx>{`
        .optimized-image-container {
          position: relative;
          overflow: hidden;
        }
        
        .optimized-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          animation: fadeIn 0.3s ease-out forwards;
        }
        
        .optimized-image.loaded {
          opacity: 1;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        /* Remove o blur gradualmente */
        .optimized-image.loading {
          opacity: 0.8;
        }
      `}</style>
        </div>
    );
};

/**
 * Componente para imagens de fundo otimizadas
 * Perfeito para hero sections e backgrounds
 */
export const OptimizedBackground = ({
    src,
    children,
    className = '',
    overlay = 'rgba(0, 0, 0, 0.3)',
    fixed = false,
    parallax = false,
    ...props
}) => {
    const baseSrc = src.replace('optimized/', '').replace(/\.[^/.]+$/, '');
    const fullBasePath = `/assets/optimized/${baseSrc}`;

    return (
        <div className={`relative overflow-hidden ${className}`} {...props}>
            <picture className="absolute inset-0 -z-10">
                {/* Mobile */}
                <source
                    srcSet={`
            ${fullBasePath}-320.avif 320w,
            ${fullBasePath}-640.avif 640w,
            ${fullBasePath}-1024.avif 1024w
          `}
                    media="(max-width: 1024px)"
                    type="image/avif"
                />
                <source
                    srcSet={`
            ${fullBasePath}-320.webp 320w,
            ${fullBasePath}-640.webp 640w,
            ${fullBasePath}-1024.webp 1024w
          `}
                    media="(max-width: 1024px)"
                    type="image/webp"
                />

                {/* Desktop */}
                <source
                    srcSet={`
            ${fullBasePath}-1024.avif 1024w,
            ${fullBasePath}-1920.avif 1920w
          `}
                    media="(min-width: 1025px)"
                    type="image/avif"
                />
                <source
                    srcSet={`
            ${fullBasePath}-1024.webp 1024w,
            ${fullBasePath}-1920.webp 1920w
          `}
                    media="(min-width: 1025px)"
                    type="image/webp"
                />

                {/* Fallback */}
                <source
                    srcSet={`
            ${fullBasePath}-320.jpg 320w,
            ${fullBasePath}-640.jpg 640w,
            ${fullBasePath}-1024.jpg 1024w
          `}
                    media="(max-width: 1024px)"
                    type="image/jpeg"
                />
                <source
                    srcSet={`
            ${fullBasePath}-1024.jpg 1024w,
            ${fullBasePath}-1920.jpg 1920w
          `}
                    media="(min-width: 1025px)"
                    type="image/jpeg"
                />

                <img
                    src={`${fullBasePath}-1024.jpg`}
                    alt=""
                    className={`
            w-full h-full object-cover
            ${fixed ? 'fixed' : 'absolute'}
            ${parallax ? 'transform translateZ(0)' : ''}
          `}
                    loading="eager"
                    decoding="async"
                />
            </picture>

            {/* Overlay opcional */}
            {overlay && (
                <div
                    className="absolute inset-0"
                    style={{ backgroundColor: overlay }}
                />
            )}

            {/* Conteúdo */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

/**
 * Componente para imagens em grid/modal
 * Com efeitos de hover e transições
 */
export const OptimizedImageCard = ({
    src,
    alt,
    title,
    description,
    onClick,
    className = '',
    hoverEffect = true,
    ...props
}) => {
    return (
        <div
            className={`
        group relative overflow-hidden rounded-xl cursor-pointer
        transform transition-all duration-300
        ${hoverEffect ? 'hover:scale-[1.02] hover:shadow-2xl' : ''}
        ${className}
      `}
            onClick={onClick}
            {...props}
        >
            <OptimizedImage
                src={src}
                alt={alt}
                className="w-full h-48 md:h-64 object-cover"
                blurOnLoad={true}
                placeholderColor="rgba(120, 120, 120, 0.05)"
            />

            {/* Overlay no hover */}
            {hoverEffect && (
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            )}

            {/* Conteúdo sobre a imagem */}
            {(title || description) && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    {title && (
                        <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
                    )}
                    {description && (
                        <p className="text-white/80 text-sm line-clamp-2">{description}</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default OptimizedImage;