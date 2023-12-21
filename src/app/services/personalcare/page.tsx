import Squares from "@/public/squares.svg";
import Image from "next/image";

export default function PersonalCare() {
    return (
        <div className="PSUEDOBODY TOPLEVEL h-auto  border border-transparent box-border overflow-visible pb-24  relative focus:outline-auto user-invalid:shadow-none disabled:cursor-default sm:pb-32 scroll-mt-64 ">
            <Image
                src={Squares}
                alt={"Background Squares"}
                priority={true}
                className={`opacity-50 xs:hidden absolute -z-[10] top-[19.7rem] right-[-35rem] max-w-full object-contain`}
            />
            <Image
                src={Squares}
                alt={"Background Circles"}
                priority={true}
                className={`rotate-180 opacity-50 xs:hidden absolute -z-[10] top-[19.7rem] left-[-45.5rem] max-w-full object-contain`}
            />
            <div
                className={`border-0 border-solid border-zinc-300 box-border filter blur-[64px] left-[calc(max(6rem,33%))] absolute top-[-20rem] transform matrix-1 z-[-10] sm:left-[50%] md:top-[5rem] lg:ml-[5rem] xl:ml-[14rem] xl:top-[0.75rem] focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                aria-hidden="true"
            >
                <div
                    className={`aspect-[801/1036] bg-gradient-to-tr from-[#BBDDF2] to-[#e9ffe7] border-0 border-solid border-zinc-300 box-border clip-[polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)] opacity-30 w-[50.0625rem] focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                    style={{
                        clipPath:
                            "polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)",
                    }}
                ></div>
            </div>
            <div
                className={`border-0 border-solid border-zinc-300 box-border mx-auto max-w-[80rem] px-[1.5rem] lg:px-[2rem] focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
            >
                <div
                    className={`border-0 border-solid border-zinc-300 box-border mx-auto max-w-[42rem] lg:mx-0 focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                >
                    <p
                        className={`border-0 border-solid border-zinc-300 box-border text-zinc-700 text-[1.125rem] font-semibold tracking-tighter leading-[2rem] m-0 focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                    >
                        We love to care
                    </p>
                    <h1
                        className={`border-0 border-solid border-zinc-300 box-border text-[rgb(17,24,39)] text-[1.875rem] font-extrabold tracking-tighter leading-[2.25rem] mt-[0.5rem] sm:text-[2.25rem] sm:leading-[2.5rem] focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                    >
                        Personal Care
                    </h1>
                    <p
                        className={`border-0 border-solid border-zinc-300 box-border text-[rgb(55,65,81)] text-[1.25rem] leading-[2rem] mt-[1.5rem] focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                    >
                        If you or your loved one needs support with personal
                        care we can provide solutions; designing personalized
                        care packages that will meet your all needs.
                    </p>
                </div>
                <div
                    className={`border-0 border-solid border-zinc-300 box-border gap-x-[2rem] gap-y-[4rem] grid grid-cols-1 mx-auto mt-[4rem] max-w-[42rem] lg:grid-cols-12 lg:mx-0 lg:mt-[2.5rem] lg:max-w-none focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                >
                    <div
                        className={`border-0 border-solid border-zinc-300 box-border relative lg:col-span-5 lg:order-[9999] focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                    >
                        <svg
                            className={`border-0 border-solid border-zinc-300 box-border block h-[64rem] left-[0.25rem] absolute stroke-[rgba(17,24,39,0.1)] -top-40 transform-matrix-1 align-middle w-[175.5rem] z-[-10] focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                            aria-hidden="true"
                        >
                            <defs
                                className={`border-0 border-solid border-zinc-300 box-border focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                            >
                                <pattern
                                    id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                                    width="200"
                                    height="200"
                                    patternUnits="userSpaceOnUse"
                                    className={`border-0 border-solid border-zinc-300 box-border focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                                >
                                    <path
                                        d="M0.5 0V200M200 0.5L0 0.499983"
                                        className={`border-0 border-solid border-zinc-300 box-border focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                                    ></path>
                                </pattern>
                            </defs>
                            <rect
                                width="100%"
                                height="100%"
                                strokeWidth="0"
                                fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)"
                                className={`border-0 border-solid border-zinc-300 box-border focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                            ></rect>
                        </svg>
                        <figure
                            className={`border-l border-[#4f46e5] box-border m-0 pl-[2rem] focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                        >
                            <blockquote
                                className={`border-0 border-solid border-zinc-300 box-border text-[rgb(17,24,39)] text-[1.25rem] font-semibold tracking-tighter leading-[2rem] m-0 focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                            >
                                <p
                                    className={`border-0 border-solid border-zinc-300 box-border m-0 focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                                >
                                    “Nema Home Care has been a lifeline for our
                                    family. Their Personal Care Service has
                                    allowed my father to maintain his
                                    independence while receiving the care he
                                    needs. We couldn’t be more grateful.”
                                </p>
                            </blockquote>
                            <figcaption
                                className={`border-0 border-solid border-zinc-300 box-border gap-x-[1rem] flex mt-[2rem] focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                            >
                                {/* <img
                                    src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                    alt=""
                                    className={`bg-[rgb(249,250,251)] border-0 border-solid border-zinc-300 rounded-full box-border block flex-auto h-[2.5rem] mt-[0.25rem] max-w-full align-middle w-[2.5rem] focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                                /> */}
                                <div
                                    className={`border-0 border-solid border-zinc-300 box-border text-[0.875rem] leading-[1.5rem] focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                                >
                                    <div
                                        className={`border-0 border-solid border-zinc-300 box-border text-[rgb(17,24,39)] font-semibold focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                                    >
                                        Sarah
                                    </div>
                                    <div
                                        className={`border-0 border-solid border-zinc-300 box-border text-[rgb(75,85,99)] focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                                    >
                                        (ex-client&apos;s daughter)
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                    <div
                        className={`border-0 border-solid border-zinc-300 box-border text-[rgb(55,65,81)] text-base leading-[1.75rem] max-w-[36rem] lg:col-span-7 focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                    >
                        <p
                            className={`border-0 border-solid border-zinc-300 box-border m-0 focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                        >
                            Assisting someone with personal care tasks can be
                            difficult therefore knowing how to provide adequate
                            support will make things easier.
                        </p>
                        <ul
                            role="list"
                            className={`border-0 border-solid border-zinc-300 box-border text-[rgb(75,85,99)] list-none mt-[2rem] max-w-[36rem] p-0 focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                        >
                            <li
                                className={`border-0 border-solid border-zinc-300 box-border gap-x-[0.75rem] flex focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                            >
                                {/* <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className={`border-0 border-solid border-zinc-300 box-border text-[rgb(79,70,229)] block flex-auto h-[1.25rem] mt-[0.25rem] align-middle w-[1.25rem] focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                                        clip-rule="evenodd"
                                        className={`border-0 border-zinc-300 box-border focus:outline-current shadow-none disabled:cursor-default`}
                                    ></path>
                                </svg> */}
                                <span
                                    className={`border-0 border-solid border-zinc-300 box-border focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                                >
                                    <strong
                                        className={`border-0 border-solid border-zinc-300 box-border text-[rgb(17,24,39)] font-semibold focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                                    >
                                        Experience Personalized Care with Nema
                                        Home Care
                                    </strong>{" "}
                                    {"..."}
                                    At Nema Home Care, we believe that everyone
                                    deserves to receive care in the comfort and
                                    familiarity of their own home. Our Personal
                                    Care Service is designed to support your
                                    independence, cater to your individual
                                    needs, and enhance your quality of life. Our
                                    team of dedicated professionals is committed
                                    to providing the highest level of home care
                                    services, tailored to meet your unique
                                    requirements.
                                </span>
                            </li>
                            <li
                                className={`border-0 border-solid border-zinc-300 box-border gap-x-[0.75rem] flex focus:outline-auto user-invalid:shadow-none disabled:cursor-default mb-0 mt-2`}
                            >
                                {/* <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className={`border-0 border-solid border-zinc-300 box-border text-[rgb(79,70,229)] block flex-auto h-[1.25rem] mt-[0.25rem] align-middle w-[1.25rem] focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                                        clip-rule="evenodd"
                                        className={`border-0 border-zinc-300 box-border focus:outline-current shadow-none disabled:cursor-default`}
                                    ></path>
                                </svg> */}
                                <span
                                    className={`border-0 border-solid border-zinc-300 box-border focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                                >
                                    <strong
                                        className={`border-0 border-zinc-300 box-border text-zinc-900 font-semibold focus:outline-current shadow-none disabled:cursor-default`}
                                    >
                                        A Partner You Can Trust
                                    </strong>{" "}
                                    We understand that entrusting your care or
                                    the care of a loved one to others is a
                                    significant decision. That’s why at Nema
                                    Home Care, we prioritize building strong
                                    relationships based on trust, respect, and
                                    compassion. Our highly trained caregivers
                                    are not just experts in providing
                                    comprehensive personal care; they’re also
                                    passionate about making a positive
                                    difference in the lives of those they serve.
                                </span>
                            </li>
                            <li
                                className={`border-0 border-zinc-300 box-border space-x-3 flex focus:outline-current shadow-none disabled:cursor-default mb-0 mt-2`}
                            >
                                {/* <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="LIST-ITEM-1-SVG"
                                >
                                    <path
                                        d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z"
                                        className={`border-0 border-zinc-300 box-border focus:outline-current shadow-none disabled:cursor-default`}
                                    ></path>
                                    <path
                                        fill-rule="evenodd"
                                        d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z"
                                        clip-rule="evenodd"
                                        className={`border-0 border-zinc-300 box-border focus:outline-current shadow-none disabled:cursor-default`}
                                    ></path>
                                </svg> */}
                                <span
                                    className={`focus:outline-current shadow-none disabled:cursor-default`}
                                >
                                    <strong
                                        className={`border-0 border-solid border-zinc-300 box-border text-[rgb(17,24,39)] font-semibold focus:outline-auto user-invalid:shadow-none disabled:cursor-default`}
                                    >
                                        Embrace a Better Tomorrow with Nema Home
                                        Care
                                    </strong>{" "}
                                    With Nema Home Care, you’re not just getting
                                    a service; you’re joining a community that
                                    values your well-being and dignity. Our
                                    Personal Care Service is more than just
                                    assistance with daily tasks; it’s about
                                    empowering you to live your life to the
                                    fullest, in the place you love the most.
                                    Experience the Nema Home Care difference
                                    today and embrace a brighter, healthier
                                    tomorrow.
                                </span>
                            </li>
                        </ul>
                        <p
                            className={`border-0 border-zinc-300 box-border mt-8 focus:outline-current shadow-none disabled:cursor-default`}
                        ></p>
                        <h2
                            className={`border-0 border-zinc-300 box-border text-zinc-900 text-3xl font-extrabold tracking-tighter leading-8 mt-16 focus:outline-current shadow-none disabled:cursor-default`}
                        >
                            Unsure? No problem.
                        </h2>
                        <p
                            className={`border-0 border-zinc-300 box-border mt-6 focus:outline-current shadow-none disabled:cursor-default`}
                        >
                            Unsure if you we're right for you? Don’t worry!
                            We’re here to help guide you. Our team is committed
                            to helping you create an equisite personalised care
                            package. Reach out to us, and let’s embark on this
                            rewarding journey together.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
