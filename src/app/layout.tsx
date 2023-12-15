import type { Metadata } from 'next';
import './globals.css';

import localFont from "next/font/local";
import Header from '@/components/Header';

const monoDrip = localFont({
    src: [
        {
            path: "../../public/webfonts/Gelion/Gelion Thin.ttf",
            weight: "300",
            style: "normal",
        },

        {
            path: "../../public/webfonts/Gelion/Gelion Light.ttf",
            weight: "400",
            style: "normal",
        },

        {
            path: "../../public/webfonts/Gelion/Gelion Regular.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/webfonts/Gelion/Gelion Medium.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../../public/webfonts/Gelion/Gelion SemiBold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../../public/webfonts/Gelion/Gelion Bold.ttf",
            weight: "800",
            style: "normal",
        },
        {
            path: "../../public/webfonts/Gelion/Gelion Black.ttf",
            weight: "900",
            style: "normal",
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
    <html lang="en">
      <body className={`${monoDrip.className} bg-zinc-200 text-zinc-900 relative h-[5000px]`}>
        <div className={`bg-[#fbe2e3] absolute -z-[10] top-[-6rem] right-[11rem] h-[31.25rem] w-[35.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]`} ></div>
        <div className={`bg-[#dbd7fb] absolute -z-[10] top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]`} ></div>
        <Header />
        {children}
        </body>
    </html>
  )
}
