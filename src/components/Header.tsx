"use client";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

export default function Header() {
    return (
        <header className={`z-[999] relative`}>
            <motion.div
                className={`fixed top-0 left-1/2 w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full flex items-center justify-center `}
                initial={{ y: -200, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
                transition={{ duration: 1, type: "spring" }}
            >
                <p>Hello</p>
            </motion.div>
            <nav className={`fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0`}>
                <ul>
                    {
                        links.map(link => (
                            <li key={link.hash} >
                                <Link href={link.hash}>
                                    {
                                        link.name
                                    }
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    );
}
