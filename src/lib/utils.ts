import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Build a WhatsApp URL for mobile (wa.me) or desktop (web.whatsapp.com)
 * Automatically detects environment - use on client side only
 */
export function getWhatsAppUrl(phone: string, message: string): string {
  const encodedMessage = encodeURIComponent(message)
  // Use web.whatsapp.com for desktop, wa.me for mobile
  if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
    return `https://web.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`
  }
  return `https://wa.me/${phone}?text=${encodedMessage}`
}

/**
 * Format a phone number to E.164 format for tel: links
 */
export function formatTelLink(phone: string): string {
  return `tel:+${phone.replace(/\D/g, '')}`
}

/**
 * Format a number with optional suffix for stat counters
 */
export function formatStatNumber(value: number, suffix = ''): string {
  return `${value}${suffix}`
}

/**
 * Clamp a number between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

/**
 * Ease out cubic function for animations
 */
export function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}
