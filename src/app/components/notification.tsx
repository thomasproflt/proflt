"use client";

import { motion, AnimatePresence } from "framer-motion";

interface NotificationProps {
    show: boolean;
    type: "success" | "error";
    message: string;
}

export default function Notification({
    show,
    type,
    message
}: NotificationProps) {

    return (
        <AnimatePresence>

            {show && (

                <motion.div
                    initial={{
                        opacity: 0,
                        x: 120
                    }}

                    animate={{
                        opacity: 1,
                        x: 0
                    }}

                    exit={{
                        opacity: 0,
                        x: 120
                    }}

                    transition={{
                        duration: 0.35
                    }}

                    className={`
                        fixed top-6 right-4 md:right-6 z-[9999]
                        flex items-center gap-3
                        min-w-[280px] max-w-[90vw]
                        px-5 py-4 rounded-2xl
                        border backdrop-blur-md
                        shadow-2xl
                        ${type === "success"
                            ? "bg-green-900/80 border-green-500/40"
                            : "bg-red-900/80 border-red-500/40"
                        }
                    `}
                >

                    <div
                        className={`
                            w-3 h-3 rounded-full
                            ${type === "success"
                                ? "bg-green-400"
                                : "bg-red-400"
                            }
                        `}
                    />

                    <p className="text-sm md:text-[15px] text-white font-medium">
                        {message}
                    </p>

                </motion.div>
            )}

        </AnimatePresence>
    );
}