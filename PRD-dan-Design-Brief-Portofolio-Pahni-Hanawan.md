imple# PRD dan Design Brief: Website Portofolio Pahni Hanawan

20 Oktober 2026

## Bagian A: Product Requirements Document (v1.2)

### Ringkasan dan keputusan final

Produknya adalah website portofolio pribadi statis untuk Pahni Hanawan (Web Developer), ditujukan untuk membuat recruiter dan hiring manager menghubungi Pahni untuk interview. PRD ini versi 1.2 dan siap di-build.

| Area | Keputusan |
| --- | --- |
| Target utama | Recruiter/HRD dan hiring manager teknis. Klien freelance bukan target |
| Pemilik | Hanya Pahni. Bukan platform multi-user |
| Stack | HTML + Tailwind CSS v3 via Play CDN + JavaScript. Tanpa backend dan tanpa build step |
| Hosting | GitHub Pages, repo `PahniHanawan.github.io` |
| Bahasa dan tema | Bahasa Indonesia saja. Dark mode wajib |
| Kontak | Kartu link: Email (`pahni1232@gmail.com`), GitHub, LinkedIn. Tanpa form, tanpa nomor telepon |
| Dikeluarkan | Unduh CV, form kontak, panel admin, multi-bahasa |
| Nice-to-have (v2) | Blog/artikel, statistik pengunjung |
| Proyek | Lima kartu, tiap proyek punya repo GitHub dan README. Nama skripsi yang benar: **Sistem Jitanichi Go** |
| Kriteria selesai | Online di `https://pahnihanawan.github.io`, dikerjakan sendiri |

Tiga open question masih menunggu jawaban (bagian 10): tagline, izin BULOG, dan tanggal rilis.

### 1. Problem Statement

Yang dirugikan adalah Pahni sebagai pelamar Web Developer, dan recruiter yang harus menyaring puluhan kandidat per lowongan.

- CV PDF hanya menampilkan lima proyek sebagai teks. Recruiter tidak bisa melihat hasilnya.
- Profil, proyek, dan kontak tersebar di CV, GitHub, dan LinkedIn tanpa satu alur dari "siapa dia" ke "bisa apa dia" ke "cara menghubunginya".
- Tanpa satu halaman ringkas, pengalaman nyata (termasuk magang di Perum BULOG) mudah terlewat dan peluang interview berkurang.

### 2. Target User dan Persona

Target utama adalah recruiter/HRD dan hiring manager teknis. Klien freelance bukan target.

| | Rina, HRD/Recruiter (non-teknis) | Dimas, Engineering Manager/Tech Lead |
| --- | --- | --- |
| Perilaku | Menyaring kandidat sekitar 1-2 menit per orang. Membuka dari laptop atau HP lewat link di CV/LinkedIn | Mencari bukti teknis, bukan klaim. Membuka kartu proyek dan repo GitHub |
| Kebutuhan | Posisi, pengalaman, pendidikan, cara menghubungi, dalam satu layar scroll | Stack tiap proyek, fitur, peran Pahni, link repo |
| Kegagalan baginya | Halaman lambat, kontak sulit ditemukan | Deskripsi generik, link mati |

### 3. Goals dan Non-Goals

Goal utama: recruiter memahami profil Pahni dalam 30 detik dari layar pertama, lalu punya jalur kontak yang jelas.

**Goals**

1. Profil dipahami dalam 30 detik atau kurang, mulai dari layar pertama.
2. Lima proyek tampil sebagai kartu dengan stack dan link repo.
3. Kontak jelas lewat kartu Email, GitHub, LinkedIn.
4. Dark mode berfungsi penuh.
5. Online di hosting gratis, dikerjakan sendiri, tanpa backend.

**Non-goals**

- Unduh CV, form kontak, nomor telepon publik.
- Panel admin, login, database, backend.
- Multi-bahasa, platform multi-user, target klien freelance.

### 4. User Stories

Delapan story, dikelompokkan per peran.

**Recruiter**

- Sebagai recruiter, saya ingin melihat nama, posisi, dan ringkasan di layar pertama, supaya saya cepat menilai relevansi.
- Sebagai recruiter, saya ingin melihat pengalaman dan pendidikan, supaya saya tidak perlu membuka CV.
- Sebagai recruiter, saya ingin satu klik untuk menghubungi lewat email atau LinkedIn, supaya saya bisa mengajak interview.
- Sebagai recruiter, saya ingin situs nyaman di HP, supaya bisa dibuka dari mana saja.

**Hiring manager teknis**

