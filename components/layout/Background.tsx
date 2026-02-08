'use client';

export default function Background() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Base Gradient */}
            <div className="absolute inset-0 bg-[#050b14]" />

            {/* Noise Texture */}
            <div
                className="absolute inset-0 opacity-[0.4] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                    maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'
                }}
            />

            {/* Animated Scanline */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent h-[20vh] w-full animate-scanline blur-sm opacity-30" />

            {/* Ambient Glows */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3" />
        </div>
    );
}
