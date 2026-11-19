// data.js - Data source for Ghyovas DevLog
// Derived from the official "JADWAL KEGIATAN HARIAN" logbook at PT Laksita Emi Saguna
const blogData = {
  profile: {
    name: "Ghyovas",
    title: "Halo, saya Ghyovas!",
    headline: "Mahasiswa Magang",
    company: "PT Laksita Emi Saguna",
    client: "Universitas Mahasaraswati (UNMAS)",
    role: "IT Intern / System & Web Analyst",
    period: "26 Agustus 2026 - Sekarang",
    avatar: "assets/avatar_hd.png?v=3",
    bio: "IT Intern di PT Laksita Emi Saguna yang berfokus pada pengujian sistem (Testcase), perancangan User Flow, diagram proses bisnis, technical flowmap, penyusunan User Guide 8-Role, serta pengembangan modul pada ekosistem SIM Perencanaan, SIM Penganggaran, dan SIM Keuangan Universitas Mahasaraswati (UNMAS).",
    location: "Denpasar, Bali, Indonesia",
    email: "ghyovaspurba@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    badges: [
      { name: "php", icon: "assets/icons/php.svg", color: "#777BB3", bg: "#EEF0F9" },
      { name: "Laravel", icon: "assets/icons/laravel.svg", color: "#FF2D20", bg: "#FFF1F0" },
      { name: "MySQL", icon: "assets/icons/mysql.svg", color: "#00758F", bg: "#EBF5F8" },
      { name: "Git", icon: "assets/icons/git.svg", color: "#F05032", bg: "#FFF2EF" },
      { name: "Vue.js", icon: "assets/icons/vue.svg", color: "#42B883", bg: "#EEFBF5" },
      { name: "Docker", icon: "assets/icons/docker.svg", color: "#2496ED", bg: "#EFF6FD" }
    ]
  },

  posts: [
    {
      id: "minggu-13",
      weekNumber: 13,
      title: "Minggu 13: Penyempurnaan Technical Flowmap & Integrasi Lanjutan",
      dateRange: "16 Nov 2026 - 20 Nov 2026",
      date: "November 17, 2026",
      author: "Ghyovas",
      thumbnail: "assets/thumbnails/thumb_minggu12.svg",
      tags: ["Technical Flowmap", "Sistem Penganggaran", "PT Laksita"],
      readTime: "4 min read",
      excerpt: "Revisi dan penyempurnaan flowmap teknis SIM Penganggaran berdasarkan feedback mentor serta melanjutkan pengerjaan modul...",
      summary: "Memasuki minggu ke-13, fokus utama adalah merevisi flowmap dari sisi teknis sistem penganggaran setelah mendapatkan catatan review dari mentor, serta persiapan integrasi fitur lanjutan pada sistem.",
      dailyActivities: [
        {
          dayDate: "Senin, 16/11/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Merevisi flowmap dari sisi teknis SIM Pengangaran dan sudah mengirimkannya kembali ke mentor saya."
        },
        {
          dayDate: "Selasa, 17/11/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Melakukan rekapitulasi dokumentasi mingguan seluruh logbook magang dan melanjutkan pengembangan sistem magang."
        }
      ],
      tasks: [
        "Menganalisis poin evaluasi mentor terkait diagram alir teknis (Technical Flowmap).",
        "Menyesuaikan pemetaan relasi data antara database pos anggaran dengan endpoint service.",
        "Mengirimkan revisi flowmap final kepada mentor untuk persetujuan.",
        "Menyusun dokumentasi komprehensif seluruh fase magang di PT Laksita Emi Saguna."
      ],
      keyLearnings: "Proses iterasi dan penyempurnaan diagram arsitektur teknis sangat esensial agar alur logika dapat dipahami secara seragam oleh seluruh developer di tim.",
      challenges: "Menyelaraskan alur validasi peran (RBAC) dengan skema request payload pada technical flowmap.",
      solutions: "Menambahkan layer middleware check yang eksplisit pada diagram flowmap arsitektur.",
      nextWeek: "Melanjutkan implementasi modul project mandiri dan persiapan laporan akhir magang."
    },
    {
      id: "minggu-12",
      weekNumber: 12,
      title: "Minggu 12: Perancangan Flowmap Sisi Teknis SIM Penganggaran",
      dateRange: "09 Nov 2026 - 13 Nov 2026",
      date: "November 13, 2026",
      author: "Ghyovas",
      thumbnail: "assets/thumbnails/thumb_minggu12.svg",
      tags: ["Flowmap Teknis", "SIM Penganggaran", "Architecture"],
      readTime: "5 min read",
      excerpt: "Menambahkan glosarium ke file userguide dan merancang flowmap dari sisi teknis arsitektur sistem SIM Penganggaran...",
      summary: "Minggu ke-12 difokuskan pada penggabungan kamus data ke dalam buku panduan utama dan mulai membedah sistem dari sisi arsitektur teknis dengan merancang diagram alir teknis (Technical Flowmap) SIM Penganggaran.",
      dailyActivities: [
        {
          dayDate: "Senin, 09/11/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Menambah glosarium dari userguide SIM Penganggaran ke dalam file master userguide."
        },
        {
          dayDate: "Selasa, 10/11/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Membuat flowmap dari sisi teknis SIM Pengangaran."
        },
        {
          dayDate: "Rabu, 11/11/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Melanjutkan membuat flowmap dari sisi teknis SIM Pengangaran."
        },
        {
          dayDate: "Kamis, 12/11/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Melanjutkan pendalaman dan penyusunan flowmap dari sisi teknis SIM Pengangaran."
        },
        {
          dayDate: "Jumat, 13/11/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Melanjutkan membuat flowmap dari sisi teknis SIM Pengangaran dan sudah mengirimkannya ke mentor saya."
        }
      ],
      tasks: [
        "Finalisasi integrasi bab glosarium ke dalam dokumen User Guide SIM Penganggaran.",
        "Merancang flowmap teknis yang mencakup client layer, API endpoints, validasi controller, dan database queries.",
        "Memetakan alur transaksi alokasi dana dan pencairan pos anggaran secara mendalam.",
        "Menyerahkan hasil draft diagram flowmap teknis kepada mentor pembimbing."
      ],
      keyLearnings: "Technical flowmap berbeda signifikan dengan user flow biasa; technical flowmap menuntut pemahaman terhadap status HTTP, transaksi database (commit/rollback), dan integritas data.",
      challenges: "Menyederhanakan alur kalkulasi pagu anggaran yang kompleks agar tetap terbaca jelas dalam diagram teknis.",
      solutions: "Memecah flowmap ke dalam beberapa sub-diagram modular (Inisialisasi Pagu, Pengajuan Proposal, dan Pencairan Dana).",
      nextWeek: "Merevisi flowmap teknis sesuai arahan mentor dan melanjutkan pengembangan sistem."
    },
    {
      id: "minggu-11",
      weekNumber: 11,
      title: "Minggu 11: Penyusunan Glosarium Istilah User Guide SIM Penganggaran",
      dateRange: "02 Nov 2026 - 06 Nov 2026",
      date: "November 06, 2026",
      author: "Ghyovas",
      thumbnail: "assets/thumbnails/thumb_minggu11.svg",
      tags: ["Glosarium", "Dokumentasi", "SIM Penganggaran"],
      readTime: "4 min read",
      excerpt: "Melanjutkan integrasi user flow dan menyusun glosarium istilah teknis serta finansial pada User Guide SIM Penganggaran...",
      summary: "Minggu ke-11 berfokus pada standardisasi pemahaman terminologi bagi pengguna universitas dengan menyusun glosarium istilah komprehensif pada SIM Penganggaran.",
      dailyActivities: [
        {
          dayDate: "Senin, 02/11/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Melanjutkan userflow proses bisnis SIM PERENCANAAN dan SIM PENGANGGARAN dan menambahkannya ke dalam User guide UNMAS."
        },
        {
          dayDate: "Selasa, 03/11/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Membuat glosarium dari userguide SIM Penganggaran."
        },
        {
          dayDate: "Rabu, 04/11/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Masih melanjutkan membuat glosarium dari userguide SIM Penganggaran."
        },
        {
          dayDate: "Kamis, 05/11/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Membuat laporan kepada mentor saya terkait glosarium dari userguide SIM Penganggaran."
        },
        {
          dayDate: "Jumat, 06/11/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Merevisi glosarium dari userguide SIM Penganggaran sesuai masukan mentor."
        }
      ],
      tasks: [
        "Mendata seluruh istilah teknis sistem dan istilah keuangan akademik universitas.",
        "Menuliskan definisi baku dan kontekstual untuk setiap istilah di modul penganggaran.",
        "Menyusun laporan khusus mengenai daftar glosarium untuk ditinjau mentor.",
        "Merevisi glosarium agar sesuai dengan bahasa operasional kampus UNMAS."
      ],
      keyLearnings: "Glosarium yang presisi memangkas waktu orientasi pengguna baru dan mencegah salah paham dalam penginputan pos anggaran.",
      challenges: "Menyelaraskan istilah perbankan, istilah akuntansi universitas, dan istilah sistem perangkat lunak.",
      solutions: "Membuat kategorisasi istilah alfabetis dengan contoh konkret pada antarmuka aplikasi.",
      nextWeek: "Memasukkan glosarium ke file master userguide dan mulai menyusun technical flowmap sistem."
    },
    {
      id: "minggu-10",
      weekNumber: 10,
      title: "Minggu 10: Integrasi User Flow Proses Bisnis ke User Guide UNMAS",
      dateRange: "26 Okt 2026 - 30 Okt 2026",
      date: "October 30, 2026",
      author: "Ghyovas",
      thumbnail: "assets/thumbnails/thumb_minggu10.svg",
      tags: ["Proses Bisnis", "User Guide", "UNMAS"],
      readTime: "4 min read",
      excerpt: "Menyelesaikan diagram user flow proses bisnis gabungan SIM Perencanaan-Penganggaran dan menyematkannya ke User Guide UNMAS...",
      summary: "Penyelesaian dan finalisasi alur proses bisnis terpadu antara SIM Perencanaan dan SIM Penganggaran, pelaporan review kepada mentor, serta penyematan diagram ke buku panduan resmi Universitas Mahasaraswati.",
      dailyActivities: [
        {
          dayDate: "Senin, 26/10/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Melanjutkan membuat userflow proses bisnis dari SIM PERENCANAAN dan SIM PENGANGGARAN."
        },
        {
          dayDate: "Selasa, 27/10/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Merevisi userflow dari proses bisnis SIM PERENCANAAN dan SIM PENGANGGARAN."
        },
        {
          dayDate: "Rabu, 28/10/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Melaporkan userflow proses bisnis SIM PERENCANAAN dan SIM PENGANGGARAN kepada mentor."
        },
        {
          dayDate: "Kamis, 29/10/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Menerima dan mempelajari catatan revisi dari mentor saya."
        },
        {
          dayDate: "Jumat, 30/10/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Menyelesaikan userflow proses bisnis SIM PERENCANAAN dan SIM PENGANGGARAN dan menambahkannya ke dalam User guide UNMAS."
        }
      ],
      tasks: [
        "Menyusun korelasi data antara usulan rencana program dengan pembukaan pagu anggaran.",
        "Melakukan perbaikan alur otorisasi multi-level (Unit -> Dekan -> WR II -> Rektor).",
        "Mempresentasikan hasil user flow kepada mentor dan mencatat detail perbaikan.",
        "Mengintegrasikan artefak visual diagram ke dalam master file User Guide UNMAS."
      ],
      keyLearnings: "Menghubungkan dua sistem besar (Perencanaan & Penganggaran) memerlukan pemetaan dependensi data yang sangat ketat agar tidak ada alur yang buntu.",
      challenges: "Format diagram awal terlalu padat sehingga sulit dibaca ketika dicetak ke format panduan PDF.",
      solutions: "Membagi user flow menjadi tahapan makro (high-level) dan rincian per modul (detailed swimlane).",
      nextWeek: "Penyusunan glosarium istilah teknis untuk melengkapi user guide."
    },
    {
      id: "minggu-9",
      weekNumber: 9,
      title: "Minggu 9: User Flow Proposal Kegiatan Mahasiswa & Demo Satuunmas",
      dateRange: "19 Okt 2026 - 23 Okt 2026",
      date: "October 23, 2026",
      author: "Ghyovas",
      thumbnail: "assets/thumbnails/thumb_minggu9.svg",
      tags: ["User Flow", "Proposal Mahasiswa", "Satuunmas"],
      readTime: "5 min read",
      excerpt: "Merancang user flow pengajuan proposal kegiatan mahasiswa, diagram proses bisnis, dan mengikuti zoom demo progress aplikasi satuunmas...",
      summary: "Fokus minggu ke-9 adalah pemodelan alur pengajuan proposal kegiatan ormawa/mahasiswa pada SIM Penganggaran, diagram proses bisnis, serta menghadiri sesi demo integrasi ekosistem Satuunmas.",
      dailyActivities: [
        {
          dayDate: "Senin, 19/10/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Mengerjakan user flow pengajuan proposal kegiatan mahasiswa, SIM PENGANGGARAN."
        },
        {
          dayDate: "Selasa, 20/10/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Merevisi flow map pengajuan proposal kegiatan mahasiswa, SIM PENGANGGARAN."
        },
        {
          dayDate: "Rabu, 21/10/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Mengerjakan diagram proses bisnis SIM PENGANGGARAN."
        },
        {
          dayDate: "Kamis, 22/10/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Mengikuti zoom demo progress aplikasi satuunmas bersama tim pengembang."
        },
        {
          dayDate: "Jumat, 23/10/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Ditugaskan untuk membuat userflow proses bisnis dari SIM PERENCANAAN dan SIM PENGANGGARAN."
        }
      ],
      tasks: [
        "Menganalisis siklus hidup (lifecycle) proposal mahasiswa dari inisiasi, review kemahasiswaan, validasi keuangan, hingga LPJ.",
        "Merancang flow map visual tahapan pengajuan proposal pada SIM Penganggaran.",
        "Menyusun diagram proses bisnis menyeluruh sistem penganggaran kampus.",
        "Menghadiri sesi demo progres pengembangan platform terpadu Satuunmas."
      ],
      keyLearnings: "Memahami bagaimana sistem akademik, kemahasiswaan, dan keuangan saling terintegrasi dalam ekosistem terpadu Satuunmas.",
      challenges: "Banyaknya skenario perkecualian pada revisi proposal yang harus diakomodasi di dalam diagram flow map.",
      solutions: "Menerapkan decision point dengan indikator feedback revision loop yang terstruktur.",
      nextWeek: "Melanjutkan pembuatan user flow proses bisnis gabungan dan integrasi ke User Guide UNMAS."
    },
    {
      id: "minggu-8",
      weekNumber: 8,
      title: "Minggu 8: Analisis & Perancangan User Flow SIM Penganggaran",
      dateRange: "12 Okt 2026 - 16 Okt 2026",
      date: "October 16, 2026",
      author: "Ghyovas",
      thumbnail: "assets/thumbnails/thumb_minggu4.svg",
      tags: ["User Flow", "Perencanaan Program", "SIM Penganggaran"],
      readTime: "4 min read",
      excerpt: "Mempelajari dan menyusun alur perencanaan program kerja, diskusi format dengan mentor, serta penyelesaian user flow...",
      summary: "Pemberian tugas baru oleh mentor untuk merancang alur interaksi pengguna (user flow) pada modul perencanaan program SIM Penganggaran, dilanjutkan dengan diskusi standardisasi dan revisi alur.",
      dailyActivities: [
        {
          dayDate: "Senin, 12/10/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Diberikan tugas untuk membuat user flow SIM PENGANGGARAN."
        },
        {
          dayDate: "Selasa, 13/10/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Mengerjakan dan memahami flow perencanaan program SIM PENGANGGARAN."
        },
        {
          dayDate: "Rabu, 14/10/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Berdiskusi dengan mentor terkait format dari user flow yang akan dibuatkan."
        },
        {
          dayDate: "Kamis, 15/10/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Menyelesaikan user flow perencanaan program, SIM PENGANGGARAN."
        },
        {
          dayDate: "Jumat, 16/10/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Merevisi user flow yang sudah dilaporkan kepada mentor saya."
        }
      ],
      tasks: [
        "Bedah alur proses kerja penyusunan rencana anggaran tahunan program universitas.",
        "Konsultasi format dan konvensi notasi diagram alir yang disepakati tim PT Laksita Emi Saguna.",
        "Menyelesaikan draf komprehensif User Flow Perencanaan Program.",
        "Revisi draf berdasarkan feedback langsung mentor pembimbing."
      ],
      keyLearnings: "Standarisasi simbol diagram flow (swimlane, action, condition) sangat penting agar komunikasi antara tim analis dan tim programmer tidak ambigu.",
      challenges: "Perbedaan persepsi alur input antara level unit kerja dan level bagian perencanaan.",
      solutions: "Diskusi sinkronisasi bersama mentor untuk menetapkan alur operasional resmi sistem.",
      nextWeek: "Merancang user flow pengajuan proposal mahasiswa dan diagram proses bisnis."
    },
    {
      id: "minggu-7",
      weekNumber: 7,
      title: "Minggu 7: Diagram Flow SIM Penganggaran & Setup Branch Project Mandiri",
      dateRange: "05 Okt 2026 - 09 Okt 2026",
      date: "October 09, 2026",
      author: "Ghyovas",
      thumbnail: "assets/thumbnails/thumb_minggu4.svg",
      tags: ["Diagram Flow", "Git Branch", "Project Mandiri"],
      readTime: "4 min read",
      excerpt: "Membuat diagram flow SIM Penganggaran, memulai branch project mandiri magang, serta mengikuti meeting demo bersama petinggi PT Laksita Emi Saguna...",
      summary: "Memulai implementasi teknis Project Mandiri Magang dengan membuat branch repositori Git, perancangan diagram flow sistem, serta menghadiri meeting demo strategis bersama petinggi perusahaan.",
      dailyActivities: [
        {
          dayDate: "Senin, 05/10/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Membuat diagram flow dari SIM PENGANGGARAN."
        },
        {
          dayDate: "Selasa, 06/10/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Mulai mengerjakan project magang saya pada branch yang sudah saya buat."
        },
        {
          dayDate: "Rabu, 07/10/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Mengikuti meet terkait demo SIM PERENCANAAN dan SIM PENGANGGARAN dengan mentor dan petinggi PT Laksita Emi Saguna."
        },
        {
          dayDate: "Kamis, 08/10/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Merevisi gambar user guide untuk role rektor."
        },
        {
          dayDate: "Jumat, 09/10/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Melanjutkan revisi user guide pada bagian user role rektor."
        }
      ],
      tasks: [
        "Membuat diagram flow sistematis untuk alur SIM Penganggaran.",
        "Setup workspace lokal dan inisialisasi Git branch fitur untuk project mandiri magang.",
        "Menghadiri sesi demo sistem di depan jajaran pimpinan PT Laksita Emi Saguna.",
        "Melanjutkan perbaikan visual aset gambar pada panduan role Rektor."
      ],
      keyLearnings: "Pengalaman berharga menghadiri demo di tingkat manajemen dan pemahaman alur kerja Git feature-branching.",
      challenges: "Membagi fokus antara coding fitur project mandiri dan penyelesaian revisi dokumen user guide.",
      solutions: "Membuat time-blocking harian: pagi fokus pengerjaan diagram & coding, sore fokus review dan revisi aset.",
      nextWeek: "Merancang user flow perencanaan program SIM Penganggaran."
    },
    {
      id: "minggu-6",
      weekNumber: 6,
      title: "Minggu 6: Role Play Skenario Proposal, Demo Internal & Project Mandiri",
      dateRange: "28 Sep 2026 - 02 Okt 2026",
      date: "October 02, 2026",
      author: "Ghyovas",
      thumbnail: "assets/thumbnails/thumb_minggu3.svg",
      tags: ["Role Play", "Demo Internal", "Project Mandiri"],
      readTime: "4 min read",
      excerpt: "Simulasi role play pengajuan proposal hingga finalisasi, demo internal mentor, testing pasca revisi, dan penugasan project mandiri magang...",
      summary: "Pelaksanaan simulasi role play proposal-finalisasi anggaran, pengujian internal sistem, dan penyerahan tugas Project Mandiri Magang oleh mentor pembimbing.",
      dailyActivities: [
        {
          dayDate: "Senin, 28/09/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Menjalankan role play dengan skenario pengajuan proposal dan finalisasi."
        },
        {
          dayDate: "Selasa, 29/09/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Mengikuti meet demo internal dengan mentor pembimbing."
        },
        {
          dayDate: "Rabu, 30/09/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Melanjutkan testing dari sistem yang sudah direvisi sebelumnya di rapat internal."
        },
        {
          dayDate: "Kamis, 01/10/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Diberikan project mandiri untuk dikerjakan sebagai project magang."
        },
        {
          dayDate: "Jumat, 02/10/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Mempelajari dan memahami requirement project yang diberikan mentor untuk project magang."
        }
      ],
      tasks: [
        "Menjalankan skenario uji simulasi user: pengajuan usulan proposal, review, approval, hingga finalisasi pos anggaran.",
        "Mengikuti sesi review demo internal bersama mentor dan mencatat perbaikan.",
        "Eksekusi regression testing pada fitur-fitur yang baru diperbaiki.",
        "Mempelajari lingkup kerja dan arsitektur Project Mandiri Magang."
      ],
      keyLearnings: "Role play skenario nyata membuka celah usability issue yang tidak terlihat saat sekadar membaca spesifikasi fungsional.",
      challenges: "Memetakan perbedaan kebutuhan validasi antara status proposal pending dan status disetujui.",
      solutions: "Mendokumentasikan matriks status proposal beserta aksi yang diizinkan untuk tiap role.",
      nextWeek: "Membuat diagram flow SIM Penganggaran dan memulai branch development project mandiri."
    },
    {
      id: "minggu-5",
      weekNumber: 5,
      title: "Minggu 5: Demo SIM Keuangan Klien UNMAS & Simulasi Role Play",
      dateRange: "21 Sep 2026 - 25 Sep 2026",
      date: "September 25, 2026",
      author: "Ghyovas",
      thumbnail: "assets/thumbnails/thumb_minggu2.svg",
      tags: ["Demo Klien", "UNMAS", "Role Play"],
      readTime: "5 min read",
      excerpt: "Mengikuti live demo SIM Keuangan bersama delegasi UNMAS, pemahaman modul alur proses, dan simulasi role play peran Rektor & Dekan...",
      summary: "Mendampingi sesi live meeting demo SIM Keuangan bersama pihak klien Universitas Mahasaraswati, pendalaman alur proses SIM Perencanaan-Penganggaran, serta penugasan role play multi-peran.",
      dailyActivities: [
        {
          dayDate: "Senin, 21/09/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Mengikuti meet demo dari SIM KEUANGAN UNMAS bersama mentor dan pihak dari UNMAS."
        },
        {
          dayDate: "Selasa, 22/09/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Diberikan modul pemahaman terkait alur proses SIM PERENCANAAN dan SIM PENGANGGARAN UNMAS."
        },
        {
          dayDate: "Rabu, 23/09/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Menyiapkan laporan progress dari user guide yang sudah dibuat (role rektor, petinggi unit, dan staff fakultas)."
        },
        {
          dayDate: "Kamis, 24/09/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Melakukan revisi di bagian gambar dan penjelasan terkait user guide role rektor."
        },
        {
          dayDate: "Jumat, 25/09/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Diberikan role Rektor dan Dekan untuk digunakan dalam simulasi role play SIM PERENCANAAN dan PENGANGGARAN UNMAS."
        }
      ],
      tasks: [
        "Observasi proses demonstrasi aplikasi langsung di depan pemangku kepentingan klien UNMAS.",
        "Mendalami modul alur proses sistem perencanaan dan integrasinya dengan penganggaran.",
        "Menyusun laporan progres pengerjaan user guide multi-role.",
        "Persiapan simulasi role play menggunakan akun Rektor dan Dekan."
      ],
      keyLearnings: "Belajar memahami sudut pandang user kampus (rektor, dekan, bagian keuangan) dalam menilai kemudahan penggunaan sistem.",
      challenges: "Menghafal batasan kewenangan dan navigasi menu yang berbeda antara akun Rektor dan Dekan.",
      solutions: "Membuat catatan komparasi tabel hak akses menu untuk masing-masing peran.",
      nextWeek: "Menjalankan skenario role play proposal-finalisasi dan menerima project mandiri."
    },
    {
      id: "minggu-4",
      weekNumber: 4,
      title: "Minggu 4: Kolaborasi Tim, Restrukturisasi Tugas & Standardisasi Panduan",
      dateRange: "14 Sep 2026 - 18 Sep 2026",
      date: "September 18, 2026",
      author: "Ghyovas",
      thumbnail: "assets/thumbnails/thumb_minggu4.svg",
      tags: ["Kolaborasi Tim", "Restrukturisasi", "Tata Letak"],
      readTime: "4 min read",
      excerpt: "Meeting mentor pembagian tugas bersama 2 rekan magang, penyelesaian modul role rektor, dan standardisasi font serta spasi dokumen...",
      summary: "Penyelarasan ritme kerja kelompok bersama 2 rekan magang, koordinasi pembagian bab panduan, serta penyempurnaan aspek estetika visual dokumen (gambar, font, dan jarak spasi).",
      dailyActivities: [
        {
          dayDate: "Senin, 14/09/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Melakukan meet dengan mentor terkait adanya perubahan pembagian tugas tim."
        },
        {
          dayDate: "Selasa, 15/09/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Menyelesaikan tugas user guide role rektor yang dikerjakan secara kolaboratif bersama 2 rekan magang."
        },
        {
          dayDate: "Rabu, 16/09/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Melanjutkan pengerjaan tugas modul yang sudah dibagi oleh mentor bersama rekan tim."
        },
        {
          dayDate: "Kamis, 17/09/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Merevisi bagian user role rektor, mulai dari gambar, font, dan jarak spasi dari setiap penjelasan."
        },
        {
          dayDate: "Jumat, 18/09/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Melanjutkan transisi pengerjaan ke role berikutnya pada sistem."
        }
      ],
      tasks: [
        "Sinkronisasi pembagian bab modul panduan bersama rekan tim magang.",
        "Penyelesaian penulisan draf panduan operasional akun eksekutif Rektor.",
        "Standardisasi gaya bahasa, ukuran font, resolusi tangkapan layar, dan margin spasi antar paragraf.",
        "Transisi persiapan materi untuk role-role berikutnya."
      ],
      keyLearnings: "Koordinasi pembagian tugas yang jelas menghindarkan duplikasi kerja dan mempercepat penyelesaian output tim.",
      challenges: "Perbedaan format penulisan dan ukuran screenshot antar anggota kelompok.",
      solutions: "Menetapkan template panduan resmi (style guide) bersama yang disetujui mentor.",
      nextWeek: "Mengikuti live demo SIM Keuangan UNMAS dan simulasi role play."
    },
    {
      id: "minggu-3",
      weekNumber: 3,
      title: "Minggu 3: Penyusunan Laporan User Guide Role Rektor & Review Mentor",
      dateRange: "07 Sep 2026 - 11 Sep 2026",
      date: "September 11, 2026",
      author: "Ghyovas",
      thumbnail: "assets/thumbnails/thumb_minggu3.svg",
      tags: ["User Guide", "Role Rektor", "Review Mentor"],
      readTime: "4 min read",
      excerpt: "Penyusunan laporan user guide role rektor pada SIM Penganggaran, pengecekan berkala, dan revisi langsung bersama mentor...",
      summary: "Penyusunan dokumen teknis User Guide SIM Penganggaran khusus untuk role Rektor, pembuatan laporan, serta proses revisi bertahap berdasarkan evaluasi mentor.",
      dailyActivities: [
        {
          dayDate: "Senin, 07/09/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Melanjutkan user guide untuk sistem penganggaran."
        },
        {
          dayDate: "Selasa, 08/09/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Membuat laporan untuk user guide dengan role rektor."
        },
        {
          dayDate: "Rabu, 09/09/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Menyelesaikan user guide untuk sistem penganggaran dengan role rektor."
        },
        {
          dayDate: "Kamis, 10/09/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Mengecek dan merevisi bagian yang sudah dicek dan diberi catatan oleh mentor."
        },
        {
          dayDate: "Jumat, 11/09/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Melanjutkan proses revisi dokumen panduan sesuai instruksi mentor."
        }
      ],
      tasks: [
        "Menyelesaikan alur panduan persetujuan pagu anggaran dan pelaporan rektor.",
        "Menyusun laporan tertulis progres pengerjaan panduan role Rektor.",
        "Mengecek masukan revisi dari mentor terkait kejelasan langkah-langkah navigasi.",
        "Memperbaiki keterangan tombol dan alur klik antarmuka sistem."
      ],
      keyLearnings: "Mendokumentasikan alur sistem untuk pengguna eksekutif harus ringkas, jelas, to-the-point, dan dilengkapi gambar pendukung yang tepat.",
      challenges: "Memastikan gambar antarmuka sistem tidak blur dan teks penjelasan tidak ambigu.",
      solutions: "Menggunakan tangkapan layar beresolusi tinggi dengan penanda panah fokus pada elemen penting.",
      nextWeek: "Meeting restrukturisasi tugas tim dan standardisasi dokumen tata letak."
    },
    {
      id: "minggu-2",
      weekNumber: 2,
      title: "Minggu 2: Eksplorasi Sistem & User Guide 8 Role Akses UNMAS",
      dateRange: "31 Agu 2026 - 04 Sep 2026",
      date: "September 04, 2026",
      author: "Ghyovas",
      thumbnail: "assets/thumbnails/thumb_minggu2.svg",
      tags: ["8 Role Akses", "SIM Perencanaan", "SIM Penganggaran"],
      readTime: "5 min read",
      excerpt: "Eksplorasi sistem perencanaan dan penganggaran, pembuatan user guide untuk 8 role pengguna, dimulai dari role Rektor...",
      summary: "Mempelajari dan mengeksplorasi seluruh modul pada SIM Perencanaan dan SIM Penganggaran, kemudian mulai menyusun buku panduan bagi 8 role yang memiliki batasan hak akses berbeda.",
      dailyActivities: [
        {
          dayDate: "Senin, 31/08/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Memahami dan explore terkait sistem perencanaan dan sistem penganggaran yang akan dibuatkan user guidenya."
        },
        {
          dayDate: "Selasa, 01/09/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Mulai membuat User Guide untuk sistem Perencanaan dengan 8 role yang memiliki batas akses berbeda tiap rolenya."
        },
        {
          dayDate: "Rabu, 02/09/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Menyelesaikan user guide untuk sistem Perencanaan dengan 8 role hak akses."
        },
        {
          dayDate: "Kamis, 03/09/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Membuat user guide untuk sistem penganggaran."
        },
        {
          dayDate: "Jumat, 04/09/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Melanjutkan pembuatan user guide untuk sistem penganggaran dengan 8 role berbeda, diawali dari role pertama yaitu Rektor."
        }
      ],
      tasks: [
        "Eksplorasi fungsionalitas menu pada SIM Perencanaan dan Penganggaran UNMAS.",
        "Memetakan batasan hak akses (matrix privilege) pada 8 role pengguna universitas.",
        "Menyusun draf buku panduan penggunaan SIM Perencanaan 8 role.",
        "Menginisiasi penulisan panduan SIM Penganggaran dengan fokus pada role Rektor."
      ],
      keyLearnings: "Memahami struktur organisasi tata kelola kampus dan bagaimana pembagian wewenang tercermin dalam pembatasan hak akses sistem.",
      challenges: "Banyaknya menu spesifik yang hanya muncul saat login sebagai role tertentu.",
      solutions: "Melakukan pengujian login secara bergantian untuk masing-masing role dan mencatat perbedaan menunya.",
      nextWeek: "Penyusunan laporan lengkap user guide role rektor dan review berkala bersama mentor."
    },
    {
      id: "minggu-1",
      weekNumber: 1,
      title: "Minggu 1: Orientasi & Pengujian Testcase Sistem Anggaran UNMAS",
      dateRange: "26 Agu 2026 - 28 Agu 2026",
      date: "August 28, 2026",
      author: "Ghyovas",
      thumbnail: "assets/thumbnails/thumb_minggu1.svg",
      tags: ["Orientasi", "Testcase", "Sistem Anggaran UNMAS"],
      readTime: "4 min read",
      excerpt: "Orientasi hari pertama magang di PT Laksita Emi Saguna, penyelesaian testcase sistem biaya anggaran Universitas Mahasaraswati, dan penugasan awal user guide...",
      summary: "Memulai program magang hari pertama di PT Laksita Emi Saguna, langsung terjun ke dalam pengujian sistem (quality assurance/testcase) biaya anggaran UNMAS serta penugasan pembuatan panduan sistem.",
      dailyActivities: [
        {
          dayDate: "Rabu, 26/08/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Orientasi hari pertama magang, penugasan testcase sistem biaya anggaran Universitas Mahasaraswati."
        },
        {
          dayDate: "Kamis, 27/08/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Penyelesaian Testcase Project Sistem Anggaran Universitas Mahasaraswati."
        },
        {
          dayDate: "Jumat, 28/08/2026",
          time: "09.00 - 17.00 WITA",
          activity: "Penugasan membuat user guide dari Sistem Perencanaan dan Sistem Penganggaran Universitas Mahasaraswati."
        }
      ],
      tasks: [
        "Sesi perkenalan lingkungan kerja, mentor pembimbing, dan aturan magang di PT Laksita Emi Saguna.",
        "Menganalisis skenario pengujian kalkulasi biaya anggaran kampus UNMAS.",
        "Menyelesaikan dan melaporkan hasil eksekusi testcase sistem anggaran.",
        "Menerima pengarahan lingkup proyek pembuatan User Guide SIM Perencanaan & Penganggaran."
      ],
      keyLearnings: "Pentingnya pengujian testcase yang teliti pada modul anggaran untuk memastikan tidak terjadi bug pembulatan atau selisih alokasi biaya.",
      challenges: "Mempelajari alur anggaran kampus Mahasaraswati dalam waktu singkat pada hari pertama.",
      solutions: "Membaca manual spesifikasi sistem dan bertanya secara intensif kepada mentor pendamping.",
      nextWeek: "Eksplorasi mendalam antarmuka sistem dan penyusunan User Guide 8-role."
    }
  ],

  projects: [
    {
      title: "SIM Penganggaran Universitas Mahasaraswati (UNMAS)",
      company: "PT Laksita Emi Saguna & UNMAS",
      category: "Enterprise System & QA",
      description: "Sistem Informasi Manajemen Penganggaran kampus untuk mengelola alokasi pagu dana, penyusunan rencana program, dan pengajuan proposal anggaran.",
      techStack: ["PHP / Laravel", "MySQL", "Technical Flowmap", "User Flow", "Testcase QA"],
      features: [
        "Pengujian Testcase Validasi Biaya Anggaran",
        "Perancangan Flowmap dari sisi teknis sistem",
        "User Flow Pengajuan Proposal Kegiatan Mahasiswa",
        "Penyusunan Glosarium Istilah Finansial & Teknis"
      ]
    },
    {
      title: "SIM Perencanaan Universitas Mahasaraswati (UNMAS)",
      company: "PT Laksita Emi Saguna & UNMAS",
      category: "Information Management",
      description: "Sistem perencanaan strategis universitas yang mengakomodasi 8 role pengguna berbeda dengan kewenangan persetujuan bertingkat.",
      techStack: ["Web Application", "RBAC Security", "User Guide 8-Role", "Proses Bisnis"],
      features: [
        "Penyusunan User Guide Lengkap untuk 8 Role Berbeda",
        "Simulasi Role Play Alur Persetujuan Rektor & Dekan",
        "Integrasi Proses Bisnis Perencanaan & Penganggaran",
        "Dokumentasi Standardisasi Tata Letak & Navigasi"
      ]
    },
    {
      title: "Ekosistem Satuunmas & SIM Keuangan",
      company: "PT Laksita Emi Saguna & UNMAS",
      category: "Integrated Platform",
      description: "Platform terpadu satu pintu universitas yang mengintegrasikan SIM Perencanaan, SIM Penganggaran, dan SIM Keuangan UNMAS.",
      techStack: ["Single Sign-On", "System Integration", "Client Demo", "Documentation"],
      features: [
        "Partisipasi dalam Sesi Demo Klien bersama Stakeholder UNMAS",
        "Sinkronisasi Alur Bisnis Lintas Aplikasi Kampus",
        "Pemantauan Progres Integrasi Aplikasi Satuunmas",
        "Dokumentasi Alur Transaksi Finansial"
      ]
    },
    {
      title: "Project Mandiri Magang IT Intern",
      company: "PT Laksita Emi Saguna",
      category: "Internal Development",
      description: "Proyek pengembangan mandiri yang ditugaskan oleh mentor untuk diimplementasikan menggunakan branch Git terpisah.",
      techStack: ["Git Branching", "Full-Stack Web", "Module Engineering", "Codebase"],
      features: [
        "Setup Branch Khusus Pengembangan Fitur Mandiri",
        "Implementasi Modul sesuai Kebutuhan Perusahaan",
        "Pengujian Mandiri & Evaluasi Rapat Internal",
        "Handover & Pelaporan Berkala kepada Mentor"
      ]
    }
  ],

  journey: [
    {
      phase: "Fase 1: Orientasi & User Guide Awal",
      weeks: "Minggu 1 - 3 (Agu - Sep 2026)",
      title: "Pengujian Testcase & Panduan 8 Role",
      description: "Orientasi magang di PT Laksita Emi Saguna, eksekusi testcase biaya anggaran UNMAS, dan perancangan User Guide 8-role dimulai dari Role Rektor."
    },
    {
      phase: "Fase 2: Kolaborasi & Role Play Klien",
      weeks: "Minggu 4 - 6 (Sep - Okt 2026)",
      title: "Demo Klien, Simulasi & Project Mandiri",
      description: "Restrukturisasi tugas tim magang, mengikuti demo SIM Keuangan bersama delegasi UNMAS, simulasi role play proposal-finalisasi, dan penerimaan Project Mandiri."
    },
    {
      phase: "Fase 3: Pemodelan Alur & Diagram",
      weeks: "Minggu 7 - 9 (Okt 2026)",
      title: "User Flow, Proposal Ormawa & Satuunmas",
      description: "Pembuatan diagram flow SIM Penganggaran, perancangan user flow pengajuan proposal kegiatan mahasiswa, dan demo progres platform Satuunmas."
    },
    {
      phase: "Fase 4: Glosarium & Flowmap Teknis",
      weeks: "Minggu 10 - 13 (Okt - Nov 2026)",
      title: "Integrasi Master Guide & Arsitektur Teknis",
      description: "Integrasi user flow proses bisnis ke User Guide UNMAS, penyusunan glosarium istilah finansial, perancangan Technical Flowmap sistem, dan evaluasi berkelanjutan."
    }
  ],

  monev: [
    {
      id: "monev-1",
      nomor: 1,
      tanggal: "2026-09-15",
      dateDisplay: "15 September 2026",
      dosenPembimbing: "Dosen Pembimbing Akademik",
      jabatan: "Dosen Pembimbing Magang",
      agenda: [
        "Pengecekan kehadiran dan absensi minggu 1–3",
        "Review capaian kerja awal: testcase SIM Keuangan UNMAS",
        "Diskusi adaptasi lingkungan kerja & kendala awal",
        "Verifikasi jurnal harian mahasiswa"
      ],
      hasil: "Mahasiswa menunjukkan progres yang baik pada minggu-minggu awal. Testcase biaya anggaran berjalan sesuai target. Adaptasi lingkungan kerja positif.",
      catatan: "Lanjutkan perancangan User Guide untuk role-role berikutnya. Pastikan dokumentasi jurnal harian terisi lengkap setiap hari.",
      status: "Selesai",
      mingguEvaluasi: "Minggu 1 – 3"
    },
    {
      id: "monev-2",
      nomor: 2,
      tanggal: "2026-10-13",
      dateDisplay: "13 Oktober 2026",
      dosenPembimbing: "Dosen Pembimbing Akademik",
      jabatan: "Dosen Pembimbing Magang",
      agenda: [
        "Evaluasi perkembangan pertengahan magang (minggu 4–8)",
        "Review User Guide 8 Role & demo SIM Keuangan UNMAS",
        "Penilaian pembuatan diagram alur dan user flow sistem",
        "Diskusi Project Mandiri yang diberikan perusahaan",
        "Pengecekan kelengkapan jurnal harian"
      ],
      hasil: "Progres sangat memuaskan. Mahasiswa berhasil menyelesaikan demo SIM Keuangan bersama delegasi UNMAS dan menerima Project Mandiri. Diagram flow terstruktur dengan baik.",
      catatan: "Fokus pada penyelesaian Project Mandiri dan dokumentasi user flow secara menyeluruh. Persiapkan bahan presentasi akhir magang.",
      status: "Selesai",
      mingguEvaluasi: "Minggu 4 – 8"
    },
    {
      id: "monev-3",
      nomor: 3,
      tanggal: "2026-11-17",
      dateDisplay: "17 November 2026",
      dosenPembimbing: "Dosen Pembimbing Akademik",
      jabatan: "Dosen Pembimbing Magang",
      agenda: [
        "Evaluasi akhir dan penilaian keseluruhan magang",
        "Review Technical Flowmap & Glosarium istilah finansial",
        "Penilaian integrasi User Guide UNMAS (master guide)",
        "Verifikasi kelengkapan laporan akhir magang",
        "Penandatanganan berkas kelulusan magang"
      ],
      hasil: "Menunggu pelaksanaan monev akhir.",
      catatan: "Siapkan laporan akhir, presentasi, sertifikat magang, dan semua berkas administratif sebelum tanggal monev.",
      status: "Dijadwalkan",
      mingguEvaluasi: "Minggu 9 – 13"
    }
  ],

  dokumentasi: [
    {
      id: "dok-1",
      judul: "Jurnal Harian Magang",
      kategori: "Logbook",
      deskripsi: "Jurnal harian resmi selama 13 minggu magang di PT Laksita Emi Saguna. Berisi catatan aktivitas harian, waktu kerja, dan tanda tangan pembimbing lapangan.",
      tanggal: "Agustus – November 2026",
      icon: "📒",
      status: "Selesai",
      link: "#"
    },
    {
      id: "dok-2",
      judul: "Laporan Akhir Magang",
      kategori: "Laporan",
      deskripsi: "Laporan komprehensif kegiatan magang mencakup latar belakang, tinjauan perusahaan, uraian kegiatan, analisis pembelajaran, dan kesimpulan.",
      tanggal: "November 2026",
      icon: "📄",
      status: "Proses",
      link: "#"
    },
    {
      id: "dok-3",
      judul: "User Guide SIM Keuangan UNMAS",
      kategori: "Dokumen Kerja",
      deskripsi: "Panduan pengguna sistem informasi manajemen keuangan untuk 8 role pengguna: Rektor, Wakil Rektor, Dekan, dan lainnya. Dibuat selama Fase 1 & 2 magang.",
      tanggal: "September – Oktober 2026",
      icon: "📘",
      status: "Selesai",
      link: "#"
    },
    {
      id: "dok-4",
      judul: "Technical Flowmap & Diagram Alur",
      kategori: "Dokumen Kerja",
      deskripsi: "Kumpulan diagram alur teknis sistem SIM Penganggaran UNMAS, user flow pengajuan proposal kegiatan mahasiswa, dan arsitektur teknis platform Satuunmas.",
      tanggal: "Oktober – November 2026",
      icon: "🗺️",
      status: "Selesai",
      link: "#"
    },
    {
      id: "dok-5",
      judul: "Sertifikat Magang",
      kategori: "Sertifikat",
      deskripsi: "Sertifikat resmi penyelesaian program magang dari PT Laksita Emi Saguna sebagai bukti telah menyelesaikan program internship selama kurang lebih 3 bulan.",
      tanggal: "November 2026",
      icon: "🏆",
      status: "Menunggu",
      link: "#"
    },
    {
      id: "dok-6",
      judul: "Dokumentasi Foto Kegiatan",
      kategori: "Foto",
      deskripsi: "Kumpulan foto dokumentasi kegiatan magang: orientasi awal, demo klien UNMAS, sesi kerja harian, foto bersama tim, dan kegiatan monev dosen pembimbing.",
      tanggal: "Agustus – November 2026",
      icon: "📷",
      status: "Proses",
      link: "#"
    }
  ]
};
