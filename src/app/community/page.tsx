"use client";
import { useSectionInView } from "@/src/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import SectionHeading from "@/src/components/SectionHeading";
import Circles from "@/public/circles.svg";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

export default function Community() {
    const ref = useSectionInView({
        sectionName: "Our Community",
        threshold: 0.3,
    });

    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);

    return (
        <section
            className={`relative text-zinc-600 body-font scroll-mt-28 mb-28 sm:mb-28 overflow-visible`}
            id="community"
            ref={ref}
        >
            <SectionHeading route="community">Our Community</SectionHeading>
            <Image src={Circles} alt={"Background Waves"} priority={true} className={`w-[50rem] opacity-90 xs:hidden absolute -z-[10] top-[-24.4375rem] left-[-31.7rem] max-w-full object-contain`} />
            <Image src={Circles} alt={"Background Waves"} priority={true} className={`w-[37.5rem] opacity-90 xs:hidden absolute -z-[10] top-[15.625rem] right-[-31.8125rem] max-w-full object-contain`} />
            <div className="container px-5 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        At NEMA Homecare, we pride ourselves on fostering a
                        professional community that embodies the essence of
                        unity and mutual respect. As a leading domiciliary care
                        provider, we understand the importance of creating a
                        supportive environment that resonates with the values of
                        a close-knit family. Our service users are not just
                        clients, but valued members of our community. We are
                        committed to delivering personalized care with utmost
                        compassion, ensuring that everyone feels acknowledged,
                        respected, and part of our NEMA family. Experience the
                        NEMA difference, where professional care meets familial
                        warmth.
                    </p>
                </div>
                <div className="flex flex-wrap items-center justify-center md:-m-2 -m-1">
                    <div className="flex flex-wrap w-2/5 opacity-1/2">
                        <motion.div
                            className="relative md:p-2 p-1 w-1/2 border border-white border-opacity-50 rounded-[60px] xs:hover:scale-150 md:blur-sm hover:blur-0 hover:scale-105 hover:z-20 transition-all duration-700 ease-cubic"
                            initial={{ y: 350, opacity: 0.05}}
                            animate={
                                isLoaded && isInView
                                    ? {
                                        WebkitMaskImage: visibleMask,
                                        maskImage: visibleMask,
                                        y: 0, opacity: 1
                                    }
                                    : {
                                        WebkitMaskImage: hiddenMask,
                                        maskImage: hiddenMask,
                                    }
                            }
                            transition={{ duration: 1, delay: 0.6 }}
                            viewport={{ once: true }}
                            onViewportEnter={() => setIsInView(true)}
                        >
                            <Image
                                alt="gallery"
                                className="w-full object-cover h-full filter grayscale-[5%] border border-white border-opacity-50 hover:filter-none object-center block rounded-[60px] xs:hover:scale-150 md:blur-sm hover:blur-0 hover:scale-105 transition-all duration-1000 ease-cubic"
                                src={`/officepic1.jpg`}
                                height={500}
                                width={300}
                                onLoad={() => setIsLoaded(true)}
                            />
                        </motion.div>
                        <motion.div
                            className="relative md:p-2 p-1 w-1/2 border border-white border-opacity-50 rounded-[60px] xs:hover:scale-150 md:blur-sm hover:blur-0 hover:scale-105 hover:z-20 transition-all duration-700 ease-cubic"
                            initial={{ y: 350, opacity: 0.05}}
                            animate={
                                isLoaded && isInView
                                    ? {
                                        WebkitMaskImage: visibleMask,
                                        maskImage: visibleMask,
                                        y: 0, opacity: 1
                                    }
                                    : {
                                        WebkitMaskImage: hiddenMask,
                                        maskImage: hiddenMask,
                                    }
                            }
                            transition={{ duration: 1, delay: 0.8 }}
                            viewport={{ once: true }}
                            onViewportEnter={() => setIsInView(true)}
                        >
                            <Image
                                alt="gallery"
                                className="w-full object-cover h-full filter grayscale-[5%] border border-white border-opacity-50 hover:filter-none object-center block rounded-[60px] xs:hover:scale-150 hover:blur-0 hover:scale-105 transition-all duration-1000 ease-cubic"
                                src={`/officepic2.jpg`}
                                height={501}
                                width={301}
                                onLoad={() => setIsLoaded(true)}
                            />
                        </motion.div>
                        <motion.div
                            className="relative md:p-2 p-1 w-full h-full border border-white border-opacity-50 rounded-[60px] xs:hover:scale-150 md:blur-sm hover:blur-0 hover:scale-105 hover:z-20 transition-all duration-700 ease-cubic"
                            initial={{ y: 350, opacity: 0.05}}
                            animate={
                                isLoaded && isInView
                                    ? {
                                        WebkitMaskImage: visibleMask,
                                        maskImage: visibleMask,
                                        y: 0, opacity: 1
                                    }
                                    : {
                                        WebkitMaskImage: hiddenMask,
                                        maskImage: hiddenMask,
                                    }
                            }
                            transition={{ duration: 1, delay: 1 }}
                            viewport={{ once: true }}
                            onViewportEnter={() => setIsInView(true)}
                        >
                            <Image
                                alt="gallery"
                                className="w-full h-full object-cover filter grayscale-[5%] border border-white border-opacity-50 hover:filter-none object-center block rounded-[60px] xs:hover:scale-150 hover:blur-0 hover:scale-105 transition-all duration-1000 ease-cubic"
                                src={`/officepic3.jpg`}
                                height={600}
                                width={360}
                                onLoad={() => setIsLoaded(true)}
                            />
                        </motion.div>
                    </div>
                    <div className="flex flex-wrap w-1/2 opacity-1/2">
                        <motion.div
                            className="relative md:p-2 p-1 w-full h-full border border-white border-opacity-50 rounded-[60px] xs:hover:scale-150 md:blur-sm hover:blur-0 hover:scale-105 hover:z-20 transition-all duration-700 ease-cubic"
                            initial={{ y: 350, opacity: 0.05}}
                            animate={
                                isLoaded && isInView
                                    ? {
                                        WebkitMaskImage: visibleMask,
                                        maskImage: visibleMask,
                                        y: 0, opacity: 1
                                    }
                                    : {
                                        WebkitMaskImage: hiddenMask,
                                        maskImage: hiddenMask,
                                    }
                            }
                            transition={{ duration: 1, delay: 1.2 }}
                            viewport={{ once: true }}
                            onViewportEnter={() => setIsInView(true)}
                        >
                            <Image
                                alt="gallery"
                                className="w-full h-full object-cover filter grayscale-[5%] border border-white border-opacity-50 hover:filter-none object-center block rounded-[60px] xs:hover:scale-150 hover:blur-0 hover:scale-105 transition-all duration-1000 ease-cubic"
                                src={`/officepic4.jpg`}
                                height={601}
                                width={361}
                                onLoad={() => setIsLoaded(true)}
                            />
                        </motion.div>
                        <motion.div
                            className="relative md:p-2 p-1 w-1/2 h-full border border-white border-opacity-50 rounded-[60px] xs:hover:scale-150 md:blur-sm hover:blur-0 hover:scale-105 hover:z-20 transition-all duration-700 ease-cubic"
                            initial={{ y: 350, opacity: 0.05}}
                            animate={
                                isLoaded && isInView
                                    ? {
                                        WebkitMaskImage: visibleMask,
                                        maskImage: visibleMask,
                                        y: 0, opacity: 1
                                    }
                                    : {
                                        WebkitMaskImage: hiddenMask,
                                        maskImage: hiddenMask,
                                    }
                            }
                            transition={{ duration: 1, delay: 1.4 }}
                            viewport={{ once: true }}
                            onViewportEnter={() => setIsInView(true)}
                        >
                            <Image
                                alt="gallery"
                                className="w-full object-cover h-[113%] filter grayscale-[5%] border border-white border-opacity-50 hover:filter-none object-center block rounded-[60px] xs:hover:scale-150 md:blur-sm hover:blur-0 hover:scale-105 transition-all duration-700 ease-cubic"
                                src={`/officepic5.jpg`}
                                height={502}
                                width={302}
                                onLoad={() => setIsLoaded(true)}
                            />
                        </motion.div>
                        <motion.div
                            className="relative md:p-2 p-1 w-1/2 h-full opacity-1/2 border border-white border-opacity-50 rounded-[60px] xs:hover:scale-150 md:blur-sm hover:blur-0 hover:scale-105 hover:z-20 transition-all duration-700 ease-cubic"
                            initial={{ y: 350, opacity: 0.05}}
                            animate={
                                isLoaded && isInView
                                    ? {
                                        WebkitMaskImage: visibleMask,
                                        maskImage: visibleMask,
                                        y: 0, opacity: 1
                                    }
                                    : {
                                        WebkitMaskImage: hiddenMask,
                                        maskImage: hiddenMask,
                                        y: 0, opacity: 1
                                    }
                            }
                            transition={{ duration: 1, delay: 1.6 }}
                            viewport={{ once: true }}
                            onViewportEnter={() => setIsInView(true)}
                        >
                            <Image
                                alt="gallery"
                                className="w-full object-cover h-[113%] filter grayscale-[5%] border border-white border-opacity-50 hover:filter-none object-center block rounded-[60px] xs:hover:scale-150 md:blur-sm hover:blur-0 hover:scale-105 transition-all duration-1000 ease-cubic"
                                src={`/officepic5.jpg`}
                                height={503}
                                width={303}
                                onLoad={() => setIsLoaded(true)}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
