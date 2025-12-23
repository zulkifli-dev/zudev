"use client";
import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import CardIDo, { IExperience, Tech } from "../card/card-i-do";
import SubHeadingSection from "../heading/sub-heading-section";
import HeadingSection from "../heading/heading-section";

interface ToolItem {
  name: string;
  icon: string;
}

const frontendTools: ToolItem[] = [
  { name: "HTML", icon: "/image/toolkit/html.png" },
  { name: "CSS", icon: "/image/toolkit/css.png" },
  { name: "JavaScript", icon: "/image/toolkit/javascript.png" },
  { name: "TypeScript", icon: "/image/toolkit/typescript.png" },
  { name: "React", icon: "/image/toolkit/react.png" },
  { name: "Next.js", icon: "/image/toolkit/next-js.png" },
  { name: "Tailwind", icon: "/image/toolkit/tailwind.png" },
  { name: "Redux", icon: "/image/toolkit/redux.png" },
  { name: "Axios", icon: "/image/toolkit/axios.png" },
];

const backendTools: ToolItem[] = [
  { name: "Laravel", icon: "/image/toolkit/laravel.png" },
  { name: "Express.js", icon: "/image/toolkit/express-js.png" },
  { name: "Prisma", icon: "/image/toolkit/prisma.png" },
  { name: "MySQL", icon: "/image/toolkit/mysql.png" },
];

const mobileTools: ToolItem[] = [
  { name: "Expo", icon: "/image/toolkit/expo.png" },
];

const devopsTools: ToolItem[] = [
  { name: "Git", icon: "/image/toolkit/git.png" },
  { name: "Docker", icon: "/image/toolkit/docker.png" },
  { name: "Figma", icon: "/image/toolkit/figma.png" },
];

