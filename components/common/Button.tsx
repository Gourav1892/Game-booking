import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'cyber';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export default function Button({
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...props
}: ButtonProps) {
    const isSciFi = ['primary', 'secondary', 'outline', 'cyber'].includes(variant);

    const sizeStyles = {
        sm: 'px-4 py-1.5 text-xs',
        md: 'px-8 py-3 text-sm',
        lg: 'px-10 py-4 text-base'
    };

    if (isSciFi) {
        const glowColor = variant === 'primary' ? 'from-purple-600 to-blue-600' :
            variant === 'secondary' ? 'from-cyan-500 to-blue-500' :
                'from-transparent to-transparent';

        const borderColor = variant === 'outline' ? 'border-cyan-500/50' : 'border-white/10';

        // "Cyber" variant specific skew
        const containerSkew = variant === 'cyber' ? '-skew-x-[20deg]' : '-skew-x-[12deg]';
        const contentSkew = variant === 'cyber' ? 'skew-x-[20deg]' : 'skew-x-[12deg]';

        return (
            <button
                className={`relative group inline-block ${className}`}
                {...props}
            >
                {/* Glitch Effect Layers (Primary/Cyber only) */}
                {(variant === 'primary' || variant === 'cyber') && (
                    <>
                        <div className={`absolute inset-0 bg-red-500/20 translate-x-[2px] opacity-0 group-hover:opacity-100 transition-opacity mix-blend-screen ${containerSkew}`}></div>
                        <div className={`absolute inset-0 bg-blue-500/20 -translate-x-[2px] opacity-0 group-hover:opacity-100 transition-opacity mix-blend-screen ${containerSkew}`}></div>
                    </>
                )}

                {/* Glow/Background Layer */}
                <div className={`absolute inset-0 transform ${containerSkew} transition-all duration-300
                    ${variant === 'outline' ? 'bg-blue-500/10 group-hover:bg-blue-500/20' :
                        variant === 'cyber' ? 'bg-blue-900/40 border border-blue-400/30 hover:bg-blue-800/60' :
                            `bg-gradient-to-r ${glowColor} opacity-90 group-hover:opacity-100`}
                    ${variant === 'primary' ? 'shadow-[0_0_20px_rgba(147,51,234,0.5)] group-hover:shadow-[0_0_35px_rgba(147,51,234,0.8)]' : ''}
                    ${variant === 'cyber' ? 'shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]' : ''}
                `}></div>

                {/* Border Layer */}
                <div className={`absolute inset-0 transform ${containerSkew} border ${borderColor} ${variant === 'outline' ? 'border-dashed' : 'border-t'}`}></div>

                {/* Cyber Corner Accents */}
                {variant === 'cyber' && (
                    <>
                        <div className="absolute top-0 right-0 w-2 h-2 bg-blue-400 shadow-[0_0_5px_rgba(59,130,246,0.8)]"></div>
                        <div className="absolute bottom-0 left-0 w-2 h-2 bg-blue-400 shadow-[0_0_5px_rgba(59,130,246,0.8)]"></div>
                    </>
                )}

                {/* Content Layer */}
                <div className={`relative ${sizeStyles[size]} transform ${containerSkew} flex items-center justify-center gap-2 font-bold tracking-[0.15em] uppercase text-white`}>
                    <div className={`transform ${contentSkew}`}>
                        {children}
                    </div>
                </div>
            </button>
        );
    }

    return (
        <button
            className={`font-semibold transition-all duration-200 rounded-lg ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
