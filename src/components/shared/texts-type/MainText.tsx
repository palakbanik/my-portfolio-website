import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export default function MainText({
    children,
    className,
}: {
    children: ReactNode;
    className: string;
}) {
    return <h1 className={cn("", className)}>{children}</h1>;
}
