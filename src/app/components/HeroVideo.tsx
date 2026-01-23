"use client";

import { useEffect, useRef } from "react";

interface HeroVideoProps {
  src: string;
}

export function HeroVideo({ src }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;

    if (!video || !section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.3, // 30% visível já é suficiente
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
      {/* VIDEO BACKGROUND */}
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* OVERLAY (opcional para contraste) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[hsla(0,0%,10%,1)] via-[hsla(0,0%,10%,0)] to-[hsla(0,0%,10%,0)]" />

      {/* CONTENT FROM THE HERO */}
      <div className="relative z-10 flex flex-col items-center text-center">
      </div>
    </section>
  );
}
