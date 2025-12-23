"use client";
import React from "react";
import HeadingSection from "../heading/heading-section";
import Button from "../button/button";
import ButtonIcon from "../button/button-icon";
import Image from "next/image";

function SectionContact() {
  const scrollToTop = () => {
    const scrollContainer = document.getElementById("up");
    if (scrollContainer) {
      // Untuk desktop: scroll container
      scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
    }
    // Untuk mobile: scroll window
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="md:h-[90vh]">
      <div className="bg-dasar rounded-2xl px-5 py-4 flex flex-col gap-3 z-10 sticky top-0">
        <div className="flex justify-between items-start mb-4 pt-4 ">
          <HeadingSection>Kontak</HeadingSection>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 gap-8 min-h-[300px]">
          <div className="text-center space-y-2">
            <p className="text-xl font-semibold text-white">
              Mari Diskusikan Ide Anda
            </p>
            <p className="text-white/60 max-w-md mx-auto">
              Saya siap membantu mewujudkan proyek impian Anda. Hubungi saya
              melalui WhatsApp atau Email untuk respon cepat.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              href="https://wa.me/6285955126468"
              target="_blank"
              className="px-8 py-3 text-lg flex items-center gap-3 hover:scale-105 transition-transform"
            >
              <img
                src="/svg/whatsapp.svg"
                alt="WhatsApp"
                className="w-6 h-6 brightness-0 invert"
              />
              WhatsApp
            </Button>
            <Button
              href="mailto:your-email@example.com"
              target="_blank"
              className="px-8 py-3 text-lg flex items-center gap-3 hover:scale-105 transition-transform bg-none bg-white/10 hover:bg-white/20"
            >
              <img
                src="/svg/email.svg"
                alt="Email"
                className="w-6 h-6 brightness-0 invert"
              />
              Email
            </Button>
          </div>
        </div>
        <button
          onClick={scrollToTop}
          className="right-5 bottom-10 absolute flex bg-gradient-to-bl from-white/50 to-gray-200/50 backdrop-blur-lg hover:from-blue-1 hover:to-blue-2 p-2 rounded-md shadow"
        >
          <Image width={24} height={24} alt="top" src="/svg/top.svg" />
        </button>
      </div>
    </section>
  );
}

export default SectionContact;
