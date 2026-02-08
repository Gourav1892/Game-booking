'use client';

import { useMockData } from '@/context/MockDataContext';

export default function AdminOverviewPage() {
    const { bookings, devices } = useMockData();

    // Calculate Stats
    const totalRevenue = bookings.reduce((acc, curr) => acc + curr.price, 0);
    const activeSessions = devices.filter(d => d.status === 'Occupied').length;
    const totalDevices = devices.length;

    const today = new Date().toISOString().split('T')[0];
    const todaysBookings = bookings.filter(b => b.date === today).length;

    const pendingActions = 3; // Mock pending actions for now

    const stats = [
        { title: 'Total Revenue', value: `₹${totalRevenue.toLocaleString()}`, change: '+15%', icon: '💰', color: 'text-green-400' },
        { title: 'Active Sessions', value: `${activeSessions}/${totalDevices}`, change: `${Math.round((activeSessions / totalDevices) * 100)}% Occ.`, icon: '🎮', color: 'text-blue-400' },
        { title: 'Today\'s Bookings', value: todaysBookings.toString(), change: '+3', icon: '📅', color: 'text-purple-400' },
        { title: 'Pending Actions', value: pendingActions.toString(), change: 'Urgent', icon: '⚠️', color: 'text-yellow-400' },
    ];

    // Get recent 5 bookings for activity feed
    const recentActivity = [...bookings].reverse().slice(0, 5);

    return (
        <div className="animate-fade-in">
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-white mb-2 font-[Poppins] tracking-tight">
                    COMMAND <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">CENTER</span>
                </h1>
                <p className="text-[10px] font-mono text-blue-300/60 uppercase tracking-[0.3em]">SYSTEM OVERVIEW</p>
            </div>

            {/* Stats Grid - HUD Style */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, i) => (
                    <div key={i} className="relative group">
                        {/* Holographic glow */}
                        <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-sm"></div>

                        <div className="relative bg-[#0F1219] border border-white/10 group-hover:border-cyan-500/30 p-6 rounded-xl transition-all duration-300 overflow-hidden">
                            {/* Tech corner accents */}
                            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyan-500/20 rounded-tr-xl"></div>
                            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-cyan-500/20 rounded-bl-xl"></div>

                            <div className="flex justify-between items-start mb-4 relative z-10">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-900/40 to-purple-900/20 rounded-lg flex items-center justify-center border border-blue-500/20 group-hover:border-cyan-500/40 transition-colors">
                                    <span className="text-2xl">{stat.icon}</span>
                                </div>
                                <span className={`text-[10px] font-bold font-mono px-2.5 py-1 rounded border uppercase tracking-wider ${stat.color} bg-black/30 border-current/30 shadow-[0_0_10px_currentColor]/20`}>
                                    {stat.change}
                                </span>
                            </div>

                            <h3 className="text-slate-500 text-[11px] font-mono mb-2 uppercase tracking-[0.15em]">{stat.title}</h3>
                            <p className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Activity - Enhanced */}
                <div className="lg:col-span-2">
                    <div className="bg-[#0F1219] border border-white/10 rounded-xl overflow-hidden">
                        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-gradient-to-r from-blue-900/10 to-purple-900/10">
                            <div>
                                <h2 className="text-xl font-bold text-white font-[Poppins]">Recent Activity</h2>
                                <p className="text-[10px] font-mono text-blue-300/50 uppercase tracking-widest mt-1">Live Feed</p>
                            </div>
                            <button className="text-xs font-mono text-cyan-400 hover:text-cyan-300 border border-cyan-500/30 px-3 py-1.5 rounded hover:bg-cyan-500/10 transition-colors uppercase tracking-wider">
                                View All →
                            </button>
                        </div>
                        <div className="p-6">
                            <div className="space-y-4">
                                {recentActivity.map((activity, idx) => (
                                    <div key={activity.id} className="relative group">
                                        {/* Connection line */}
                                        {idx !== recentActivity.length - 1 && (
                                            <div className="absolute left-5 top-12 bottom-0 w-[1px] bg-blue-500/20"></div>
                                        )}

                                        <div className="flex items-center justify-between pb-4 transition-all duration-300 group-hover:bg-blue-500/5 -mx-2 px-2 rounded-lg">
                                            <div className="flex items-center gap-4">
                                                <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-blue-900/40 to-purple-900/20 border-2 border-blue-500/30 flex items-center justify-center text-cyan-400 font-bold text-sm font-mono group-hover:border-cyan-500/50 transition-colors shadow-[0_0_15px_rgba(6,182,212,0.2)] z-10">
                                                    U
                                                </div>
                                                <div>
                                                    <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                                                        Booked <span className="font-bold">{activity.gameTitle}</span>
                                                    </p>
                                                    <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">
                                                        User • {activity.date} @ {activity.time}
                                                    </p>
                                                </div>
                                            </div>
                                            <span className={`text-[10px] font-mono px-2 py-1 rounded border uppercase tracking-wider ${activity.status === 'upcoming' ? 'bg-green-500/10 text-green-400 border-green-500/30 shadow-[0_0_8px_rgba(34,197,94,0.2)]' :
                                                    activity.status === 'completed' ? 'bg-blue-500/10 text-blue-400 border-blue-500/30' :
                                                        activity.status === 'cancelled' ? 'bg-red-500/10 text-red-400 border-red-500/30' :
                                                            'bg-slate-500/10 text-slate-400 border-slate-500/30'
                                                }`}>
                                                {activity.status}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Actions & Server Load */}
                <div className="space-y-6">
                    {/* Quick Actions */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-purple-900/5 border border-purple-500/30 p-6 rounded-xl">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
                        <h3 className="text-lg font-bold text-white mb-4 font-[Poppins] relative z-10">Quick Actions</h3>
                        <div className="space-y-3 relative z-10">
                            <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-lg font-bold transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] clip-chamfer">
                                + New Booking
                            </button>
                            <button className="w-full py-3 bg-[#0F1219] hover:bg-[#1a1f2e] text-white border border-white/20 hover:border-cyan-500/40 rounded-lg transition-all">
                                Add Game Title
                            </button>
                            <button className="w-full py-3 bg-[#0F1219] hover:bg-[#1a1f2e] text-white border border-white/20 hover:border-cyan-500/40 rounded-lg transition-all">
                                Manage Devices
                            </button>
                        </div>
                    </div>

                    {/* Server Load - Enhanced */}
                    <div className="bg-[#0F1219] border border-white/10 p-6 rounded-xl">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xs font-bold font-mono text-slate-400 uppercase tracking-[0.15em]">System Load</h3>
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
                        </div>
                        <div className="space-y-5">
                            <div>
                                <div className="flex justify-between text-[11px] font-mono text-white mb-2">
                                    <span className="text-slate-400 uppercase tracking-wider">CPU Usage</span>
                                    <span className="text-blue-400 font-bold">45%</span>
                                </div>
                                <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
                                    <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 w-[45%] shadow-[0_0_10px_rgba(59,130,246,0.5)] relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-[11px] font-mono text-white mb-2">
                                    <span className="text-slate-400 uppercase tracking-wider">Bandwidth</span>
                                    <span className="text-cyan-400 font-bold">72%</span>
                                </div>
                                <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
                                    <div className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 w-[72%] shadow-[0_0_10px_rgba(6,182,212,0.5)] relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-[11px] font-mono text-white mb-2">
                                    <span className="text-slate-400 uppercase tracking-wider">Storage</span>
                                    <span className="text-green-400 font-bold">28%</span>
                                </div>
                                <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
                                    <div className="h-full bg-gradient-to-r from-green-600 to-green-400 w-[28%] shadow-[0_0_10px_rgba(34,197,94,0.5)] relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
