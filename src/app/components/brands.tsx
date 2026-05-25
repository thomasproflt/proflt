"use client";

import Image from "next/image";
import ImgBrand1 from "@/public/brands/Subtract.png";
import ImgBrand2 from "@/public/brands/Bolt-Pharma-brand.svg";

const companiesLogo = [
    { name: "Aetheris AE", logo: ImgBrand1 },
    { name: "Bolt Pharma", logo: ImgBrand2 },
    { name: "Aetheris AE", logo: ImgBrand1 },
    { name: "Bolt Pharma", logo: ImgBrand2 },
    { name: "Aetheris AE", logo: ImgBrand1 },
    { name: "Bolt Pharma", logo: ImgBrand2 },
    { name: "Aetheris AE", logo: ImgBrand1 },
];

export default function Brands() {
    return (
        <section className="relative z-30 w-full -mb-20">

            {/* background da faixa */}
            <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-900" />

            <div className="relative py-10">

                <div className="overflow-hidden w-[100%] relative select-none">

                    {/* gradient left */}
                    <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-zinc-100 dark:from-zinc-900 to-transparent" />

                    {/* logos - animação CSS pura */}
                    <div className="flex marquee-infinite">
                        {[...companiesLogo, ...companiesLogo, ...companiesLogo].map((company, index) => (
                            <div key={index} className="flex-shrink-0 mx-11 items-center justify-center flex">
                                <Image
                                    src={company.logo}
                                    alt={company.name}
                                    width={80}
                                    height={80}
                                    className="opacity-70 pointer-events-none"
                                    draggable={false}
                                />
                            </div>
                        ))}
                    </div>

                    {/* gradient right */}
                    <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-zinc-100 dark:from-zinc-900 to-transparent" />

                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-33.33%);
                    }
                }
                
                .marquee-infinite {
                    animation: marquee 30s linear infinite;
                    width: fit-content;
                }
                
                .marquee-infinite:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}