- Sebagai hiring manager, saya ingin kartu proyek berisi stack dan deskripsi, supaya saya bisa menilai kemampuan teknis.
- Sebagai hiring manager, saya ingin link repo tiap proyek, supaya saya bisa memeriksa kodenya.

**Pengunjung dan pemilik**

- Sebagai pengunjung, saya ingin memilih dark mode, supaya nyaman dibaca di kondisi gelap.
- Sebagai pemilik, saya ingin mengganti foto dan konten dengan edit file, supaya tanpa infrastruktur tambahan.

### 5. Daftar Fitur

MVP berisi fitur statis berikut, v2 hanya blog dan statistik, dan tahap "nanti" sengaja kosong.

| Tahap | Fitur |
| --- | --- |
| MVP | Hero (nama, posisi, foto, tagline, 2 tombol) · Ringkasan · Pengalaman (2 entri) · Pendidikan (2 entri) · Skill · Kartu proyek (5) · Kartu kontak (Email, GitHub, LinkedIn) · Dark mode dengan toggle · Navbar dan layout responsif · Meta SEO dasar |
| v2 | Blog/artikel · Statistik pengunjung |
| Nanti | Belum ada |

### 6. Functional Requirements (MVP)

Sebelas requirement, F1 sampai F11. Semua konten bersumber dari CV dan README repo, tanpa fitur atau klaim yang dikarang.

**F1. Hero**

- Menampilkan "Pahni Hanawan", "Web Developer", tagline satu kalimat (isi dari Pahni, OQ-6), dan foto.
- Tombol "Lihat Proyek" (anchor ke proyek) dan "Hubungi Saya" (anchor ke kontak).
- Foto: `<img>` dengan `width`/`height` tetap dan `alt="Foto Pahni Hanawan"`. Jika file tidak ada, tampil blok berisi inisial "PH". Bentuk foto mengikuti keputusan perubahan #1 di Design Brief (lingkaran atau persegi panjang 3:4).
- Pahni menaruh file di `assets/foto-profil.jpg`. Kode pemasangan:

```html
<img id="foto-profil" src="assets/foto-profil.jpg" alt="Foto Pahni Hanawan"
     width="320" height="427"
     class="w-40 h-40 sm:w-56 sm:h-56 rounded-full object-cover object-top shadow-lg"
     onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-slate-300 dark:bg-slate-700 flex items-center justify-center text-4xl font-bold',textContent:'PH'}))">
```

**F2. Ringkasan**

- 3-4 kalimat dari ringkasan CV, tanpa frasa "enam aplikasi web".
- IPK 3.78 dan jurusan tampil sebagai fakta di dekatnya.

**F3. Pengalaman**

- Bulog (Sep-Nov 2025) dan Piksi Ganesha (Jun-Agu 2020), terbaru di atas.
- Per entri: peran, instansi, periode, 3-4 poin dari CV.

**F4. Pendidikan**

- STMIK Mardira Indonesia (2022-2026, S1 Teknik Informatika, IPK 3.78, judul skripsi).
- SMK Assalaam Bandung (2018-2021, RPL).

**F5. Skill**

- Hanya isi CV: PHP, Laravel, MySQL, Bahasa Indonesia, dikelompokkan per kategori. Tidak ada tambahan.

**F6. Kartu Proyek (5 kartu, HTML statis)**

- Isi kartu: gambar, nama, deskripsi 1-2 kalimat, badge stack, tombol "Repo GitHub". Tombol "Demo" hanya dirender jika ada URL demo.
- Gambar: `assets/proyek/<slug>.jpg` dengan `alt`. Jika file tidak ada, gambar disembunyikan atau diganti placeholder. Pahni menaruh file gambar sendiri.
- Deskripsi dan stack bersumber dari CV dan README tiap repo.
- Grid: 1 kolom di HP, 2 di tablet, 3 di desktop.

| Proyek | Repo (di bawah github.com/PahniHanawan/) |
| --- | --- |
| Aplikasi Monitoring Pekerjaan | Aplikasi-Monitoring-Pekerjaan |
| Sistem Jitanichi Go | Sistem-Jitacihi-Go (nama repo masih typo, rekomendasi di-rename) |
| PPDB SMA Darul Hikmah | PPDB-SMA-DARUL-HIKMAH |
| Web Inventory | Web-Inventory |
| Web Tracking Covid | Web-Tracking-Covid |

**F7. Kartu Kontak**

