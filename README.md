# 🌴 808 MOVE — Bali Premium Car Rental & Transport Website

Website resmi platform rental mobil dan transportasi premium di Bali, dirancang berdasarkan blueprint arsitektur 12 halaman lengkap dengan sistem booking interaktif 4-langkah, kalkulator tarif airport transfer, paket supir privat, panduan wisata Bali, dan konversi multi-mata uang.

---

## 📁 Struktur Proyek

```
808-move/
├── index.html              # Halaman utama (Single Page Application Router)
├── css/
│   ├── style.css           # Sistem desain luxury dark-tropical, tipografi, komponen
│   └── responsive.css      # Breakpoints responsive untuk mobile & tablet
├── js/
│   ├── app.js              # Router utama, render 12 halaman, filter mobil & event handler
│   ├── data.js             # Dataset armada mobil, airport rates, tour packages, guide, reviews, FAQs
│   ├── booking.js          # Engine booking 4-langkah, kalkulator add-ons & generator voucher
│   └── utils.js            # Konversi mata uang, formatter harga, WhatsApp link generator & toasts
└── README.md               # Panduan deployment & kustomisasi
```

---

## 🚀 Cara Menjalankan Secara Lokal

Anda dapat menjalankan website ini di komputer lokal menggunakan web server sederhana apapun:

### Menggunakan Python (Bawaan):
```bash
cd /home/ts/808-move
python3 -m http.server 3000
```
Buka browser dan akses: `http://localhost:3000`

### Menggunakan Node.js / NPX:
```bash
npx serve /home/ts/808-move
```

---

## 🌐 Cara Upload ke Shared Hosting (Hostinger / Exabytes / cPanel)

Website ini dibangun menggunakan standar **HTML5, CSS3, dan Vanilla JavaScript (ES Modules)** tanpa memerlukan Node.js server di hosting.

### Langkah-langkah Deployment:
1. Login ke akun hosting Anda (**Hostinger / Exabytes / cPanel**).
2. Buka menu **File Manager** (atau gunakan aplikasi FTP seperti FileZilla).
3. Masuk ke direktori **`public_html`**.
4. Upload semua file dan folder di dalam folder `808-move/` (`index.html`, folder `css/`, dan folder `js/`) ke dalam `public_html`.
5. Selesai! Website Anda langsung aktif dan dapat diakses melalui domain Anda (misal: `https://808move.com`).

---

## ⚙️ Cara Kustomisasi Data & Kontak

1. **Mengubah Nomor WhatsApp Admin:**
   Buka file `js/utils.js` dan ubah variabel:
   ```javascript
   export const WHATSAPP_NUMBER = '628118088080'; // Ganti dengan nomor WhatsApp Anda (format tanpa tanda +)
   ```

2. **Menambah / Mengubah Harga & Armada Mobil:**
   Buka file `js/data.js` dan edit pada array `CARS_DATA`. Anda dapat mengatur harga sewa harian (`pricePerDay`), harga dengan supir (`priceWithDriver`), foto, dan spesifikasi mobil.

3. **Mengubah Tarif Airport Transfer:**
   Edit array `AIRPORT_RATES` pada file `js/data.js`.
