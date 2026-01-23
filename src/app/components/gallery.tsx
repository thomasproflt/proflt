"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const photos = [
  { src: "/gallery/d.jpg", h: "h-[250px]" },
  { src: "/gallery/azwedo-l-lc-uSx99gjoSoc-unsplash.jpg", h: "h-[400px]" },
  { src: "/gallery/domains-desktop-1500w.webp", h: "h-[320px]" },
  { src: "/gallery/Sellora-Featured.jpg", h: "h-[450px]" },
  { src: "/gallery/solidpixels-iq2RzBMj-Wg-unsplash.jpg", h: "h-[300px]" },
  { src: "/gallery/tai-bui-8yK2GuwTVWs-unsplash.jpg", h: "h-[380px]" },
  { src: "/gallery/azwedo-l-lc-uSx99gjoSoc-unsplash.jpg", h: "h-[280px]" },
  { src: "/gallery/zyro-bRkEc7CQ41w-unsplash.jpg", h: "h-[420px]" },
  { src: "/gallery/domains-desktop-1500w.webp", h: "h-[350px]" },
  { src: "/gallery/tai-bui-8yK2GuwTVWs-unsplash.jpg", h: "h-[420px]" },
];

export default function Gallery() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden bg-[hsl(0,0%,10%)]">
      <div className="absolute min-h-screen max-w-full max-h-full w-screen insent-0 bg-gradient-to-t from-[hsla(0,0%,10%,1)] via-[hsla(0,0%,10%,0.9)] to-transparent z-50" />
      <div className="p-4 w-full h-full">
        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-2 [column-fill:balance]">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`relative mb-4 w-full ${photo.h} break-inside-avoid rounded-[1rem] overflow-hidden border border-white/5 bg-zinc-900/30 group transition-transform duration-500`}
            >
              <Image
                src={photo.src}
                alt={`Gallery visual ${index}`}
                fill
                className="object-cover opacity-100"
                sizes="(max-width: 768px) 50vw, 20vw"
                priority={index < 6}
              />

              <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-white/10 pointer-events-none" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
