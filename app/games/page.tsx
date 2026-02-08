'use client';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { useMockData } from '@/context/MockDataContext';

export default function GamesListPage() {
    const { games } = useMockData();

    // Group games by genre for better organization
    const genres = Array.from(new Set(games.map(g => g.genre)));

    return (
        <div className="min-h-screen bg-[#050b14]">
            <Header />

            <section className="pt-32 pb-20 px-4">
                <div className="container mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1 rounded-full bg-blue-900/20 border border-blue-500/20 text-blue-400 text-xs font-mono tracking-widest mb-4">
                            GAME LIBRARY v2.0
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                                AVAILABLE TITLES
                            </span>
                        </h1>
                        <p className="text-blue-200/60 max-w-2xl mx-auto font-mono">
                            All games are pre-installed and ready to play. Just book your station and jump right in.
                        </p>
                    </div>

                    {/* Games by Genre */}
                    <div className="space-y-16 max-w-7xl mx-auto">
                        {genres.map((genre) => {
                            const genreGames = games.filter(g => g.genre === genre);

                            return (
                                <div key={genre}>
                                    {/* Genre Header */}
                                    <div className="mb-8">
                                        <div className="flex items-center gap-4">
                                            <h2 className="text-2xl md:text-3xl font-bold text-white font-[Poppins]">
                                                {genre}
                                            </h2>
                                            <div className="h-[1px] flex-1 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                                            <span className="text-xs font-mono text-blue-400 bg-blue-900/20 px-3 py-1 rounded border border-blue-500/20">
                                                {genreGames.length} TITLES
                                            </span>
                                        </div>
                                    </div>

                                    {/* Games Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                        {genreGames.map((game) => (
                                            <div
                                                key={game.id}
                                                className="group relative bg-[#0F1219] border border-white/10 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                                            >
                                                {/* Game Cover/Icon */}
                                                <div className="aspect-[3/4] bg-gradient-to-br from-blue-900/20 to-purple-900/10 flex items-center justify-center relative overflow-hidden">
                                                    {/* Tech Grid Pattern */}
                                                    <div className="absolute inset-0 opacity-5"
                                                        style={{
                                                            backgroundImage: `linear-gradient(to right, rgba(56,189,248,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(56,189,248,0.3) 1px, transparent 1px)`,
                                                            backgroundSize: '20px 20px'
                                                        }}
                                                    ></div>

                                                    {/* Icon */}
                                                    <span className="text-6xl group-hover:scale-110 transition-transform duration-300 relative z-10">
                                                        {game.image}
                                                    </span>

                                                    {/* Hover Overlay */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                                        <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
                                                            Available on {game.platforms.join(', ')}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Game Info */}
                                                <div className="p-4">
                                                    <h3 className="text-white font-bold mb-1 group-hover:text-cyan-400 transition-colors truncate">
                                                        {game.title}
                                                    </h3>
                                                    <div className="flex flex-wrap gap-1 mt-2">
                                                        {game.platforms.map((platform) => (
                                                            <span
                                                                key={platform}
                                                                className="text-[9px] font-mono px-1.5 py-0.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded uppercase"
                                                            >
                                                                {platform}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Tech Corner Accent */}
                                                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-cyan-500/0 group-hover:border-cyan-500/50 transition-colors duration-300 rounded-tr-xl"></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Stats Footer */}
                    <div className="mt-24 text-center">
                        <div className="inline-flex items-center gap-8 bg-[#0F1219] border border-white/10 px-8 py-6 rounded-xl">
                            <div>
                                <div className="text-3xl font-bold text-white font-mono">{games.length}</div>
                                <div className="text-[10px] text-blue-400 uppercase tracking-widest mt-1">Total Games</div>
                            </div>
                            <div className="h-12 w-[1px] bg-white/10"></div>
                            <div>
                                <div className="text-3xl font-bold text-white font-mono">{genres.length}</div>
                                <div className="text-[10px] text-blue-400 uppercase tracking-widest mt-1">Genres</div>
                            </div>
                            <div className="h-12 w-[1px] bg-white/10"></div>
                            <div>
                                <div className="text-3xl font-bold text-white font-mono">3</div>
                                <div className="text-[10px] text-blue-400 uppercase tracking-widest mt-1">Platforms</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
