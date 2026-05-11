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
                "lg:text-sm font-normal leading-normal tracking-wide text-pb-white",
                className,
            )}
        >
            {children}
        </p>
    );
}
