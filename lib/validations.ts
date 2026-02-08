import { z } from 'zod';

// ============================================
// Authentication Validation Schemas
// ============================================

export const loginSchema = z.object({
    identifier: z
        .string()
        .min(1, 'Email or username is required')
        .refine(
            (val) => {
                // Check if it's a valid email or username
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
                return emailRegex.test(val) || usernameRegex.test(val);
            },
            {
                message: 'Must be a valid email or username (3-20 alphanumeric characters)',
            }
        ),
    password: z
        .string()
        .min(8, 'Password must be at least 8 characters')
        .max(100, 'Password is too long'),
});

export const registerSchema = z
    .object({
        username: z
            .string()
            .min(3, 'Username must be at least 3 characters')
            .max(20, 'Username must be at most 20 characters')
            .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
        email: z
            .string()
            .min(1, 'Email is required')
            .email('Invalid email address'),
        password: z
            .string()
            .min(8, 'Password must be at least 8 characters')
            .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
            .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
            .regex(/[0-9]/, 'Password must contain at least one number')
            .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),
        confirmPassword: z.string().min(1, 'Please confirm your password'),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ['confirmPassword'],
    });

// ============================================
// User Profile Validation Schemas
// ============================================

export const profileSchema = z.object({
    displayName: z
        .string()
        .min(2, 'Display name must be at least 2 characters')
        .max(50, 'Display name must be at most 50 characters')
        .regex(/^[a-zA-Z0-9\s]+$/, 'Display name can only contain letters, numbers, and spaces'),
    email: z
        .string()
        .email('Invalid email address'),
    phone: z
        .string()
        .regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number (E.164 format)')
        .optional()
        .or(z.literal('')),
});

// ============================================
// Booking Validation Schemas
// ============================================

export const bookingSchema = z.object({
    deviceId: z.string().min(1, 'Device is required'),
    gameId: z.string().min(1, 'Game is required'),
    date: z
        .string()
        .min(1, 'Date is required')
        .refine(
            (val) => {
                const date = new Date(val);
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                return date >= today;
            },
            {
                message: 'Date must be today or in the future',
            }
        ),
    time: z.string().min(1, 'Time is required'),
    duration: z
        .string()
        .min(1, 'Duration is required')
        .refine(
            (val) => ['1 hour', '2 hours', '3 hours', '4 hours'].includes(val),
            {
                message: 'Invalid duration',
            }
        ),
});

// ============================================
// Admin Validation Schemas
// ============================================

export const deviceSchema = z.object({
    name: z
        .string()
        .min(3, 'Device name must be at least 3 characters')
        .max(50, 'Device name must be at most 50 characters'),
    type: z.enum(['PC', 'PS5', 'XBOX'], {
        message: 'Invalid device type',
    }),
    status: z.enum(['Online', 'Occupied', 'Maintenance', 'Offline'], {
        message: 'Invalid status',
    }),
    specs: z.string().min(10, 'Specs description is too short'),
    pricePerHour: z
        .number()
        .positive('Price must be positive')
        .max(10000, 'Price is unrealistic'),
});

export const gameSchema = z.object({
    title: z
        .string()
        .min(1, 'Game title is required')
        .max(100, 'Game title is too long'),
    genre: z.string().min(1, 'Genre is required'),
    platforms: z
        .array(z.enum(['PC', 'PS5', 'XBOX']))
        .min(1, 'At least one platform is required'),
    description: z
        .string()
        .min(10, 'Description must be at least 10 characters')
        .max(500, 'Description is too long'),
});

// ============================================
// Contact Form Validation
// ============================================

export const contactSchema = z.object({
    name: z
        .string()
        .min(2, 'Name must be at least 2 characters')
        .max(100, 'Name is too long'),
    email: z.string().email('Invalid email address'),
    subject: z
        .string()
        .min(5, 'Subject must be at least 5 characters')
        .max(200, 'Subject is too long'),
    message: z
        .string()
        .min(10, 'Message must be at least 10 characters')
        .max(2000, 'Message is too long'),
});

// ============================================
// Type Exports
// ============================================

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type ProfileInput = z.infer<typeof profileSchema>;
export type BookingInput = z.infer<typeof bookingSchema>;
export type DeviceInput = z.infer<typeof deviceSchema>;
export type GameInput = z.infer<typeof gameSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
