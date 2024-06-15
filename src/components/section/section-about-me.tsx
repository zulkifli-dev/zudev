import React from "react";
import CardIDo from "../card/card-i-do";
import HeadingSection from "../heading/heading-section";
import Button from "../button/button";
import SubHeadingSection from "../heading/sub-heading-section";

function SectionAboutMe() {
  return (
    <section
      id="about"
      className="bg-secondary rounded-2xl px-5 py-4 flex flex-col gap-3 z-10"
    >
      <div className="flex justify-between items-start mb-4 bg-secondary py-4 sticky top-0">
        <HeadingSection>Tentang Saya</HeadingSection>
        <Button className="min-w-[120px]">Download CV</Button>
      </div>
      <p className="text-white text-base font-light">
        Saya adalah programmer berpengalaman dengan keahlian di bidang website
        frontend, backend, dan mobile. Saya memiliki passion dalam belajar dan
        selalu tertarik dengan perkembangan terbaru di dunia teknologi. Saya
        memiliki gelar Sarjana Teknik Informatika dari Universitas Dipanegara
        dan telah mengerjakan berbagai proyek programming sejak tahun 2018.
        Selain itu, saya aktif di berbagai organisasi kampus, dan kepemimpinan
        saya sebagai ketua organisasi telah memberi saya pengalaman berharga
        dalam hal mengelola tim dan memberikan dampak positif.{" "}
      </p>
      <SubHeadingSection>Pengalaman</SubHeadingSection>
      <div className="grid grid-cols-2 gap-3">
        <CardIDo
          title="Frontend Web Developers - WFH"
          description="Freelance  .  jul - des 2023 . Bertanggung jawab pada pembuatan web undangan digital Voow menggunakan next js frontend"
        />
        <CardIDo
          title="Frontend Web Developers - WFH"
          description="Freelance  .  jul - des 2023 . Bertanggung jawab pada pembuatan web undangan digital Voow menggunakan next js frontend"
        />
        <CardIDo
          title="Frontend Web Developers - WFH"
          description="Freelance  .  jul - des 2023 . Bertanggung jawab pada pembuatan web undangan digital Voow menggunakan next js frontend"
        />
        <CardIDo
          title="Frontend Web Developers - WFH"
          description="Freelance  .  jul - des 2023 . Bertanggung jawab pada pembuatan web undangan digital Voow menggunakan next js frontend"
        />
        <CardIDo
          title="Frontend Web Developers - WFH"
          description="Freelance  .  jul - des 2023 . Bertanggung jawab pada pembuatan web undangan digital Voow menggunakan next js frontend"
        />
        <CardIDo
          title="Frontend Web Developers - WFH"
          description="Freelance  .  jul - des 2023 . Bertanggung jawab pada pembuatan web undangan digital Voow menggunakan next js frontend"
        />
        <CardIDo
          title="Frontend Web Developers - WFH"
          description="Freelance  .  jul - des 2023 . Bertanggung jawab pada pembuatan web undangan digital Voow menggunakan next js frontend"
        />
      </div>
    </section>
  );
}

export default SectionAboutMe;
