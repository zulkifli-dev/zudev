import Image, { ImageProps } from "next/image";
import React from "react";

function ButtonIconTitle(props: ImageProps & { href?: string }) {
  return (
    <a
      href={props.href || ""}
      className="bg-gradient-to-bl from-blue-1 to-blue-2 hover:from-blue-2 hover:to-blue-2 p-1 rounded-md shadow w-[60px] h-[50px] aspect-square flex flex-col justify-center items-center gap-1"
    >
      <Image width={24} height={24} {...props} />
      <p className="text-xs">{props.title}</p>
    </a>
  );
}

export default ButtonIconTitle;
