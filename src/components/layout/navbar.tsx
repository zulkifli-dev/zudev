"use client";
import { usePathname } from "next/navigation";
import ButtonIconTitle from "../button/button-icon-title";

function Navbar() {
  const pathname = usePathname();
  return (
    <div
      id="up"
      className="mt-4 lg:mt-[95px] md:flex justify-center lg:justify-end sticky top-0 z-50 hidden"
    >
      <nav className="bg-gradient-to-bl from-blue-1/50 to-blue-2/50 rounded-2xl flex gap-2 py-2 px-3 backdrop-blur-lg">
        <ButtonIconTitle
          href="#about"
          alt="about"
          src={"/svg/document.svg"}
          title="About"
        />

        <ButtonIconTitle
          href="#project"
          alt="project"
          src={"/svg/work.svg"}
          title="Project"
        />
        <ButtonIconTitle
          href="#service"
          alt="service"
          src={"/svg/service.svg"}
          title="Service"
        />
        {/* <ButtonIconTitle href='/product' alt='product' src={'/svg/product.svg'} title='Product' /> */}
        {/* <ButtonIconTitle alt='lab' src={'/svg/lab.svg'} title='Lab' /> */}
        <ButtonIconTitle
          href="#contact"
          alt="document"
          src={"/svg/document.svg"}
          title="Contact"
        />
      </nav>
    </div>
  );
}

export default Navbar;
