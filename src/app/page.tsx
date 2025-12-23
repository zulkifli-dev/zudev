import Button from "@/components/button/button";
import ButtonClipboard from "@/components/button/button-clipboard";
import ButtonIcon from "@/components/button/button-icon";
import Navbar from "@/components/layout/navbar";
import SectionAboutMe from "@/components/section/section-about-me";
import SectionContact from "@/components/section/section-contact";
import SectionProject from "@/components/section/section-project";
import SectionService from "@/components/section/section-service";
import { Toaster } from "@/components/ui/toaster";
import getYear from "@/utils/getYear";
import Image from "next/image";

function Page() {
  return (
    <div className="max-w-7xl mx-auto p-4 flex flex-col gap-4 lg:h-screen h-auto">
      <header>
        <h1 className="text-4xl">DEV.</h1>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-0 lg:space-x-4 h-auto lg:h-full lg:overflow-hidden">
        <aside className="w-full flex flex-col rounded-2xl overflow-hidden h-auto lg:h-full lg:max-h-[500px] relative">
          <Image
            alt="photo-profile"
            src="/image/profile-1.png"
            width={180}
            height={180}
            className=" border-[5px] border-white rounded-[50px] bg-black absolute left-0 right-0 mx-auto"
          />
          <div className="bg-dasar flex flex-col w-full justify-between items-center h-full rounded-2xl p-5 mt-[90px] pt-[110px] space-y-4">
            <div className="flex flex-col gap-2 text-center">
              <h3 className="text-3xl font-semibold">Zulkifli</h3>
              <h4 className="font-light text-white/90 text-base">
                Full Stack Developer
              </h4>
              <p className="text-white/70 text-sm font-light">
                Sistem Bisnis & Aplikasi Produksi
              </p>
            </div>

            {/* Trust Signals */}
            <div className="w-full space-y-2 text-center">
              <div className="flex items-center justify-center gap-2 text-sm text-white/80">
                <span>✔️</span>
                <span>ERP • POS • Inventory</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-white/80">
                <span>✔️</span>
                <span>10+ Proyek Produksi</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-white/80">
                <span>✔️</span>
                <span>Full-time & Freelance</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-white/80">
                <span>✔️</span>
                <span>Website & Mobile</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col gap-2 ">
              <Button href="#contact">Diskusikan Project</Button>
            </div>
          </div>
        </aside>
        <div
          id="up"
          className="col-span-1 lg:col-span-2 flex flex-col gap-y-4 h-auto lg:h-full lg:overflow-y-scroll rounded-2xl relative scroll-smooth hide-scrollbar "
        >
          <div id="top">
            <Navbar />
          </div>
          <main className=" gap-y-4 flex flex-col bg-black sticky top-60 z-50 ">
            <SectionAboutMe />
            <SectionProject />
            <SectionService />
            <SectionContact />
          </main>
        </div>
        <Toaster />
      </div>
    </div>
  );
}

export default Page;
