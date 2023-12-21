"use client"
import React, {
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";

interface Dimensions {
    width: number;
    height: number;
}

const DimensionsContext = createContext<Dimensions>({ width: 0, height: 0 });

export const useDimensionsContext = () => useContext(DimensionsContext);

import { ReactNode } from "react";

export const DimensionsProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    // Your existing code here

    const ref = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState<Dimensions>({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        if (ref.current) {
            const { current } = ref;
            const boundingRect = current.getBoundingClientRect();
            const { width, height } = boundingRect;
            setDimensions({
                width: Math.round(width),
                height: Math.round(height),
            });
        }
    }, [ref, dimensions]);

    return (
        <DimensionsContext.Provider value={dimensions}>
            <main ref={ref} className="flex flex-col items-center px-4">
                {children}
            </main>
        </DimensionsContext.Provider>
    );
};
