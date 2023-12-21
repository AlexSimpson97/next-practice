"use client";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";

export default function Services() {
    return (
        <motion.section
            className={`mb-28 max-w-[80rem] text-center leading-8 sm:mb-40 scroll-mt-28`}
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.6, delay: 0.45 }}
        >
            <SectionHeading className={`font-normal text-4xl`}>
                About NEMA
            </SectionHeading>
            <div className={"px-6 xl:px-0"}>
                <div className={"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-6 gap-x-16 gap-y-24"} >
                    <div className={"CardGroupContainer w-[360px] h-[426px] flex-col justify-center items-center inline-flex group"} >
                        <div className="CardGroup w-[360px] h-[426px] relative hover:HindCard" >
                            <div className={"ForeCard w-[360px] h-[426px] z-10 left-0 top-0 absolute bg-white bg-opacity-30 rounded-tr-[60px] rounded-bl-[60px] rounded-br-[60px] shadow border border-white border-opacity-50 backdrop-blur-2xl"} >
                                <div className={`p-5`} >
                                    <h1 className="p-2 mb-5 text-2xl font-semibold">
                                            Personal care
                                    </h1>
                                    <div className="my-5">
                                        <p >
                                                Experience the warmth of personalized care
                                                with NEMA. We provide top-notch
                                                personal care services tailored to your
                                                unique needs. Our dedicated team ensures
                                                your comfort and well-being are our top
                                                priority. Rediscover independence and joy in
                                                the comfort of your own home with us.
                                        </p>
                                    </div>
                                    <a 
                                        className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center"
                                        href="javascript:void(0)" >
                                        <p>Learn More</p>
                                        <div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="group-hover:translate-x-1 transition-all duration-700 icon icon-tabler icon-tabler-arrow-narrow-right"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="#4338CA"
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path
                                                    stroke="none"
                                                    d="M0 0h24v24H0z"stage
                                                    fill="none"
                                                />
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                                <line x1="15" y1="16" x2="19" y2="12" />
                                                <line x1="15" y1="8" x2="19" y2="12" />
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className={"HindCard transition-all duration-700 ease-custom w-[360px] z-20 h-[426px] origin-top-left  bg-gradient-to-b from-green-200 to-sky-500 rounded-tr-[60px] rounded-bl-[60px] rounded-br-[60px] backdrop-blur-2xl md:group-hover:skew-x-[10deg] md:group-hover:skew-y-[-20deg] md:group-hover:translate-y-[-3px] md:group-hover:scale-x-[0.8]"} >
                            </div>
                        </div>
                    </div>
                    <div className={"CardGroupContainer w-[360px] h-[426px] flex-col justify-center items-center inline-flex group"} >
                        <div className="CardGroup w-[360px] h-[426px] relative hover:HindCard" >
                            <div className={"ForeCard w-[360px] h-[426px] z-10 left-0 top-0 absolute bg-white bg-opacity-30 rounded-tr-[60px] rounded-bl-[60px] rounded-br-[60px] shadow border border-white border-opacity-50 backdrop-blur-2xl"} >
                                <div className={`p-5`} >
                                    <h1 className="p-2 mb-5 text-2xl font-semibold">
                                            Supported Living
                                    </h1>
                                    <div className="my-5">
                                        <p >
                                            Rediscover the joy of independence with our Care 
                                            Company’s Supported Living services. We provide 
                                            personalized assistance tailored to your lifestyle, 
                                            ensuring you can live comfortably and confidently 
                                            in your own home. Our dedicated team is committed 
                                            to enhancing your quality of life every day.
                                        </p>
                                    </div>
                                    <a 
                                        className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center"
                                        href="javascript:void(0)" >
                                        <p>Learn More</p>
                                        <div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="group-hover:translate-x-1 transition-all duration-700 icon icon-tabler icon-tabler-arrow-narrow-right"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="#4338CA"
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path
                                                    stroke="none"
                                                    d="M0 0h24v24H0z"
                                                    fill="none"
                                                />
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                                <line x1="15" y1="16" x2="19" y2="12" />
                                                <line x1="15" y1="8" x2="19" y2="12" />
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className={"HindCard transition-all duration-700 ease-custom w-[360px] z-20 h-[426px] origin-top-left md:group-hover:rotate-[-8.25deg] bg-gradient-to-b from-sky-200 to-green-500 rounded-tr-[60px] rounded-bl-[60px] rounded-br-[60px] backdrop-blur-2xl md:group-hover:transform md:group-hover:skew-x-10 md:group-hover:skew-y-20 md:group-hover:translate-y-[-3px] md:group-hover:scale-x-80"} >
                            </div>
                        </div>
                    </div>
                    <div className={"CardGroupContainer  flex-col justify-center items-center inline-flex group"} >
                        <div className="CardGroup w-[360px] h-[426px] relative hover:HindCard" >
                            <div className={"ForeCard w-[360px] h-[426px] z-10 left-0 top-0 absolute bg-white bg-opacity-30 rounded-tl-[60px] rounded-br-[60px] rounded-bl-[60px] shadow border border-white border-opacity-50 backdrop-blur-2xl"} >
                                <div className={`p-5`} >
                                    <h1 className="p-2 mb-5 text-2xl font-semibold">
                                            Dementia/Alzheimers
                                    </h1>
                                    <div className="my-5">
                                        <p >
                                            Experience compassionate and specialized Dementia
                                            /Alzheimer’s care with NEMA. Our dedicated 
                                            team is trained to provide personalized care and support, 
                                            ensuring comfort, safety, and dignity for your loved ones. 
                                            We’re committed to making every day meaningful in the journey 
                                            of memory loss.
                                        </p>
                                    </div>
                                    <a 
                                        className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center"
                                        href="javascript:void(0)" >
                                        <p>Learn More</p>
                                        <div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="group-hover:translate-x-1 transition-all duration-700 icon icon-tabler icon-tabler-arrow-narrow-right"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="#4338CA"
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path
                                                    stroke="none"
                                                    d="M0 0h24v24H0z"
                                                    fill="none"
                                                />
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                                <line x1="15" y1="16" x2="19" y2="12" />
                                                <line x1="15" y1="8" x2="19" y2="12" />
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className={"HindCard transition-all duration-700 ease-custom w-[360px] z-20 h-[426px] origin-top-right  bg-gradient-to-b from-green-200 to-sky-500 rounded-tl-[60px] rounded-br-[60px] rounded-bl-[60px] backdrop-blur-2xl md:group-hover:skew-x-[-10deg] md:group-hover:skew-y-[20deg] md:group-hover:translate-y-[-3px] md:group-hover:scale-x-[0.8]"} >
                            </div>
                        </div>
                    </div>
                    <div className={"CardGroupContainer w-[360px] h-[426px] flex-col justify-center items-center inline-flex group"} >
                        <div className="CardGroup w-[360px] h-[426px] relative hover:HindCard" >
                            <div className={"ForeCard w-[360px] h-[426px] z-10 left-0 top-0 absolute bg-white bg-opacity-30 rounded-tr-[60px] rounded-bl-[60px] rounded-br-[60px] shadow border border-white border-opacity-50 backdrop-blur-2xl"} >
                                <div className={`p-5`} >
                                    <h1 className="p-2 mb-5 text-2xl font-semibold">
                                            Outreach Support
                                    </h1>
                                    <div className="my-5">
                                        <p >
                                            Experience the power of community with 
                                            NEMA’s Outreach Support. We 
                                            connect you with essential services and 
                                            resources, fostering a sense of belonging 
                                            and well-being. Our dedicated team is 
                                            committed to empowering you to live a 
                                            fulfilling and independent life within 
                                            your community.
                                        </p>
                                    </div>
                                    <a 
                                        className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center"
                                        href="javascript:void(0)" >
                                        <p>Learn More</p>
                                        <div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="group-hover:translate-x-1 transition-all duration-700 icon icon-tabler icon-tabler-arrow-narrow-right"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="#4338CA"
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path
                                                    stroke="none"
                                                    d="M0 0h24v24H0z"
                                                    fill="none"
                                                />
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                                <line x1="15" y1="16" x2="19" y2="12" />
                                                <line x1="15" y1="8" x2="19" y2="12" />
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className={"HindCard transition-all duration-700 ease-custom w-[360px] z-20 h-[426px] origin-top-left  bg-gradient-to-b from-sky-200 to-green-500 rounded-tr-[60px] rounded-bl-[60px] rounded-br-[60px] backdrop-blur-2xl md:group-hover:skew-x-[10deg] md:group-hover:skew-y-[-20deg] md:group-hover:translate-y-[-3px] md:group-hover:scale-x-[0.8]"} >
                            </div>
                        </div>
                    </div>
                    <div className={"CardGroupContainer w-[360px] h-[426px] flex-col justify-center items-center inline-flex group"} >
                        <div className="CardGroup w-[360px] h-[426px] relative hover:HindCard" >
                            <div className={"ForeCard w-[360px] h-[426px] z-10 left-0 top-0 absolute bg-white bg-opacity-30 rounded-tr-[60px] rounded-bl-[60px] rounded-br-[60px] shadow border border-white border-opacity-50 backdrop-blur-2xl"} >
                                <div className={`p-5`} >
                                    <h1 className="p-2 mb-5 text-2xl font-semibold">
                                            Supported Living
                                    </h1>
                                    <div className="my-5">
                                        <p >
                                            Rediscover the joy of independence with our Care 
                                            Company’s Supported Living services. We provide 
                                            personalized assistance tailored to your lifestyle, 
                                            ensuring you can live comfortably and confidently 
                                            in your own home. Our dedicated team is committed 
                                            to enhancing your quality of life every day.
                                        </p>
                                    </div>
                                    <a 
                                        className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center"
                                        href="javascript:void(0)" >
                                        <p>Learn More</p>
                                        <div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="group-hover:translate-x-1 transition-all duration-700 icon icon-tabler icon-tabler-arrow-narrow-right"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="#4338CA"
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path
                                                    stroke="none"
                                                    d="M0 0h24v24H0z"
                                                    fill="none"
                                                />
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                                <line x1="15" y1="16" x2="19" y2="12" />
                                                <line x1="15" y1="8" x2="19" y2="12" />
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className={"HindCard transition-all duration-700 ease-custom w-[360px] z-20 h-[426px] origin-top-left md:group-hover:rotate-[-8.25deg] bg-gradient-to-b from-green-200 to-sky-500 rounded-tr-[60px] rounded-bl-[60px] rounded-br-[60px] backdrop-blur-2xl md:group-hover:transform md:group-hover:skew-x-10 md:group-hover:skew-y-20 md:group-hover:translate-y-[-3px] md:group-hover:scale-x-80"} >
                            </div>
                        </div>
                    </div>
                    <div className={"CardGroupContainer  flex-col justify-center items-center inline-flex group"} >
                        <div className="CardGroup w-[360px] h-[426px] relative hover:HindCard" >
                            <div className={"ForeCard w-[360px] h-[426px] z-10 left-0 top-0 absolute bg-white bg-opacity-30 rounded-tl-[60px] rounded-br-[60px] rounded-bl-[60px] shadow border border-white border-opacity-50 backdrop-blur-2xl"} >
                                <div className={`p-5`} >
                                    <h1 className="p-2 mb-5 text-2xl font-semibold">
                                            Pallative Care
                                    </h1>
                                    <div className="my-5">
                                        <p >
                                            Experience compassionate Palliative Care 
                                            with NEMA. We provide personalized, 
                                            holistic care designed to alleviate discomfort 
                                            and improve quality of life for those facing 
                                            serious illness. Our dedicated team is committed 
                                            to providing comfort, dignity, and peace in every 
                                            stage of your journey.
                                        </p>
                                    </div>
                                    <a 
                                        className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center"
                                        href="javascript:void(0)" >
                                        <p>Learn More</p>
                                        <div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="group-hover:translate-x-1 transition-all duration-700 icon icon-tabler icon-tabler-arrow-narrow-right"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="#4338CA"
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path
                                                    stroke="none"
                                                    d="M0 0h24v24H0z"
                                                    fill="none"
                                                />
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                                <line x1="15" y1="16" x2="19" y2="12" />
                                                <line x1="15" y1="8" x2="19" y2="12" />
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className={"HindCard transition-all duration-700 ease-custom w-[360px] z-20 h-[426px] origin-top-right  bg-gradient-to-b from-sky-200 to-green-500 rounded-tl-[60px] rounded-br-[60px] rounded-bl-[60px] backdrop-blur-2xl md:group-hover:skew-x-[-10deg] md:group-hover:skew-y-[20deg] md:group-hover:translate-y-[-3px] md:group-hover:scale-x-[0.8]"} >
                            </div>
                        </div>
                    </div>
                </div>
            </div>


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
