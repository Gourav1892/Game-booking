'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            // Handle registration logic here
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-[#050b14] text-white font-mono flex flex-col items-center justify-center relative overflow-hidden selection:bg-purple-500/30 py-10">
            {/* Background Texture/Grid */}
            <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            ></div>

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-blue-900/30 rounded-tl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-blue-900/30 rounded-br-3xl"></div>

            {/* Header Identity */}
            <div className="z-10 mb-8 text-center space-y-2">
                <Link href="/" className="flex flex-col items-center group cursor-pointer">
                    <div className="flex items-center justify-center gap-3 text-white mb-1">
                        <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4.5 12a7.5 7.5 0 0015 0 7.5 7.5 0 00-15 0zM12 2.25a9.75 9.75 0 019.75 9.75c0 5.385-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25z" />
                            <path d="M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z" />
                        </svg>
                        <span className="text-2xl font-bold tracking-[0.15em] font-sans">ANTIGRAVITY // PRT</span>
                    </div>
                    <h2 className="text-[10px] text-blue-500/80 tracking-[0.4em] font-bold uppercase">New Operator Registration</h2>
                </Link>
            </div>

            {/* Main Hexagon Container */}
            <div className="relative z-10 w-full max-w-[450px] px-4">

                {/* Hexagon Border SVG (Taller for Register) */}
                <div className="absolute inset-0 -m-[2px] pointer-events-none z-0 filter drop-shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                    <svg width="100%" height="100%" viewBox="0 0 450 750" preserveAspectRatio="none" className="stroke-[#1e293b] fill-[#080c14]/90 stroke-[1px]">
                        <path d="M225 0 L450 100 L450 650 L225 750 L0 650 L0 100 Z" />
                        <path d="M225 2 L448 101 L448 649 L225 748 L2 649 L2 101 Z" className="stroke-blue-600/30 fill-none" />
                    </svg>
                </div>

                <div className="relative z-10 py-12 px-12 clip-hex-tall">

                    {/* Header Lines */}
                    <div className="flex justify-center mb-8 items-center opacity-80">
                        <div className="h-[1px] w-8 bg-blue-800/50"></div>
                        <span className="mx-4 text-[10px] text-blue-600 tracking-widest font-bold">INIT PROFILE</span>
                        <div className="h-[1px] w-8 bg-blue-800/50"></div>
                    </div>

                    <form onSubmit={handleRegister} className="space-y-5">
                        {/* Name Input */}
                        <div className="space-y-1">
                            <label className="text-[10px] text-blue-500 font-bold tracking-[0.1em] uppercase block pl-1">Operator Name</label>
                            <div className="relative group">
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full bg-[#05080f] border border-[#1e293b] text-blue-100 pl-4 pr-10 py-3 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-[#070b14] transition-all placeholder:text-blue-900/30 tracking-widest font-mono rounded-[4px]"
                                    placeholder="JOHN DOE"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* Email Input */}
                        <div className="space-y-1">
                            <label className="text-[10px] text-blue-500 font-bold tracking-[0.1em] uppercase block pl-1">Comm Link (Email)</label>
                            <div className="relative group">
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full bg-[#05080f] border border-[#1e293b] text-blue-100 pl-4 pr-10 py-3 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-[#070b14] transition-all placeholder:text-blue-900/30 tracking-widest font-mono rounded-[4px]"
                                    placeholder="OPERATOR@MAIL.COM"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* Phone Input */}
                        <div className="space-y-1">
                            <label className="text-[10px] text-blue-500 font-bold tracking-[0.1em] uppercase block pl-1">Frequency (Phone)</label>
                            <div className="relative group">
                                <input
                                    type="tel"
                                    name="phone"
                                    className="w-full bg-[#05080f] border border-[#1e293b] text-blue-100 pl-4 pr-10 py-3 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-[#070b14] transition-all placeholder:text-blue-900/30 tracking-widest font-mono rounded-[4px]"
                                    placeholder="+1 555-0199"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div className="space-y-1">
                            <label className="text-[10px] text-blue-500 font-bold tracking-[0.1em] uppercase block pl-1">Secure Key</label>
                            <div className="relative group">
                                <input
                                    type="password"
                                    name="password"
                                    className="w-full bg-[#05080f] border border-[#1e293b] text-blue-100 pl-4 pr-10 py-3 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-[#070b14] transition-all placeholder:text-blue-900/30 tracking-widest font-mono rounded-[4px]"
                                    placeholder="••••••••••••"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* Confirm Input */}
                        <div className="space-y-1">
                            <label className="text-[10px] text-blue-500 font-bold tracking-[0.1em] uppercase block pl-1">Verify Key</label>
                            <div className="relative group">
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    className="w-full bg-[#05080f] border border-[#1e293b] text-blue-100 pl-4 pr-10 py-3 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-[#070b14] transition-all placeholder:text-blue-900/30 tracking-widest font-mono rounded-[4px]"
                                    placeholder="••••••••••••"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* Terms */}
                        <label className="flex items-start gap-3 cursor-pointer py-2 group">
                            <div className="relative mt-0.5">
                                <input type="checkbox" className="peer sr-only" required />
                                <div className="w-3 h-3 border border-blue-500/50 bg-[#05080f] peer-checked:bg-blue-500 peer-checked:border-blue-500 transition-all"></div>
                            </div>
                            <span className="text-[9px] text-blue-500/60 uppercase tracking-wide group-hover:text-blue-400 transition-colors">
                                Accept Protocols & <Link href="/terms" className="text-blue-500 hover:text-white underline decoration-blue-500/30">TOS</Link>
                            </span>
                        </label>

                        {/* Action Button */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="relative w-full group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-[#a855f7] to-[#8b5cf6] transform skew-x-[-10deg] rounded-md blur-[2px] opacity-75 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative bg-gradient-to-r from-[#9333ea] to-[#7c3aed] w-full py-4 transform skew-x-[-10deg] rounded-sm border-t border-purple-400/30 shadow-[0_0_20px_rgba(147,51,234,0.3)] group-hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] transition-all">
                                    <div className="transform skew-x-[10deg] flex items-center justify-center gap-2 text-white font-bold tracking-[0.15em] text-sm uppercase">
                                        {isLoading ? 'Processing...' : 'Initialize'}
                                    </div>
                                </div>
                            </button>
                        </div>
                    </form>

                    {/* Recovery Links */}
                    <div className="mt-8 flex justify-center text-[9px] uppercase tracking-widest text-blue-600/50">
                        <Link href="/login" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                            <span>← Return to Auth Portal</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="fixed bottom-0 w-full p-6 flex justify-between items-end text-[9px] text-blue-900/40 font-mono uppercase tracking-widest select-none pointer-events-none">
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-900 rounded-full animate-pulse shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
                    Global Server Online
                </div>
                <div className="text-right">
                    <div>Latency: 24ms</div>
                    <div>Region: NA-East</div>
                    <div className="mt-1">© 2024 Antigravity Labs</div>
                </div>
            </div>

            <style jsx global>{`
                .clip-hex-tall {
                    clip-path: polygon(50% 0, 100% 15%, 100% 85%, 50% 100%, 0 85%, 0 15%);
                }
            `}</style>
        </div>
    );
}
