import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#050b14] flex items-center justify-center px-4">
            <div className="max-w-2xl w-full text-center">
                {/* 404 Animation */}
                <div className="mb-12 relative">
                    <div className="text-[180px] font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 leading-none font-mono">
                        404
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] animate-pulse-slow"></div>
                    </div>
                </div>

                {/* Error Message */}
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-[Poppins]">
                    Page Not Found
                </h1>
                <p className="text-blue-200/60 mb-12 font-mono text-lg max-w-md mx-auto">
                    The page you're looking for doesn't exist or has been moved.
                </p>

                {/* Tech Details */}
                <div className="mb-12 inline-block bg-[#0F1219] border border-white/10 px-6 py-4 rounded-lg">
                    <div className="flex items-center gap-3 text-xs font-mono">
                        <span className="text-red-500">ERROR_CODE:</span>
                        <span className="text-blue-400">404_NOT_FOUND</span>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="relative group px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-bold hover:from-cyan-500 hover:to-blue-500 transition-all clip-chamfer"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg blur"></div>
                        <span className="relative">Return Home</span>
                    </Link>
                    <Link
                        href="/book"
                        className="px-8 py-4 bg-[#0F1219] border border-white/20 text-white rounded-lg font-bold hover:border-cyan-500/40 transition-all"
                    >
                        Book a Station
                    </Link>
                </div>

                {/* Tech Decoration */}
                <div className="mt-16 pt-16 border-t border-white/10">
                    <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
                        <div>
                            <div className="text-2xl font-bold text-white font-mono mb-1">0ms</div>
                            <div className="text-[10px] text-blue-400/40 uppercase tracking-wider">Latency</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white font-mono mb-1">100%</div>
                            <div className="text-[10px] text-blue-400/40 uppercase tracking-wider">Online</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white font-mono mb-1">24/7</div>
                            <div className="text-[10px] text-blue-400/40 uppercase tracking-wider">Support</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
