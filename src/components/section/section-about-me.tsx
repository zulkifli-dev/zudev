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
        <Button className="min-w-[120px]">Download CV</Button>
      </div>
      <p className="text-white text-base font-light">
        Saya seorang Full Stack Developer berpengalaman dalam pengembangan
        website dan aplikasi mobile menggunakan React, Node.js, dan React
        Native.
      </p>
      <p className="text-white text-base font-light">
        Sejak 2018, saya telah mengerjakan berbagai proyek digital mulai dari
        sistem ERP, aplikasi akademik, hingga platform pembayaran digital.
      </p>
      <p className="text-white text-base font-light">
        Lulusan Teknik Informatika – Universitas Dipanegara, saya memiliki
        semangat belajar tinggi dan percaya bahwa solusi terbaik lahir dari
        pemahaman kebutuhan pengguna.
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
          desc="Teknik Informatika"
          fiture={[]}
          tech={[]}
        />
        <CardIDo
          name="SMK Negeri 1 Rangas Mamuju"
          date="2015 - 2017"
          desc="Multimedia"
          fiture={[]}
          tech={[]}
        />
      </div>
    </section>
  );
}

export default SectionAboutMe;
