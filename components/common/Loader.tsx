import React from 'react';

export default function Loader() {
    return (
        <div className="flex items-center justify-center">
            <div className="relative w-16 h-16">
                {/* Outer spinning ring */}
                <div className="absolute inset-0 border-4 border-[var(--primary)]/20 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-transparent border-t-[var(--primary)] rounded-full animate-spin"></div>

                {/* Inner spinning ring */}
                <div className="absolute inset-2 border-4 border-[var(--secondary)]/20 rounded-full"></div>
                <div className="absolute inset-2 border-4 border-transparent border-t-[var(--secondary)] rounded-full animate-spin-slow"></div>
            </div>

            <style jsx>{`
        @keyframes spin-slow {
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 2s linear infinite;
        }
      `}</style>
        </div>
    );
}

// Small inline loader
export function SmallLoader() {
    return (
        <div className="inline-block w-5 h-5 border-2 border-[var(--primary)]/20 border-t-[var(--primary)] rounded-full animate-spin"></div>
    );
}
