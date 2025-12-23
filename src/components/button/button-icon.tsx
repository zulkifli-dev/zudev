import Image, { ImageProps } from "next/image";
import Link from "next/link";
import { HTMLAttributeAnchorTarget } from "react";
import { twMerge } from "tailwind-merge";

const variants = {
  primary:
    "bg-gradient-to-bl from-blue-1 to-blue-2 hover:from-blue-2 hover:to-blue-2",
  secondary:
    "bg-gradient-to-bl from-white/50 to-gray-200/50 backdrop-blur-lg hover:from-blue-1 hover:to-blue-2",
};

function ButtonIcon({
  href,
  variant = "primary",
  target,
  ...props
}: ImageProps & {
  href: string;
  variant?: keyof typeof variants;
  target?: HTMLAttributeAnchorTarget;
}) {
  return (
    <Link
      href={href}
      className={twMerge(" p-2 rounded-md shadow ", variants[variant])}
      target={target}
    >
      <Image width={24} height={24} {...props} />
    </Link>
  );
}

export default ButtonIcon;
