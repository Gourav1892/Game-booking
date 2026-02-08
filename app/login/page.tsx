'use client';

import { useState } from 'react';
import Link from 'next/link';
import { loginSchema, type LoginInput } from '@/lib/validations';
import { sanitizeString } from '@/lib/security';

export default function LoginPage() {
    const [formData, setFormData] = useState<LoginInput>({ identifier: '', password: '' });
    const [errors, setErrors] = useState<Partial<Record<keyof LoginInput, string>>>({});
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});

        // Validate input
        const result = loginSchema.safeParse(formData);

        if (!result.success) {
            const fieldErrors: Partial<Record<keyof LoginInput, string>> = {};
            result.error.issues.forEach((issue) => {
                const field = issue.path[0] as keyof LoginInput;
                fieldErrors[field] = issue.message;
            });
            setErrors(fieldErrors);
            return;
        }

        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            // Handle login logic here
        }, 2000);
    };

    const handleInputChange = (field: keyof LoginInput, value: string) => {
        // Sanitize input
        const sanitized = sanitizeString(value);
        setFormData({ ...formData, [field]: sanitized });

        // Clear error for this field
        if (errors[field]) {
            setErrors({ ...errors, [field]: undefined });
        }
    };

    return (
        <div className="min-h-screen bg-[#050b14] text-white font-mono flex flex-col items-center justify-center relative overflow-hidden selection:bg-purple-500/30">
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
            <div className="z-10 mb-16 text-center space-y-2">
                <Link href="/" className="flex flex-col items-center group cursor-pointer">
                    <div className="flex items-center justify-center gap-3 text-white mb-1">
                        <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4.5 12a7.5 7.5 0 0015 0 7.5 7.5 0 00-15 0zM12 2.25a9.75 9.75 0 019.75 9.75c0 5.385-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25z" />
                            <path d="M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z" />
                        </svg>
                        <span className="text-2xl font-bold tracking-[0.15em] font-sans">ANTIGRAVITY // PRT</span>
                    </div>
                    <h2 className="text-[10px] text-blue-500/80 tracking-[0.4em] font-bold uppercase">Performance Real-Time Tracking</h2>
                </Link>
            </div>

            {/* Main Hexagon Container */}
            <div className="relative z-10 w-full max-w-[420px] px-4">

                {/* Hexagon Border SVG */}
                <div className="absolute inset-0 -m-[2px] pointer-events-none z-0 filter drop-shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                    <svg width="100%" height="100%" viewBox="0 0 420 500" preserveAspectRatio="none" className="stroke-[#1e293b] fill-[#080c14]/90 stroke-[1px]">
                        <path d="M210 0 L420 120 L420 380 L210 500 L0 380 L0 120 Z" />
                        <path d="M210 2 L418 121 L418 379 L210 498 L2 379 L2 121 Z" className="stroke-blue-600/30 fill-none" />
                    </svg>
                </div>

                <div className="relative z-10 py-16 px-12 clip-hex-main">

                    {/* Auth Portal Label */}
                    <div className="flex justify-center mb-12 items-center opacity-80">
                        <div className="h-[1px] w-12 bg-blue-800/50"></div>
                        <span className="mx-4 text-[10px] text-blue-600 tracking-widest font-bold">AUTH PORTAL</span>
                        <div className="h-[1px] w-12 bg-blue-800/50"></div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Identifier Input */}
                        <div className="space-y-2">
                            <label className="text-[10px] text-blue-500 font-bold tracking-[0.1em] uppercase block pl-1">Layer ID</label>
                            <div className="relative group">
                                <input
                                    type="text"
                                    className={`w-full bg-[#05080f] border ${errors.identifier ? 'border-red-500/50' : 'border-[#1e293b]'} text-blue-100 pl-4 pr-10 py-3.5 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-[#070b14] transition-all placeholder:text-blue-900/30 tracking-widest font-mono rounded-[4px]`}
                                    placeholder="COMP_TAG_0X"
                                    value={formData.identifier}
                                    onChange={e => handleInputChange('identifier', e.target.value)}
                                    required
                                />
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-900/50">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg>
                                </div>
                            </div>
                            {errors.identifier && (
                                <p className="text-xs text-red-400 pl-1 font-mono">{errors.identifier}</p>
                            )}
                        </div>

                        {/* Password Input */}
                        <div className="space-y-2">
                            <label className="text-[10px] text-blue-500 font-bold tracking-[0.1em] uppercase block pl-1">Access Key</label>
                            <div className="relative group">
                                <input
                                    type="password"
                                    className={`w-full bg-[#05080f] border ${errors.password ? 'border-red-500/50' : 'border-[#1e293b]'} text-blue-100 pl-4 pr-10 py-3.5 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-[#070b14] transition-all placeholder:text-blue-900/30 tracking-widest font-mono rounded-[4px]`}
                                    placeholder="••••••••••••"
                                    value={formData.password}
                                    onChange={e => handleInputChange('password', e.target.value)}
                                    required
                                />
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-900/50">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1.5a.75.75 0 01.75.75V7.5h-1.5V2.25A.75.75 0 0112 1.5zM11.25 17.5v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-1.5 0zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM4.501 19.5h14.998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                                </div>
                            </div>
                            {errors.password && (
                                <p className="text-xs text-red-400 pl-1 font-mono">{errors.password}</p>
                            )}
                        </div>

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
                                        {isLoading ? 'Syncing...' : 'Enter Arena'}
                                    </div>
                                </div>
                            </button>
                        </div>
                    </form>

                    {/* Recovery Links */}
                    <div className="mt-12 flex justify-between text-[9px] uppercase tracking-widest text-blue-600/50">
                        <Link href="/register" className="hover:text-blue-400 transition-colors">Create Profile</Link>
                        <Link href="/forgot-password" className="hover:text-blue-400 transition-colors">Recovery Protocol</Link>
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
                .clip-hex-main {
                    clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
                }
            `}</style>
        </div>
    );
}
