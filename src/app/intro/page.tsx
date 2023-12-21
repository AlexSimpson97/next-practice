"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import danSenior from "../../../public/dan-senior.jpg";
import nemaLogo from "../../../public/nemaLogo.png";
import Link from "next/link";
import { BsArrowRight, BsFacebook, BsTelephone } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { useSectionInView } from "@/src/lib/hooks";
import { useActiveSectionContext } from "@/src/context/active-section-context";

export default function Intro() {
    const  ref  = useSectionInView({sectionName:"Home", threshold:0.2});
    
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    return (
        <section className={`mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[1000rem]`} id="home" ref={ref} >
            <div className={`flex items-center justify-center`}>
                <motion.div
                    className={`flex items-center justify-center`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "tween", duration: 0.6 }}
                >
                    <Image
                        src={nemaLogo}
                        alt="NEMA Logo"
                        width={"203"}
                        height={"76.97"}
                        quality={"95"}
                        priority={true}
                        className={` object-cover mb-6`}
                    />
                </motion.div>
            </div>
            <motion.h1
                className={` mb-10 bt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-zinc-600`}
                initial={{ opacity: 0, y: 300 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", duration: 0.6 }}
            >
                {/* <span>Caring for the old is easy</span> */}
                <span className={`font-thin`}>
                    &quot;I remain grateful for your{" "}
                    <span className={`font-bold`}>compassionate</span> care of
                    my dear wife. Her final days were filled with{" "}
                    <span className={`font-light italic`}>
                        dignity and warmth
                    </span>
                    . Your kindness will{" "}
                    <span className={`font-bold underline`}>forever</span> echo
                    in our hearts.&quot; - Ben (ex-client&apos;s partner)
                </span>
            </motion.h1>

            <motion.div 
                className={`flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium`} 
                initial={{ opacity: 0, y: 300 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", duration: 0.6, delay: 0.1 }}
                >

                <Link href="#contact" className={`group bg-zinc-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-zinc-950 transition-all duration-700 active:scale-105`} onClick={() => {
                    setActiveSection("Contact Us");
                    setTimeOfLastClick(Date.now());
                }} >
                    Contact us <BsArrowRight className={`group-hover:translate-x-1 transition-all duration-700 text-zinc-300`} />
                </Link>

                <a className={`group bg-zinc-100 text-zinc-600 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:text-zinc-950 hover:scale-110 hover:bg-white transition-all duration-700 active:scale-105 cursor-pointer borderBlack`} >
                    Download service list <HiDownload className={`group-hover:translate-y-[0.15rem] transition-all duration-700`} />
                </a>

                <a href="tel:02079521480" className={`group bg-zinc-100 text-zinc-600 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:text-zinc-950 hover:scale-110 hover:bg-white transition-all duration-700 active:scale-105 cursor-pointer borderBlack`} >
                    <BsTelephone className={`group-hover:scale-125 transition-all duration-1000`} />
                </a>

                <a href="https://web.facebook.com/Nema-Home-Care-Limited-144725949460730/?_rdc=1&_rdr" target="_blank" className={`group bg-zinc-100 text-zinc-600 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:text-zinc-950 hover:scale-110 hover:bg-white transition-all duration-700 active:scale-105 cursor-pointer borderBlack`} >
                    <BsFacebook className={`group-hover:scale-125 transition-all duration-1000`} />
                </a>
            </motion.div>
        </section>
    );
}
