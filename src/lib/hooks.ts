"use client"
import { useActiveSectionContext } from "@/src/context/active-section-context";
import { useDimensionsContext } from "@/src/context/dimensions-context";
import { links } from "@/src/lib/data";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type SectionName = (typeof links)[number]["name"];
type useSectionInViewProps = {
    sectionName: SectionName;
    threshold?: number | number[];
};

export function useSectionInView({
    sectionName,
    threshold = 0.5,
}: useSectionInViewProps) {
    const { ref, inView } = useInView({
        threshold: threshold,
    });

    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(sectionName);
        }
    }, [inView, setActiveSection, sectionName, timeOfLastClick]);

    return ref;
}

export function useDimensions() {
    const dimensions = useDimensionsContext();
    const { width, height } = dimensions;

    return { width, height };
}
