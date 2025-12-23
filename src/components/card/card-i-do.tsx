"use client";

import { cn } from "@/lib/utils";
import { Pin, ExternalLink } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

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
  expo = "Expo",
}

export interface IExperience {
  id?: string;
  name: string;
  date: string;
  tech: Tech[];
  desc?: string;
  pin?: boolean;
  professional: boolean;
  role?: string;
  company?: string;
  whatIDid?: string[];
  impact?: string;
  description?: string;
  image?: string;
  url?: string;
}

function CardIDo(props: IExperience) {
  const [lineClamp, setLineClamp] = useState(false);

  return (
    <div className="bg-white/5 backdrop-blur-md border border-blue-2/30 rounded-2xl p-5 shadow-xl transition-all hover:bg-white/10 hover:border-blue-2/50 space-y-3 relative cursor-pointer h-full">
      {props.pin && (
        <div className="absolute top-3 right-3 bg-blue-2/20 p-2 rounded-lg">
          <Pin className="w-4 h-4 text-blue-2" fill="currentColor" />
        </div>
      )}
      {/* Header: Role & Company */}
      <div>
        <h4 className="text-lg font-bold leading-tight text-blue-2">
          {props.name}
        </h4>
        {props.role && (
          <p className="text-white font-medium text-sm mt-1">
            {props.role} {props.company ? `at ${props.company}` : ""}
          </p>
        )}
        <p className="text-white/70 font-light text-xs mt-1">{props.date}</p>
      </div>

      {/* Description / What I Did */}
      <div className="space-y-2">
        {props.whatIDid && props.whatIDid.length > 0 ? (
          <ul className="list-disc list-inside text-sm text-gray-300 font-light space-y-1">
            {props.whatIDid.map((item, index) => (
              <li key={index} className="leading-snug">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p
            onClick={() => setLineClamp(!lineClamp)}
            className={cn(
              "text-gray-300 font-light text-sm cursor-pointer",
              lineClamp ? "" : "line-clamp-2"
            )}
          >
            {props.description}
          </p>
        )}
      </div>

      {/* Impact Section */}
      {props.impact && (
        <div className="bg-blue-2/10 backdrop-blur-sm p-3 rounded-lg border-l-2 border-blue-2">
          <p className="text-xs font-semibold text-blue-2 mb-1">Impact:</p>
          <p className="text-xs text-gray-300 italic leading-relaxed">
            &ldquo;{props.impact}&rdquo;
          </p>
        </div>
      )}

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1 pt-2">
        {props.tech.map((item, index) => (
          <span
            key={index}
            className="text-[10px] px-2 py-1 bg-blue-2/20 border border-blue-2/30 rounded-full text-blue-2 font-light hover:bg-blue-2 hover:text-white transition-colors"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default CardIDo;