- Tiga kartu: Email (`mailto:pahni1232@gmail.com`), GitHub (`github.com/PahniHanawan`), LinkedIn (`linkedin.com/in/pahni-hanawan/`).
- Link eksternal memakai `target="_blank" rel="noopener"`.
- Nomor telepon tidak muncul di HTML mana pun.

**F8. Dark mode**

- Tailwind v3: `tailwind.config = { darkMode: 'class' }` setelah tag CDN.
- Urutan penentuan tema: pilihan tersimpan di `localStorage`, lalu preferensi sistem (`prefers-color-scheme`), lalu terang.
- Tombol toggle di navbar; pilihan disimpan.
- Skrip penentu tema di `<head>` sebelum render agar tidak berkedip.
- Kontras teks memenuhi WCAG AA di kedua tema.

**F9. Navigasi dan responsif**

- Navbar menempel, anchor ke tiap bagian, menu lipat di HP.
- Layout valid dari 360 px sampai desktop.

**F10. SEO**

- `<title>`, meta description, Open Graph, HTML semantik, satu `<h1>`.

**F11. Deployment**

- Repo publik `PahniHanawan.github.io`, `index.html` di root, folder `assets/`, tanpa build step.
- Aktifkan Pages: Settings, Pages, Deploy from branch, `main` / root.

### 7. Sketsa Data Model

Tidak ada database. Enam entitas ini hanya struktur konten yang ditulis di HTML, satu-satunya state yang disimpan adalah tema di `localStorage`.

| Entitas | Field kunci |
| --- | --- |
| Profile | nama, judul, tagline, ringkasan, foto_path, lokasi, email, github_url, linkedin_url |
| Experience | perusahaan, peran, mulai, selesai, poin[] |
| Education | institusi, jenjang_jurusan, mulai, selesai, ipk, catatan |
| Skill | nama, kategori |
| Project | nama, deskripsi, stack[], gambar_path, repo_url, demo_url (opsional) |
| Theme | pilihan (`light` atau `dark`) di `localStorage` |

### 8. Edge Case dan Failure State

Situs statis tanpa backend, jadi kegagalan hampir semuanya soal aset eksternal (CDN, gambar, repo) dan JavaScript.

| Kasus | Perilaku |
| --- | --- |
| CDN Tailwind gagal dimuat | Halaman tampil tanpa gaya, tapi konten dan link tetap terbaca. Tanpa fallback lokal (keputusan OQ-4) |
| Foto profil tidak ada | Fallback inisial "PH" |
| Gambar proyek tidak ada | Gambar disembunyikan atau placeholder gradien, kartu tetap utuh |
| Repo diubah ke private atau dihapus | Tombol repo menuju 404. Dicek manual sebelum rilis |
| Repo di-rename | URL lama dialihkan GitHub, tapi link di situs diperbarui manual |
| Demo tidak ada | Tombol "Demo" tidak dirender |
| JavaScript mati | Kartu proyek dan konten tetap tampil. Hanya toggle tema dan menu lipat HP yang tidak berfungsi |
| `localStorage` diblokir | Tema mengikuti sistem, toggle tetap jalan untuk sesi itu |
| Tema sistem berubah saat situs terbuka | Tidak ikut berubah bila pilihan manual sudah tersimpan |
| Layar kurang dari 360 px | Tanpa scroll horizontal, badge wrap |
| Email di-scrape bot | Risiko diterima karena email dipublikasikan atas keputusan pemilik |
| Tidak ada aplikasi email di desktop | Alamat email tertulis sebagai teks yang bisa disalin |
| Link LinkedIn/GitHub berubah | Edit di satu objek Profile |

### 9. Success Metrics

Situs dianggap selesai bila online dan semua fitur MVP berfungsi. Target angka kualitas adalah usulan, bukan keputusan Pahni.

**Kriteria selesai**

- `https://pahnihanawan.github.io` terbuka dan semua link valid (kelima repo, LinkedIn, `mailto:`).
- Semua fitur MVP berfungsi di Chrome desktop dan satu browser HP, di mode terang dan gelap.
- Semua fakta sesuai CV, tidak ada klaim baru.
- Foto dan gambar proyek terpasang oleh Pahni.

**Kualitas (usulan)**

- Lighthouse mobile: Accessibility dan SEO masing-masing 90 atau lebih; Performance 80 atau lebih (lebih rendah karena Tailwind Play CDN).
- Termuat kurang dari 3 detik di 4G.
- Nol error di console.

**Hasil (dicatat manual)**

- Jumlah recruiter yang menghubungi dan undangan interview yang merujuk ke situs.
- Setelah v2: pengunjung unik, klik ke repo, klik ke kontak.

