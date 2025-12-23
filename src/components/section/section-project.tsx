"use client";
import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import CardIDo, { IExperience, Tech } from "../card/card-i-do";
import SubHeadingSection from "../heading/sub-heading-section";
import HeadingSection from "../heading/heading-section";

const experiences: IExperience[] = [
  {
    name: "Web Sistem Pengambilan Keputusan (SPK) pemberian pinjaman kredit menggunakan metode KNN",
    date: "2020",
    tech: [Tech.mysql, Tech.php, Tech.bootstrap],
    desc: "Freelance Web Developer",
    fiture: ["Data Mahasiswa", "Data Kriteria", "Data Alternatif", "SPK"],
    description:
      "Aplikasi web untuk membantu pengambilan keputusan pemberian pinjaman kredit menggunakan metode KNN, agar proses penilaian calon debitur lebih objektif dan cepat.",
  },
  {
    name: "Web Sistem Pengembalian Nomor Antrian",
    date: "2020",
    tech: [Tech.mysql, Tech.codeigniter, Tech.php, Tech.bootstrap],
    desc: "Freelance Web Developer",
    fiture: ["Ambil Antrian", "Suara Panggilan Nomor Antrian"],
    description:
      "Sistem antrian otomatis yang memudahkan pelanggan mengambil nomor antrian dan mendapatkan panggilan suara secara real-time.",
  },
  {
    name: "Web pemesanan tiket kereta bus online",
    date: "2021",
    tech: [
      Tech.mysql,
      Tech.codeigniter,
      Tech.php,
      Tech.midtrans,
      Tech.bootstrap,
    ],
    desc: "Freelance Web Developer",
    fiture: ["Pembayaran Payment Gateway", "Booking Tiket"],
    description:
      "Platform pemesanan tiket transportasi online dengan integrasi payment gateway untuk transaksi aman dan cepat.",
  },
  {
    name: "Web Sistem Pengambilan Keputusan (SPK) karyawan berprestasi menggunakan metode DEMATEL",
    date: "2022",
    tech: [Tech.mysql, Tech.php, Tech.bootstrap, Tech.codeigniter],
    desc: "Freelance Web Developer",
    fiture: ["Data Karyawan", "Data Kriteria", "Data Alternatif", "SPK"],
    description:
      "Aplikasi SPK untuk menentukan karyawan berprestasi menggunakan metode DEMATEL, membantu manajemen dalam evaluasi kinerja secara terukur.",
  },
  {
    name: "Web Profil Organisasi Kemahasiswaan",
    date: "2022",
    tech: [Tech.mysql, Tech.bootstrap, Tech.codeigniter, Tech.php],
    desc: "Freelance Web Developer",
    fiture: [
      "Data Profil Organisasi",
      "Data Pendaftaran",
      "Data Pengurus",
      "Data Program Kerja",
      "Blog",
      "Data Kegiatan",
      "dan Lainnya",
    ],
    description:
      "Website profil organisasi mahasiswa untuk menampilkan struktur kepengurusan, kegiatan, dan pendaftaran anggota secara digital.",
  },
  {
    name: "Aplikasi absensi otomatis pendeteksi wajah untuk kuliah daring (zoom meeting) berbasis Desktop",
    date: "2022",
    tech: [Tech.mysql, Tech.python, Tech.opencv],
    desc: "Aplikasi Tugas Akhir (Skripsi)",
    fiture: ["Data Mahasiswa", "Data Kehadiran", "Absensi Otomatis"],
    description:
      "Aplikasi desktop untuk mendeteksi dan merekam kehadiran mahasiswa secara otomatis menggunakan deteksi wajah berbasis Haarcascade.",
  },
  {
    name: "IOT - Sistem Hitung Total Belanja Pada Troli",
    date: "2022",
    tech: [Tech.arduino, Tech.mit, Tech.react, Tech.firebase],
    desc: "Freelance App IOT",
    fiture: [
      "Scanner Barcode cek harga",
      "Tambahkan dan Hapus barang dari keranjang",
      "Aplikasi Android untuk User",
      "Web Dashboard Admin",
    ],
    description:
      "Sistem IoT yang menghitung total belanja otomatis di troli supermarket dengan integrasi barcode scanner dan aplikasi Android.",
  },
  {
    name: "Aplikasi Mobile PPOB (Payment Point Online Bank) Multi Layanan",
    date: "Juli 2022 - Sept 2023",
    tech: [Tech.axios, Tech.typescript, Tech.reactnative],
    desc: "Mobile Developer - PT. Ide Kreatif Asia",
    fiture: [
      "Top Up, Withdraw, Transfer Saldo",
      "Pembelian Pulsa",
      "Top Up E-Wallet (Ovo, Dana, Gopay, ShopeePay)",
      "Pembelian Token Listrik",
      "Pembayaran Tagihan (PDAM, PLN, BPJS)",
      "Pembelian Tiket (Pesawat, Kereta Api, Bioskop, Hotel)",
      "Share Refferal Link",
      "Multi Platform",
    ],
    pin: true,
    description:
      "Aplikasi mobile PPOB multi layanan yang menyediakan berbagai transaksi digital seperti pembayaran tagihan, top-up, dan pembelian tiket secara real-time.",
  },
  {
    name: "PWA (Progressive Web App) Multi Level Marketing",
    date: "2023",
    tech: [Tech.axios, Tech.typescript, Tech.react, Tech.nextjs, Tech.tailwind],
    desc: "Frontend Developer - PT. Ide Kreatif Asia",
    fiture: [
      "PWA (Progressive Web App)",
      "Multi Level Marketing",
      "Share Refferal Link",
      "SEO Friendly",
    ],
    description:
      "PWA untuk sistem Multi Level Marketing dengan fitur referral link dan dashboard penjualan, dioptimalkan untuk performa dan SEO.",
    pin: true,
  },
  {
    name: "Web ERP (Smart Inventory) untuk perusahaan pertambangan nikel",
    date: "2023",
    tech: [Tech.axios, Tech.typescript, Tech.react, Tech.nextjs, Tech.tailwind],
    desc: "PT. Unity Nickel Allow",
    fiture: [
      "Sales",
      "Purchasing",
      "Accounting",
      "Warehouse",
      "Document Beacukai",
      "Report Beacukai",
      "Report Inventory",
      "Report Sales",
      "Report Purchasing",
      "Report Accounting",
      "dan Lainnya",
    ],
    pin: true,
    description:
      "Sistem ERP komprehensif untuk perusahaan pertambangan yang mencakup modul logistik, purchasing, accounting, dan pelaporan bea cukai.",
  },
  {
    name: "Sistem Informasi Akademik Kampus (SIAKAD)",
    date: "Apr 2024 - Jan 2025",
    tech: [
      Tech.axios,
      Tech.typescript,
      Tech.react,
      Tech.nextjs,
      Tech.tailwind,
      Tech.mysql,
      Tech.prisma,
      Tech.nodejs,
      Tech.express,
      Tech.docker,
    ],
    desc: "PT. BENTENG INFORMATIKA INDONESIA - Fullstack Developer",
    fiture: [
      "Dashboard Admin, Dosen, Mahasiswa",
      "Manajemen Mata Kuliah",
      "KRS Online",
      "Presensi Online dengan QR Code",
      "Penilaian Online",
      "Transkrip Nilai Otomatis",
      "integrasi dengan NEOFEEDER",
      "dan Lainnya",
    ],
    pin: true,
    description:
      "Sistem akademik terintegrasi yang mengelola seluruh aktivitas perkuliahan mulai dari KRS, presensi, penilaian, hingga integrasi dengan NEOFEEDER.",
  },
  {
    name: "Web Online Shop Fashion",
    date: "2024",
    tech: [Tech.php, Tech.mysql, Tech.tailwind],
    desc: "Freelance Web Developer",
    fiture: [
      "Produk Fashion",
      "Kategori Produk",
      "Keranjang Belanja",
      "Checkout & Payment Gateway",
      "Dashboard Admin",
      "Report Penjualan",
    ],
    description:
      "Website e-commerce untuk toko fashion dengan sistem katalog produk, keranjang belanja, dan integrasi payment gateway.",
  },
  {
    name: "Web Undangan Digital",
    date: "2023",
    tech: [
      Tech.axios,
      Tech.typescript,
      Tech.react,
      Tech.nextjs,
      Tech.tailwind,
      Tech.zustand,
      Tech.framermotion,
    ],
    desc: "Freelance Frontend Developer",
    fiture: [
      "Undangan Digital",
      "Dinamic Template",
      "Dashboard, Edit Template Undangan",
      "Payment Gateway",
      "dan Lainnya",
    ],
    description:
      "Platform pembuatan undangan digital dengan template dinamis dan integrasi payment gateway untuk pelanggan premium.",
  },
  {
    name: "Web Sistem Informasi Geografis, Wisata Alam",
    date: "2024",
    tech: [
      Tech.axios,
      Tech.react,
      Tech.nextjs,
      Tech.typescript,
      Tech.tailwind,
      Tech.zustand,
      Tech.googlemap,
      Tech.strapi,
    ],
    desc: "Freelance Frontend Developer",
    fiture: ["GIS wisata", "Blog", "Comment & Rating Wisata"],
    description:
      "Aplikasi GIS interaktif untuk menampilkan lokasi wisata alam dengan fitur ulasan dan penilaian pengguna.",
  },
  {
    name: "Aplikasi Sales Berbasis Android",
    date: "2023",
    tech: [
      Tech.axios,
      Tech.reactnative,
      Tech.typescript,
      Tech.tailwind,
      Tech.zustand,
      Tech.strapi,
    ],
    desc: "Freelance Fullstack Developer",
    fiture: [
      "Target Penjualan",
      "Laporan Penjualan",
      "Aplikasi Sales",
      "Aplikasi Pimpinan",
      "Aplikasi Admin",
    ],
    description:
      "Aplikasi mobile untuk mengelola aktivitas sales harian, laporan penjualan, dan dashboard pemantauan bagi pimpinan dan admin.",
  },
  {
    name: "Aplikasi Sistem Pengataran Obat pada rumah sakit (SIPRO) berbasis Android",
    date: "2023",
    tech: [
      Tech.axios,
      Tech.react,
      Tech.nextjs,
      Tech.typescript,
      Tech.tailwind,
      Tech.zustand,
      Tech.laravel,
      Tech.mysql,
    ],
    desc: "Freelance Fullstack Developer, RSUD Siwa Kab. Wajo, Sulawesi Selatan",
    fiture: [
      "Aplikasi aptoker",
      "Aplikasi admin",
      "Aplikasi pasien",
      "Integrasi dengan aplikasi rumah sakit",
      "Tracking status pengantaran",
    ],
    pin: true,
    description:
      "Aplikasi rumah sakit untuk memantau proses pengantaran obat dari apotek ke pasien secara real-time dengan integrasi sistem internal.",
  },
  {
    name: "PWA POS (Point of Sale) & Inventory Management System",
    date: "2023",
    tech: [
      Tech.react,
      Tech.nextjs,
      Tech.typescript,
      Tech.tailwind,
      Tech.zustand,
      Tech.mysql,
      Tech.prisma,
    ],
    desc: "Freelance, Tk. Bandung Motor, Mamuju, Sulawesi Barat",
    fiture: [
      "Kasir Dashboard",
      "Owner Dashboard",
      "Admin Dashboard",
      "Gudang Dashboard",
      "Manajemen Stok",
      "Multiple Toko",
      "Report Penjualan",
      "Report Mutasi",
      "Transfer Barang",
    ],
    description:
      "Aplikasi POS berbasis web dengan fitur manajemen stok, transaksi multi-toko, dan laporan penjualan yang terintegrasi.",
  },
  {
    name: "Landing Page and Booking System for Barber Shop",
    date: "2024",
    tech: [
      Tech.react,
      Tech.nextjs,
      Tech.typescript,
      Tech.tailwind,
      Tech.zustand,
    ],
    desc: "Freelance Fullstack Developer, Goodcut Barber Shop, Makassar",
    fiture: [
      "Landing Page",
      "Layanan dan Harga",
      "Booking System",
      "Testimonial",
      "SEO Friendly",
    ],
    pin: true,
    description:
      "Website interaktif untuk barbershop yang menampilkan layanan, harga, dan sistem pemesanan jadwal online dengan tampilan modern.",
  },
];

