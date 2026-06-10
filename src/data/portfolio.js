// ---- DATA PORTFOLIO RAHMAT SYAHPUTRA ----

export const profile = {
  name: 'Rahmat Syahputra',
  initials: 'RS',
  title: 'Fullstack Developer',
  subtitle: 'Mahasiswa Teknik Informatika · UMP',
  bio: 'Mahasiswa semester 6 Universitas Muhammadiyah Purwokerto, Program Studi Teknik Informatika. Aktif berkontribusi dalam organisasi kemahasiswaan dan berpengalaman dalam program magang. Saya memiliki minat di bidang pengembangan web dan berkomitmen untuk terus belajar mengikuti perkembangan teknologi.',
  email: 'rahmatsptr1123@gmail.com',
  phone: '0882-0067-44979',
  address: 'Purwokerto, Banyumas',
  instagram: '@maamatptr',
  instagramUrl: 'https://instagram.com/maamatptr',
  tiktok: '@mangamaat',
  tiktokUrl: 'https://www.tiktok.com/@mangamaat',
  cv: '/CV_Rahmat.pdf',
}

export const hardSkills = ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL']

export const softSkills = [
  'Manajemen Waktu',
  'Komunikasi',
  'Problem Solving',
  'Inisiatif & Tanggung Jawab',
  'Kerja Sama Tim',
]

export const tickerItems = [
  'HTML / CSS', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap',
  'Taekwondo', 'Leadership', 'Problem Solving',
]

export const organisasi = [
  {
    org: 'UKM Taekwondo UMP',
    role: 'Ketua Umum UKM Taekwondo',
    desc: 'Memimpin seluruh kegiatan dan manajemen UKM Taekwondo UMP',
    year: '2025 – 2026',
  },
  {
    org: 'HMPS Teknik Informatika',
    role: 'Staff Dept. PSDM',
    desc: 'Pengembangan sumber daya mahasiswa di lingkungan Teknik Informatika',
    year: '2024 – 2025',
  },
]

export const kepanitiaan = [
  {
    year: '2026',
    name: 'Popda-Kejurkab Taekwondo Banyumas',
    role: 'Divisi Kesektariatan',
    desc: 'Mengelola administrasi kesekretariatan dalam penyelenggaraan Popda-Kejurkab Taekwondo Banyumas',
  },
  {
    year: '2025',
    name: 'Ospek Makrab Teknik Informatika',
    role: 'Koordinator Divisi Perkap',
    desc: 'Mengkoordinasikan kebutuhan perlengkapan kegiatan Ospek Makrab Teknik Informatika',
  },
  {
    year: '2025',
    name: 'First Time At Campus',
    role: 'Steering Committee',
    desc: 'Berperan sebagai pengarah dan pengawas jalannya kegiatan First Time At Campus',
  },
  {
    year: '2025',
    name: 'Makrab UKM Taekwondo UMP',
    role: 'Steering Committee',
    desc: 'Berperan sebagai pengarah dan pengawas jalannya kegiatan Makrab UKM Taekwondo',
  },
  {
    year: '2025',
    name: 'National Information Technology Roll Out',
    role: 'Koordinator Divisi Perkap',
    desc: 'Mengkoordinasikan logistik, pengadaan barang, dan penyiapan perlengkapan teknis untuk kelancaran kegiatan teknologi informasi tingkat nasional tersebut',
  }
]

export const magang = [
  {
    company: 'Telkom Akses Purwokerto',
    period: 'Juni 2021 – Agustus 2021',
    desc: 'Membantu teknisi lapangan dalam kegiatan operasional dan pemeliharaan jaringan telekomunikasi.',
  },
  {
    company: 'PT. Sumber Alfaria Trijaya (Alfamart)',
    period: 'Desember 2022 – Mei 2023',
    desc: 'Bekerja sebagai Crew Store yang bertugas melayani transaksi kasir, mengelola stok dan display barang di rak, serta menjaga kebersihan area toko.',
  },
  {
    company: 'Biro Aset & Inventaris UMP',
    period: 'Juli 2025 – Januari 2026',
    desc: 'Melakukan pendataan aset dan inventaris kampus secara sistematis dan terstruktur.',
  },
]

export const pendidikan = [
  {
    period: '2009 – 2015',
    school: 'SDN 1 Kracak',
    major: '',
  },
  {
    period: '2015 – 2018',
    school: 'SMP Muhammadiyah Ajibarang',
    major: '',
  },
  {
    period: '2019 – 2022',
    school: 'SMK Muhammadiyah 1 Ajibarang',
    major: 'Teknik Komputer dan Jaringan (TKJ)',
  },
  {
    period: '2023 – Sekarang',
    school: 'Universitas Muhammadiyah Purwokerto',
    major: 'S1 Teknik Informatika — Semester 6',
  },
]


