"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import React, { ReactNode, useEffect } from "react";

export default function LenisProvider({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.05,
            duration: 1.6,
            smoothWheel: true,
            autoResize: true,
            syncTouch: true,
            touchMultiplier: 5,
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
