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
                "text-[16px] sm:text-[18px] font-light md:font-normal leading-normal md:leading-relaxed tracking-normal md:tracking-wide text-pb-white/80",
                className,
            )}
        >
            {children}
        </article>
    );
}