### 10. Open Questions

Tiga pertanyaan masih terbuka dan semuanya dijawab Pahni sendiri. Hanya OQ-2 yang harus dicek sebelum situs online.

| # | Pertanyaan | Dampak |
| --- | --- | --- |
| OQ-2 | Apakah magang di Perum BULOG mengizinkan nama instansi dan isi aplikasi tampil publik? README dan screenshot repo Aplikasi Monitoring Pekerjaan tidak boleh memuat data internal | F3, F6, chip fakta di hero |
| OQ-6 | Tagline hero (satu kalimat, maksimal 90 karakter) dari Pahni. Tidak dikarang. Selama kosong dipakai placeholder `[ISI TAGLINE]` | F1 |
| OQ-7 | Target tanggal rilis | Jadwal |

Tindakan non-pertanyaan: rename repo `Sistem-Jitacihi-Go` menjadi `Sistem-Jitanichi-Go` di GitHub (Settings, Repository name), lalu perbarui link di situs.

## Bagian B: Design Brief

### Perubahan terhadap PRD (perlu disetujui)

Empat keputusan desain mengubah PRD; tanpa persetujuan Pahni, PRD tetap berlaku apa adanya.

| # | Perubahan | Alasan |
| --- | --- | --- |
| 1 | Foto berbentuk persegi panjang 3:4 bersudut membulat, bukan lingkaran (PRD F1) | Pas foto berlatar merah. Lingkaran memotong bahu dan menghilangkan blok merah yang jadi jangkar visual |
| 2 | Urutan: Hero (termasuk ringkasan), Proyek, Pengalaman, Latar belakang, Kontak | Kekuatan terbesar adalah lima proyek dengan repo. Hiring manager masuk ke sana, recruiter dilayani hero |
| 3 | Pendidikan dan Skill digabung jadi satu section "Latar belakang" | Skill hanya 4 item, tidak layak punya section sendiri |
| 4 | Aset tambahan kecil: halaman 404, favicon, gambar OG 1200×630 | GitHub Pages butuh 404; OG menentukan kesan saat link dibagikan |

### 1. Design Principles

Tiga aturan wajib; setiap keputusan UI yang melanggar salah satunya ditolak.

1. **Bukti sebelum klaim.** Setiap pernyataan harus bisa diperiksa dalam satu klik (repo, stack, konteks proyek). Dilarang: bar persentase skill, kata sifat promosi ("passionate", "expert"), ikon dekoratif tanpa fungsi.
2. **Lulus tes 30 detik.** Satu layar pertama menjawab siapa, bisa apa, di mana, dan cara menghubungi. Setiap section punya tepat satu aksi utama. Maksimal dua level hierarki visual per section.
3. **Satu warna aksen, dua tema yang dirancang terpisah.** Hanya merah vermilion yang berwarna. Dark mode bukan inversi: neutral hangat sendiri, aksen lebih terang, tanpa shadow.

### 2. Arah Visual: "Kertas teknis"

Hangat, tenang, editorial; bukan template developer biru-ungu bergaya terminal.

- **Kenapa merah:** selaras dengan latar pas foto, sehingga foto terasa menyatu, bukan tempelan. Membedakan situs dari ratusan portofolio indigo/biru, dan dekat dengan warna identitas Laravel, stack utama Pahni.
- **Kenapa neutral hangat (krem, bukan putih murni):** mengurangi silau saat recruiter membaca belasan situs sehari, dan memberi kesan dicetak dengan hati-hati.
- **Kenapa tipografi bercirikan:** nada percaya diri tanpa dekorasi berlebih.
- **Gerak:** hanya transisi warna dan border 150 ms. Tanpa animasi scroll, tanpa parallax.

### 3. Design Tokens

Satu aksen merah vermilion di atas neutral hangat, dua font web, skala spacing 4 px yang identik dengan skala default Tailwind sehingga tidak perlu konfigurasi khusus.

#### Warna

| Token | Light | Dark | Peran |
| --- | --- | --- | --- |
| `bg` | `#FAF7F2` | `#14110F` | Latar halaman |
| `surface` | `#FFFFFF` | `#1D1916` | Kartu |
| `surface-alt` | `#F1ECE4` | `#26211D` | Latar section selang-seling, placeholder gambar |
| `border` | `#E3DCD0` | `#3A332D` | Garis dekoratif kartu |
| `border-strong` | `#8A8176` | `#8C8379` | Batas komponen interaktif |
| `text` | `#1B1815` | `#F3EDE4` | Teks utama |
| `text-muted` | `#5C554C` | `#B5ABA0` | Teks pendukung, tanggal |
| `accent` | `#B3261E` | `#FF7A6B` | Tombol utama, tautan, titik timeline |
| `accent-hover` | `#8F1D17` | `#FFA094` | Hover |
| `accent-soft` | `#F8E3E0` | `#3A1C18` | Latar kartu Email, chip |
| `on-accent` | `#FFFFFF` | `#14110F` | Teks di atas tombol aksen |
| `focus-ring` | `#1B1815` | `#F3EDE4` | Cincin fokus |

