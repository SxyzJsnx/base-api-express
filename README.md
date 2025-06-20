# BASE REST API

Sebuah fondasi REST API yang ringan dan siap produksi yang dibangun dengan Express.js dan dokumentasi Swagger yang komprehensif. Proyek ini menyediakan titik awal yang kuat untuk developer yang ingin membangun API yang scalable dengan dokumentasi otomatis dan fitur keamanan esensial.

## Gambaran Umum

Template REST API ini dirancang untuk mempercepat workflow pengembangan dengan menyediakan fondasi yang telah terkonfigurasi dengan praktik standar industri. Arsitektur ini menekankan kesederhanaan, maintainability, dan skalabilitas sambil menggabungkan fitur-fitur penting seperti rate limiting, penanganan CORS, dan dokumentasi API yang komprehensif.

## Dependensi Utama

### Framework Utama
- **Express.js** - Framework web yang cepat dan tidak berpendapat untuk Node.js
- **CORS** - Middleware Cross-Origin Resource Sharing untuk akses API yang aman

### Dokumentasi & Pengembangan
- **Swagger UI Express** - Interface dokumentasi API yang interaktif
- **Swagger JSDoc** - Generasi spesifikasi OpenAPI otomatis dari komentar JSDoc

### Keamanan & Performa
- **Express Rate Limit** - Middleware rate limiting yang dapat dikonfigurasi untuk proteksi API

## Fitur Utama

### Generasi Dokumentasi Otomatis
API ini memanfaatkan Swagger JSDoc untuk secara otomatis menghasilkan spesifikasi OpenAPI yang komprehensif langsung dari komentar kode. Ini memastikan dokumentasi tetap sinkron dengan perubahan implementasi dan memberikan developer interface testing yang interaktif.

### Langkah-langkah Keamanan Bawaan
Rate limiting diimplementasikan untuk melindungi dari penyalahgunaan dan memastikan alokasi resource yang adil. Konfigurasi CORS dapat disesuaikan untuk mengontrol akses cross-origin berdasarkan kebutuhan deployment Anda.

### Arsitektur Sederhana
Proyek ini mengikuti struktur yang mudah dipahami dimana semua konfigurasi terpusat di `server.js`, dan routes diorganisir sebagai file individual di direktori `routes/`. Pendekatan ini menghilangkan kompleksitas konfigurasi sambil mempertahankan pemisahan kepentingan yang jelas.

### Konfigurasi Siap Produksi
Semua middleware penting dan security headers telah dikonfigurasi untuk deployment produksi, mengurangi overhead setup untuk proyek baru.

## Struktur Proyek

```
├── routes/             # Definisi route API (file *.js)
├── html/               # Tempat html untum frontend.
├── server.js          # Entry point aplikasi utama dengan konfigurasi
├── package.json       # Dependensi proyek dan script
└── README.md         # Dokumentasi proyek
```

## Memulai

### Prasyarat
- Node.js (versi 14.x atau lebih tinggi)
- npm atau yarn package manager

### Instalasi

1. Clone repository:
```bash
git clone https://github.com/SxyzJsnx/base-api-express.git
cd base-api-express
```

2. Install dependensi:
```bash
npm install
```

3. Jalankan development server:
```bash
npm start
```

4. Akses dokumentasi API di `http://localhost:3000/docs`

### Konfigurasi Environment

Semua konfigurasi ditangani langsung di `server.js` tanpa file environment eksternal. Ini menyederhanakan deployment dan mengurangi kompleksitas konfigurasi untuk environment pengembangan.

## Dokumentasi API

Dokumentasi API interaktif dihasilkan secara otomatis dan tersedia di endpoint `/api-docs`. Interface ini memungkinkan developer untuk:

- Menjelajahi semua endpoint yang tersedia
- Menguji API calls langsung dari browser
- Melihat skema request/response
- Memahami kebutuhan autentikasi

## Konfigurasi Rate Limiting

API ini menyertakan rate limiting yang dapat dikonfigurasi untuk mencegah penyalahgunaan:

- **Window Default**: 15 menit
- **Limit Default**: 100 request per window per IP
- **Dapat Disesuaikan**: Modifikasi limit di file konfigurasi

## Kebijakan CORS

Cross-Origin Resource Sharing dikonfigurasi untuk memungkinkan akses terkontrol dari aplikasi web. Konfigurasi default dapat dimodifikasi untuk mencocokkan kebutuhan keamanan spesifik Anda.

