import { LinkHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

function Button({
  className,
  ...props
}: LinkHTMLAttributes<HTMLAnchorElement> & { target?: string }) {
  return (
    <a
      href={props.href || ""}
      className={twMerge(
        "bg-gradient-to-bl from-blue-1 to-blue-2 p-2 rounded-md shadow hover:from-blue-2 hover:to-blue-2",
        className
      )}
      {...props}
    >
      {props.children}
    </a>
  );
}

export default Button;
