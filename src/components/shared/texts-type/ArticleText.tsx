import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export default function ArticleText({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <article
            className={cn(
                "lg:text-[16px] font-normal leading-normal tracking-wide text-pb-white",
                className,
            )}
        >
            {children}
        </article>
    );
}
