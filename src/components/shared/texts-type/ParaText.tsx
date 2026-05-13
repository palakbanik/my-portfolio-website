import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export default function ParaText({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <p
            className={cn(
                "text-[16px] sm:text-[18px] font-light md:font-normal leading-normal md:leading-relaxed tracking-normal md:tracking-wide  text-pb-white",
                className,
            )}
        >
            {children}
        </p>
    );
}
