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
        <aside className="w-full flex flex-col rounded-2xl overflow-hidden h-auto lg:h-full lg:max-h-[704px] relative">
          <Image
            alt="photo-profile"
            src="/image/profile-1.png"
            width={180}
            height={180}
            className=" border-[5px] border-white rounded-[50px] bg-black absolute left-0 right-0 mx-auto"
          />
          <div className="bg-dasar flex flex-col w-full justify-between items-center h-full rounded-2xl p-5 mt-[90px] pt-[110px] space-y-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-3xl leading-4">Zulkifli, S.Kom.</h3>
              <h4 className="font-light text-white/90 text-xl">
                Fullstack Developer
              </h4>
              <div className="flex gap-2 justify-center">
                <ButtonIcon
                  href="https://github.com/zulkifli-dev"
                  alt="github"
                  src={"/svg/github.svg"}
                  target="_blank"
                />
                <ButtonIcon
                  href="https://www.linkedin.com/in/zulkifli-700b64170/"
                  alt="linkedin"
                  src={"/svg/linkedin.svg"}
                  target="_blank"
                />
              </div>
            </div>
            <div className=" w-full bg-gradient-to-bl from-blue-1/50 to-blue-2/50  rounded-md p-4 flex flex-col gap-y-2">
              <div className="flex z-20 gap-2 group group-hover:opacity-80 ">
                <div className="flex items-center justify-center">
                  <ButtonIcon href="" alt="telp" src={"/svg/location.svg"} />
                </div>
                <div className="flex-1">
                  <h5 className="text-sm text-white/90">Alamat</h5>
                  <p>Mamuju, Sulawesi Barat, Indonesia</p>
                </div>
              </div>
              <hr className=" opacity-50" />

              <div className="group flex z-20 gap-2">
                <div className="flex items-center justify-center">
                  <ButtonIcon href="" alt="telp" src={"/svg/phone.svg"} />
                </div>
                <div className="flex-1">
                  <h5 className="text-sm text-white/90">Telepon</h5>
                  <p>085955126468</p>
                </div>
                <ButtonClipboard
                  className="group-hover:block"
                  value="085955126468"
                />
              </div>
              <hr className=" opacity-50" />
              <div className="group flex z-20 gap-2">
                <div className="flex items-center justify-center">
                  <ButtonIcon href="" alt="telp" src={"/svg/email.svg"} />
                </div>
                <div className="flex-1">
                  <h5 className="text-sm text-white/90">Email</h5>
                  <p>kifliaapp@gmail.com</p>
                </div>
                <ButtonClipboard
                  className="group-hover:block"
                  value="kifliaapp@gmail.com"
                />
              </div>
              <hr className=" opacity-50" />
              <div className="flex z-20 gap-2">
                <div className="flex items-center justify-center">
                  <ButtonIcon href="" alt="telp" src={"/svg/date.svg"} />
                </div>
                <div>
                  <h5 className="text-sm text-white/90">Age</h5>
                  <p>
                    {getYear({
                      startDate: new Date("1999-01-02"),
                      endDate: new Date(),
                    })}{" "}
                    tahun
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Button className="bg-gradient " href="#contact">
                Hubungi Saya
              </Button>
            </div>
          </div>
        </aside>
        <div className="col-span-1 lg:col-span-2 flex flex-col gap-y-4 h-auto lg:h-full lg:overflow-y-scroll rounded-2xl relative scroll-smooth hide-scrollbar ">
          <Navbar />
          <main className="z-10 gap-y-4 flex flex-col bg-black">
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
