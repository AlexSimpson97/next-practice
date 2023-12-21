"use client"
import React from "react";
import Career from "@/src/components/Career";
import SectionHeading from "@/src/components/SectionHeading";
import { CareersData } from "@/src/lib/data";
import { useSectionInView } from "@/src/lib/hooks";
import Image from 'next/image';
import Waves2 from "@/public/wavelines2.svg";
import Link from "next/link";

export default function Careers() {
    const  ref  = useSectionInView({sectionName:"Careers", threshold:0.2});
    return (
        <section className={`relative flex flex-col items-center xs:hidden scroll-mt-28 mb-28 sm:mb-28 overflow-visible`} id="careers" ref={ref} >
            <SectionHeading route="careers" >Careers</SectionHeading>
            <Image src={Waves2} alt={"Background Waves"} priority={true} className={`rotate-180 w-[60rem] opacity-90 xs:hidden absolute -z-[10] top-[-12.7rem] left-[-22.7rem] max-w-full object-contain`} />
            <Image src={Waves2} alt={"Background Waves"} priority={true} className={`opacity-90 w-[60rem] xs:hidden absolute -z-[10] top-[-12.7rem] right-[-22.4rem] max-w-full object-contain`} />
            <div
                className={`p-2 mb-24 md:mb-0 lg:mb-8 sm:p-0 text-zinc-700 max-w-[60rem] text-center leading-10 scroll-mt-28`}
            >
                <p className={`md:block text-zinc-800 underline underline-offset-8 mb-4 text-2xl`} >
                    Interested in becoming a carer?{" "}
                </p>
                <p className={`md:block mb-3 text-2xl`}>
                    At NEMA home care we value staff development, offering 
                    free ongoing online training for all staff. We provide 
                    QCF levels 2 & 3 in health and social care. We’re committed 
                    to ensuring staff complete their care certification within 
                    the first 3 months of employment.
                </p>
            </div>
            <div>
                {CareersData.map((career, index) => (
                    <React.Fragment key={index}>
                        <Link href={`/careers/lvl${index + 1}`} className={`group`} >
                            <Career key={index} {...career} />
                        </Link>
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}
