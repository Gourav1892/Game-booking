import React from 'react';
import Modal from '../common/Modal';
import Button from '../common/Button';

interface BookingConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    bookingDetails: {
        storeName: string;
        console: string;
        date: Date;
        time: string;
        price: number;
        bookingId: string;
    } | null;
}

export default function BookingConfirmationModal({ isOpen, onClose, bookingDetails }: BookingConfirmationModalProps) {
    if (!bookingDetails) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Booking Confirmed! 🎉">
            <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">✅</span>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">You&apos;re all set!</h3>
                    <p className="text-[var(--text-secondary)]">
                        Your gaming slot at <span className="text-[var(--primary)] font-semibold">{bookingDetails.storeName}</span> has been confirmed.
                    </p>
                </div>

                <div className="bg-[var(--background)] p-4 rounded-xl border border-[var(--text-secondary)]/10 text-left space-y-3">
                    <div className="flex justify-between">
                        <span className="text-[var(--text-secondary)]">Booking ID</span>
                        <span className="font-mono font-bold">{bookingDetails.bookingId}</span>
                    </div>
                    <div className="h-px bg-[var(--text-secondary)]/10" />
                    <div className="flex justify-between">
                        <span className="text-[var(--text-secondary)]">Date & Time</span>
                        <span className="font-medium">
                            {bookingDetails.date.toLocaleDateString()} • {bookingDetails.time}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-[var(--text-secondary)]">Console</span>
                        <span className="font-medium">{bookingDetails.console}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-[var(--text-secondary)]">Total Paid</span>
                        <span className="font-bold text-[var(--success)]">₹{bookingDetails.price}</span>
                    </div>
                </div>

                <p className="text-xs text-[var(--text-secondary)]">
                    A confirmation email has been sent to your registered email address.
                    Please reach the venue 10 minutes prior to your slot.
                </p>

                <Button onClick={onClose} className="w-full">
                    Done
                </Button>
            </div>
        </Modal>
    );
}
