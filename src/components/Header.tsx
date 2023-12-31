"use client";
import { links } from "@/src/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation"; // For getting the pathname
// import { useContext, useState } from "react";
import { useActiveSectionContext } from "@/src/context/active-section-context";
import clsx from "clsx";

export default function Header() {
    const { activeSection, setActiveSection, setTimeOfLastClick } =
        useActiveSectionContext();

    const pathGetter = usePathname();

    // const [activeSection, setActiveSection] = useState('Home');

    return (
        <header className={`z-[999] relative`}>
            <motion.div
                className={`fixed top-0 left-1/2 w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full flex items-center justify-center xs:h-[5rem] xs:bg-zinc-100 xs:bg-opacity-80 xs:backdrop-blur-[0.5rem]`}
                initial={{ y: -200, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
                transition={{ duration: 1, type: "spring" }}
            >
                {/* <p>Hello</p> */}
            </motion.div>
            <nav
                className={`flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 xs:top-[1.85rem]`}
            >
                <ul
                    className={`flex items-center flex-wrap justify-center gap-y-1 text-[0.9rem] font-medium text-zinc-500 sm:w-[initial] sm:flex-nowrap sm:gap-5 w-[22rem]`}
                >
                    {links.map((link) => (
                        <motion.li
                            className={
                                link.xsClass === "hidden"
                                    ? `xs:hidden h-3/4 flex items-center justify-center relative`
                                    : `h-3/4 flex items-center justify-center relative`
                            }
                            key={link.hash}
                            initial={{ y: -350, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <Link
                                className={clsx(
                                    `flex w-full items-center justify-center px-3 py-3 hover:text-zinc-950 font-normal`,
                                    {
                                        "text-zinc-900":
                                            activeSection === link.name,
                                    }
                                )}
                                href={pathGetter === "/" ? link.hash : `/${link.route}`}

                                onClick={() => {
                                    setActiveSection(link.name);
                                    setTimeOfLastClick(Date.now());
                                }}
                            >
                                {link.name}

                                {link.name === activeSection && (
                                    <motion.span
                                        className={`bg-zinc-200 xs:bg-zinc-300 rounded-full absolute inset-0 -z-10`}
                                        layoutId="activeSection"
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 30,
                                        }}
                                    ></motion.span>
                                )}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
