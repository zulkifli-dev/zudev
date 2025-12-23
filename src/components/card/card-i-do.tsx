"use client";

import { cn } from "@/lib/utils";
import { Pin } from "lucide-react";
import { useState } from "react";

export enum Tech {
  codeigniter = "Codeigniter",
  mysql = "MySQL",
  php = "PHP",
  bootstrap = "Bootstrap",
  python = "Python",
  opencv = "OpenCV",
  midtrans = "Midtrans",
  reactnative = "React Native",
  axios = "Axios",
  javascript = "JavaScript",
  typescript = "TypeScript",
  react = "React",
  nextjs = "Nextjs.js",
  tailwind = "Tailwind CSS",
  zustand = "Zustand",
  framermotion = "Framer Motion",
  googlemap = "Google Map Api",
  firebase = "Firebase",
  arduino = "Arduino",
  mit = "MIT App Inventor",
  strapi = "Strapi",
  prisma = "Prisma",
  laravel = "Laravel",
  express = "Express.js",
  docker = "Docker",
  nodejs = "Node.js",
}

export interface IExperience {
  name: string;
  date: string;
  tech: Tech[];
  desc?: string;
  fiture: string[];
  pin?: boolean;
  description?: string;
}

function CardIDo(props: IExperience) {
  const [lineClamp, setLineClamp] = useState(false);
  return (
    <div className="bg-gradient-to-bl from-blue-1/50 to-blue-2/50 rounded-lg p-5 space-y-2 relative">
      {props.pin && (
        <span className="absolute rounded-md top-2 right-2  rotate-45">
          <Pin size={20} />
        </span>
      )}
      <h4 className="text-base font-semibold">{props.name}</h4>
      <p className="text-white  font-light text-sm opacity-80 line-clamp-2">
        {props.date}
        {props.desc ? ", " + props.desc : ""}
      </p>
      <p
        onClick={() => setLineClamp(!lineClamp)}
        className={cn(
          "text-white font-light text-sm cursor-pointer",
          lineClamp ? "" : "line-clamp-2"
        )}
      >
        {" "}
        {props.description}
      </p>
      <div className="flex flex-wrap gap-1">
        {props.tech.map((item) => (
          <span className="text-[8pt] p-[2px] bg-white rounded text-black opacity-80 hover:opacity-100">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default CardIDo;
