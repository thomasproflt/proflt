import { useEffect, useRef, useState } from "react";

export default function useFadeOutOnScroll(start = 0.75) {
    const ref = useRef<HTMLDivElement>(null);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;

            const rect = ref.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const fadeStart = windowHeight * start;

            const progress = (rect.bottom - fadeStart) / (windowHeight - fadeStart);

            const fade = Math.min(Math.max(progress, 0), 1);

            setOpacity(fade);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [start]);

    return { ref, opacity };
}