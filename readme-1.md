Buatkan komponen Kegiatan.tsx menggunakan:

React + TypeScript

ShadCN UI (Card sudah terinstall)

TailwindCSS

Warna global ambil dari color.ts

Gunakan data-aos="fade-up" untuk animasi card

🎯 Tujuan Layout

Buat halaman Berita & Kegiatan dengan struktur 2 kolom:

🟦 Kiri (Konten Utama – Card List + Pagination)

Berisi:

Title: "Berita & Kegiatan"

Subtitle kecil di bawahnya (contoh: Membuka Pengetahuan, Pikiran yang Menginspirasi)

Grid card berita (3 kolom di desktop)

Pagination di bawah grid

⚠️ Layout kiri tidak benar-benar center split 50:50

Konten kiri lebih dominan

Section kiri agak menjorok ke kanan

Sidebar kanan lebih kecil (sekitar 25–30%)

Gunakan shadcn/ui Card

Data gunakan mapping array dummy

Gunakan image:

import phpimg from "@/assets/img/php.png"

Struktur card:

Image di atas

Kategori kecil (misal: Web Development)

Tanggal di kanan

Judul artikel

Deskripsi singkat

Warna biru gunakan:

basecolor.DarkBlue

🟦 Kanan (Sidebar Category)

Title: Category

List category vertikal dengan bullet biru

Bullet gunakan warna basecolor.DarkBlue

Contoh isi:

Web Development

UI/UX

Backend

Graphic Design

Sidebar harus sticky di desktop (optional tapi recommended)

📱 Responsiveness

Pastikan responsive:

Desktop (lg)

Grid 3 kolom

Layout 70% kiri / 30% kanan

Tablet (md)

Grid 2 kolom

Sidebar turun ke bawah

Mobile (sm)

Grid 1 kolom

Sidebar full width di bawah konten

🎨 Styling Rules

Gunakan TailwindCSS

Gunakan shadcn/ui untuk Card & Pagination

Jangan hardcode warna biru, gunakan:

basecolor.DarkBlue

Tambahkan hover effect pada card (shadow / scale ringan)

Gunakan spacing yang clean dan modern

📦 Data Dummy

Buat array dummy seperti:

const articles = [
  {
    id: 1,
    title: "Framework PHP Mana Yang Tepat",
    category: "Web Development",
    date: "29 Dec, 2025",
    description: "Berikut adalah panduan untuk memilih Framework PHP mana yang tepat untuk aplikasi Anda.",
    image: phpimg
  }
]

Mapping minimal 9 data agar terlihat 3 baris.

📌 Pagination

Buat pagination simple (1 2 3)

Active page gunakan background basecolor.DarkBlue

Letakkan di bawah grid dan center

🧱 Struktur yang Diharapkan
Container
 ├── Header Section (Title + Subtitle)
 ├── Grid Layout
 │    ├── Left Content (Cards + Pagination)
 │    └── Right Sidebar (Category)
⚠️ Important

Jangan ubah nama component

Tetap gunakan:

const Kegiatan = () => {}
export default Kegiatan

Gunakan functional component

Clean & production ready

Modern UI

Consistent spacing

Buatkan full implementation code sesuai deskripsi di atas.