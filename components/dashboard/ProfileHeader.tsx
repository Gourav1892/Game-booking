import React from 'react';
import Image from 'next/image';

export default function ProfileHeader() {
    return (
        <div className="relative mb-12 pt-24 pb-10">
            {/* Hex/Grid Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-blue-900/10 to-transparent"></div>
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(56, 189, 248, 0.3) 1px, transparent 0)`,
                        backgroundSize: '24px 24px'
                    }}
                ></div>
                {/* Decorative Elements */}
                <div className="absolute top-20 right-10 w-32 h-32 border border-blue-500/10 rounded-full animate-pulse-slow"></div>
                <div className="absolute top-10 left-10 w-24 h-24 border border-purple-500/10 rounded-full animate-pulse-slower"></div>
            </div>

            <div className="relative px-6 flex flex-col md:flex-row items-end md:items-center gap-8">
                {/* Avatar */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur opacity-50 group-hover:opacity-80 transition-opacity animate-pulse"></div>
                    <div className="relative w-32 h-32 rounded-full p-1 bg-[#050b14] ring-2 ring-white/10 group-hover:ring-cyan-500/50 transition-all duration-500">
                        <div className="w-full h-full rounded-full overflow-hidden relative">
                            <Image
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                                alt="Profile"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer backdrop-blur-[2px]">
                                <span className="text-xl">✏️</span>
                                <span className="text-[10px] font-mono text-cyan-400 mt-1 uppercase tracking-widest">Edit ID</span>
                            </div>
                        </div>
                    </div>
                    {/* Status Indicator */}
                    <div className="absolute bottom-1 right-2 w-5 h-5 bg-[#050b14] rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse"></div>
                    </div>
                </div>

                {/* Info */}
                <div className="flex-1 pb-2 space-y-2 text-center md:text-left">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold font-[Poppins] text-white tracking-tight drop-shadow-lg">
                            ALEX <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">GAMER</span>
                        </h1>
                        <p className="font-mono text-blue-300/60 text-sm tracking-[0.2em] uppercase">
                            ID: 8X-9291-ALPHA
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-4">
                        <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-xs text-blue-400 font-mono">
                            LEVEL 42
                        </span>
                        <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-xs text-purple-400 font-mono">
                            ELITE MEMBER
                        </span>
                    </div>
                </div>

                {/* Stats HUD */}
                <div className="flex gap-6 md:gap-10 pb-2 bg-[#0F1219]/50 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
                    <div className="text-center group">
                        <div className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors group-hover:scale-110 transform duration-300">42</div>
                        <div className="text-[10px] text-zinc-500 uppercase tracking-[0.15em] mt-1 group-hover:text-cyan-500/70">Hours</div>
                    </div>
                    <div className="w-px bg-white/10" />
                    <div className="text-center group">
                        <div className="text-3xl font-bold text-white group-hover:text-purple-400 transition-colors group-hover:scale-110 transform duration-300">12</div>
                        <div className="text-[10px] text-zinc-500 uppercase tracking-[0.15em] mt-1 group-hover:text-purple-500/70">Missions</div>
                    </div>
                    <div className="w-px bg-white/10" />
                    <div className="text-center group">
                        <div className="text-3xl font-bold text-white group-hover:text-amber-400 transition-colors group-hover:scale-110 transform duration-300">8</div>
                        <div className="text-[10px] text-zinc-500 uppercase tracking-[0.15em] mt-1 group-hover:text-amber-500/70">Badges</div>
                    </div>
                </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent mt-10"></div>
        </div>
    );
}
