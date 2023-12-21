import type { Metadata } from 'next';
import './globals.css';

import localFont from "next/font/local";
import Header from '@/src/components/Header';
import Image from 'next/image';
import Squares from "@/public/squares.svg";
import Waves from "@/public/wavelines.svg";
import Waves2 from "@/public/wavelines2.svg";
import Circles from "@/public/circles.svg";
import ActiveSectionContextProvider from '../context/active-section-context';
import Footer from "@/src/components/Footer"

const monoDrip = localFont({
    src: [
        {
            path: "../../public/webfonts/Gelion/Gelion Thin.ttf",
            weight: "100",
            style: "normal",
        },
        {
            path: "../../public/webfonts/Gelion/Gelion Thin Italic.ttf",
            weight: "100",
            style: "italic",
        },
        {
            path: "../../public/webfonts/Gelion/Gelion Light.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../../public/webfonts/Gelion/Gelion Light Italic.ttf",
            weight: "300",
            style: "italic",
        },
        {
          path: "../../public/webfonts/Gelion/Gelion Regular.ttf",
          weight: "400",
          style: "normal",
        },
        {
          path: "../../public/webfonts/Gelion/Gelion Regular Italic.ttf",
          weight: "400",
          style: "italic",
        },
        {
            path: "../../public/webfonts/Gelion/Gelion Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/webfonts/Gelion/Gelion Medium Italic.ttf",
            weight: "500",
            style: "italic",
        },
        {
            path: "../../public/webfonts/Gelion/Gelion SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../../public/webfonts/Gelion/Gelion SemiBold Italic.ttf",
            weight: "600",
            style: "italic",
        },
        {
            path: "../../public/webfonts/Gelion/Gelion Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../../public/webfonts/Gelion/Gelion Bold Italic.ttf",
            weight: "700",
            style: "italic",
        },
        {
            path: "../../public/webfonts/Gelion/Gelion Black.ttf",
            weight: "900",
            style: "normal",
        },
        {
            path: "../../public/webfonts/Gelion/Gelion Black Italic.ttf",
            weight: "900",
            style: "italic",
        },
    ],
    variable: '--font-monoDrip',
});

export const metadata: Metadata = {
  title: 'NEMA DEMO',
  description: 'NEMA HomeCare is a home health agency that provides skilled nursing, physical therapy, occupational therapy, speech therapy, medical social worker, and home health aide services.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"className={`!scroll-smooth`} >
      <body className={` flex flex-col items-center ${monoDrip.className} bg-zinc-200 text-zinc-900 relative md:max-w-[1920px] pt-28 sm:pt-36`}>
        <div className={`bg-[#BBDDF2] absolute -z-[10] top-[-6rem] right-[11rem] h-[31.25rem] w-[35.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]`} ></div>
        <div className={`bg-[#e9ffe7] absolute -z-[10] top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]`} ></div>
        {/* <Image src={Squares} alt={"Background Squares"} priority={true} className={`opacity-50 xs:hidden absolute -z-[10] top-[40rem] right-[-18rem] max-w-full object-contain`} />
        <Image src={Squares} alt={"Background Circles"}  priority={true} className={`rotate-180 opacity-50 xs:hidden absolute -z-[10] top-[40rem] left-[-28rem] max-w-full object-contain`} /> */}
        {/* <Image src={Waves} alt={"Background Waves"} priority={true} className={`opacity-80 xs:hidden absolute -z-[10] top-[82.1rem] right-[-1.6rem] max-w-full object-contain`} /> */}
        {/* <Image src={Waves2} alt={"Background Waves"} priority={true} className={`opacity-90 w-[60rem] xs:hidden absolute -z-[10] top-[164rem] right-[-0.4rem] max-w-full object-contain`} />
        <Image src={Waves2} alt={"Background Waves"} priority={true} className={`rotate-180 w-[60rem] opacity-90 xs:hidden absolute -z-[10] top-[164rem] left-[-0.7rem] max-w-full object-contain`} /> */}
        {/* <Image src={Waves2} alt={"Background Waves"} priority={true} className={`opacity-90 w-[60rem] xs:hidden absolute -z-[10] top-[164rem] right-[-0.4rem] max-w-full object-contain`} />
        <Image src={Waves2} alt={"Background Waves"} priority={true} className={`rotate-180 w-[60rem] opacity-90 xs:hidden absolute -z-[10] top-[164rem] left-[-0.7rem] max-w-full object-contain`} /> */}
        {/* <Image src={Circles} alt={"Background Waves"} priority={true} className={`w-[50rem] opacity-90 xs:hidden absolute -z-[10] top-[255.7rem] left-[-20.3rem] max-w-full object-contain`} />
        <Image src={Circles} alt={"Background Waves"} priority={true} className={`w-[37.5rem] opacity-90 xs:hidden absolute -z-[10] top-[295.7rem] right-[-20.3rem] max-w-full object-contain`} /> */}
        <ActiveSectionContextProvider >
          <Header />
          {children}
          <Footer />
        </ActiveSectionContextProvider>

        </body>
    </html>
  )
}
