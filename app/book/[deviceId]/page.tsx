'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Button from '@/components/common/Button';
import Link from 'next/link';

import { useMockData } from '@/context/MockDataContext';

export default function GameSelectionPage() {
    const params = useParams();
    const deviceId = params.deviceId as string;
    const [filter, setFilter] = useState('All');
    const { games } = useMockData();

    // Mapping device IDs to platform names for filtering
    const platformMap: Record<string, 'PC' | 'PS5' | 'XBOX'> = {
        'pc': 'PC',
        'ps5': 'PS5',
        'xbox': 'XBOX'
    };

    const targetPlatform = platformMap[deviceId];

    // Filter games based on selected device (platform)
    const availableGames = games.filter(game =>
        game.platforms.includes(targetPlatform) &&
        (filter === 'All' || game.genre === filter)
    );

    const genres = ['All', 'FPS', 'RPG', 'Sports', 'Action', 'MOBA'];

    const getDeviceName = (id: string) => {
        switch (id) {
            case 'pc': return 'High-End PC';
            case 'ps5': return 'PlayStation 5';
            case 'xbox': return 'Xbox Series X';
            default: return 'Unknown Terminal';
        }
    }

    return (
        <div className="min-h-screen bg-[#050b14]">
            <Header />

            <section className="pt-32 pb-20 px-4">
                <div className="container mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-block px-4 py-1 rounded-full bg-blue-900/20 border border-blue-500/20 text-blue-400 text-xs font-mono tracking-widest mb-4">
                            STEP 02: SOFTWARE SELECTION
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                            SELECT GAME
                        </h1>
                        <p className="text-blue-200/60 text-lg font-mono">
                            Platform: <span className="text-blue-400 font-bold">{getDeviceName(deviceId)}</span>
                        </p>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {genres.map(genre => (
                            <button
                                key={genre}
                                onClick={() => setFilter(genre)}
                                className={`px-6 py-2 rounded-full text-sm font-mono tracking-wider transition-all border ${filter === genre
                                    ? 'bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-900/50'
                                    : 'bg-[#0F1219] border-white/10 text-slate-400 hover:border-blue-500/50 hover:text-white'
                                    }`}
                            >
                                {genre}
                            </button>
                        ))}
                    </div>

                    {/* Games Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {availableGames.map(game => (
                            <div key={game.id} className="group bg-[#0F1219] border border-white/5 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                                {/* Game Cover Placeholder */}
                                <div className="aspect-[3/4] bg-gradient-to-b from-slate-800 to-slate-900 flex items-center justify-center relative group-hover:opacity-90 transition-opacity">
                                    <span className="text-6xl filter drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                        {game.image}
                                    </span>

                                    {/* Overlay Action */}
                                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                                        <Link href={`/book/${deviceId}/${game.id}`}>
                                            <Button size="sm" className="shadow-lg shadow-blue-500/50">
                                                Select Game
                                            </Button>
                                        </Link>
                                    </div>
                                </div>

                                <div className="p-4">
                                    <h3 className="font-bold text-white mb-1 truncate">{game.title}</h3>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-blue-400 font-mono">{game.genre}</span>
                                        <div className="flex gap-1">
                                            <div className="flex gap-1">
                                                <span className="text-[10px] bg-white/5 px-1.5 py-0.5 rounded text-slate-400 border border-white/5">
                                                    {game.genre}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Back Button */}
                    <div className="mt-12 text-center">
                        <Link href="/book">
                            <Button variant="outline" className="opacity-50 hover:opacity-100">
                                ← Change Platform
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
