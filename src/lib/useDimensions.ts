"use client";
import { useDimensionsContext } from "@/src/context/dimensions-context";

const useDimensions = () => {
    const dimensions = useDimensionsContext();
    const { width, height } = dimensions;

    return height;
};

export default useDimensions;
