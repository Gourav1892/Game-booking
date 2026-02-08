'use client';

import React, { createContext, useContext, useState } from 'react';

// --- Types ---

export interface Device {
    id: string;
    name: string;
    type: 'PC' | 'PS5' | 'XBOX';
    status: 'Online' | 'Occupied' | 'Maintenance' | 'Offline';
    specs: string;
    pricePerHour: number;
}

export interface Game {
    id: string;
    title: string;
    image: string; // Emoji or URL
    genre: string;
    platforms: ('PC' | 'PS5' | 'XBOX')[];
    description: string;
}

export interface Booking {
    id: string;
    userId: string; // 'current-user' for now
    deviceId: string;
    gameId: string;
    gameTitle: string;
    gameImage: string;
    deviceName: string;
    date: string;
    time: string;
    duration: string;
    price: number;
    status: 'upcoming' | 'completed' | 'cancelled';
    createdAt: string;
}

interface MockContextType {
    devices: Device[];
    games: Game[];
    bookings: Booking[];
    addBooking: (booking: Omit<Booking, 'id' | 'createdAt' | 'status'>) => void;
    cancelBooking: (id: string) => void;
    updateDeviceStatus: (id: string, status: Device['status']) => void;
    addDevice: (device: Omit<Device, 'id'>) => void;
    addGame: (game: Omit<Game, 'id'>) => void;
    currentUser: { name: string; email: string; avatar: string };
}

// --- Initial Data ---

const INITIAL_DEVICES: Device[] = [
    { id: 'pc-01', name: 'High-End PC #01', type: 'PC', status: 'Online', specs: 'RTX 4090, i9-13900K', pricePerHour: 150 },
    { id: 'pc-02', name: 'High-End PC #02', type: 'PC', status: 'Occupied', specs: 'RTX 4090, i9-13900K', pricePerHour: 150 },
    { id: 'pc-03', name: 'Standard PC #01', type: 'PC', status: 'Online', specs: 'RTX 3060, i7-12700', pricePerHour: 100 },
    { id: 'ps5-01', name: 'PlayStation 5 #01', type: 'PS5', status: 'Online', specs: '4K HDR, 120Hz', pricePerHour: 120 },
    { id: 'ps5-02', name: 'PlayStation 5 #02', type: 'PS5', status: 'Maintenance', specs: '4K HDR, 120Hz', pricePerHour: 120 },
    { id: 'xbox-01', name: 'Xbox Series X #01', type: 'XBOX', status: 'Online', specs: '4K HDR, 120Hz', pricePerHour: 120 },
];

const INITIAL_GAMES: Game[] = [
    { id: 'g1', title: 'Cyberpunk 2077', image: '🌃', genre: 'RPG', platforms: ['PC', 'PS5', 'XBOX'], description: 'Open-world action-adventure.' },
    { id: 'g2', title: 'Valorant', image: '🔫', genre: 'FPS', platforms: ['PC'], description: '5v5 tactical shooter.' },
    { id: 'g3', title: "Marvel's Spider-Man 2", image: '🕸️', genre: 'Action', platforms: ['PS5'], description: 'Web-slinging action.' },
    { id: 'g4', title: 'Halo Infinite', image: '⚔️', genre: 'FPS', platforms: ['XBOX', 'PC'], description: 'Sci-fi shooter.' },
    { id: 'g5', title: 'Startfield', image: '🚀', genre: 'RPG', platforms: ['XBOX', 'PC'], description: 'Space exploration.' },
    { id: 'g6', title: 'God of War Ragnarök', image: '🪓', genre: 'Action', platforms: ['PS5'], description: 'Mythological action.' },
    { id: 'g7', title: 'League of Legends', image: '🏆', genre: 'MOBA', platforms: ['PC'], description: 'Strategic team battle.' },
    { id: 'g8', title: 'FIFA 24', image: '⚽', genre: 'Sports', platforms: ['PC', 'PS5', 'XBOX'], description: 'Football simulation.' },
];

const INITIAL_BOOKINGS: Booking[] = [
    {
        id: 'b1',
        userId: 'current-user',
        deviceId: 'pc-02',
        gameId: 'g1',
        gameTitle: 'Cyberpunk 2077',
        gameImage: '🌃',
        deviceName: 'High-End PC #02',
        date: '2024-02-20', // Static future date
        time: '14:00',
        duration: '2h',
        price: 300,
        status: 'upcoming',
        createdAt: '2024-02-15T10:00:00.000Z'
    },
    {
        id: 'b2',
        userId: 'current-user',
        deviceId: 'ps5-01',
        gameId: 'g3',
        gameTitle: "Marvel's Spider-Man 2",
        gameImage: '🕸️',
        deviceName: 'PlayStation 5 #01',
        date: '2024-02-10', // Static past date
        time: '18:00',
        duration: '1h',
        price: 120,
        status: 'completed',
        createdAt: '2024-02-08T15:30:00.000Z'
    }
];

// --- Context ---

const MockContext = createContext<MockContextType | undefined>(undefined);

export function MockDataProvider({ children }: { children: React.ReactNode }) {
    const [devices, setDevices] = useState<Device[]>(INITIAL_DEVICES);
    const [games, setGames] = useState<Game[]>(INITIAL_GAMES);
    const [bookings, setBookings] = useState<Booking[]>(INITIAL_BOOKINGS);

    const currentUser = {
        name: 'Neo Anderson',
        email: 'neo@matrix.com',
        avatar: '😎'
    };

    const addBooking = (bookingData: Omit<Booking, 'id' | 'createdAt' | 'status'>) => {
        const newBooking: Booking = {
            ...bookingData,
            id: `b-${Date.now()}`,
            createdAt: new Date().toISOString(),
            status: 'upcoming'
        };
        setBookings(prev => [newBooking, ...prev]);
    };

    const cancelBooking = (id: string) => {
        setBookings(prev => prev.map(b => b.id === id ? { ...b, status: 'cancelled' } : b));
    };

    const updateDeviceStatus = (id: string, status: Device['status']) => {
        setDevices(prev => prev.map(d => d.id === id ? { ...d, status } : d));
    };

    const addDevice = (deviceData: Omit<Device, 'id'>) => {
        const newDevice: Device = {
            ...deviceData,
            id: `dev-${Date.now()}`
        };
        setDevices(prev => [...prev, newDevice]);
    };

    const addGame = (gameData: Omit<Game, 'id'>) => {
        const newGame: Game = {
            ...gameData,
            id: `g-${Date.now()}`
        };
        setGames(prev => [...prev, newGame]);
    };

    return (
        <MockContext.Provider value={{
            devices,
            games,
            bookings,
            addBooking,
            cancelBooking,
            updateDeviceStatus,
            addDevice,
            addGame,
            currentUser
        }}>
            {children}
        </MockContext.Provider>
    );
}

export function useMockData() {
    const context = useContext(MockContext);
    if (context === undefined) {
        throw new Error('useMockData must be used within a MockDataProvider');
    }
    return context;
}
