import React from 'react';

interface DateSelectorProps {
    selectedDate: Date;
    onSelect: (date: Date) => void;
}

export default function DateSelector({ selectedDate, onSelect }: DateSelectorProps) {
    // Generate next 14 days
    const dates = Array.from({ length: 14 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() + i);
        return date;
    });

    const isSameDay = (d1: Date, d2: Date) => {
        return d1.getDate() === d2.getDate() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getFullYear() === d2.getFullYear();
    };

    const formatDate = (date: Date) => {
        return {
            day: date.toLocaleDateString('en-US', { weekday: 'short' }),
            date: date.getDate(),
            month: date.toLocaleDateString('en-US', { month: 'short' })
        };
    };

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">Select Date</h3>
            <div className="overflow-x-auto pb-4 scrollbar-hide">
                <div className="flex gap-3 min-w-max">
                    {dates.map((date) => {
                        const { day, date: dayNum, month } = formatDate(date);
                        const isSelected = isSameDay(date, selectedDate);
                        const isToday = isSameDay(date, new Date());

                        return (
                            <button
                                key={date.toISOString()}
                                onClick={() => onSelect(date)}
                                className={`
                  flex flex-col items-center justify-center p-3 rounded-xl min-w-[80px] border-2 transition-all duration-200
                  ${isSelected
                                        ? 'bg-[var(--primary)] border-[var(--primary)] text-white shadow-lg shadow-[var(--primary)]/30 scale-105'
                                        : 'bg-[var(--surface)] border-transparent text-[var(--text-secondary)] hover:border-[var(--primary)]/50 hover:text-[var(--text-primary)]'
                                    }
                `}
                            >
                                <span className={`text-xs uppercase font-semibold ${isSelected ? 'text-white/80' : ''}`}>
                                    {isToday ? 'Today' : day}
                                </span>
                                <span className="text-2xl font-bold my-1">{dayNum}</span>
                                <span className={`text-xs ${isSelected ? 'text-white/80' : ''}`}>{month}</span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
