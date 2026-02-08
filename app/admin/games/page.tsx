'use client';

import { useState } from 'react';
import Button from '@/components/common/Button';
import { useMockData } from '@/context/MockDataContext';

export default function AdminGamesPage() {
    const { games } = useMockData();
    const [isAdding, setIsAdding] = useState(false);

    // Mock active count (static for now)
    const getActiveCount = () => {
        // In a real app this would query active sessions
        return 2;
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Game Library</h1>
                    <p className="text-slate-400">Manage available games and platform licenses.</p>
                </div>
                <Button onClick={() => setIsAdding(!isAdding)}>+ Add New Game</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {games.map((game) => (
                    <div key={game.id} className="bg-[#0F1219] border border-white/5 p-4 rounded-xl group hover:border-blue-500/30 transition-colors">
                        {/* Mock Cover Art */}
                        <div className="aspect-[3/4] bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                            <div className="text-4xl">{game.image}</div>
                            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="mb-2 px-4 py-2 bg-blue-600 rounded-lg text-xs font-bold text-white">Edit Details</button>
                                <button className="px-4 py-2 bg-red-500/20 text-red-400 border border-red-500/20 rounded-lg text-xs font-bold hover:bg-red-500/30">Remove</button>
                            </div>
                        </div>

                        <h3 className="text-lg font-bold text-white mb-1 truncate">{game.title}</h3>
                        <p className="text-xs text-blue-400 mb-3">{game.genre}</p>

                        <div className="flex flex-wrap gap-1 mb-4">
                            {game.platforms.map(p => (
                                <span key={p} className="text-[10px] px-1.5 py-0.5 border border-white/10 rounded text-slate-400">
                                    {p}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center text-xs text-slate-500 pt-3 border-t border-white/5">
                            <span>Copies: <span className="text-white font-bold">12</span></span>
                            <span>Active: <span className="text-green-400 font-bold">{getActiveCount()}</span></span>
                        </div>
                    </div>
                ))}

                {/* Add New Placeholder */}
                <button
                    onClick={() => setIsAdding(true)}
                    className="border-2 border-dashed border-white/5 rounded-xl flex flex-col items-center justify-center text-slate-500 hover:border-blue-500/30 hover:text-blue-400 transition-all p-8 min-h-[300px]"
                >
                    <span className="text-4xl mb-2">+</span>
                    <span className="font-bold">Add Game</span>
                </button>
            </div>
        </div>
    );
}
