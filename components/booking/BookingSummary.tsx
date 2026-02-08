import React from 'react';
import Button from '../common/Button';

interface BookingSummaryProps {
    storeName: string;
    console: string;
    date: Date;
    time: string | null;
    pricePerHour: number;
    onConfirm: () => void;
}

export default function BookingSummary({
    storeName,
    console,
    date,
    time,
    pricePerHour,
    onConfirm
}: BookingSummaryProps) {
    const taxes = pricePerHour * 0.18; // 18% GST
    const total = pricePerHour + taxes;

    if (!time) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-[var(--surface)]/95 backdrop-blur-md border-t border-[var(--primary)]/20 z-40 animate-slideUp">
            <div className="container mx-auto max-w-4xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">

                    {/* Summary Details */}
                    <div className="flex-1 w-full flex items-center justify-between md:justify-start gap-4 md:gap-8">
                        <div>
                            <div className="text-xs text-[var(--text-secondary)] mb-1">SELECTED SLOT</div>
                            <div className="font-bold text-[var(--text-primary)]">
                                {date.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' })} • {time}
                            </div>
                            <div className="text-xs text-[var(--text-secondary)] mt-1">
                                {storeName} • {console}
                            </div>
                        </div>

                        <div className="h-8 w-px bg-[var(--text-secondary)]/20 hidden md:block"></div>

                        <div>
                            <div className="text-xs text-[var(--text-secondary)] mb-1">TOTAL PRICE</div>
                            <div className="flex items-end gap-2">
                                <span className="text-xl font-bold text-[var(--secondary)]">₹{total.toFixed(0)}</span>
                                <span className="text-xs text-[var(--text-secondary)] mb-1">
                                    (₹{pricePerHour} + ₹{taxes.toFixed(0)} tax)
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Action Button */}
                    <Button
                        onClick={onConfirm}
                        size="lg"
                        className="w-full md:w-auto min-w-[200px] shadow-xl shadow-[var(--primary)]/20"
                    >
                        Confirm Booking
                    </Button>
                </div>
            </div>
        </div>
    );
}
