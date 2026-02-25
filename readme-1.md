Buatkan komponen Bootcamp.tsx menggunakan:

React + TypeScript

ShadCN UI (Card & Button sudah terinstall)

TailwindCSS

Warna global ambil dari color.ts

Gunakan data-aos="fade-up" untuk animasi card

🎯 Requirements
1️⃣ Data & Mapping

Gunakan dummy data array berisi 8 bootcamp

Setiap object berisi:

id

title

description

image

type → "full-day" atau "night"

Render card menggunakan .map()

Jangan hardcode 8 card manual

2️⃣ Layout Responsive

Gunakan grid:

Desktop → grid-cols-4

Tablet → grid-cols-2

Mobile → grid-cols-1

Contoh:

grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6
3️⃣ Card Design (ShadCN)

Gunakan:

<Card>

<CardContent>

Struktur:

Image di atas

Title

Description

Tambahkan:

data-aos="fade-up"

di card root element.

4️⃣ Filter Button (Di Atas Card)

Buat 2 button ShadCN:

Full-Day Bootcamp

Night Bootcamp

Warna:

Orange (ambil dari color.ts)

Active state harus beda style

Gunakan state:

const [filter, setFilter] = useState<"all" | "full-day" | "night">("all")

Logic:

Klik button → filter card sesuai type

5️⃣ Show More Logic (Penting ⚠️)

Gunakan state:

const [visibleCount, setVisibleCount] = useState(initialCount)
Desktop:

Tampilkan maksimal 8 card dulu

Jika total > 8 → tampilkan button:
"Lihat Lebih Lengkap"
warna darkblue (ambil dari color.ts)

Klik → tampilkan semua card

Mobile:

Karena grid-1, tampilkan maksimal 4 card dulu

Jika total > 4 → tampilkan button

Klik → tampilkan semua

Gunakan responsive detection:
Boleh pakai:

useEffect + window.innerWidth
atau

custom hook

6️⃣ Button "Lihat Lebih Lengkap"

Gunakan ShadCN Button:

Variant custom

Background darkblue

Text putih

Full width di mobile

Centered di desktop

7️⃣ Animasi

Setiap card harus memiliki:

data-aos="fade-up"

Pastikan AOS sudah di-init di root App.

8️⃣ Clean Code Rules

Jangan hardcode UI berulang

Semua card dari array

Gunakan TypeScript interface

Pisahkan dummy data di atas file

Responsive clean

No inline color, semua dari color.ts

💎 Expected Behaviour
Device	Default Visible	Show More muncul jika
Desktop	8 card	total > 8
Mobile	4 card	total > 4