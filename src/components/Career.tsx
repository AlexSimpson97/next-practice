"use client"
import Image from "next/image";
import { CareersData } from "@/src/lib/data";
import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

type CareerProps = (typeof CareersData)[number];

export default function Career({title, description, focus, imageUrl, imageDesc}: CareerProps) {
    const careerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: careerRef,
        offset: ["0 1", "1.33 1"],
});

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    return (
        <motion.div
            className={`mb-3 sm:mb-8 last:mb-0`}
            ref={careerRef}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }} >
            <section className={`relative  max-w-[75rem] border-black/5 rounded-xl overflow-hidden sm:pr-8 sm:h-[20rem] group-even:pl-8 hover:bg-zinc-300/[0.7] transition-all duration-700 ease-custom`} >
                <div className={`pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[39.1rem]`} >
                    <h3 className={`text-2xl font-semibold`} >{title}</h3>
                    <p className={`mt-2 leading-relaxed text-zinc-600`} >{description}</p>
                    <ul className={`flex flex-wrap gap-2 mt-auto`} >
                        Skills you'll learn:
                        {
                            focus.map((skill, index) => (
                                <React.Fragment key={index}>
                                    <li key={index} className={`bg-green-600/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full`} >{skill}</li>
                                </React.Fragment>
                            ))
                        }
                    </ul>
                </div>
                <Image src={imageUrl} alt={imageDesc} width={"452"} height={"286"} quality={90} className={`xs:hidden object-cover absolute top-8 -right-[0rem] w-[28.25rem] rounded-t-lg group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-1 group-hover:scale-105 transition-all duration-700 ease-custom group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-1 group-even:right-[initial] group-even:-left-[2.1rem]`} />
            </section>
        </motion.div>
    )
}