const experiences: IExperience[] = [
  {
    name: "Web Sistem Pengambilan Keputusan (SPK) Pemberian Pinjaman Kredit (KNN)",
    date: "2020",
    professional: false,
    pin: false,
    tech: [Tech.php, Tech.mysql, Tech.bootstrap],
    description:
      "Aplikasi pendukung keputusan untuk membantu penilaian kelayakan kredit secara objektif berbasis data menggunakan metode KNN.",
  },
  {
    name: "Web Sistem Pengembalian Nomor Antrian",
    date: "2020",
    professional: false,
    pin: false,
    // tech: ["PHP", "CodeIgniter", "MySQL", "Bootstrap"],
    tech: [Tech.php, Tech.codeigniter, Tech.mysql, Tech.bootstrap],
    description:
      "Sistem antrian digital untuk mempermudah pengambilan dan pemanggilan nomor antrian secara otomatis.",
  },
  {
    name: "Web Pemesanan Tiket Bus & Kereta Online",
    date: "2021",
    professional: false,
    pin: false,
    tech: [Tech.php, Tech.codeigniter, Tech.mysql, Tech.midtrans],
    description:
      "Platform pemesanan tiket transportasi online dengan sistem pembayaran digital terintegrasi.",
  },
  {
    name: "Web SPK Karyawan Berprestasi (DEMATEL)",
    date: "2022",
    professional: false,
    pin: false,
    tech: [Tech.php, Tech.codeigniter, Tech.mysql],
    description:
      "Sistem evaluasi kinerja karyawan berbasis metode DEMATEL untuk mendukung pengambilan keputusan manajemen.",
  },
  {
    name: "Web Profil Organisasi Kemahasiswaan",
    date: "2022",
    professional: false,
    pin: false,
    tech: [Tech.php, Tech.codeigniter, Tech.mysql, Tech.bootstrap],
    description:
      "Website informasi organisasi untuk menampilkan kegiatan, kepengurusan, dan pendaftaran anggota secara digital.",
  },
  {
    name: "Aplikasi Absensi Otomatis Pendeteksi Wajah (Desktop)",
    date: "2022",
    professional: false,
    pin: false,
    tech: [Tech.python, Tech.opencv, Tech.mysql],
    description:
      "Aplikasi desktop absensi otomatis berbasis pengenalan wajah untuk meningkatkan akurasi kehadiran kuliah daring.",
  },
  {
    name: "IoT Smart Shopping Trolley",
    date: "2022",
    professional: false,
    pin: false,
    tech: [Tech.arduino, Tech.react, Tech.firebase],
    description:
      "Sistem troli belanja pintar yang menghitung total belanja secara otomatis menggunakan barcode dan aplikasi mobile.",
  },
  {
    name: "Aplikasi Mobile PPOB Multi Layanan",
    date: "Juli 2022 - Sept 2023",
    role: "Mobile Developer",
    company: "PT. Ide Kreatif Asia",
    professional: true,
    pin: true,
    tech: [Tech.reactnative, Tech.typescript, Tech.axios],
    whatIDid: [
      "Mengembangkan fitur transaksi PPOB seperti pulsa, e-wallet, dan pembayaran tagihan",
      "Integrasi API transaksi real-time dan penanganan error",
      "Optimasi performa dan user experience aplikasi",
    ],
    impact:
      "Mempermudah pengguna melakukan berbagai transaksi digital dalam satu aplikasi secara cepat dan aman.",
  },
  {
    name: "PWA Multi Level Marketing",
    date: "2023",
    role: "Frontend Developer",
    company: "PT. Ide Kreatif Asia",
    professional: true,
    pin: true,
    tech: [Tech.react, Tech.nextjs, Tech.typescript, Tech.tailwind],
    whatIDid: [
      "Membangun PWA dengan performa tinggi dan dukungan offline",
      "Mengembangkan sistem referral dan dashboard penjualan",
      "Optimasi SEO dan struktur halaman",
    ],
    impact:
      "Meningkatkan aksesibilitas sistem MLM melalui web dan mobile dengan performa cepat dan SEO-friendly.",
  },
  {
    name: "Web ERP (Smart Inventory) Perusahaan Pertambangan Nikel",
    date: "2023",
    role: "Fullstack Developer",
    company: "PT. Unity Nickel Allow",
    professional: false,
    pin: true,
    tech: [Tech.react, Tech.nextjs, Tech.typescript, Tech.tailwind],
    whatIDid: [
      "Mengembangkan modul Sales, Purchasing, Warehouse, dan Accounting",
      "Membangun laporan inventory dan dokumen bea cukai",
      "Menerapkan role-based access sesuai struktur perusahaan",
    ],
    impact:
      "Proses operasional dan pelaporan perusahaan menjadi terpusat dan lebih terkontrol.",
  },
  {
    name: "Sistem Informasi Akademik Kampus (SIAKAD)",
    date: "Apr 2024 - Jan 2025",
    role: "Fullstack Developer",
    company: "PT. Benteng Informatika Indonesia",
    professional: false,
    pin: true,
    tech: [
      Tech.react,
      Tech.nextjs,
      Tech.nodejs,
      Tech.prisma,
      Tech.docker,
      Tech.mysql,
    ],
    whatIDid: [
      "Mengembangkan sistem KRS, presensi QR, penilaian, dan transkrip otomatis",
      "Integrasi dengan NEOFEEDER",
      "Membangun backend terstruktur dan scalable",
    ],
    impact:
      "Digitalisasi penuh proses akademik dan pengurangan beban administrasi kampus.",
  },
  {
    name: "Web Online Shop Fashion & POS Integration",
    date: "2024",
    role: "Fullstack Developer",
    professional: false,
    pin: false,
    tech: [Tech.php, Tech.mysql, Tech.tailwind],
    whatIDid: [
      "Membangun sistem kasir (POS) untuk transaksi penjualan di toko offline",
      "Memimpin tim kecil (2 programmer) dalam merancang arsitektur sistem onlineshop terintegrasi POS untuk sinkronisasi inventaris real-time.",
      "Mengintegrasikan stok dan data penjualan antara toko online dan offline",
      "Menyediakan dashboard admin untuk pengelolaan produk, pesanan, dan laporan penjualan",
    ],
    impact:
      "Membantu pemilik usaha mengelola penjualan online dan offline dalam satu sistem terintegrasi dengan data stok dan transaksi yang sinkron.",
  },
  {
    name: "Web Undangan Digital",
    date: "2023",
    professional: false,
    pin: false,
    tech: [Tech.react, Tech.nextjs, Tech.typescript],
    description:
      "Platform pembuatan undangan digital dengan template dinamis dan sistem pembayaran.",
  },
  {
    name: "Web GIS Wisata Alam",
    date: "2024",
    professional: false,
    pin: false,
    tech: [Tech.react, Tech.nextjs, Tech.googlemap, Tech.strapi],
    description:
      "Aplikasi peta interaktif untuk menampilkan lokasi wisata alam beserta ulasan pengguna.",
  },
  {
    name: "Aplikasi Sales Android",
    date: "2023",
    professional: false,
    pin: false,
    tech: [Tech.reactnative, Tech.typescript],
    description:
      "Aplikasi mobile untuk pencatatan dan monitoring aktivitas penjualan lapangan.",
  },
  {
    name: "Aplikasi Sistem Pengantaran Obat Rumah Sakit (SIPRO)",
    date: "2023",
    role: "Fullstack Developer",
    company: "RSUD Siwa Kab. Wajo",
    professional: false,
    pin: true,
    tech: [Tech.reactnative, Tech.laravel, Tech.mysql],
    whatIDid: [
      "Mengembangkan aplikasi untuk apoteker, admin, dan pasien",
      "Integrasi dengan sistem rumah sakit",
      "Membangun fitur tracking pengantaran obat",
    ],
    impact: "Proses pengantaran obat menjadi lebih transparan dan terkontrol.",
  },
  {
    name: "POS & Inventory Management System",
    date: "2023",
    role: "Fullstack Developer",
    company: "Tk. Bandung Motor",
    professional: false,
    pin: false,
    tech: [Tech.react, Tech.nextjs, Tech.typescript, Tech.prisma, Tech.mysql],
    whatIDid: [
      "Mengembangkan sistem POS dan manajemen inventori berbasis PWA",
      "Merancang arsitektur multi-toko dalam satu sistem terpusat",
      "Menyediakan dashboard terpisah untuk owner, admin, gudang, dan kasir",
      "Membangun laporan penjualan dan mutasi stok secara real-time",
    ],
    impact:
      "Sistem telah digunakan secara aktif oleh 5 toko untuk mengelola transaksi dan stok harian secara terpusat.",
  },
  {
    name: "Landing Page & Booking System Barber Shop",
    date: "2024",
    role: "Frontend / Fullstack Developer",
    company: "Goodcut Barber Shop",
    professional: false,
    pin: true,
    tech: [Tech.react, Tech.nextjs, Tech.typescript, Tech.tailwind],
    whatIDid: [
      "Membangun landing page dengan fokus performa dan SEO",
      "Mengembangkan sistem booking jadwal online",
      "Optimasi tampilan mobile dan user experience",
    ],
    impact:
      "Meningkatkan profesionalitas bisnis dan memudahkan pelanggan melakukan booking.",
  },
];

