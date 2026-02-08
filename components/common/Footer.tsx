import Link from 'next/link';
import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-[var(--surface)] border-t border-[var(--background)] mt-20">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-lg flex items-center justify-center">
                                <span className="text-2xl">🎮</span>
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent font-[Poppins]">
                                PlayBox
                            </span>
                        </div>
                        <p className="text-[var(--text-secondary)] text-sm">
                            Book your gaming slots, organize parties, and discover the best gaming lounges near you.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/book" className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors">Book a Station</Link></li>
                            <li><Link href="/about" className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* For Store Owners */}
                    <div>
                        <h4 className="font-bold mb-4">Admin & Staff</h4>
                        <ul className="space-y-2">
                            <li><Link href="/admin" className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors">Admin Console</Link></li>
                            <li><Link href="/dashboard" className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors">My Profile</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-bold mb-4">Support</h4>
                        <ul className="space-y-2">
                            <li><Link href="/faq" className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors">FAQ</Link></li>
                            <li><Link href="/privacy" className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-[var(--background)] mt-8 pt-8 text-center text-[var(--text-secondary)] text-sm">
                    <p>&copy; {new Date().getFullYear()} PlayBox. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
