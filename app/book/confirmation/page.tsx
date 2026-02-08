'use client';

import { useSearchParams } from 'next/navigation';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Button from '@/components/common/Button';
import Link from 'next/link';
import { Suspense, useEffect, useRef, useState } from 'react';
import { useMockData } from '@/context/MockDataContext';

function ConfirmationContent() {
    const searchParams = useSearchParams();
    const deviceId = searchParams.get('device') || 'unknown';
    const gameId = searchParams.get('game') || 'unknown';
    const date = searchParams.get('date') || '';
    const time = searchParams.get('time') || '';
    const duration = searchParams.get('duration') || '1';
    const cost = searchParams.get('cost') || '0';

    const { addBooking, games, devices } = useMockData();
    const hasBookedRef = useRef(false);

    // Get details for display
    const game = games.find(g => g.id === gameId);
    const device = devices.find(d => d.type.toLowerCase() === deviceId);

    // Generate stable ID on mount
    const [bookingId] = useState(() => Date.now().toString().slice(-6));

    useEffect(() => {
        if (!hasBookedRef.current && game && device) {
            hasBookedRef.current = true;
            addBooking({
                userId: 'current-user',
                deviceId: deviceId,
                gameId: gameId,
                gameTitle: game.title,
                gameImage: game.image,
                deviceName: device.name.split('#')[0],
                date: date,
                time: time,
                duration: `${duration}h`,
                price: parseInt(cost)
            });
        }
    }, [addBooking, deviceId, gameId, date, time, duration, cost, game, device]);

    return (
        <section className="pt-32 pb-20 px-4 min-h-[80vh] flex items-center justify-center">
            <div className="container mx-auto text-center max-w-2xl">

                {/* Success Icon */}
                <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse shadow-[0_0_40px_rgba(34,197,94,0.3)]">
                    <span className="text-5xl">✅</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                    BOOKING CONFIRMED
                </h1>
                <p className="text-xl text-blue-200/60 mb-12 font-mono">
                    Your station has been reserved. Access code generated.
                </p>

                {/* Ticket / Receipt */}
                <div className="bg-[#0F1219] border border-blue-500/20 rounded-2xl p-8 mb-12 relative overflow-hidden clip-chamfer">
                    {/* Decorative Top Border */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>

                    <div className="grid grid-cols-2 gap-y-6 text-left">
                        <div>
                            <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Station</p>
                            <p className="text-white font-bold uppercase">{device?.name.split('#')[0] || deviceId} TERMINAL</p>
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Game</p>
                            <p className="text-white font-bold uppercase">{game?.title || gameId}</p>
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Date & Time</p>
                            <p className="text-white font-bold">{date} @ {time}</p>
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Duration</p>
                            <p className="text-white font-bold">{duration} Hours</p>
                        </div>
                    </div>

                    <div className="border-t border-dashed border-white/10 my-6"></div>

                    <div className="flex justify-between items-center">
                        <span className="text-slate-400">Total Paid</span>
                        <span className="text-3xl font-bold text-green-400">₹{cost}</span>
                    </div>

                    {/* Barcode Mock */}
                    <div className="mt-8 pt-8 border-t border-white/5 flex justify-between items-end opacity-50">
                        <div className="space-y-1">
                            <div className="h-1 w-32 bg-white"></div>
                            <div className="h-1 w-32 bg-white"></div>
                            <div className="h-2 w-32 bg-white"></div>
                        </div>
                        {/* Use a stable ID for the display, or just a timestamp */}
                        <span className="font-mono text-xs">ID: #PB-{bookingId}</span>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/dashboard">
                        <Button size="lg" variant="primary">
                            View In Dashboard
                        </Button>
                    </Link>
                    <Link href="/">
                        <Button size="lg" variant="outline">
                            Return to Base
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default function ConfirmationPage() {
    return (
        <div className="min-h-screen bg-[#050b14]">
            <Header />
            <Suspense fallback={<div className="text-white text-center pt-32">Loading mission data...</div>}>
                <ConfirmationContent />
            </Suspense>
            <Footer />
        </div>
    );
}
