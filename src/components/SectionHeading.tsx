import Link from "next/link";

type SectionHeadingProps = {
    children: React.ReactNode;
    route: string;
    className?: string;
};

export default function SectionHeading({ children, route }: SectionHeadingProps) {
    return (
        <>
            <Link href={route}>
                <h2
                    className={`animate-pulse hover:scale-105 hover:opacity-100 ease-cubic text-3xl underline underline-offset-8 text-zinc-800 font-medium capitalize mb-10 text-center`}
                >
                    {children}
                </h2>
            </Link>
        </>
    );
}

// underline underline-offset-8
{
    /* <h2 className={`animate-pulse ease-cubic text-3xl text-zinc-700 font-medium capitalize mb-10 text-center`} >
{ children }
</h2> */
}
