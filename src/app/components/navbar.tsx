"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 z-50 bg-[hsla(0,0%,10%,0.8)] backdrop-blur-lg">
      <div className="flex items-center justify-between px-4 sm:px-10 lg:px-20 py-4">
        {/* Logo */}
        <Image
          className="select-none pointer-events-none"
          src="/favicon.svg"
          alt="Logo"
          width={45}
          height={16}
        />

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-5">
          <NavLinks />
        </div>

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5"
          aria-label="Abrir menu"
        >
          <span
            className={`h-[2px] w-6 bg-zinc-300 transition-all ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-zinc-300 transition-all ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-zinc-300 transition-all ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-6 px-6 py-8 bg-[hsl(0,0%,10%)] border-t border-white/10">
          <NavLinks onClick={() => setOpen(false)} />
        </div>
      </div>
    </nav>
  );
}

/* ===== LINKS REUTILIZÁVEIS ===== */

function NavLinks({ onClick }: { onClick?: () => void }) {
  return (
    <>
      <Link
        href="/#home"
        onClick={onClick}
        className="text-[15px] text-zinc-300 hover:text-zinc-400 transition"
      >
        Início
      </Link>

      <Link
        href="/#about"
        onClick={onClick}
        className="text-[15px] text-zinc-300 hover:text-zinc-400 transition"
      >
        Sobre mim
      </Link>

      <Link
        href="/#recommendation"
        onClick={onClick}
        className="text-[15px] text-zinc-300 hover:text-zinc-400 transition"
      >
        Recomendações
      </Link>

      <Link
        href="https://wa.me/5566996399303?text=Ol%C3%A1%2C%20olhei%20seu%20portf%C3%B3lio%20e%20notei%20um%20grande%20valor!"
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className="mt-2 flex items-center justify-center text-[14px] border dark:border-[hsla(0,0%,100%,0.2)] dark:bg-[hsla(0,0%,14%,0.5)] dark:hover:bg-[hsl(0,0%,17%)] px-4 py-3 rounded-2xl transition"
      >
        Comece agora
      </Link>
    </>
  );
}
