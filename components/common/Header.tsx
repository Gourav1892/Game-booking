import Link from 'next/link';
import React from 'react';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
            {/* Glass Backdrop */}
            <div className="absolute inset-0 bg-[#050b14]/70 backdrop-blur-md border-b border-blue-900/30"></div>

            {/* Top Border Line */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 flex items-center justify-center">
                            <div className="absolute inset-0 bg-blue-600/20 clip-hex group-hover:bg-blue-600/40 transition-colors animate-pulse-slow"></div>
                            <div className="absolute inset-0 border-[0.5px] border-blue-400/30 clip-hex"></div>
                            <span className="relative text-xl text-blue-400">❖</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold tracking-[0.1em] font-[Poppins] text-white">
                                SquadX
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link
                            href="/login"
                            className="text-xs font-mono uppercase tracking-widest text-blue-300 hover:text-white transition-colors"
                        >
                            {'// Login'}
                        </Link>
                        <Link
                            href="/register"
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 clip-chamfer opacity-80 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative px-6 py-2.5 clip-chamfer border-t border-cyan-400/30 flex items-center justify-center gap-2">
                                <span className="text-xs font-bold uppercase tracking-[0.15em] text-white">Initialize</span>
                            </div>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-blue-400 p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <div className="w-6 flex flex-col items-end gap-1.5">
                            <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
                            <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
                            <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`}></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-50 bg-[#050b14]/95 backdrop-blur-xl transition-all duration-500 md:hidden flex flex-col items-center justify-center ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>

                {/* Close Button */}
                <button
                    className="absolute top-6 right-6 text-blue-400 p-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <span className="text-2xl font-mono">X</span>
                </button>

                {/* Decoration */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                <div className="absolute bottom-10 left-0 w-full text-center text-[10px] text-blue-500/20 font-mono tracking-[0.5em]">SQUADX SYSTEMS v2.0</div>

                <nav className="flex flex-col items-center gap-8 w-full max-w-xs">

                    <div className="h-px w-full bg-blue-500/30 my-4"></div>

                    <Link
                        href="/login"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-sm font-mono uppercase tracking-widest text-blue-300 mb-4"
                    >
                        {'// Login'}
                    </Link>

                    <Link
                        href="/register"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="w-full"
                    >
                        <div className="relative group w-full">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 clip-chamfer opacity-80"></div>
                            <div className="relative px-6 py-4 clip-chamfer border-t border-cyan-400/30 flex items-center justify-center gap-2">
                                <span className="text-sm font-bold uppercase tracking-[0.15em] text-white">Initialize System</span>
                            </div>
                        </div>
                    </Link>
                </nav>
            </div>
        </header>
    );
}
