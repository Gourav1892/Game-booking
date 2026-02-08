import React from 'react';

interface TimeSlotGridProps {
    selectedTime: string | null;
    onSelect: (time: string) => void;
    bookedSlots?: string[]; // Array of booked times, e.g., ["14:00", "15:00"]
}

export default function TimeSlotGrid({ selectedTime, onSelect, bookedSlots = [] }: TimeSlotGridProps) {
    // Generate time slots from 10 AM to 10 PM
    const slots = Array.from({ length: 13 }, (_, i) => {
        const hour = 10 + i;
        return `${hour.toString().padStart(2, '0')}:00`;
    });

    const formatTime = (time: string) => {
        const [hour] = time.split(':');
        const h = parseInt(hour);
        const ampm = h >= 12 ? 'PM' : 'AM';
        const h12 = h % 12 || 12;
        return `${h12} ${ampm}`;
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">Select Time Slot</h3>
                <span className="text-sm text-[var(--text-secondary)]">{slots.length} slots available</span>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                {slots.map((time) => {
                    const isBooked = bookedSlots.includes(time);
                    const isSelected = selectedTime === time;

                    return (
                        <button
                            key={time}
                            disabled={isBooked}
                            onClick={() => onSelect(time)}
                            className={`
                py-3 px-2 rounded-lg text-sm font-semibold transition-all duration-200 border
                ${isBooked
                                    ? 'bg-red-500/10 border-red-500/20 text-red-500 cursor-not-allowed decoration-red-500/50 line-through opacity-50'
                                    : isSelected
                                        ? 'bg-[var(--secondary)] border-[var(--secondary)] text-white shadow-lg shadow-[var(--secondary)]/30 scale-105'
                                        : 'bg-[var(--surface)] border-transparent text-[var(--text-primary)] hover:border-[var(--secondary)]/50 hover:bg-[var(--surface)]/80'
                                }
              `}
                        >
                            {formatTime(time)}
                        </button>
                    );
                })}
            </div>

            {/* Legend */}
            <div className="flex gap-4 text-xs text-[var(--text-secondary)] pt-2">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-[var(--surface)] border border-[var(--text-secondary)]/20"></div>
                    <span>Available</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-[var(--secondary)]"></div>
                    <span>Selected</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-red-500/20 border border-red-500/30"></div>
                    <span>Booked</span>
                </div>
            </div>
        </div>
    );
}
