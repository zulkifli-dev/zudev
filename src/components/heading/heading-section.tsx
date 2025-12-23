import React, { PropsWithChildren } from "react";

function HeadingSection({ children }: PropsWithChildren) {
  return <h2 className="text-2xl md:text-3xl font-semibold">{children}</h2>;
}

export default HeadingSection;
