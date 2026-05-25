"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import React, { ReactNode, useEffect } from "react";

export default function LenisProvider({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.4,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            autoResize: true,
            touchMultiplier: 1.5,
            syncTouch: false,
        });
        lenis.scrollTo(0, { immediate: true });

        let rafId: number;

        function raf(time: number) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, [pathname]);

    return <>{children}</>;
}
