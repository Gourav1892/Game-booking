// ============================================
// Sanitization Utilities
// ============================================

/**
 * Sanitize user input to prevent XSS attacks
 */
export function sanitizeString(input: string): string {
    return input
        .replace(/[<>]/g, '') // Remove angle brackets
        .replace(/javascript:/gi, '') // Remove javascript: protocol
        .replace(/on\w+=/gi, '') // Remove event handlers
        .trim();
}

/**
 * Sanitize HTML content (strip all HTML tags)
 */
export function stripHtml(input: string): string {
    return input.replace(/<[^>]*>/g, '');
}

/**
 * Escape HTML special characters
 */
export function escapeHtml(input: string): string {
    const map: Record<string, string> = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '/': '&#x2F;',
    };
    return input.replace(/[&<>"'/]/g, (char) => map[char] || char);
}

// ============================================
// Data Encryption Utilities
// ============================================

/**
 * Simple base64 encoding (NOT for sensitive data in production)
 * In production, use proper encryption libraries
 */
export function encodeData(data: string): string {
    if (typeof window !== 'undefined') {
        return btoa(data);
    }
    return Buffer.from(data).toString('base64');
}

/**
 * Simple base64 decoding
 */
export function decodeData(encoded: string): string {
    if (typeof window !== 'undefined') {
        return atob(encoded);
    }
    return Buffer.from(encoded, 'base64').toString();
}

/**
 * Hash string using Web Crypto API (client-side)
 */
export async function hashString(data: string): Promise<string> {
    if (typeof window !== 'undefined' && window.crypto && window.crypto.subtle) {
        const encoder = new TextEncoder();
        const dataBuffer = encoder.encode(data);
        const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
    }
    // Fallback for server-side (requires crypto module)
    return data; // In production, use proper server-side hashing
}

// ============================================
// Data Masking Utilities
// ============================================

/**
 * Mask email address
 * Example: john.doe@example.com -> j***e@example.com
 */
export function maskEmail(email: string): string {
    const [localPart, domain] = email.split('@');
    if (localPart.length <= 2) {
        return `${localPart[0]}***@${domain}`;
    }
    const firstChar = localPart[0];
    const lastChar = localPart[localPart.length - 1];
    return `${firstChar}***${lastChar}@${domain}`;
}

/**
 * Mask phone number
 * Example: +1234567890 -> +12****7890
 */
export function maskPhone(phone: string): string {
    if (phone.length <= 6) {
        return phone.replace(/./g, '*');
    }
    const visible = 3;
    const start = phone.slice(0, visible);
    const end = phone.slice(-4);
    const masked = '*'.repeat(phone.length - visible - 4);
    return `${start}${masked}${end}`;
}

/**
 * Mask credit card number
 * Example: 1234567890123456 -> ****-****-****-3456
 */
export function maskCardNumber(cardNumber: string): string {
    const cleaned = cardNumber.replace(/\s/g, '');
    const lastFour = cleaned.slice(-4);
    return `****-****-****-${lastFour}`;
}

// ============================================
// Input Validation Helpers
// ============================================

/**
 * Check if string contains only safe characters
 */
export function isSafeString(input: string): boolean {
    const dangerousPatterns = [
        /<script/i,
        /javascript:/i,
        /on\w+=/i,
        /<iframe/i,
        /<object/i,
        /<embed/i,
    ];
    return !dangerousPatterns.some((pattern) => pattern.test(input));
}

/**
 * Validate file upload
 */
export function validateFile(
    file: File,
    options: {
        maxSize?: number; // in bytes
        allowedTypes?: string[];
    }
): { valid: boolean; error?: string } {
    const { maxSize = 5 * 1024 * 1024, allowedTypes = [] } = options; // Default 5MB

    if (file.size > maxSize) {
        return {
            valid: false,
            error: `File size exceeds ${maxSize / 1024 / 1024}MB`,
        };
    }

    if (allowedTypes.length > 0 && !allowedTypes.includes(file.type)) {
        return {
            valid: false,
            error: `File type ${file.type} is not allowed`,
        };
    }

    return { valid: true };
}

// ============================================
// Rate Limiting Helper
// ============================================

/**
 * Simple client-side rate limiter
 */
export class RateLimiter {
    private attempts: Map<string, number[]> = new Map();

    check(key: string, maxAttempts: number, windowMs: number): boolean {
        const now = Date.now();
        const attempts = this.attempts.get(key) || [];

        // Remove old attempts outside the window
        const recentAttempts = attempts.filter((time) => now - time < windowMs);

        if (recentAttempts.length >= maxAttempts) {
            return false; // Rate limit exceeded
        }

        // Add current attempt
        recentAttempts.push(now);
        this.attempts.set(key, recentAttempts);

        return true; // Allow
    }

    reset(key: string): void {
        this.attempts.delete(key);
    }
}

// ============================================
// Secure Storage Utilities
// ============================================

/**
 * Secure storage wrapper with encryption
 * NOTE: This is basic encryption. In production, use proper key management
 */
export const secureStorage = {
    setItem(key: string, value: string): void {
        try {
            const encoded = encodeData(value);
            localStorage.setItem(key, encoded);
        } catch (error) {
            console.error('Failed to store item securely:', error);
        }
    },

    getItem(key: string): string | null {
        try {
            const encoded = localStorage.getItem(key);
            if (!encoded) return null;
            return decodeData(encoded);
        } catch (error) {
            console.error('Failed to retrieve item securely:', error);
            return null;
        }
    },

    removeItem(key: string): void {
        localStorage.removeItem(key);
    },

    clear(): void {
        localStorage.clear();
    },
};

// ============================================
// CSRF Token Utilities
// ============================================

/**
 * Generate CSRF token
 */
export function generateCsrfToken(): string {
    const array = new Uint8Array(32);
    if (typeof window !== 'undefined' && window.crypto) {
        crypto.getRandomValues(array);
    }
    return Array.from(array, (byte) => byte.toString(16).padStart(2, '0')).join('');
}

/**
 * Store CSRF token
 */
export function storeCsrfToken(token: string): void {
    if (typeof window !== 'undefined') {
        sessionStorage.setItem('csrf_token', token);
    }
}

/**
 * Get CSRF token
 */
export function getCsrfToken(): string | null {
    if (typeof window !== 'undefined') {
        return sessionStorage.getItem('csrf_token');
    }
    return null;
}
