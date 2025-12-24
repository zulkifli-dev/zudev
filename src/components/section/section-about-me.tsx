"use client";
import { twMerge } from "tailwind-merge";
import Button from "../button/button";
import CardIDo from "../card/card-i-do";
import HeadingSection from "../heading/heading-section";
import SubHeadingSection from "../heading/sub-heading-section";

function SectionAboutMe() {
  return (
    <section
      id="about"
      className="bg-dasar rounded-2xl px-5 py-4 flex flex-col gap-3 z-10"
    >
      <div className="flex justify-between items-start mb-4 bg-dasar py-4 sticky top-0 z-50">
        <HeadingSection>Tentang Saya</HeadingSection>
        <Button className="min-w-[120px]" href="/cv-zulkifli.pdf" download>
          Download CV
        </Button>
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
