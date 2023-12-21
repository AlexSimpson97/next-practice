"use client"
import { createContext, useContext } from 'react';


// Provide a default value for the context
const defaultValue = 0;

export const ImageRenderContext = createContext<number | null>(null);

export function useImageRenderContext() {
    const context = useContext(ImageRenderContext);

    if (context === null) {
        throw new Error (
            "useActiveSectionContext must be used within an ActiveSectionContext Provider"
        );
    }

    return context;
}

