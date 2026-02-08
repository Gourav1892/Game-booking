import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export default function Input({
    label,
    error,
    className = '',
    ...props
}: InputProps) {
    return (
        <div className="w-full group">
            {label && (
                <label className="block text-xs font-mono uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-2 group-focus-within:text-[var(--primary)] transition-colors">
                    {label}
                </label>
            )}
            <div className="relative">
                {/* Decorative Corner Borders */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-500/50 pointer-events-none transition-all duration-300 group-focus-within:w-full group-focus-within:h-full group-focus-within:border-blue-500 group-focus-within:shadow-[0_0_10px_rgba(59,130,246,0.3)]"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-blue-500/50 pointer-events-none transition-all duration-300 group-focus-within:w-full group-focus-within:h-full group-focus-within:border-blue-500"></div>

                <input
                    className={`
              w-full px-4 py-3 
              bg-[var(--surface)]/50 backdrop-blur-sm border-b border-[var(--text-secondary)]/30
              text-[var(--text-primary)] font-mono placeholder-[var(--text-secondary)]/50
              focus:outline-none focus:bg-[var(--surface)] focus:border-b-blue-500
              transition-all duration-200
              disabled:opacity-50 disabled:cursor-not-allowed
              clip-chamfer
              ${error ? 'border-b-[var(--error)] text-[var(--error)]' : ''}
              ${className}
            `}
                    {...props}
                />
            </div>
            {error && (
                <p className="mt-1 text-xs text-[var(--error)] font-mono uppercase tracking-wide flex items-center gap-1">
                    <span className="text-sm">⚠️</span> {error}
                </p>
            )}
        </div>
    );
}
