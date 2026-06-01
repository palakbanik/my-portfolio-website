"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Dropdown({
    data,
    className,
}: {
    data: string[];
    className?: string;
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative z-10">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "w-full flex items-center justify-between bg-pb-body rounded-lg px-[20px] py-[12px] text-[14px] sm:text-[16px] border border-pb-grey-2 outline-none resize-none cursor-pointer",
                    className,
                )}
            >
                <span>Choose Service</span>
                <IoIosArrowDown
                    size={20}
                    className={`duration-500 transition-all ${isOpen ? "rotate-180" : ""}`}
                />
            </button>

            <ul
                className={`w-full max-w-50 h-auto py-1.5 bg-pb-white rounded-lg overflow-hidden text-pb-black absolute top-8 left-0 ${isOpen ? "opacity-100 translate-y-3 visible" : "opacity-0 invisible"} duration-500 transition-all ease`}
            >
                {data.map((option, idx) => (
                    <li
                        key={idx}
                        onClick={() => setIsOpen(!isOpen)}
                        className={`px-3 py-1.5 bg-pb-white text-[14px] font-medium cursor-pointer `}
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    );
}
