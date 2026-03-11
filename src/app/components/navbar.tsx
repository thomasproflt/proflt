"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 z-50 bg-[#0D0D0D]">
      <div className="flex items-center justify-center px-4 sm:px-10 lg:px-20 py-5">

        {/* Desktop menu */}
        <div className="hidden md:flex items-center justify-center gap-10">
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
        className="text-[15px] font-semibold text-zinc-300 hover:text-zinc-400 transition-all duration-500"
      >
        Início
      </Link>

      <Link
        href="/resume#home"
        onClick={onClick}
        className="text-[15px] font-semibold text-zinc-300 hover:text-zinc-400 transition-all duration-500"
      >
        Resumo
      </Link>

      <Link
        href="/brand#home"
        onClick={onClick}
        className="text-[15px] font-semibold text-zinc-300 hover:text-zinc-400 transition-all duration-500"
      >
        Marca
      </Link>

      <Link
        href="/right-choice#home"
        onClick={onClick}
        className="text-[15px] font-semibold text-zinc-300 hover:text-zinc-400 transition-all duration-500"
      >
        Escolha Certa
      </Link>

      <Link
        href="/playbook#home"
        onClick={onClick}
        className="text-[15px] font-semibold text-zinc-300 hover:text-zinc-400 transition-all duration-500"
      >
        Playbook
      </Link>

      <Link
        href="/contact#home"
        onClick={onClick}
        className="text-[15px] font-semibold text-zinc-300 hover:text-zinc-400 transition-all duration-500"
      >
        Contato
      </Link>

      <Link
        href="/#work"
        onClick={onClick}
        className="text-[15px] font-semibold text-zinc-300 hover:text-zinc-400 transition-all duration-500"
      >
        Trabalho
      </Link>
    </>
  );
}