## Workflow Pengembangan

### Menambahkan Endpoint Baru

1. Buat file route baru di direktori `routes/` (contoh: `routes/user.js`)
2. Tambahkan komentar JSDoc dengan anotasi Swagger
3. Import dan daftarkan route di `server.js`
4. Dokumentasi akan dihasilkan secara otomatis

### Contoh Dokumentasi Route

```javascript
/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Mengambil daftar pengguna
 *     tags: [Tools]
 *     responses:
 *       200:
 *         description: Daftar pengguna berhasil diambil
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
```

## Testing

Proyek ini mencakup test suite komprehensif yang mencakup:

- Fungsionalitas route
- Perilaku middleware
- Error handling
- Rate limiting
- Kebijakan CORS

Jalankan test dengan:
```bash
npm test
```

## Deployment

### Production Build

```bash
npm start
```

### Environment Variables

Pastikan variabel environment berikut dikonfigurasi di produksi melalui `server.js`:

- Konfigurasi port
- Pengaturan rate limiting
- Pengaturan CORS origin

### Dukungan Docker

Dockerfile disertakan untuk deployment containerized:

```bash
docker build -t base-rest-api .
docker run -p 3000:3000 base-rest-api
```

## Pertimbangan Performa

- Aktifkan compression middleware untuk produksi
- Konfigurasi caching headers yang tepat
- Implementasikan database connection pooling
- Gunakan clustering untuk utilisasi multi-core
- Monitor penggunaan memori dan implementasikan optimisasi garbage collection

## Praktik Keamanan Terbaik

API ini mengimplementasikan beberapa langkah keamanan:

- Rate limiting untuk mencegah penyalahgunaan
- Konfigurasi CORS untuk keamanan cross-origin
- Validasi dan sanitasi input
- Security headers via Helmet.js (rekomendasi tambahan)

## Kontribusi

Kami menyambut kontribusi dari komunitas developer. Harap ikuti panduan berikut:

1. Fork repository
2. Buat feature branch
3. Implementasikan perubahan dengan test yang sesuai
4. Pastikan dokumentasi diperbarui
5. Submit pull request dengan deskripsi detail

### Standar Kode

- Ikuti konfigurasi ESLint
- Pertahankan test coverage di atas 80%
- Sertakan komentar JSDoc untuk semua fungsi publik
- Gunakan semantic commit messages

## Tujuan Edukatif

Proyek ini berfungsi sebagai sumber daya edukatif untuk developer yang belajar membangun REST API profesional. Ini mendemonstrasikan:

- Praktik pengembangan JavaScript/Node.js modern
- Dokumentasi API dengan Swagger/OpenAPI
- Implementasi keamanan dalam aplikasi web
- Pola arsitektur yang scalable
- Pertimbangan deployment produksi

Tujuannya adalah menyediakan fondasi praktis dan terdokumentasi dengan baik yang dapat dipelajari, dimodifikasi, dan diperluas developer untuk proyek mereka sendiri.

## Troubleshooting

### Masalah Umum

**Port Sudah Digunakan**
```bash
Error: listen EADDRINUSE: address already in use :::3000
```
Solusi: Ubah konfigurasi port di `server.js` atau matikan proses yang menggunakan port tersebut.

**Error CORS**
Modifikasi konfigurasi CORS di file aplikasi utama untuk menyertakan domain client Anda.

**Rate Limit Terlampaui**
Sesuaikan pengaturan rate limiting di konfigurasi atau implementasikan rate limiting spesifik pengguna.

## Roadmap

Peningkatan yang direncanakan meliputi:

- Integrasi middleware autentikasi
- Layer abstraksi database
- Integrasi logging dan monitoring
- Strategi caching lanjutan
- Contoh arsitektur microservices

## Dukungan

Untuk pertanyaan, masalah, atau kontribusi, silakan merujuk ke issue tracker proyek atau hubungi maintainer.

## Penulis

**Sxyz (SxyzJsnx)**  
Full-stack developer yang fokus pada pembuatan sumber daya edukatif untuk komunitas developer.

## Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT. Lihat file [LICENSE](LICENSE) untuk syarat dan ketentuan lengkap.

## Repository

**Repository**: https://github.com/SxyzJsnx/base-api-express.git

---

**Disclaimer**: Proyek ini ditujukan untuk tujuan edukatif dan pengembangan. Pastikan audit keamanan yang tepat sebelum melakukan deployment ke environment produksi.