- Merah juga cocok sebagai warna error, tapi situs ini nyaris tanpa error. Pesan galat wajib memakai ikon dan teks, tidak pernah warna saja.
- Cincin fokus memakai warna teks, bukan aksen, supaya tetap terlihat di atas tombol merah.
- Dark mode memakai `#14110F`, bukan hitam murni, supaya teks terang tidak terasa menyilaukan.

#### Tipografi

| Peran | Font | Alasan |
| --- | --- | --- |
| Heading | Bricolage Grotesque 600/700 | Grotesque dengan karakter, jauh dari Inter/Poppins yang default. Kuat di ukuran besar |
| Body dan UI | IBM Plex Sans 400/600 | Rekayasa rapi, terbaca di 16 px, angka tabular untuk tanggal dan IPK |
| Label/metadata | Mono sistem (`ui-monospace`) | Nol unduhan. Nuansa teknis pada tanggal, badge, eyebrow |

Hanya dua keluarga font web, empat file, `display=swap`, karena Play CDN sudah berat.

| Gaya | Mobile | Desktop | Pemakaian |
| --- | --- | --- | --- |
| Display | 40/44, 700, -0.02em | 64/68 | Nama di hero |
| H2 | 28/34, 700 | 40/46 | Judul section |
| H3 | 20/28, 600 | 22/30 | Judul kartu, peran |
| Body-lg | 18/30 | 18/30 | Ringkasan hero |
| Body | 16/26 | 16/26 | Teks umum |
| Small | 14/22 | 14/22 | Deskripsi kartu |
| Label mono | 13/20, uppercase, +0.04em | sama | Eyebrow, tanggal, badge |

Tidak ada teks di bawah 13 px.

#### Spacing, radius, shadow, ikon

| Token | Nilai |
| --- | --- |
| Spacing (basis 4 px) | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 |
| Padding section | 64 (mobile), 96 (desktop) |
| Kontainer | Maks 1120 px; gutter 16 / 24 / 32 |
| Gap grid kartu | 24 |
| Radius | `sm` 6 (badge), `md` 12 (tombol, kartu kontak), `lg` 20 (kartu proyek, foto), `full` (tombol ikon) |
| Shadow `sm` | `0 1px 2px rgba(27,24,21,.06)` (navbar saat di-scroll) |
| Shadow `md` | `0 6px 20px -6px rgba(27,24,21,.14)` (hover kartu) |
| Dark mode | Tanpa shadow. Elevasi lewat `bg`, `surface`, `surface-alt` dan border |
| Kartu diam | Hanya border, tanpa shadow |
| Ikon | Inline SVG, gaya garis 1.75 px, 20/24 px. Tanpa icon font |

### 4. Screen Inventory

Empat screen, dan hanya satu yang memuat konten utama.

| ID | Screen | Tujuan |
| --- | --- | --- |
| S1 | Beranda (satu halaman, 5 section) | Meyakinkan recruiter dan hiring manager, lalu mengarahkan ke kontak dan repo |
| S2 | Menu navigasi mobile (overlay) | Akses section di layar kurang dari 768 px |
| S3 | 404 | Mencegah jalan buntu bila URL salah |
| S4 | Pratinjau bagikan (gambar OG 1200×630) | Kesan pertama di LinkedIn/WhatsApp sebelum situs dibuka |

### 5. User Flow

Enam journey; dua yang utama adalah recruiter menghubungi (A) dan hiring manager memeriksa repo (B).

**A. Recruiter (Rina) dari link di CV/LinkedIn**

1. Buka URL; hero termuat, tema mengikuti sistem tanpa kedip.
2. Baca nama, peran, ringkasan, tiga chip fakta (sekitar 10 detik).
3. Tertarik, klik "Hubungi Saya" dan scroll ke Kontak.
4. Klik kartu Email; aplikasi email terbuka.
5. Cabang gagal: tidak ada aplikasi email (umum di desktop). Alamat email tertulis sebagai teks yang bisa diblok dan disalin.
6. Cabang verifikasi: sebelum menghubungi, scroll ke Pengalaman, lalu kembali lewat navbar.

