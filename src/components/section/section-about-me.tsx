"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Button from "../button/button";
import CardIDo from "../card/card-i-do";
import HeadingSection from "../heading/heading-section";
import SubHeadingSection from "../heading/sub-heading-section";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

function SectionAboutMe() {
  const [open, setOpen] = useState(false);

  const handleDownload = (language: "id" | "en") => {
    const cvFile =
      language === "id"
        ? "/CV_Zulkifli_Fullstack-Developer_ID.pdf"
        : "/CV_Zulkifli_Fullstack-Developer_EN.pdf";
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = cvFile;
    link.click();
    setOpen(false);
  };

  return (
    <section
      id="about"
      className="bg-dasar rounded-2xl px-5 py-4 flex flex-col gap-3 z-10"
    >
      <div className="flex justify-between items-start mb-4 bg-dasar py-4 sticky top-0 z-50">
        <HeadingSection>Tentang Saya</HeadingSection>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button className="min-w-[120px] bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-md transition-colors">
              Download CV
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md bg-dasar border-slate-700">
            <DialogHeader>
              <DialogTitle className="text-white">Pilih Bahasa CV</DialogTitle>
              <DialogDescription className="text-slate-400">
                Silakan pilih bahasa CV yang ingin Anda download
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-3 mt-4">
              <button
                onClick={() => handleDownload("id")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors font-medium"
              >
                Bahasa Indonesia
              </button>
              <button
                onClick={() => handleDownload("en")}
                className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition-colors font-medium"
              >
                Bahasa Inggris
              </button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <p className="text-white text-base font-light">
        Saya adalah Full Stack Developer yang berfokus pada pengembangan sistem
        bisnis dan aplikasi berskala nyata, meliputi website dan aplikasi mobile
        menggunakan React, Node.js, dan React Native.
      </p>
      <p className="text-white text-base font-light">
        Saya memiliki pengalaman bekerja secara full-time di perusahaan
        sekaligus menangani berbagai project freelance dan kontrak, dengan fokus
        pada pengembangan sistem bisnis yang digunakan langsung dalam
        operasional.
      </p>
      <p className="text-white text-base font-light">
        Sebagai lulusan Teknik Informatika Universitas Dipanegara, saya
        mengutamakan pemahaman kebutuhan pengguna dan stabilitas sistem dalam
        setiap solusi yang saya bangun.
      </p>
      <SubHeadingSection>Riwayat Pendidikan</SubHeadingSection>
      <div
        className={twMerge(
          "grid md:grid-cols-2 gap-3 transition-all duration-1000"
        )}
      >
        <CardIDo
          name="S1 - Universitas Dipanegara Makassar"
          date="2017 - 2022"
          role="Teknik Informatika"
          tech={[]}
          professional={false}
        />
        <CardIDo
          name="SMK Negeri 1 Rangas Mamuju"
          date="2015 - 2017"
          role="Multimedia"
          tech={[]}
          professional={false}
        />
      </div>
    </section>
  );
}

export default SectionAboutMe;
