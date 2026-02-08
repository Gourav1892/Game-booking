import React from 'react';
import Image from 'next/image';
import Button from '../common/Button';

export interface Booking {
    id: string;
    gameTitle: string;
    gameImage: string; // Emoji or URL
    deviceName: string; // e.g., "PS5 Station 01"
    date: string; // ISO date string
    time: string;
    duration: string; // e.g. "2h"
    price: number;
    status: 'upcoming' | 'completed' | 'cancelled';
}

interface BookingCardProps {
    booking: Booking;
    onCancel?: (id: string) => void;
}

export default function BookingCard({ booking, onCancel }: BookingCardProps) {
    const isUpcoming = booking.status === 'upcoming';

    // Status Styles
    const statusConfig = {
        upcoming: { color: 'text-cyan-400', border: 'border-cyan-500/30', bg: 'bg-cyan-500/10', glow: 'shadow-[0_0_10px_rgba(34,211,238,0.2)]' },
        completed: { color: 'text-purple-400', border: 'border-purple-500/30', bg: 'bg-purple-500/10', glow: 'shadowless' },
        cancelled: { color: 'text-red-400', border: 'border-red-500/30', bg: 'bg-red-500/10', glow: 'shadowless' }
    };

    const statusStyle = statusConfig[booking.status];

    return (
        <div className="relative group">
            {/* Holographic Border Gradient */}
            <div className={`absolute -inset-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-sm pointer-events-none`}></div>

            <div className={`relative bg-[#0F1219] rounded-xl overflow-hidden border border-white/5 group-hover:border-blue-500/30 transition-all duration-300 flex flex-col md:flex-row`}>

                {/* Left: Ticket 'Stub' / Image */}
                <div className="relative w-full md:w-32 bg-black/40 flex flex-col items-center justify-center p-4 border-b md:border-b-0 md:border-r border-dashed border-white/10">
                    <div className="relative w-20 h-20 md:w-16 md:h-16 rounded-lg overflow-hidden bg-slate-800 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-500">
                        {booking.gameImage.startsWith('http') ? (
                            <Image
                                src={booking.gameImage}
                                alt={booking.gameTitle}
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <span className="text-4xl">{booking.gameImage}</span>
                        )}
                    </div>
                    <div className="mt-3 hidden md:block w-full">
                        {/* Fake Barcode */}
                        <div className="h-4 w-full opacity-30 flex items-end justify-between gap-[1px]">
                            {[...Array(12)].map((_, i) => (
                                <div key={i} className={`bg-white w-[2px] ${i % 3 === 0 ? 'h-full' : i % 2 === 0 ? 'h-[60%]' : 'h-[80%]'}`}></div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Center: Info */}
                <div className="flex-1 p-5 relative overflow-hidden">
                    {/* Background Deco */}
                    <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                        <span className="text-6xl font-black font-mono tracking-tighter text-white">
                            {booking.status === 'upcoming' ? 'ACTIVE' : 'VOID'}
                        </span>
                    </div>

                    <div className="flex justify-between items-start mb-3">
                        <div>
                            <h3 className="font-bold text-lg text-white group-hover:text-cyan-400 transition-colors tracking-wide">
                                {booking.gameTitle}
                            </h3>
                            <p className="text-[10px] font-mono text-blue-300/60 uppercase tracking-widest mt-1">
                                {booking.deviceName}
                            </p>
                        </div>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono tracking-wider uppercase border ${statusStyle.bg} ${statusStyle.border} ${statusStyle.color} ${statusStyle.glow}`}>
                            {booking.status}
                        </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                            <p className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">Date</p>
                            <p className="text-sm font-bold text-white">
                                {new Date(booking.date).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase()}
                            </p>
                        </div>
                        <div>
                            <p className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">Time</p>
                            <p className="text-sm font-bold text-white">
                                {booking.time} <span className="text-slate-500 font-normal">({booking.duration})</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right: Actions */}
                <div className="p-4 flex flex-row md:flex-col items-center justify-center gap-2 border-t md:border-t-0 md:border-l border-white/5 bg-black/20">
                    {isUpcoming ? (
                        <Button
                            variant="outline"
                            size="sm"
                            className="w-full md:w-auto border-red-500/30 text-red-400 hover:bg-red-500/10 hover:text-red-300 hover:shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                            onClick={() => onCancel?.(booking.id)}
                        >
                            Abort
                        </Button>
                    ) : (
                        <Button variant="ghost" size="sm" className="w-full md:w-auto text-xs text-slate-400 hover:text-white">
                            Replay
                        </Button>
                    )}
                    <div className="text-[10px] font-mono text-slate-600 mt-1">
                        ₹{booking.price}
                    </div>
                </div>
            </div>
        </div>
    );
}
