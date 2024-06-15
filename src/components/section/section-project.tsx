import React from "react";
import CardIDo from "../card/card-i-do";
import HeadingSection from "../heading/heading-section";
import SubHeadingSection from "../heading/sub-heading-section";
import Image from "next/image";

function SectionProject() {
  return (
    <section
      id="project"
      className="bg-secondary rounded-2xl px-5 py-4 flex flex-col gap-3 z-10"
    >
      <div className="flex justify-between items-start mb-4 py-4 sticky top-0  bg-secondary z-10">
        <HeadingSection>Project</HeadingSection>
      </div>
      <div className="  sticky top-[72px] bg-secondary z-10">
        <div className="bg-white/10 px-2 py-2 rounded-md">
          <button className="bg-secondary py-1 px-2 rounded min-w-[120px]">
            All
          </button>
          <button className="py-1 px-2 rounded min-w-[120px]">Web</button>
          <button className="py-1 px-2 rounded min-w-[120px]">Mobile</button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-2 rounded-md">
          <div className="bg-black/20 w-full aspect-video" />
        </div>
        <div className="bg-white p-2 rounded-md">
          <div className="bg-black/20 w-full aspect-video" />
        </div>
        <div className="bg-white p-2 rounded-md">
          <div className="bg-black/20 w-full aspect-video" />
        </div>
        <div className="bg-white p-2 rounded-md">
          <div className="bg-black/20 w-full aspect-video" />
        </div>
        <div className="bg-white p-2 rounded-md">
          <div className="bg-black/20 w-full aspect-video" />
        </div>
        <div className="bg-white p-2 rounded-md">
          <div className="bg-black/20 w-full aspect-video" />
        </div>
      </div>
      <div className=" sticky top-[70px]  z-10 bg-secondary space-y-4">
        <SubHeadingSection>Tools</SubHeadingSection>
        <p className="text-white font-light">
          Beberapa bahasa, framework dan alat yang pernah saya gunakan dalam
          mengembangkan project
        </p>
        <div className="flex flex-wrap gap-3">
          <Image
            src="/image/toolkit/html.png"
            width={64}
            height={64}
            alt="html"
          />
          <Image
            src="/image/toolkit/css.png"
            width={64}
            height={64}
            alt="css"
          />
          <Image
            src="/image/toolkit/javascript.png"
            width={64}
            height={64}
            alt="javascript"
          />
          <Image
            src="/image/toolkit/typescript.png"
            width={64}
            height={64}
            alt="typescript"
          />
          <Image
            src="/image/toolkit/react.png"
            width={64}
            height={64}
            alt="react"
          />
          <Image
            src="/image/toolkit/next-js.png"
            width={64}
            height={64}
            alt="next-js"
          />
          <Image
            src="/image/toolkit/tailwind.png"
            width={64}
            height={64}
            alt="tailwind"
          />
          <Image
            src="/image/toolkit/figma.png"
            width={64}
            height={64}
            alt="figma"
          />
          <Image
            src="/image/toolkit/git.png"
            width={64}
            height={64}
            alt="git"
          />
          <Image
            src="/image/toolkit/expo.png"
            width={64}
            height={64}
            alt="expo"
          />
          <Image
            src="/image/toolkit/express-js.png"
            width={64}
            height={64}
            alt="express-js"
          />
          <Image
            src="/image/toolkit/laravel.png"
            width={64}
            height={64}
            alt="laravel"
          />
          <Image
            src="/image/toolkit/prisma.png"
            width={64}
            height={64}
            alt="prisma"
          />
          <Image
            src="/image/toolkit/boostrap.png"
            width={64}
            height={64}
            alt="boostrap"
          />
          <Image
            src="/image/toolkit/mysql.png"
            width={64}
            height={64}
            alt="mysql"
          />
          <Image
            src="/image/toolkit/php.png"
            width={64}
            height={64}
            alt="php"
          />
          <Image
            src="/image/toolkit/redux.png"
            width={64}
            height={64}
            alt="redux"
          />
          <Image
            src="/image/toolkit/axios.png"
            width={64}
            height={64}
            alt="axios"
          />
          <Image
            src="/image/toolkit/docker.png"
            width={64}
            height={64}
            alt="docker"
          />
        </div>
      </div>
    </section>
  );
}

export default SectionProject;