**B. Hiring manager (Dimas)**

1. Buka URL, baca hero, klik "Lihat Proyek".
2. Pindai grid: konteks proyek (magang/skripsi) dan badge stack.
3. Klik "Repo GitHub"; tab baru, README terbuka.
4. Tutup tab; kembali ke posisi scroll yang sama.
5. Lanjut ke Pengalaman, lalu LinkedIn lewat Kontak.

**C. Dark mode**

1. Kunjungan pertama dengan sistem gelap; langsung gelap.
2. Klik toggle; tema berganti, pilihan disimpan.
3. Muat ulang; pilihan tetap. Bila penyimpanan diblokir, ikuti sistem.

**D. Mobile**

1. Ketuk hamburger; overlay terbuka, fokus pindah ke item pertama.
2. Ketuk "Proyek"; menu menutup, halaman scroll ke section tanpa judul tertutup navbar.
3. Tutup lewat tautan, tombol tutup, `Esc`, atau area luar. Fokus kembali ke tombol hamburger.

**E. Link dibagikan**

1. Link ditempel di LinkedIn/WhatsApp; pratinjau OG tampil.
2. Penerima membuka, lanjut ke flow A atau B.

**F. URL salah**

1. Halaman 404 tampil; klik "Kembali ke beranda".

### 6. Layout per Screen

S1 Beranda memuat lima section dengan satu aksi utama per section; S2 sampai S4 sederhana.

#### S1 Beranda

| Section | Hierarki dan isi | Aksi utama | Komponen |
| --- | --- | --- | --- |
| Navbar (sticky, 64 px) | Kiri: monogram "PH" + "Pahni Hanawan". Kanan: Proyek, Pengalaman, Latar belakang, Kontak (outline), toggle tema. Saat di-scroll: latar `bg` 90% + shadow `sm` | Kontak | Navbar, NavLink, Button-secondary, ThemeToggle |
| 1. Hero | Eyebrow mono ("Web Developer · Kabupaten Bandung"), nama (display), tagline `[ISI TAGLINE]` (maks 90 karakter), ringkasan CV (body-lg, tanpa frasa "enam aplikasi"), 3 FactChip, 2 tombol | "Lihat Proyek" (terisi aksen); sekunder "Hubungi Saya" | PhotoFrame, FactChip, Button |
| 2. Proyek | Judul + satu kalimat pengantar, lalu grid kartu. Monitoring BULOG jadi kartu unggulan selebar 2 kolom di desktop (baris 1: unggulan + 1, baris 2: 3 kartu) | "Repo GitHub" di tiap kartu | SectionHeader, ProjectCard, Badge |
| 3. Pengalaman (latar `surface-alt`) | Judul di kolom 1-4, timeline di kolom 5-12. Garis vertikal 1 px, titik 10 px aksen, peran (H3), "Instansi · periode" (mono), 3-4 poin | Tidak ada (section bacaan) | ExperienceItem |
| 4. Latar belakang | Dua kolom: Pendidikan (2 item, termasuk judul skripsi) dan Skill (3 grup: Pemrograman Web, Basis Data, Bahasa; hanya isi CV). Tanpa bar level | Tidak ada | EducationItem, SkillGroup |
| 5. Kontak (latar `surface-alt`) | Judul + satu kalimat, lalu 3 ContactCard. Nilai penuh terlihat dan bisa diblok | Kartu Email (varian primer: latar `accent-soft`, border aksen) | ContactCard |
| Footer | "© 2026 Pahni Hanawan", "Dibuat dengan HTML dan Tailwind CSS", tautan "Kembali ke atas" | Tidak ada | Footer |

**Detail hero.** Desktop: 12 kolom, teks 7 dan foto 5 (foto 320×427). Mobile: nama dua baris di kiri, foto 112 px di kanan, supaya nama tetap di atas lipatan.

**Fakta di chip hero** (hanya dari CV): "S1 Teknik Informatika · IPK 3.78", "Magang di Perum BULOG" (menunggu OQ-2), "5 proyek Laravel".

**Eyebrow konteks kartu proyek** (hanya dari CV): "Magang · Perum BULOG", "Skripsi", "Proyek" (PPDB; CV tidak menyebut konteks), "Magang · Piksi Ganesha", "Ujikom SMK".

#### S2 Menu mobile

