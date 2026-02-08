'use client';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Button from '@/components/common/Button';
import Link from 'next/link';

import { useMockData } from '@/context/MockDataContext';

export default function BookingPage() {
    const { devices } = useMockData();

    // Group devices by type to show unique cards (PC, PS5, Xbox)
    // In a real app, this might be a category list, but for now we show available count per type
    const deviceTypes = ['PC', 'PS5', 'XBOX'];

    // Helper to get display info for each type
    type DeviceInfo = {
        id: string;
        name: string;
        specs: string[];
        pricing: string;
        image: string;
        color: string;
        available: number;
        total: number;
    };

    const getDeviceInfo = (type: string): DeviceInfo | null => {
        const typeDevices = devices.filter(d => d.type === type);
        const availableCount = typeDevices.filter(d => d.status === 'Online').length;
        const baseDevice = typeDevices[0]; // Use first device for specs/price display

        // Fallback if no devices of this type exist in mock data
        if (!baseDevice) return null;

        return {
            id: type.toLowerCase(), // Use type as ID for the route, we'll filter by type in the next page
            name: baseDevice.name.split('#')[0].trim(), // Remove # number
            specs: baseDevice.specs.split(', '),
            pricing: `₹${baseDevice.pricePerHour}/hr`,
            image: type === 'PC' ? '🖥️' : type === 'PS5' ? '🎮' : '🕹️',
            color: type === 'PC' ? 'from-cyan-500 to-blue-500' : type === 'PS5' ? 'from-blue-600 to-indigo-600' : 'from-green-500 to-emerald-600',
            available: availableCount,
            total: typeDevices.length
        };
    };

    const displayedDevices = deviceTypes.map(getDeviceInfo).filter((d): d is DeviceInfo => d !== null);

    return (
        <div className="min-h-screen bg-[#050b14]">
            <Header />

            <section className="pt-32 pb-20 px-4 relative overflow-hidden">
                {/* Background Noise/Grid logic would go here if/when the Background component is ready */}
                <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/10 to-transparent"></div>

                <div className="container mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1 rounded-full bg-blue-900/20 border border-blue-500/20 text-blue-400 text-xs font-mono tracking-widest mb-4">
                            STEP 01: HARDWARE SELECTION
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                            CHOOSE YOUR WEAPON
                        </h1>
                        <p className="text-blue-200/60 max-w-2xl mx-auto font-mono">
                            Select the gaming platform for your session. All stations are equipped with premium peripherals.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {displayedDevices.map((device) => (
                            <div key={device.id} className="group relative bg-[#0F1219] border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-900/20">

                                {/* Device Image/Icon Header */}
                                <div className={`h-48 bg-gradient-to-br ${device.color} opacity-20 group-hover:opacity-30 transition-opacity flex items-center justify-center`}>
                                    <span className="text-8xl drop-shadow-lg filter group-hover:scale-110 transition-transform duration-500">{device.image}</span>
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-wider">
                                            {device.name}
                                        </h3>
                                        <span className={`text-xs font-bold px-2 py-1 rounded border ${device.available > 0 ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'}`}>
                                            {device.available}/{device.total} ONLINE
                                        </span>
                                    </div>

                                    {/* Specs List */}
                                    <ul className="mb-8 space-y-2">
                                        {device.specs.map((spec: string, idx: number) => (
                                            <li key={idx} className="flex items-center text-slate-400 text-sm">
                                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                                {spec}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                        <div>
                                            <p className="text-[10px] text-slate-500 uppercase tracking-widest">Pricing</p>
                                            <p className="text-2xl font-bold text-white">{device.pricing}</p>
                                        </div>
                                        <Link href={device.available > 0 ? `/book/${device.id}` : '#'}>
                                            <Button
                                                variant={device.available > 0 ? "primary" : "outline"}
                                                className={`group-hover:bg-blue-600 ${device.available === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                                disabled={device.available === 0}
                                            >
                                                {device.available > 0 ? 'Select' : 'Full'}
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
