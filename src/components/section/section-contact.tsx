import React from "react";
import HeadingSection from "../heading/heading-section";
import Button from "../button/button";
import ButtonIcon from "../button/button-icon";

function SectionContact() {
  return (
    <section
      id="contact"
      className="bg-secondary rounded-2xl px-5 py-4 flex flex-col gap-3 z-10 h-[90vh] sticky top-0"
    >
      <div className="flex justify-between items-start mb-4 pt-4 ">
        <HeadingSection>Kontak</HeadingSection>
      </div>
      <p className="text-white text-base  font-light pb-4">
        Silahkan Hubungi Saya jika ada yang ingin ditanyakan
      </p>
      <form className="space-y-6">
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            autoComplete="off"
            required
            type="text"
            name="name"
            id="name"
            className="bg-transparent border-b-2 border-blue-2/50 focus:border-blue-2 hover:border-blue-2 p-2 outline-none"
            placeholder="Your name"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            autoComplete="off"
            required
            type="email"
            name="email"
            id="email"
            className="bg-transparent border-b-2 border-blue-2/50 focus:border-blue-2 hover:border-blue-2 p-2 outline-none"
            placeholder="Your email"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Message</label>
          <textarea
            required
            name="message"
            id="message"
            className="bg-transparent border-b-2 border-blue-2/50 focus:border-blue-2 hover:border-blue-2 p-2 outline-none max-h-[180px]"
            placeholder="Your message"
          />
        </div>
        <div className="flex justify-end mt-4">
          <Button type="submit">Send Message</Button>
        </div>
      </form>
      <div className="flex flex-col items-center gap-6">
        <h6>OR</h6>
        <div className="flex gap-2">
          <ButtonIcon href="" alt="whatsapp" src="/svg/whatsapp.svg" />
          <ButtonIcon href="" alt="telegram" src="/svg/telegram.svg" />
          <ButtonIcon href="" alt="instagram" src="/svg/instagram.svg" />
          <ButtonIcon href="" alt="facebook" src="/svg/facebook.svg" />
        </div>
      </div>
      <div className="right-5 bottom-10 absolute flex">
        <ButtonIcon
          variant="secondary"
          href="#up"
          alt="top"
          src="/svg/top.svg"
        />
      </div>
    </section>
  );
}

export default SectionContact;