Overlay penuh di bawah navbar. Tautan besar (tinggi 56 px), toggle tema di dasar, tombol tutup di kanan atas. Aksi utama: tautan "Kontak" (varian primer).

#### S3 404

Satu kolom di tengah: "404" mono besar, "Halaman tidak ditemukan", satu tombol primer "Kembali ke beranda". Navbar dan footer sama dengan S1.

#### S4 Gambar OG

Latar `bg`, nama (display) dan "Web Developer" di kiri, foto 3:4 di kanan, garis aksen 8 px di bawah. Tanpa tagline, supaya tidak perlu dibuat ulang.

### 7. Component Library

Seluruh kartu dan kartu kontak adalah satu elemen tautan/artikel yang konsisten, bukan div yang diberi `onclick`.

| Komponen | Varian | State |
| --- | --- | --- |
| Button | primary (isi aksen), secondary (border `border-strong`), icon-only (44×44) | default, hover (`accent-hover`), focus (cincin 2 px + offset 2 px), active (turun 1 px) |
| ThemeToggle | ikon matahari/bulan | terang, gelap; `aria-pressed` ikut; hover, focus |
| Navbar | transparan di atas, solid + shadow setelah scroll | desktop, mobile (tombol hamburger) |
| NavLink | default, kontak (outline) | default, hover (garis bawah aksen 2 px), focus |
| MobileMenu | tertutup, terbuka | transisi 200 ms; reduced-motion: tanpa transisi |
| SectionHeader | dengan/tanpa pengantar | satu gaya: H2 + garis pendek aksen 32×3 px |
| FactChip | tunggal | statis (bukan tombol) |
| Badge (stack) | netral | statis; wrap ke baris berikut |
| PhotoFrame | hero (320×427), mini (112×149), OG | gambar termuat; gagal: blok `surface-alt` berisi "PH" |
| ProjectCard | standar, unggulan (2 kolom) | default, hover (border aksen + shadow `md`, tanpa pergeseran layout), focus-within, gambar hilang (gradien `surface-alt` + nama proyek), tanpa demo (tombol Demo tidak dirender) |
| ExperienceItem | satu | default |
| EducationItem | dengan/tanpa catatan skripsi | default |
| SkillGroup | satu | default |
| ContactCard | primer (Email), standar (GitHub, LinkedIn) | default, hover (border aksen, panah bergeser 2 px), focus, active |
| SkipLink | tersembunyi sampai fokus | muncul kiri atas saat `Tab` pertama |
| Footer | satu | default |

### 8. State

Situs statis, jadi state penting hanya aset yang gagal dan JavaScript yang mati. Tidak ada banner offline buatan, karena menambah JS tanpa nilai bagi recruiter.

| State | S1 Beranda | S2 Menu | S3 404 |
| --- | --- | --- | --- |
| Kosong | Gambar proyek tidak ada: gradien + nama proyek. Foto tidak ada: "PH". Demo tidak ada: tombol tidak dirender | n/a | n/a |
| Memuat | Wadah gambar punya `aspect-ratio` tetap (tanpa lompatan layout). Font: fallback sistem lalu swap. CSS kritis inline (warna latar/teks per tema) mencegah kilat putih/hitam; konten tidak disembunyikan | n/a | n/a |
| Galat | CDN Tailwind gagal: konten dan link tetap terbaca tanpa gaya. JS mati: konten tampil, toggle tema dan menu HP tidak bekerja. Repo 404: ditemukan lewat pengecekan manual sebelum rilis | JS mati: hamburger tidak berfungsi, section tetap bisa di-scroll | n/a |
| Berhasil | Tema tersimpan; `mailto` membuka aplikasi email; link luar terbuka di tab baru | Menu menutup setelah memilih tautan; fokus kembali ke hamburger | Tombol kembali ke beranda |
| Offline | Halaman yang sudah termuat tetap terbaca. Link luar gagal dibuka oleh browser | Sama dengan S1 | Sama dengan S1 |

### 9. Responsive Behaviour

Tiga titik: mobile di bawah 640 px (desain dasar 360 px), tablet 640-1023 px, desktop 1024 px ke atas. Tidak boleh ada scroll horizontal pada 320 px.

