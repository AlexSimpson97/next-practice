export default function Footer() {
    return (
        <footer className="text-zinc-600 body-font">
            <div className="container px-5 py-5 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-zinc-900">
                        {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg> */}
                        <span className=" text-xl">Nema Home Care</span>
                    </a>
                    <div >
                        <p className="text-zinc-500 text-sm text-center sm:text-left">Epping District</p>
                        <p className="">48 Station Way,</p>
                        <p className="">Buckhurst Hill,</p>
                        <p className="">Essex. IG9 6LN </p>
                        <p className="">&nbsp;</p>
                    </div>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-zinc-900 tracking-widest text-sm mb-3">
                            Home
                        </h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a href="#about" className="text-zinc-600 hover:text-zinc-800">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="text-zinc-600 hover:text-zinc-800">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#careers" className="text-zinc-600 hover:text-zinc-800">
                                    Careers
                                </a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-zinc-900 tracking-widest text-sm mb-3">
                            Services
                        </h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a href="/services/personalcare" className="text-zinc-600 hover:text-zinc-800">
                                    Personal Care
                                </a>
                            </li>
                            <li>
                                <a href="/services/supportedliving" className="text-zinc-600 hover:text-zinc-800">
                                    Supported Living
                                </a>
                            </li>
                            <li>
                                <a href="/services/pallativecare" className="text-zinc-600 hover:text-zinc-800">
                                    Pallative Care
                                </a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-zinc-900 tracking-widest text-sm mb-3">
                            Careers
                        </h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-zinc-600 hover:text-zinc-800">
                                    QCF Level 1
                                </a>
                            </li>
                            <li>
                                <a className="text-zinc-600 hover:text-zinc-800">
                                    QCF Level 2
                                </a>
                            </li>
                            <li>
                                <a className="text-zinc-600 hover:text-zinc-800">
                                    QCF Level 3
                                </a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-zinc-900 tracking-widest text-sm mb-3">
                            Web Policy
                        </h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-zinc-600 hover:text-zinc-800">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a className="text-zinc-600 hover:text-zinc-800">
                                    Terms and Conditions
                                </a>
                            </li>
                            <li>
                                <a className="text-zinc-600 hover:text-zinc-800">
                                    Cookies Policy
                                </a>
                            </li>
                            <li>
                                <a className="text-zinc-600 hover:text-zinc-800">
                                    Fourth Link
                                </a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-zinc-200">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col justify-center items-center sm:flex-row">
                    <p className="text-zinc-500 text-sm text-center sm:text-left">
                        © 2023 Nema HomeCare —
                        <a
                            href="https://twitter.com/knyttneve"
                            rel="noopener noreferrer"
                            className="text-zinc-600 ml-1"
                            target="_blank"
                        >
                            @nemahomecare
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
