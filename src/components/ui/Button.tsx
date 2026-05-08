import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import { IconType } from "react-icons";

type BtnType = "button" | "reset" | "submit";
type BtnVariant = "default" | "outline";

const btnVariants: Record<BtnVariant, string> = {
    default:
        "text-pb-white bg-linear-to-r from-pb-theme-primary to-pb-theme-secondary hover:from-pb-theme-secondary hover:to-pb-theme-primary transition-colors",

    outline: "border border-pb-theme-primary text-pb-white",
};

interface ButtonProps {
    children: ReactNode;
    className?: string;
    type?: BtnType;
    variant?: BtnVariant;
    Icon?: IconType;
    iconClassName?: string;
}

export default function Button({
    children,
    className = "",
    type = "button",
    variant = "outline",
    Icon,
    iconClassName = "",
}: ButtonProps) {
    return (
        <button
            type={type}
            className={cn(
                "group relative overflow-hidden rounded-full font-bold text-sm leading-normal tracking-wide capitalize cursor-pointer transition-all duration-500 px-6 py-3 inline-flex items-center justify-center gap-2",
                btnVariants[variant],
                className,
            )}
        >
            {variant === "outline" && (
                <span className="absolute inset-0 translate-y-full bg-pb-theme-primary transition-transform duration-500 ease-in-out group-hover:translate-y-0" />
            )}

            <span className="relative z-20">{children}</span>

            {Icon && (
                <span className={cn("relative z-20", iconClassName)}>
                    <Icon />
                </span>
            )}
        </button>
    );
}
