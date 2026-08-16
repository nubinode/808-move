// 808 MOVE - 4-Step Interactive Booking Engine & Voucher Generator
import { CARS_DATA, ADDONS_DATA } from './data.js';
import { formatPrice, calculateRentalDays, generateBookingId, buildWhatsAppBookingLink, showToast } from './utils.js';

export let currentBookingState = {
  step: 1,
  serviceType: 'Self-Drive',
  pickupLocation: 'DPS Airport (Ngurah Rai) - International Terminal',
  returnLocation: 'DPS Airport (Ngurah Rai) - International Terminal',
  startDate: new Date(Date.now() + 86400000).toISOString().split('T')[0], // Tomorrow
  endDate: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0], // +3 days
  startTime: '10:00',
  endTime: '10:00',
  carId: 'mitsubishi-xpander',
  selectedAddons: ['full-cdw'],
  fullName: '',
  phone: '',
  email: '',
  hotelFlight: '',
  notes: '',
  paymentMethod: 'Credit / Debit Card',
  bookingId: ''
};

export function setBookingPreselect(carId, serviceType = 'Self-Drive') {
  currentBookingState.carId = carId;
  currentBookingState.serviceType = serviceType;
}

export function renderBookingFlow() {
  const container = document.getElementById('booking-view-content');
  if (!container) return;

  const days = calculateRentalDays(currentBookingState.startDate, currentBookingState.endDate);
  const selectedCar = CARS_DATA.find(c => c.id === currentBookingState.carId) || CARS_DATA[0];
  
  // Compute price
  const baseRate = currentBookingState.serviceType === 'With Driver' ? selectedCar.priceWithDriver : selectedCar.pricePerDay;
  const carTotal = baseRate * days;
  
  let addonTotal = 0;
  const activeAddonObjs = ADDONS_DATA.filter(a => currentBookingState.selectedAddons.includes(a.id));
  activeAddonObjs.forEach(a => {
    addonTotal += (a.pricePerDay * days);
  });
  
  const grandTotal = carTotal + addonTotal;

  container.innerHTML = `
    <div class="booking-wizard">
      <!-- Stepper Header -->
      <div class="stepper-header">
        <div class="stepper-step ${currentBookingState.step >= 1 ? 'active' : ''} ${currentBookingState.step > 1 ? 'completed' : ''}">
          <div class="step-num">${currentBookingState.step > 1 ? '✓' : '1'}</div>
          <div class="step-label">1. Dates & Location</div>
        </div>
        <div class="stepper-step ${currentBookingState.step >= 2 ? 'active' : ''} ${currentBookingState.step > 2 ? 'completed' : ''}">
          <div class="step-num">${currentBookingState.step > 2 ? '✓' : '2'}</div>
          <div class="step-label">2. Vehicle & Add-ons</div>
        </div>
        <div class="stepper-step ${currentBookingState.step >= 3 ? 'active' : ''} ${currentBookingState.step > 3 ? 'completed' : ''}">
          <div class="step-num">${currentBookingState.step > 3 ? '✓' : '3'}</div>
          <div class="step-label">3. Guest Details</div>
        </div>
        <div class="stepper-step ${currentBookingState.step >= 4 ? 'active' : ''}">
          <div class="step-num">4</div>
          <div class="step-label">4. Payment & Confirm</div>
        </div>
      </div>

      <!-- Step Content -->
      <div class="step-body">
        ${renderStepContent(currentBookingState.step, { selectedCar, days, grandTotal, carTotal, addonTotal, activeAddonObjs })}
      </div>
    </div>
  `;

  attachBookingEvents(grandTotal, selectedCar, days);
}

