import Image, { ImageProps } from "next/image";
import React from "react";

function ImageStart(props: ImageProps, isFavorit?: boolean) {
  return (
    <div className="relative">
      <Image src="/image/toolkit/html.png" width={64} height={64} alt="html" />
    </div>
  );
}

export default ImageStart;
