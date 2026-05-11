import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export default function SubText({
    children,
    className,
}: {
    children: ReactNode;
    className: string;
}) {
    return <h3 className={cn("", className)}>{children}</h3>;
}