| Elemen | Mobile | Tablet | Desktop |
| --- | --- | --- | --- |
| Navbar | Logo + hamburger + toggle | Seperti mobile sampai 768 px, lalu tautan inline | Tautan inline, tombol Kontak outline |
| Hero | Nama kiri, foto 112 px kanan, teks penuh di bawah, tombol bertumpuk lebar penuh | Foto 192 px di kanan teks | 7/5 kolom, foto 320×427 |
| Display | 40 px | 52 px | 64 px |
| Grid proyek | 1 kolom, kartu unggulan = kartu biasa | 2 kolom, unggulan selebar 2 | 3 kolom, unggulan 2 kolom |
| Timeline dan Latar belakang | Bertumpuk | Bertumpuk, kontainer 640 px | Judul 4 kolom, isi 8 kolom |
| Kontak | 3 kartu bertumpuk | 3 bertumpuk, lebar maks 560 px | 3 kolom sejajar |
| Padding section | 64 px | 80 px | 96 px |
| Interaksi | Target sentuh minimum 44×44 px, jarak antar tautan 8 px atau lebih | Sama | Hover aktif |

Badge, nama stack panjang, dan alamat email harus wrap atau terpotong dengan aman (`overflow-wrap: anywhere` pada alamat).

### 10. Accessibility

Target WCAG AA di kedua tema. Rasio kontras di bawah dihitung manual dari token dan harus diverifikasi ulang dengan alat kontras sebelum rilis.

#### Rasio kontras

| Pasangan | Light | Dark | Standar |
| --- | --- | --- | --- |
| `text` / `bg` | sekitar 16.6 : 1 | sekitar 16 : 1 | AAA |
| `text-muted` / `bg` | sekitar 6.9 : 1 | sekitar 8.3 : 1 | AA (minimal 4.5) |
| `accent` / `bg` | sekitar 6.2 : 1 | sekitar 7.4 : 1 | AA |
| `on-accent` / `accent` (tombol) | sekitar 6.5 : 1 | sekitar 7.4 : 1 | AA |
| `border-strong` / `bg` | sekitar 3.6 : 1 | sekitar 5.0 : 1 | Minimal 3:1 untuk komponen UI |
| `focus-ring` / `bg` | sekitar 16 : 1 | sekitar 16 : 1 | Minimal 3:1 |

Kartu dan border dekoratif tidak diwajibkan 3:1 karena informasi dibawa oleh teks.

#### Urutan fokus dan keyboard

- Urutan fokus sama dengan DOM dan visual: SkipLink, logo, tautan navbar, toggle tema, tombol hero, tautan/tombol tiap kartu proyek (kiri ke kanan, atas ke bawah), tautan Kontak, footer.
- `Tab` / `Shift+Tab` melewati semua elemen interaktif; tidak ada jebakan fokus di luar menu mobile.
- Menu mobile: fokus berpindah ke dalam saat dibuka dan terjebak di dalamnya, `Esc` menutup, fokus kembali ke pemicu.
- `Enter` / `Space` mengaktifkan tombol; `Enter` mengaktifkan tautan.
- `scroll-margin-top` 80 px atau lebih pada semua section agar judul tidak tertutup navbar sticky.

#### Semantik dan ARIA

- `<html lang="id">`; satu `<h1>` (nama); H2 per section; H3 per kartu/peran; tanpa lompatan level.
- Landmark: `header`, `nav` dengan `aria-label="Navigasi utama"`, `main`, `section` dengan `aria-labelledby`, `footer`.
- ThemeToggle: `<button>` dengan `aria-pressed` dan label tetap ("Mode gelap"). Hamburger: `aria-expanded` + `aria-controls`.
- Tautan keluar: teks tersembunyi "(buka di tab baru)" untuk pembaca layar. Ikon dekoratif `aria-hidden="true"`.
- Foto profil: `alt="Foto Pahni Hanawan"`. Gambar proyek: `alt` yang menjelaskan isi tampilan, bukan nama berkas. Gambar murni dekoratif: `alt=""`.
- Timeline memakai `<ol>`; tanggal memakai `<time>`; skill memakai `<ul>`.
- Informasi tidak pernah hanya lewat warna; pesan galat selalu ikon + teks.

#### Preferensi pengguna

- `prefers-reduced-motion` mematikan transisi menu dan smooth scroll.
- `prefers-color-scheme` menentukan tema awal.
- Zoom hingga 200% tanpa kehilangan konten atau fungsi; `color-scheme` diset agar kontrol bawaan browser mengikuti tema.

### Ketergantungan sebelum build

Tiga hal dari Pahni menentukan isi akhir; sisanya sudah cukup untuk mulai membuat `index.html`.

1. Setujui empat perubahan terhadap PRD di bagian awal Design Brief.
2. Kirim tagline hero (OQ-6).
3. Putuskan izin penyebutan BULOG (OQ-2). Bila tidak ada izin, chip fakta dan label kartu diganti tanpa nama instansi.
