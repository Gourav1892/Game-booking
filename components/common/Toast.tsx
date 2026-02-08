'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface Toast {
    id: number;
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
}

interface ToastContextType {
    showToast: (message: string, type?: Toast['type']) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const showToast = (message: string, type: Toast['type'] = 'info') => {
        const id = Date.now();
        setToasts(prev => [...prev, { id, message, type }]);

        setTimeout(() => {
            setToasts(prev => prev.filter(toast => toast.id !== id));
        }, 4000);
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
                {toasts.map(toast => (
                    <ToastItem key={toast.id} toast={toast} />
                ))}
            </div>
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);
    if (!context) throw new Error('useToast must be used within ToastProvider');
    return context;
}

function ToastItem({ toast }: { toast: Toast }) {
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsExiting(true), 3600);
        return () => clearTimeout(timer);
    }, []);

    const types = {
        success: 'bg-[var(--success)] shadow-[var(--success)]/30',
        error: 'bg-[var(--error)] shadow-[var(--error)]/30',
        warning: 'bg-[var(--warning)] shadow-[var(--warning)]/30',
        info: 'bg-[var(--primary)] shadow-[var(--primary)]/30'
    };

    const icons = {
        success: '✓',
        error: '✕',
        warning: '⚠',
        info: 'ℹ'
    };

    return (
        <div
            className={`
        ${types[toast.type]} shadow-lg
        px-6 py-4 rounded-lg text-white font-medium
        flex items-center gap-3 min-w-[300px]
        ${isExiting ? 'animate-slideOut' : 'animate-slideIn'}
      `}
        >
            <span className="text-xl">{icons[toast.type]}</span>
            <span>{toast.message}</span>

            <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideOut {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(100%);
          }
        }
        
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
        
        .animate-slideOut {
          animation: slideOut 0.3s ease-out;
        }
      `}</style>
        </div>
    );
}
