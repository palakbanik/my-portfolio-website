import React from "react";
import { cn } from "@/lib/utils";

export default function SectionTitle({
    text,
    className,
}: {
    text: string;
    className?: string;
}) {
    return (
        <h1
            className={cn(
                "text-gradient font-bold text-center lg:text-[45px] capitalize",
                className,
            )}
        >
            {text}
        </h1>
    );
}
