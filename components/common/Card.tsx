import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
    return (
        <div
            className={`
        bg-[var(--surface)] rounded-xl p-6
        border border-[var(--surface)]
        ${hover ? 'transition-all duration-300 hover:border-[var(--primary)] hover:shadow-lg hover:shadow-[var(--primary)]/20 hover:-translate-y-1 cursor-pointer' : ''}
        ${className}
      `}
        >
            {children}
        </div>
    );
}
