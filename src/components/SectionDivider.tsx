"use client"
import { motion } from 'framer-motion';

export default function SectionDivider() {
    return (
        <motion.div className={`bg-zinc-300 my-24 h-16 w-1 rounded-full hidden sm:block`}
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.6, delay: 0.3 }} >
            
        </motion.div>
    )
}