function renderStepContent(step, { selectedCar, days, grandTotal, carTotal, addonTotal, activeAddonObjs }) {
  if (step === 1) {
    return `
      <h3 style="font-size: 1.5rem; margin-bottom: 20px;">Step 1: Pick-up & Return Logistics</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 24px;">
        <div class="search-input-group">
          <label>Service Type</label>
          <select id="step1-service">
            <option value="Self-Drive" ${currentBookingState.serviceType === 'Self-Drive' ? 'selected' : ''}>Self-Drive (Lepas Kunci)</option>
            <option value="With Driver" ${currentBookingState.serviceType === 'With Driver' ? 'selected' : ''}>With Private English-Speaking Driver</option>
          </select>
        </div>
        <div class="search-input-group">
          <label>Pick-up Location</label>
          <select id="step1-pickup">
            <option ${currentBookingState.pickupLocation.includes('Airport') ? 'selected' : ''}>DPS Airport (Ngurah Rai) - Arrival Hall</option>
            <option ${currentBookingState.pickupLocation.includes('Seminyak') ? 'selected' : ''}>Seminyak / Legian / Kuta (Free Delivery)</option>
            <option ${currentBookingState.pickupLocation.includes('Canggu') ? 'selected' : ''}>Canggu / Pererenan (Villa Delivery)</option>
            <option ${currentBookingState.pickupLocation.includes('Ubud') ? 'selected' : ''}>Ubud Center / Resort</option>
            <option ${currentBookingState.pickupLocation.includes('Sanur') ? 'selected' : ''}>Sanur Harbour / Hotel Area</option>
            <option ${currentBookingState.pickupLocation.includes('Uluwatu') ? 'selected' : ''}>Uluwatu / Jimbaran / Nusa Dua</option>
          </select>
        </div>
        <div class="search-input-group">
          <label>Pick-up Date & Time</label>
          <div style="display: flex; gap: 8px;">
            <input type="date" id="step1-start-date" value="${currentBookingState.startDate}" style="flex: 2;">
            <input type="time" id="step1-start-time" value="${currentBookingState.startTime}" style="flex: 1;">
          </div>
        </div>
        <div class="search-input-group">
          <label>Return Date & Time</label>
          <div style="display: flex; gap: 8px;">
            <input type="date" id="step1-end-date" value="${currentBookingState.endDate}" style="flex: 2;">
            <input type="time" id="step1-end-time" value="${currentBookingState.endTime}" style="flex: 1;">
          </div>
        </div>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-subtle); padding-top: 20px;">
        <span style="color: var(--color-gold); font-weight: 600;">Total Duration: ${days} Days</span>
        <button class="btn btn-primary" id="btn-goto-step-2">Continue to Vehicle & Add-ons →</button>
      </div>
    `;
  }

  if (step === 2) {
    return `
      <h3 style="font-size: 1.5rem; margin-bottom: 20px;">Step 2: Confirm Vehicle & Optional Extras</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-bottom: 24px;">
        ${CARS_DATA.map(car => `
          <div class="car-card" style="padding: 16px; cursor: pointer; border: ${car.id === currentBookingState.carId ? '2px solid var(--color-gold)' : '1px solid var(--border-subtle)'}; background: ${car.id === currentBookingState.carId ? 'rgba(197, 168, 128, 0.08)' : 'var(--bg-surface-elevated)'}" onclick="window.selectCarInBooking('${car.id}')">
            <div style="display: flex; gap: 14px; align-items: center;">
              <img src="${car.image}" style="width: 90px; height: 60px; object-fit: cover; border-radius: 8px;">
              <div>
                <h4 style="font-size: 1.05rem;">${car.name}</h4>
                <div style="color: var(--color-gold-light); font-weight: 700; font-size: 0.95rem;">
                  ${formatPrice(currentBookingState.serviceType === 'With Driver' ? car.priceWithDriver : car.pricePerDay)} / day
                </div>
                <div style="font-size: 0.78rem; color: var(--text-muted);">${car.seats} Seats • ${car.transmission}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <h4 style="font-size: 1.15rem; margin: 28px 0 14px; color: var(--color-gold);">Recommended Island Extras & Add-ons:</h4>
      <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 28px;">
        ${ADDONS_DATA.map(addon => {
          const isChecked = currentBookingState.selectedAddons.includes(addon.id);
          return `
            <label style="display: flex; align-items: center; justify-content: space-between; background: var(--bg-surface-elevated); border: 1px solid ${isChecked ? 'var(--color-gold)' : 'var(--border-subtle)'}; padding: 14px 18px; border-radius: var(--radius-sm); cursor: pointer;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <input type="checkbox" value="${addon.id}" class="addon-checkbox" ${isChecked ? 'checked' : ''} style="width: 18px; height: 18px; accent-color: var(--color-gold);">
                <div>
                  <div style="font-weight: 600; font-size: 0.95rem;">${addon.name}</div>
                  <div style="font-size: 0.8rem; color: var(--text-muted);">${addon.desc}</div>
                </div>
              </div>
              <div style="color: var(--color-gold-light); font-weight: 700; font-size: 0.9rem;">
                +${formatPrice(addon.pricePerDay)}/day
              </div>
            </label>
          `;
        }).join('')}
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-subtle); padding-top: 20px;">
        <button class="btn btn-secondary" onclick="window.setBookingStep(1)">← Back</button>
        <button class="btn btn-primary" id="btn-goto-step-3">Continue to Guest Details →</button>
      </div>
    `;
  }

  if (step === 3) {
    return `
      <h3 style="font-size: 1.5rem; margin-bottom: 20px;">Step 3: Guest & Contact Information</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 24px;">
        <div class="search-input-group">
          <label>Full Name (as in Passport / KTP) *</label>
          <input type="text" id="step3-name" placeholder="e.g. Johnathan Smith" value="${currentBookingState.fullName}" required>
        </div>
        <div class="search-input-group">
          <label>WhatsApp Number (with Country Code) *</label>
          <input type="tel" id="step3-phone" placeholder="e.g. +61 412 345 678 or 08123456789" value="${currentBookingState.phone}" required>
        </div>
        <div class="search-input-group">
          <label>Email Address</label>
          <input type="email" id="step3-email" placeholder="e.g. name@example.com" value="${currentBookingState.email}">
        </div>
        <div class="search-input-group">
          <label>Flight No. / Villa / Hotel Address</label>
          <input type="text" id="step3-hotel" placeholder="e.g. GA402 or W Hotel Seminyak" value="${currentBookingState.hotelFlight}">
        </div>
        <div class="search-input-group" style="grid-column: 1 / -1;">
          <label>Special Requests / Notes</label>
          <textarea id="step3-notes" rows="2" placeholder="e.g. Need child seat installed, late night arrival at 11:30 PM..." style="width: 100%; background: var(--bg-input); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px; color: var(--text-primary);">${currentBookingState.notes}</textarea>
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-subtle); padding-top: 20px;">
        <button class="btn btn-secondary" onclick="window.setBookingStep(2)">← Back</button>
        <button class="btn btn-primary" id="btn-goto-step-4">Review & Proceed to Payment →</button>
      </div>
    `;
  }

  if (step === 4) {
    return `
      <h3 style="font-size: 1.5rem; margin-bottom: 20px;">Step 4: Review Summary & Payment Selection</h3>
      <div style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 28px; margin-bottom: 28px;">
        <!-- Breakdown -->
        <div style="background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 24px;">
          <h4 style="font-size: 1.15rem; margin-bottom: 16px; color: var(--color-gold);">Booking Summary</h4>
          <div style="display: flex; flex-direction: column; gap: 12px; font-size: 0.92rem;">
            <div style="display: flex; justify-content: space-between;">
              <span style="color: var(--text-secondary);">Vehicle:</span>
              <strong>${selectedCar.name} (${currentBookingState.serviceType})</strong>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span style="color: var(--text-secondary);">Duration:</span>
              <span>${currentBookingState.startDate} to ${currentBookingState.endDate} (<strong>${days} Days</strong>)</span>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span style="color: var(--text-secondary);">Pick-up & Drop-off:</span>
              <span style="text-align: right; max-width: 60%;">${currentBookingState.pickupLocation}</span>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span style="color: var(--text-secondary);">Guest:</span>
              <span>${currentBookingState.fullName} (${currentBookingState.phone})</span>
            </div>
            <hr style="border: none; border-top: 1px solid var(--border-subtle); margin: 6px 0;">
            <div style="display: flex; justify-content: space-between;">
              <span>Base Rental (${days} days x ${formatPrice(selectedCar.pricePerDay)}):</span>
              <span>${formatPrice(carTotal)}</span>
            </div>
            ${activeAddonObjs.map(a => `
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem; color: var(--text-secondary);">
                <span>+ ${a.name} (${days}d):</span>
                <span>${formatPrice(a.pricePerDay * days)}</span>
              </div>
            `).join('')}
            <div style="display: flex; justify-content: space-between; font-size: 1.25rem; font-weight: 800; color: var(--color-gold-light); margin-top: 10px; padding-top: 12px; border-top: 1px solid var(--border-gold);">
              <span>Estimated Total:</span>
              <span>${formatPrice(grandTotal)}</span>
            </div>
          </div>
        </div>

        <!-- Payment Method Selection -->
        <div style="display: flex; flex-direction: column; gap: 14px;">
          <h4 style="font-size: 1.15rem; color: var(--color-gold);">Payment Method</h4>
          <label style="display: flex; align-items: center; gap: 12px; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); padding: 14px; border-radius: var(--radius-sm); cursor: pointer;">
            <input type="radio" name="paymethod" value="Credit / Debit Card" checked style="accent-color: var(--color-gold);">
            <div>
              <div style="font-weight: 600;">Credit / Debit Card (3D Secure)</div>
              <div style="font-size: 0.78rem; color: var(--text-muted);">Visa, Mastercard, JCB, Amex</div>
            </div>
          </label>
          <label style="display: flex; align-items: center; gap: 12px; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); padding: 14px; border-radius: var(--radius-sm); cursor: pointer;">
            <input type="radio" name="paymethod" value="QRIS Instant Pay" style="accent-color: var(--color-gold);">
            <div>
              <div style="font-weight: 600;">QRIS Instant Pay (Indonesia)</div>
              <div style="font-size: 0.78rem; color: var(--text-muted);">BCA Mobile, GoPay, OVO, Dana, ShopeePay</div>
            </div>
          </label>
          <label style="display: flex; align-items: center; gap: 12px; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); padding: 14px; border-radius: var(--radius-sm); cursor: pointer;">
            <input type="radio" name="paymethod" value="Pay on Arrival / Cash" style="accent-color: var(--color-gold);">
            <div>
              <div style="font-weight: 600;">Pay on Arrival in Bali (Cash / Card)</div>
              <div style="font-size: 0.78rem; color: var(--text-muted);">Pay upon vehicle handover at Airport / Villa</div>
            </div>
          </label>
          
          <div style="background: rgba(197, 168, 128, 0.08); border: 1px dashed var(--border-gold); padding: 12px; border-radius: var(--radius-sm); font-size: 0.8rem; color: var(--text-secondary);">
            🔒 Free Cancellation up to 24 hours prior to pick-up. No credit card charge until reservation confirmation.
          </div>
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-subtle); padding-top: 20px;">
        <button class="btn btn-secondary" onclick="window.setBookingStep(3)">← Back</button>
        <button class="btn btn-primary btn-lg" id="btn-submit-booking">✨ Complete Reservation Now</button>
      </div>
    `;
  }
}

function attachBookingEvents(grandTotal, selectedCar, days) {
  // Step 1 events
  const btnStep2 = document.getElementById('btn-goto-step-2');
  if (btnStep2) {
    btnStep2.addEventListener('click', () => {
      currentBookingState.serviceType = document.getElementById('step1-service').value;
      currentBookingState.pickupLocation = document.getElementById('step1-pickup').value;
      currentBookingState.startDate = document.getElementById('step1-start-date').value;
      currentBookingState.startTime = document.getElementById('step1-start-time').value;
      currentBookingState.endDate = document.getElementById('step1-end-date').value;
      currentBookingState.endTime = document.getElementById('step1-end-time').value;
      window.setBookingStep(2);
    });
  }

  // Step 2 events
  const btnStep3 = document.getElementById('btn-goto-step-3');
  if (btnStep3) {
    btnStep3.addEventListener('click', () => {
      const checkedBoxes = Array.from(document.querySelectorAll('.addon-checkbox:checked')).map(cb => cb.value);
      currentBookingState.selectedAddons = checkedBoxes;
      window.setBookingStep(3);
    });
  }

  // Step 3 events
  const btnStep4 = document.getElementById('btn-goto-step-4');
  if (btnStep4) {
    btnStep4.addEventListener('click', () => {
      const name = document.getElementById('step3-name').value.trim();
      const phone = document.getElementById('step3-phone').value.trim();
      if (!name || !phone) {
        showToast('Please enter your full name and WhatsApp number to continue.', 'info');
        return;
      }
      currentBookingState.fullName = name;
      currentBookingState.phone = phone;
      currentBookingState.email = document.getElementById('step3-email').value.trim();
      currentBookingState.hotelFlight = document.getElementById('step3-hotel').value.trim();
      currentBookingState.notes = document.getElementById('step3-notes').value.trim();
      window.setBookingStep(4);
    });
  }

  // Step 4 events (Submit)
  const btnSubmit = document.getElementById('btn-submit-booking');
  if (btnSubmit) {
    btnSubmit.addEventListener('click', () => {
      const paymethod = document.querySelector('input[name="paymethod"]:checked')?.value || 'Credit Card';
      currentBookingState.paymentMethod = paymethod;
      currentBookingState.bookingId = generateBookingId();
      currentBookingState.totalPrice = grandTotal;
      currentBookingState.carName = selectedCar.name;
      currentBookingState.days = days;
      currentBookingState.addons = ADDONS_DATA.filter(a => currentBookingState.selectedAddons.includes(a.id)).map(a => a.name);

      // Open Confirmation Modal
      showBookingConfirmationModal(currentBookingState);
    });
  }
}

export function showBookingConfirmationModal(bookingData) {
  let modal = document.getElementById('confirmation-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'confirmation-modal';
    modal.className = 'modal-overlay';
    document.body.appendChild(modal);
  }

  const waLink = buildWhatsAppBookingLink(bookingData);

  modal.innerHTML = `
    <div class="modal-card" style="text-align: center;">
      <button class="modal-close-btn" onclick="document.getElementById('confirmation-modal').classList.remove('open')">✕</button>
      
      <div style="width: 70px; height: 70px; border-radius: 50%; background: #10b981; color: white; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin: 0 auto 20px; box-shadow: 0 10px 25px rgba(16, 185, 129, 0.4);">
        ✓
      </div>

      <h2 style="font-size: 1.8rem; margin-bottom: 8px;">Reservation Confirmed!</h2>
      <p style="color: var(--text-secondary); margin-bottom: 24px;">Your booking reference ID is: <strong style="color: var(--color-gold); font-size: 1.2rem;">#${bookingData.bookingId}</strong></p>

      <div style="background: var(--bg-surface-elevated); border: 1px solid var(--border-gold); border-radius: var(--radius-md); padding: 20px; text-align: left; margin-bottom: 24px; font-size: 0.9rem;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div><span style="color: var(--text-muted);">Guest:</span> <strong>${bookingData.fullName}</strong></div>
          <div><span style="color: var(--text-muted);">Vehicle:</span> <strong>${bookingData.carName}</strong></div>
          <div><span style="color: var(--text-muted);">Pick-up:</span> ${bookingData.startDate} (${bookingData.startTime})</div>
          <div><span style="color: var(--text-muted);">Return:</span> ${bookingData.endDate} (${bookingData.endTime})</div>
          <div style="grid-column: span 2;"><span style="color: var(--text-muted);">Location:</span> ${bookingData.pickupLocation}</div>
          <div style="grid-column: span 2; border-top: 1px solid var(--border-subtle); padding-top: 10px; display: flex; justify-content: space-between;">
            <span style="font-weight: 700; color: var(--color-gold);">Total Estimated:</span>
            <span style="font-weight: 800; font-size: 1.1rem; color: var(--color-gold-light);">${formatPrice(bookingData.totalPrice)}</span>
          </div>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 12px;">
        <a href="${waLink}" target="_blank" class="btn btn-whatsapp btn-lg">
          💬 Send Booking to WhatsApp Concierge
        </a>
        <button class="btn btn-secondary" onclick="window.printVoucher()">
          🖨️ Print / Save Booking Voucher
        </button>
      </div>
    </div>
  `;

  modal.classList.add('open');
  showToast('Booking successfully recorded! Please connect with WhatsApp concierge.');
}

// Global hook helpers for onclicks in strings
window.setBookingStep = function(step) {
  currentBookingState.step = step;
  renderBookingFlow();
  window.scrollTo({ top: document.querySelector('.booking-wizard')?.offsetTop - 100 || 0, behavior: 'smooth' });
};

window.selectCarInBooking = function(carId) {
  currentBookingState.carId = carId;
  renderBookingFlow();
};

window.printVoucher = function() {
  window.print();
};
