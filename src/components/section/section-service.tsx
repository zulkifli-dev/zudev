import React from "react";
import HeadingSection from "../heading/heading-section";
import Image from "next/image";

function SectionService() {
  return (
    <section
      id="service"
      className="bg-dasar rounded-2xl px-5 py-4 flex flex-col gap-3 z-10"
    >
      <div className="flex justify-between items-start mb-4 py-4 sticky -top-1  bg-dasar z-10">
        <HeadingSection>Layanan Saya</HeadingSection>
      </div>
      <div className="grid md:grid-cols-2 gap-3 order-2 md:order-1">
        <div className="bg-white/5 backdrop-blur-md border border-blue-2/30 rounded-2xl p-5 flex flex-col gap-2 items-center shadow-xl transition-all hover:bg-white/10 hover:border-blue-2/50">
          <Image alt="web" src={"/svg/web.svg"} width={64} height={64} />
          <h4 className="text-xl font-semibold text-blue-2">Web Development</h4>
          <ul className="list-disc text-gray-300 w-full px-4">
            <li>Website statis dan dinamis</li>
            <li>Landing page & website e-commerce</li>
            <li>Responsive design dan SEO-friendly.</li>
          </ul>
        </div>
        <div className="bg-white/5 backdrop-blur-md border border-blue-2/30 rounded-2xl p-5 flex flex-col gap-2 items-center shadow-xl transition-all hover:bg-white/10 hover:border-blue-2/50">
          <Image alt="app" src={"/svg/app.svg"} width={64} height={64} />
          <h4 className="text-xl font-semibold text-blue-2">App Development</h4>
          <ul className="list-disc text-gray-300 w-full px-4">
            <li>Aplikasi native dan hybrid.</li>
            <li>Aplikasi Android dan iOS.</li>
            <li>Aplikasi desktop</li>
          </ul>
        </div>
      </div>

      <p className="text-white text-base  font-light text-center mt-4 order-1 md:order-2">
        Saya menawarkan fleksibilitas dalam bekerja sama dengan klien, baik
        secara pribadi maupun dengan tim.
      </p>
    </section>
  );
}

export default SectionService;
