import { cn } from "@/lib/utils";
import React, { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: string;
    className?: string;
    placeholder?: string;
}

export default function Textarea({
    className,
    error,
    placeholder,
    name = "message",
    ...props
}: TextareaProps) {
    return (
        <div>
            <textarea
                rows={7}
                name={name}
                placeholder={placeholder}
                className={cn(
                    "w-full bg-pb-body rounded-lg px-[20px] py-[12px] text-[14px] sm:text-[16px] border border-pb-grey-2 outline-none resize-none focus:border-pb-theme-primary duration-500 ease transition-colors",
                    className,
                )}
                {...props}
            />

            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
    );
}
