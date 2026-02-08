import React, { useState } from 'react';
import BookingCard, { Booking } from './BookingCard';

interface BookingListProps {
    bookings: Booking[];
    onCancelBooking: (id: string) => void;
}

export default function BookingList({ bookings, onCancelBooking }: BookingListProps) {
    const [activeTab, setActiveTab] = useState<'upcoming' | 'history'>('upcoming');

    const upcomingBookings = bookings.filter(b => b.status === 'upcoming');
    const historyBookings = bookings.filter(b => b.status !== 'upcoming');

    const displayedBookings = activeTab === 'upcoming' ? upcomingBookings : historyBookings;

    return (
        <div className="space-y-6">
            {/* Tabs */}
            <div className="flex p-1 bg-[var(--surface)]/50 rounded-lg w-full max-w-md border border-[var(--text-secondary)]/10">
                <button
                    onClick={() => setActiveTab('upcoming')}
                    className={`
            flex-1 py-2 px-4 rounded-md text-sm font-semibold transition-all duration-200
            ${activeTab === 'upcoming'
                            ? 'bg-[var(--primary)] text-white shadow-lg shadow-[var(--primary)]/20'
                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                        }
          `}
                >
                    Upcoming ({upcomingBookings.length})
                </button>
                <button
                    onClick={() => setActiveTab('history')}
                    className={`
            flex-1 py-2 px-4 rounded-md text-sm font-semibold transition-all duration-200
            ${activeTab === 'history'
                            ? 'bg-[var(--surface)] border border-[var(--text-secondary)]/20 text-[var(--text-primary)] shadow-sm'
                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                        }
          `}
                >
                    History
                </button>
            </div>

            {/* List */}
            <div className="space-y-4">
                {displayedBookings.length === 0 ? (
                    <div className="text-center py-12 rounded-2xl border-2 border-dashed border-[var(--text-secondary)]/10">
                        <div className="text-4xl mb-4">👾</div>
                        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                            No {activeTab} bookings found
                        </h3>
                        <p className="text-[var(--text-secondary)]">
                            {activeTab === 'upcoming'
                                ? "You don't have any upcoming gaming sessions."
                                : "You haven't completed any gaming sessions yet."
                            }
                        </p>
                    </div>
                ) : (
                    displayedBookings.map(booking => (
                        <BookingCard
                            key={booking.id}
                            booking={booking}
                            onCancel={onCancelBooking}
                        />
                    ))
                )}
            </div>
        </div>
    );
}
