// 808 MOVE - Utility Helpers
import { CURRENCY_RATES } from './data.js';

export const WHATSAPP_NUMBER = '628118088080'; // Replace with official 808 MOVE WhatsApp number

export function getActiveCurrency() {
  return localStorage.getItem('808_currency') || 'IDR';
}

export function setActiveCurrency(curr) {
  if (CURRENCY_RATES[curr]) {
    localStorage.setItem('808_currency', curr);
    window.dispatchEvent(new CustomEvent('currency-changed', { detail: curr }));
  }
}

export function formatPrice(amountInIDR, currency = null) {
  const activeCurr = currency || getActiveCurrency();
  const currObj = CURRENCY_RATES[activeCurr] || CURRENCY_RATES.IDR;
  return currObj.format(amountInIDR);
}

export function calculateRentalDays(startDateStr, endDateStr) {
  if (!startDateStr || !endDateStr) return 1;
  const start = new Date(startDateStr);
  const end = new Date(endDateStr);
  const diffTime = end.getTime() - start.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 1;
}

export function generateBookingId() {
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `808-BLI-${rand}`;
}

export function buildWhatsAppBookingLink(bookingData) {
  const text = `*NEW BOOKING RESERVATION - 808 MOVE BALI* 🌴🚗%0A` +
    `----------------------------------------%0A` +
    `*Booking ID:* ${bookingData.bookingId || 'PENDING'}%0A` +
    `*Vehicle / Service:* ${bookingData.carName}%0A` +
    `*Service Type:* ${bookingData.serviceType || 'Self-Drive'}%0A` +
    `*Pick-up Location:* ${bookingData.pickupLocation}%0A` +
    `*Return Location:* ${bookingData.returnLocation || bookingData.pickupLocation}%0A` +
    `*Dates:* ${bookingData.startDate} to ${bookingData.endDate} (${bookingData.days} Days)%0A` +
    `*Add-ons:* ${bookingData.addons && bookingData.addons.length ? bookingData.addons.join(', ') : 'None'}%0A` +
    `----------------------------------------%0A` +
    `*Guest Name:* ${bookingData.fullName}%0A` +
    `*WhatsApp:* ${bookingData.phone}%0A` +
    `*Email:* ${bookingData.email || '-'}%0A` +
    `*Hotel / Flight No:* ${bookingData.hotelFlight || '-'}%0A` +
    `*Payment Method:* ${bookingData.paymentMethod || 'Pay on Arrival / Card'}%0A` +
    `*Estimated Total:* ${formatPrice(bookingData.totalPrice, 'IDR')} (${formatPrice(bookingData.totalPrice, 'AUD')})%0A` +
    `----------------------------------------%0A` +
    `Hi 808 Move team, please confirm car availability for this schedule. Thank you!`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export function buildWhatsAppDirectInquiry(subject = 'General Inquiry') {
  const text = `Hi 808 MOVE Bali! 🌴 I am interested in: *${subject}*. Could you please help me with availability and details?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function showToast(message, type = 'success') {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = `toast-item toast-${type}`;
  toast.innerHTML = `
    <div class="toast-content">
      <span class="toast-icon">${type === 'success' ? '✓' : 'ℹ'}</span>
      <span>${message}</span>
    </div>
  `;

  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('show');
  }, 10);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
