"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Button from "@/components/button/button";

interface ProjectDetailProps {
  params: {
    id: string;
  };
}

// Import experiences data
import { experiences } from "@/components/section/section-project";

export default function ProjectDetail({ params }: ProjectDetailProps) {
  const project = experiences.find(
    (p) =>
      (p.id || p.name.toLowerCase().replace(/\s+/g, "-")) ===
      decodeURIComponent(params.id)
  );

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto p-4 flex flex-col gap-4 lg:h-screen h-auto">
        <Link
          href="/#project"
          className="flex items-center gap-2 text-blue-2 hover:text-blue-1 mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Proyek
        </Link>
        <div className="text-center py-20">
          <h1 className="text-4xl font-bold text-white mb-4">
            Proyek Tidak Ditemukan
          </h1>
          <p className="text-gray-300">
            Maaf, proyek yang Anda cari tidak ada.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 flex flex-col gap-4">
      <Link
        href="/#project"
        className="flex items-center gap-2 text-blue-2 hover:text-blue-1 mb-4"
      >
        <ArrowLeft className="w-4 h-4" />
        Kembali ke Proyek
      </Link>

      <div className="bg-dasar rounded-2xl p-6 md:p-8 space-y-6">
        {/* Header */}
        <div>
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-blue-2 mb-2">
                {project.name}
              </h1>
              {project.role && (
                <p className="text-white font-medium">
                  {project.role}
                  {project.company && ` at ${project.company}`}
                </p>
              )}
              <p className="text-white/70">{project.date}</p>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4">
            {project.whatIDid && project.whatIDid.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-blue-2 mb-3">
                  Apa yang Saya Lakukan
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {project.whatIDid.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.description && !project.whatIDid?.length && (
              <div>
                <h3 className="text-xl font-semibold text-blue-2 mb-3">
                  Deskripsi
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>
            )}

            {project.impact && (
              <div className="bg-blue-2/10 backdrop-blur-sm p-4 rounded-lg border-l-4 border-blue-2">
                <p className="text-sm font-semibold text-blue-2 mb-2">
                  Impact Proyek
                </p>
                <p className="text-gray-300 italic">{project.impact}</p>
              </div>
            )}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="border-t border-white/10 pt-6">
          <h3 className="text-xl font-semibold text-blue-2 mb-3">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-2/20 border border-blue-2/30 rounded-full text-blue-2 text-sm font-light hover:bg-blue-2 hover:text-white transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Image Section */}
        {project.image && (
          <div className="border-t border-white/10 pt-6">
            <h3 className="text-xl font-semibold text-blue-2 mb-3">
              Tampilan Proyek
            </h3>
            <div className="relative w-full h-96 rounded-lg overflow-hidden border border-blue-2/30">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}

        {/* CTA Section */}
        {project.url && (
          <div className="border-t border-white/10 pt-6">
            <Button
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 text-lg justify-center md:justify-start"
            >
              Kunjungi Proyek
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
