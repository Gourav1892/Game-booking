'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Header from '@/components/common/Header';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [isSidebarOpen] = useState(true);

    const navItems = [
        { name: 'Overview', href: '/admin', icon: '📊' },
        { name: 'Devices', href: '/admin/devices', icon: '🖥️' },
        { name: 'Games', href: '/admin/games', icon: '🎮' },
        { name: 'Bookings', href: '/admin/bookings', icon: '📅' },
        { name: 'Settings', href: '/admin/settings', icon: '⚙️' },
    ];

    return (
        <div className="min-h-screen bg-[#050b14] flex flex-col">
            {/* Reusing Main Header for consistency, but could be specific Admin Header */}
            <Header />

            <div className="flex flex-1 pt-20">
                {/* Sidebar */}
                <aside className={`w-64 bg-[#0F1219] border-r border-white/5 fixed h-full z-20 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
                    <div className="p-6">
                        <div className="text-xs font-mono text-blue-500 tracking-widest uppercase mb-1">Command Center</div>
                        <div className="text-xl font-bold text-white">ADMIN CONSOLE</div>
                    </div>

                    <nav className="mt-6 px-4 space-y-2">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive
                                        ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20'
                                        : 'text-slate-400 hover:bg-white/5 hover:text-white'
                                        }`}
                                >
                                    <span>{item.icon}</span>
                                    <span className="font-medium">{item.name}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="absolute bottom-24 px-6 w-full">
                        <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-white/5 p-4 rounded-xl">
                            <div className="text-xs text-slate-400 mb-1">System Status</div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                <span className="text-green-400 font-bold text-sm">ONLINE</span>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className={`flex-1 p-8 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
                    {children}
                </main>
            </div>
        </div>
    );
}
