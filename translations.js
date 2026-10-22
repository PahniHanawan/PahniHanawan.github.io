/**
 * Multilingual Translations (ID & EN)
 * Portofolio Pahni Hanawan
 */
(function() {
  var translations = {
    id: {
      "meta.title": "Pahni Hanawan — Web Developer",
      "meta.desc": "Portofolio Pahni Hanawan, Web Developer spesialis Laravel, PHP, dan MySQL dari Kabupaten Bandung. Membangun sistem informasi modern dan andal.",
      "nav.skip": "Lewati ke konten utama",
      "nav.projects": "Proyek",
      "nav.experience": "Pengalaman",
      "nav.background": "Latar Belakang",
      "nav.contact": "Kontak",
      "nav.contactMe": "Hubungi Saya",
      "nav.themeAria": "Mode gelap",
      "nav.themeTitle": "Beralih tema",
      "nav.langAria": "Ganti bahasa ke English",
      "nav.langTitle": "Beralih Bahasa (ID / EN)",
      "nav.mobileOpen": "Buka menu navigasi",
      "nav.mobileClose": "Tutup menu",
      "nav.mobileLocation": "Kabupaten Bandung · Web Developer",
      "nav.langLabel": "Pilihan Bahasa",

      "hero.eyebrow": "Web Developer · Kabupaten Bandung",
      "hero.tagline": "Membangun aplikasi web Laravel yang andal, rapi, dan berdampak nyata.",
      "hero.summary": "Lulusan S1 Teknik Informatika (IPK 3.78) yang fokus mengembangkan sistem informasi berbasis PHP dan Laravel. Berpengalaman nyata merancang aplikasi web end-to-end, mulai dari pemantauan proyek saat magang di Perum BULOG hingga sistem inventaris kampus dan sistem pendukung keputusan skripsi.",
      "hero.chipEdu": "🎓 S1 Informatika · IPK 3.78",
      "hero.chipIntern": "🏢 Magang di Perum BULOG",
      "hero.chipProjects": "⚡ 5 Proyek Laravel",
      "hero.btnProjects": "Lihat Proyek",
      "hero.btnContact": "Hubungi Saya",
      "hero.available": "Tersedia untuk Kerja",

      "projects.eyebrow": "Portofolio",
      "projects.title": "Proyek Pilihan",
      "projects.desc": "Lima proyek web nyata yang dibangun menggunakan Laravel dan MySQL, lengkap dengan repositori terbuka di GitHub.",
      
      "projects.bulog.tag": "Magang · Perum BULOG",
      "projects.bulog.title": "Aplikasi Monitoring Pekerjaan",
      "projects.bulog.desc": "Sistem pemantauan siklus proyek teknis dari tahap izin prinsip, penerbitan kontrak & SPK, pengajuan termin pembayaran, hingga progres fisik lapangan secara real-time. Dilengkapi dashboard visual, repositori berkas, dan hak akses multi-role (Staf, Verifikator, Manajemen).",
      "projects.bulog.repo": "Periksa Repo GitHub",
      "projects.bulog.featured": "Proyek Utama",

      "projects.jitanichi.tag": "Skripsi",
      "projects.jitanichi.title": "Sistem Jitanichi Go",
      "projects.jitanichi.desc": "Sistem Pendukung Keputusan (SPK) untuk menentukan prioritas promosi produk dengan kombinasi metode AHP (pembobotan kriteria) dan SAW (pemeringkatan alternatif), disertai ekspor laporan PDF.",
      "projects.jitanichi.repo": "Repo GitHub",

      "projects.ppdb.tag": "Proyek Web",
      "projects.ppdb.title": "PPDB SMA Darul Hikmah",
      "projects.ppdb.desc": "Aplikasi pendaftaran peserta didik baru online dengan form pendaftaran multi-langkah, modul unggah berkas, verifikasi berkas oleh panitia, serta notifikasi status kelulusan.",
      "projects.ppdb.repo": "Repo GitHub",

      "projects.inventory.tag": "Magang · Piksi Ganesha",
      "projects.inventory.title": "Web Inventory",
      "projects.inventory.desc": "Sistem inventarisasi sarana dan prasarana kampus: pencatatan aset per gedung dan ruangan, monitoring stok barang, riwayat peminjaman, serta rekapitulasi data format Excel dan PDF.",
      "projects.inventory.repo": "Repo GitHub",

      "projects.covid.tag": "Ujikom SMK",
      "projects.covid.title": "Web Tracking Covid",
      "projects.covid.desc": "Pelacak data statistik kasus COVID-19 global dan nasional hingga unit daerah. Integrasi REST API publik, visualisasi data kasus, serta antarmuka reaktif menggunakan Livewire.",
      "projects.covid.repo": "Repo GitHub",

      "exp.eyebrow": "Karier",
      "exp.title": "Pengalaman Kerja",
      "exp.desc": "Pengalaman magang praktis membangun dan memelihara aplikasi web yang dipakai oleh tim operasional instansi secara nyata.",
      
      "exp.bulog.role": "Web Developer Intern",
      "exp.bulog.period": "September – November 2025",
      "exp.bulog.company": "Perum BULOG · Bandung, Jawa Barat",
      "exp.bulog.b1": "Merancang dan membangun <strong>Aplikasi Monitoring Pekerjaan</strong> berbasis Laravel untuk memantau status fisik proyek, kontrak SPK, dan termin pembayaran secara berkala.",
      "exp.bulog.b2": "Mengembangkan antarmuka dashboard interaktif untuk rekapitulasi progres pekerjaan teknis serta repositori dokumen arsip digital proyek.",
      "exp.bulog.b3": "Menerapkan pembagian hak akses pengguna multi-role untuk staf lapangan, verifikator dokumen, dan tim pimpinan.",
      "exp.bulog.verified": "Kredensial Terverifikasi · No: 015/10040/HM.03/11/2025",
      "exp.bulog.btn": "📄 Buka Sertifikat BULOG",

      "exp.piksi.role": "Web Developer Intern",
      "exp.piksi.period": "Juni – Agustus 2020",
      "exp.piksi.company": "Politeknik Piksi Ganesha · Bandung, Jawa Barat",
      "exp.piksi.b1": "Membangun <strong>Web Inventory</strong> sarana dan prasarana kampus berbasis framework Laravel 5.8 dan basis data MySQL.",
      "exp.piksi.b2": "Mengembangkan modul pelacakan inventaris aset per ruangan/gedung kampus, pencatatan transaksi peminjaman barang, serta rekapitulasi data.",
      "exp.piksi.b3": "Menyediakan fitur ekspor data laporan inventaris dalam format Excel dan dokumen cetak PDF.",

      "bg.eyebrow": "Kompetensi",
      "bg.title": "Latar Belakang",
      "bg.desc": "Pendidikan formal, skripsi teknis, serta keahlian utama yang bersumber langsung dari rekam jejak saya.",
      "bg.edu.title": "Pendidikan Formal",
      "bg.edu.stmik.school": "STMIK Mardira Indonesia",
      "bg.edu.stmik.period": "2022 – 2026",
      "bg.edu.stmik.degree": "S1 Teknik Informatika · IPK 3.78",
      "bg.edu.stmik.loc": "Kabupaten Bandung, Jawa Barat",
      "bg.edu.stmik.thesisLabel": "Judul Skripsi:",
      "bg.edu.stmik.thesisTitle": "“Sistem Jitanichi Go — Sistem Pendukung Keputusan Rekomendasi Promosi Produk Menggunakan Metode AHP dan SAW”",
      
      "bg.edu.smk.school": "SMK Assalaam Bandung",
      "bg.edu.smk.period": "2018 – 2021",
      "bg.edu.smk.degree": "Rekayasa Perangkat Lunak (RPL)",
      "bg.edu.smk.loc": "Bandung, Jawa Barat",
      "bg.edu.smk.ujikomLabel": "Uji Kompetensi Keahlian (Ujikom):",
      "bg.edu.smk.ujikomDesc": "Membangun aplikasi Web Tracking Covid terintegrasi REST API publik untuk memantau sebaran kasus.",
      "bg.edu.smk.ujikomPartner": "Mitra Industri: CV. Icommits · Skor 85,71",
      "bg.edu.smk.ujikomBtn": "📋 Sertifikat UKK & Transkrip",

      "bg.skills.title": "Keahlian & Stack",
      "bg.skills.web": "Pemrograman Web & Framework",
      "bg.skills.db": "Basis Data & Arsitektur",
      "bg.skills.lang": "Bahasa Komunikasi",
      "bg.skills.langVal": "Bahasa Indonesia · <span class=\"text-ink-muted\">Penutur Asli (Native)</span>",
      "bg.skills.learning": "Sedang Mendalami",
      "bg.skills.learningDesc": "Odoo ERP (Manajemen modul bisnis) & Bahasa Pemrograman Go (Golang).",

      "certs.eyebrow": "Kredensial",
      "certs.title": "Sertifikat & Lisensi",
      "certs.desc": "16 kredensial resmi, sertifikasi uji kompetensi kejuruan industri, magang BUMN, serta sertifikat pelatihan berstandar SKKNI dan internasional.",
      "certs.filterAll": "Semua (16)",
      "certs.filterIntern": "Magang & UKK",
      "certs.filterWebDb": "Web & Database",
      "certs.filterData": "Data Science",
      "certs.filterTools": "Tools & Jaringan",
      "certs.zoom": "🔍 Perbesar Sertifikat",
      "certs.viewDoc": "Lihat Dokumen",
      "certs.viewDoc2": "Lihat Dokumen (2 Halaman)",
      "certs.pages2Badge": "2 Halaman (Depan & Belakang)",

      "modal.closeAria": "Tutup jendela sertifikat",
      "modal.btnFront": "📄 Halaman Depan",
      "modal.btnBack": "📋 Halaman Belakang (Transkrip Nilai)",
      "modal.indicatorFront": "Halaman 1 dari 2 (Depan)",
      "modal.indicatorBack": "Halaman 2 dari 2 (Belakang / Nilai)",
      "modal.prevAria": "Halaman sebelumnya",
      "modal.nextAria": "Halaman berikutnya",
      "modal.openOrig": "Buka Berkas Asli",
      "modal.openFront": "Buka Halaman Depan",
      "modal.openBack": "Buka Halaman Belakang",
      "modal.issuedPrefix": "Diterbitkan: ",

      "contact.eyebrow": "Komunikasi",
      "contact.title": "Hubungi Saya",
      "contact.desc": "Saya terbuka untuk kesempatan kerja penuh waktu, kontrak, maupun diskusi teknis. Hubungi saya langsung melalui salah satu jalur di bawah ini.",
      
      "contact.emailTag": "Kirim Email (Utama)",
      "contact.emailTitle": "Email Langsung",
      "contact.emailBtn": "Buka Aplikasi Email",

      "contact.gitTag": "Kode Sumber",
      "contact.gitTitle": "GitHub",
      "contact.gitBtn": "Buka Repositori",

      "contact.inTag": "Profil Profesional",
      "contact.inTitle": "LinkedIn",
      "contact.inBtn": "Terhubung di LinkedIn",

      "contact.location": "📍 Domisili: Kabupaten Bandung, Jawa Barat, Indonesia",

      "footer.copy": "&copy; 2026 Pahni Hanawan · Dibuat dengan HTML dan Tailwind CSS.",
      "footer.top": "↑ Kembali ke atas"
    },

    en: {
      "meta.title": "Pahni Hanawan — Web Developer Portfolio",
      "meta.desc": "Portfolio of Pahni Hanawan, Web Developer specializing in Laravel, PHP, and MySQL from Bandung, Indonesia. Building modern and reliable web systems.",
      "nav.skip": "Skip to main content",
      "nav.projects": "Projects",
      "nav.experience": "Experience",
      "nav.background": "Background",
      "nav.contact": "Contact",
      "nav.contactMe": "Contact Me",
      "nav.themeAria": "Dark mode",
      "nav.themeTitle": "Switch Theme",
      "nav.langAria": "Switch language to Indonesian",
      "nav.langTitle": "Switch Language (ID / EN)",
      "nav.mobileOpen": "Open navigation menu",
      "nav.mobileClose": "Close menu",
      "nav.mobileLocation": "Bandung Regency · Web Developer",
      "nav.langLabel": "Language",

      "hero.eyebrow": "Web Developer · Bandung Regency, Indonesia",
      "hero.tagline": "Building reliable, clean-architecture, and high-impact Laravel web applications.",
      "hero.summary": "Informatics (Computer Science) graduate with a 3.78 GPA, focusing on robust web applications with PHP & Laravel. Proven experience developing end-to-end systems, from enterprise project monitoring during an internship at Perum BULOG to campus inventory and decision support systems.",
      "hero.chipEdu": "🎓 B.S. in Informatics · GPA 3.78",
      "hero.chipIntern": "🏢 Internship at Perum BULOG",
      "hero.chipProjects": "⚡ 5 Laravel Projects",
      "hero.btnProjects": "View Projects",
      "hero.btnContact": "Get In Touch",
      "hero.available": "Available for Work",

      "projects.eyebrow": "Portfolio",
      "projects.title": "Featured Projects",
      "projects.desc": "Five real-world web applications built with Laravel and MySQL, accompanied by open-source GitHub repositories.",
      
      "projects.bulog.tag": "Internship · Perum BULOG",
      "projects.bulog.title": "Work Progress Monitoring Application",
      "projects.bulog.desc": "Technical project lifecycle monitoring system covering initial approval, SPK contracts, payment terms, and real-time on-site physical progress. Features interactive visual dashboards, digital document archives, and multi-role access control (Staff, Verifier, Management).",
      "projects.bulog.repo": "Check GitHub Repo",
      "projects.bulog.featured": "Featured Project",

      "projects.jitanichi.tag": "Undergraduate Thesis",
      "projects.jitanichi.title": "Jitanichi Go System",
      "projects.jitanichi.desc": "Decision Support System (DSS) to determine product promotion priorities combining AHP (criteria weighting) and SAW (alternative ranking) methods, complete with PDF report exports.",
      "projects.jitanichi.repo": "GitHub Repo",

      "projects.ppdb.tag": "Web Application",
      "projects.ppdb.title": "SMA Darul Hikmah Online Admission",
      "projects.ppdb.desc": "Online student admission web application featuring multi-step registration forms, document upload module, committee verification workflow, and graduation status announcements.",
      "projects.ppdb.repo": "GitHub Repo",

      "projects.inventory.tag": "Internship · Piksi Ganesha",
      "projects.inventory.title": "Campus Web Inventory",
      "projects.inventory.desc": "Campus facilities and infrastructure inventory system: asset tracking per building and room, stock monitoring, loan transaction logs, and data exports in Excel and PDF formats.",
      "projects.inventory.repo": "GitHub Repo",

      "projects.covid.tag": "Vocational Exam",
      "projects.covid.title": "Covid Tracking Web",
      "projects.covid.desc": "Global and national COVID-19 statistical tracking down to regional units. Integrates public REST APIs, real-time data visualization charts, and reactive UI built with Laravel Livewire.",
      "projects.covid.repo": "GitHub Repo",

      "exp.eyebrow": "Career",
      "exp.title": "Work Experience",
      "exp.desc": "Hands-on internship experience building and maintaining web applications utilized in live daily operations by enterprise teams.",
      
      "exp.bulog.role": "Web Developer Intern",
      "exp.bulog.period": "September – November 2025",
      "exp.bulog.company": "Perum BULOG · Bandung, West Java",
      "exp.bulog.b1": "Designed and developed the <strong>Work Monitoring Application</strong> with Laravel to track on-site project status, work order contracts, and milestone payments.",
      "exp.bulog.b2": "Built interactive dashboard interfaces for technical progress tracking and digital project document archiving.",
      "exp.bulog.b3": "Implemented multi-role user authorization permissions for field staff, document verifiers, and executive management.",
      "exp.bulog.verified": "Verified Credential · Ref: 015/10040/HM.03/11/2025",
      "exp.bulog.btn": "📄 View BULOG Certificate",

      "exp.piksi.role": "Web Developer Intern",
      "exp.piksi.period": "June – August 2020",
      "exp.piksi.company": "Piksi Ganesha Polytechnic · Bandung, West Java",
      "exp.piksi.b1": "Built the campus <strong>Web Inventory</strong> management system using Laravel 5.8 framework and MySQL database.",
      "exp.piksi.b2": "Developed asset tracking modules categorized by campus building and room, equipment loan transactions, and data summaries.",
      "exp.piksi.b3": "Implemented data export capabilities in both Microsoft Excel spreadsheets and printable PDF reports.",

      "bg.eyebrow": "Competencies",
      "bg.title": "Background",
      "bg.desc": "Formal education, technical thesis project, and key competencies verified by my practical track record.",
      "bg.edu.title": "Formal Education",
      "bg.edu.stmik.school": "STMIK Mardira Indonesia",
      "bg.edu.stmik.period": "2022 – 2026",
      "bg.edu.stmik.degree": "B.S. in Informatics · GPA 3.78",
      "bg.edu.stmik.loc": "Bandung Regency, West Java",
      "bg.edu.stmik.thesisLabel": "Undergraduate Thesis:",
      "bg.edu.stmik.thesisTitle": "“Sistem Jitanichi Go — Decision Support System for Product Promotion Recommendations Using AHP and SAW Methods”",
      
      "bg.edu.smk.school": "SMK Assalaam Bandung",
      "bg.edu.smk.period": "2018 – 2021",
      "bg.edu.smk.degree": "Software Engineering (RPL)",
      "bg.edu.smk.loc": "Bandung, West Java",
      "bg.edu.smk.ujikomLabel": "Vocational Competency Exam:",
      "bg.edu.smk.ujikomDesc": "Built Covid Tracking Web application integrated with public REST APIs to monitor case distribution statistics.",
      "bg.edu.smk.ujikomPartner": "Industry Partner: CV. Icommits · Score 85.71",
      "bg.edu.smk.ujikomBtn": "📋 Exam Certificate & Transcript",

      "bg.skills.title": "Skills & Tech Stack",
      "bg.skills.web": "Web Programming & Frameworks",
      "bg.skills.db": "Databases & Architecture",
      "bg.skills.lang": "Languages",
      "bg.skills.langVal": "Indonesian · <span class=\"text-ink-muted\">Native</span> &middot; English · <span class=\"text-ink-muted\">Working Proficiency</span>",
      "bg.skills.learning": "Currently Exploring",
      "bg.skills.learningDesc": "Odoo ERP (Business module management) & Go (Golang) Programming Language.",

      "certs.eyebrow": "Credentials",
      "certs.title": "Certificates & Licenses",
      "certs.desc": "16 verified credentials, vocational competency certifications, SOE/BUMN internship certificates, and SKKNI & international training credentials.",
      "certs.filterAll": "All (16)",
      "certs.filterIntern": "Internship & Exams",
      "certs.filterWebDb": "Web & Database",
      "certs.filterData": "Data Science",
      "certs.filterTools": "Tools & Networking",
      "certs.zoom": "🔍 Enlarge Certificate",
      "certs.viewDoc": "View Document",
      "certs.viewDoc2": "View Document (2 Pages)",
      "certs.pages2Badge": "2 Pages (Front & Back)",

      "modal.closeAria": "Close certificate window",
      "modal.btnFront": "📄 Front Page",
      "modal.btnBack": "📋 Back Page (Grade Transcript)",
      "modal.indicatorFront": "Page 1 of 2 (Front)",
      "modal.indicatorBack": "Page 2 of 2 (Back / Grades)",
      "modal.prevAria": "Previous page",
      "modal.nextAria": "Next page",
      "modal.openOrig": "Open Original File",
      "modal.openFront": "Open Front Page",
      "modal.openBack": "Open Back Page",
      "modal.issuedPrefix": "Issued: ",

      "contact.eyebrow": "Communication",
      "contact.title": "Get In Touch",
      "contact.desc": "I am open to full-time opportunities, contract roles, or technical discussions. Feel free to contact me directly through any of the channels below.",
      
      "contact.emailTag": "Send Email (Primary)",
      "contact.emailTitle": "Direct Email",
      "contact.emailBtn": "Open Email App",

      "contact.gitTag": "Source Code",
      "contact.gitTitle": "GitHub",
      "contact.gitBtn": "Open Repository",

      "contact.inTag": "Professional Profile",
      "contact.inTitle": "LinkedIn",
      "contact.inBtn": "Connect on LinkedIn",

      "contact.location": "📍 Domicile: Bandung Regency, West Java, Indonesia",

      "footer.copy": "&copy; 2026 Pahni Hanawan · Built with HTML and Tailwind CSS.",
      "footer.top": "↑ Back to top"
    }
  };

  var certTranslations = {
    id: [
      // 0. BULOG
      {
        badge: "★ Magang BUMN",
        tag: "Perum BULOG Kanwil Jabar",
        year: "2025",
        cardTitle: "Sertifikat Magang Web Developer",
        cardDesc: "Program magang 3 bulan BUMN Perum BULOG merancang dan membangun Aplikasi Monitoring Pekerjaan berbasis Laravel.",
        modalTitle: "Sertifikat Praktik Kerja / Magang Web Developer",
        issuer: "Perum BULOG Kantor Wilayah Jawa Barat",
        date: "28 November 2025",
        modalDesc: "Telah melaksanakan program magang 3 bulan di Perum BULOG Kantor Wilayah Jawa Barat terhitung mulai 01 September 2025 s.d 28 November 2025 sebagai Web Developer. Mengembangkan Aplikasi Monitoring Pekerjaan dan dashboard manajemen arsip proyek. Ditandatangani Wakil Pemimpin Wilayah (No: 015/10040/HM.03/11/2025)."
      },
      // 1. UKK RPL 85.71
      {
        tag: "Icommits & Assalaam",
        year: "2021 · Nilai 85,71",
        cardTitle: "Uji Kompetensi Keahlian RPL",
        cardDesc: "Uji kompetensi kelulusan kejuruan RPL berstandar industri dengan penguji CV. Icommits. Dilengkapi rincian nilai SKKNI.",
        modalTitle: "Sertifikat Uji Kompetensi Keahlian RPL (Skor 85,71)",
        issuer: "CV. Icommits & SMK Assalaam Bandung",
        date: "Mei 2021",
        modalDesc: "Menyelesaikan Uji Kompetensi Keahlian Rekayasa Perangkat Lunak dari mitra industri CV. Icommits Karya Solusi dengan perolehan hasil akhir 85,71 (Predikat Baik Sekali / A). Halaman belakang memuat transkrip nilai 7 unit kompetensi SKKNI."
      },
      // 2. Mobile & Web App Intermediate
      {
        tag: "CV. Icommits",
        year: "2021 · Android & Laravel",
        cardTitle: "Mobile & Web App (Intermediate)",
        cardDesc: "Pelatihan intermediate level Android & Laravel. Memuat evaluasi nilai OOP, Struktur Data, dan UI di halaman belakang.",
        modalTitle: "Mobile Programming & Web Application Training (Intermediate Level)",
        issuer: "CV. Icommits & SMK Assalaam",
        date: "30 April 2021",
        modalDesc: "Pelatihan dan program PKL Mobile Programming (Android) dan Web Application (Laravel) Intermediate Level. Halaman belakang menyertakan transkrip 6 kompetensi (OOP, Algoritma, Struktur Data skor 94, UI skor 94, SQL skor 80)."
      },
      // 3. SKKNI RPL
      {
        tag: "SMK Assalaam",
        year: "2021 · SKKNI RPL",
        cardTitle: "Sertifikat Kompetensi Kejuruan RPL",
        cardDesc: "Sertifikasi uji kompetensi kejuruan RPL resmi. Halaman belakang merinci 7 kode unit kompetensi SKKNI dan predikat nilai.",
        modalTitle: "Sertifikat Kompetensi Rekayasa Perangkat Lunak (SKKNI)",
        issuer: "SMK Assalaam & CV. Icommits",
        date: "08 April 2021",
        modalDesc: "Sertifikat Uji Kompetensi Keahlian Kejuruan RPL (No: 053/ASS-UJK/RPL/IV/2021) berstandar SE Mendikbud No. 1 Tahun 2021. Halaman belakang memuat rincian 7 unit kompetensi SKKNI resmi (Struktur Data, OOP, UI, Basis Data, dan Algoritma)."
      },
      // 4. Komputer & Jaringan
      {
        tag: "SMK Assalaam",
        year: "2021 · Hardware & Jaringan",
        cardTitle: "Uji Kompetensi Komputer & Jaringan",
        cardDesc: "Kompetensi perakitan hardware PC, instalasi sistem operasi workstation, dan konfigurasi jaringan dasar.",
        modalTitle: "Uji Kompetensi Komputer & Jaringan Dasar",
        issuer: "SMK Assalaam Bandung",
        date: "April 2021",
        modalDesc: "Lulus uji kompetensi komputer dan jaringan (No: 053/ASS/UJK/TKJ/IV/2021) meliputi: Merakit Personal Komputer (Nilai 80), Menginstal Sistem Operasi Dasar (Nilai 80), dan Jaringan Dasar (Nilai 75). Ditandatangani Kepala Sekolah SMK Assalaam & Kepala Program RPL."
      },
      // 5. Pandu Digital
      {
        tag: "Kominfo RI",
        year: "2023",
        cardTitle: "Pendampingan Pandu Digital",
        cardDesc: "Literasi Digital Sektor Pendidikan #19 Kota Bandung, tema Membentuk Pribadi Cerdas Digital.",
        modalTitle: "Pendampingan Pandu Digital",
        issuer: "Kementerian Kominfo RI",
        date: "14 Agustus 2023",
        modalDesc: "Partisipasi pendampingan Pandu Digital pada kegiatan Literasi Digital Sektor Pendidikan #19 di Kota Bandung bertema Membentuk Pribadi Cerdas Digital."
      },
      // 6. PHP Progate
      {
        tag: "Progate",
        year: "2020",
        cardTitle: "Kursus PHP",
        cardDesc: "Fundamental sintaks PHP, backend logic, dan penanganan data untuk pengembangan web dinamis.",
        modalTitle: "Kursus PHP (Dasar Pengembangan Web)",
        issuer: "Progate",
        date: "13 Oktober 2020",
        modalDesc: "Menyelesaikan 4 Study dan 1 Latihan. Kursus mencakup fundamental bahasa PHP untuk pengembangan aplikasi web dinamis."
      },
      // 7. SQL Progate
      {
        tag: "Progate",
        year: "2020",
        cardTitle: "Kursus SQL",
        cardDesc: "Fundamental Structured Query Language (SQL) untuk query, filtering, dan manipulasi basis data.",
        modalTitle: "Kursus SQL (Manipulasi Database)",
        issuer: "Progate",
        date: "10 Desember 2020",
        modalDesc: "Menyelesaikan 4 Study dan 1 Latihan. Kursus mencakup fundamental SQL mengenai dasar untuk memanipulasi database relasional."
      },
      // 8. Fundamental SQL DQLab
      {
        tag: "DQLab",
        year: "2024",
        cardTitle: "Fundamental SQL: SELECT Statement",
        cardDesc: "Kueri SELECT relasional, pemfilteran data bersyarat, dan teknik penarikan data terstruktur.",
        modalTitle: "Fundamental SQL Using SELECT Statement",
        issuer: "DQLab (UMN & Xeratic)",
        date: "10 Mei 2024",
        modalDesc: "Sertifikasi penguasaan kueri SELECT statement untuk ekstraksi, filtering klausa WHERE, pengurutan ORDER BY, dan agregasi data."
      },
      // 9. React Progate
      {
        tag: "Progate",
        year: "2020",
        cardTitle: "Kursus React",
        cardDesc: "Fundamental React, pengelolaan komponen reusable, props, dan state interaktif frontend.",
        modalTitle: "Kursus React (Web Front-end)",
        issuer: "Progate",
        date: "10 Desember 2020",
        modalDesc: "Menyelesaikan 4 Study. Kursus mencakup fundamental React untuk pengembangan antarmuka web Front-end berbasis komponen."
      },
      // 10. Git Progate
      {
        tag: "Progate",
        year: "2020",
        cardTitle: "Kursus Git",
        cardDesc: "Pengelolaan version control Git, repository history, commit staging, dan percabangan kode.",
        modalTitle: "Kursus Git (Version Control)",
        issuer: "Progate",
        date: "07 Oktober 2020",
        modalDesc: "Menyelesaikan fundamental Git version control: tracking perubahan kode, commit, branching, dan alur kolaborasi pengembang."
      },
      // 11. Python DQLab
      {
        tag: "DQLab",
        year: "2024",
        cardTitle: "Python Fundamental for Data Science",
        cardDesc: "Sintaks dasar Python, tipe data terstruktur, logika alur, dan fungsi untuk pipeline data.",
        modalTitle: "Python Fundamental for Data Science",
        issuer: "DQLab (UMN & Xeratic)",
        date: "01 Mei 2024",
        modalDesc: "Pemahaman dasar bahasa pemrograman Python untuk pengolahan data, struktur kontrol, manipulasi list/tuple/dictionary, dan library data science."
      },
      // 12. R DQLab
      {
        tag: "DQLab",
        year: "2024",
        cardTitle: "R Fundamental for Data Science",
        cardDesc: "Analisis komputasi data statistik, manipulasi data frame, dan struktur vektor dengan bahasa R.",
        modalTitle: "R Fundamental for Data Science",
        issuer: "DQLab (UMN & Xeratic)",
        date: "29 April 2024",
        modalDesc: "Sertifikasi penguasaan bahasa R untuk analisis data statistik, vektor, data frame, dan visualisasi dasar."
      },
      // 13. Freeclass DQLab
      {
        tag: "DQLab",
        year: "2024",
        cardTitle: "Data Science Fundamentals",
        cardDesc: "Pemahaman menyeluruh dasar-dasar ilmu data, metodologi kuantitatif, dan eksplorasi dataset.",
        modalTitle: "Freeclass: Data Science Fundamentals",
        issuer: "DQLab (UMN & Xeratic)",
        date: "2024",
        modalDesc: "Pengenalan lanskap profesi data, alur kerja pengolahan data mentah, dan pemanfaatan wawasan analitik."
      },
      // 14. Java Progate
      {
        tag: "Progate",
        year: "2020",
        cardTitle: "Kursus Java",
        cardDesc: "Dasar pemrograman Object-Oriented (OOP), modularitas kelas, method, dan struktur logika Java.",
        modalTitle: "Kursus Java (Object-Oriented Programming)",
        issuer: "Progate",
        date: "13 Oktober 2020",
        modalDesc: "Fundamental pemrograman Java berbasis Object-Oriented Programming (OOP), class, method, dan manipulasi data berorientasi objek."
      },
      // 15. CMD Progate
      {
        tag: "Progate",
        year: "2020",
        cardTitle: "Kursus Command Line",
        cardDesc: "Perintah terminal UNIX/Linux, operasi sistem berkas, otomasi shell, dan administrasi server.",
        modalTitle: "Kursus Command Line (UNIX / Terminal)",
        issuer: "Progate",
        date: "07 Oktober 2020",
        modalDesc: "Fundamental UNIX Command Line untuk navigasi direktori, eksekusi perintah terminal, dan manajemen file server."
      }
    ],

    en: [
      // 0. BULOG
      {
        badge: "★ SOE Internship",
        tag: "Perum BULOG West Java",
        year: "2025",
        cardTitle: "Web Developer Internship Certificate",
        cardDesc: "3-month SOE internship at Perum BULOG designing and building the Laravel-based Work Monitoring Application.",
        modalTitle: "Web Developer Internship Certificate",
        issuer: "Perum BULOG West Java Regional Office",
        date: "November 28, 2025",
        modalDesc: "Completed a 3-month internship program at Perum BULOG West Java Regional Office from September 01, 2025 to November 28, 2025 as a Web Developer. Developed the Work Monitoring Application and project document archive dashboard. Signed by the Deputy Regional Head (No: 015/10040/HM.03/11/2025)."
      },
      // 1. UKK RPL 85.71
      {
        tag: "Icommits & Assalaam",
        year: "2021 · Score 85.71",
        cardTitle: "Software Engineering Vocational Exam",
        cardDesc: "Industry-standard vocational graduation competency exam assessed by CV. Icommits. Includes official SKKNI grade transcript.",
        modalTitle: "Software Engineering Vocational Competency Certificate (Score 85.71)",
        issuer: "CV. Icommits & Assalaam Vocational School Bandung",
        date: "May 2021",
        modalDesc: "Completed the Software Engineering Vocational Competency Exam assessed by industry partner CV. Icommits Karya Solusi with a final score of 85.71 (Grade Very Good / A). The back page contains the 7-unit SKKNI competency grade transcript."
      },
      // 2. Mobile & Web App Intermediate
      {
        tag: "CV. Icommits",
        year: "2021 · Android & Laravel",
        cardTitle: "Mobile & Web App (Intermediate)",
        cardDesc: "Intermediate level Android & Laravel training. Includes grade evaluation for OOP, Data Structures, and UI on the back page.",
        modalTitle: "Mobile Programming & Web Application Training (Intermediate Level)",
        issuer: "CV. Icommits & Assalaam Vocational School",
        date: "April 30, 2021",
        modalDesc: "Vocational training and internship program in Mobile Programming (Android) and Web Application (Laravel) at Intermediate Level. Back page features 6 competency grades (OOP, Algorithms, Data Structures score 94, UI score 94, SQL score 80)."
      },
      // 3. SKKNI RPL
      {
        tag: "SMK Assalaam",
        year: "2021 · SKKNI Standard",
        cardTitle: "Software Engineering Competency Certificate",
        cardDesc: "Official vocational competency certification. The reverse page details 7 SKKNI competency units and performance grades.",
        modalTitle: "Software Engineering Competency Certificate (SKKNI Standard)",
        issuer: "SMK Assalaam & CV. Icommits",
        date: "April 08, 2021",
        modalDesc: "Official Software Engineering vocational competency exam certificate (No: 053/ASS-UJK/RPL/IV/2021). The back page details 7 official national SKKNI competency units (Data Structures, OOP, UI, Databases, and Algorithms)."
      },
      // 4. Komputer & Jaringan
      {
        tag: "SMK Assalaam",
        year: "2021 · Hardware & Networking",
        cardTitle: "Computer & Networking Competency",
        cardDesc: "PC hardware assembly, workstation operating system installation, and basic computer network setup.",
        modalTitle: "Basic Computer & Networking Competency Exam",
        issuer: "SMK Assalaam Bandung",
        date: "April 2021",
        modalDesc: "Passed computer and networking competency test (No: 053/ASS/UJK/TKJ/IV/2021): PC Hardware Assembly (Score 80), Basic OS Installation (Score 80), and Basic Networking (Score 75)."
      },
      // 5. Pandu Digital
      {
        tag: "Ministry of ICT RI",
        year: "2023",
        cardTitle: "Digital Guide Facilitation",
        cardDesc: "Education Sector Digital Literacy Event #19 in Bandung, themed Shaping Smart Digital Personalities.",
        modalTitle: "Digital Guide Facilitation (Pandu Digital)",
        issuer: "Ministry of Communication and Informatics (Kominfo)",
        date: "August 14, 2023",
        modalDesc: "Participation in Digital Guide mentoring for the Education Sector Digital Literacy Event #19 in Bandung, themed Shaping Smart Digital Personalities."
      },
      // 6. PHP Progate
      {
        tag: "Progate",
        year: "2020",
        cardTitle: "PHP Course",
        cardDesc: "PHP syntax fundamentals, backend logic, and dynamic data handling for web applications.",
        modalTitle: "PHP Course (Web Development Fundamentals)",
        issuer: "Progate",
        date: "October 13, 2020",
        modalDesc: "Completed 4 lessons and 1 practical exercise covering core PHP fundamentals for dynamic web application development."
      },
      // 7. SQL Progate
      {
        tag: "Progate",
        year: "2020",
        cardTitle: "SQL Course",
        cardDesc: "Fundamental Structured Query Language (SQL) for querying, filtering, and manipulating relational databases.",
        modalTitle: "SQL Course (Database Manipulation)",
        issuer: "Progate",
        date: "December 10, 2020",
        modalDesc: "Completed 4 lessons and 1 practical exercise covering essential Structured Query Language (SQL) for relational database manipulation."
      },
      // 8. Fundamental SQL DQLab
      {
        tag: "DQLab",
        year: "2024",
        cardTitle: "Fundamental SQL: SELECT Statement",
        cardDesc: "Relational SELECT queries, conditional data filtering, and structured data retrieval techniques.",
        modalTitle: "Fundamental SQL Using SELECT Statement",
        issuer: "DQLab (UMN & Xeratic)",
        date: "May 10, 2024",
        modalDesc: "Certification in mastering SELECT queries for data extraction, conditional WHERE clause filtering, ORDER BY sorting, and aggregate functions."
      },
      // 9. React Progate
      {
        tag: "Progate",
        year: "2020",
        cardTitle: "React Course",
        cardDesc: "React fundamentals, reusable component architecture, props, and interactive frontend state.",
        modalTitle: "React Course (Web Front-end)",
        issuer: "Progate",
        date: "December 10, 2020",
        modalDesc: "Completed 4 lessons covering React fundamentals for building modern component-based frontend web user interfaces."
      },
      // 10. Git Progate
      {
        tag: "Progate",
        year: "2020",
        cardTitle: "Git Course",
        cardDesc: "Git version control management, repository history, staging commits, and code branching.",
        modalTitle: "Git Course (Version Control)",
        issuer: "Progate",
        date: "October 07, 2020",
        modalDesc: "Completed Git version control fundamentals: tracking code modifications, committing, branching, and developer collaboration workflows."
      },
      // 11. Python DQLab
      {
        tag: "DQLab",
        year: "2024",
        cardTitle: "Python Fundamental for Data Science",
        cardDesc: "Python syntax fundamentals, structured data types, control logic, and functions for data workflows.",
        modalTitle: "Python Fundamental for Data Science",
        issuer: "DQLab (UMN & Xeratic)",
        date: "May 01, 2024",
        modalDesc: "Core understanding of Python programming for data processing, control flows, data structures (lists, tuples, dictionaries), and data science packages."
      },
      // 12. R DQLab
      {
        tag: "DQLab",
        year: "2024",
        cardTitle: "R Fundamental for Data Science",
        cardDesc: "Statistical computing analysis, data frame manipulation, and vector structures in R.",
        modalTitle: "R Fundamental for Data Science",
        issuer: "DQLab (UMN & Xeratic)",
        date: "April 29, 2024",
        modalDesc: "Certification in R programming for statistical data computation, vectors, data frames, and foundational data visualizations."
      },
      // 13. Freeclass DQLab
      {
        tag: "DQLab",
        year: "2024",
        cardTitle: "Data Science Fundamentals",
        cardDesc: "Comprehensive understanding of data science principles, quantitative methods, and dataset exploration.",
        modalTitle: "Freeclass: Data Science Fundamentals",
        issuer: "DQLab (UMN & Xeratic)",
        date: "2024",
        modalDesc: "Introduction to data professional disciplines, raw data preprocessing pipelines, and business analytical insights."
      },
      // 14. Java Progate
      {
        tag: "Progate",
        year: "2020",
        cardTitle: "Java Course",
        cardDesc: "Object-Oriented Programming (OOP) fundamentals, modular class structures, methods, and Java logic.",
        modalTitle: "Java Course (Object-Oriented Programming)",
        issuer: "Progate",
        date: "October 13, 2020",
        modalDesc: "Core Java programming with Object-Oriented Programming (OOP) paradigms: classes, methods, encapsulation, and object manipulation."
      },
      // 15. CMD Progate
      {
        tag: "Progate",
        year: "2020",
        cardTitle: "Command Line Course",
        cardDesc: "UNIX/Linux terminal commands, filesystem operations, shell automation, and basic server administration.",
        modalTitle: "Command Line Course (UNIX / Terminal)",
        issuer: "Progate",
        date: "October 07, 2020",
        modalDesc: "UNIX Command Line fundamentals for directory navigation, terminal command execution, shell automation, and server file management."
      }
    ]
  };

  window.portfolioTranslations = translations;
  window.certTranslations = certTranslations;

  var currentLang = 'id';
  try {
    var savedLang = localStorage.getItem('portfolio_lang');
    if (savedLang === 'en' || savedLang === 'id') {
      currentLang = savedLang;
    } else {
      // Check browser preferred language
      var navLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
      if (navLang.startsWith('en')) {
        currentLang = 'en';
      }
    }
  } catch (e) {}

  window.currentLang = currentLang;

  function updateTexts(lang) {
    var dict = translations[lang] || translations.id;

    // Document title and meta
    if (dict['meta.title']) document.title = dict['meta.title'];
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict['meta.desc']) metaDesc.setAttribute('content', dict['meta.desc']);
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && dict['meta.desc']) ogDesc.setAttribute('content', dict['meta.desc']);
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && dict['meta.title']) ogTitle.setAttribute('content', dict['meta.title']);

    // HTML Lang attribute
    document.documentElement.lang = lang;

    // Elements with data-i18n
    var elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Elements with data-i18n-html
    var htmlElements = document.querySelectorAll('[data-i18n-html]');
    htmlElements.forEach(function(el) {
      var key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // Elements with data-i18n-aria
    var ariaElements = document.querySelectorAll('[data-i18n-aria]');
    ariaElements.forEach(function(el) {
      var key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) {
        el.setAttribute('aria-label', dict[key]);
      }
    });

    // Elements with data-i18n-title
    var titleElements = document.querySelectorAll('[data-i18n-title]');
    titleElements.forEach(function(el) {
      var key = el.getAttribute('data-i18n-title');
      if (dict[key] !== undefined) {
        el.setAttribute('title', dict[key]);
      }
    });

    // Update Certificate Cards
    var certCards = document.querySelectorAll('.cert-card');
    var certList = certTranslations[lang] || certTranslations.id;
    certCards.forEach(function(card) {
      var idxAttr = card.getAttribute('data-cert-index');
      if (idxAttr === null) return;
      var idx = parseInt(idxAttr, 10);
      var cData = certList[idx];
      if (!cData) return;

      var tagEl = card.querySelector('.cert-card-tag');
      if (tagEl && cData.tag) tagEl.textContent = cData.tag;

      var yearEl = card.querySelector('.cert-card-year');
      if (yearEl && cData.year) yearEl.textContent = cData.year;

      var titleEl = card.querySelector('.cert-card-title');
      if (titleEl && cData.cardTitle) titleEl.textContent = cData.cardTitle;

      var descEl = card.querySelector('.cert-card-desc');
      if (descEl && cData.cardDesc) descEl.textContent = cData.cardDesc;

      var badgeEl = card.querySelector('.cert-card-badge-bumn');
      if (badgeEl && cData.badge) badgeEl.textContent = cData.badge;

      var viewDocEl = card.querySelector('.cert-card-view-btn');
      if (viewDocEl) {
        var isTwoPage = card.getAttribute('data-two-page') === 'true';
        viewDocEl.textContent = isTwoPage ? (dict['certs.viewDoc2'] || 'Lihat Dokumen (2 Halaman)') : (dict['certs.viewDoc'] || 'Lihat Dokumen');
      }

      var zoomEl = card.querySelector('.cert-card-zoom-text');
      if (zoomEl) zoomEl.textContent = dict['certs.zoom'] || '🔍 Perbesar Sertifikat';

      var twoPageBadgeEl = card.querySelector('.cert-card-pages-badge');
      if (twoPageBadgeEl) twoPageBadgeEl.textContent = dict['certs.pages2Badge'] || '2 Halaman (Depan & Belakang)';
    });

    // Update Language Switcher UI buttons
    updateToggleButtons(lang);

    // If modal is open, refresh modal text
    if (window.currentActiveModalCert !== undefined && window.currentActiveModalCert !== null) {
      var activeCertData = certList[window.currentActiveModalCert];
      if (activeCertData) {
        var modalTitle = document.getElementById('cert-modal-title');
        var modalIssuer = document.getElementById('cert-modal-issuer');
        var modalDate = document.getElementById('cert-modal-date');
        var modalDesc = document.getElementById('cert-modal-desc');
        if (modalTitle) modalTitle.textContent = activeCertData.modalTitle;
        if (modalIssuer) modalIssuer.textContent = activeCertData.issuer;
        if (modalDate) modalDate.textContent = (dict['modal.issuedPrefix'] || 'Diterbitkan: ') + activeCertData.date;
        if (modalDesc) modalDesc.textContent = activeCertData.modalDesc;
      }
    }
  }

  function updateToggleButtons(lang) {
    var isID = lang === 'id';
    
    // Desktop switcher
    var indID = document.getElementById('lang-indicator-id');
    var indEN = document.getElementById('lang-indicator-en');
    var langBtn = document.getElementById('lang-toggle');
    
    if (indID && indEN) {
      if (isID) {
        indID.className = 'px-1.5 py-0.5 rounded-md font-bold text-on-brand bg-brand shadow-xs transition-colors';
        indEN.className = 'px-1.5 py-0.5 rounded-md text-ink-muted hover:text-ink transition-colors';
      } else {
        indID.className = 'px-1.5 py-0.5 rounded-md text-ink-muted hover:text-ink transition-colors';
        indEN.className = 'px-1.5 py-0.5 rounded-md font-bold text-on-brand bg-brand shadow-xs transition-colors';
      }
    }
    if (langBtn) {
      langBtn.setAttribute('aria-label', isID ? 'Ganti bahasa ke English' : 'Switch language to Indonesian');
      langBtn.setAttribute('title', isID ? 'Beralih ke Bahasa Inggris' : 'Switch to Indonesian');
    }

    // Mobile switcher
    var mobID = document.getElementById('mobile-lang-id');
    var mobEN = document.getElementById('mobile-lang-en');
    if (mobID && mobEN) {
      if (isID) {
        mobID.className = 'px-2.5 py-1 rounded-lg font-bold text-on-brand bg-brand shadow-xs transition-colors';
        mobEN.className = 'px-2.5 py-1 rounded-lg text-ink-muted hover:text-ink transition-colors';
      } else {
        mobID.className = 'px-2.5 py-1 rounded-lg text-ink-muted hover:text-ink transition-colors';
        mobEN.className = 'px-2.5 py-1 rounded-lg font-bold text-on-brand bg-brand shadow-xs transition-colors';
      }
    }
  }

  window.setLanguage = function(lang) {
    if (lang !== 'id' && lang !== 'en') return;
    currentLang = lang;
    window.currentLang = lang;
    try {
      localStorage.setItem('portfolio_lang', lang);
    } catch (e) {}
    updateTexts(lang);
  };

  window.toggleLanguage = function() {
    var newLang = currentLang === 'id' ? 'en' : 'id';
    window.setLanguage(newLang);
  };

  window.translations = translations;
  window.certTranslations = certTranslations;

  // Run on DOM ready
  document.addEventListener('DOMContentLoaded', function() {
    updateTexts(currentLang);

    var langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
      langToggle.addEventListener('click', function() {
        window.toggleLanguage();
      });
    }

    var mobLangToggle = document.getElementById('mobile-lang-toggle');
    if (mobLangToggle) {
      mobLangToggle.addEventListener('click', function() {
        window.toggleLanguage();
      });
    }
  });
})();
