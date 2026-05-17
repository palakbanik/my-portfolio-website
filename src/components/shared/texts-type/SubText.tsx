import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export default function SubText({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <h3
            className={cn(
                "text-[18px] sm:text-[20px] md:text-[25px] font-bold leading-[1.2] text-pb-white",
                className,
            )}
        >
            {children}
        </h3>
    );
}
