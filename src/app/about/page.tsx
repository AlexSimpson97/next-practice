"use client";
import SectionHeading from "@/src/components/SectionHeading";
import { motion } from "framer-motion";
import Image from "next/image";
import { useSectionInView } from "@/src/lib/hooks";
import Squares from "@/public/squares.svg"

export default function About() {
    const  ref  = useSectionInView({sectionName:"About", threshold:0.9});
    return (
        <motion.section
            className={`ABOUT relative p-2 mb-24 md:mb-0 sm:p-0 text-zinc-700  w-[min(90%,60rem)] text-center leading-8 scroll-mt-28`}
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.6, delay: 0.45 }}
            id="about"
            ref={ref}
        >
            <SectionHeading route="about" className={`font-normal text-4xl`}>
                About NEMA
            </SectionHeading>
            <p className={`hidden md:contents mb-3 text-2xl`}>
                NEMA Home Care is dedicated to providing exceptional, 
                personalized care services right in the comfort of your 
                own home. Our wide range of services includes Personal 
                Care, Supported Living, Dementia/Alzheimer’s Care, 
                Domestic Tasks Assistance, Outreach Support, and 
                Palliative Care. Our team of dedicated professionals 
                is committed to enhancing your quality of life, 
                ensuring your comfort, safety, and independence
            </p>
            <p className={`text-2xl`} >
                We tailor our services to meet your unique needs and 
                preferences, providing you with the support you need 
                when you need it. Experience the NEMA difference today 
                and rediscover the joy of living at home.
            </p>
            <Image src={Squares} alt={"Background Squares"} priority={true} className={`opacity-50 xs:hidden absolute -z-[10] top-[-10.7rem] right-[-47.5rem] max-w-full object-contain`} />
            <Image src={Squares} alt={"Background Circles"}  priority={true} className={`rotate-180 opacity-50 xs:hidden absolute -z-[10] top-[-10.625rem] left-[-57.5rem] max-w-full object-contain`} />
            
        </motion.section>
    );
}

{
    /* <p classNameName={`mb-3`} >
Experience the warmth of <span classNameName={`font-medium hover:scale-150`} >personalized</span> care with NEMA Homecare. Our dedicated team, <span classNameName={`italic`} >available 24/7</span>, is committed to providing you with the <span classNameName={`font-medium underline hover:scale-100`} >highest</span> quality of home health services.
</p>
<p >
With NEMA Homecare, feel secure and cherished in the comfort of your own home
</p> */
}

{
    /* <div classNameName={`absolute`} >
<div >
    <div classNameName={`grid grid-cols-1 max-w-[45rem] gap-2 mt-12 sm:grid-cols-3 lg:mt-1 `} >
        <a classNameName={`transition-all  duration-1000 bg-zinc-100 hover:bg-green-50  hover:shadow-xl m-2 p-4 relative z-40 group`} >
            <div classNameName={`absolute bg-green-500/50 top-0 left-0 w-24 h-1 z-30 transition-all group-hover:bg-zinc-50 group-hover:w-1/2`} >
                <div classNameName={`py-2 px-9 relative`} >
                <h3 classNameName={`mt-8 text-lg font-semibold text-zinc-900 group-hover:text-zinc-600 `} >
                    Personal Care
                </h3>
                <p classNameName={`mt-4 text-base text-zinc-600 group-hover:text-zinc-400`} >
                Experience the warmth of personalized care with NEMA. We provide top-notch personal care services tailored to your unique needs. Our dedicated team ensures your comfort and well-being are our top priority. Rediscover independence and joy in the comfort of your own home with us.
                </p>
                
                </div>
            </div>
        </a>
    </div>
</div>
</div> */
}
