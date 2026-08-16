// 808 MOVE - Single Page Application Router & View Renderer
import { CARS_DATA, AIRPORT_RATES, DRIVER_PACKAGES, BALI_GUIDES, PACKAGES_DATA, REVIEWS_DATA, FAQS_DATA } from './data.js';
import { formatPrice, getActiveCurrency, setActiveCurrency, buildWhatsAppDirectInquiry, showToast } from './utils.js';
import { renderBookingFlow, setBookingPreselect } from './booking.js';

// App State
let currentRoute = 'home';
let currentCarFilter = 'all';
let currentTransmissionFilter = 'all';

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  setupCurrencySelector();
  setupNavigation();
  handleRoute();

  // Listen for currency updates to re-render active view
  window.addEventListener('currency-changed', () => {
    renderCurrentRoute();
  });

  // Listen to hash changes for routing
  window.addEventListener('hashchange', handleRoute);
});

// Router
function handleRoute() {
  const hash = window.location.hash.replace('#', '') || 'home';
  const [route, param] = hash.split('?');
  currentRoute = route;

  // Highlight active nav item
  document.querySelectorAll('.nav-link').forEach(link => {
    const target = link.getAttribute('data-route');
    if (target === currentRoute) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Close mobile nav menu
  const mobileNav = document.getElementById('nav-links');
  if (mobileNav) mobileNav.classList.remove('open');

  renderCurrentRoute(param);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderCurrentRoute(param) {
  const appContainer = document.getElementById('app-main');
  if (!appContainer) return;

  switch (currentRoute) {
    case 'home':
      renderHome(appContainer);
      break;
    case 'cars':
      renderCars(appContainer);
      break;
    case 'car-detail':
      renderCarDetail(appContainer, param);
      break;
    case 'booking':
      renderBooking(appContainer);
      break;
    case 'airport-transfer':
      renderAirportTransfer(appContainer);
      break;
    case 'with-driver':
      renderWithDriver(appContainer);
      break;
    case 'bali-guide':
      renderBaliGuide(appContainer);
      break;
    case 'packages':
      renderPackages(appContainer);
      break;
    case 'reviews':
      renderReviews(appContainer);
      break;
    case 'about':
      renderAbout(appContainer);
      break;
    case 'contact':
      renderContact(appContainer);
      break;
    case 'faq':
      renderFAQ(appContainer);
      break;
    default:
      renderHome(appContainer);
  }
}

// 01. HOME VIEW
function renderHome(container) {
  container.innerHTML = `
    <!-- Hero Banner -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-pill">
            <span>🌴</span> Bali's Premier Self-Drive & Chauffeur Fleet
          </div>
          <h1 class="hero-title">
            MOVE FREELY.<br>
            <span class="text-gold-gradient">EXPERIENCE BALI.</span>
          </h1>
          <p class="hero-subtitle">
            Premium, late-model cars delivered directly to DPS Airport or your luxury villa. Transparent pricing, zero hidden fees, and 24/7 road concierge.
          </p>
        </div>

        <!-- Quick Booking Search Widget -->
        <div class="search-widget">
          <div class="search-service-tabs">
            <button class="search-tab-btn active" onclick="window.setHomeSearchService('Self-Drive', this)">🚗 Self-Drive (Lepas Kunci)</button>
            <button class="search-tab-btn" onclick="window.setHomeSearchService('With Driver', this)">👔 With Private Driver</button>
            <button class="search-tab-btn" onclick="window.location.hash = '#airport-transfer'">✈️ Airport Transfer</button>
          </div>
          <div class="search-grid">
            <div class="search-input-group">
              <label>Pick-up Location</label>
              <select id="home-search-pickup">
                <option>DPS Airport (Ngurah Rai) - Arrival Hall</option>
                <option>Seminyak / Legian / Kuta</option>
                <option>Canggu / Pererenan</option>
                <option>Ubud Center</option>
                <option>Sanur / Nusa Dua / Uluwatu</option>
              </select>
            </div>
            <div class="search-input-group">
              <label>Pick-up Date</label>
              <input type="date" id="home-search-start" value="${new Date(Date.now() + 86400000).toISOString().split('T')[0]}">
            </div>
            <div class="search-input-group">
              <label>Return Date</label>
              <input type="date" id="home-search-end" value="${new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0]}">
            </div>
            <div class="search-input-group">
              <label>Preferred Vehicle</label>
              <select id="home-search-car">
                <option value="all">All Vehicle Types</option>
                <option value="Economy">Economy (Hatchback)</option>
                <option value="MPV">Family MPV (7-Seater)</option>
                <option value="SUV">SUV & Crossover</option>
                <option value="Luxury">VIP & Luxury (Alphard)</option>
              </select>
            </div>
            <button class="btn btn-primary" id="btn-home-search" onclick="window.executeHomeSearch()">
              Find Cars →
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Why 808 Move -->
    <section class="section" style="background: var(--bg-surface);">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">The 808 Move Difference</span>
          <h2 class="section-title">Engineered for Seamless Island Exploration</h2>
          <p class="section-desc">Experience hospitality-grade vehicle rental designed specifically for Bali travelers.</p>
        </div>
        <div class="usp-grid">
          <div class="usp-card">
            <div class="usp-icon">✨</div>
            <h3 class="usp-title">100% Late-Model Fleet</h3>
            <p class="usp-desc">All vehicles are under 3 years old, immaculately detailed, sanitized, and routinely serviced at authorized dealerships.</p>
          </div>
          <div class="usp-card">
            <div class="usp-icon">🛡️</div>
            <h3 class="usp-title">Comprehensive Insurance</h3>
            <p class="usp-desc">Drive with total peace of mind with our Collision Damage Waiver (CDW) and optional Zero-Excess protection.</p>
          </div>
          <div class="usp-card">
            <div class="usp-icon">✈️</div>
            <h3 class="usp-title">Free Airport & Villa Delivery</h3>
            <p class="usp-desc">Step off your plane and receive your vehicle at DPS Airport or have it delivered to your hotel lobby anywhere in South Bali.</p>
          </div>
          <div class="usp-card">
            <div class="usp-icon">💬</div>
            <h3 class="usp-title">24/7 WhatsApp Concierge</h3>
            <p class="usp-desc">Instant roadside assistance, tire emergency rescue, and live English/Indonesian customer support anytime.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Fleet -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Our Premier Fleet</span>
          <h2 class="section-title">Popular Cars for Bali Roads</h2>
          <p class="section-desc">From nimble hatchbacks for bustling Canggu shortcuts to executive hybrid SUVs for scenic mountain climbs.</p>
        </div>
        <div class="cars-grid">
          ${CARS_DATA.filter(c => c.featured).map(car => renderCarCard(car)).join('')}
        </div>
        <div style="text-align: center; margin-top: 40px;">
          <a href="#cars" class="btn btn-secondary btn-lg">View Complete Fleet (8 Models) →</a>
        </div>
      </div>
    </section>

    <!-- Bali Destinations Preview -->
    <section class="section" style="background: var(--bg-surface);">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Travel Inspiration</span>
          <h2 class="section-title">Where Will Your 808 Move Take You?</h2>
          <p class="section-desc">Discover the most scenic driving routes and hidden beaches across Bali Island.</p>
        </div>
        <div class="guide-grid">
          ${BALI_GUIDES.map(guide => `
            <div class="guide-card">
              <div class="guide-img-box">
                <img src="${guide.image}" alt="${guide.title}">
                <div class="guide-badge">${guide.region}</div>
              </div>
              <div class="guide-content">
                <h3 class="guide-title">${guide.title}</h3>
                <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 12px;"><strong>Best Car:</strong> ${guide.bestCar}</p>
                <a href="#bali-guide" class="text-gold" style="font-size: 0.85rem; font-weight: 600;">Read Travel Guide & Tips →</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- CTA Booking Banner -->
    <section class="section" style="padding: 90px 0; background: radial-gradient(circle, rgba(197, 168, 128, 0.15) 0%, rgba(10, 11, 14, 1) 80%);">
      <div class="container" style="text-align: center; max-width: 780px;">
        <h2 style="font-size: 2.6rem; margin-bottom: 16px;">Ready to Explore Bali Without Boundaries?</h2>
        <p style="color: var(--text-secondary); font-size: 1.1rem; margin-bottom: 32px;">Reserve your vehicle in less than 2 minutes with instant WhatsApp confirmation and zero upfront cancellation penalty.</p>
        <div style="display: flex; justify-content: center; gap: 16px; flex-wrap: wrap;">
          <a href="#booking" class="btn btn-primary btn-lg">Book Your Car Now ✨</a>
          <a href="${buildWhatsAppDirectInquiry('Car Rental Inquiry')}" target="_blank" class="btn btn-whatsapp btn-lg">💬 Chat on WhatsApp</a>
        </div>
      </div>
    </section>
  `;
}

// 02. CARS CATALOG VIEW
function renderCars(container) {
  const filteredCars = CARS_DATA.filter(car => {
    const matchCat = currentCarFilter === 'all' || car.category.toLowerCase() === currentCarFilter.toLowerCase();
    const matchTrans = currentTransmissionFilter === 'all' || car.transmission.toLowerCase().includes(currentTransmissionFilter.toLowerCase());
    return matchCat && matchTrans;
  });

  container.innerHTML = `
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Explore Our Fleet</span>
          <h1 class="section-title">Premium Rental Cars in Bali</h1>
          <p class="section-desc">Choose from self-drive hatchbacks, spacious family MPVs, commanding 4x4 SUVs, and VIP luxury vans.</p>
        </div>

        <!-- Filter Bar -->
        <div class="filter-bar">
          <div class="filter-group">
            <button class="filter-chip ${currentCarFilter === 'all' ? 'active' : ''}" onclick="window.setCarCategoryFilter('all')">All Cars (${CARS_DATA.length})</button>
            <button class="filter-chip ${currentCarFilter === 'economy' ? 'active' : ''}" onclick="window.setCarCategoryFilter('economy')">Economy</button>
            <button class="filter-chip ${currentCarFilter === 'mpv' ? 'active' : ''}" onclick="window.setCarCategoryFilter('mpv')">Family MPV</button>
            <button class="filter-chip ${currentCarFilter === 'suv' ? 'active' : ''}" onclick="window.setCarCategoryFilter('suv')">SUV / 4x4</button>
            <button class="filter-chip ${currentCarFilter === 'luxury' ? 'active' : ''}" onclick="window.setCarCategoryFilter('luxury')">VIP Luxury</button>
          </div>

          <div style="display: flex; align-items: center; gap: 12px;">
            <span style="font-size: 0.85rem; color: var(--text-secondary);">Transmission:</span>
            <select class="currency-select" onchange="window.setCarTransmissionFilter(this.value)">
              <option value="all" ${currentTransmissionFilter === 'all' ? 'selected' : ''}>All Transmissions</option>
              <option value="automatic" ${currentTransmissionFilter === 'automatic' ? 'selected' : ''}>Automatic Only</option>
              <option value="manual" ${currentTransmissionFilter === 'manual' ? 'selected' : ''}>Manual Only</option>
            </select>
          </div>
        </div>

        <!-- Cars Grid -->
        <div class="cars-grid">
          ${filteredCars.map(car => renderCarCard(car)).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderCarCard(car) {
  return `
    <div class="car-card">
      <div class="car-image-box">
        <img src="${car.image}" alt="${car.name}" loading="lazy">
        ${car.badge ? `<div class="car-badge">${car.badge}</div>` : ''}
        <div class="car-category-pill">${car.category}</div>
      </div>
      <div class="car-body">
        <div class="car-title-wrap">
          <h3 class="car-title">${car.name}</h3>
          <p class="car-tagline">${car.tag}</p>
        </div>

        <div class="car-specs-grid">
          <div class="spec-item">
            <span>Seats</span>
            <strong>${car.seats} Pax</strong>
          </div>
          <div class="spec-item">
            <span>Luggage</span>
            <strong>${car.luggage} Bags</strong>
          </div>
          <div class="spec-item">
            <span>Transmission</span>
            <strong>${car.transmission.split(' ')[0]}</strong>
          </div>
        </div>

        <div class="car-footer">
          <div class="car-price-box">
            <span class="price-label">Self-Drive from</span>
            <div>
              <span class="price-val">${formatPrice(car.pricePerDay)}</span>
              <span class="price-period">/day</span>
            </div>
          </div>
          <div style="display: flex; gap: 8px;">
            <button class="btn btn-secondary btn-sm" onclick="window.location.hash = '#car-detail?id=${car.id}'">Details</button>
            <button class="btn btn-primary btn-sm" onclick="window.startBookingForCar('${car.id}')">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// 03. CAR DETAIL VIEW
function renderCarDetail(container, queryParam) {
  const urlParams = new URLSearchParams(queryParam || '');
  const carId = urlParams.get('id') || 'mitsubishi-xpander';
  const car = CARS_DATA.find(c => c.id === carId) || CARS_DATA[0];

  container.innerHTML = `
    <section class="section">
      <div class="container">
        <div style="margin-bottom: 20px;">
          <a href="#cars" class="text-gold" style="font-weight: 600; font-size: 0.9rem;">← Back to All Cars</a>
        </div>

        <div class="car-detail-layout">
          <!-- Left: Gallery & Specs -->
          <div>
            <div style="border-radius: var(--radius-md); overflow: hidden; height: 380px; margin-bottom: 16px; border: 1px solid var(--border-subtle); background: #0f1117;">
              <img id="main-car-img" src="${car.image}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            
            <div style="display: flex; gap: 12px; margin-bottom: 30px; flex-wrap: wrap;">
              ${(car.gallery || [car.image]).map(img => `
                <img src="${img}" style="width: 90px; height: 60px; object-fit: cover; border-radius: 8px; cursor: pointer; border: 1px solid var(--border-gold);" onclick="document.getElementById('main-car-img').src = '${img}'">
              `).join('')}
            </div>

            <h2 style="font-size: 1.8rem; margin-bottom: 10px;">${car.name}</h2>
            <p style="color: var(--text-secondary); margin-bottom: 24px;">${car.description}</p>

            <h3 style="font-size: 1.3rem; margin-bottom: 16px; color: var(--color-gold);">Vehicle Specifications</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 14px; background: var(--bg-surface); padding: 20px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); margin-bottom: 30px;">
              <div><span style="color: var(--text-muted);">Engine:</span> <strong>${car.engine}</strong></div>
              <div><span style="color: var(--text-muted);">Fuel:</span> <strong>${car.fuel}</strong></div>
              <div><span style="color: var(--text-muted);">Capacity:</span> <strong>${car.seats} Passengers</strong></div>
              <div><span style="color: var(--text-muted);">Luggage:</span> <strong>${car.luggage} Large Suitcases</strong></div>
              <div><span style="color: var(--text-muted);">Transmission:</span> <strong>${car.transmission}</strong></div>
              <div><span style="color: var(--text-muted);">Air Conditioning:</span> <strong>${car.ac}</strong></div>
            </div>

            <h3 style="font-size: 1.3rem; margin-bottom: 16px; color: var(--color-gold);">What's Included (Free of Charge)</h3>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px; margin-bottom: 30px;">
              ${car.included.map(inc => `
                <li style="display: flex; align-items: center; gap: 10px; color: var(--text-secondary);">
                  <span style="color: #10b981; font-weight: bold;">✓</span> ${inc}
                </li>
              `).join('')}
            </ul>

            <h3 style="font-size: 1.3rem; margin-bottom: 16px; color: var(--color-gold);">Rental Requirements</h3>
            <div style="background: var(--bg-surface-elevated); padding: 20px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); font-size: 0.9rem; color: var(--text-secondary); line-height: 1.7;">
              <p><strong>For International Tourists:</strong> Passport, Valid National Driver's License with International Driving Permit (IDP), and Flight / Hotel booking.</p>
              <p style="margin-top: 10px;"><strong>For Indonesian Citizens:</strong> E-KTP, SIM A aktif, dan bukti reservasi tiket pesawat/hotel di Bali.</p>
            </div>
          </div>

          <!-- Right: Direct Booking Box -->
          <div>
            <div style="position: sticky; top: 100px; background: var(--bg-surface); border: 1px solid var(--border-gold); border-radius: var(--radius-lg); padding: 26px; box-shadow: var(--shadow-card);">
              <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 20px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 16px;">
                <div>
                  <span style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">Self-Drive Rate</span>
                  <div style="font-size: 1.8rem; font-weight: 800; color: var(--color-gold-light);">${formatPrice(car.pricePerDay)} <span style="font-size: 0.9rem; font-weight: 400; color: var(--text-secondary);">/ day</span></div>
                </div>
                <div style="text-align: right;">
                  <span style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">With Private Driver</span>
                  <div style="font-size: 1.2rem; font-weight: 700;">${formatPrice(car.priceWithDriver)} <span style="font-size: 0.8rem; color: var(--text-secondary);">/ 10h</span></div>
                </div>
              </div>

              <div style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 24px;">
                <div class="search-input-group">
                  <label>Service Option</label>
                  <select id="detail-service-type">
                    <option value="Self-Drive">Self-Drive (Lepas Kunci)</option>
                    <option value="With Driver">With Private Chauffeur (+10 Hours)</option>
                  </select>
                </div>
                <div class="search-input-group">
                  <label>Pick-up Location</label>
                  <select id="detail-pickup-loc">
                    <option>DPS Airport (Ngurah Rai) - Arrival Hall</option>
                    <option>Seminyak / Legian / Kuta (Free Delivery)</option>
                    <option>Canggu / Pererenan Villa</option>
                    <option>Ubud Center Resort</option>
                  </select>
                </div>
              </div>

              <button class="btn btn-primary btn-lg" style="width: 100%; margin-bottom: 12px;" onclick="window.startBookingForCar('${car.id}')">
                ✨ Reserve This ${car.name}
              </button>

              <a href="${buildWhatsAppDirectInquiry(`Availability check for ${car.name}`)}" target="_blank" class="btn btn-whatsapp" style="width: 100%;">
                💬 Check Instant Availability on WhatsApp
              </a>

              <div style="margin-top: 20px; font-size: 0.8rem; color: var(--text-muted); text-align: center;">
                🔒 No cancellation fees up to 24h before pick-up. Clean car guaranteed.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// 04. BOOKING VIEW
function renderBooking(container) {
  container.innerHTML = `
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Fast & Easy Reservation</span>
          <h1 class="section-title">Book Your Bali Ride in 4 Steps</h1>
          <p class="section-desc">Select your dates, choose vehicle add-ons, fill guest information, and receive instant confirmation.</p>
        </div>

        <div id="booking-view-content"></div>
      </div>
    </section>
  `;

  renderBookingFlow();
}

// 05. AIRPORT TRANSFER VIEW
function renderAirportTransfer(container) {
  container.innerHTML = `
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">DPS Ngurah Rai International</span>
          <h1 class="section-title">VIP Bali Airport Transfers</h1>
          <p class="section-desc">Skip the taxi queues. Enjoy a personalized meet & greet service with your private driver holding an 808 MOVE nameboard.</p>
        </div>

        <!-- Interactive Airport Fare Calculator -->
        <div style="background: var(--bg-surface); border: 1px solid var(--border-gold); border-radius: var(--radius-lg); padding: 32px; margin-bottom: 50px; max-width: 880px; margin-left: auto; margin-right: auto;">
          <h3 style="font-size: 1.3rem; margin-bottom: 16px; color: var(--color-gold);">Instant Airport Fare Calculator</h3>
          <div class="airport-calc-inputs">
            <div class="search-input-group">
              <label>Select Destination Zone / Area in Bali</label>
              <select id="airport-zone-select" onchange="window.updateAirportQuote()">
                ${AIRPORT_RATES.map((rate, i) => `
                  <option value="${i}">${rate.zone}: ${rate.areas} (~${rate.time})</option>
                `).join('')}
              </select>
            </div>
            <div class="search-input-group">
              <label>Transfer Type</label>
              <select id="airport-direction">
                <option value="Pick-up">Airport Pick-up (Arrival)</option>
                <option value="Drop-off">Hotel to Airport (Departure)</option>
              </select>
            </div>
          </div>

          <div id="airport-quote-result" class="airport-quote-cards">
            <!-- Rendered by window.updateAirportQuote -->
          </div>
        </div>

        <!-- Airport Meeting Point Guide -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px;">
          <div class="usp-card">
            <div class="usp-icon">🪧</div>
            <h3 class="usp-title">1. Arrival Hall Greeting</h3>
            <p class="usp-desc">Your chauffeur will wait right after the baggage claim customs exit holding a clear sign with your full name.</p>
          </div>
          <div class="usp-card">
            <div class="usp-icon">⏱️</div>
            <h3 class="usp-title">2. Free Flight Delay Tracking</h3>
            <p class="usp-desc">We monitor your flight number in real-time. If your plane is delayed, your driver automatically adjusts the pickup time with zero penalty.</p>
          </div>
          <div class="usp-card">
            <div class="usp-icon">📶</div>
            <h3 class="usp-title">3. SIM Card Assistance</h3>
            <p class="usp-desc">Need a local eSIM or SIM registration? Our driver will assist you at the official airport booth before heading to your hotel.</p>
          </div>
        </div>
      </div>
    </section>
  `;

  window.updateAirportQuote();
}

// 06. WITH DRIVER VIEW
function renderWithDriver(container) {
  container.innerHTML = `
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Chauffeur Service</span>
          <h1 class="section-title">Sit Back. Relax. Enjoy Bali with a Private Driver</h1>
          <p class="section-desc">Experience Bali without the stress of navigating traffic or finding parking. English-speaking, friendly local tour chauffeurs.</p>
        </div>

        <div class="package-grid" style="margin-bottom: 50px;">
          ${DRIVER_PACKAGES.map(pkg => `
            <div class="package-card ${pkg.popular ? 'highlight' : ''}">
              ${pkg.popular ? '<div class="package-pill">Most Popular Tour Choice</div>' : ''}
              <h3 style="font-size: 1.35rem; margin-bottom: 6px;">${pkg.name}</h3>
              <div style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 16px;">Duration: <strong>${pkg.duration}</strong> • ${pkg.car}</div>
              <div style="font-size: 1.8rem; font-weight: 800; color: var(--color-gold-light); margin-bottom: 16px;">
                ${formatPrice(pkg.price)}
              </div>
              <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 16px;">${pkg.description}</p>
              
              <ul class="package-inclusions">
                ${pkg.inclusions.map(inc => `<li><span>✓</span> ${inc}</li>`).join('')}
              </ul>

              <div style="margin-top: auto; padding-top: 20px;">
                <button class="btn btn-primary" style="width: 100%; margin-bottom: 8px;" onclick="window.bookDriverPackage('${pkg.name}')">Book This Package</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// 07. BALI GUIDE VIEW
function renderBaliGuide(container) {
  container.innerHTML = `
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Island Insider</span>
          <h1 class="section-title">Bali Driving & Travel Guides</h1>
          <p class="section-desc">Local road advice, route difficulties, and the best vehicle choices for every corner of the Island of the Gods.</p>
        </div>

        <div style="display: flex; flex-direction: column; gap: 32px;">
          ${BALI_GUIDES.map(guide => `
            <div class="bali-guide-card">
              <div class="bali-guide-img-box">
                <img src="${guide.image}" alt="${guide.title}" loading="lazy">
              </div>
              <div>
                <div style="color: var(--color-gold); font-size: 0.85rem; font-weight: 700; text-transform: uppercase;">${guide.region} • ${guide.readTime}</div>
                <h2 style="font-size: 1.5rem; margin: 8px 0 12px;">${guide.title}</h2>
                <div class="bali-guide-badges">
                  <div class="bali-guide-badge-item">⚡ <strong>Difficulty:</strong> ${guide.difficulty}</div>
                  <div class="bali-guide-badge-item">🚗 <strong>Recommended:</strong> ${guide.bestCar}</div>
                </div>
                <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 16px; line-height: 1.6;">${guide.drivingTips}</p>
                <div style="font-size: 0.9rem; margin-bottom: 20px;">
                  <strong style="color: var(--text-primary);">Key Highlights:</strong> ${guide.highlights.join(' • ')}
                </div>
                <a href="#cars" class="btn btn-outline-gold btn-sm">Find Cars for ${guide.region} →</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// 08. PACKAGES VIEW
function renderPackages(container) {
  container.innerHTML = `
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Curated Holidays</span>
          <h1 class="section-title">All-Inclusive Bali Road Trip Packages</h1>
          <p class="section-desc">Bundled multi-day rentals with airport fast-delivery, unlimited mileage, and optional private chauffeur days.</p>
        </div>

        <div class="package-grid">
          ${PACKAGES_DATA.map(pkg => `
            <div class="package-card ${pkg.badge === 'Ultimate Value' ? 'highlight' : ''}">
              <div class="package-pill">${pkg.badge}</div>
              <h3 style="font-size: 1.4rem; margin-bottom: 4px;">${pkg.name}</h3>
              <div style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 14px;">Duration: <strong>${pkg.duration}</strong> • ${pkg.car}</div>
              <div style="font-size: 2rem; font-weight: 800; color: var(--color-gold-light); margin-bottom: 14px;">
                ${formatPrice(pkg.price)}
              </div>
              <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 16px;"><strong>Perfect For:</strong> ${pkg.perfectFor}</p>
              
              <ul class="package-inclusions">
                ${pkg.inclusions.map(inc => `<li><span>✓</span> ${inc}</li>`).join('')}
              </ul>

              <button class="btn btn-primary" style="width: 100%; margin-top: auto;" onclick="window.bookPackageModal('${pkg.name}')">Book This Holiday Package</button>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// 09. REVIEWS VIEW
function renderReviews(container) {
  container.innerHTML = `
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Verified Feedback</span>
          <h1 class="section-title">Trusted by Thousands Across the Globe</h1>
          <p class="section-desc">Rated 4.9/5 stars based on 850+ Google and TripAdvisor customer reviews.</p>
        </div>

        <!-- Rating Summary Box -->
        <div style="background: var(--bg-surface); border: 1px solid var(--border-gold); border-radius: var(--radius-lg); padding: 30px; display: flex; align-items: center; justify-content: space-around; flex-wrap: wrap; gap: 20px; margin-bottom: 40px;">
          <div style="text-align: center;">
            <div style="font-size: 3.5rem; font-weight: 800; color: var(--color-gold); line-height: 1;">4.9</div>
            <div style="color: #f59e0b; font-size: 1.3rem;">★★★★★</div>
            <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 4px;">Overall Score (850+ Reviews)</div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 8px; font-size: 0.9rem;">
            <div>Vehicle Cleanliness & Freshness: <strong style="color: var(--color-gold);">5.0 / 5.0</strong></div>
            <div>Driver Punctuality & Hospitality: <strong style="color: var(--color-gold);">4.9 / 5.0</strong></div>
            <div>Ease of Airport Handover: <strong style="color: var(--color-gold);">4.9 / 5.0</strong></div>
          </div>
        </div>

        <div class="reviews-grid">
          ${REVIEWS_DATA.map(rev => `
            <div class="review-card">
              <div class="review-stars">★★★★★</div>
              <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6;">"${rev.comment}"</p>
              <div style="font-size: 0.8rem; color: var(--color-gold-light);">Vehicle: ${rev.carUsed}</div>
              <div class="review-author">
                <div class="author-avatar">${rev.flag}</div>
                <div>
                  <div style="font-weight: 700; font-size: 0.95rem;">${rev.name}</div>
                  <div style="font-size: 0.78rem; color: var(--text-muted);">${rev.country} • ${rev.date}</div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// 10. ABOUT US VIEW
function renderAbout(container) {
  container.innerHTML = `
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Our Heritage</span>
          <h1 class="section-title">Born in Bali. Built for Seamless Journeys.</h1>
          <p class="section-desc">808 MOVE was founded to eliminate the hassle and uncertainty from Bali car rentals.</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; margin-bottom: 50px;">
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 30px;">
            <h3 style="font-size: 1.3rem; margin-bottom: 14px; color: var(--color-gold);">Our Commitment to Safety</h3>
            <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.7;">
              Every car undergoes a multi-point safety checklist before every handover: brake testing, tire pressure & tread inspection, AC performance, fluid levels, and full interior steam disinfection.
            </p>
          </div>
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 30px;">
            <h3 style="font-size: 1.3rem; margin-bottom: 14px; color: var(--color-gold);">Zero Hidden Surcharges</h3>
            <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.7;">
              What you see is what you pay. Transparent fuel policy, clear security deposit turnaround, and upfront pricing on all insurance tiers without awkward negotiations.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
}

// 11. CONTACT VIEW
function renderContact(container) {
  container.innerHTML = `
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Get in Touch</span>
          <h1 class="section-title">We are Here to Help You Move</h1>
          <p class="section-desc">Connect with our Bali concierge team 24/7 via WhatsApp, phone, or contact form.</p>
        </div>

        <div class="contact-grid">
          <!-- Contact Details -->
          <div style="background: var(--bg-surface); border: 1px solid var(--border-gold); border-radius: var(--radius-lg); padding: 32px;">
            <h3 style="font-size: 1.4rem; margin-bottom: 24px; color: var(--color-gold);">Bali Headquarters</h3>
            <div style="display: flex; flex-direction: column; gap: 20px; font-size: 0.95rem;">
              <div>
                <span style="color: var(--text-muted); display: block; font-size: 0.8rem; text-transform: uppercase;">Office & Fleet Depot</span>
                <strong>Jl. Bypass Ngurah Rai No. 808, Tuban, Kuta, Badung, Bali 80361</strong>
              </div>
              <div>
                <span style="color: var(--text-muted); display: block; font-size: 0.8rem; text-transform: uppercase;">WhatsApp Direct (Instant Reply)</span>
                <strong>+62 811 808 8080</strong>
              </div>
              <div>
                <span style="color: var(--text-muted); display: block; font-size: 0.8rem; text-transform: uppercase;">Email Inquiries</span>
                <strong>booking@808move.com / support@808move.com</strong>
              </div>
              <div>
                <span style="color: var(--text-muted); display: block; font-size: 0.8rem; text-transform: uppercase;">Operational Hours</span>
                <strong>07:00 AM – 11:00 PM WITA (24/7 Airport Dispatch)</strong>
              </div>
            </div>

            <div style="margin-top: 30px;">
              <a href="${buildWhatsAppDirectInquiry('Direct Support Request')}" target="_blank" class="btn btn-whatsapp btn-lg" style="width: 100%;">
                💬 Connect via WhatsApp Now
              </a>
            </div>
          </div>

          <!-- Quick Message Form -->
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 32px;">
            <h3 style="font-size: 1.4rem; margin-bottom: 20px;">Send Us a Message</h3>
            <form onsubmit="window.handleContactSubmit(event)" style="display: flex; flex-direction: column; gap: 16px;">
              <div class="search-input-group">
                <label>Your Name</label>
                <input type="text" id="contact-name" placeholder="e.g. Michael Jordan" required>
              </div>
              <div class="search-input-group">
                <label>WhatsApp / Phone</label>
                <input type="tel" id="contact-phone" placeholder="e.g. +61 400 123 456" required>
              </div>
              <div class="search-input-group">
                <label>Message</label>
                <textarea id="contact-msg" rows="4" placeholder="How can we assist your Bali transport plans?" required style="width: 100%; background: var(--bg-input); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px; color: var(--text-primary);"></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-lg">Send Inquiry →</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}

// 12. FAQ VIEW
function renderFAQ(container) {
  container.innerHTML = `
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Help Center</span>
          <h1 class="section-title">Frequently Asked Questions</h1>
          <p class="section-desc">Clear answers regarding driving regulations, license requirements, insurance, and airport handovers in Bali.</p>
        </div>

        <div class="accordion">
          ${FAQS_DATA.map(category => `
            <div style="margin: 20px 0 10px; font-size: 1.15rem; font-weight: 700; color: var(--color-gold);">
              ${category.category}
            </div>
            ${category.items.map(item => `
              <div class="accordion-item" onclick="this.classList.toggle('open')">
                <div class="accordion-header">
                  <span>${item.q}</span>
                  <span class="accordion-icon">▼</span>
                </div>
                <div class="accordion-body">
                  ${item.a}
                </div>
              </div>
            `).join('')}
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// Global UI Hook Helpers
function setupCurrencySelector() {
  const selects = document.querySelectorAll('.currency-select');
  selects.forEach(select => {
    select.value = getActiveCurrency();
    select.addEventListener('change', (e) => {
      setActiveCurrency(e.target.value);
    });
  });
}

function setupNavigation() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }
}

window.setCarCategoryFilter = function(cat) {
  currentCarFilter = cat;
  renderCars(document.getElementById('app-main'));
};

window.setCarTransmissionFilter = function(trans) {
  currentTransmissionFilter = trans;
  renderCars(document.getElementById('app-main'));
};

window.startBookingForCar = function(carId) {
  setBookingPreselect(carId, 'Self-Drive');
  window.location.hash = '#booking';
};

window.setHomeSearchService = function(service, btn) {
  document.querySelectorAll('.search-tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
};

window.executeHomeSearch = function() {
  const carType = document.getElementById('home-search-car').value;
  if (carType !== 'all') {
    currentCarFilter = carType;
  }
  window.location.hash = '#booking';
};

window.updateAirportQuote = function() {
  const idx = document.getElementById('airport-zone-select')?.value || 0;
  const rate = AIRPORT_RATES[idx];
  const container = document.getElementById('airport-quote-result');
  if (!container || !rate) return;

  container.innerHTML = `
    <div style="background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); padding: 18px; border-radius: var(--radius-md); text-align: center;">
      <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">Standard MPV (1-4 Pax)</div>
      <div style="font-size: 1.3rem; font-weight: 800; color: var(--color-gold-light); margin: 6px 0;">${formatPrice(rate.standardPrice)}</div>
      <button class="btn btn-primary btn-sm" onclick="window.bookAirportDirect('${rate.zone}', '${rate.areas}', 'Standard MPV', ${rate.standardPrice})">Book Now</button>
    </div>
    <div style="background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); padding: 18px; border-radius: var(--radius-md); text-align: center;">
      <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">Large Van (5-7 Pax)</div>
      <div style="font-size: 1.3rem; font-weight: 800; color: var(--color-gold-light); margin: 6px 0;">${formatPrice(rate.vanPrice)}</div>
      <button class="btn btn-primary btn-sm" onclick="window.bookAirportDirect('${rate.zone}', '${rate.areas}', 'Large Van', ${rate.vanPrice})">Book Now</button>
    </div>
    <div style="background: var(--bg-surface-elevated); border: 1px solid var(--border-gold); padding: 18px; border-radius: var(--radius-md); text-align: center;">
      <div style="font-size: 0.8rem; color: var(--color-gold); text-transform: uppercase;">VIP Alphard (1-5 Pax)</div>
      <div style="font-size: 1.3rem; font-weight: 800; color: var(--color-gold-light); margin: 6px 0;">${formatPrice(rate.alphardPrice)}</div>
      <button class="btn btn-primary btn-sm" onclick="window.bookAirportDirect('${rate.zone}', '${rate.areas}', 'VIP Alphard', ${rate.alphardPrice})">Book Now</button>
    </div>
  `;
};

window.bookAirportDirect = function(zone, area, carType, price) {
  const text = `Hi 808 MOVE! ✈️ I would like to book an *Airport Transfer*:%0A- Destination: ${zone} (${area})%0A- Vehicle: ${carType}%0A- Rate: ${formatPrice(price, 'IDR')}%0APlease confirm driver availability.`;
  window.open(`https://wa.me/628118088080?text=${text}`, '_blank');
};

window.bookDriverPackage = function(packageName) {
  const text = `Hi 808 MOVE! 🌴 I would like to book the *Private Driver Package: ${packageName}*. Please share available dates.`;
  window.open(`https://wa.me/628118088080?text=${text}`, '_blank');
};

window.bookPackageModal = function(packageName) {
  const text = `Hi 808 MOVE! 🌴 I want to inquire about the Holiday Road Trip Package: *${packageName}*.`;
  window.open(`https://wa.me/628118088080?text=${text}`, '_blank');
};

window.handleContactSubmit = function(e) {
  e.preventDefault();
  const name = document.getElementById('contact-name').value;
  const phone = document.getElementById('contact-phone').value;
  const msg = document.getElementById('contact-msg').value;

  const text = `*NEW CONTACT MESSAGE FROM 808MOVE.COM*%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Message:* ${msg}`;
  window.open(`https://wa.me/628118088080?text=${text}`, '_blank');
  showToast('Thank you! Redirecting your message to our WhatsApp Concierge.');
};
