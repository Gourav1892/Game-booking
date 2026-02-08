'use client';

import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ProfileHeader from '@/components/dashboard/ProfileHeader';
import BookingList from '@/components/dashboard/BookingList';
import { useMockData } from '@/context/MockDataContext';
import { useToast } from '@/components/common/Toast';

export default function DashboardPage() {
    const { bookings, cancelBooking } = useMockData();
    const { showToast } = useToast();

    const handleCancelBooking = (id: string) => {
        cancelBooking(id);
        showToast('Mission aborted successfully', 'info');
    };

    return (
        <div className="min-h-screen bg-[var(--background)] pb-24">
            <Header />

            <main className="container mx-auto px-4">
                <ProfileHeader />

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar Navigation (Visual Only for Phase 6) */}
                    <div className="hidden lg:block space-y-2">
                        <button className="w-full text-left px-4 py-3 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] font-semibold">
                            Overview
                        </button>
                        <button className="w-full text-left px-4 py-3 rounded-lg text-[var(--text-secondary)] hover:bg-[var(--surface)] hover:text-[var(--text-primary)] transition-colors">
                            Payment Methods
                        </button>
                        <button className="w-full text-left px-4 py-3 rounded-lg text-[var(--text-secondary)] hover:bg-[var(--surface)] hover:text-[var(--text-primary)] transition-colors">
                            Settings
                        </button>
                        <button className="w-full text-left px-4 py-3 rounded-lg text-red-500 hover:bg-red-500/10 transition-colors mt-8">
                            Log Out
                        </button>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3 space-y-8">
                        <BookingList
                            bookings={bookings}
                            onCancelBooking={handleCancelBooking}
                        />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
