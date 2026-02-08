'use client';

import React, { useEffect } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    size?: 'sm' | 'md' | 'lg';
}

export default function Modal({ isOpen, onClose, title, children, size = 'md' }: ModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const sizes = {
        sm: 'max-w-md',
        md: 'max-w-2xl',
        lg: 'max-w-4xl'
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#050b14]/90 backdrop-blur-md animate-fadeIn"
            onClick={onClose}
        >
            <div
                className={`
          ${sizes[size]} w-full mx-4 relative
          bg-[#0F1219]/90 border border-blue-500/20
          shadow-[0_0_50px_rgba(59,130,246,0.1)]
          animate-slideUp
          clip-chamfer
        `}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Tech Deco Lines */}
                <div className="absolute top-0 left-0 w-32 h-[1px] bg-gradient-to-r from-blue-500 to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-32 h-[1px] bg-gradient-to-l from-blue-500 to-transparent"></div>
                <div className="absolute top-0 right-0 w-2 h-8 border-r border-blue-500/50"></div>
                <div className="absolute bottom-0 left-0 w-2 h-8 border-l border-blue-500/50"></div>

                {/* Header */}
                {title && (
                    <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/2">
                        <div className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
                            <h3 className="text-xl font-bold font-mono text-white tracking-wider uppercase">{title}</h3>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-slate-500 hover:text-white transition-colors p-2 hover:bg-white/5"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                )}

                {/* Content */}
                <div className="p-8">
                    {children}
                </div>
            </div>

            <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
        </div>
    );
}
