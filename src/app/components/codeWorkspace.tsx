"use client";
import { useState } from "react";

const FILES = {
  "main.tsx": `// Minha abordagem foca em interfaces declarativas
export default function Project() {
  return (
    <div className="p-8 bg-zinc-900 rounded-3xl">
      <h1>Performance & Design</h1>
      <p>Código limpo e escalável.</p>
    </div>
  );
}`,
  "data.ts": `// Tipagem rigorosa para evitar erros em produção
export interface ServiceConfig {
  speed: "fast" | "blazing";
  responsive: boolean;
  seoOptimized: boolean;
}

const config: ServiceConfig = {
  speed: "blazing",
  responsive: true,
  seoOptimized: true
};`,
  "styles.css": `/* CSS moderno focado em utilitários */
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}`,
  "logic.js": `// Lógica resiliente para aplicações modernas
const handleServiceRequest = async (data) => {
  console.log("Processando requisição de serviço...");
  return await db.services.create({ data });
};`,
  ".env": `# Configurações de ambiente seguras
DATABASE_URL="postgresql://user:password@localhost:5432/portfolio"
NEXT_PUBLIC_ANALYTICS_ID="UA-123456-7"`,
};

type FileKey = keyof typeof FILES;

export default function CodeWorkspace() {
  const [activeFile, setActiveFile] = useState<FileKey>("main.tsx");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border border-zinc-800 rounded-2xl overflow-hidden bg-[#0F0F0F] shadow-2xl">
      <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-[#1A1A1A]">
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-3 px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-sm text-zinc-300 hover:text-white transition-colors"
          >
            <span className="font-mono text-blue-400">{"</>"}</span>
            {activeFile}
            <svg
              className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl z-50 overflow-hidden">
              {(Object.keys(FILES) as FileKey[]).map((file) => (
                <button
                  key={file}
                  onClick={() => {
                    setActiveFile(file);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 text-sm transition-colors hover:bg-zinc-800 ${
                    activeFile === file
                      ? "text-blue-400 bg-zinc-800/50"
                      : "text-zinc-400"
                  }`}
                >
                  {file}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-4">
          <div className="px-3 py-1 bg-zinc-800 rounded text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
            Production Mode
          </div>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] min-h-[400px] lg:min-h-[500px]">
        <div className="relative bg-[#111] overflow-hidden group">
          <pre className="p-4 sm:p-6 text-sm font-mono leading-relaxed overflow-auto h-full max-h-[320px] sm:max-h-[400px] lg:max-h-[500px] custom-scrollbar">
            <code className="text-zinc-400">
              {FILES[activeFile].split("\n").map((line, i) => (
                <div key={i} className="flex group/line hover:bg-white/[0.02]">
                  <span className="w-12 text-zinc-600 text-right pr-6 select-none border-r border-zinc-800/50 mr-4">
                    {i + 1}
                  </span>
                  <span className="flex-1 whitespace-pre">{line}</span>
                </div>
              ))}
            </code>
          </pre>
          <div className="absolute bottom-4 right-4 text-[10px] text-zinc-600 font-mono italic">
            UTF-8 | LF | {activeFile.split(".").pop()}
          </div>
        </div>

        <aside className="p-6 sm:p-8 border-l border-zinc-800 bg-[#1A1A1A] flex flex-col">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-8">
              <div>
                <h3 className="text-xl font-medium text-white tracking-tight">
                  Estratégia de Código
                </h3>
                <p className="text-sm text-zinc-400 font-medium">
                  Full-stack Workflow
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-zinc-200 mb-2">
                  Arquitetura de Qualidade
                </h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Minha abordagem foca na criação de aplicações onde o código é
                  tão refinado quanto a interface. Priorizo escalabilidade,
                  tipagem estrita com TypeScript e performance otimizada para o
                  usuário final.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  { label: "Componentes Modulares", color: "bg-green-500" },
                  { label: "Segurança de Dados", color: "bg-yellow-500" },
                  { label: "SEO & Web Vitals", color: "bg-red-500" },
                  { label: "Clean Code (SOLID)", color: "bg-blue-500" },
                ].map((feature) => (
                  <div
                    key={feature.label}
                    className="flex items-center gap-3 p-3 rounded-xl bg-zinc-800/30 border border-zinc-800 hover:border-zinc-700 transition-all"
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${feature.color} shadow-[0_0_8px_rgba(255,255,255,0.2)]`}
                    />
                    <span className="text-xs text-zinc-300">
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button className="w-full mt-8 py-4 rounded-xl bg-[hsl(0,0%,10%)] border border-[hsla(0,0%,100%,0.1)]  text-white text-sm font-semibold hover:bg-[hsl(0,0%,13%)] active:bg-[hsl(0,0%,10%)] transition-all">
            Ver Processo Completo
          </button>
        </aside>
      </div>
    </div>
  );
}