function SectionProject() {
  const [totalShow, setTotalShow] = useState(6);

  function showAll() {
    setTotalShow(experiences.length);
  }
  return (
    <section
      id="project"
      className="bg-dasar rounded-2xl px-5 py-4 flex flex-col gap-3 z-10"
    >
      <div className="flex justify-between items-start mb-4 py-4 sticky top-0  bg-dasar z-10">
        <HeadingSection>Pengalaman Kerja / Project</HeadingSection>
      </div>
      <div
        className={twMerge(
          "grid md:grid-cols-2 gap-3 transition-all duration-1000"
        )}
      >
        {experiences
          .sort((a, b) => {
            if (a.date > b.date) return -1;
            if (a.date < b.date) return 1;
            return 0;
          })
          .sort((a, b) => {
            if (a.pin && !b.pin) return -1;
            if (!a.pin && b.pin) return 1;
            return 0;
          })
          .slice(0, totalShow)
          .map((item, index) => (
            <CardIDo key={index} {...item} />
          ))}
      </div>
      {totalShow !== experiences.length && (
        <div className="flex justify-center">
          <button
            onClick={showAll}
            className="bg-white px-2 py-1 rounded text-black text-sm"
          >
            Lainnya
          </button>
        </div>
      )}
      <div className=" sticky top-[70px]  z-10 bg-dasar space-y-4">
        <SubHeadingSection>Tools</SubHeadingSection>
        <p className="text-white font-light">
          Beberapa bahasa, framework dan alat yang pernah saya gunakan dalam
          mengembangkan project
        </p>
        <div className="flex flex-wrap gap-3">
          <Image
            src="/image/toolkit/html.png"
            width={64}
            height={64}
            alt="html"
          />
          <Image
            src="/image/toolkit/css.png"
            width={64}
            height={64}
            alt="css"
          />
          <Image
            src="/image/toolkit/javascript.png"
            width={64}
            height={64}
            alt="javascript"
          />
          <Image
            src="/image/toolkit/typescript.png"
            width={64}
            height={64}
            alt="typescript"
          />
          <Image
            src="/image/toolkit/react.png"
            width={64}
            height={64}
            alt="react"
          />
          <Image
            src="/image/toolkit/next-js.png"
            width={64}
            height={64}
            alt="next-js"
          />
          <Image
            src="/image/toolkit/tailwind.png"
            width={64}
            height={64}
            alt="tailwind"
          />
          <Image
            src="/image/toolkit/figma.png"
            width={64}
            height={64}
            alt="figma"
          />
          <Image
            src="/image/toolkit/git.png"
            width={64}
            height={64}
            alt="git"
          />
          <Image
            src="/image/toolkit/expo.png"
            width={64}
            height={64}
            alt="expo"
          />
          <Image
            src="/image/toolkit/express-js.png"
            width={64}
            height={64}
            alt="express-js"
          />
          <Image
            src="/image/toolkit/laravel.png"
            width={64}
            height={64}
            alt="laravel"
          />
          <Image
            src="/image/toolkit/prisma.png"
            width={64}
            height={64}
            alt="prisma"
          />
          <Image
            src="/image/toolkit/boostrap.png"
            width={64}
            height={64}
            alt="boostrap"
          />
          <Image
            src="/image/toolkit/mysql.png"
            width={64}
            height={64}
            alt="mysql"
          />
          <Image
            src="/image/toolkit/php.png"
            width={64}
            height={64}
            alt="php"
          />
          <Image
            src="/image/toolkit/redux.png"
            width={64}
            height={64}
            alt="redux"
          />
          <Image
            src="/image/toolkit/axios.png"
            width={64}
            height={64}
            alt="axios"
          />
          <Image
            src="/image/toolkit/docker.png"
            width={64}
            height={64}
            alt="docker"
          />
        </div>
      </div>
    </section>
  );
}

export default SectionProject;
