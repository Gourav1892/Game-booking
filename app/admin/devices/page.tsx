'use client';

import { useState } from 'react';
import Button from '@/components/common/Button';

export default function AdminDevicesPage() {
    const [devices, setDevices] = useState([
        { id: 'pc-01', name: 'RTX 4090 Station 01', type: 'PC', status: 'Online', currentSession: null },
        { id: 'pc-02', name: 'RTX 4090 Station 02', type: 'PC', status: 'Occupied', currentSession: 'Rahul K. (2h left)' },
        { id: 'ps5-01', name: 'PlayStation 5 #01', type: 'PS5', status: 'Online', currentSession: null },
        { id: 'ps5-02', name: 'PlayStation 5 #02', type: 'PS5', status: 'Maintenance', currentSession: null },
        { id: 'xb-01', name: 'Xbox Series X #01', type: 'Xbox', status: 'Online', currentSession: null },
    ]);

    const toggleStatus = (id: string) => {
        setDevices(devices.map(d => {
            if (d.id === id) {
                return { ...d, status: d.status === 'Online' ? 'Maintenance' : 'Online' };
            }
            return d;
        }));
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Device Management</h1>
                    <p className="text-slate-400">Manage gaming terminals and their availability status.</p>
                </div>
                <Button>+ Add Device</Button>
            </div>

            <div className="bg-[#0F1219] border border-white/5 rounded-xl overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-white/5 border-b border-white/5 text-slate-400 text-xs uppercase tracking-wider">
                            <th className="p-6 font-medium">Device ID</th>
                            <th className="p-6 font-medium">Name</th>
                            <th className="p-6 font-medium">Type</th>
                            <th className="p-6 font-medium">Status</th>
                            <th className="p-6 font-medium">Current Session</th>
                            <th className="p-6 font-medium text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {devices.map((device) => (
                            <tr key={device.id} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                                <td className="p-6 font-mono text-blue-400">#{device.id}</td>
                                <td className="p-6 font-bold text-white">{device.name}</td>
                                <td className="p-6">
                                    <span className={`inline-flex items-center px-2 py-1 rounded text-xs border ${device.type === 'PC' ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' :
                                            device.type === 'PS5' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                                                'bg-green-500/10 text-green-400 border-green-500/20'
                                        }`}>
                                        {device.type}
                                    </span>
                                </td>
                                <td className="p-6">
                                    <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-bold border ${device.status === 'Online' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                                            device.status === 'Occupied' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' :
                                                'bg-red-500/10 text-red-400 border-red-500/20'
                                        }`}>
                                        <span className={`w-1.5 h-1.5 rounded-full ${device.status === 'Online' ? 'bg-green-500' :
                                                device.status === 'Occupied' ? 'bg-purple-500' :
                                                    'bg-red-500'
                                            }`}></span>
                                        {device.status}
                                    </span>
                                </td>
                                <td className="p-6 text-slate-400">
                                    {device.currentSession || '-'}
                                </td>
                                <td className="p-6 text-right">
                                    <div className="flex justify-end gap-2">
                                        {device.status !== 'Occupied' && (
                                            <button
                                                onClick={() => toggleStatus(device.id)}
                                                className="text-xs px-3 py-1.5 rounded border border-white/10 hover:bg-white/10 text-slate-300 transition-colors"
                                            >
                                                {device.status === 'Online' ? 'Set Offline' : 'Set Online'}
                                            </button>
                                        )}
                                        <button className="text-xs px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-500 text-white transition-colors">
                                            Edit
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
