'use client';

import React from 'react';
import Link from 'next/link';

interface ErrorBoundaryProps {
    children: React.ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error?: Error;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        // Log error to monitoring service (e.g., Sentry)
        console.error('Error caught by boundary:', error, errorInfo);

        // In production, send to error tracking service
        if (process.env.NODE_ENV === 'production') {
            // window.reportError?.(error, errorInfo);
        }
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-[#050b14] flex items-center justify-center px-4">
                    <div className="max-w-md w-full text-center">
                        {/* Error Icon */}
                        <div className="mb-8">
                            <div className="w-24 h-24 mx-auto bg-red-900/20 border-2 border-red-500/30 rounded-full flex items-center justify-center">
                                <svg className="w-12 h-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                        </div>

                        {/* Error Message */}
                        <h1 className="text-3xl font-bold text-white mb-4 font-[Poppins]">
                            Something Went Wrong
                        </h1>
                        <p className="text-blue-200/60 mb-8 font-mono text-sm">
                            {process.env.NODE_ENV === 'development'
                                ? `Error: ${this.state.error?.message}`
                                : 'An unexpected error occurred. Our team has been notified.'}
                        </p>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => this.setState({ hasError: false })}
                                className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-bold hover:from-cyan-500 hover:to-blue-500 transition-all clip-chamfer"
                            >
                                Try Again
                            </button>
                            <Link
                                href="/"
                                className="px-6 py-3 bg-[#0F1219] border border-white/20 text-white rounded-lg font-bold hover:border-cyan-500/40 transition-all"
                            >
                                Go Home
                            </Link>
                        </div>

                        {/* Error ID (for support reference) */}
                        <div className="mt-8 pt-8 border-t border-white/10">
                            <p className="text-[10px] font-mono text-blue-400/40 uppercase tracking-wider">
                                Error ID: {Date.now().toString(36)}
                            </p>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