function SectionProject() {
  const professionalExperiences = experiences.filter(
    (item) => item.professional
  );
  const freelanceExperiences = experiences.filter((item) => !item.professional);

  // Hitung jumlah item yang dipin di freelance
  const pinnedFreelanceCount = freelanceExperiences.filter(
    (item) => item.pin
  ).length;

  // State awal menampilkan sejumlah item yang dipin (minimal 6 jika sedikit yang dipin)
  const initialShowCount = pinnedFreelanceCount > 0 ? pinnedFreelanceCount : 6;
  const [totalShowFreelance, setTotalShowFreelance] =
    useState(initialShowCount);

  function showAllFreelance() {
    setTotalShowFreelance(freelanceExperiences.length);
  }

  const sortExperiences = (data: IExperience[]) => {
    return data.sort((a, b) => {
      // 1. Prioritas item yang dipin
      const aPin = a.pin || false;
      const bPin = b.pin || false;
      if (aPin && !bPin) return -1;
      if (!aPin && bPin) return 1;

      // 2. Prioritas item yang memiliki 'whatIDid' (lebih detail)
      const aHasDetail = a.whatIDid && a.whatIDid.length > 0;
      const bHasDetail = b.whatIDid && b.whatIDid.length > 0;
      if (aHasDetail && !bHasDetail) return -1;
      if (!aHasDetail && bHasDetail) return 1;

      // 3. Urutkan berdasarkan tanggal (descending)
      if (a.date > b.date) return -1;
      if (a.date < b.date) return 1;
      return 0;
    });
  };

  return (
    <section
      id="project"
      className="bg-dasar rounded-2xl px-5 py-4 flex flex-col gap-3 z-10"
    >
      {/* Professional Experience */}
      <div className="flex justify-between items-start mb-4 py-4 sticky top-0 bg-dasar z-10">
        <HeadingSection>Pengalaman Kerja (Fulltime)</HeadingSection>
      </div>
      <div
        className={twMerge(
          "grid md:grid-cols-2 gap-3 transition-all duration-1000"
        )}
      >
        {sortExperiences([...professionalExperiences]).map((item, index) => (
          <CardIDo key={index} {...item} />
        ))}
      </div>

      {/* Freelance & Contract Projects */}
      <div className="flex justify-between items-start mb-4 py-4 sticky top-0 bg-dasar z-10 mt-8">
        <HeadingSection>Proyek Freelance & Kontrak</HeadingSection>
      </div>
      <div
        className={twMerge(
          "grid md:grid-cols-2 gap-3 transition-all duration-1000"
        )}
      >
        {sortExperiences([...freelanceExperiences])
          .slice(0, totalShowFreelance)
          .map((item, index) => (
            <CardIDo key={index} {...item} />
          ))}
      </div>
      {totalShowFreelance < freelanceExperiences.length && (
        <div className="flex justify-center">
          <button
            onClick={showAllFreelance}
            className="bg-white px-2 py-1 rounded text-black text-sm"
          >
            Lainnya
          </button>
        </div>
      )}
      <div className="sticky top-[70px] z-10 bg-dasar space-y-6 mt-8">
        <div>
          <SubHeadingSection>Tools & Skills</SubHeadingSection>
          <p className="text-white font-light mt-2">
            Beberapa bahasa, framework dan alat yang saya gunakan dalam
            pengembangan
          </p>
        </div>

        <div className="space-y-6">
          {/* Frontend */}
          <div>
            <h4 className="font-medium mb-3 border-b border-white/10 pb-1 inline-block text-sm uppercase tracking-wider text-blue-2">
              Frontend Development
            </h4>
            <div className="flex flex-wrap gap-4">
              {frontendTools.map((tool, index) => (
                <div key={index} className="flex flex-col items-center gap-1">
                  <Image
                    src={tool.icon}
                    width={48}
                    height={48}
                    alt={tool.name}
                  />
                  <span className="text-xs text-white/70">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h4 className="font-medium mb-3 border-b border-white/10 pb-1 inline-block text-sm uppercase tracking-wider text-blue-2">
              Backend & Database
            </h4>
            <div className="flex flex-wrap gap-4">
              {backendTools.map((tool, index) => (
                <div key={index} className="flex flex-col items-center gap-1">
                  <Image
                    src={tool.icon}
                    width={48}
                    height={48}
                    alt={tool.name}
                  />
                  <span className="text-xs text-white/70">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile */}
          <div>
            <h4 className="font-medium mb-3 border-b border-white/10 pb-1 inline-block text-sm uppercase tracking-wider text-blue-2">
              Mobile Development
            </h4>
            <div className="flex flex-wrap gap-4">
              {mobileTools.map((tool, index) => (
                <div key={index} className="flex flex-col items-center gap-1">
                  <Image
                    src={tool.icon}
                    width={48}
                    height={48}
                    alt={tool.name}
                  />
                  <span className="text-xs text-white/70">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Others */}
          <div>
            <h4 className="font-medium mb-3 border-b border-white/10 pb-1 inline-block text-sm uppercase tracking-wider text-blue-2">
              Tools & DevOps
            </h4>
            <div className="flex flex-wrap gap-4">
              {devopsTools.map((tool, index) => (
                <div key={index} className="flex flex-col items-center gap-1">
                  <Image
                    src={tool.icon}
                    width={48}
                    height={48}
                    alt={tool.name}
                  />
                  <span className="text-xs text-white/70">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionProject;
