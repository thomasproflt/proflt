import { motion, useScroll, useTransform } from "framer-motion";

const ScrollText = ({ children }) => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 0.3], [40, 0]);

    return (
        <motion.div style={{ y }}>
            {children}
        </motion.div>
    );
};
