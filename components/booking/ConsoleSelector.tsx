import React from 'react';

export type ConsoleType = 'PS5' | 'XBOX' | 'PC';

interface ConsoleSelectorProps {
    selected: ConsoleType;
    onSelect: (console: ConsoleType) => void;
}

export default function ConsoleSelector({ selected, onSelect }: ConsoleSelectorProps) {
    const consoles = [
        { id: 'PS5', name: 'PlayStation 5', icon: '🎮', price: 150 },
        { id: 'XBOX', name: 'Xbox Series X', icon: '🕹️', price: 120 },
        { id: 'PC', name: 'Gaming PC', icon: '🖥️', price: 100 },
    ] as const;

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">Select Console</h3>
            <div className="grid grid-cols-3 gap-4">
                {consoles.map((console) => (
                    <button
                        key={console.id}
                        onClick={() => onSelect(console.id)}
                        className={`
              relative p-4 rounded-xl border-2 transition-all duration-200
              flex flex-col items-center justify-center gap-2 group
              ${selected === console.id
                                ? 'bg-[var(--primary)]/10 border-[var(--primary)] shadow-[var(--primary)]/20 shadow-lg scale-105'
                                : 'bg-[var(--surface)] border-transparent hover:border-[var(--primary)]/50 hover:-translate-y-1'
                            }
            `}
                    >
                        <div className={`
              text-3xl mb-1 transition-transform duration-200
              ${selected === console.id ? 'scale-110' : 'group-hover:scale-110'}
            `}>
                            {console.icon}
                        </div>
                        <div className="font-bold text-[var(--text-primary)]">{console.name}</div>
                        <div className="text-sm text-[var(--text-secondary)]">₹{console.price}/hr</div>

                        {/* Selection Indicator */}
                        {selected === console.id && (
                            <div className="absolute top-2 right-2 w-3 h-3 bg-[var(--success)] rounded-full animate-pulse shadow-lg shadow-[var(--success)]/50" />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}
