'use client';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Button from '@/components/common/Button';

export default function SettingsPage() {
    return (
        <div className="min-h-screen bg-[#050b14]">
            <Header />

            <section className="pt-32 pb-20 px-4">
                <div className="container mx-auto max-w-4xl">
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl font-bold text-white mb-2 font-[Poppins] tracking-tight">
                            SYSTEM <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">SETTINGS</span>
                        </h1>
                        <p className="text-[10px] font-mono text-blue-300/60 uppercase tracking-[0.3em]">User Preferences</p>
                    </div>

                    {/* Settings Sections */}
                    <div className="space-y-6">
                        {/* Profile Settings */}
                        <div className="bg-[#0F1219] border border-white/10 rounded-xl p-6">
                            <h2 className="text-xl font-bold text-white mb-6 font-[Poppins]">Profile Information</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                                        Display Name
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue="Player One"
                                        className="w-full px-4 py-3 bg-[#050b14] border border-white/10 rounded-lg text-white focus:border-cyan-500/50 focus:outline-none transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        defaultValue="player@squadx.com"
                                        className="w-full px-4 py-3 bg-[#050b14] border border-white/10 rounded-lg text-white focus:border-cyan-500/50 focus:outline-none transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        defaultValue="+91 XXXXXXXXXX"
                                        className="w-full px-4 py-3 bg-[#050b14] border border-white/10 rounded-lg text-white focus:border-cyan-500/50 focus:outline-none transition-colors"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Notification Settings */}
                        <div className="bg-[#0F1219] border border-white/10 rounded-xl p-6">
                            <h2 className="text-xl font-bold text-white mb-6 font-[Poppins]">Notifications</h2>
                            <div className="space-y-4">
                                {['Booking Confirmations', 'Promotional Emails', 'Session Reminders'].map((item) => (
                                    <div key={item} className="flex items-center justify-between py-2">
                                        <span className="text-white">{item}</span>
                                        <div className="relative">
                                            <input type="checkbox" defaultChecked className="sr-only peer" id={item} />
                                            <label
                                                htmlFor={item}
                                                className="block w-12 h-6 bg-white/10 rounded-full cursor-pointer peer-checked:bg-gradient-to-r peer-checked:from-cyan-600 peer-checked:to-blue-600 transition-all duration-300 relative"
                                            >
                                                <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform peer-checked:translate-x-6" />
                                            </label>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Preferences */}
                        <div className="bg-[#0F1219] border border-white/10 rounded-xl p-6">
                            <h2 className="text-xl font-bold text-white mb-6 font-[Poppins]">Preferences</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                                        Default Gaming Platform
                                    </label>
                                    <select className="w-full px-4 py-3 bg-[#050b14] border border-white/10 rounded-lg text-white focus:border-cyan-500/50 focus:outline-none transition-colors">
                                        <option>PC</option>
                                        <option>PS5</option>
                                        <option>XBOX</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                                        Language
                                    </label>
                                    <select className="w-full px-4 py-3 bg-[#050b14] border border-white/10 rounded-lg text-white focus:border-cyan-500/50 focus:outline-none transition-colors">
                                        <option>English</option>
                                        <option>हिन्दी</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Security */}
                        <div className="bg-[#0F1219] border border-white/10 rounded-xl p-6">
                            <h2 className="text-xl font-bold text-white mb-6 font-[Poppins]">Security</h2>
                            <div className="space-y-4">
                                <Button variant="outline" className="w-full">
                                    Change Password
                                </Button>
                                <Button variant="outline" className="w-full text-red-400 border-red-500/30 hover:bg-red-500/10">
                                    Delete Account
                                </Button>
                            </div>
                        </div>

                        {/* Save Button */}
                        <div className="flex justify-end gap-4 pt-6">
                            <Button variant="outline">Cancel</Button>
                            <Button variant="primary" className="clip-chamfer">
                                Save Changes
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
