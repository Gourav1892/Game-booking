'use client';

import { useEffect, useState } from 'react';

export default function SplashScreen() {
    const [isVisible, setIsVisible] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 200);

        // Hide splash screen after delay
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2500);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div className={`fixed inset-0 z-50 bg-[#050b14] flex flex-col items-center justify-center transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>

            {/* Background Grid/Scanlines */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-500/20 animate-scanline shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
            </div>

            {/* Logo Container */}
            <div className="relative z-20 mb-12">
                <div className="relative">
                    <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 tracking-tighter animate-pulse filter drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                        PLAYBOX
                    </h1>
                    {/* Glitch Overlay */}
                    <h1 className="absolute top-0 left-0 text-6xl md:text-8xl font-black text-red-500/30 tracking-tighter animate-glitch opacity-50 mix-blend-screen" aria-hidden="true">
                        PLAYBOX
                    </h1>
                    <h1 className="absolute top-0 left-0 text-6xl md:text-8xl font-black text-blue-500/30 tracking-tighter animate-glitch opacity-50 mix-blend-screen animation-delay-200" aria-hidden="true">
                        PLAYBOX
                    </h1>
                </div>
                <p className="text-blue-400/60 font-mono text-center mt-4 tracking-[0.5em] text-sm uppercase">
                    System Initialization
                </p>
            </div>

            {/* Loading Bar */}
            <div className="w-64 h-1 bg-slate-800 rounded-full overflow-hidden relative">
                <div
                    className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all duration-300 ease-out relative"
                    style={{ width: `${Math.min(progress, 100)}%` }}
                >
                    <div className="absolute right-0 top-0 h-full w-2 bg-white/50 blur-[2px]"></div>
                </div>
            </div>

            {/* Tech Stats */}
            <div className="absolute bottom-10 left-0 w-full text-center">
                <p className="text-[10px] text-blue-500/40 font-mono">
                    V.1.0.4 • SECURE CONNECTION ESTABLISHED
                </p>
            </div>
        </div>
    );
}
