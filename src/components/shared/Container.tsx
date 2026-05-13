import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export default function Container({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <div className={cn("w-full max-w-[1320px] mx-auto px-4 sm:px-8", className)}>
            {children}
        </div>
    );
}
