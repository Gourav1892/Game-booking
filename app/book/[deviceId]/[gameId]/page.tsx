'use client';

import { useState, useMemo } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Button from '@/components/common/Button';
import Link from 'next/link';
import { useMockData } from '@/context/MockDataContext';

export default function TimeSelectionPage() {
    const params = useParams();
    const deviceId = params.deviceId as string;
    const gameId = params.gameId as string;
    const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [duration, setDuration] = useState(1);

    const { devices, games } = useMockData();

    // Get Device Info
    const device = useMemo(() =>
        devices.find(d => d.type.toLowerCase() === deviceId) || devices[0],
        [devices, deviceId]);

    // Get Game Info
    const game = useMemo(() =>
        games.find(g => g.id === gameId) || { title: 'Unknown Game', id: 'unknown' },
        [games, gameId]);

    const hourlyRate = device.pricePerHour;
    const totalCost = hourlyRate * duration;

    // Generate next 7 days
    const dates = Array.from({ length: 7 }, (_, i) => {
        const d = new Date();
        d.setDate(d.getDate() + i);
        return {
            date: d.toISOString().split('T')[0],
            day: d.toLocaleDateString('en-US', { weekday: 'short' }),
            num: d.getDate()
        };
    });

    // Generate time slots (10 AM to 10 PM)
    const timeSlots = Array.from({ length: 13 }, (_, i) => {
        const hour = 10 + i;
        return `${hour > 12 ? hour - 12 : hour}:00 ${hour >= 12 ? 'PM' : 'AM'}`;
    });

    return (
        <div className="min-h-screen bg-[#050b14]">
            <Header />

            <section className="pt-32 pb-20 px-4">
                <div className="container mx-auto max-w-4xl">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-block px-4 py-1 rounded-full bg-blue-900/20 border border-blue-500/20 text-blue-400 text-xs font-mono tracking-widest mb-4">
                            STEP 03: MISSION TIMELINE
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                            SECURE TIMESTAMP
                        </h1>
                        <p className="text-blue-200/60 font-mono">
                            Target: <span className="text-blue-400 font-bold">{game.title}</span> on <span className="text-purple-400 font-bold">{device.name.split('#')[0]}</span>
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Left Column: Selection */}
                        <div className="md:col-span-2 space-y-8">

                            {/* Date Selector */}
                            <div className="bg-[#0F1219] border border-white/5 p-6 rounded-2xl">
                                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                                    <span className="text-blue-500">🗓️</span> SELECT DATE
                                </h3>
                                <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar">
                                    {dates.map((d) => (
                                        <button
                                            key={d.date}
                                            onClick={() => setSelectedDate(d.date)}
                                            className={`flex-shrink-0 w-16 h-20 rounded-xl flex flex-col items-center justify-center transition-all border ${selectedDate === d.date
                                                ? 'bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-900/50'
                                                : 'bg-[#1a1f2e] border-white/5 text-slate-400 hover:border-blue-500/50 hover:text-white'
                                                }`}
                                        >
                                            <span className="text-xs font-bold uppercase">{d.day}</span>
                                            <span className="text-xl font-bold">{d.num}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Time Selector */}
                            <div className="bg-[#0F1219] border border-white/5 p-6 rounded-2xl">
                                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                                    <span className="text-blue-500">⏰</span> SELECT START TIME
                                </h3>
                                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                                    {timeSlots.map((time) => (
                                        <button
                                            key={time}
                                            onClick={() => setSelectedTime(time)}
                                            className={`py-2 rounded-lg text-sm font-mono transition-all border ${selectedTime === time
                                                ? 'bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-900/50'
                                                : 'bg-[#1a1f2e] border-white/5 text-slate-400 hover:border-blue-500/50 hover:text-white'
                                                }`}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Duration Selector */}
                            <div className="bg-[#0F1219] border border-white/5 p-6 rounded-2xl">
                                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                                    <span className="text-blue-500">⏳</span> DURATION
                                </h3>
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() => setDuration(Math.max(1, duration - 1))}
                                        className="w-10 h-10 rounded-lg bg-[#1a1f2e] border border-white/10 text-white hover:bg-blue-600 hover:border-blue-400 transition-colors"
                                    >
                                        -
                                    </button>
                                    <span className="text-2xl font-bold text-white font-mono w-24 text-center">
                                        {duration} HR
                                    </span>
                                    <button
                                        onClick={() => setDuration(duration + 1)}
                                        className="w-10 h-10 rounded-lg bg-[#1a1f2e] border border-white/10 text-white hover:bg-blue-600 hover:border-blue-400 transition-colors"
                                    >
                                        +
                                    </button>
                                    <span className="text-slate-400 ml-auto">
                                        Total: <span className="text-green-400 font-bold">₹{totalCost}</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Summary */}
                        <div className="md:col-span-1">
                            <div className="bg-[#0F1219] border border-white/5 p-6 rounded-2xl sticky top-24">
                                <h3 className="text-white font-bold mb-6 text-lg tracking-wide border-b border-white/10 pb-4">
                                    MISSION SUMMARY
                                </h3>

                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-400">Platform</span>
                                        <span className="text-white font-bold text-right">{device.name.split('#')[0]}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-400">Game</span>
                                        <span className="text-white font-bold text-right">{game.title}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-400">Date</span>
                                        <span className="text-white font-bold text-right">{selectedDate}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-400">Time</span>
                                        <span className={`font-bold text-right ${selectedTime ? 'text-white' : 'text-red-400'}`}>
                                            {selectedTime || 'Select Time'}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-400">Duration</span>
                                        <span className="text-white font-bold text-right">{duration} Hours</span>
                                    </div>

                                    <div className="h-px bg-white/10 my-4"></div>

                                    <div className="flex justify-between items-end">
                                        <span className="text-slate-400">Total</span>
                                        <span className="text-3xl font-bold text-green-400">₹{totalCost}</span>
                                    </div>
                                </div>

                                <Link href={selectedTime ? `/book/confirmation?device=${deviceId}&game=${gameId}&date=${selectedDate}&time=${selectedTime}&duration=${duration}&cost=${totalCost}` : '#'}>
                                    <Button
                                        size="lg"
                                        className={`w-full ${!selectedTime ? 'opacity-50 cursor-not-allowed grayscale' : ''}`}
                                        disabled={!selectedTime}
                                    >
                                        Confirm Booking
                                    </Button>
                                </Link>

                                <p className="text-[10px] text-slate-500 text-center mt-4">
                                    By confirming, you agree to our station usage protocols.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
