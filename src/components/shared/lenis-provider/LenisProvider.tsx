"use client";

import Lenis from "lenis";
import React, { ReactNode, useEffect } from "react";

export default function LenisProvider({ children }: { children: ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.05,
            duration: 2, // animation duration
            smoothWheel: true,
            infinite: false, // disable infinite scroll
            autoResize: true, // auto resize on window resize
            syncTouch: true, // better for performance on mobile
            touchMultiplier: 1, // touch sensitive
        });

        function raf(time: number) {
            lenis.raf(time);

            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