export const projects = [
  {
    id: 'smash-kasir',
    title: 'Aplikasi Point of Sale (POS) Smash Kasir',
    category: 'webdev',
    categoryName: 'Projek',
    tags: ['Laravel', 'MySQL', 'Bootstrap', 'jQuery'],
    shortDesc: 'Aplikasi POS berbasis web untuk manajemen transaksi, stok, dan laporan keuangan gerai Smash Badminton.',
    desc: 'Aplikasi Point of Sale (POS) berbasis web yang dirancang khusus untuk operasional gerai Smash Badminton. Aplikasi ini memudahkan pengelolaan transaksi penjualan, manajemen stok produk, dan pelaporan keuangan secara digital dan real-time.',
    challenge: '',
    features: [
      'Sistem login PIN berbasis role (Admin & Kasir)',
      'Point of Sale (POS) kasir',
      'Manajemen stok & produk',
      'Laporan penjualan & riwayat transaksi',
      'Pembayaran',
      'Pengaturan toko & struk'
    ],
    backend: 'PHP 8.2, Laravel 11 (framework), MySQL (database)',
    frontend: 'Bootstrap 5.3 (CSS framework), Bootstrap Icons, jQuery 3.7, Chart.js (grafik penjualan), DataTables (tabel data), SweetAlert2 (popup notifikasi)',
    tools: 'XAMPP (local development), Composer (PHP package manager), InfinityFree (hosting), WinSCP (FTP upload), phpMyAdmin (database management)',
    image: '/images/project_smash_kasir.png'
  },
  {
    id: 'satria-soebandi-taekwondo',
    title: 'Website Dojang Taekwondo Satria Soebandi',
    category: 'webdev',
    categoryName: 'Projek',
    tags: ['React', 'TailwindCSS', 'Supabase', 'PostgreSQL'],
    shortDesc: 'Aplikasi manajemen dojang terintegrasi untuk pendaftaran, iuran pembayaran, kartu anggota digital, dan CMS landing page.',
    desc: 'Website Dojang Taekwondo Satria Soebandi adalah platform manajemen terintegrasi untuk mendigitalisasi operasional dojang. Aplikasi ini mencakup pendaftaran online anggota baru, pengelolaan administrasi, kartu anggota digital, pencatatan iuran pembayaran, hingga pengelolaan konten website secara dinamis.',
    challenge: '',
    features: [
      'Form pendaftaran anggota lengkap dengan unggah dokumen pendukung.',
      'Unduh kartu anggota digital berfoto dalam format PDF (jsPDF + html2canvas).',
      'Manajemen pencatatan iuran pembayaran dan riwayat kenaikan tingkat sabuk.',
      'Verifikasi berkas pendaftaran dan pembuatan akun member otomatis oleh admin.',
      'Fitur CMS dinamis untuk mengubah profil pelatih, prestasi, berita, dan jadwal latihan.',
      'Otorisasi akses multi-role (Public, Member, dan Admin).'
    ],
    backend: 'Supabase Auth (Autentikasi), Supabase Storage (Berkas & Foto)',
    database: 'Supabase (PostgreSQL)',
    frontend: 'React 19, React Router v7, Tailwind CSS v4, Lucide React, jsPDF, html2canvas, DOMPurify',
    tools: 'Vite 8, ESLint, PostCSS, Vercel Hosting',
    image: '/images/project_satria_soebandi.png'
  },
  {
    id: 'bengkel-akuntansi',
    title: 'Sistem Informasi Akuntansi Bengkel',
    category: 'webdev',
    categoryName: 'Projek',
    tags: ['Node.js', 'TypeScript', 'MySQL', 'TailwindCSS'],
    shortDesc: 'Aplikasi keuangan berbasis web untuk digitalisasi pembukuan usaha bengkel motor/mobil dan penjualan suku cadang.',
    desc: 'Sistem Informasi Akuntansi Bengkel Presisi (Mamat Racing) adalah sebuah aplikasi keuangan berbasis web yang dirancang khusus untuk digitalisasi pembukuan usaha bengkel motor/mobil dan penjualan suku cadang.',
    challenge: '',
    features: [
      'Modul Autentikasi Pengguna (User Authentication)',
      'Dasbor Keuangan Terintegrasi (Financial Dashboard)',
      'Manajemen Bagan Akun (Chart of Accounts / COA)',
      'Input Transaksi Ganda (Double-Entry Transaction Input)',
      'Buku Jurnal Umum Kronologis',
      'Laporan Keuangan Otomatis (Real-Time Financial Reports)'
    ],
    backend: 'Node.js, Express.js, TypeScript',
    frontend: 'EJS, Tailwind CSS, Google Material Icons & Fonts',
    database: 'MySQL (Aiven.io cloud), SQLite (Local fallback), Database Triggers',
    tools: 'Vercel (Hosting & Infrastructure)',
    image: '/images/project_bengkel_akuntansi.jpg'
  }
]

