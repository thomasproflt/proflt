import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-50 font-sans dark:bg-[#0D0D0D] px-4 sm:px-10 lg:px-[10rem] py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 justify-center justify-items-center mb-[5rem]">
        {/**
         * <div className="flex flex-col gap-1">
          <li className="list-none">
            <a
              href="#"
              className="text-[14px] text-zinc-400 hover:text-zinc-200 transition-all duration-300"
            >
              Terms
            </a>
          </li>
          <li className="list-none">
            <a
              href="#"
              className="text-[14px] text-zinc-400 hover:text-zinc-200 transition-all duration-300"
            >
              Privacy
            </a>
          </li>
        </div>
        <div className="flex flex-col gap-1">
          <li className="list-none">
            <a
              href="#"
              className="text-[14px] text-zinc-400 hover:text-zinc-200 transition-all duration-300"
            >
              AI Studio
            </a>
          </li>
          <li className="list-none">
            <a
              href="#"
              className="text-[14px] text-zinc-400 hover:text-zinc-200 transition-all duration-300"
            >
              Gemini App
            </a>
          </li>
          <li className="list-none">
            <a
              href="#"
              className="text-[14px] text-zinc-400 hover:text-zinc-200 transition-all duration-300"
            >
              Documentation
            </a>
          </li>
          <li className="list-none">
            <a
              href="#"
              className="text-[14px] text-zinc-400 hover:text-zinc-200 transition-all duration-300"
            >
              Pricing
            </a>
          </li>
        </div>
         */}
        <div className="flex flex-col gap-1">
          <li className="list-none">
            <Link
              href="/brand"
              className="text-[14px] text-zinc-400 hover:text-zinc-200 transition-all duration-300"
            >
              Marca
            </Link>
          </li>
        </div>
        <div className="flex flex-col gap-1">
          <li className="list-none">
            <a
              href="https://www.instagram.com/thomasproflt/"
              target="_blank"
              rel="noopener"
              className="text-[14px] text-zinc-400 hover:text-zinc-200 transition-all duration-300"
            >
              Instagram
            </a>
          </li>
          <li className="list-none">
            <a
              href="https://www.linkedin.com/in/thomasproflt/"
              target="_blank"
              rel="noopener"
              className="text-[14px] text-zinc-400 hover:text-zinc-200 transition-all duration-300"
            >
              LinkIn
            </a>
          </li>
          <li className="list-none">
            <a
              href="https://github.com/thomasproflt"
              target="_blank"
              rel="noopener"
              className="text-[14px] text-zinc-400 hover:text-zinc-200 transition-all duration-300"
            >
              GitHub
            </a>
          </li>
          <li className="list-none">
            <a
              href="https://discord.gg/T3YsS7twAn"
              target="_blank"
              rel="noopener"
              className="text-[14px] text-zinc-400 hover:text-zinc-200 transition-all duration-300"
            >
              Discord (Brand)
            </a>
          </li>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <Image
          className="select-none pointer-events-none"
          src="/favicon.svg"
          alt="AI"
          width={40}
          height={10}
          priority
        />
        <p className="text-[14px] text-light text-zinc-400">© 2026 Thomas.</p>
      </div>
    </footer>
  );
}
