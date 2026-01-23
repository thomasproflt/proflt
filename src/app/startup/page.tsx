import Image from "next/image";
import Navbar from "../components/navbar";
import ImgSwit from "@/public/startup/switzerland.jpg";

export default function Startup() {
    return (
        <div className="min-h-screen items-center justify-center font-sans overflow-x-hidden">
            <Navbar />
            <div className="flex max-w-full w-full max-h-[50rem] h-full">
                <Image
                    className="relative w-full max-w-full max-h-full object-cover select-none pointer-events-none"
                    src={ImgSwit}
                    alt="Switzerland"
                    width={1000}
                    height={10}
                    priority
                />
                <div className="absolute min-h-screen bg-gradient-to-t from-[hsla(0,0%,10%,1)] via-[hsla(0,0%,10%,0.6)] to-transparent w-full h-full" />
            </div>
            <section className="flex container mx-auto min-h-screen w-full max-w-full flex-col items-center justify-center py-32 px-0 sm:items-center sm:justify-start">
                dadadads
            </section>
        </div>
    );
}
